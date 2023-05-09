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
    <div className="mt-20 mx-20 mb-20">
      <h1>Products {products.length}</h1>
      <AgriculturalMedicine />
    </div>
  );
};

export default AgriculturalMedicines;
