import React from "react";
import { useForm } from "react-hook-form";

const Restock = ({ updateStock }) => {
  // console.log(updateStock);
  const { register, handleSubmit, reset } = useForm();
  const handleRegistration = (data) => {
    console.log(data.number);
    updateStock(data.number);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
          <h5>Add Stock Item :</h5>
          <div>
            <input
              type="number"
              className="p-2 w-100"
              placeholder="Input Stock"
              name="number"
              {...register("number")}
            />
          </div>
          <div className="my-1">
            <input
              className="btn btn-primary w-100 "
              type="submit"
              value="Add New Stock"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Restock;
