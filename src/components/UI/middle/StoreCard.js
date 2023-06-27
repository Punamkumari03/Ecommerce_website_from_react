import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './StoreCard.css'

const StoreCard = (props) => {
  const submitHandler = event =>{
    event.preventDefault();
    props.onAddToCart(props.id,1)


  }
  return (
    <Card  className='cards'>
        <Card.Body>
            <Card.Title className='text-center'>{props.title}</Card.Title>
            <br/>
            <Card.Img varent="top" src={props.img} />
            <br/>
            <Card.Text>${props.price}</Card.Text>
            <Button variant='primary' onClick={submitHandler}>Add to Cart</Button>
        </Card.Body>
    </Card>
  )
}

export default StoreCard
