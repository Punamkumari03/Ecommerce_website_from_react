
import React, { Children, useState } from 'react'
import Header from './components/UI/header/Header'
import Store from './components/UI/middle/Store'
import Footer from './components/UI/footer/Footer'
import Cart from './components/cart/Cart'
import CartProvider from './context/CartProvider'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/about/About'
import Home from './components/home/Home'
import RootLayout from './components/UI/RootLayout'

const router = createBrowserRouter([
  { path: '/' , 
    element:<RootLayout />,
    children:[
      { path: '/home', element:<Home />},
      { path: '/about' , element:<About />},
      { path: '/store', element:<Store />}

    ]
  },
  
])
const App = () => {
 
 
  return (
   <CartProvider>

  
   
 
  
   <RouterProvider router={router} />
  
   </CartProvider>
  )
}

export default App
