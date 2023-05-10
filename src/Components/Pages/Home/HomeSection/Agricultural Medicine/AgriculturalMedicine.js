import React from "react";
import "../../../../CSS/CardStyle.css";
import "../../../../CSS/ImageStyle.css";

const AgriculturalMedicine = () => {
  return (
    <div className="container  bg-white shadow-2xl hover:shadow-inner rounded-lg w-96">
      <div>
        <img
          className="rounded-lg pic-style"
          src="https://3.imimg.com/data3/BO/BY/MY-13687334/kai-agro-80-plus-500x500.jpg"
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

export default AgriculturalMedicine;
