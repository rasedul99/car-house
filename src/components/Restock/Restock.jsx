import React from "react";
import { useForm } from "react-hook-form";

const Restock = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data.number);
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
          <label>Restock The items</label>
          <input type="number" name="number" {...register("number")} />
          <input
            className="btn btn-primary"
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Restock;
