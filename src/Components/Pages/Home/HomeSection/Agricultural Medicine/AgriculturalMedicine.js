import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../../firebase.init';
import '../../../../CSS/CardStyle.css';
import '../../../../CSS/ImageStyle.css';

const AgriculturalMedicine = ({ product, handleBuy }) => {
  const [user] = useAuthState(auth);
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      data-aos-once="true"
      className="container  bg-white shadow-2xl hover:shadow-inner rounded-lg hover:bg-green-900 hover:text-white hover:cursor-pointer "
    >
      <div>
        <img className="rounded-lg pic-style" src={product?.image} alt="" />
        <div className="p-3 mt-3  pb-10">
          <h2 className="text-2xl font-bold">{product?.name} </h2>
          <h2 className="text-xl font-semibold">Price : {product?.price} </h2>
          <h2 className="text-xl font-semibold">
            Made in : {product?.location}{' '}
          </h2>
          <h1>{product?.description} </h1>
        </div>
      </div>
      <div className="overlay rounded-lg">
        {user?.email === 'abc@def.com' ? (
          <button
            disabled
            onClick={() => handleBuy(product._id)}
            className="btn btn-primary text-white font-bold"
          >
            Buy Now
          </button>
        ) : (
          <button
            onClick={() => handleBuy(product._id)}
            className="btn btn-primary text-white font-bold"
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};

export default AgriculturalMedicine;
