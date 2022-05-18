import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ car }) => {
  return (
    <div className="col-md-4">
      <Card className="mb-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={car?.img} />
        <Card.Body>
          <Card.Title>{car?.productname}</Card.Title>
          <Card.Text>{car?.description}</Card.Text>
          <Link to={`/inventory/${car._id}`} className="btn btn-primary ">
            Manage
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
