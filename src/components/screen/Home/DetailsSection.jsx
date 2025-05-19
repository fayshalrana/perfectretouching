import React, { useState } from "react";
import { BsStars, BsBezier, BsFilm } from "react-icons/bs";
import { PiPalette } from "react-icons/pi";
import jewelry from "@assets/images/CONSTANT20201.webp";
import editing from "@assets/images/5700067297034_001.webp";
import graphic from "@assets/images/CreativeGraphics.webp";
import video from "@assets/images/VideoEdit.webp";
import { FaRegGem } from "react-icons/fa";
import { PiTeaBagFill } from "react-icons/pi";
import { FaUserNurse } from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import { IoIosWoman } from "react-icons/io";
import { BsBuildings } from "react-icons/bs";
const tabs = [
  {
    key: "jewelry",
    label: "Retouching Services",
    icon: BsStars,
    activeColor: "#ff6a3c",
    inactiveColor: "#1abc9c"
  },
  {
    key: "editing",
    label: "Editing Services",
    icon: BsBezier,
    activeColor: "#ff6a3c",
    inactiveColor: "#1abc9c"
  },
  {
    key: "graphics",
    label: "Creative Graphics",
    icon: PiPalette,
    activeColor: "#ff6a3c",
    inactiveColor: "#1abc9c"
  },
  {
    key: "video",
    label: "Video Editing",
    icon: BsFilm,
    activeColor: "#ff6a3c",
    inactiveColor: "#1abc9c"
  }
];

const DetailsSection = () => {
  const [activeTab, setActiveTab] = useState("jewelry");

  return (
    <section className="py-[160px] bg-white">
      <div className="container">
        {/* Title & Subtitle */}
        <div className="text-center mb-8">
          <h2 className="text-[34px] leading-[51px] font-bold text-[#212529] tracking-[1.5px] mb-2">Artistry with Precision: Every Detail Matters</h2>
          <p className="text-[#444] text-[18px] leading-[27px] text-center">
            Experience Perfect Retouching where unmatched quality and creativity come together<br />
            to make your brand shine with standout images!
          </p>
        </div>
        {/* Service Categories as Tabs */}
        <div className="max-w-[1060px] mx-auto">
          <div className="grid grid-cols-4 mb-6">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  className="flex flex-col items-center bg-transparent border-none outline-none cursor-pointer group"
                  onClick={() => setActiveTab(tab.key)}
                  style={{ minWidth: 120 }}
                >
                  <Icon size={38} color={isActive ? tab.activeColor : tab.inactiveColor} className="mb-2" />
                  <span className="mt-2 font-semibold pb-5 text-base leading-[24px] text-black hover:text-[var(--primaryClr)]">{tab.label}</span>
                  {isActive && (
                    <span className="block w-2 h-2 rounded-full mt-2 " style={{ background: tab.activeColor }}></span>
                  )}
                </button>
              );
            })}
          </div>
          {/* Tab Content (placeholder, replace with your actual content logic) */}
          {activeTab === "jewelry" && (
            <div className="flex flex-col lg:grid lg:grid-cols-12 items-center">
              {/* Left: Jewelry Image */}
              <div className="flex justify-center lg:col-span-7 px-4">
                <img
                  src={jewelry}
                  alt="Jewelry"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Right: Details */}
              <div className="lg:col-span-5 px-4">
                <h3 className="text-[26px] leading-[39px] text-[#212529] font-semibold pb-[30px]">Retouching Services</h3>
                <p className="text-[#212529] text-base leading-[24px] font-normal mb-[30px]">
                  Transforming ordinary images and revealing the stunning, hidden beauty of jewelry, products, or models with our professional image retouching services is our passion. Through visual enhancements, we help captivate the audience and drive business growth. From removing spots, blemishes, and flaws to perfecting every detail, we eliminate distractions, through online photo retouching allowing viewers to focus on the true essence and beauty of models, jewelry, or products.
                </p>
                {/* Feature Grid */}
                <div className="grid grid-cols-2 gap-x-4 mb-6">
                  <a href="#" className="flex items-center gap-2 text-[#1abc9c] font-medium no-underline py-2 border-b border-[var(--primaryClr)]/50 group">
                    <FaRegGem className="text-base group-hover:text-[var(--secondaryClr)]" />
                    <span className="text-[16px] leading-[24px] font-normal text-[var(--primaryClr)] hover:text-[var(--secondaryClr)]">Jewelry Retouching</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-[#1abc9c] font-medium no-underline py-2 border-b border-[var(--primaryClr)]/50 group">
                    <PiTeaBagFill className="text-base group-hover:text-[var(--secondaryClr)]" />
                    <span className="text-[16px] leading-[24px] font-normal text-[var(--primaryClr)] hover:text-[var(--secondaryClr)]">Product Retouching</span>
                  </a>

                  <a href="#" className="flex items-center gap-2 text-[#1abc9c] font-medium no-underline py-2 group">
                    <FaUserNurse className="text-base group-hover:text-[var(--secondaryClr)]" />
                    <span className="text-[16px] leading-[24px] font-normal text-[var(--primaryClr)] hover:text-[var(--secondaryClr)]">Beauty Retouching</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-[#1abc9c] font-medium no-underline py-2 group">
                    <SlUser className="text-base group-hover:text-[var(--secondaryClr)]" />
                    <span className="text-[16px] leading-[24px] font-normal text-[var(--primaryClr)] hover:text-[var(--secondaryClr)]">Headshot Retouching</span>
                  </a>
                </div>
                <p className="text-[#212529] text-base leading-[24px] font-normal">
                  Divulge the true beauty of your jewelry image with our expert photo retouching services. We offer custom photo editing services like metal smoothing, free focus stacking, and flawless color correction using Adobe Photoshop and top-tier plugins. With advanced tools we preserve every radiant detail, delivering stunning visuals that elevate your brand and captivate your audience.
                </p>
              </div>
            </div>
          )}
          {activeTab === "editing" && (
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 items-start">
              {/* Left: Details */}
              <div className="lg:col-span-5">
                <h3 className="text-[26px] leading-[39px] text-[#212529] font-semibold mb-[30px]">Editing Services</h3>
                <p className="text-[#212529] text-base leading-[24px] font-normal mb-[30px]">
                  Transform ordinary images into professional, attention-grabbing visuals that drive clicks and foot traffic. Our pro photo retouching images with proper detailing are post-ready for websites, social media, shops, and more. Uplift your brand with commercial photo editings like natural shadowing, background removal, color correction, and recoloring. It is the perfect photo editing company to step ahead in global competition.
                </p>
                {/* Feature Cards */}
                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex items-center border border-black hover:border-transparent hover:bg-[var(--primaryClr)] rounded-md p-5 bg-white hover:shadow transition group">
                    <span className="w-[56px] h-[56px] mr-3">
                      {/* Ghost Mannequin Icon (use react-icons or emoji) */}
                      <IoIosWoman className="text-[56px] group-hover:text-white"/>
                    </span>
                    <div>
                      <div className="font-semibold text-lg group-hover:text-white">Ghost Mannequin Services</div>
                      <div className="text-sm text-gray-500 group-hover:text-white">Invisible Edits for Flawless Apparels</div>
                    </div>
                  </div>
                  <div className="flex items-center border border-black hover:border-transparent hover:bg-[var(--primaryClr)] rounded-md p-5 bg-white hover:shadow transition group">
                  <span className="w-[56px] h-[56px] mr-3">
                      {/* Real-Estate Icon (use react-icons or emoji) */}
                      <BsBuildings  className="text-[56px] group-hover:text-white"/>
                    </span>
                    <div>
                      <div className="font-semibold text-lg group-hover:text-white">Real-Estate Editing</div>
                      <div className="text-sm text-gray-500 group-hover:text-white">Boost Property Appeal with Pro Edits</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Product Image */}
              <div className="lg:col-span-7 px-4 h-full pb-6">
                <div className="border border-black rounded-xl p-6 w-full h-full flex justify-center items-center">
                  <img
                    src={editing}
                    alt="Editing Service"
                    className="max-w-md w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          )}
          {activeTab === "graphics" && (
            <div className="flex flex-col lg:grid lg:grid-cols-12 items-center">
              {/* Left: Illustration Image */}
              <div className="flex justify-center lg:col-span-7">
                <img
                  src={graphic}
                  alt="Creative Graphics"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Right: Details */}
              <div className="lg:col-span-5 px-4">
                <h3 className="text-[26px] leading-[39px] text-[#212529] font-semibold mb-[30px]">Creative Graphics</h3>
                <p className="text-[#212529] text-base leading-[24px] font-normal mb-[30px]">
                  Expose your unique ideas with high-end retouching and stunning designs that define your brand's identity and personality. Engage your target audience through photo retouching services and captivating logos, business cards, banners, color palettes, websites, and more. Powerful graphic designs and portrait photo editing speak volumes, making a lasting impact. Stand out and make your brand unforgettable with compelling visuals.
                </p>
                <button className="bg-[#1abc9c] text-white px-[22px] py-2 rounded-[4px] font-normal text-base shadow hover:bg-[#159c82] transition">
                  Read More
                </button>
              </div>
            </div>
          )}
          {activeTab === "video" && (
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 items-center">
              {/* Left: Details */}
              <div className="lg:col-span-5">
                <h3 className="text-[26px] leading-[39px] text-[#212529] font-semibold mb-[30px]">Video Editing</h3>
                <p className="text-[#212529] text-base leading-[24px] font-normal mb-[30px]">
                  Bring your ideas and content to life with videos that allure and connect. From seamless cuts to noise-reduced audio, our experts craft every frame to mesmerize your audience. Whether for social media, corporate projects, or personal memories, let your stories flow effortlessly into the viewers' imagination. Show the world your unique perspective and shine!
                </p>
                <button className="bg-[#1abc9c] text-white px-[22px] py-2 rounded-[4px] font-normal text-base shadow hover:bg-[#159c82] transition">
                  Read More
                </button>
              </div>
              {/* Right: Illustration Image */}
              <div className="flex justify-center lg:col-span-7">
                <img
                  src={video}
                  alt="Video Editing"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection; 