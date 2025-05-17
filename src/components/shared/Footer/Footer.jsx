import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#393d3f] text-white font-sans">
      <div className="container">
        <div className="flex flex-wrap justify-center items-start gap-16 md:gap-20 px-0 py-12 max-w-full mx-auto">
          {/* Logo & Description */}
          <div className="flex-1 min-w-[220px] max-w-xs mb-8 md:mb-0">
            <div className="flex items-center mb-3">
              <img src="https://via.placeholder.com/40x40?text=Logo" alt="Logo" className="mr-3" />
              <div className="font-bold text-[22px] leading-none">
                <span className="text-white">perfect</span>
                <div className="text-[14px] text-white font-normal">retouching</div>
              </div>
            </div>
            <div className="text-[#e0e0e0] text-[15px] leading-relaxed">
              Perfect Retouching offers the best solution for all photo retouching services. We provide Jewellery, Product, Beauty, and Headshot Retouching Services by our expert team at budget price.
            </div>
          </div>
          {/* Office Info */}
          <div className="flex-1 min-w-[180px] max-w-xs mb-8 md:mb-0">
            <div className="font-semibold text-[17px] mb-3">Office:</div>
            <div className="text-[#e0e0e0] text-[15px] leading-relaxed mb-2">
              Jahangir Tower, Building M5,<br />Kafrul, Mirpur, Dhaka, Bangladesh
            </div>
            <div className="text-[#e0e0e0] text-[15px] mb-1">
              <span className="font-semibold">Phone:</span> <a href="tel:+16477995131" className="text-[#e0e0e0] hover:underline">+1 (647) 799-5131</a>
            </div>
            <div className="text-[#e0e0e0] text-[15px] mb-2">
              <span className="font-semibold">Email:</span> <a href="mailto:hello@perfectretouching.com" className="text-[#e0e0e0] hover:underline">hello@perfectretouching.com</a>
            </div>
            <div className="flex gap-3 mt-2">
              <a href="#" className="text-white text-xl bg-[#222] rounded-full p-1.5"><span>f</span></a>
              <a href="#" className="text-white text-xl bg-[#222] rounded-full p-1.5"><span>X</span></a>
              <a href="#" className="text-white text-xl bg-[#222] rounded-full p-1.5"><span role="img" aria-label="instagram">📷</span></a>
              <a href="#" className="text-white text-xl bg-[#222] rounded-full p-1.5"><span>in</span></a>
            </div>
          </div>
          {/* Retouching Services */}
          <div className="flex-1 min-w-[150px] max-w-xs mb-8 md:mb-0">
            <div className="font-semibold text-[17px] mb-3">Retouching Services</div>
            <ul className="list-none p-0 m-0 text-[#e0e0e0] text-[15px]">
              <li className="mb-2">&#9654; Jewelry Retouching</li>
              <li className="mb-2">&#9654; Product Retouching</li>
              <li className="mb-2">&#9654; Model Retouching</li>
              <li className="mb-2">&#9654; Headshot Retouching</li>
            </ul>
          </div>
          {/* Editing Services */}
          <div className="flex-1 min-w-[150px] max-w-xs mb-8 md:mb-0">
            <div className="font-semibold text-[17px] mb-3">Editing Services:</div>
            <ul className="list-none p-0 m-0 text-[#e0e0e0] text-[15px]">
              <li className="mb-2">&#9654; Ghost Mannequin</li>
              <li className="mb-2">&#9654; Real Estate Editing</li>
              <li className="mb-2">&#9654; Creative Graphics</li>
              <li className="mb-2">&#9654; Video Editing</li>
            </ul>
          </div>
          {/* Useful Links */}
          <div className="flex-1 min-w-[150px] max-w-xs">
            <div className="font-semibold text-[17px] mb-3">Useful Links:</div>
            <ul className="list-none p-0 m-0 text-[#e0e0e0] text-[15px]">
              <li className="mb-2">&#9654; Reviews</li>
              <li className="mb-2">&#9654; Terms of Service</li>
              <li className="mb-2">&#9654; Privacy Policy</li>
              <li className="mb-2">&#9654; Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright Bar */}
      <div className="bg-[#323537] text-[#b0b0b0] text-[14px] py-3 text-center relative">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span>Copyrights © 2025 All Rights Reserved by Perfect Retouching Inc.</span>
          <span className="flex items-center gap-2">
            <span className="bg-[#ff6a3c] text-white rounded px-2 py-0.5 text-xs">next Bell <span className="font-normal text-[11px] ml-1">Company</span></span>
            <span className="bg-[#4caf50] text-white rounded px-2 py-0.5 text-xs">DMCA</span>
            <span className="bg-[#222] text-white rounded px-2 py-0.5 text-xs">PROTECTED</span>
          </span>
        </div>
        {/* Scroll to top button */}
        <button className="absolute right-8 top-1/2 -translate-y-1/2 bg-[#393d3f] border-none rounded-full w-10 h-10 text-white text-2xl cursor-pointer shadow-md" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">↑</button>
      </div>
    </footer>
  );
};

export default Footer;
