import React from "react";
import StoreCard from "./StoreCard";
import { Button } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Store = () => {
  return (
    <>
      <div className="music">
        <br />
        <h2 className="text-center">MUSIC</h2>
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-center flex-wrap">
                {productsArr.map((data)=>(<StoreCard title={data.title} price={data.price} img={data.imageUrl} />))}
            </div>
          </div>
        </div>
        <br/>
        <div className="d-flex justify-content-center">
        <Button style={{backgroundColor: 'grey',color:'rgb(24, 161, 161)',width:'15%',height:'8vh' ,fontWeight:'bold'}}>See The Cart</Button>
        </div>
        <hr/>
      </div>
    </>
  );
};

export default Store;
