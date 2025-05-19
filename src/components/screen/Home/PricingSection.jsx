import React, { useState } from "react";
import { BsMagic } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";
import { BsLayers } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BsWindowStack } from "react-icons/bs";
import { MdOutlineCloudUpload } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { FaRegImages } from "react-icons/fa6";
import { BsLayersHalf } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";
const plans = [
  {
    name: "Regular",
    delivery: "Delivery in Just 48 Hours",
    deliveryColor: "text-[#ff6a3c]",
    price: 0.49,
    features: [
      { icon: <BsMagic className="text-[#1abc9c] text-lg" />, label: "Order Management Dashboard" },
      { icon: <CiHeart className="text-[#1abc9c] text-lg" />, label: "Editing As Per Service" },
      { icon: <VscDebugRestart className="text-[#1abc9c] text-lg" />, label: "Free Revision (Max. Quantity 2)" },
      { icon: <BsWindowStack className="text-[#1abc9c] text-lg" />, label: "No Minimum Image Cap" },
      { icon: <BsLayers className="text-[#1abc9c] text-lg" />, label: "Layer File Included" },
      { icon: <MdOutlineCloudUpload className="text-[#1abc9c] text-lg" />, label: "Free Focus Stacking" },
      { icon: <FaRegClock className="text-[#1abc9c] text-lg" />, label: "24 Hours Delivery" },
      { icon: <FaRegImages className="text-[#1abc9c] text-lg" />, label: "Guaranteed Quality" },
      { icon: <BsLayersHalf className="text-[#1abc9c] text-lg" />, label: "No Subscription Fee" },
      { icon: <HiOutlineSupport className="text-[#1abc9c] text-lg" />, label: "24x7 Live Support" }
    ],
    icon: <BsMagic />
  },
  {
    name: "Express",
    delivery: "Delivery in Just 24 Hours",
    deliveryColor: "text-[#1abc9c]",
    price: 0.69,
    features: [
      { icon: <BsMagic className="text-[#1abc9c] text-lg" />, label: "Order Management Dashboard" },
      { icon: <CiHeart className="text-[#1abc9c] text-lg" />, label: "Editing As Per Service" },
      { icon: <VscDebugRestart className="text-[#1abc9c] text-lg" />, label: "Free Revision (Max. Quantity 1)" },
      { icon: <BsWindowStack className="text-[#1abc9c] text-lg" />, label: "No Minimum Image Cap" },
      { icon: <BsLayers className="text-[#1abc9c] text-lg" />, label: "Layer File Included" },
      { icon: <MdOutlineCloudUpload className="text-[#1abc9c] text-lg" />, label: "Free Focus Stacking" },
      { icon: <FaRegClock className="text-[#1abc9c] text-lg" />, label: "Express Delivery" },
      { icon: <FaRegImages className="text-[#1abc9c] text-lg" />, label: "Guaranteed Quality" },
      { icon: <BsLayersHalf className="text-[#1abc9c] text-lg" />, label: "No Subscription Fee" },
      { icon: <HiOutlineSupport className="text-[#1abc9c] text-lg" />, label: "24x7 Live Support" }
    ],
    icon: <BsMagic />
  },
  {
    name: "Project",
    delivery: "Custom Project Delivery",
    deliveryColor: "text-[#ffb300]",
    price: 0.39,
    features: [
      { icon: <BsMagic className="text-[#1abc9c] text-lg" />, label: "Order Management Dashboard" },
      { icon: <CiHeart className="text-[#1abc9c] text-lg" />, label: "Editing As Per Service" },
      { icon: <VscDebugRestart className="text-[#1abc9c] text-lg" />, label: "Custom Revision Policy" },
      { icon: <BsWindowStack className="text-[#1abc9c] text-lg" />, label: "No Minimum Image Cap" },
      { icon: <BsLayers className="text-[#1abc9c] text-lg" />, label: "Layer File Included" },
      { icon: <MdOutlineCloudUpload className="text-[#1abc9c] text-lg" />, label: "Project-based Delivery" },
      { icon: <FaRegClock className="text-[#1abc9c] text-lg" />, label: "Guaranteed Quality" },
      { icon: <FaRegImages className="text-[#1abc9c] text-lg" />, label: "No Subscription Fee" },
      { icon: <BsLayersHalf className="text-[#1abc9c] text-lg" />, label: "Dedicated Manager" },
      { icon: <HiOutlineSupport className="text-[#1abc9c] text-lg" />, label: "24x7 Live Support" }
    ],
    icon: <BsMagic />
  },
  {
    name: "Enterprise",
    delivery: "Enterprise Delivery & Support",
    deliveryColor: "text-[#222]",
    price: 0.29,
    features: [
      { icon: <BsMagic className="text-[#1abc9c] text-lg" />, label: "Order Management Dashboard" },
      { icon: <CiHeart className="text-[#1abc9c] text-lg" />, label: "Editing As Per Service" },
      { icon: <VscDebugRestart className="text-[#1abc9c] text-lg" />, label: "Unlimited Revision" },
      { icon: <BsWindowStack className="text-[#1abc9c] text-lg" />, label: "No Minimum Image Cap" },
      { icon: <BsLayers className="text-[#1abc9c] text-lg" />, label: "Layer File Included" },
      { icon: <MdOutlineCloudUpload className="text-[#1abc9c] text-lg" />, label: "Enterprise Delivery" },
      { icon: <FaRegClock className="text-[#1abc9c] text-lg" />, label: "Guaranteed Quality" },
      { icon: <FaRegImages className="text-[#1abc9c] text-lg" />, label: "No Subscription Fee" },
      { icon: <BsLayersHalf className="text-[#1abc9c] text-lg" />, label: "Dedicated Manager" },
      { icon: <HiOutlineSupport className="text-[#1abc9c] text-lg" />, label: "24x7 Priority Support" }
    ],
    icon: <BsMagic />
  }
];

const PricingSection = () => {
  const [selected, setSelected] = useState(0);
  const plan = plans[selected];

  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="container">
        {/* Top */}
        <div className="flex flex-col items-center mb-10">
          <span className="inline-block border border-[#1abc9c] text-[12px] font-light tracking-normal text-[#1abc9c] px-2 rounded-full mb-4">Pricing</span>
          <h2 className="text-[28px] md:text-[34px] leading-[38px] md:leading-[51px] font-semibold text-[#212529] tracking-normal mb-2 text-center">
            Unlock stunning visuals with pricing plans<br className="hidden md:block" />designed for every budget
          </h2>
        </div>
        {/* Pricing Table */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Plan Selector */}
          <div className="w-full lg:col-span-3 flex flex-col gap-2 mb-4 lg:mb-0 pr-0 lg:pr-4">
            {plans.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setSelected(i)}
                className={`w-full text-left p-4 md:p-6 rounded border border-gray-200 font-normal text-[18px] md:text-[22px] leading-[28px] md:leading-[33px] transition-all flex items-center gap-2 ${selected === i
                  ? "bg-[#1abc9c] text-white shadow-md border-[#1abc9c]"
                  : "bg-white text-[#222] hover:bg-[#e9faf7]"
                  }`}
              >
                <span className={`w-3 h-3 rounded-full border-2 flex items-center justify-center
                  ${selected === i ? "border-white bg-white" : "border-[#1abc9c] bg-transparent"}`}>
                  {selected === i && (
                    <span className="w-[10px] h-[10px] rounded-full bg-blue-500 block"></span>
                  )}
                </span>
                {p.name}
              </button>
            ))}
          </div>
          <div className="w-full lg:col-span-9 flex flex-col md:flex-row gap-6 pl-0 lg:pl-2">
            {/* Plan Details */}
            <div className="w-full md:w-2/3 bg-white rounded border border-gray-200 px-4 md:px-8 py-6 flex flex-col justify-between mb-6 md:mb-0">
              <div>
                <h3 className={`text-[20px] md:text-[26px] leading-[28px] md:leading-[39px] font-semibold mb-2 ${plan.deliveryColor}`}>{plan.delivery}</h3>
                <hr className="mb-[24px] md:mb-[32px]" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 md:gap-x-8 text-[15px] text-[#222]">
                  {plan.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {typeof f === "object" && f.icon && <span>{f.icon}</span>}
                      <span className="text-[14px] leading-[21px] font-normal text-[#212529]">
                        {typeof f === "object" ? f.label : f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Price Box */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center bg-[#f8f9fa] border border-gray-200 rounded min-w-[180px] px-6 md:px-8 py-8">
              <span className="text-[16px] tracking-[0.15em] text-[#7b8a99] font-normal mb-3 uppercase">AS LOW AS</span>
              <div className="flex items-end mb-2 relative">
                <span className="text-[24px] md:text-[32px] font-normal text-[#222] align-super mr-1 absolute top-0 -left-6" style={{ lineHeight: '1' }}>$</span>
                <span className="text-[40px] md:text-[64px] font-noraml text-[#222] leading-[40px] md:leading-[64px]">{plan.price.toFixed(2)}</span>
              </div>
              <span className="text-[12px] md:text-[14px] font-bold text-[#ff3c3c] uppercase mb-6 tracking-wider">IMAGE</span>
              <button className="mt-2 bg-[#1abc9c] text-white font-normal px-6 md:px-8 py-3 rounded-md text-base md:text-lg transition-all w-full hover:bg-[#1abc9c]/80 border-b-[4px] border-[#1a826e]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 