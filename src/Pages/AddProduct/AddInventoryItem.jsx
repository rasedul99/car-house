import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase";

const AddInventoryItem = () => {
  const [user] = useAuthState(auth);
  console.log(user.email);
  const { register, handleSubmit, reset } = useForm();

  const handleRegistration = (result) => {
    const data = { ...result, email: user.email };

    fetch("https://radiant-lake-83898.herokuapp.com/carHouse", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`${data.message}`);
          reset();
        } else {
          toast("failed to insert");
        }
      });
  };

  return (
    <div className="w-50 mx-auto my-5">
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="row">
          <ToastContainer />
          <input
            className="p-2 my-2 rounded-pill"
            required
            name="productname"
            placeholder="Tittle"
            {...register("productname")}
          />

          <input
            type="url"
            required
            className="p-2 my-2 rounded-pill"
            placeholder="Input Url Link"
            name="image"
            {...register("image")}
          />

          <div className="row ">
            <input
              className="col-5 p-1 my-2 rounded-pill"
              required
              placeholder="Product Price"
              type="number"
              name="price"
              {...register("price")}
            />
            <div className="col-2"></div>
            <input
              className="col-5 p-1 my-2 rounded-pill"
              required
              placeholder="Quantity"
              type="number"
              name="quantity"
              {...register("quantity")}
            />

            <input
              className="col-5 p-1 my-2 rounded-pill"
              required
              placeholder="Supplier Name"
              name="suppliername"
              {...register("suppliername")}
            />
            <div className="col-2"></div>
            <input
              className="col-5 p-1 my-2 rounded-pill"
              placeholder="SoldItem"
              type="number"
              name="soldItem"
              {...register("soldItem")}
            />
          </div>
          <div>
            <h5>Product Details :</h5>

            <textarea
              style={{ width: "100%", height: "100px" }}
              required
              name="description"
              className="p-1 my-2 rounded"
              placeholder="Details"
              {...register("description")}
            />
          </div>

          <div>
            <h5> Suplier Details Info :</h5>
            <textarea
              style={{ width: "100%", height: "100px" }}
              placeholder="Your Message"
              className="p-1 my-2 rounded"
              name="supplierDetails"
              {...register("supplierDetails")}
            />
          </div>
          <input
            type="submit"
            value="Add New Product"
            className="btn btn-primary rounded-pill p-3"
          />
        </div>
      </form>
    </div>
  );
};
export default AddInventoryItem;
