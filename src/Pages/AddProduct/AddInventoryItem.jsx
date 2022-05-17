import React from "react";
import { useForm } from "react-hook-form";

const AddInventoryItem = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <div className="w-50 mx-auto my-5">
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="row">
          <input
            className="p-2 my-2 rounded-pill"
            name="productname"
            placeholder="Tittle"
            {...register("productname")}
          />

          <input
            type="url"
            className="p-2 my-2 rounded-pill"
            placeholder="Input Url Link"
            name="image"
            {...register("image")}
          />

          <div className="row ">
            <input
              className="col-5 p-1 my-2 rounded-pill"
              placeholder="Product Price"
              type="number"
              name="price"
              {...register("price")}
            />
            <div className="col-2"></div>
            <input
              className="col-5 p-1 my-2 rounded-pill"
              placeholder="Quantity"
              type="number"
              name="quantity"
              {...register("quantity")}
            />

            <input
              className="col-5 p-1 my-2 rounded-pill"
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
            className="btn btn-success rounded-pill p-3"
          />
        </div>
      </form>
    </div>
  );
};
export default AddInventoryItem;
