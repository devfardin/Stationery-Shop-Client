import { createBrowserRouter } from "react-router";
import AddCategory from "../components/layout/dashboard/adminDashboard/pages/AddCategory";
import AddProduct from "../components/layout/dashboard/adminDashboard/pages/AddProduct";
import AllCategores from "../components/layout/dashboard/adminDashboard/pages/AllCategores";
import AllProducts from "../components/layout/dashboard/adminDashboard/pages/AllProducts";
import EditProduct from "../components/layout/dashboard/adminDashboard/pages/EditProduct";
import Orders from "../components/layout/dashboard/adminDashboard/pages/Orders";
import MyCart from "../components/layout/dashboard/customerDashboard/pages/MyCart";
import MyOrders from "../components/layout/dashboard/customerDashboard/pages/MyOrders";
import PaymentHistory from "../components/layout/dashboard/customerDashboard/pages/PaymentHistory";
import Dashboard from "../components/layout/dashboard/Dashboard";
import ProtectedRoute from "../components/layout/dashboard/proctedRoutes/ProtectedRoute";
import MainLayout from "../components/layout/MainLayout";
import About from "../pages/about/About";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Home from '../pages/home/Home';
import Shop from "../pages/shop/Shop";
import AdminProtected from "../components/layout/dashboard/proctedRoutes/AdminProtected";
import CustomerProtected from "../components/layout/dashboard/proctedRoutes/CustomerProtected";
import CustomerDashboard from "../components/layout/dashboard/customerDashboard/pages/CustomerDashboard";
import AdminDashboard from "../components/layout/dashboard/adminDashboard/pages/AdminDashboard";
import ProductSingle from "../pages/single/ProductSingle";
import Checkout from "../pages/single/Checkout";
import ThankYou from "../components/ThankYou";
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/single-product/:productId',
                element: <ProductSingle />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Registration />
            },
            {
                path: '/checkout',
                element: <ProtectedRoute> <Checkout /></ProtectedRoute>
            },
            {
                path: '/order/verify',
                element: <ProtectedRoute> <ThankYou /> </ProtectedRoute>
            },
        ],
    },
    {
        path: '/admin/dashboard',
        element: <ProtectedRoute> <Dashboard /> </ProtectedRoute>,
        children: [
            {
                index: true,
                element: <AdminProtected><AdminDashboard/></AdminProtected>
            },
            {
                path: 'products',
                element: <AdminProtected> <AllProducts /> </AdminProtected>
            },
            {
                path: 'add-product',
                element: <AdminProtected><AddProduct /></AdminProtected>
            },
            {
                path: 'all-categories',
                element: <AdminProtected> <AllCategores /> </AdminProtected>
            },
            {
                path: 'add-category',
                element: <AdminProtected> <AddCategory /> </AdminProtected>
            },
            {
                path: 'edit-product/:productId',
                element: <AdminProtected> <EditProduct /> </AdminProtected>
            },
            {
                path: 'orders',
                element: <AdminProtected> <Orders /> </AdminProtected>
            },
            // customer routes
        ]
    },
    {
        path: '/customer/dashboard',
        element: <ProtectedRoute> <Dashboard/> </ProtectedRoute>,
        children: [
            {
                index: true,
                element: <CustomerProtected> <CustomerDashboard/> </CustomerProtected>
            },
            {
                path: 'my-orders',
                element: <CustomerProtected> <MyOrders /> </CustomerProtected>
            },
            {
                path: 'my-cart',
                element: <CustomerProtected> <MyCart /> </CustomerProtected>
            },
            {
                path: 'payment-history',
                element: <CustomerProtected> <PaymentHistory /> </CustomerProtected>
            },
        ]
    }
]);
export default router;
