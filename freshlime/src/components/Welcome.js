import React from "react";
import cust1 from "../images/customer-1.jpg";
import cust2 from "../images/customer-2.jpg";
import cust3 from "../images/customer-3.jpg";
import cust4 from "../images/customer-4.jpg";
import cust5 from "../images/customer-5.jpg";
import cust6 from "../images/customer-6.jpg";
import gym from "../images/gym.jpg";

function Welcome() {
  return (
    <div className="flex  flex-col md:flex-row gap-6  justify-center bg-[#e6f2ef] py-[150px] z-999">
      <div className=" flex flex-col basis-4/12 items-center mr-[50px]">
        <h2 className="text-[50px] text-justify font-[900] leading-none mt-[40px]">
          Welcome to the <br />
          one of the best <br />
          Gym Freshlime
        </h2>
        <p className="text-[18px] text-justify mt-[60px]">
          This is the cheapest, comfrtable, best price <br />
          with world champion coatches and one of
          <br /> the best barthender for your protain shakes.
        </p>
        <div className="flex justify-between items-center mt-[70px]">
          <button className="bg-[#087f5b] text-white  rounded-[9px] w-[210px] h-[40px] mr-[10px]">
            Get your month pass
          </button>
          <button className="bg-white rounded-[9px] border-[1px] text-[16px]  w-[160px] h-[40px]">
            Learn more ↓
          </button>
        </div>
        <div className="flex items-center mt-[100px]">
          <img
            src={cust1}
            alt="costumer"
            className="w-[48px] h-[48px] rounded-full border-[3px] mr-[-15px]"
          ></img>
          <img
            src={cust2}
            alt="costumer"
            className="w-[48px] h-[48px] rounded-full border-[3px] mr-[-15px]"
          ></img>
          <img
            src={cust3}
            alt="costumer"
            className="w-[48px] h-[48px] rounded-full border-[3px] mr-[-15px]"
          ></img>
          <img
            src={cust4}
            alt="costumer"
            className="w-[48px] h-[48px] rounded-full border-[3px] mr-[-15px]"
          ></img>
          <img
            src={cust5}
            alt="costumer"
            className="w-[48px] h-[48px] rounded-full border-[3px] mr-[-15px]"
          ></img>
          <img
            src={cust6}
            alt="costumer"
            className="w-[48px] h-[48px] rounded-full border-[3px] "
          ></img>
          <p className="ml-[6px] font-[700] text-[16px]">
            from the{" "}
            <span className="bg-[#087f5b] text-transparent bg-clip-text">
              whole
            </span>{" "}
            world!
          </p>
        </div>
      </div>
      <div className="basis-4/12 rounded-[8px] flex items-center justify-center">
        <img
          src={gym}
          alt="gym"
          className="rounded-[8px]  shadow-[0_1px_15px_0px_#077252] w-[50%] md:w-fit"
        ></img>
      </div>
    </div>
  );
}

export default Welcome;
