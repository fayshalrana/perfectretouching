import React, { useState, useEffect } from 'react';
import logo from '@assets/images/logo-white.webp'
import officeBg from '@assets/images/world-map.webp'
import companyLogo1 from '@assets/images/nextbellcompany-01.webp'
import companyLogo2 from '@assets/images/dmca-badge-w100-5x1-01.webp'
import { RiArrowDropRightFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY >= 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-[#343a40] text-white font-sans">
      <div className="container">
        <div className="flex flex-wrap justify-between items-start gap-16 md:gap-8 px-0 py-12 max-w-full mx-auto">
          {/* Logo & Description */}
          <div className="flex-1 min-w-[310px] max-w-xs mb-8 md:mb-0">
            <div className="flex items-center mb-[10px]">
              <img src={logo} alt="Logo" className="mr-3" />
            </div>
            <div className="text-[#E9ECEF] text-[16px] leading-[27px] mb-[30px]">
              Perfect Retouching offers the best solution for all photo retouching services. We provide Jewellery, Product, Beauty, and Headshot Retouching Services by our expert team at budget price.
            </div>
          </div>
          {/* Office Info */}
          <div style={{ backgroundImage: `url(${officeBg})` }} className="flex-1 min-w-[270px] bg-contain bg-center bg-no-repeat">
            <div className="font-semibold text-[16px] leading-[24px] mb-[2.2rem]">Office:</div>
            <div className="text-[#E9ECEF] text-[16px] leading-[27px] mb-2">
              Jahangir Tower, Building M5,<br />Kafrul, Mirpur, Dhaka, Bangladesh
            </div>
            <div className="text-[#E9ECEF] text-[16px] leading-[27px] mb-1">
              <strong className="font-semibold border-b border-dashed border-[#E9ECEF]">Phone:</strong> <a href="tel:+16477995131" className="text-[#e0e0e0]">+1 (647) 799-5131</a>
            </div>
            <div className="text-[#E9ECEF] text-[16px] leading-[27px] mb-2">
              <strong className="font-semibold border-b border-dashed border-[#E9ECEF]">Email:</strong> <a href="mailto:hello@perfectretouching.com" className="text-[#e0e0e0]">hello@perfectretouching.com</a>
            </div>
            <div className="flex gap-3 mt-2">
              <div class="social-login-icons">
                <div class="socialcontainer">
                  <div class="social-icon-1">
                    <FaXTwitter />
                  </div>
                  <div class="social-icon-1">
                    <FaXTwitter />
                  </div>
                </div>
                <div class="socialcontainer">
                  <div class="social-icon-2">
                    <FaInstagram />
                  </div>
                  <div class="social-icon-2">
                    <FaInstagram />
                  </div>
                </div>
                <div class="socialcontainer">
                  <div class="social-icon-3">
                    <FaFacebookF />
                  </div>
                  <div class="social-icon-3">
                    <FaFacebookF />
                  </div>
                </div>
                <div class="socialcontainer">
                  <div class="social-icon-4">
                    <FaLinkedinIn />
                  </div>
                  <div class="social-icon-4">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* Retouching Services */}
          <div className="flex-1 min-w-[150px] max-w-xs mb-8 md:mb-0">
            <div className="font-semibold text-[16px] leading-[24px] mb-[2.2rem]">Retouching Services</div>
            <ul className="list-none p-0 m-0 text-[#e0e0e0] text-[15px]">
              <li className="flex items-center gap-1 mb-2 text-[#E9ECEF] text-[16px] leading-[27px]  cursor-pointer hover:text-[var(--secondaryClr)]"><RiArrowDropRightFill size={30} /> Jewelry Retouching</li>
              <li className="flex items-center gap-1 mb-2 text-[#E9ECEF] text-[16px] leading-[27px]  cursor-pointer hover:text-[var(--secondaryClr)]"><RiArrowDropRightFill size={30} /> Product Retouching</li>
              <li className="flex items-center gap-1 mb-2 text-[#E9ECEF] text-[16px] leading-[27px]  cursor-pointer hover:text-[var(--secondaryClr)]"><RiArrowDropRightFill size={30} /> Model Retouching</li>
              <li className="flex items-center gap-1 mb-2 text-[#E9ECEF] text-[16px] leading-[27px]  cursor-pointer hover:text-[var(--secondaryClr)]"><RiArrowDropRightFill size={30} /> Headshot Retouching</li>
            </ul>
          </div>
          {/* Editing Services */}
          <div className="flex-1 min-w-[150px] max-w-xs mb-8 md:mb-0">
            <div className="font-semibold text-[16px] leading-[24px] mb-[2.2rem]">Editing Services:</div>
            <ul className="list-none p-0 m-0 text-[#e0e0e0] text-[15px]">
              <li className="flex items-center gap-1 mb-2 text-[#E9ECEF] text-[16px] leading-[27px] cursor-pointer hover:text-[var(--secondaryClr)]"><RiArrowDropRightFill size={30} /> Ghost Mannequin</li>
              <li className="flex items-center gap-1 mb-2 text-[#E9ECEF] text-[16px] leading-[27px] cursor-pointer hover:text-[var(--secondaryClr)]"><RiArrowDropRightFill size={30} /> Real Estate Editing</li>
              <li className="flex items-center gap-1 mb-2 text-[#E9ECEF] text-[16px] leading-[27px] cursor-pointer hover:text-[var(--secondaryClr)]"><RiArrowDropRightFill size={30} /> Creative Graphics</li>
              <li className="flex items-center gap-1 mb-2 text-[#E9ECEF] text-[16px] leading-[27px] cursor-pointer hover:text-[var(--secondaryClr)]"><RiArrowDropRightFill size={30} /> Video Editing</li>
            </ul>
          </div>
          {/* Useful Links */}
          <div className="flex-1 min-w-[150px] max-w-xs">
            <div className="font-semibold text-[16px] leading-[24px] mb-[2.2rem]">Useful Links:</div>
            <ul className="list-none p-0 m-0 text-[#e0e0e0] text-[15px]">
              <li className="flex items-center gap-1 mb-2 text-[#E9ECEF] text-[16px] leading-[27px] cursor-pointer hover:text-[var(--secondaryClr)]"><RiArrowDropRightFill size={30} /> Reviews</li>
              <li className="flex items-center gap-2 mb-2 text-[#E9ECEF] text-[16px] leading-[27px] cursor-pointer hover:text-[var(--secondaryClr)]"><RiArrowDropRightFill size={30} /> Terms of Service</li>
              <li className="flex items-center gap-1 mb-2 text-[#E9ECEF] text-[16px] leading-[27px] cursor-pointer hover:text-[var(--secondaryClr)]"><RiArrowDropRightFill size={30} /> Privacy Policy</li>
              <li className="flex items-center gap-1 mb-2 text-[#E9ECEF] text-[16px] leading-[27px] cursor-pointer hover:text-[var(--secondaryClr)]"><RiArrowDropRightFill size={30} /> Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright Bar */}
      <div className="bg-[#2a2e33] text-[#b0b0b0] text-[14px] py-3 text-center relative">
        <div className="container">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span>Copyrights © 2025 All Rights Reserved by Perfect Retouching Inc.</span>
            <div className="flex items-center gap-2">
             <a href="https://nextbell.com" target="_blank"><img className="w-[100px]" src={companyLogo1} alt="" /></a>
             <a href="https://dmca.org" target="_blank"><img className="w-[100px]" src={companyLogo2} alt="" /></a>
            </div>
          </div>
        </div>
        {/* Scroll to top button */}
        {showScroll && (
          <button
            className="fixed bottom-8 right-8 z-50 bg-[#bbb] border-none rounded-full w-14 h-14 flex items-center justify-center text-white text-3xl cursor-pointer transition-opacity duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#bbb" />
              <path d="M8 14l4-4 4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
