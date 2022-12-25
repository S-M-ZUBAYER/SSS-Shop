import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/MainPage/Main";
import Blog from "../../Pages/BlogPage/Blog";
import Contact from "../../Pages/ContactPage/Contact";
import DashBoard from "../../Pages/DashBoardPage/DashBoard";
import Home from "../../Pages/HomePage/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
]);

export default router;