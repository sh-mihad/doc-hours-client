import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../Pages/AddService/AddService";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Forms/Login/Login";
import Register from "../Pages/Forms/Register/Register";
import Home from "../Pages/Home/Home";
import MyReview from "../Pages/MyReview/MyReview";
import Service from "../Pages/Service/Service";
import ServiceDetails from "../Pages/Service/ServiceDetails";

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
            path:"addService",
            element:<AddService/>
            
         },
         {
            path:"services",
            element:<Service/>
         },
         {
            path : "/services/:id",
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
            element:<ServiceDetails/>
         },
         {
            path :"/my-reviews",
            element:<MyReview/>
         }
        ]
    }
])

export default router;