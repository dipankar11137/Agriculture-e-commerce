import React from "react";
import "../../../../CSS/CardStyle.css";
import "../../../../CSS/ImageStyle.css";

const AgriculturalMedicine = () => {
  return (
    <div
      data-aos="flip-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="container  bg-white shadow-2xl hover:shadow-inner rounded-lg "
    >
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
