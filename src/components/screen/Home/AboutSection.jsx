import React from "react";

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
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left */}
          <div className="flex-1 max-w-2xl">
            <span className="inline-block bg-[#e9faf7] text-[#1abc9c] px-4 py-1 rounded-full text-sm font-medium mb-4">About</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-4 leading-tight">Every Pixel, Every Detail –<br />Masterful Retouching</h2>
            <p className="text-[#444] text-base mb-6">
              Perfect Retouching offers flawless, professional photo editing and expert image retouching and video editing services, with a commitment to delivering on time, every time. We specialize in enhancing the beauty of every frame, restoring old photos, and capturing the true essence of each image. Trust us to bring your visuals to life with the precision and quality your brand deserves.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-6">
              {featuresLeft.map((feature, i) => (
                <div key={feature} className="flex items-center gap-2 text-[#222] text-[15px] font-medium">
                  <span className="text-[#1abc9c] text-lg">✔</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          {/* Right: Illustration and Feature Blurbs Side by Side */}
          <div className="flex-1 flex flex-row items-center justify-center gap-8 max-w-3xl w-full">
            {/* Illustration Centered Vertically */}
            <div className="flex-shrink-0 flex items-center justify-center h-full">
              <svg width="260" height="200" viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="260" height="200" rx="16" fill="#e9faf7" />
                <rect x="40" y="120" width="40" height="60" rx="6" fill="#1abc9c" />
                <rect x="90" y="100" width="40" height="80" rx="6" fill="#222" />
                <rect x="140" y="80" width="40" height="100" rx="6" fill="#1abc9c" />
                <rect x="190" y="60" width="40" height="120" rx="6" fill="#222" />
                <circle cx="60" cy="110" r="10" fill="#fff" />
                <circle cx="110" cy="90" r="10" fill="#fff" />
                <circle cx="160" cy="70" r="10" fill="#fff" />
                <circle cx="210" cy="50" r="10" fill="#fff" />
              </svg>
            </div>
            {/* Feature Blurbs */}
            <div className="flex flex-col gap-6 w-[260px]">
              {featuresRight.map((item) => (
                <div key={item.title} className="mb-2">
                  <h4 className="text-[#1abc9c] text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-[#444] text-[15px]">{item.desc}</p>
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