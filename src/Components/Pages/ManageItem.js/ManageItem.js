import React from "react";
import { AiFillMinusCircle } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
const ManageItem = ({
  product,
  index,
  handleRemove,
  handleEdit,
  singleProduct,
  handleRestock,
  handleDecrease,
}) => {
  return (
    <tr className="text-lg text-center">
      <th>{index}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={product?.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div className="text-start">
            <div className="font-bold">{product?.name}</div>
            <div className="text-sm opacity-50">{product?.location}</div>
          </div>
        </div>
      </td>

      <td>{product?.category}</td>
      <td>{product?.userName}</td>
      <td>{product?.email}</td>
      {/* <td>{product?.location}</td> */}
      <td className=" ">
        <div className="w-[300px] overflow-y-auto whitespace-normal h-20">
          {product?.description}
        </div>
      </td>
      <td>
        <span className="font-bold text-xl"> {product?.quantity}</span>{' '}
        {product?.weight}
      </td>
      <td>{product?.price}</td>
      {/* handle edit start */}
      <td>
        <label
          onClick={() => handleEdit(product?._id)}
          for="my-modal-3"
          className="btn bg-primary text-white  modal-button"
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

                    <span className="text-xl font-bold">
                      {' '}
                      {singleProduct?.weight}
                    </span>
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

      {/* handle decrease start */}
      <td className="">
        <label
          onClick={() => handleEdit(product?._id)}
          for="my-modal-4"
          className=" text-white hover:cursor-pointer modal-button"
        >
          <AiFillMinusCircle className="  rounded-full text-5xl text-primary ml-10" />
        </label>

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              for="my-modal-4"
              className="btn btn-primary  text-white  btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>
              <div className="card w-96 bg-base-100 ">
                <div className="card-body appleProducts-center text-center">
                  <h1 className="text-2xl font-bold">
                    Name : {singleProduct.name}
                  </h1>
                  <form onSubmit={handleDecrease}>
                    <input
                      type="number"
                      name="quantity"
                      id=""
                      placeholder="Enter a Number"
                      className="input input-bordered input-error hover:border-lime-500"
                    />
                    <span className="text-xl font-bold">
                      {' '}
                      {singleProduct?.weight}
                    </span>
                    <input
                      type="submit"
                      className=" ml-3 btn mt-2 btn-primary pt-1 text-white  font-bold rounded-lg"
                      value="Decrease"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      {/* handle decrease end */}
      <th>
        <button
          onClick={() => handleRemove(product?._id)}
          className=" text-white"
        >
          <img
            className="h-16 "
            src="https://app.tryzulu.com/assets/static/images/delete-gif-dark-mode.gif"
            alt=""
          />
        </button>
      </th>
    </tr>
  );
};

export default ManageItem;
