import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MyItem from "./MyItem";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <MyItem key={product._id} product={product} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItems;
