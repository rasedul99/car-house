import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Product Name : </label>
        <input name="productname" {...register("productname")} />
      </div>
      <div>
        <label> Image :</label>
        <input type="url" name="image" {...register("image")} />
      </div>
      <div>
        <label> Short description :</label>

        <input name="description" {...register("description")} />
      </div>
      <div>
        <label>Price :</label>
        <input type="number" name="price" {...register("price")} />
      </div>
      <div>
        <label>Supplier Name :</label>
        <input name="suppliername" {...register("suppliername")} />
      </div>
      <button>Update</button>
      <button>Submit</button>
    </form>
  );
};
export default AddProduct;
