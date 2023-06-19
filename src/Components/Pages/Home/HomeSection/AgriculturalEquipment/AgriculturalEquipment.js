import React from "react";

const AgriculturalEquipment = ({ product, handleBuy }) => {
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
          src={product?.image}
          alt=""
        />
        <div className="p-3 mt-3  pb-10">
          <h2 className="text-2xl font-bold">{product?.name}</h2>
          <h2 className="text-xl font-semibold">Price : {product?.price}</h2>

          <h2 className="text-xl font-semibold">Made in {product?.location}</h2>
          <h1>{product?.description}</h1>
        </div>
      </div>
      <div className="overlay rounded-lg">
        <button
          onClick={() => handleBuy(product._id)}
          className="btn btn-primary"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default AgriculturalEquipment;
