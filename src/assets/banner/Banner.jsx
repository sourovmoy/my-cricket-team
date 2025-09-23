import React from "react";
import banner from "../images/banner-main.png";

const Banner = () => {
  return (
    <div className="bg-[#131313] h-[60vh] rounded-3xl flex justify-center items-center text-center">
      <div className="">
        <img className="mx-auto" src={banner} alt="" />
        <h3 className="text-3xl font-bold mt-5">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h3>
        <p className="my-3">Beyond Boundaries Beyond Limits</p>

        <button className="btn border-2 border-white bg-[#E7FE29] text-black font-semibold rounded-2xl">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
