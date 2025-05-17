import React from "react";

const Navbar = () => {
  return (
    <header className="border-b border-gray-100 bg-white">
      {/* Top Bar */}
      <div className="flex justify-end items-center text-[14px] pr-8 pt-1 text-[#444] gap-6">
        <div className="flex items-center gap-1 mr-6">
          <span role="img" aria-label="us-flag">🇺🇸</span> English <span className="text-[10px] ml-1">▼</span>
        </div>
        <a href="#" className="mr-6 text-[#444] hover:text-[#1abc9c] transition">Quotation</a>
        <a href="#" className="mr-6 text-[#444] hover:text-[#1abc9c] transition">FAQs</a>
        <a href="#" className="text-[#444] hover:text-[#1abc9c] transition">Sign In</a>
      </div>
      {/* Main Navbar */}
      <div className="container">
        <nav className="flex items-center justify-between py-3 px-0">
          {/* Logo */}
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40x40?text=Logo" alt="Logo" className="mr-3" />
            <div className="font-bold text-[22px] leading-none">
              <span className="text-[#222]">perfect</span>
              <div className="text-[14px] text-[#444] font-normal">retouching</div>
            </div>
          </div>
          {/* Nav Links */}
          <div className="flex items-center gap-7">
            <a href="#" className="text-[#1abc9c] font-medium hover:underline">Home</a>
            <div className="relative">
              <a href="#" className="text-[#444] font-medium hover:text-[#1abc9c] transition">Services <span className="text-[10px]">▼</span></a>
            </div>
            <a href="#" className="text-[#1abc9c] font-medium hover:underline">About</a>
            <a href="#" className="text-[#444] font-medium hover:text-[#1abc9c] transition">Blog</a>
            <a href="#" className="text-[#444] font-medium hover:text-[#1abc9c] transition">Contact</a>
          </div>
          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            <button className="border border-[#ff6a3c] text-[#ff6a3c] bg-transparent px-7 py-2.5 rounded-md font-medium text-[16px] transition hover:bg-[#ff6a3c] hover:text-white">SCHEDULE A CALL</button>
            <button className="bg-[#1abc9c] text-white border-none px-7 py-2.5 rounded-md font-medium text-[16px] shadow-md hover:bg-[#159c82] transition">FREE TRIAL</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
