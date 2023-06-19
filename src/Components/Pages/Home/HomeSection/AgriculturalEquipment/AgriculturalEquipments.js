import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AgriculturalEquipment from './AgriculturalEquipment';

const AgriculturalEquipments = () => {
  const [products, setProducts] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    fetch('http://localhost:5000/buyAndSell/Agricultural Equipment')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  const handleBuy = id => {
    navigator(`/buy/${id}`);
  };
  return (
    <div className="mx-20 mb-20">
      <h1 className="text-5xl mb-14 text-center font-extrabold">
        Agricultural Equipment
      </h1>
      <div className="grid grid-cols-4 gap-6 bg-lime-100 rounded-lg p-2">
        {' '}
        {products.map(product => (
          <AgriculturalEquipment
            key={product._id}
            product={product}
            handleBuy={handleBuy}
          ></AgriculturalEquipment>
        ))}
      </div>
    </div>
  );
};

export default AgriculturalEquipments;
