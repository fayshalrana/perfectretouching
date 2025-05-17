import React from "react";

const steps = [
  {
    number: "01",
    title: "Upload Files with Requirement",
    desc: "Submit the images that you want to be enhanced with the specific instructions of your requirements to give us a clear vision of your imagination.",
    bg: "bg-[#e9faf7]",
    border: "border-[#1abc9c]",
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="28" fill="#e9faf7" />
        <path d="M28 38V22" stroke="#1abc9c" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 26l4-4 4 4" stroke="#ffb300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="32" width="24" height="8" rx="4" stroke="#1abc9c" strokeWidth="2" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Review & Approve Output",
    desc: "We deliver the edited images for your review. You can request revisions or approve the output. Once satisfied, download your final images.",
    bg: "bg-[#fff4f0]",
    border: "border-[#ff6a3c]",
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="28" fill="#fff4f0" />
        <path d="M20 28l6 6 10-10" stroke="#ff6a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="32" width="24" height="8" rx="4" stroke="#ff6a3c" strokeWidth="2" />
      </svg>
    )
  }
];

const ProcessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left */}
        <div>
          <span className="inline-block border border-[#1abc9c] text-[#1abc9c] px-4 py-1 rounded-full text-sm font-medium mb-6">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-4 leading-tight max-w-xl">Masterpieces in the Making –<br />Experience Effortless Perfection</h2>
          <p className="text-[#222] text-sm max-w-md">A work process that makes your work easy to do without facing any hassle.</p>
        </div>
        {/* Right: Sticky Steps */}
        <div className="flex flex-col gap-8 sticky top-8">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`relative border ${step.border} ${step.bg} rounded-lg p-8 flex flex-col items-center text-center min-h-[280px]`}
            >
              <span className="absolute left-6 top-6 w-8 h-8 rounded-full bg-[#222] text-white flex items-center justify-center font-semibold text-sm">{step.number}</span>
              <div className="mb-4 mt-2">{step.icon}</div>
              <h3 className="font-bold text-lg text-[#222] mb-2">{step.title}</h3>
              <p className="text-[#222] text-sm max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 