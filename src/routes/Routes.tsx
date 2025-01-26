import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from '../pages/home/Home'
import About from "../pages/about/About";
import Shop from "../pages/shop/Shop";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import { dashboardRoutes } from "./DashboardRoutes";
import Dashboard from "../components/layout/dashboard/Dashboard";
import ProtectedRoute from "../components/layout/dashboard/ProtectedRoute";
import AllProducts from "../components/layout/dashboard/adminDashboard/pages/AllProducts";
import AddProduct from "../components/layout/dashboard/adminDashboard/pages/AddProduct";
import AllCategores from "../components/layout/dashboard/adminDashboard/pages/AllCategores";
import Orders from "../components/layout/dashboard/adminDashboard/pages/Orders";
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {   index: true,
                element: <Home/>,
            }, 
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Registration/>
            },
        ],
    },
    {
        path: '/dashboard',
        element: <ProtectedRoute> <Dashboard/> </ProtectedRoute>,
        children: [
            {
                path: 'products',
                element: <AllProducts/>
            },
            {
                path: 'add-product',
                element: <AddProduct/>
            },
            {
                path: 'product-categories',
                element: <AllCategores/>
            },
            {
                path: 'orders',
                element: <Orders/>
            },
        ]
    }
]);
export default router