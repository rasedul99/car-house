import React from "react";
import { Button, Container, Table } from "react-bootstrap";

const items = [
  {
    productname: "toyota",
    email: "mdrased1010@gmail.com",
    Qty: 30,
    Price: 50,
    Total: 350,
    supplier: "rased",
  },
  {
    productname: "hjufkjsk",
    email: "mdrased1011@gmail.com",
    Qty: 30,
    Price: 50,
    Total: 350,
    supplier: "rased",
  },
  {
    productname: "audi",
    email: "mdrased1012@gmail.com",
    Qty: 50,
    Price: 100,
    Total: 250,
    supplier: "rudra",
  },
  {
    productname: "toyota",
    email: "mdrased1013@gmail.com",
    Qty: 30,
    Price: 50,
    Total: 350,
    supplier: "rased",
  },
];

const MyItems = () => {
  return (
    <Container>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Email</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr>
                <td>{item.productname}</td>
                <td>{item.email}</td>
                <td>{item.Qty}</td>
                <td>${item.Price}</td>
                <td>{item.Total}</td>
                <td>{item.supplier}</td>
                <td>
                  <Button>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyItems;
