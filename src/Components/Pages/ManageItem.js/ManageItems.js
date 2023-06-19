import React, { useEffect, useState } from "react";
import { FaHandPointRight, FaUpload } from 'react-icons/fa';
import ManageAddItem from './ManageAddItem';
import ManageItem from './ManageItem';
const ManageItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/buyAndSells')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  const handleRemove = id => {
    console.log(id);
  };
  return (
    <div className="mx-14">
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
          Click Here{' '}
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
              <th>Category</th>
              <th>Owner Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Description</th>
              <th>Remove</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ManageItem
                key={product._id}
                product={product}
                index={index + 1}
                handleRemove={handleRemove}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
