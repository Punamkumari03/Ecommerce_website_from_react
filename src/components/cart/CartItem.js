import React from 'react'
import { Button } from 'react-bootstrap'

const CartItem = (props) => {
    const price=`$${props.price}`;
  return (
  <>
    <div className='d-flex'>
        <div className='col-lg-6'>
            <img src={props.img} alt="" className='col-lg-4'></img>
            <p className='col-lg-6'>{props.title}</p>
</div>
<p className='col-lg-3'>{price}</p>
<div className='col-lg-3 d-flex'>
    <p>2</p>
    <br/>
    <div>
        <Button variant="danger" onclick={props.onRemove}>Remove</Button>
    </div>
</div>
    </div>
  </>
  )
}

export default CartItem
