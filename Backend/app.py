import gevent.monkey
gevent.monkey.patch_all()

from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_socketio import SocketIO
import requests
from threading import Thread
from pymongo import MongoClient
from flask_cors import CORS
import os
from bson import ObjectId
import json
from datetime import datetime
# from twilio.rest import Client


class JSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return json.JSONEncoder.default(self, obj)
    
app = Flask(__name__)

os.environ['PASSWORD'] = 'Nagesh22'
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'a_secure_default_key')
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
CB_webMenu = Mdb['WEBSITE_MENU']
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

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/select_outlet', methods=['POST'])
def select_outlet():
    entered_password = request.form['password']
    selected_outlet = request.form['outlet']
    if entered_password == password:
        if selected_outlet == 'Goa':
            return redirect(url_for('goa_orders'))
        elif selected_outlet == 'Mumbai':
            return redirect(url_for('mumbai_orders'))
    else :
        return redirect(url_for('index'))

def parse_date(date_str):
    return datetime.strptime(date_str, '%d/%m/%Y, %H:%M:%S')

@app.route('/goa_orders')
def goa_orders():
    orders_cursor = GOA_ORDERS.find().sort('date_created', -1)
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
        
    return render_template('goa_orders.html', orders=sorted_orders)

@app.route('/mumbai_orders')
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
        
    return render_template('mumbai_orders.html', orders=sorted_orders)

@app.route('/api/get_menu', methods=['GET'])
def get_menu():
    try:
        menu_data = list(CB_webMenu.find({}, {'_id': 0})) 
        
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
        send_whatsapp_message_to_customer(order , status)
        return jsonify({'status': 'success', 'message': f'Order {order_id} marked as fulfilled'}), 200

    return jsonify({'status': 'error', 'message': 'Invalid request'}), 400

@app.route('/api/status_order_mumbai', methods=['POST'])
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
    elif(status == 'fullfill'):
        newStatus = 'fulfilled'

    if order_id:
        MUMBAI_ORDERS.update_one({'orderId': order_id}, {'$set': {'status':newStatus}})
        send_whatsapp_message_to_customer(order , status)
        return jsonify({'status': 'success', 'message': f'Order {order_id} marked as fulfilled'}), 200
    

    return jsonify({'status': 'error', 'message': 'Invalid request'}), 400

@app.route('/api/Get_mumbai_status', methods=['GET'])
def Get_MUMBAI_STATUS():
    status = MUMBAI_STATUS.find_one({}, {'_id': 0, 'status': 1})
    if status:
        return jsonify({'status': status['status']})
    return jsonify({'status': None})

@app.route('/api/Update_mumbai_status', methods=['POST'])
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
def Get_GOA_STATUS():
    status = GOA_STATUS.find_one({}, {'_id': 0, 'status': 1})
    if status:
        return jsonify({'status': status['status']})
    return jsonify({'status': None})

@app.route('/api/Update_goa_status', methods=['POST'])
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



if __name__ == "__main__":
    socketio.run(app, debug=True, host='0.0.0.0', port=8080)
