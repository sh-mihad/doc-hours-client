import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Forms/Login/Login";
import Register from "../Pages/Forms/Register/Register";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        errorElement:<ErrorPage/>,
        children:[
         {
            path:"/register",
            element:<Register></Register>
         },
         {
            path:"/login",
            element:<Login></Login>
         }
        ]
    }
])

export default router;