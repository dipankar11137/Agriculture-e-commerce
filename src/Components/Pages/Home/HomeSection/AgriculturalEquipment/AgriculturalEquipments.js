import React from "react";
import AgriculturalEquipment from "./AgriculturalEquipment";
import { useState } from "react";
import { useEffect } from "react";

const AgriculturalEquipments = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mx-20 mb-20">
      <h1 className="text-5xl mb-14 text-center font-extrabold">
        Agricultural Equipment
      </h1>
      <div className="grid grid-cols-4 gap-6 bg-lime-100 rounded-lg p-2">
        {" "}
        {products.map((product) => (
          <AgriculturalEquipment />
        ))}
      </div>
    </div>
  );
};

export default AgriculturalEquipments;
