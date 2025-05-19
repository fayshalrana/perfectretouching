import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import hero1 from '@assets/images/model-retouch-home.webp'
import hero2 from '@assets/images/jewelry.webp'
import hero3 from '@assets/images/product.webp'
import hero4 from '@assets/images/ghost-manniquin.webp'
import user from '@assets/images/user-2.webp'
import desktop from '@assets/images/desktop.webp'



const Hero = () => {
  return (
    <section style={{ background: 'linear-gradient(90deg, rgba(224, 246, 242, 1) 1%, rgba(255, 234, 228, 1) 100%)' }} className="py-10 md:py-16 lg:py-20">
      <div className="container px-4 lg:px-0">
        <div className="flex flex-col md:flex-row lg:grid-cols-12 gap-8 items-center">
          {/* Left Side */}
          <div className="md:w-1/2 lg:flex-1 lg:col-span-5">
            <h1 style={{ fontFamily: 'Rubik', lineHeight: '1.5' }} className="md:text-[3.2rem] lg:text-[2.25rem] font-medium text-[#222] mb-7 mt-6 leading-tight">
              Scale up Your E-commerce<br />

              Sales with <span className="text-[#ff6a3c]"> <ReactTypingEffect
                text={["Best Images", "Creative Visuals", "Motion Content"]}
                speed={100}
                eraseSpeed={100}
                eraseDelay={1000}
                displayTextRenderer={(text, i) => {
                  return <span>{text}</span>;
                }}
                cursorRenderer={cursor => (
                  <span className="text-[#1ABC9C]">{cursor}</span> // Change color here
                )}
              /></span>
            </h1>
            <div className="text-[#222] text-[16px] leading-[26.4px] tracking-normal mb-7 max-w-[480px]">
              Stir up your online business to vertex level with apex quality and captivating visuals to make a boom.
            </div>
            {/* Email Input */}
            <form className="flex flex-col sm:flex-row items-stretch sm:items-center p-2 mt-5 border border-gray-200 rounded-lg text-base outline-none bg-white w-full max-w-[418px]">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 pl-4 font-normal text-[16px] leading-[24px] tracking-normal focus:outline-none placeholder:text-gray-400 placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-normal placeholder:font-normal"
              />
              <button
                type="submit"
                className="bg-[#222] text-white rounded-lg py-2 px-4 text-base shadow-md hover:bg-[#333] transition-colors text-[16px] leading-[24px] font-normal tracking-normal"
              >
                Get Started!
              </button>
            </form>
            {/* Features */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-9 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-[70px] h-[70px] flex-shrink-0">
                  <img
                    src={user}
                    alt=""
                    className="w-full h-full object-contain block"
                  />
                </div>
                <div>
                  <div className="font-semibold text-[#222] text-[1rem]">CRM Workflow</div>
                  <div className="text-[#444] text-sm">for Easy & secure order portal.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-[70px] h-[70px] flex-shrink-0">
                  <img
                    src={desktop}
                    alt=""
                    className="w-full h-full object-contain block"
                  />
                </div>
                <div>
                  <div className="font-semibold text-[#222] text-[1rem]">CRM Workflow</div>
                  <div className="text-[#444] text-sm">for Easy & secure order portal.</div>
                </div>
              </div>

            </div>
          </div>
          {/* Right Side - Image Collage */}
          <div className="md:w-1/2 lg:w-auto lg:col-span-7 mt-8 md:mt-0">
            <div className="image_card_wrapper flex flex-col lg:flex-row gap-4">
              <div className="image_card">   <img src={hero1}
                alt='hero image 1'
                className="w-full h-full object-cover"
              /></div>
              <div className="image_card">   <img
                src={hero2}
                alt='hero image 2'
                className="w-full h-full object-cover"
              /></div>
              <div className="image_card">   <img
                src={hero3}
                alt='hero image 3'
                className="w-full h-full object-cover"
              /></div>
              <div className="image_card">   <img
                src={hero4}
                alt='hero image 4'
                className="w-full h-full object-cover"
              /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
