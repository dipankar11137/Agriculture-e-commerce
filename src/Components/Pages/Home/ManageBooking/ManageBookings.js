import React, { useEffect, useState } from 'react';
import ManageBooking from './ManageBooking';

const ManageBookings = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/buy`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
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
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ManageBooking
                key={product._id}
                product={product}
                index={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
