import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css'
import HeaderCartButton from './HeaderCartButton'
import AuthContext from '../../../context/auth-context'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Header = (props) => {
  const history = useHistory()
  const authCtx = useContext(AuthContext);
  const logoutHandler = ()=>{
    authCtx.logout();
    history.replace('/home')
  }
  return (
   <>
    <Navbar bg="dark" expand="sm" variant='dark'>
        <Container>
       <Nav className='me-auto d-flex justify-content-center nav'>
        <Nav.Link href='/home'>Home</Nav.Link>
        <Nav.Link href='/store'>STORE</Nav.Link>
        <Nav.Link href='/about'>ABOUT</Nav.Link>
        <Nav.Link href='/login'>LOGIN</Nav.Link>
        <Nav.Link href='/contact'>CONTACT</Nav.Link>
        
       

       </Nav>
       {authCtx.isLoggedIn && <Button onClick={logoutHandler}>LOGOUT</Button>}
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
