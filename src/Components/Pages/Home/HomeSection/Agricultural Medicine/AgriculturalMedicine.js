import React from "react";
import "../../../../CSS/CardStyle.css";
import "../../../../CSS/ImageStyle.css";

const AgriculturalMedicine = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      data-aos-once="true"
      className="container  bg-white shadow-2xl hover:shadow-inner rounded-lg hover:bg-green-900 hover:text-white hover:cursor-pointer "
    >
      <div>
        <img
          className="rounded-lg pic-style"
          src="https://3.imimg.com/data3/BO/BY/MY-13687334/kai-agro-80-plus-500x500.jpg"
          alt=""
        />
        <div className="p-3 mt-3  pb-10">
          <h2 className="text-2xl font-bold">hello</h2>
          <h2 className="text-xl font-semibold">Price</h2>
          <h1>Description</h1>
        </div>
      </div>
      <div className="overlay rounded-lg">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default AgriculturalMedicine;
