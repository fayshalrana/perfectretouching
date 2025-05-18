import React, { useState } from "react";
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import MegaMenu from './MegaMenu';
import logo from '@assets/images/logo@2x.webp';
import { FaPhone } from "react-icons/fa6";
import { FiGift } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="sticky -top-12 z-50 bg-white shadow">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="container">
          <div className="flex justify-between items-center text-[14px] text-[#444] gap-6">
            <div className="flex items-center gap-1 mr-6">
              <LanguageSelector />
            </div>
            <ul className="flex">
              <li className="bg-transparent hover:bg-gray-100 p-3"><a href="#" className="text-[14px] text-[#444] hover:text-[#1abc9c] transition">Quotation</a></li>
              <li className="bg-transparent hover:bg-gray-100 p-3 border-l border-gray-100 border-r"><a href="#" className="text-[14px] text-[#444] hover:text-[#1abc9c] transition">FAQs</a></li>
              <li className="bg-transparent hover:bg-gray-100 p-3"><a href="#" className="text-[14px] text-[#444] hover:text-[#1abc9c] transition">Sign In</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="container">
        <nav className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <div className="flex items-center max-w-[100px]">
            <img src={logo} alt="Logo" className="w-full" />
          </div>
          {/* Nav Links */}
          <div className="flex items-center">
            <a href="#" className="text-[#1abc9c] text-[16px] leading-[22px] font-normal py-[29px] px-[15px]">Home</a>
            <div className="relative group">
              <a href="#" className="flex items-center gap-1 text-[#444] text-[16px] leading-[22px] font-normal hover:text-[#1abc9c] transition py-[29px] px-[15px]">
                Services 
                <IoMdArrowDropdown />
              </a>
              <div className="absolute -left-[60px] top-[100px] group-hover:top-[80px] z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out delay-100">
                <MegaMenu />
              </div>
            </div>
            <a href="#" className="text-[#1abc9c] text-[16px] leading-[22px] font-normal py-[29px] px-[15px]">About</a>
            <a href="#" className="text-[#444] text-[16px] leading-[22px] font-normal hover:text-[#1abc9c] transition py-[29px] px-[15px]">Blog</a>
            <a href="#" className="text-[#444] text-[16px] leading-[22px] font-normal hover:text-[#1abc9c] transition py-[29px] px-[15px]">Contact</a>
          </div>
          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="relative inline-flex items-center overflow-hidden border border-[#FF7A59] hover:border-transparent hover:text-white text-[#FF7A59] hover:bg-[#1ABC9C] font-semibold px-7 py-2 transition-all duration-300 group hover:bg-color-primary shadow-xl rounded-[4px]"
              aria-label="Schedule a Call"
              title="Schedule a Call"
            >
              <span className="absolute -right-5 translate-x-full opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-x-5 group-hover:opacity-100 bg-black/15 w-[30px] h-full flex items-center justify-center">
                <FaPhone />
              </span>
              <span className="relative left-0 group-hover:-left-4 transition-all duration-500 ease-in-out">
                SCHEDULE A CALL
              </span>
            </a>
            <a
              href="#"
              className="relative inline-flex items-center overflow-hidden border border-transparent hover:border-transparent text-white bg-[#1ABC9C] font-semibold px-7 py-2 transition-all duration-300 group hover:bg-color-primary shadow-xl rounded-[4px]"
              aria-label="Free Trial"
              title="Free Trial"
            >
              <span className="absolute -left-4 -translate-x-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-4 group-hover:opacity-100 bg-black/15 w-[30px] h-full flex items-center justify-center">
              <FiGift />
              </span>
              <span className="relative left-0 transition-all duration-500 ease-in-out group-hover:left-4">
                FREE TRIAL
              </span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
