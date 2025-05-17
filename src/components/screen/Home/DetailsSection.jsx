import React from "react";

const services = [
  {
    name: "Retouching Services",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff3ed" /><path d="M16 8l2 4 4 .5-3 3 1 4-4-2-4 2 1-4-3-3 4-.5 2-4z" fill="#ff6a3c"/></svg>
    ),
    active: true
  },
  {
    name: "Editing Services",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#e9faf7" /><path d="M10 22l12-12M10 10h12v12" stroke="#1abc9c" strokeWidth="2"/></svg>
    ),
    active: false
  },
  {
    name: "Creative Graphics",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#e9faf7" /><circle cx="16" cy="16" r="6" stroke="#1abc9c" strokeWidth="2"/><circle cx="16" cy="16" r="2" fill="#1abc9c"/></svg>
    ),
    active: false
  },
  {
    name: "Video Editing",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#e9faf7" /><rect x="10" y="12" width="8" height="8" rx="2" stroke="#1abc9c" strokeWidth="2"/><path d="M20 14l4 2-4 2v-4z" fill="#1abc9c"/></svg>
    ),
    active: false
  }
];

const tags = [
  "Jewelry Retouching",
  "Product Retouching",
  "Beauty Retouching",
  "Headshot Retouching"
];

const DetailsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        {/* Title & Subtitle */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#222] mb-2">Artistry with Precision: Every Detail Matters</h2>
          <p className="text-[#444] text-base max-w-2xl mx-auto">
            Experience Perfect Retouching where unmatched quality and creativity come together<br />
            to make your brand shine with standout images!
          </p>
        </div>
        {/* Service Categories */}
        <div className="flex flex-wrap justify-center gap-10 mb-8">
          {services.map((service, i) => (
            <div key={service.name} className="flex flex-col items-center">
              <div className={
                service.active
                  ? "mb-1 flex items-center justify-center" 
                  : "mb-1 flex items-center justify-center"
              }>
                {service.icon}
              </div>
              <span className={
                service.active
                  ? "text-[#ff6a3c] font-semibold text-[15px] mt-1"
                  : "text-[#222] font-semibold text-[15px] mt-1"
              }>
                {service.name}
              </span>
              {service.active && <span className="block w-1 h-1 bg-[#ff6a3c] rounded-full mt-1"></span>}
            </div>
          ))}
        </div>
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start gap-10 mt-4">
          {/* Left: Jewelry Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
              alt="Jewelry"
              className="max-w-xs md:max-w-sm lg:max-w-md w-full h-auto object-contain"
            />
          </div>
          {/* Right: Details */}
          <div className="flex-1 max-w-xl">
            <h3 className="text-xl font-bold text-[#222] mb-3">Retouching Services</h3>
            <p className="text-[#444] text-base mb-4">
              Transforming ordinary images and revealing the stunning, hidden beauty of jewelry, products, or models with our professional image retouching services is our passion. Through visual enhancements, we help captivate the audience and drive business growth. From removing spots, blemishes, and flaws to perfecting every detail, we eliminate distractions, through online photo retouching allowing viewers to focus on the true essence and beauty of models, jewelry, or products.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-[#e9faf7] text-[#1abc9c] rounded-full text-sm font-medium border border-[#1abc9c]">
                  <svg width="16" height="16" fill="#1abc9c" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#e9faf7" /><path d="M6.5 8.5l1.5 1.5 3-3" stroke="#1abc9c" strokeWidth="1.5" fill="none"/></svg>
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-[#444] text-base">
              Divulge the true beauty of your jewelry image with our expert photo retouching services. We offer custom photo editing services like metal smoothing, free focus stacking, and flawless color correction using Adobe Photoshop and top-tier plugins. With advanced tools we preserve every detail and quality, delivering stunning visuals that elevate your jewelry and captivate your audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection; 