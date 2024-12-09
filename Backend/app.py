import gevent.monkey
gevent.monkey.patch_all()

from flask import Flask, render_template, request, url_for, jsonify
from flask_socketio import SocketIO
import requests
from threading import Thread
from pymongo import MongoClient
from flask_cors import CORS
import os
from bson import ObjectId
import json
from datetime import datetime , timedelta, timezone
import jwt as  pyjwt
from functools import wraps
# from twilio.rest import Client


class JSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return json.JSONEncoder.default(self, obj)
    
app = Flask(__name__)

os.environ['PASSWORD'] = '1234'
app.config['SECRET_KEY'] ='QY~\xd2\xa2\x82\x0eD\x8fB\x9f\xbb'
password = os.environ.get('PASSWORD')

CORS(app, supports_credentials=True, allow_headers="*", origins="*", methods=["OPTIONS", "POST"])
CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)

socketio = SocketIO(app, cors_allowed_origins="*", async_mode='gevent', engineio_logger=True)

client = MongoClient(
    'mongodb+srv://crob0008:GYfLnhxdJgeiOTPO@chefsbhojan.oxsu9gm.mongodb.net/',
    connectTimeoutMS=30000, 
    socketTimeoutMS=None)
db = client['ORDERS']
Mdb = client['DIGITALMENU']
WebMenu = Mdb['WEBSITE_MENU']
GOA_ORDERS = db['GOA']
MUMBAI_ORDERS = db['MUMBAI']
MUMBAI_STATUS = db['MUMBAI_STATUS']
GOA_STATUS = db['GOA_STATUS']

ALLOWED_PINCODES_GOA = [
    "403401",  # Ponda
    "403102",  # Agapur Adpoi
    "403401",  # Bandora
    "403103",  # Shiroda
    "403404",  # Mardol
    "403706",  # Usgao
    "403406"   # Borim
]

ALLOWED_PINCODES_MUMBAI = [
    "400001",  # Fort
    "400002",  # Kalbadevi
    "400003",  # Masjid Bunder
    "400004",  # Girgaon
    "400005",  # Colaba
    "400006",  # Malabar Hill
    "400007",  # Tardeo
    "400008",  # Mumbai Central
    "400009",  # Byculla
    "400010",  # Mazgaon
    "400011",  # Parel
    "400012",  # Lower Parel
    "400013",  # Prabhadevi
    "400014",  # Dadar
]

def token_required(func):
    @wraps(func)
    def decorated(*args, **kwargs):
        token = None
        # print("token header", func,request.headers)
        if 'Authorization' in request.headers:
            token = request.headers.get('Authorization').split(" ")[1] 
        else:
            return jsonify({'error': 'Token is missing or invalid'}), 404
        try:
            payload =  pyjwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            print("Decoded payload:", payload)
        except  pyjwt.ExpiredSignatureError:
            return jsonify({'redirect_url':url_for('index'),'error':"Session Expired!, Loggin again"}),404
        except  pyjwt.InvalidTokenError:
            return jsonify({'redirect_url':url_for('index'),'error':"Invalid Token, Try to loggin again!"}),404
        
        return func(*args, **kwargs)
    return decorated


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/select_outlet', methods=['POST'])
def select_outlet():
    data = request.get_json()

    entered_username = data['user']
    entered_password = data['password']
    selected_outlet = data['outlet']
    
    if entered_username and entered_password == password:
        token =  pyjwt.encode({
            'user': entered_username,
            'outlet': selected_outlet,
            'exp': datetime.now(timezone.utc) + timedelta(hours=12)
        }, app.config['SECRET_KEY'], algorithm="HS256")
        print(token)
        return jsonify({'token': token, 'redirect_url': url_for(f'{selected_outlet.lower()}_orders')})
    else :
        return jsonify({'redirect_url':url_for('index'),'error':"Not valid Login !"}), 403

def parse_date(date_str):
    return datetime.strptime(date_str, '%d/%m/%Y, %H:%M:%S')

@app.route('/goa_orders',methods=['GET'])
def goa_orders():
    orders_cursor = GOA_ORDERS.find().sort('date_created', -1)
    orders = list(orders_cursor)
    dishes = list(WebMenu.find({}, {'_id': 0}))
    
    for order in orders:
        try:
            order['date_created'] = parse_date(order['date_created'])
        except Exception as e:
            print(f"Error parsing date for order {order['orderId']}: {e}")
            order['date_created'] = None

    orders = [order for order in orders if order['date_created'] is not None]
    
    sorted_orders = sorted(orders, key=lambda x: x['date_created'], reverse=True)
    
    for order in sorted_orders:
        order['date_created'] = order['date_created'].strftime('%d/%m/%Y, %H:%M:%S')
    
    for order in sorted_orders:
        order['_id'] = str(order['_id']) 
        items_list = []
        total_amount = 0
        
        for item in order['items']:
            item_total = int(item['price']) * int(item['quantity'])
            items_list.append({
                'name': item['name'],
                'quantity': item['quantity'],
                'price': item['price'],
                'item_total': item_total
            })
            total_amount += item_total
        order['items_list'] = items_list
        if( total_amount <399):
            order['total_amount'] = round((total_amount - (total_amount*0.2))+40, 2)
        else:
            order['total_amount'] = round(total_amount - (total_amount*0.2), 2)
        
    return render_template('goa_orders.html', orders=sorted_orders, dishes =dishes)

@app.route('/mumbai_orders', methods=['GET'])
def mumbai_orders():
    orders_cursor = MUMBAI_ORDERS.find().sort('date_created', -1)
    orders = list(orders_cursor)
    
    for order in orders:
        try:
            order['date_created'] = parse_date(order['date_created'])
        except Exception as e:
            print(f"Error parsing date for order {order['orderId']}: {e}")
            order['date_created'] = None

    orders = [order for order in orders if order['date_created'] is not None]
    
    sorted_orders = sorted(orders, key=lambda x: x['date_created'], reverse=True)
    
    for order in sorted_orders:
        order['date_created'] = order['date_created'].strftime('%d/%m/%Y, %H:%M:%S')
    
    for order in sorted_orders:
        order['_id'] = str(order['_id'])
        items_list = []
        total_amount = 0
        
        for item in order['items']:
            item_total = int(item['price']) * int(item['quantity'])
            items_list.append({
                'name': item['name'],
                'quantity': item['quantity'],
                'price': item['price'],
                'item_total': item_total
            })
            total_amount += item_total
            order['items_list'] = items_list
            if( total_amount <399):
                order['total_amount'] = round((total_amount - (total_amount*0.2))+40, 2)
            else:
                order['total_amount'] = round(total_amount - (total_amount*0.2), 2)
        
    return render_template('mumbai_orders.html', orders=sorted_orders )

@app.route('/api/get_menu', methods=['GET'])
def get_menu():
    try:
        menu_data = list(WebMenu.find({}, {'_id': 0})) 
        
        if menu_data:
            response = jsonify({"status": "success", "menu": menu_data})
            print(response)
            response.headers['Content-Type'] = 'application/json'  # Ensure JSON content type
            return response, 200
        else:
            return jsonify({"status": "error", "message": "No menu data found"}), 404
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
    
@app.route('/api/orders', methods=['POST', 'OPTIONS'])
def save_form_data():
    if request.method == 'OPTIONS':
        return jsonify({'status': 'success', 'message': 'CORS preflight request handled successfully'}), 200
    
    data = request.json
    print("Received form data:", data)
    status_mumbai = MUMBAI_STATUS.find_one({}, {'_id': 0, 'status': 1})['status']
    status_goa = GOA_STATUS.find_one({}, {'_id': 0, 'status': 1})['status']
    
    print(status_mumbai)
    print(status_goa)
    
    pincode = data.get('pincode')
    outlet_selected = data.get('selectedOutlet')

    if outlet_selected == 'Goa':
        if status_goa:
            if pincode in ALLOWED_PINCODES_GOA:
                new_order = {
                    'orderId': data['orderId'],
                    'name' : data['name'],
                    'phone': data['phone'],
                    'address': data['address'],
                    'pincode': data['pincode'],
                    'items' : data['items'],
                    'date_created': data['date'],
                    'status': "accept"
                }
                result = GOA_ORDERS.insert_one(new_order)
                new_order['_id'] = result.inserted_id
                Thread(target=send_whatsapp_message, args=(new_order,)).start()
                socketio.emit('new_order', {'outlet': 'Goa', 'order':  json.loads(json.dumps(new_order, cls=JSONEncoder))})

                send_whatsapp_message(new_order)
                
                return jsonify({'status': 'success', 'message': 'Form data saved successfully'}), 200
            else:
                return jsonify({'status': 'error', 'message': 'Delivery not available for the entered pincode'}), 400
        else:
            return jsonify({'status': 'error', 'message': 'Currently not accepting orders'}), 400
    
    elif outlet_selected == 'Mumbai':
        if status_mumbai:
            if pincode in ALLOWED_PINCODES_MUMBAI:
                new_order = {
                    'orderId': data['orderId'],
                    'name' : data['name'],
                    'phone': data['phone'],
                    'address': data['address'],
                    'pincode': data['pincode'],
                    'items' : data['items'],
                    'date_created': data['date'],
                    'status': "accept"
                }
                result = MUMBAI_ORDERS.insert_one(new_order)
                new_order['_id'] = result.inserted_id
                socketio.emit('new_order', {'outlet': 'Mumbai', 'order':  json.loads(json.dumps(new_order, cls=JSONEncoder))})

                # Thread(target=send_whatsapp_message, args=(new_order,)).start()
                
                return jsonify({'status': 'success', 'message': 'Form data saved successfully'}), 200
            else:
                return jsonify({'status': 'error', 'message': 'Delivery not available for the entered pincode'}), 400
        else:
            return jsonify({'status': 'error', 'message': 'Currently not accepting orders'}), 400
        
    else:
        return jsonify({'status': 'error', 'message': 'Invalid outlet selected'}), 400

def send_whatsapp_message(order):
    access_token = 'EAAFNtF4tqZA0BOy5DeelAgBKhF2WfgkbQ6UAJFgVfyio42FPCG0C5lZBpRjNOVjOHxZCZAzrjyBtQLs9vHN6cNJNIQPneoQn0jlRZAlYXODsYg48l3vbNLKRZBrWU1E1tXm23MMoFqFaqwBmWjPNcG3ZB5CZCZA6S4gN56EZButd1V4fcUm0kcBdZCL4E3za448bVlqbH8ll8F8PwTlW8PcSPwjGWeDVDXneH5AtV8ZD'
    phone_number_id = '323798344160879'
    recipient_phone_number = '919923388852'
    
    items_summary = "".join([f"{item['name']}: {item['quantity']}" for item in order['items']])
    
    url = f'https://graph.facebook.com/v20.0/{phone_number_id}/messages'
    
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    
    payload = {
        "messaging_product": "whatsapp",
        "to": recipient_phone_number,
        "type": "template",
        "template": {
            "name": "neworder",
            "language": {
                "code": "en"
            },
            "components": [
                {
                    "type": "header",
                    "parameters": [
                        {
                            "type": "text",
                            "text": order["name"]
                        }
                    ]
                },
                {
                    "type": "body",
                    "parameters": [
                        {
                            "type": "text",
                            "text": order["phone"]
                        },
                        {
                            "type": "text",
                            "text": items_summary
                        }
                    ]
                }
            ]
        }
    }
    
    response = requests.post(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        print("Message sent successfully!")
        print(response.json())
    else:
        print(f"Failed to send message: {response.status_code}")
        print(response.json())

        
        
def send_whatsapp_message_to_customer(order ,status):
    access_token = 'EAAFNtF4tqZA0BOZBQPQKhre2onFphjV6tKARnKIzGKkgftbDk7aWEjvx8WrhuTXX3TlkW6eUfi7WHLTbbaaYIHJxJ5nPdxR98xXsbIbhvXfvsQ4KWiLDvZB6wSpBeIUm039y0ZCvzDcle8HxdwZBFBm7sIpsJp5ecrs9kzsJh9JgsGOQS0kwVVAN2QhYPSvrVH3TguZB7UvyXJ8rRmsPQZD'
    phone_number_id = '323798344160879'
    recipient_phone_number = f'91{order["phone"]}'
    items_summary = "\n".join([f"{item['name']}: {item['quantity']}" for item in order['items']])
    
    url = f'https://graph.facebook.com/v20.0/{phone_number_id}/messages'
    
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    
    if status == 'accept':
        template_name = "order_accepted"
        payload = {
            "messaging_product": "whatsapp",
            "to": recipient_phone_number,
            "type": "template",
            "template": {
                "name": template_name,
                "language": {
                    "code": "en"
                },
                "components": [
                    {
                        "type": "header",
                        "parameters": [
                            {
                                "type": "text",
                                "text": order["name"]  
                            }
                        ]
                    },
                    {
                        "type": "body",
                        "parameters": [
                            {
                                "type": "text",
                                "text": items_summary
                            }
                        ]
                    }
                ]
            }
        }
    elif status == 'deliver':
        template_name = "outfor_delivery"
        payload = {
            "messaging_product": "whatsapp",
            "to": recipient_phone_number,
            "type": "template",
            "template": {
                "name": template_name,
                "language": {
                    "code": "en"
                }
            }
        }
    elif status == 'fulfill':
        template_name = "fulfilled_order"
        payload = {
            "messaging_product": "whatsapp",
            "to": recipient_phone_number,
            "type": "template",
            "template": {
                "name": template_name,
                "language": {
                    "code": "en"
                }
            }
        }
    else:
        print("Invalid status")
        return
    
    response = requests.post(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        print("Message sent successfully!")
        print(response.json())
    else:
        print(f"Failed to send message: {response.status_code}")
        print(response.json())


@app.route('/api/status_order_goa', methods=['POST'])
@token_required
def fulfill_order_Goa():
    
    data = request.json
    order_id = data.get('orderId')
    status = data.get('status')
    order_id = int(order_id)
    order = GOA_ORDERS.find_one({'orderId': order_id})

    if(status == 'accept'):
        newStatus = 'deliver'
    elif(status == 'deliver'):
        newStatus = 'fulfill'
    elif(status == 'fulfill'):
        newStatus = 'fulfilled'
    else:
        return
        
    if order_id:
        GOA_ORDERS.update_one({'orderId': order_id}, {'$set': {'status':newStatus}})
        # send_whatsapp_message_to_customer(order , status)
        return jsonify({'status': 'success', 'newStatus': newStatus}), 200

    return jsonify({'status': 'error', 'message': 'Invalid request'}), 400

@app.route('/api/status_order_mumbai', methods=['POST'])
@token_required
def fulfill_order_Mumbai():
    
    data = request.json
    order_id = data.get('orderId')
    status = data.get('status')
    order_id = int(order_id)
    order = MUMBAI_ORDERS.find_one({'orderId': order_id})
    
    if(status == 'accept'):
        newStatus = 'deliver'
    elif(status == 'deliver'):
        newStatus = 'fulfill'
    elif(status == 'fulfill'):
        newStatus = 'fulfilled'

    if order_id:
        MUMBAI_ORDERS.update_one({'orderId': order_id}, {'$set': {'status':newStatus}})
        # send_whatsapp_message_to_customer(order , status)
        return jsonify({'status': 'success', 'newStatus': newStatus}), 200

    return jsonify({'status': 'error', 'message': 'Invalid request'}), 400

@app.route('/api/Get_mumbai_status', methods=['GET'])
@token_required
def Get_MUMBAI_STATUS():
    status = MUMBAI_STATUS.find_one({}, {'_id': 0, 'status': 1})
    if status:
        return jsonify({'status': status['status']}),200
    return jsonify({'status': None}),400

@app.route('/api/Update_mumbai_status', methods=['POST'])
@token_required
def Update_MUMBAI_STATUS():
    data = request.json
    status = data.get('status')
    if status == 'on':
        MUMBAI_STATUS.update_one({}, {'$set': {'status': True}})
        return jsonify({'status': 'success', 'message': 'Mumbai marked as On'}), 200
    elif status == 'off':
        MUMBAI_STATUS.update_one({}, {'$set': {'status': False}})
        return jsonify({'status': 'success', 'message': 'Mumbai marked as Off'}), 200
    return jsonify({'status': 'error', 'message': 'Invalid request'}), 400

@app.route('/api/Get_goa_status', methods=['GET'])
@token_required
def Get_GOA_STATUS():
    status = GOA_STATUS.find_one({}, {'_id': 0, 'status': 1})
    if status:
        return jsonify({'status': status['status']}),200
    return jsonify({'status': None}),200

@app.route('/api/Update_goa_status', methods=['POST'])
@token_required
def Update_GOA_STATUS():
    data = request.json
    status = data.get('status')
    if status == 'on':
        GOA_STATUS.update_one({}, {'$set': {'status': True}})
        return jsonify({'status': 'success', 'message': 'Goa marked as On'}), 200
    elif status == 'off':
        GOA_STATUS.update_one({}, {'$set': {'status': False}})
        return jsonify({'status': 'success', 'message': 'Goa marked as Off'}), 200
    return jsonify({'status': 'error', 'message': 'Invalid request'}), 400

#menu editing apis 

@app.route('/api/getmenuweb', methods=['GET'])
def getWebMenu():
    print("API /getmenuweb hit")

    # Handle preflight requests for CORS
    if request.method == 'OPTIONS':
        return jsonify({'status': 'success', 'message': 'CORS preflight request handled successfully'}), 200

    # Fetch dishes from WebMenu
    try:
        dishes = list(WebMenu.find({}, {'_id': 0}))  # Fetch all dishes without the `_id` field
        return render_template('WebMenu.html', dishes=dishes)  # Render WebMenu.html with dishes
    except Exception as e:
        error_message = f"An unexpected error occurred: {str(e)}"
        print(error_message)
        return jsonify({'status': 'error', 'message': error_message}), 500  # Return error message

    
# WebMenu Routes

@app.route('/api/add_category_web', methods=['POST'])
def add_category_web():
    data = request.json
    category_name = data.get('categoryName')

    if not category_name:
        return jsonify({'error': 'Category name is required'}), 400

    try:
        # Check if the category already exists in WebMenu
        if WebMenu.find_one({'category': category_name}):
            return jsonify({'error': 'Category already exists'}), 400
        
        # Add the new category to WebMenu
        WebMenu.insert_one({
            'category': category_name,
            'subcategory': {}  # Initialize with an empty subcategory dictionary
        })

        socketio.emit('menu_update', {'menuType': 'web'})

        return jsonify({'status': 'success', 'message': 'Category added successfully'}), 200
    except Exception as e:
        error_message = f"An unexpected error occurred: {str(e)}"
        return jsonify({'error': error_message}), 500

@app.route('/api/add_subcategory_web', methods=['POST'])
def add_subcategory_web():
    data = request.json
    category_name = data.get('categoryName')
    subcategory_name = data.get('subcategoryName')

    if not category_name or not subcategory_name:
        return jsonify({'error': 'Both category name and subcategory name are required'}), 400

    try:
        # Check if the category exists in WebMenu
        category = WebMenu.find_one({'category': category_name})
        if not category:
            return jsonify({'error': 'Category does not exist'}), 400
        
        # Check if the subcategory already exists
        if subcategory_name in category['subcategory']:
            return jsonify({'error': 'Subcategory already exists'}), 400

        # Add the new subcategory
        WebMenu.update_one(
            {'category': category_name},
            {'$set': {f'subcategory.{subcategory_name}': []}}  # Initialize with an empty list
        )

        socketio.emit('menu_update', {'menuType': 'web'})

        return jsonify({'status': 'success', 'message': 'Subcategory added successfully'}), 200
    except Exception as e:
        error_message = f"An unexpected error occurred: {str(e)}"
        return jsonify({'error': error_message}), 500

@app.route('/api/update_category_name_web', methods=['POST'])
def update_category_name_web():
    data = request.json
    old_name = data['oldName']
    new_name = data['newName']

    try:
        WebMenu.update_one({'category': old_name}, {'$set': {'category': new_name}})

        socketio.emit('menu_update', {'menuType': 'web'})
        return jsonify({'status': 'success', 'message': 'Category name updated successfully'}), 200
    except Exception as e:
        error_message = f"An unexpected error occurred: {str(e)}"
        return jsonify({'error': error_message}), 500

@app.route('/api/update_subcategory_name_web', methods=['POST'])
def update_subcategory_name_web():
    data = request.json
    category_name = data['categoryName']
    old_subcategory_name = data['oldSubcategoryName']
    new_subcategory_name = data['newSubcategoryName']

    try:
        WebMenu.update_one(
            {'category': category_name, f'subcategory.{old_subcategory_name}': {'$exists': True}},
            {'$rename': {f'subcategory.{old_subcategory_name}': f'subcategory.{new_subcategory_name}'}}
        )

        socketio.emit('menu_update', {'menuType': 'web'})
        return jsonify({'status': 'success', 'message': 'Subcategory name updated successfully'}), 200
    except Exception as e:
        error_message = f"An unexpected error occurred: {str(e)}"
        return jsonify({'error': error_message}), 500

@app.route('/api/update_item_name_web', methods=['POST'])
def update_item_name():
    data = request.json
    category_name = data['categoryName']
    subcategory_name = data['subcategoryName']
    old_item_name = data['oldItemName']
    new_item_name = data['newItemName']

    try:
        WebMenu.update_one(
            {'category': category_name, f'subcategory.{subcategory_name}.name': old_item_name},
            {'$set': {f'subcategory.{subcategory_name}.$[elem].name': new_item_name}},
            array_filters=[{'elem.name': old_item_name}]
        )

        socketio.emit('menu_update', {'menuType': ''})
        return jsonify({'status': 'success', 'message': 'Item name updated successfully'}), 200
    except Exception as e:
        error_message = f"An unexpected error occurred: {str(e)}"
        return jsonify({'error': error_message}), 500
    
@app.route('/api/update_item_price_web', methods=['POST'])
def update_item_price():
    data = request.json
    category_name = data['categoryName']
    subcategory_name = data['subcategoryName']
    item_name = data['itemName']
    new_price = data['newPrice']

    try:
        WebMenu.update_one(
            {'category': category_name, f'subcategory.{subcategory_name}.name': item_name},
            {'$set': {f'subcategory.{subcategory_name}.$[elem].price': new_price}},
            array_filters=[{'elem.name': item_name}]
        )

        socketio.emit('menu_update', {'menuType': ''})
        return jsonify({'status': 'success', 'message': 'Item price updated successfully'}), 200
    except Exception as e:
        error_message = f"An unexpected error occurred: {str(e)}"
        return jsonify({'error': error_message}), 500

@app.route('/api/update_item_type', methods=['POST'])
def update_item_type():
    data = request.json
    category_name = data['categoryName']
    subcategory_name = data['subcategoryName']
    item_name = data['itemName']
    new_type = data['newType']
    
    try:
        WebMenu.update_one(
            {'category': category_name, f'subcategory.{subcategory_name}.name': item_name},
            {'$set': {f'subcategory.{subcategory_name}.$[elem].veg_nonveg': new_type}},
            array_filters=[{'elem.name': item_name}]
        )

        socketio.emit('menu_update', {'menuType': ''})
        return jsonify({'status': 'success', 'message': 'Item type updated successfully'}), 200
    except Exception as e:
        error_message = f"An unexpected error occurred: {str(e)}"
        return jsonify({'error': error_message}), 500
            
@app.route('/api/update_imgurl_web', methods=['POST'])
def update_item_imgurl_web():
    data = request.json
    category_name = data['categoryName']
    subcategory_name = data['subcategoryName']
    item_name = data['itemName']
    new_imgurl_name = data['newImgUrl']
    
    print(data)

    try:
        WebMenu.update_one(
            {'category': category_name, f'subcategory.{subcategory_name}.name': item_name},
            {'$set': {f'subcategory.{subcategory_name}.$[elem].img': new_imgurl_name}},
            array_filters=[{'elem.name': item_name}]
        )

        socketio.emit('menu_update', {'menuType': 'web'})
        return jsonify({'status': 'success', 'message': 'Item image URL updated successfully'}), 200

    except Exception as e:
        error_message = f"An unexpected error occurred: {str(e)}"
        return jsonify({'error': error_message}), 500
    
@app.route('/api/update_description_web', methods=['POST'])
def update_item_description_web():
    data = request.json
    category_name = data['categoryName']
    subcategory_name = data['subcategoryName']
    item_name = data['itemName']
    new_description = data['newDescription']
    
    print(data)

    try:
        WebMenu.update_one(
            {'category': category_name, f'subcategory.{subcategory_name}.name': item_name},
            {'$set': {f'subcategory.{subcategory_name}.$[elem].description': new_description}},
            array_filters=[{'elem.name': item_name}]
        )

        socketio.emit('menu_update', {'menuType': 'web'})
        return jsonify({'status': 'success', 'message': 'Item description updated successfully'}), 200
    except Exception as e:
        error_message = f"An unexpected error occurred: {str(e)}"
        return jsonify({'error': error_message}), 500

@app.route('/api/update_genre_web', methods=['POST'])
def update_item_genre_web():
    data = request.json
    category_name = data['categoryName']
    subcategory_name = data['subcategoryName']
    item_name = data['itemName']
    new_genre = data['newGenre']
    
    print(data)

    try:
        WebMenu.update_one(
            {'category': category_name, f'subcategory.{subcategory_name}.name': item_name},
            {'$set': {f'subcategory.{subcategory_name}.$[elem].genre': new_genre}},
            array_filters=[{'elem.name': item_name}]
        )

        socketio.emit('menu_update', {'menuType': 'web'})
        return jsonify({'status': 'success', 'message': 'Item genre updated successfully'}), 200
    except Exception as e:
        error_message = f"An unexpected error occurred: {str(e)}"
        return jsonify({'error': error_message}), 500

@app.route('/api/add_item_web', methods=['POST'])
def add_item_web():
    data = request.json
    category_name = data.get('categoryName')
    subcategory_name = data.get('subcategoryName')
    new_item = data.get('newItem')

    try:
        WebMenu.update_one(
            {'category': category_name},
            {'$push': {f'subcategory.{subcategory_name}': new_item}}
        )

        socketio.emit('menu_update', {'menuType': 'web'})
        return jsonify({'status': 'success', 'message': 'Item added successfully'}), 200
    except Exception as e:
        error_message = f"An unexpected error occurred: {str(e)}"
        return jsonify({'error': error_message}), 500

@app.route('/api/delete_item_web', methods=['POST'])
def delete_item_web():
    data = request.json
    category_name = data.get('categoryName')
    subcategory_name = data.get('subcategoryName')
    item_name = data.get('itemName')

    try:
        result = WebMenu.update_one(
            {
                'category': category_name,
                f'subcategory.{subcategory_name}.name': item_name
            },
            {
                '$pull': {f'subcategory.{subcategory_name}': {'name': item_name}}
            }
        )
        
        if result.modified_count > 0:
            socketio.emit('menu_update', {'menuType': 'web'})
            return jsonify({'status': 'success', 'message': 'Item deleted successfully'}), 200
        else:
            return jsonify({'status': 'failure', 'message': 'Item not found'}), 404
    except Exception as e:
        error_message = f"An unexpected error occurred: {str(e)}"
        return jsonify({'error': error_message}), 500



if __name__ == "__main__":
    socketio.run(app, debug=True, host='0.0.0.0', port=8080)
