import React from "react";
import logo from "../images/logo.png";
import coin from "../images/coin.png";
const Navbar = ({ amount }) => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="bg-gray-800 rounded-lg mb-1">
                <a className="flex" href="">
                  <span className="mx-2 font-semibold">{amount}</span>
                  <span className="flex items-center font-semibold">
                    Coins <img className="h-5 mx-2" src={coin} alt="" />
                  </span>
                </a>
              </li>
              <li className="bg-gray-800 rounded-lg mb-1">
                <a>Home</a>
              </li>
              <li className="bg-gray-800 rounded-lg mb-1">
                <a>Fixture</a>
              </li>
              <li className="bg-gray-800 rounded-lg mb-1">
                <a>Teams</a>
              </li>
              <li className="bg-gray-800 rounded-lg mb-1">
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <img className="w-[10vw] md:w-[5vw] " src={logo} alt="" />
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold hover:scale-[1.02]">
              <a>Home</a>
            </li>
            <li className="font-bold hover:scale-[1.02]">
              <a>Fixture</a>
            </li>
            <li className="font-bold hover:scale-[1.02]">
              <a>Teams</a>
            </li>
            <li>
              <a className="font-bold hover:scale-[1.02]">Schedules</a>
            </li>
            <li>
              <a className="flex bg-gray-800">
                <span className="mx-2 font-semibold">{amount}</span>
                <span className="flex items-center font-semibold">
                  {" "}
                  Coins <img className="h-5 mx-2" src={coin} alt="" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
