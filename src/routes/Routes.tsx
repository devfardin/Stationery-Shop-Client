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
        element: <Dashboard/>,
    }
]);
export default router