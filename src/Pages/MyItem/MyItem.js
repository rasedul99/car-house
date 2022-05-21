import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase";

const MyItem = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  console.log(items);
  const [user] = useAuthState(auth);
  console.log(user.email);
  const url = `https://radiant-lake-83898.herokuapp.com/carhouse/mycar?email=${user.email}`;
  useEffect(() => {
    const getMyItems = () => {
      fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status === 401 || data.status === 403) {
            navigate("/signin");
            signOut(auth);
          }
          setItems(data.mycar);
        });
    };
    getMyItems();
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
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
          }
        });
    }
  };
  return (
    <div className="container my-2">
      <h3 className="text-center my-3">My items</h3>
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
          {items?.map((item) => {
            return (
              <tr>
                <td>{item.productname}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.suppliername}</td>
                <td>
                  <input
                    onClick={() => {
                      deleteHandler(item._id);
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

export default MyItem;
