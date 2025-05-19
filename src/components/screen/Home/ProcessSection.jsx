import React from "react";
import icon1 from "@assets/images/process1.webp";
import icon2 from "@assets/images/process2.webp";
import icon3 from "@assets/images/process3.webp";
import icon4 from "@assets/images/process4.webp";

const steps = [
  {
    number: "01",
    title: "Upload Files with Requirement",
    desc: "Submit the images that you want to be enhanced with the specific instructions of your requirements to give us a clear vision of your imagination.",
    bg: "bg-[#e9faf7]",
    border: "border-[#1abc9c]",
    icon: icon1
  },
  {
    number: "02",
    title: "Review & Approve Output",
    desc: "We deliver the edited images for your review. You can request revisions or approve the output. Once satisfied, download your final images.",
    bg: "bg-[#fff4f0]",
    border: "border-[#ff6a3c]",
    icon: icon2
  },
  {
    number: "03",
    title: "Review & Approve Output",
    desc: "We deliver the edited images for your review. You can request revisions or approve the output. Once satisfied, download your final images.",
    bg: "bg-[#fff9e6]",
    border: "border-[#e4ad00]",
    icon: icon3
  },
  {
    number: "04",
    title: "Review & Approve Output",
    desc: "We deliver the edited images for your review. You can request revisions or approve the output. Once satisfied, download your final images.",
    bg: "bg-[#e6fafd]",
    border: "border-[#00d6f6]",
    icon: icon4
  }
];

const ProcessSection = () => {
  return (
    <section className="py-[8rem] bg-white">
      <div className="container flex justify-between gap-[30px] lg:gap-[7rem] flex-col lg:flex-row items-start">
        {/* Left */}
        <div className="w-full lg:w-[660px] md:sticky md:top-[100px]">
          <span className="inline-block border border-[#1abc9c] text-[12px] font-light tracking-normal text-[#1abc9c] px-2 rounded-full mb-4">Process</span>
          <h2 style={{ fontFamily: 'Playfair Display' }} className="text-[40px] font-bold text-[#222] mb-[30px] pt-6 leading-[48px]">Masterpieces in the Making –<br />Experience Effortless Perfection</h2>
          <p className="text-[#222] text-bace leading-[26px]">A work process that makes your work easy to do without facing any hassle.</p>
        </div>
        {/* Right: Sticky Steps */}
        <div className="flex flex-col gap-4 md:gap-8 w-full lg:w-[550px]">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`relative md:sticky border ${step.border} ${step.bg} rounded-lg p-12 flex flex-col items-center text-center min-h-[280px]`}
              style={{ top: `${100 + idx * 50}px` }} // 100, 300, 500, ...
            >
              <span className="absolute left-6 top-6 w-12 h-12 rounded-full bg-[#222] text-white flex items-center justify-center font-semibold text-sm">
                {step.number}
              </span>
              <div className="mb-4 mt-2 w-[120px] h-[120px]">
                <img src={step.icon} alt="icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-[26px] leading-[39px] mb-[30px] text-[#212529]">{step.title}</h3>
              <p className="text-[#212529] text-base leading-[24px] font-normal text-center">{step.desc}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ProcessSection; 