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
    <div className="mt-[30px] flex justify-center items-center px-7 bg-[#e6f2ef] pt-[200px] mt-[5rem]">
      <div className="flex-1 p-6 text-left mt-[-350px]">
        <p className="text-[#077252] font-[600] text-[1.6rem] uppercase mt-[8rem]">
          how we work
        </p>
        <p className=" font-[700] text-[3rem] mb-[3rem]">
          Our benefits and skills <br /> that make u happy
        </p>
        <div className="grid grid-cols-2 mt-[4rem] gap-6">
          <div className="flex flex-col gap-6">
            <img
              src={pers1}
              alt="person1"
              className="rounded-full max-w-[64px]"
            ></img>
            <p className="text-[18px]">
              Hi there lola here, I never liked gym before. I am lazy hahahaha,
              but in Fresh Lime you just can't be lazy, wanna work hours and
              never stop!
            </p>
            <p className="text-[#777] text-[16px]">— Lola Lee</p>
          </div>
          <div className="flex flex-col gap-6 ">
            <img
              src={pers2}
              alt="person1"
              className="rounded-full max-w-[64px]"
            ></img>
            <p className="text-[18px]">
              Hi there lola here, I never liked gym before. I am lazy hahahaha,
              but in Fresh Lime you just can't be lazy, wanna work hours and
              never stop!
            </p>
            <p className="text-[#777] text-[16px]">— Lola Lee</p>
          </div>
          <div className="flex flex-col text-left gap-6">
            <img
              src={pers3}
              alt="person1"
              className="rounded-full max-w-[64px]"
            ></img>
            <p className="text-[18px]">
              Hi there lola here, I never liked gym before. I am lazy hahahaha,
              but in Fresh Lime you just can't be lazy, wanna work hours and
              never stop!
            </p>
            <p className="text-[#777] text-[16px]">— Lola Lee</p>
          </div>
          <div className="flex flex-col text-left gap-6">
            <img
              src={pers4}
              alt="person1"
              className="rounded-full max-w-[64px]"
            ></img>
            <p className="text-[18px]">
              Hi there lola here, I never liked gym before. I am lazy hahahaha,
              but in Fresh Lime you just can't be lazy, wanna work hours and
              never stop!
            </p>
            <p className="text-[#777] text-[16px]">— Lola Lee</p>
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 grid grid-cols-3 gap-4">
        <img
          src={gym1}
          alt="gym"
          className="block w-full h-auto transition-transform rounded-2xl duration-300 ease-in-out hover:scale-110"
        ></img>
        <img
          src={gym2}
          alt="gym"
          className="block w-full h-auto transition-transform rounded-2xl duration-300 ease-in-out hover:scale-110"
        ></img>{" "}
        <img
          src={gym3}
          alt="gym"
          className="block w-full h-auto transition-transform  rounded-2xl duration-300 ease-in-out hover:scale-110"
        ></img>{" "}
        <img
          src={gym4}
          alt="gym"
          className="block w-full h-auto transition-transform rounded-2xl duration-300 ease-in-out hover:scale-110"
        ></img>{" "}
        <img
          src={gym1}
          alt="gym"
          className="block w-full h-auto transition-transform rounded-2xl duration-300 ease-in-out hover:scale-110"
        ></img>{" "}
        <img
          src={gym6}
          alt="gym"
          className="block w-full h-auto transition-transform rounded-2xl duration-300 ease-in-out hover:scale-110"
        ></img>
      </div>
    </div>
  );
}

export default Wework;
