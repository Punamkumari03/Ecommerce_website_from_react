import React from 'react'
import { Carousel } from 'react-bootstrap'
import './ProductInfo.css'

const ProductInfo = (props) => {
  return (
    <>
         <div className="d-flex">
                <div className="d-flex justify-content-center col-lg-6 col-md-6 col-sm-12 image">
                <Carousel>
                    {props.img.map((img)=>(
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={img}
                            alt="First slide"
                            />       
                        </Carousel.Item>
                    ))}


                </Carousel>

                </div>


                <div className="col-lg-5 col-md-6 col-sm-12">
                <h1>Ratings and reviews</h1>
                <br />
                {props.reviews.map((data)=>(
                    <div >
                    <div className="d-flex">
                        <div className=" d-flex justify-content-center rating">
                            <p>{data.rating}</p>
                            <i class="fa-regular fa-star"></i>
                        </div>

                        <div className="description">
                            <p>{data.description}</p>
                        </div>
                    </div>

                     <div className="d-flex userInfo">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <p>{data.userName}</p>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
                            <p className="date">{data.date}</p>
                        </div>


                     </div>
                     <hr />
                </div>
                ))}
                </div>

            </div>
    </>
  )
}

export default ProductInfo
