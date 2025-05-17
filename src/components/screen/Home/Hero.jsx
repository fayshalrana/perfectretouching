import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#e9faf7] via-[#e9faf7] to-[#fff4f0] py-12">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center max-w-[1300px] mx-auto gap-8">
          {/* Left Side */}
          <div className="flex-1 min-w-[340px] max-w-[540px]">
            <h1 className="text-[2.4rem] font-bold text-[#222] mb-4 leading-tight">
              Scale up Your E-commerce<br />
              Sales with <span className="text-[#ff6a3c]">Cr</span><span className="text-[#1abc9c]">eative</span>
            </h1>
            <div className="text-[#222] text-[1.06rem] mb-7 max-w-[480px]">
              Stir up your online business to vertex level with apex quality and captivating visuals to make a boom.
            </div>
            {/* Email Input */}
            <form className="flex items-center mb-8 max-w-[370px]" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 py-3 px-4 border border-gray-200 rounded-lg text-base outline-none mr-2 bg-white"
              />
              <button
                type="submit"
                className="bg-[#222] text-white rounded-lg py-3 px-6 font-semibold text-base shadow-md hover:bg-[#333] transition-colors"
              >
                Get Started!
              </button>
            </form>
            {/* Features */}
            <div className="flex gap-9 mt-4 flex-wrap">
              <div className="flex items-start gap-3 min-w-[160px]">
                <span className="text-[2.3rem] text-[#1abc9c] leading-none">&#128100;</span>
                <div>
                  <div className="font-semibold text-[#222] text-[1rem]">Dedicated Manager</div>
                  <div className="text-[#444] text-sm">to communicate for business growth.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 min-w-[160px]">
                <span className="text-[2.3rem] text-[#1abc9c] leading-none">&#128187;</span>
                <div>
                  <div className="font-semibold text-[#222] text-[1rem]">CRM Workflow</div>
                  <div className="text-[#444] text-sm">for Easy & secure order portal.</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Image Collage */}
          <div className="flex gap-4 items-stretch min-w-[340px]">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80" alt="img1" className="w-[70px] h-[320px] object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80" alt="img2" className="w-[60px] h-[260px] object-cover rounded-2xl mt-10" />
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=120&q=80" alt="img3" className="w-[60px] h-[260px] object-cover rounded-2xl mt-10" />
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=180&q=80" alt="img4" className="w-[180px] h-[320px] object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=60&q=80" alt="img5" className="w-[60px] h-[320px] object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
