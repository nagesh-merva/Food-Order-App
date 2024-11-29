
# Food Order App 🍔

A web-based food ordering and delivery application that simplifies the process of browsing menus, placing orders, and managing deliveries for customers and restaurant admins.

---

## Features ✨

- **User-Friendly Interface:** Browse dynamic menus with images, descriptions, and prices.
- **Search and Filters:** Find dishes quickly with search and filter options.
- **Cart Management:** Easily add, update, or remove items from your cart.
- **Order Tracking:** Get real-time updates on your order status.
- **Admin Panel:** Manage orders, toggle statuses, and view customer details.

---

## Technologies Used 🛠️

### Frontend:
- **React.js**: For building the user interface.
- **Tailwind CSS**: For sleek and responsive design.

### Backend:
- **Python Flask**: For handling APIs and backend logic.
- **Socket.IO**: For real-time updates on order statuses.

### Database:
- **MongoDB**: For storing customer and order data.

### Payment Gateway:
- **Razorpay API**: For seamless payment integration.

---

## Installation 🚀

1. Clone the repository:
   ```bash
   git clone https://github.com/nagesh-merva/Food-Order-App.git
   cd Food-Order-App
   ```

2. Install dependencies:
   - For the **Frontend**:
     ```bash
     cd frontend
     npm install
     ```

   - For the **Backend**:
     ```bash
     cd backend
     pip install -r requirements.txt
     ```

3. Configure Environment:
   - Add your MongoDB URI, Razorpay API keys, and other credentials in the respective configuration files.

4. Start the servers:
   - **Frontend**:
     ```bash
     npm run dev
     ```
   - **Backend**:
     ```bash
     python app.py
     ```

---

## API Endpoints 🛒

### Customer APIs:
- `POST /api/order`: Place a new order.
- `GET /api/menu`: Fetch the menu.

### Admin APIs:
- `GET /api/orders`: View all orders.
- `PUT /api/order/:id`: Update order status.

---

## Folder Structure 📂

```
Food-Order-App/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/
│   ├── static/
│   ├── templates/
│   ├── app.py
│   └── requirements.txt
│
└── README.md
```

---

## Screenshots 📸

![Homepage](https://via.placeholder.com/800x400?text=Homepage)
![Cart](https://via.placeholder.com/800x400?text=Cart+Page)
![Admin Panel](https://via.placeholder.com/800x400?text=Admin+Panel)

---

## Contributing 🤝

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a meaningful message"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License 📜

This project is licensed under the [MIT License](LICENSE).

---

## Contact 📬

Feel free to reach out for collaboration or inquiries:
- **Author**: Nagesh Merva
- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **GitHub**: [@nagesh-merva](https://github.com/nagesh-merva)
