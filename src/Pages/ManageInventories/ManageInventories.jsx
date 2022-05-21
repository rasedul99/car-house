import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageInventories = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://radiant-lake-83898.herokuapp.com/allcars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.data);
      });
  }, []);

  const deleteHandler = (id) => {
    const proceed = window.confirm("are you sure want to delete");
    console.log(proceed);
    if (proceed) {
      const url = `https://radiant-lake-83898.herokuapp.com/car/${id}`;
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("Deleted succesfuly");
            const remaining = cars.filter((cars) => cars._id !== id);
            setCars(remaining);
          }
        });
    }
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-2">
        <Link to="/add-inventory-item" className="btn btn-primary ">
          Add Product
        </Link>
      </div>
      <ToastContainer />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Product name</th>

            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {cars?.map((car) => {
            return (
              <tr>
                <td>{car.productname}</td>

                <td>{car.quantity}</td>
                <td>${car.price}</td>
                <td>{car.quantity}</td>
                <td>{car.suppliername}</td>
                <td>
                  <input
                    onClick={() => {
                      deleteHandler(car._id);
                    }}
                    type="button"
                    value="Delete"
                    className="btn btn-danger"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInventories;
