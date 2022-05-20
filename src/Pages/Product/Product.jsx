import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Restock from "../../components/Restock/Restock";
import { useFetch } from "../../hook/useFetch";
import Layout from "../Layout";

const Product = () => {
  const { id } = useParams();
  const [car, setCar] = useFetch(id);

  const updateStock = (value) => {
    const currentStock = parseInt(car.quantity) + parseInt(value);
    const url = `http://localhost:5000/carupdate/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newquantity: currentStock }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("successfuly updated");
          setCar(car);
        }
      });
  };

  const updateSoldItem = (id) => {
    const currentSoldItem = parseInt(car.soldItem) + 1;
    const currentStock = parseInt(car.quantity) - 1;
    const url = `http://localhost:5000/carhouse/solditemupdate/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        newSoldItem: currentSoldItem,
        newStock: currentStock,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("successfuly updated");
          setCar(car);
        }
      });
  };
  return (
    <Layout>
      <div className="container my-5 ">
        <ToastContainer />
        <div className="row">
          <div className="col col-md-8">
            <Card>
              <div>
                <Card.Img variant="top" src={car?.image} />
              </div>

              <Card.Body>
                <div className="d-flex justify-content-between">
                  <p>ID:{car._id}</p>
                  <button
                    type="button"
                    onClick={() => {
                      updateSoldItem(car._id);
                    }}
                    class="btn btn-outline-primary"
                  >
                    Delevired
                  </button>
                </div>

                <Card.Text>Price :${car.price}</Card.Text>
                <Card.Title>Tittle:{car.productname}</Card.Title>
                <Card.Text>{car.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Card.Text>Supplier:{car.suppliername}</Card.Text>
                  <Card.Text>Sold:{car.soldItem}</Card.Text>
                  <Card.Text>Stock:{car.quantity}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col col-md-4">
            <Restock updateStock={updateStock} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
