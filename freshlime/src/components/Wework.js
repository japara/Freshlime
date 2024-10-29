import React from "react";
import pers1 from "../images/customer-1.jpg";
import pers2 from "../images/customer-2.jpg";
import pers3 from "../images/customer-3.jpg";
import pers4 from "../images/customer-4.jpg";
import gym1 from "../images/gym-1.jpg";
import gym2 from "../images/gym-2.jpg";
import gym3 from "../images/gym-3.jpg";
import gym4 from "../images/gym-4.jpg";
import gym6 from "../images/gym-6.jpg";

function Wework() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-[#e6f2ef] pt-20 px-4 md:px-8 lg:px-12">
      {/* Left Section */}
      <div className="flex-1 p-6 text-left">
        <p className="text-[#077252] font-semibold text-[1.4rem] md:text-[1.6rem] uppercase mt-8">
          How we work
        </p>
        <p className="font-bold text-[2rem] md:text-[3rem] mb-4 md:mb-8">
          Our benefits and skills <br /> that make you happy
        </p>

        {/* Grid for testimonials with 2 columns on all screens */}
        <div className="grid grid-cols-2 gap-6">
          {[pers1, pers2, pers3, pers4].map((person, index) => (
            <div key={index} className="flex flex-col gap-4">
              <img
                src={person}
                alt={`person${index + 1}`}
                className="rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
              <p className="text-[1rem] md:text-[1.125rem]">
                Hi there, Lola here. I never liked the gym before. I am lazy,
                hahaha! But at Fresh Lime, you just can't be lazy. You want to
                work out for hours and never stop!
              </p>
              <p className="text-[#777] text-[0.875rem] md:text-[1rem]">
                — Lola Lee
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 p-6 mt-8 md:mt-0">
        {/* Images in one horizontal line on small screens */}
        <div className="flex gap-2 sm:gap-4 md:grid md:grid-cols-3">
          {[gym1, gym2, gym3, gym4, gym1, gym6].map((gymImage, index) => (
            <img
              key={index}
              src={gymImage}
              alt={`gym${index + 1}`}
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-full md:h-auto transition-transform rounded-2xl duration-300 ease-in-out hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wework;
