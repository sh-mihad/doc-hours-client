import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Forms/Login/Login";
import Register from "../Pages/Forms/Register/Register";
import Home from "../Pages/Home/Home";
import EditReview from "../Pages/MyReview/EditReview";
import MyReview from "../Pages/MyReview/MyReview";
import Service from "../Pages/Service/Service";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import PrivetRoute from "./PrivetRouts/PrivetRoute";

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
            element:<PrivetRoute><AddService/></PrivetRoute>
            
         },
         {
            path:"services",
            element:<Service/>
         },
         {
            path : "/services/:id",
            loader: ({params})=> fetch(`https://service-server-sh-mihad.vercel.app/services/${params.id}`),
            element:<ServiceDetails/>
         },
         {
            path :"/my-reviews",
            element:<PrivetRoute><MyReview/></PrivetRoute>
         },
         {
            path:"/blogs",
            element:<Blogs></Blogs>
         },
         {
            path:"/editRevew/:id",
            loader:({params})=>fetch(`https://service-server-sh-mihad.vercel.app/reaviews/${params.id}`) ,
            element:<PrivetRoute><EditReview></EditReview></PrivetRoute>
         }
        ]
    }
])

export default router;