import React from "react";
import AgriculturalMedicine from "./AgriculturalMedicine";
import { useState } from "react";
import { useEffect } from "react";

const AgriculturalMedicines = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className=" mx-20 mb-20 ">
      <h1 className="my-10 text-5xl font-extrabold text-center">
        Agricultural Medicine{" "}
      </h1>
      <div className="grid grid-cols-6 gap-4 bg-slate-100 rounded-lg p-2">
        {" "}
        {products.map((product) => (
          <AgriculturalMedicine />
        ))}
      </div>
    </div>
  );
};

export default AgriculturalMedicines;
