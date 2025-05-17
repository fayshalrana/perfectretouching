import React from "react";

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
    <section className="py-16 bg-[#f7f8fa]">
      <div className="container flex flex-col lg:flex-row items-center gap-10">
        {/* Left: CRM Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://assets-global.website-files.com/63f5b6e6e6b1b2b2b2b2b2b2/63f5b6e6e6b1b2b2b2b2b2b2_dashboard.png"
            alt="CRM Dashboard"
            className="max-w-lg w-full rounded shadow-md bg-white"
          />
        </div>
        {/* Right: Content */}
        <div className="flex-1 max-w-xl">
          <span className="inline-block border border-[#1abc9c] text-[#1abc9c] px-4 py-1 rounded-full text-sm font-medium mb-4">Portal</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-4 leading-tight">Simplified Order<br />Management, Elevated Retouching</h2>
          <p className="text-[#444] text-base mb-6">
            At Perfect Retouching, we prioritize client comfort with our efficient CRM system. This seamless management balances speed and quality, ensuring you receive top-notch service without compromise. Experience a smooth collaboration that enhances your workflow!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
            {features.map((feature, i) => (
              <div key={feature} className="flex items-center gap-2 text-[#1abc9c] text-[15px] font-medium">
                <svg width="18" height="18" fill="#1abc9c" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#e9faf7" /><path d="M6.5 8.5l1.5 1.5 3-3" stroke="#1abc9c" strokeWidth="1.5" fill="none"/></svg>
                <span className="text-[#222]">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <button className="bg-[#1abc9c] hover:bg-[#159c82] text-white font-medium px-6 py-2 rounded-md text-base transition-all">
              Get a Quote
            </button>
            <button className="bg-[#ff7a59] hover:bg-[#ff6a3c] text-white font-medium px-6 py-2 rounded-md text-base transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalSection; 