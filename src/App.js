import React, { Children, useContext, useState } from "react";
import Header from "./components/UI/header/Header";
import Store from "./components/UI/middle/Store";
import Footer from "./components/UI/footer/Footer";
import Cart from "./components/cart/Cart";
import CartProvider from "./context/CartProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/home/Home";
import RootLayout from "./components/UI/RootLayout";
import Contact from "./components/Contact/Contact";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ProductDetail from "./components/UI/middle/ProductDetail";
import Login from "./components/login/Login";
import AuthContext from "./context/auth-context";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { path: "/home", element: <Home /> },
//       { path: "/about", element: <About /> },
//       { path: "/store", element: <Store /> },
//       {path:"/contact",element:<Contact/>}
//     ],
//   },
// ]);
const App = () => {
  const[cartShown,setCartShown] = useState(false)
  const authCtx = useContext(AuthContext)
  const showCartHandler = ()=>{
      setCartShown(true)
    }
    const hideCartHandler = ()=>{
      setCartShown(false)
    }
  return (
    <CartProvider>
            {cartShown && <Cart onHideCart={hideCartHandler}></Cart>}
   <Header onShowCart={showCartHandler}></Header>
      
       <Switch>
      <Route path='/' exact>
        <Redirect to='/home'/>
      </Route>
      <Route path='/store' exact>
      <Store/>
      {authCtx.isLoggedIn && <Store/> }
        {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
     
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/contact'>
        <Contact/>

      </Route>
      <Route path='/store/:productId'>
        <ProductDetail></ProductDetail>
      </Route>
      </Switch>
    
      <Footer/>
    </CartProvider>
  );
};

export default App;

