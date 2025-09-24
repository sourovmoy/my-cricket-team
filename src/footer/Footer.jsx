import React from "react";
import img from "../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <div className=" z-1">
      <div className="flex justify-center outline-4 outline-gray-500 py-8 w-[85vw] rounded-4xl mx-auto z-5 mb-[-170px]">
        <div className="bg-gray-500 w-[80vw] rounded-4xl items-center text-center py-15">
          <h3 className="text-4xl font-semibold ">
            Subscribe to our Newsletter
          </h3>
          <p>Get the latest updates and news right in your inbox!</p>
          <div className="items-center mt-10 flex justify-center">
            <input
              className="bg-white mb-10 text-black py-1.5 rounded-l-2xl hover:scale-[1.02]"
              placeholder="   Your Email"
              type="email"
              name=""
              id=""
            />
            <button className="btn mb-10 border-l-1 border-white  bg-[#E7FE29] text-black font-semibold rounded-r-2xl hover:scale-[1.01]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black h-[130vh] md:h-[80vh] flex justify-center items-end">
        <div>
          <img className="mx-auto my-20" src={img} alt="" />
          <footer className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 pb-20 px-3 gap-10 items-center">
            <nav className="flex flex-col text-center md:text-left">
              <h6 className="footer-title text-2xl">About Us</h6>
              <p>
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </nav>
            <nav className="flex flex-col text-center">
              <h6 className="footer-title text-2xl">Quick Links</h6>
              <ul>
                <li>Home</li>
                <li className="my-3">Services</li>
                <li>About</li>
                <li className="my-3">Contact</li>
              </ul>
            </nav>
            <nav className="flex flex-col text-center">
              <h6 className="footer-title text-2xl">Subscribe</h6>
              <p>Subscribe to our newsletter for the latest updates.</p>
              <div className="items-center mt-10 flex justify-center">
                <input
                  className="bg-white mb-10 text-black py-1.5 rounded-l-2xl hover:scale-[1.02]"
                  placeholder="   Your Email"
                  type="email"
                  name=""
                  id=""
                />
                <button className="btn mb-10 border-l-1 border-white  bg-[#E7FE29] text-black font-semibold rounded-r-2xl hover:scale-[1.01]">
                  Subscribe
                </button>
              </div>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
