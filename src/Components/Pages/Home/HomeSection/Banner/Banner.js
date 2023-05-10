import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../../../../Images/banner/banner1.png";
import "../../../../CSS/Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    fade: true,
  };
  return (
    <Slider className=" mx-7" {...settings}>
      <div div className="relative  w-full">
        <img
          className="object-fill sliderImg  w-full"
          src={banner1}
          //   src="https://hexgn.com/wp-content/uploads/2019/02/convergence-of-the-agriculture-and-e-commerce-sector.jpg"
          alt=""
        />
        <div className="absolute1 flex flex-col  justify-start ml-[550px]">
          <div>
            <p className=" text-3xl font-bold text-lime-800 text-center mr-36">
              {" "}
              <span className="text-orange-600">
                Agriculture
              </span> E-Commerce{" "}
            </p>
          </div>
          <div>
            <h1 className="heroHead text-start  ">Vegetable Section</h1>
          </div>
          <div>
            <p className="heroP  pb-4 ">
              Vegetables are parts of plants that are consumed by humans or
              other <br /> animals as food. The original meaning is still
              commonly used and is applied <br /> to plants collectively to
              refer to all edible plant matter, including the flowers, <br />
              fruits, stems, leaves, roots, and seeds
            </p>
          </div>

          {/* <div className=" flex justify-end">
            <Link
              to="/"
              className=" px-3 py-3 uppercase rounded-lg text-white cursor-pointer bg-primary hover:bg-secondary text-italic font-bold"
            >
              Buy now
            </Link>
          </div> */}
        </div>
      </div>
      <div div className="relative    w-full  ">
        <img
          className="object-fill sliderImg   w-full  rounded-2xl"
          src="https://riddhisoilcare.com/wp-content/uploads/2020/10/Agriculture-Equipment-1.jpg"
          alt=""
        />
        {/* <div className="absolute1 flex flex-col  justify-start">
        <div className="mt-36">
          <p className="heroP text-lime-500 ">
            {" "}
            City<span className="text-orange-500">
              Crown
            </span> Electronics{" "}
          </p>
        </div>
        <div>
          <h1 className="heroHead text-start ">EarPot V4</h1>
        </div>
        <div>
          <p className="heroP text-white pb-4 ">
            {" "}
            Apple Product dolor amet consectetur <br />
            adipisicing Nobis, excepturi.{" "}
          </p>
        </div>

        <div className=" flex justify-start">
          <Link
            to="/showAllProducts"
            className=" btn bg-orange-600 text-italic font-bold"
          >
            Buy now
          </Link>
        </div>
      </div> */}
      </div>
      <div div className="relative   w-full  ">
        <img
          className="object-fill sliderImg   w-full  "
          src="https://www.kindpng.com/picc/m/420-4203865_fertilizer-medicine-png-transparent-png.png"
          alt=""
        />
        {/* <div className="absolute1 flex flex-col  justify-start">
        <div>
          <p className="heroP text-lime-500 ">
            {" "}
            City<span className="text-orange-500">
              Crown
            </span> Electronics{" "}
          </p>
        </div>
        <div>
          <h1 className="heroHead text-start ">iPad Pro</h1>
        </div>
        <div>
          <p className="heroP text-white pb-4 ">
            {" "}
            Apple Product dolor amet consectetur <br />
            adipisicing Nobis, excepturi.{" "}
          </p>
        </div>

        <div className=" flex justify-start">
          <Link
            to="/showAllProducts"
            className=" btn bg-orange-600 text-italic font-bold"
          >
            Buy now
          </Link>
        </div>
      </div> */}
      </div>
    </Slider>
  );
};

export default Banner;
