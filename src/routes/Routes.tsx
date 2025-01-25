import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from '../pages/home/Home'
import About from "../pages/about/About";
import Shop from "../pages/shop/Shop";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
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
        ]

    }
]);
export default router