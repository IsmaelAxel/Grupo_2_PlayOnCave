import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/layout";
import { ListProductsPage } from "./pages/ListProductsPage";
import { Home } from "./pages/HomeAdminPage/home";
import { loader } from "./pages/HomeAdminPage/loader";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children : [
            {
                index:true,
                element : <Home/>,
                loader : loader
            },
            {
                path: '/products',
                element : <ListProductsPage/>
            }
        ]
       
    } 
])