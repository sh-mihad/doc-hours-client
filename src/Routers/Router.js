import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Forms/Login/Login";
import Register from "../Pages/Forms/Register/Register";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        errorElement:<ErrorPage/>,
        children:[
        {
            path:"/",
            element:<Home></Home>
        },
         {
            path:"/register",
            element:<Register></Register>
         },
         {
            path:"/login",
            element:<Login></Login>
         },
         {
            path:"service",
            
         }
        ]
    }
])

export default router;