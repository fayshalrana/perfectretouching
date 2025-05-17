import React from "react";

const CallToActionSection = () => {
  return (
    <section className="w-full py-8 bg-gradient-to-r from-[#e9faf7] via-white to-[#fff4f0]">
      <div className="container flex items-center justify-between">
        <h3 className="mx-auto text-center font-semibold text-xl md:text-2xl text-[#222]">
          Try Out Our Services to See Your Image Shine!
        </h3>
        <button className="ml-auto bg-[#ff7a59] hover:bg-[#ff6a3c] text-white font-medium px-6 py-2 rounded-md text-base transition-all">
          Free Trial
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection; 