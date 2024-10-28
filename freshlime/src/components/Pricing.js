import React from "react";
import {
  IoSpeedometerOutline,
  IoCloseOutline,
  IoPulseOutline,
  IoPause,
  IoRocketOutline,
} from "react-icons/io5";

function Pricing() {
  return (
    <div className="px-48 ">
      <p className="text-[#077252] font-[600] text-left text-[1.6rem] uppercase mt-[10rem]">
        pricing
      </p>
      <p className=" font-[700] text-[3rem] text-left mb-[3rem]">
        Get your dream body
      </p>
      <div className="flex justify-center">
        <div className="flex gap-[80px] h-fit py-[3rem] justify-center items-center mx-[80px] mb-[6rem] bg-white border-[2px] border-[#e6f2ef] rounded-[11px] ">
          <div className="flex-1 flex flex-col items-center px-20">
            <div className="text-center">
              <p className="font-[600] text-[#077252] text-[1.6rem]">Monthly</p>
              <p className="font-[900]  text-[1.6rem] mt-[0.8rem]">
                $ <span className="text-[3.6rem]">45</span>
              </p>
              <p className="font-[600] text-[#777] text-[1.2rem] mt-[0.8rem]">
                Pay every single month
              </p>
              <ul className="text-[18px] w-[15rem] ">
                <li className="flex justify-left items-center gap-3 mt-[2rem]">
                  <IoSpeedometerOutline className="text-[#40c057] h-[24px] w-[24px]" />
                  High quality stuff
                </li>
                <li className="flex justify-left items-center gap-3 mt-[1rem]">
                  <IoSpeedometerOutline className="text-[#40c057] h-[24px] w-[24px]" />{" "}
                  Open 24/7
                </li>
                <li className="flex justify-left items-center gap-3 mt-[1rem]">
                  <IoSpeedometerOutline className="text-[#40c057] h-[24px] w-[24px]" />{" "}
                  Every 10th protein free
                </li>
                <li className="flex justify-left items-center gap-3 mt-[1rem]">
                  <IoCloseOutline className="text-[#40c057] h-[26px] w-[26px]" />{" "}
                </li>
              </ul>
              <button className="text-white bg-[#087f5b] rounded-[9px] px-6 py-3 mt-8">
                Get your month pass
              </button>
            </div>
          </div>
        </div>
        <div className="flex relative overflow-hidden  gap-[80px] px-[13rem] h-fit py-[3rem] justify-center items-center mx-[80px] mb-[3rem] bg-[#e6f2ef] rounded-[11px] ">
          <div className="flex-1 flex flex-col items-center px-20">
            <div className="text-center">
              <p className="font-[600] text-[#077252] text-[1.6rem]">Monthly</p>
              <p className="font-[900]  text-[1.6rem] mt-[0.8rem]">
                $ <span className="text-[3.6rem]">600</span>
              </p>
              <p className="font-[600] text-[#777] text-[1.2rem] mt-[0.8rem]">
                Per month it's just 30$
              </p>
              <ul className="text-[18px] w-[15rem] ">
                <li className="flex justify-left items-center gap-3 mt-[2rem]">
                  <IoSpeedometerOutline className="text-[#40c057] h-[24px] w-[24px]" />
                  Free sauna
                </li>
                <li className="flex justify-left items-center gap-3 mt-[1rem]">
                  <IoSpeedometerOutline className="text-[#40c057] h-[24px] w-[24px]" />{" "}
                  Free chocolate bars
                </li>
                <li className="flex justify-left items-center gap-3 mt-[1rem]">
                  <IoSpeedometerOutline className="text-[#40c057] h-[24px] w-[24px]" />{" "}
                  Chapm with you
                </li>
                <li className="flex justify-left items-center gap-3 mt-[1rem]">
                  <IoSpeedometerOutline className="text-[#40c057] h-[26px] w-[26px]" />{" "}
                  Plan of the year
                </li>
              </ul>
              <button className="text-white bg-[#087f5b] rounded-[9px] px-6 py-3 mt-8">
                Get your month pass
              </button>
              <div className="absolute top-8 -right-14 rotate-45">
                <p className="bg-[#94d82d] text-center text-[#333] text-[12.8px] font-bold px-[64px] py-[6xp]">
                  BEST VALUE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mb-[5rem]">
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </p>
      <div className="flex justify-center gap-10 mt-[1rem] px-6">
        <div className="text-left flex-1">
          <div className="rounded-full bg-[#b5d9ce] w-fit p-4">
            {" "}
            <IoPulseOutline className="text-[#087f5b] h-[26px] w-[26px] " />
          </div>
          <p className="font-[800] text-[22px] mt-[1.8rem]">
            Tranin every day!
          </p>
          <p className="mt-[1rem] leading-7">
            Our gym is open 365 days in year, even holidays you can come!
          </p>
        </div>
        <div className="text-left flex-1">
          <div className="rounded-full bg-[#b5d9ce] w-fit p-4">
            {" "}
            <IoRocketOutline className="text-[#087f5b] h-[26px] w-[26px] " />
          </div>
          <p className="font-[800] text-[22px] mt-[1.8rem]">
            Natural and organic
          </p>
          <p className="mt-[1rem] leading-7">
            Our proteins are best in the world and organic good for health
          </p>
        </div>
        <div className="text-left flex-1">
          <div className="rounded-full bg-[#b5d9ce] w-fit p-4">
            {" "}
            <IoRocketOutline className="text-[#087f5b] h-[26px] w-[26px] " />
          </div>
          <p className="font-[800] text-[22px] mt-[1.8rem]">Motivation</p>
          <p className="mt-[1rem] leading-7">
            We have motivation speakers to motivate you every day
          </p>
        </div>
        <div className="text-left flex-1">
          <div className="rounded-full bg-[#b5d9ce] w-fit p-4">
            {" "}
            <IoPause className="text-[#087f5b] h-[26px] w-[26px] " />
          </div>
          <p className="font-[800] text-[22px] mt-[1.8rem]">Pause anytime</p>
          <p className="mt-[1rem] leading-7">
            You got full year and have vacation? pause it, it is possible with
            us
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
