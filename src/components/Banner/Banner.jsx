import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="https://pictures.dealer.com/m/mercedesbenzofcoloradospringsmb/0498/174ece748d526b6ebb6648ea4052bbccx.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="https://pictures.dealer.com/m/mercedesbenzofcoloradospringsmb/1517/6ae164168c81b775dc38afb54afd88f4x.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="https://pictures.dealer.com/m/mercedesbenzofcoloradospringsmb/1454/2627b6763ec31476268519d2a1b9ff5fx.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
