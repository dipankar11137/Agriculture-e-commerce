import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ManageBooking from './ManageBooking';

const ManageBookings = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/buy`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
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
          toast.success('Successfully Delete');
        });
    }
  };
  const handleDelivery = id => {
    const updateDelivered = { delivered: true };
    fetch(`http://localhost:5000/buyDelivered/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateDelivered),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Delivered Successfully');
      });
  };
  return (
    <div className="mx-20 shadow-xl">
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
              <th>Delivery Status</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ManageBooking
                key={product._id}
                product={product}
                index={index + 1}
                handleRemove={handleRemove}
                handleDelivery={handleDelivery}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
