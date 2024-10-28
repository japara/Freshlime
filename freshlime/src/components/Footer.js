import React from "react";
import logo from "../images/logo.png";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";

function Footer() {
  return (
    <div className="flex gap-4 py-[4rem] mt-[6rem] pl-32 border-t-[1px] text-[#767676]">
      <div className="flex-1 text-left">
        <img src={logo} alt="logo" className="w-[5rem] mb-4"></img>
        <div className="flex gap-2 mb-6">
          <IoLogoInstagram className="w-[22px] h-[22px]" />
          <IoLogoFacebook className="w-[22px] h-[22px]" />
          <IoLogoTwitter className="w-[22px] h-[22px] " />
        </div>
        <p className="text-[#087f5b]">
          Copyright © created in 2024 by Davit Japaridze
        </p>
      </div>
      <div className="flex-1 text-left">
        <ul>
          <lh className="text-black font-[700] text-[20px]">Contact us</lh>
          <li className="my-4">Tbilisi Georgia, Vera</li>
          <li className="my-4">+995555306126</li>
          <li>rkaranadze.newvision.ge</li>
        </ul>
      </div>
      <div className="flex-1 text-left">
        <ul>
          <lh className="text-black font-[700] text-[20px]">Account</lh>
          <li className="my-4">Create account</li>
          <li className="my-4">Sign in </li>
          <li className="my-4">IOS app </li>
          <li className="my-4">Android app</li>
        </ul>
      </div>
      <div className="flex-1 text-left">
        <ul>
          <lh className="text-black font-[700] text-[20px]">Company</lh>
          <li className="my-4">About FreshLime</li>
          <li className="my-4">For Business </li>
          <li className="my-4">Partners </li>
          <li className="my-4">Careers</li>
        </ul>
      </div>
      <div className="flex-1 text-left">
        <ul>
          <lh className="text-black font-[700] text-[20px]">Resourses</lh>
          <li className="my-4">Working plan</li>
          <li className="my-4">Help center</li>
          <li className="my-4">Privacy & Terms</li>
          <li className="my-4">My other works</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
