import React from 'react';

const ManageBooking = ({ product, index, handleRemove }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={product?.product?.image} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{product?.product?.name} </div>
            <div className="text-sm opacity-50">
              {product?.product?.location}{' '}
            </div>
          </div>
        </div>
      </td>
      <td>{product?.quantity}</td>
      <td>{product?.totalPrice}</td>
      <td>{product?.userName}</td>
      <td>{product?.address}</td>
      <td>{product?.phone}</td>
      <td>{product?.date}</td>
      <td>
        {product?.payment ? (
          <h1 className="text-xl font-bold text-blue-800">Paid</h1>
        ) : (
          <h1 className="text-xl font-bold text-red-800"> Unpaid</h1>
        )}
      </td>
      <th>
        {product?.payment ? (
          <button
            disabled
            // onClick={() => handleRemove(product?._id)}
            className="btn btn-primary text-white btn-xs"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => handleRemove(product?._id)}
            className="btn btn-primary text-white btn-xs"
          >
            Remove
          </button>
        )}
      </th>
    </tr>
  );
};

export default ManageBooking;
