import React from "react";

const ManageItem = ({ product, index, handleRemove }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={product?.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{product?.name}</div>
            <div className="text-sm opacity-50">{product?.location}</div>
          </div>
        </div>
      </td>

      <td>{product?.category}</td>
      <td>{product?.userName}</td>
      <td>{product?.email}</td>
      <td>{product?.location}</td>
      <td>{product?.description}</td>

      <th>
        <button
          onClick={() => handleRemove(product?._id)}
          className="btn btn-primary text-white btn-xs"
        >
          Remove
        </button>
      </th>
    </tr>
  );
};

export default ManageItem;
