import React from "react";
import n1 from "../images/techcrunch.png";
import n2 from "../images/business-insider.png";
import n3 from "../images/the-new-york-times.png";
import n4 from "../images/forbes.png";
import n5 from "../images/usa-today.png";
import meal from "../images/meal.jpg";
import pt from "../images/personal-trainer.jpg";
import equip from "../images/equipment.jpg";

function How() {
  return (
    <div className="px-[10%]">
      <div>
        <p className="text-[#999] font-[500] mt-[2rem]">As featured in hello</p>
        <div className="flex justify-around items-center my-[3.125rem]">
          <img
            src={n1}
            alt="news"
            className="max-h-[2rem] opacity-[50%] grayscale"
          />
          <img
            src={n2}
            alt="news"
            className="max-h-[2rem] opacity-[50%] grayscale"
          />
          <img
            src={n3}
            alt="news"
            className="max-h-[2rem] opacity-[50%] grayscale"
          />
          <img
            src={n4}
            alt="news"
            className="max-h-[2rem] opacity-[50%] grayscale"
          />
          <img
            src={n5}
            alt="news"
            className="max-h-[2rem] opacity-[50%] grayscale"
          />
        </div>
      </div>
      <p className="text-left text-[#077252] font-[500] text-[1.6rem]">
        How we work
      </p>
      <p className="text-left font-[700] text-[3rem] mb-[2.8rem]">
        Our benefits and skills that make u happy
      </p>
      <div className="flex justify-center items-center">
        <div className="text-left flex-1">
          <p className="text-[#ddd] text-[8rem] font-[500]">01</p>
          <p className="font-[700] tracking-[0.025rem] text-[1.8rem]">
            For all 7 days in week our diet plan
          </p>
          <p className="text-[1.125rem] text-left font-[400] mt-[2rem]">
            We have our own brand chef, who created diet meal plan for every
            single human being body time and all of this including in
            subscription price
          </p>
        </div>
        <div className="ml-[4rem] flex flex-1 bg-[#e6f2ef] py-[2%] w-fit rounded-[0.625rem] justify-center items-center">
          <div className="flex bg-[#b5d9ce] p-[2%] rounded-[0.625rem] items-center justify-center w-[80%]">
            <img src={meal} alt="food" className="rounded-[0.625rem] w-[90%]" />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center mt-[15.625rem]">
        <div className="mr-[3rem] flex bg-[#e6f2ef] h-[50%] py-[2%] w-fit rounded-[0.625rem] justify-center items-center">
          <div className="flex bg-[#b5d9ce] p-[2%] rounded-[0.625rem] items-center justify-center w-[80%]">
            <img
              src={pt}
              alt="food"
              className="rounded-[0.625rem] w-[90%] -my-[30%]"
            />
          </div>
        </div>
        <div className="text-left w-[65%]">
          <p className="text-[#ddd] text-[8rem] font-[500]">02</p>
          <p className="font-[700] tracking-[0.025rem] text-[1.8rem]">
            For all 7 days in week our diet plan
          </p>
          <p className="text-[1.125rem] font-[400] mt-[2rem] w-[100%]">
            In our gym u will find world of the champions of bodybuilding and
            exactly they will make sure that u will success
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[15.625rem]">
        <div className="text-left flex-1">
          <p className="text-[#ddd] text-[8rem] font-[500]">03</p>
          <p className="font-[700] tracking-[0.025rem] text-[1.8rem]">
            Gym equipment
          </p>
          <p className="text-[1.125rem] text-left font-[400] mt-[2rem]">
            In our gym we are trying to have fresh and newest gym equipments,
            follow the trend and have everything to make easy and light your
            workout session
          </p>
        </div>
        <div className="ml-[4rem] flex bg-[#e6f2ef] py-[2%] w-[150%] rounded-[0.625rem] justify-center items-center">
          <div className="flex flex-1 bg-[#b5d9ce] px-[2%] py-[5%] rounded-[0.625rem] items-center justify-center w-[80%]">
            <img
              src={equip}
              alt="equipment"
              className="rounded-[0.625rem] w-[90%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
