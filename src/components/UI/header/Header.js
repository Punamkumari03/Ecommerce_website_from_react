import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
   <>
    <Navbar bg="dark" expand="sm" variant='dark'>
        <Container>
       <Nav className='me-auto d-flex justify-content-center nav'>
        <Nav.Link href='/home'>Home</Nav.Link>
        <Nav.Link href='/store'>STORE</Nav.Link>
        <Nav.Link href='/about'>ABOUT</Nav.Link>
       </Nav>
       <div className='d-flex justify-content-end'>
        <HeaderCartButton showCart={props.onShowCart}/>
       </div>
        </Container>
    </Navbar>
    <div className="heading d-flex justify-content-center">
        <p>The Generic</p>
    </div>
   </>
  )
}

export default Header
