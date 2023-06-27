import React from "react";
import { Button, Modal } from "react-bootstrap";
import CartItem from "./CartItem";
import './Cart.css'

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = (props) => {
  return <>
    <Modal show={true} animation={false}>
        <Modal.Header>
            <Modal.Title className="title">Cart</Modal.Title>
            <Button onClick={props.onHideCart}><i class="fa-solid fa-xmark"></i></Button>
        </Modal.Header>
        <Modal.Body><div>
        <div className="d-flex ">
                        <p className="col-lg-6">ITEM</p>
                        <p className="col-lg-3">PRICE</p>
                        <p className="col-lg-3">QUANTITY</p>

                    </div>
                    {cartElements.map((data)=>(<CartItem title={data.title} price={data.price} quantity={data.quantity} img={data.imageUrl}></CartItem>))}
                    <div className="d-flex justify-content-end">
                        <h3>Total : $ 100</h3>
                    </div>
       
        </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.onHideCart}>
                Close
            </Button>
            <Button variant="success" onClick={props.onHideCart}>
                Purchase
            </Button>  
        </Modal.Footer>
    </Modal>
  </>;
};

export default Cart;
