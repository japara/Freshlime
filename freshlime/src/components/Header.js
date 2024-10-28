import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <div className="flex justify-center  bg-[#e6f2ef]">
      <nav className="flex justify-between px-[4.8rem] bg-[#e6f2ef] items-center w-[100%] h-[96px] fixed">
        <img src={logo} alt="logo" width={118}></img>
        <ul className="list-none flex items-center gap-[2.8rem] text-[18px] font-[500] ">
          <li className="cursor-pointer">How it works</li>
          <li className="cursor-pointer">Inside us</li>
          <li className="cursor-pointer">Testimonials</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">
            <button className="bg-[#087f5b] text-white  rounded-[9px] w-[144px] h-[42px]">
              Try for free
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
