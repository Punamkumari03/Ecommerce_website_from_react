import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'

const Contact = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const numberRef = useRef('');

     async function submitHandler  (event){
        event.preventDefault()
        const data = {
            name:nameRef.current.value ,
            email:emailRef.current.value ,
            number: numberRef.current.value ,
        }
        console.log(data)
    const response = await fetch('https://ecommerce-98639-default-rtdb.firebaseio.com/users.json',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    });
    const user = await response.json();
    console.log(user)

   
    }
  return (
    <>
    <h1 className='d-flex justify-content-center'>Contact Us</h1>
    <Form onSubmit={submitHandler} className='container'>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" ref={nameRef} placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={emailRef}placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" ref={numberRef}placeholder="Enter your Phone number" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Contact
