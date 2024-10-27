import React from "react";
import {
  IoEyeOutline,
  IoSpeedometerOutline,
  IoBodyOutline,
  IoCheckmarkDoneOutline,
  IoTrophyOutline,
  IoVolumeHighOutline,
  IoBarbellOutline,
} from "react-icons/io5";
import { MdOutlineAddToPhotos } from "react-icons/md";
import cardgym1 from "../images/card-img-1.jpg";

function Inside() {
  return (
    <div className="bg-gray">
      <p className="text-[#077252] font-[600] text-[1.6rem] uppercase mt-[8rem]">
        Inside us
      </p>
      <p className=" font-[700] text-[3rem] mb-[3rem]">
        At our gym u will find everything u need
      </p>
      <div className="flex gap-[80px] justify-center mx-[80px] mb-[6rem] bg-white">
        <div className="flex-1 flex flex-col rounded-[11px] items-center">
          <img src={cardgym1} alt="gym" className="rounded-t-[11px]"></img>
          <div className="text-left w-fit">
            <p className="rounded-full bg-[#51cf66] font-[600] text-[0.8rem] w-fit px-[8px] mt-[2rem]">
              FRESH NEW CARDIO
            </p>
            <p className="font-[600] text-[1.6rem] mt-[0.8rem]">Cardio Part</p>
            <ul className="text-[18px]">
              <li className="flex justify-left items-center gap-3 mt-[2rem]">
                <IoSpeedometerOutline className="text-[#40c057] h-[24px] w-[24px]" />
                High tempo cardio
              </li>
              <li className="flex justify-left items-center gap-3 mt-[1rem]">
                <IoEyeOutline className="text-[#40c057] h-[24px] w-[24px]" />{" "}
                best view
              </li>
              <li className="flex justify-left items-center gap-3 mt-[1rem]">
                <IoBodyOutline className="text-[#40c057] h-[24px] w-[24px]" />{" "}
                all kind
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex flex-col rounded-[11px] items-center">
          <img src={cardgym1} alt="gym" className="rounded-t-[11px]"></img>
          <div className="text-left w-fit">
            <p className="rounded-full bg-[#51cf66] font-[600] text-[0.8rem] w-fit px-[8px] mt-[2rem]">
              FRESH NEW CARDIO
            </p>
            <p className="font-[600] text-[1.6rem] mt-[0.8rem]">Cardio Part</p>
            <ul className="text-[18px]">
              <li className="flex justify-left items-center gap-3 mt-[2rem]">
                <IoBarbellOutline className="text-[#40c057] h-[24px] w-[24px]" />{" "}
                <span className="font-[700]">100KG</span> plus
              </li>
              <li className="flex justify-left items-center gap-3 mt-[1rem]">
                <IoTrophyOutline className="text-[#40c057] h-[24px] w-[24px]" />{" "}
                champion
              </li>
              <li className="flex justify-left items-center gap-3 mt-[1rem]">
                <IoVolumeHighOutline className="text-[#40c057] h-[24px] w-[24px]" />
                support
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <ul className="list-none text-left font-[800] text-[28px]">
            Our equipment
            <li className="flex gap-3 text-[18px] font-[500] mt-[18px]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-[28px] w-[28px]" />
              CHEST PRESS MACHINE
            </li>
            <li className="flex gap-3 text-[18px] font-[500] mt-[18px]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-[28px] w-[28px]" />
              SEATED DIP MACHINE
            </li>
            <li className="flex gap-3 text-[18px] font-[500] mt-[18px]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-[28px] w-[28px]" />
              CHEST FLY MACHINE
            </li>
            <li className="flex gap-3 text-[18px] font-[500] mt-[18px]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-[28px] w-[28px]" />
              BENCH PRESS
            </li>
            <li className="flex gap-3 text-[18px] font-[500] mt-[18px]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-[28px] w-[28px]" />
              INCLINE BENCH PRESS
            </li>
            <li className="flex gap-3 text-[18px] font-[500] mt-[18px]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-[28px] w-[28px]" />
              ADJUSTABLE BENCH
            </li>
            <li className="flex gap-3 text-[18px] font-[500] mt-[18px]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-[28px] w-[28px]" />
              OLYMPIC WEIGHT BENCH
            </li>
            <li className="flex gap-3 text-[18px] font-[500] mt-[18px]">
              <IoCheckmarkDoneOutline className="text-[#40c057] h-[28px] w-[28px]" />
              GHD MACHINE
            </li>
            <li className="flex gap-3 text-[18px] font-[500] mt-[18px]">
              <MdOutlineAddToPhotos className="text-[#40c057] h-[28px] w-[28px]" />
              AND WAY MORE
            </li>
          </ul>
        </div>
      </div>

      <a href="#" className="underline text-[#087f5b] text-[18px] font-[500]">
        Check our equipments →
      </a>
    </div>
  );
}

export default Inside;
