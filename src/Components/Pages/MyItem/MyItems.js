import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import MyItem from './MyItem';

const MyItems = () => {
  const [users] = useAuthState(auth);
  const email = users?.email;

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/buys/${email}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products, email]);

  const handleRemove = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/buy/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = products.filter(product => product._id !== id);
          setProducts(remaining);
          toast.success('Successfully Remove');
        });
    }
  };
  const handlePayment = id => {
    navigate(`/payment/${id}`);
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Payment</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <MyItem
                key={product._id}
                product={product}
                index={index + 1}
                handleRemove={handleRemove}
                handlePayment={handlePayment}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItems;
