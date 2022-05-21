import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ car }) => {
  console.log(car);
  return (
    <div className="col-md-4">
      <Card className="mb-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={car?.image} alt={car?.productname} />

        <Card.Body>
          <Card.Title>{car?.productname}</Card.Title>

          <Card.Text>{car?.description.slice(0, 100)}</Card.Text>
          <div className="d-flex justify-content-between">
            <Card.Text>
              <span className="h6">Sold :</span>
              {car.soldItem}
            </Card.Text>
            <Card.Text>
              <span className="h6">Stock :</span>
              {car.quantity}
            </Card.Text>
          </div>
          <div className="d-flex justify-content-between">
            <Card.Text>
              <span className="h6">Supplier :</span>
              {car.suppliername}
            </Card.Text>
            <Card.Text>
              <span className="h6">Price :</span>
              {car.price}
            </Card.Text>
          </div>

          <Link to={`/inventory/${car._id}`} className="btn btn-primary w-100">
            Manage
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
