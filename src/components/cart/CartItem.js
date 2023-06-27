import React from 'react'
import { Button } from 'react-bootstrap'

const CartItem = (props) => {
  return (
  <>
    <div className='d-flex'>
        <div className='col-lg-6'>
            <img src={props.img} alt="" className='col-lg-4'></img>
            <p className='col-lg-6'>{props.title}</p>
</div>
<p className='col-lg-3'>{props.price}</p>
<div className='col-lg-3 d-flex'>
    <p>2</p>
    <br/>
    <div>
        <Button variant="danger">Remove</Button>
    </div>
</div>
    </div>
  </>
  )
}

export default CartItem
