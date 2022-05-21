import { useEffect, useState } from "react";

const useFetch = (id) => {
  console.log(id);
  const [car, setCar] = useState({});
  console.log(car);
  useEffect(() => {
    fetch(`https://radiant-lake-83898.herokuapp.com/carhouse/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCar(data.result);
      });
  }, [car]);

  return [car, setCar];
};

// const useUpdateSoldItem = (id, car) => {
//   const currentSoldItem = parseInt(car.soldItem) + 1;
//   const currentStock = parseInt(car.quantity) - 1;
//   const url = `https://radiant-lake-83898.herokuapp.com/carhouse/solditemupdate/${id}`;
//   useEffect(() => {
//     fetch(url, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         newSoldItem: currentSoldItem,
//         newStock: currentStock,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.acknowledged) {
//           toast("successfuly updated");
//         }
//       });
//   }, [id]);
// };

export { useFetch };
