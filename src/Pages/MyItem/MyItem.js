import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase";

const MyItem = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  console.log(items);
  const [user] = useAuthState(auth);
  console.log(user.email);
  const url = `http://localhost:5000/carhouse/mycar?email=${user.email}`;
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
  return (
    <div className="container my-5">
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
                    // onClick={() => {
                    //   deleteHandler(item._id);
                    // }}
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
