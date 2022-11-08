import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
export const UserAuth = createContext();

const AuthPorvider = ({children}) => {
    const [user,setUser] = useState("");
    const [loading,setLoading] = useState(true);
   
    const googleProvider = new GoogleAuthProvider();
    const registerInGoogle =()=>{
      return signInWithPopup(auth,googleProvider)
    }

    

    // create user
    const createUser =(email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)
    }
   
    // loginUser
    const loginUser =(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
    }

    // user ovserver 
    useEffect(()=>{
      const unsbscibe = onAuthStateChanged(auth,(curretnUser)=>{
        setUser(curretnUser)
        setLoading(false)
      })

      return ()=>{
        unsbscibe()
      }
    },[])


    // logout 
    const logout =()=>{
      return signOut(auth)
    }

    // update user profile
    const addUserNmaeAndImage = (name,image)=>{
      return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL : image
      })
    }

    const userInfo = {
      user,
      loading,
      createUser,
      loginUser,
      addUserNmaeAndImage,
      registerInGoogle,
      logout
    }

    return (
      <UserAuth.Provider value={userInfo}>
        {children}
      </UserAuth.Provider>
    );
};

export default AuthPorvider;