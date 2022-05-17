import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  console.log(product);
  return (
    <div>
      <Col lg={4} md={3}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.tittle}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Link to={`/inventory/1`} className="btn btn-primary">
              Manage
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Item;
