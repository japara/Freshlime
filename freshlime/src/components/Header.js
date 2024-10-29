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
      <nav className="flex justify-between items-center px-6 md:px-[4.8rem] w-full h-[6rem] fixed bg-[#e6f2ef] z-50">
        <img src={logo} alt="logo" className="w-[7.375rem] md:w-[7.375rem]" />

        {/* Full menu for large screens */}
        <ul className="hidden whitespace-nowrap md:flex items-center gap-[1.75rem] md:gap-[2.8rem] text-[1.125rem] font-[500]">
          <li className="cursor-pointer">How it works</li>
          <li className="cursor-pointer">Inside us</li>
          <li className="cursor-pointer">Testimonials</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">
            <button className="bg-[#087f5b] text-white rounded-[0.5625rem] w-[9rem] h-[2.625rem]">
              Try for free
            </button>
          </li>
        </ul>

        {/* Burger menu icon for small screens */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <IoClose
              className="w-[2rem] h-[2rem] cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <IoMenu
              className="w-[2rem] h-[2rem] cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </nav>

      {/* Mobile menu - visible when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[6rem] left-0 right-0 bg-[#e6f2ef] p-[1rem] z-40">
          <ul className="flex flex-col items-center gap-[1rem] text-[1rem] font-[500] md:text-[1.125rem]">
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
              <button className="bg-[#087f5b] text-white rounded-[0.5625rem] w-[7.5rem] h-[2.25rem] md:w-[9rem] md:h-[2.625rem]">
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
