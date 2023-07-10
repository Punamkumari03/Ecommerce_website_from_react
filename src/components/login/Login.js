import React, { useContext, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import AuthContext from '../../context/auth-context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
    const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();


const authCtx = useContext(AuthContext);
  const submitHandler = (e) =>{
    e.preventDefault()
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0sOTxJYtjGd21a0QZxblpUO-gi6r2eKI',{
        method:"POST",
        body:JSON.stringify({
            email:enteredEmail,
            password:enteredPassword,
            returnSecureToken: true,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res)=>{
        if(res.ok){
            return res.json();
        }else{
            return res.json().then((data)=>{
                let errorMessage = "Authentication failed";
                throw new Error(errorMessage)
            })
        }

    }).then((data)=>{
        authCtx.login(data.idToken);
        history.replace('/store')
    }).catch((err) =>{
        alert(err.message)
    });

  }
  return (
    <>
    <h1 className='d-flex justify-content-center'>Login here</h1>
         <Form onSubmit={submitHandler}className='container'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  ref={emailInputRef} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  ref={passwordInputRef}placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <br/>
    </>
  )
}

export default Login