import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./ProductDetail.css";
// import { Col, Row } from "react-bootstrap";
import ProductInfo from "./ProductInfo";

const productDetails = [
  {
    id: 0,
    reviews: [
      {
        description: "good one",
        userName: "Rahul",
        date: "22/06/2023",
        rating: 4,
      },
      {
        description: "worth for money",
        userName: "Raj",
        date: "20/06/2023",
        rating: 4,
      },
      {
        description: "love it",
        userName: "Punam",
        date: "05/06/2023",
        rating: 4,
      },
      {
        description: "must buy",
        userName: "Saumya",
        date: "16/06/2023",
        rating: 4,
      },
    ],
  },

  {
    id: 1,
    reviews: [
      {
        description: "good one",
        userName: "Rahul",
        date: "22/06/2023",
        rating: 4,
      },
      {
        description: "worth for money",
        userName: "Raj",
        date: "20/06/2023",
        rating: 5,
      },
      {
        description: "love it",
        userName: "Punam",
        date: "05/06/2023",
        rating: 4,
      },
      {
        description: "must buy",
        userName: "Saumya",
        date: "16/06/2023",
        rating: 5,
      },
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BfeUyUymhrBspKL9cGQgJrscwO9HQ9xSbQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjBCX-RkpgmPJ_AfaMDhevNYkQg_t7HOQG32ajxNW&s",
    ],
  },
  {
    id: 2,
    reviews: [
      {
        description: "good one",
        userName: "Rahul",
        date: "22/06/2023",
        rating: 4,
      },
      {
        description: "worth for money",
        userName: "Raj",
        date: "20/06/2023",
        rating: 5,
      },
      {
        description: "love it",
        userName: "Punam",
        date: "05/06/2023",
        rating: 4,
      },
      {
        description: "must buy",
        userName: "Saumya",
        date: "16/06/2023",
        rating: 5,
      },
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-zR2Pxd4gjS2mgXPcJV1R_HdxhzlmJbOKA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOhHKvbXYzYlPurkhbaHlwfzEKd7GI2UVnQ&usqp=CAU",
    ],
  },
  {
    id: 3,
    reviews: [
      {
        description: "good one",
        userName: "Rahul",
        date: "22/06/2023",
        rating: 4,
      },
      {
        description: "worth for money",
        userName: "Raj",
        date: "20/06/2023",
        rating: 5,
      },
      {
        description: "love it",
        userName: "Punam",
        date: "05/06/2023",
        rating: 4,
      },
      {
        description: "must buy",
        userName: "Saumya",
        date: "16/06/2023",
        rating: 5,
      },
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3d2o110ad0MyJk9D8tdmvYu0_b48tlgorfw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYxEr_FZa91sdaZyik69RKqAhfXgyp8Emcw&usqp=CAU",
    ],
  },
  {
    id: 4,
    reviews: [
      {
        description: "good one",
        userName: "Rahul",
        date: "22/06/2023",
        rating: 4,
      },
      {
        description: "worth for money",
        userName: "Raj",
        date: "20/06/2023",
        rating: 5,
      },
      {
        description: "love it",
        userName: "Punam",
        date: "05/06/2023",
        rating: 4,
      },
      {
        description: "must buy",
        userName: "Saumya",
        date: "16/06/2023",
        rating: 5,
      },
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdQShjmDPQ0kNqV--W6p-AwACyoe9Nh9yVeDvh5XyxShP3gCs0JaJ-TulEloXGb6wZWs&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWoG7aUesAZA-cGk5jD27MXEVDIFj6Auy3Io1rMRD2T69h4GWVJUoYLY_hvuDK_yWAQs&usqp=CAU",
    ],
  },
];

const ProductDetail = () => {
  const params = useParams();
  console.log(productDetails[0].reviews[0]);
  return (
    <>
      <br />
      <ProductInfo
        id={productDetails[params.productID].id}
        reviews={productDetails[params.productID].reviews}
        img={productDetails[params.productID].images}
      ></ProductInfo>
    </>
  );
};

export default ProductDetail;
