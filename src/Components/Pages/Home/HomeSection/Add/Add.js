import React from "react";
import off from "../../../../../Images/image/off.png";

const Add = () => {
  return (
    <div className="flex">
      <img
        className="w-full h-[250px]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrm4ZV8KIyiq5OvTrmvMh32uDEHnx4V1bNjYc23yWm2MZyan9G45w3ds6T4wkzxmDV8Q&usqp=CAU"
        alt=""
      />
      <img className="w-[300px] h-[250px] animate-bounce" src={off} alt="" />
    </div>
  );
};

export default Add;
