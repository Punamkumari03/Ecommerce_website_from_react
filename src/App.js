
import React, { useState } from 'react'
import Header from './components/UI/header/Header'
import Store from './components/UI/middle/Store'
import Footer from './components/UI/footer/Footer'
import Cart from './components/cart/Cart'
import CartProvider from './context/CartProvider'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/about/About'

const router = createBrowserRouter([
  {path: '/',element:<Header/>},
  {path:'/about',element:<About/>}
])
const App = () => {
  const[cartShown,setCartShown] = useState(false)
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
   <Store/>
   <Footer/>
   <RouterProvider router={router} />
   </CartProvider>
  )
}

export default App
