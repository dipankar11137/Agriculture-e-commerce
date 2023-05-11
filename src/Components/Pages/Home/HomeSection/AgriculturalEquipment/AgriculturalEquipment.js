import React from "react";

const AgriculturalEquipment = () => {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
      className="container  bg-white shadow-2xl hover:shadow-inner rounded-lg hover:bg-green-900 hover:text-white hover:cursor-pointer  "
    >
      <div>
        <img
          className="rounded-lg pic-style w-full"
          src="https://acimotors-bd.com/assets/images/product/power-tiller/regular-16-v-2.0.jpg"
          alt=""
        />
        <div className="p-3 mt-3  pb-10">
          <h2 className="text-2xl font-bold">hello</h2>
          <h2 className="text-xl font-semibold">Price</h2>

          <h2 className="text-xl font-semibold">Made in </h2>
          <h1>Description</h1>
        </div>
      </div>
      <div className="overlay rounded-lg">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default AgriculturalEquipment;
