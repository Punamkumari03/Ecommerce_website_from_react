import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './StoreCard.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const StoreCard = (props) => {
  const submitHandler = event =>{
    event.preventDefault();
    props.onAddToCart(props.id,1)


  }
  return (
    <Link to={'/store'+ props.id}>
    <Card key={props.id} className='cards'>
        <Card.Body>
            <Card.Title className='text-center'>{props.title}</Card.Title>
            <br/>
            
            <Card.Img varent="top" src={props.img} />
            <br/>
            <Card.Text>${props.price}</Card.Text>
            
            <Button variant='primary' onClick={submitHandler}>Add to Cart</Button>
        </Card.Body>
    </Card>
    </Link>
  )
}

export default StoreCard
