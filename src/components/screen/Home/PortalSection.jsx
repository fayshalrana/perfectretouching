import React from "react";
import crm from "@assets/images/portal.webp";
import profile from "@assets/images/User-Profile-Oct.webp";
import welcome from "@assets/images/Welcome-Back-Oct.webp";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const features = [
  "Personalized Dashboard",
  "Real-time updates",
  "Multilanguage Interface",
  "Global Accessibility",
  "Easy Order Process",
  "27/4 Customer support",
  "Secure Payment Procedure",
  "Flexible Notification Settings"
];

const PortalSection = () => {
  return (
    <section className="pt-[14rem] pb-[5rem] lg:py-16 bg-[#f7f8fa]">
      <div className="container flex flex-col lg:grid lg:grid-cols-12 gap-5 lg:gap-10">
        {/* Left: CRM Image */}
        <div className="lg:col-span-7 relative">
          <img
            src={crm}
            alt="CRM Dashboard"
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-[105px] -left-[17px] w-[150px]">
            <img src={profile} alt="" />
          </div>
          <div className="absolute top-[105px] -right-[17px] w-[150px]">
            <img src={welcome} alt="" />
          </div>
        </div>
        {/* Right: Content */}
        <div className="lg:col-span-5 pb-[50px]">
          <span className="inline-block border border-[#1abc9c] text-[12px] font-light tracking-normal text-[#1abc9c] px-2 rounded-full mb-4">Portal</span>
          <h2 className="text-[34px] leading-[51px] font-semibold text-[#212529] mb-6">Simplified Order<br />Management, Elevated Retouching</h2>
          <p className="text-[#444] text-base leading-[26px] mb-6">
            At Perfect Retouching, we prioritize client comfort with our efficient CRM system. This seamless management balances speed and quality, ensuring you receive top-notch service without compromise. Experience a smooth collaboration that enhances your workflow!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
            {features.map((feature, i) => (
              <div key={feature} className="flex items-center gap-2 text-[#1abc9c] text-[15px] font-medium">
                <IoPaperPlaneOutline size={16} />
                <span className="text-[#222] leading-[26px] text-base font-normal">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <button className="bg-[#1abc9c] text-white font-normal px-6 py-2 rounded-md text-base transition-all hover:bg-[#1abc9c]/80 border-b-[4px] border-[#1a826e] flex items-center gap-2">
            <FaCheck />
              Get a Quote
            </button>
            <button className="bg-[#ff7a59] hover:bg-[#ff7a59]/80 text-white font-normal px-6 py-2 rounded-md text-base transition-all border-b-[4px] border-[#e15532] flex items-center gap-2">
            <MdOutlineKeyboardDoubleArrowRight className="text-2xl"/>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalSection; 