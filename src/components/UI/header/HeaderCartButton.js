import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import "./HeaderCartButton.css"
import CartContext from '../../../context/cart-context'

const HeaderCartButton = (props) => {
   const cartCtx = useContext(CartContext);
   const numberOfCartItem = cartCtx.items.length;
  return (
    <>
        <Button className='d-flex button' onClick={props.showCart}>
            <span>CART</span>
            <span>{numberOfCartItem}</span>
        </Button>
    </>
  )
}

export default HeaderCartButton
