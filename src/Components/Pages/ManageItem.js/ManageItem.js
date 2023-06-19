import React from "react";
import { FaEdit } from 'react-icons/fa';
const ManageItem = ({
  product,
  index,
  handleRemove,
  handleEdit,
  singleProduct,
  handleRestock,
}) => {
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
      {/* handle edit start */}
      <td>
        <label
          onClick={() => handleEdit(product?._id)}
          for="my-modal-3"
          className="btn bg-secondary text-white  modal-button"
        >
          <FaEdit className="text-2xl" />
        </label>

        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              for="my-modal-3"
              className="btn btn-primary text-white  btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>
              <div className="card w-96 bg-base-100 ">
                <div className="card-body appleProducts-center text-center">
                  <h1 className="text-2xl font-bold">
                    Name : {singleProduct.name}
                  </h1>
                  <img
                    className="mask mask-hexagon-2 "
                    src={singleProduct?.image}
                    alt=""
                  />
                  <form onSubmit={handleRestock}>
                    <input
                      type="number"
                      name="quantity"
                      id=""
                      placeholder="Enter a Number"
                      className="input input-bordered input-error hover:border-lime-500"
                    />

                    <input
                      type="submit"
                      className=" ml-3 btn mt-2 btn-primary pt-1 text-white  font-bold rounded-lg"
                      value="Restock"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      {/* handle edit end */}
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
