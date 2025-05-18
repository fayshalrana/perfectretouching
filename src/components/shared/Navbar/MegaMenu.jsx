import React from "react";
import { MdOutlineDiamond, MdPhotoCamera } from "react-icons/md";
import { FaUserAlt, FaUserCircle, FaUserSecret, FaHome, FaVideo } from "react-icons/fa";
import { GiPaintBrush } from "react-icons/gi";
import "./MegaMenu.css";

const servicesLeft = [
  { icon: <MdOutlineDiamond />, label: "Jewelry Retouching" },
  { icon: <MdPhotoCamera />, label: "Product Retouching" },
  { icon: <FaUserAlt />, label: "Model Retouching" },
  { icon: <FaUserCircle />, label: "Headshot Retouching" },
];
const servicesRight = [
  { icon: <FaUserSecret />, label: "Ghost Mannequin" },
  { icon: <FaHome />, label: "Real Estate Editing" },
  { icon: <GiPaintBrush />, label: "Creative Graphics" },
  { icon: <FaVideo />, label: "Video Editing" },
];

export default function MegaMenu() {
  return (
    <div className="mega-menu overflow-visible">
      <div className="mega-menu-col mega-menu-intro py-7 px-6">
        <div className="service-title-box w-full h-full p-4">
          <div className="text-[1.625rem] font-bold mb-6 text-black">Services</div>
          <div className="mega-menu-desc text-[16px]">Choose retouching<br />services you need</div>
        </div>
      </div>
      <div className="mega-menu-col mega-menu-list border-l-2 border-gray-200  py-7 px-6 w-[224px]">
        <div className="p-4 w-[260px]">
          {servicesLeft.map((s) => (
            <div className="mega-menu-item px-1 py-2 hover:bg-[linear-gradient(90deg, rgba(224, 246, 242, 1) 1%, rgba(255, 234, 228, 1) 100%)]/50 hover:backdrop-blur-sm rounded-md hover:cursor-pointer hover:ml-2 transition-all duration-300" key={s.label}>
              <span className="mega-menu-icon w-4 h-4">{s.icon}</span>
              <span className="text-sm font-normal hover:text-[#1abc9c] transition-all duration-300 nowrap">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mega-menu-col mega-menu-list border-l-2 border-gray-200 py-7 px-6 w-[224px]">
      <div className="p-4 w-[260px]">
        {servicesRight.map((s) => (
         <div className="mega-menu-item px-1 py-2 hover:bg-[linear-gradient(90deg, rgba(224, 246, 242, 1) 1%, rgba(255, 234, 228, 1) 100%)]/10 hover:backdrop-blur-sm rounded-md hover:cursor-pointer hover:ml-2 transition-all duration-300" key={s.label}>
              <span className="mega-menu-icon w-4 h-4">{s.icon}</span>
              <span className="text-sm font-normal hover:text-[#1abc9c] transition-all duration-300 nowrap">{s.label}</span>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
} 