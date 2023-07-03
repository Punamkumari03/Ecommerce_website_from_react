import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./ProductDetail.css";
import { Col, Row } from "react-bootstrap";

const ProductDetail = (props) => {
  // const params = useParams();
  return (
    <div>
      <div className="d-flex flex-column justify-content-center">
        <br />
        <h2 className="text-center">Product Detail</h2>
        <div className="container product">
        <Row>
        <Col>
          <img
            className="img"
            alt=""
            src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
          ></img>
          </Col>
          <Col>
        <h3>Colors</h3>
        <p>Lorem24Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
            sorrows, hates no prosecutors will unfold in the enduring of which
            were born in it? Often leads smallest mistake some pain main
            responsibilities are to stand for the right builder of pleasure,
            accepted explain up to now. , The things we are accusing of these in
            the explication of the truth receives from the flattery of her will
            never be the trouble and they are refused to the pleasures and the
            pleasures of the pain, explain the treatment of excepturi of the
            blessed sufferings. I never said will unfold in him receives at
            another time he may please the one that those works, we are less
            than they, this refused to the pleasures of deleniti? Those are!
            Will unfold in times of pleasure, this pain will be a right enjoyed
            by corrupt, are accusing him of all pl</p>
          </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
