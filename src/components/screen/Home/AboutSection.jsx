import React from "react";

import aboutImage from "@assets/images/Home-about.webp";
import { IoCheckmarkCircle } from "react-icons/io5";
const featuresLeft = [
  "User-friendly Order System",
  "Support within 10 Sec",
  "Analyze Instructions",
  "Any Order Quantity",
  "Affordable Artistry",
  "No Hidden Charge",
  "Secure Payment",
  "Free Revisions"
];

const featuresRight = [
  {
    title: "Brand Personality",
    desc: "We craft striking visuals with photo editing that embody your unique brand personality, establishing a robust identity in the market through superior visual communication."
  },
  {
    title: "Wallet & Time-Saving",
    desc: "Our streamlined professional photo retouching services and rapid turnaround times not only save you time and money but also allow you to concentrate on what matters most for your business priorities."
  },
  {
    title: "Sales Focused",
    desc: "Our team of visual craftsmen and editors skillfully enhance your images with precision and perfection, effortlessly elevating your brand. We deliver captivating visuals that inspire audiences and drive sales."
  }
];

const AboutSection = () => {
  return (
    <section className="bg-[#f7f8fa] py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left */}
          <div className="col-span-1 lg:col-span-5">
            <span className="inline-block border border-[#1abc9c] text-[12px] font-light tracking-normal text-[#1abc9c] px-2 rounded-full mb-4">About</span>
            <h2 style={{ fontFamily: 'Playfair Display' }} className="text-[2rem] md:text-[2.5rem] leading-[2.5rem] md:leading-[3rem] font-bold text-[#222] mb-[30px]">Every Pixel, Every Detail –<br />Masterful Retouching</h2>
            <p className="text-[#212529] text-base mb-8 md:mb-12">
              Perfect Retouching offers flawless, professional photo editing and expert image retouching and video editing services, with a commitment to delivering on time, every time. We specialize in enhancing the beauty of every frame, restoring old photos, and capturing the true essence of each image. Trust us to bring your visuals to life with the precision and quality your brand deserves.
            </p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-6 mt-6">
              {featuresLeft.map((feature, i) => (
                <div key={feature} className="flex items-center gap-2 text-[#222] text-[15px] font-medium">
                  <IoCheckmarkCircle className="text-[var(--primaryClr)] text-[20px] mr-2" />
                  <span className="text-[16px] leading-[24px] font-normal text-[#212529] ml-2"> {feature}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Illustration and Feature Blurbs Responsive */}
          <div className="col-span-1 lg:col-span-7 w-full flex flex-col md:flex-row gap-8 mt-10 lg:mt-0">
            {/* Illustration */}
            <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center mb-6 md:mb-0">
              <img src={aboutImage} alt="about" className="w-full max-w-xs md:max-w-sm lg:max-w-full h-auto object-contain" />
            </div>
            {/* Feature Blurbs */}
            <div className="w-full md:w-1/2 flex flex-col gap-6 pl-0 md:pl-6">
              {featuresRight.map((item) => (
                <div key={item.title} className="mb-2">
                  <h4 style={{ fontFamily: 'Playfair Display' }} className="text-[#1abc9c] text-[22px] md:text-[26px] leading-[32px] md:leading-[39px] font-bold mb-1 text-[var(--primaryClr)]">{item.title}</h4>
                  <p className="text-[#212529]/70 text-[13px] md:text-[14px] leading-[20px] md:leading-[19.2px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 