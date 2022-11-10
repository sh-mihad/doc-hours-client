import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { UserAuth } from '../../Context/AuthProvider/AuthPorvider';

const PrivetRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(UserAuth)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children;
    
};

export default PrivetRoute;