import React from 'react'
import { Button } from 'react-bootstrap'
import "./HeaderCartButton.css"

const HeaderCartButton = (props) => {
  return (
    <>
        <Button className='d-flex button' onClick={props.showCart}>
            <p>Cart </p>
            <p>0</p>
        </Button>
    </>
  )
}

export default HeaderCartButton
