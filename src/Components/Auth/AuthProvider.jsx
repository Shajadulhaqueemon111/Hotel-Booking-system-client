import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import axios from 'axios';
export const AuthContext=createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
const [user,setUser]=useState([])
const [loading,setLoading]=useState(true)

const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)

}
const userSingUp=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
const userSingIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const userSingOut=()=>{
    return signOut(auth)
}

// useEffect(()=>{
//  return   onAuthStateChanged(auth, (user) =>{
//     setUser(user)
// setLoading(false)
//     })


// },[])

//////   Client side functional system 


//Auth provider state on change functon

useEffect(() => {
    const userEmail = user?.email || user.email;
    const loggedUser = { email: userEmail };

    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      if (user) {
        // Inside the callback, make the API request
        axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
          .then((res) => {
            console.log('token response', res.data);
          })
          .catch((error) => {
            console.error('Error making token request:', error);
          });
      } else {
        // Handle the case where the user is not authenticated
        axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
          .then((res) => {
            console.log('logout response', res.data);
          })
          .catch((error) => {
            console.error('Error logging out:', error);
          });
      }
    });
  }, []);
console.log(user)

    const userInfo={
        user,
        loading,
        userSingUp,
        userSingIn,
        googleLogin,
        userSingOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;