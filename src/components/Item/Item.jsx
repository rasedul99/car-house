import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSltHynfdhMdy3DsmIkKF2IrvNoA1eyDRrJy_BO4nLmoK3Ig9rhkPk1l5OvVza_0TU8Czk&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>2011 Mini Countryman COOPER S</Card.Title>
          <Card.Text>
            THIS ATTRACTIVE COOPER S COUNTRYMAN IS NOW AVAILABLE. 5 DOOR, TURBO
            AND ALLOYS... THIS IS A LOVELY EXAMPLE AND DRIVES WELL. WITH DARK
            TRIM, MULTIPLE AIRBAGS AND CAM CHAIN RELIABILITY.
          </Card.Text>
          <Card.Text>Price :$20</Card.Text>
          <Card.Text>Quantity :20</Card.Text>
          <Card.Text>Supplier Name :rased</Card.Text>
          <Link to={`/inventory/1`} variant="primary">
            Manage
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
