import React, { useState } from 'react'
import Header from './header/Header'
import Cart from '../cart/Cart'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
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
   {/* <Outlet></Outlet> */}
    </>
  )
}

export default RootLayout
