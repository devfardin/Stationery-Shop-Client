# 🛍️ Stationery Shop - Frontend

## 📌 Overview  
The **Stationery Shop** is a **responsive** e-commerce platform where users can **browse, search, and purchase stationery products** with a seamless shopping experience. It features **secure authentication, role-based dashboards, product management, and order handling**. The application follows **modern UI/UX principles** for a user-friendly and visually appealing experience.  

🚀 **Live Site:** [Stationery Shop](https://stationery-shop-frontend.vercel.app/)  

---

## 🚀 Features  

### 🔐 User Authentication (Role-Based)  
- **User Registration & Login** with JWT authentication.  
- **Secure Password Hashing** before storing in the database.  
- **Role-Based Access:**  
  - **User Role:** Can browse products, manage orders, and update profile settings.  
  - **Admin Role:** Can manage users, products, and orders.  
- **Session Management:** JWT stored in local storage for authentication persistence.  
- **Logout:** Clears authentication token on user logout.  

### 🌍 Public Routes  
- **Home Page**  
  - Interactive **banner section** showcasing offers.  
  - **Featured Products** (up to 6) with a "View All" button.  
  - **Testimonials & Blogs** (optional).  
- **All Products Page**  
  - **Search & Filter:** Search by **title, author, or category**.  
  - **Dynamic Filtering:** Price range, category, availability.  
  - **Product Cards:** Displays product details with a **View Details** button.  
- **Product Details Page**  
  - Displays product **image, name, price, and description**.  
  - **"Add to Cart"** button for purchase.  
- **About Page**  
  - Provides an overview of the shop and its mission.  

### 🔒 Private Routes  
- **Cart Page**  
  - Allows users to place orders.  
  - Ensures ordered quantity does not exceed stock.  
  - Displays product details, user info, and total price.  
  - **Order Now** button to confirm the purchase.  
- **Payment Integration**  
  - Supports **SurjoPay, Stripe**, or other payment gateways.  
- **Dashboard (Role-Based Access)**  
  - **Admin Dashboard**  
    - Manage users (e.g., deactivate accounts).  
    - Manage products (CRUD operations).  
    - Manage orders (CRUD operations).  
    - Approve orders (change status from "Pending" to "Shipping").  
  - **User Dashboard**  
    - View order history.  
    - Manage profile settings (e.g., default shipping address).  

### 🎨 UI/UX & Performance  
- **Fully Responsive:** Works across all devices.  
- **User-Friendly Layout:** Proper alignment, typography, and easy navigation.  
- **Error Handling:**  
  - Invalid login credentials.  
  - Registration errors (e.g., duplicate email).
- **Loading States:** Spinners/loaders for API calls (login, fetching data).  
- **Toast Notifications:** Alerts for key actions (e.g., successful login, order placed).  

---

## 🛠️ Tech Stack  

| Technology     | Description                  |  
|---------------|------------------------------|  
| **React.js**  | Frontend framework           |  
| **TypeScript**| Type-safe development        |  
| **Redux Toolkit** | State management (RTK Query) |  
| **React Router** | Routing for navigation |  
| **Tailwind CSS** | Styling framework |  
| **JWT** | Secure authentication |  