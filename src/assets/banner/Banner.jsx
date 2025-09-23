import React from "react";
import banner from "../images/banner-main.png";

const Banner = () => {
  return (
    <div className="bg-[#131313]  rounded-3xl flex justify-center items-center text-center mt-20">
      <div className="">
        <img className="mx-auto mt-10" src={banner} alt="" />
        <h3 className="text-2xl md:text-3xl font-bold mt-5">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h3>
        <p className="my-3">Beyond Boundaries Beyond Limits</p>

        <button className="btn border-3 mb-10 border-white  bg-[#E7FE29] text-black font-semibold rounded-2xl hover:scale-[1.01]">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
