import React from "react";

const AgriculturalEquipment = () => {
  return (
    <div className="container  bg-white shadow-2xl hover:shadow-inner rounded-lg ">
      <div>
        <img
          className="rounded-lg pic-style w-full"
          src="https://acimotors-bd.com/assets/images/product/power-tiller/regular-16-v-2.0.jpg"
          alt=""
        />
        <div className="p-3">
          <h2 className="text-2xl font-bold">hello</h2>
          <h2 className="text-xl font-semibold">Price</h2>
          <h1>Description</h1>
        </div>
      </div>
      <div className="overlay">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default AgriculturalEquipment;
