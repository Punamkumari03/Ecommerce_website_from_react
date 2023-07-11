import React from 'react'
import { Button } from 'react-bootstrap'

const CartItem = (props) => {
    const price=`$${props.price.toFixed(2)}`;
  return (
  <>
    <div className='d-flex'>
        <div className='col-lg-6'>
            <img src={props.img} alt="" className='col-lg-4'></img>
            <p className='col-lg-6'>{props.title}</p>
</div>
<p className='col-lg-3'>{price}</p>
<div className='col-lg-3 d-flex'>
    <p>X{props.quantity}</p>
    <br/>
    <div>
        <Button variant="danger" onClick={props.onRemove}>Remove</Button>
    </div>
</div>
    </div>
  </>
  )
}

export default CartItem
