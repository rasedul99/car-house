import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Restock from "../../components/Restock/Restock";
import Layout from "../Layout";

const Product = () => {
  const { id } = useParams();
  const [product, SetProduct] = useState({});
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        SetProduct(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <Layout>
      <div className="container my-5">
        <Card>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSltHynfdhMdy3DsmIkKF2IrvNoA1eyDRrJy_BO4nLmoK3Ig9rhkPk1l5OvVza_0TU8Czk&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>2011 Mini Countryman COOPER S</Card.Title>
            <Card.Text>
              THIS ATTRACTIVE COOPER S COUNTRYMAN IS NOW AVAILABLE. 5 DOOR,
              TURBO AND ALLOYS... THIS IS A LOVELY EXAMPLE AND DRIVES WELL. WITH
              DARK TRIM, MULTIPLE AIRBAGS AND CAM CHAIN RELIABILITY.
            </Card.Text>
            <Card.Text>Price :$20</Card.Text>
            <Card.Text>Quantity :20</Card.Text>
            <Card.Text>Supplier Name :rased</Card.Text>
            <Button variant="primary">delivered</Button>
          </Card.Body>
        </Card>
        <Restock props="name" />
      </div>
    </Layout>
  );
};

export default Product;
