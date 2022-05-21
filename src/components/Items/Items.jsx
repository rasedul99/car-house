import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
const Items = () => {
  const [cars, setCars] = useState([]);
  console.log(cars);
  useEffect(() => {
    fetch("https://radiant-lake-83898.herokuapp.com/allcars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.data);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <h3 className="text-center my-3">inventory items</h3>

        <div className="row">
          {cars.slice(0, 6)?.map((car) => (
            <Item car={car} key={car._id} />
          ))}
        </div>
      </div>
      <div className="my-3 text-center">
        <Link to="/manage-inventories" className="btn btn-primary  ">
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default Items;
