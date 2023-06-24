import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AgriculturalMedicine from './AgriculturalMedicine';

const AgriculturalMedicines = () => {
  const [products, setProducts] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    fetch('http://localhost:5000/buyAndSell/Agricultural Medicine')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  const handleBuy = id => {
    navigator(`/buy/${id}`);
  };
  return (
    <div className=" mx-20 mb-20 ">
      <h1 className="my-10 text-5xl font-extrabold text-center">
        Agricultural Medicine{' '}
      </h1>
      <div className="grid grid-cols-6 gap-4 bg-slate-100 rounded-lg p-4">
        {' '}
        {products.map(product => (
          <AgriculturalMedicine
            key={product._id}
            product={product}
            handleBuy={handleBuy}
          ></AgriculturalMedicine>
        ))}
      </div>
    </div>
  );
};

export default AgriculturalMedicines;
