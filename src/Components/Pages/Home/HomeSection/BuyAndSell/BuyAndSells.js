import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BuyAndSell from "./BuyAndSell";
import sell from "../../../../../Images/image/images-removebg-preview.png";
import buy from "../../../../../Images/image/buy-removebg-preview.png";
import { FaUpload } from "react-icons/fa";
import SellModal from "./SellModal";

const BuyAndSells = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mx-20 mb-20 bg-pink-100 rounded-lg mt-14">
      <div className="flex justify-center">
        <img
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="h-56 animate-bounce"
          src={buy}
          alt=""
        />
        <div>
          <h1 className="text-5xl mb-14  font-extrabold pt-5">
            Buying And Selling
          </h1>

          {/* modal start */}
          <label
            htmlFor="sellingModal"
            className="btn btn-primary text-xl text-white ml-20 font-bold"
          >
            Selling You Products{" "}
            <FaUpload className="text-white ml-5 text-3xl" />
          </label>
          <SellModal />

          {/* modal end */}
        </div>
        <img
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="h-56 animate-bounce"
          src={sell}
          alt=""
        />
      </div>
      <div className="grid grid-cols-3 gap-10 bg-green-50 rounded-lg p-2">
        {" "}
        {products.map((product) => (
          <BuyAndSell />
        ))}
      </div>
    </div>
  );
};

export default BuyAndSells;
