
import React, { useState } from 'react'
import Header from './components/UI/header/Header'
import Store from './components/UI/middle/Store'
import Footer from './components/UI/footer/Footer'
import Cart from './components/cart/Cart'

const App = () => {
  const[cartShown,setCartShown] = useState(false)
  const showCartHandler = ()=>{
    setCartShown(true)
  }
  const hideCartHandler = ()=>{
    setCartShown(false)
  }
  return (
   <>

  
   {cartShown && <Cart onHideCart={hideCartHandler}></Cart>}
   <Header onShowCart={showCartHandler}></Header>
   <Store/>
   <Footer/>
   </>
  )
}

export default App
