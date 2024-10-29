import React from "react";
import logo from "../images/logo.png";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";

function Footer() {
  return (
    <div className="py-16 px-8 border-t text-[#767676] lg:flex lg:gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:flex lg:flex-row w-full">
        {/* Logo and Social Icons */}
        <div className="text-left sm:col-span-2 lg:flex-1 lg:pl-32">
          <img src={logo} alt="logo" className="w-20 mb-4" />
          <div className="flex gap-2 mb-6">
            <IoLogoInstagram className="w-6 h-6" />
            <IoLogoFacebook className="w-6 h-6" />
            <IoLogoTwitter className="w-6 h-6" />
          </div>
          <p className="text-[#087f5b] text-sm">
            Copyright © created in 2024 by Davit Japaridze
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="text-left lg:flex-1">
          <ul>
            <lh className="text-black font-bold text-lg">Contact us</lh>
            <li className="my-4 text-sm">Tbilisi, Georgia, Vera</li>
            <li className="my-4 text-sm">+995555306126</li>
            <li className="text-sm">rkaranadze.newvision.ge</li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="text-left lg:flex-1">
          <ul>
            <lh className="text-black font-bold text-lg">Account</lh>
            <li className="my-4 text-sm">Create account</li>
            <li className="my-4 text-sm">Sign in</li>
            <li className="my-4 text-sm">IOS app</li>
            <li className="my-4 text-sm">Android app</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="text-left lg:flex-1">
          <ul>
            <lh className="text-black font-bold text-lg">Company</lh>
            <li className="my-4 text-sm">About FreshLime</li>
            <li className="my-4 text-sm">For Business</li>
            <li className="my-4 text-sm">Partners</li>
            <li className="my-4 text-sm">Careers</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="text-left lg:flex-1">
          <ul>
            <lh className="text-black font-bold text-lg">Resources</lh>
            <li className="my-4 text-sm">Working plan</li>
            <li className="my-4 text-sm">Help center</li>
            <li className="my-4 text-sm">Privacy & Terms</li>
            <li className="my-4 text-sm">My other works</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
