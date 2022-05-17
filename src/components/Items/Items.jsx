import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
const fakeData = [
  {
    id: 1,
    img: "https://image.shutterstock.com/image-photo/auto-check-car-service-shop-600w-1701289168.jpg",
    tittle: "audi",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    img: "https://image.shutterstock.com/image-photo/auto-check-car-service-shop-600w-1701289168.jpg",
    tittle: "tesla",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    img: "https://image.shutterstock.com/image-photo/auto-check-car-service-shop-600w-1701289168.jpg",
    tittle: "walton",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    img: "https://image.shutterstock.com/image-photo/auto-check-car-service-shop-600w-1701289168.jpg",
    tittle: "walton",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 5,
    img: "https://image.shutterstock.com/image-photo/auto-check-car-service-shop-600w-1701289168.jpg",
    tittle: "walton",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 6,
    img: "https://image.shutterstock.com/image-photo/auto-check-car-service-shop-600w-1701289168.jpg",
    tittle: "walton",
    description: "Lorem ipsum dolor sit amet.",
  },
];
const Items = () => {
  const [products, setProducts] = useState(fakeData);
  console.log(products);

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </Row>
      <div className="text-center my-3">
        <Link to="/manage-inventories" className="btn btn-primary ">
          Manage Inventories
        </Link>
      </div>
    </Container>
  );
};

export default Items;
