import React, { useEffect, useState } from "react";
import ManageItem from "./ManageItem";
import { FaUpload } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import ManageAddItem from "./ManageAddItem";
const ManageItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div>
      {/* modal start */}
      <div className="flex justify-center my-3">
        <h1
          data-aos="fade-right"
          data-aos-duration="3000"
          className="mt-1 text-4xl uppercase font-extrabold flex text-accent"
        >
          Add A Product <FaHandPointRight className="ml-4 mt-1 text-primary" />
        </h1>
        <label
          htmlFor="sellingModal"
          className="btn btn-primary text-xl text-white ml-20 font-bold "
        >
          Click Here{" "}
          <FaUpload className="text-white ml-5 text-3xl animate-bounce " />
        </label>
        <ManageAddItem />
      </div>

      {/* modal end */}
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
              <ManageItem
                key={product._id}
                product={product}
                index={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
