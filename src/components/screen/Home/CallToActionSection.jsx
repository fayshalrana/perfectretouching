import React from "react";

const CallToActionSection = () => {
  return (
    <section style={{ background: 'linear-gradient(90deg, rgba(224, 246, 242, 1) 1%, rgba(255, 234, 228, 1) 100%)' }} className="w-full py-20">
      <div className="container flex items-start gap-4 justify-start md:justify-between flex-col lg:flex-row">
        <h3 className="text-left font-semibold text-[26px] leading-[39px] text-[#212529]">
          Try Out Our Services to See Your Image Shine!
        </h3>
        <button className="md:ml-auto bg-[#ff7a59] hover:bg-[#ff6a3c] text-white font-normal px-4 py-2 rounded-md text-[20px] leading-[30px] transition-all">
          Free Trial
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection; 