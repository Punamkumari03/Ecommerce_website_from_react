import React, { useContext } from "react";
import StoreCard from "./StoreCard";
import { Button } from "react-bootstrap";
import CartContext from "../../../context/cart-context";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const productsArr = [
  {
    id: 1,
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    reviews: "Good",
  },

  {
    id: 2,
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    reviews: "Very Good",
  },

  {
    id: 3,
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    reviews: "average",
  },

  {
    id: 4,
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    reviews: "nice",
  },
];

const Store = (props) => {
  <Header />;
  const ctx = useContext(CartContext);
  // const addToCart = (id, amount) => {
  //   ctx.addItem({
  //     id: id,
  //     title: productsArr.title,
  //     price: productsArr.price,
  //     amount: amount,
  //     img: productsArr.imageUrl,
  //   });
  // };
  return (
    <>
      <div className="music">
        <br />
        <h2 className="text-center">MUSIC</h2>
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-center flex-wrap">
              {productsArr.map((data) => (
                <StoreCard
                  title={data.title}
                  price={data.price}
                  img={data.imageUrl}
                  onAddToCart={ctx.addItem.bind(null,data)}
                  id={data.id}
                  reviews = {data.reviews}
                />
              ))}
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <Button
            style={{
              backgroundColor: "grey",
              color: "rgb(24, 161, 161)",
              width: "15%",
              height: "8vh",
              fontWeight: "bold",
            }}
          >
            See The Cart
          </Button>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Store;
