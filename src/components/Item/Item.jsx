import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  console.log(product);
  return (
    <div className="col-md-4">
      <Card className="mb-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.tittle}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Link to={`/inventory/${product.id}`} className="btn btn-primary ">
            Manage
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
