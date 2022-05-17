import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSltHynfdhMdy3DsmIkKF2IrvNoA1eyDRrJy_BO4nLmoK3Ig9rhkPk1l5OvVza_0TU8Czk&usqp=CAU"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSltHynfdhMdy3DsmIkKF2IrvNoA1eyDRrJy_BO4nLmoK3Ig9rhkPk1l5OvVza_0TU8Czk&usqp=CAU"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6SX5_ZSzFTeqk3SD-jkNfJJ0bc5pVixHr6NXqAd59547FQqSjmHrNpS3aWB3Q9bUb1o4&usqp=CAU"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
