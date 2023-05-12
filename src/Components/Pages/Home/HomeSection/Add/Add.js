import React from "react";
import off from "../../../../../Images/image/off.png";

const Add = () => {
  return (
    <div className="flex">
      <img
        className="w-full h-[250px] ml-6"
        src="https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg"
        alt=""
      />
      <img className="w-[300px] h-[250px] animate-bounce" src={off} alt="" />
    </div>
  );
};

export default Add;
