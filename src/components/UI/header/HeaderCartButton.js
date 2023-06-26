import React from 'react'
import { Button } from 'react-bootstrap'
import "./HeaderCartButton.css"

const HeaderCartButton = () => {
  return (
    <>
        <Button className='d-flex button'>
            <p>Cart </p>
            <p>0</p>
        </Button>
    </>
  )
}

export default HeaderCartButton
