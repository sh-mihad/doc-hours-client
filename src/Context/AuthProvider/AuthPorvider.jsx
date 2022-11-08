import React, { Children, createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
export const UserAuth = createContext();
const AuthPorvider = ({Children}) => {
    const [user,setuser] = useState("");
    const [loading,setLoading] = useState(true);


    const userInfo = {
        name:"sabbir hossen"
    }

    return (
      <UserAuth.Provider value={userInfo}>
        {Children}
      </UserAuth.Provider>
    );
};

export default AuthPorvider;