import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
const Items = () => {
  const [cars, setCars] = useState([]);
  console.log(cars);
  useEffect(() => {
    fetch("http://localhost:5000/allcars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.data);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {cars?.map((car) => (
            <Item car={car} key={car._id} />
          ))}
        </div>
      </div>
      <div className="my-3 text-end">
        <Link to="/manage-inventories" className="btn btn-primary  ">
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default Items;
