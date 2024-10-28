import React, { useState } from "react";
import logo from "../images/logo.png";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#e6f2ef]">
      <nav className="flex justify-between items-center px-[4.8rem] w-full h-[96px] fixed bg-[#e6f2ef] z-50">
        <img src={logo} alt="logo" width={118} />

        {/* Full menu for large screens */}
        <ul className="hidden md:flex items-center gap-[2.8rem] text-[18px] font-[500]">
          <li className="cursor-pointer">How it works</li>
          <li className="cursor-pointer">Inside us</li>
          <li className="cursor-pointer">Testimonials</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">
            <button className="bg-[#087f5b] text-white rounded-[9px] w-[144px] h-[42px]">
              Try for free
            </button>
          </li>
        </ul>

        {/* Burger menu icon for small screens */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <IoClose className="w-8 h-8 cursor-pointer" onClick={toggleMenu} />
          ) : (
            <IoMenu className="w-8 h-8 cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </nav>

      {/* Mobile menu - visible when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[96px] left-0 right-0 bg-[#e6f2ef] p-4 z-40">
          <ul className="flex flex-col items-center gap-4 text-[18px] font-[500]">
            <li className="cursor-pointer" onClick={toggleMenu}>
              How it works
            </li>
            <li className="cursor-pointer" onClick={toggleMenu}>
              Inside us
            </li>
            <li className="cursor-pointer" onClick={toggleMenu}>
              Testimonials
            </li>
            <li className="cursor-pointer" onClick={toggleMenu}>
              Pricing
            </li>
            <li className="cursor-pointer" onClick={toggleMenu}>
              <button className="bg-[#087f5b] text-white rounded-[9px] w-[144px] h-[42px]">
                Try for free
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
