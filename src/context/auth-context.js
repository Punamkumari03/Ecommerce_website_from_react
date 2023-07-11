import React, { useState } from 'react';
const AuthContext = React.createContext({
    token:'',
    isLoggedIn : false,
    login: (token) =>{},
    logout : ()=>{}
})
 export const AuthContextProvider = (props) =>{
    const initialToken = localStorage.getItem('token');
    const[token,setToken] = useState(initialToken)
    const[email,setEmail] = useState(localStorage.getItem('email'))
    const userIsLoggedIn = !!token;

    const loginHandler = (token,email) =>{
        setToken(token)
        setEmail(email)
        // console.log(token,'loginHandler')
        localStorage.setItem('token',token);
        localStorage.setItem('email',email)
        // console.log(token)
    }
const logoutHandler =() =>{
    setToken(null)
}
const contextValue ={
    token: token,
    email:email,
    isLoggedIn: userIsLoggedIn,
    login:loginHandler,
    logout: logoutHandler
 }
 return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>

 }
 export default AuthContext;