import React from "react";
import Slider from "react-slick";
import client1 from "@assets/images/Benjamin-Ronvel.webp";
import client2 from "@assets/images/Chris-Lo-Bue-Photography.webp";
import client3 from "@assets/images/NicBarella.webp";
import client4 from "@assets/images/EJI.webp";
import client5 from "@assets/images/doriane.webp";
import client6 from "@assets/images/pmp.webp";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import '../../../styles/trustSlider.css'

const stats = [
  { value: "100+", label: "DESIGNERS" },
  { value: "3313+", label: "CLIENTS" },
  { value: "5192+", label: "PROJECTS" },
  { value: "12274033+", label: "IMAGES" },
];
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow group`}
      style={{ ...style, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      onClick={onClick}
    >
      <IoIosArrowForward className="text-[var(--primaryClr)] group-hover:text-white" size={40} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow group`}
      style={{ ...style, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      onClick={onClick}
    >
      <IoIosArrowBack className="text-[var(--primaryClr)] group-hover:text-white" size={40} />

    </div>
  );
};


const TrustSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="bg-[#f7f8fa] py-16">
      <div className="container flex flex-col lg:flex-row gap-6 items-start">
        {/* Left */}
        <div className="flex-1 max-w-2xl mb-10 lg:mb-0 pr-[40px]">
          <div className="mb-[80px] relative before:content-[''] before:absolute before:-bottom-[30px] before:left-0 before:w-10 before:h-[1px] before:bg-[#222]">
            <h2 className="text-[34px] leading-[51px] font-semibold text-[#212529] mb-2">Trust, Transparency, Transformation.</h2>
            <p className="text-[18px] leading-[27px] text-[#1D2C4C] font-normal mt-2">Having the essence of trust with professional work transparency.</p>
          </div>
          <div className="mb-[24px]">
            <span style={{ fontFamily: 'Playfair Display' }} className="text-black font-normal text-base mb-2 inline-block">Know More</span>
            <h3 className="text-[34px] leading-[51px] font-semibold text-[#212529]">Rethink, Rebuilt, Retouch - Unleash<br />Your Brand's Potential</h3>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[#1abc9c] text-[28px] leading-[42px] font-semibold">{stat.value}</div>
                <div className="text-[13px] text-[#444] font-light uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-[#444] text-base leading-[24px] font-normal">
            From commercial photo editing to portrait photo editing, get impactful and best photo editing services from a reputable photo editing company. Custom photo editing services that will fix old photos through color correction services, smoothening, and other techniques to provide the perfect photo restoration service.
          </p>
        </div>
        {/* Right: Slider */}
        <div className="flex-1 max-w-xl w-full">
          <Slider {...settings} className="h-full">
            {/* Frist slide  */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="flex items-center justify-center">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center text-center h-full min-h-[240px]">
                      <img src={client1} alt="logo" className="w-14 h-14 object-contain mb-2 rounded-full" />
                      <div className="flex items-center justify-center mb-4 mt-6">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="18" height="18" fill="#ffb300" viewBox="0 0 20 20"><polygon points="10,1 12.6,7.5 19.5,7.5 13.8,11.9 16.4,18.5 10,14.1 3.6,18.5 6.2,11.9 0.5,7.5 7.4,7.5" /></svg>
                        ))}
                      </div>
                      <p className="text-[#212529]/80 leading-[20px] text-[14px] mb-6">Quick turnaround and excellent quality. The retouching exceeded my expectations, enhancing every detail perfectly.</p>
                      <div className="font-bold text-[#222] text-sm">lia vie</div>
                      <div className="text-xs text-[#888]">Austria</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="h-full flex items-center justify-center">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center text-center h-full min-h-[240px]">
                      <img src={client2} alt="logo" className="w-14 h-14 object-contain mb-2 rounded-full" />
                      <div className="flex items-center justify-center mb-4 mt-6">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="18" height="18" fill="#ffb300" viewBox="0 0 20 20"><polygon points="10,1 12.6,7.5 19.5,7.5 13.8,11.9 16.4,18.5 10,14.1 3.6,18.5 6.2,11.9 0.5,7.5 7.4,7.5" /></svg>
                        ))}
                      </div>
                      <p className="text-[#212529]/80 leading-[20px] text-[14px] mb-6">Quick turnaround and excellent quality. The retouching exceeded my expectations, enhancing every detail perfectly.</p>
                      <div className="font-bold text-[#222] text-sm">lia vie</div>
                      <div className="text-xs text-[#888]">Austria</div>
                    </div>
                  </div>
                  <div className="h-full flex items-center justify-center">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center text-center h-full min-h-[240px]">
                      <img src={client3} alt="logo" className="w-14 h-14 object-contain mb-2 rounded-full" />
                      <div className="flex items-center justify-center mb-4 mt-6">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="18" height="18" fill="#ffb300" viewBox="0 0 20 20"><polygon points="10,1 12.6,7.5 19.5,7.5 13.8,11.9 16.4,18.5 10,14.1 3.6,18.5 6.2,11.9 0.5,7.5 7.4,7.5" /></svg>
                        ))}
                      </div>
                      <p className="text-[#212529]/80 leading-[20px] text-[14px] mb-6">Quick turnaround and excellent quality. The retouching exceeded my expectations, enhancing every detail perfectly.</p>
                      <div className="font-bold text-[#222] text-sm">lia vie</div>
                      <div className="text-xs text-[#888]">Austria</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second slider  */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="flex items-center justify-center">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center text-center h-full min-h-[240px]">
                      <img src={client4} alt="logo" className="w-14 h-14 object-contain mb-2 rounded-full border border-gray-200" />
                      <div className="flex items-center justify-center mb-4 mt-6">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="18" height="18" fill="#ffb300" viewBox="0 0 20 20"><polygon points="10,1 12.6,7.5 19.5,7.5 13.8,11.9 16.4,18.5 10,14.1 3.6,18.5 6.2,11.9 0.5,7.5 7.4,7.5" /></svg>
                        ))}
                      </div>
                      <p className="text-[#212529]/80 leading-[20px] text-[14px] mb-6">Quick turnaround and excellent quality. The retouching exceeded my expectations, enhancing every detail perfectly.</p>
                      <div className="font-bold text-[#222] text-sm">lia vie</div>
                      <div className="text-xs text-[#888]">Austria</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="h-full flex items-center justify-center">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center text-center h-full min-h-[240px]">
                      <img src={client5} alt="logo" className="w-14 h-14 object-contain mb-2 rounded-full border border-gray-200" />
                      <div className="flex items-center justify-center mb-4 mt-6">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="18" height="18" fill="#ffb300" viewBox="0 0 20 20"><polygon points="10,1 12.6,7.5 19.5,7.5 13.8,11.9 16.4,18.5 10,14.1 3.6,18.5 6.2,11.9 0.5,7.5 7.4,7.5" /></svg>
                        ))}
                      </div>
                      <p className="text-[#212529]/80 leading-[20px] text-[14px] mb-6">Quick turnaround and excellent quality. The retouching exceeded my expectations, enhancing every detail perfectly.</p>
                      <div className="font-bold text-[#222] text-sm">lia vie</div>
                      <div className="text-xs text-[#888]">Austria</div>
                    </div>
                  </div>
                  <div className="h-full flex items-center justify-center">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center text-center h-full min-h-[240px]">
                      <img src={client6} alt="logo" className="w-14 h-14 object-contain mb-2 rounded-full border border-gray-200" />
                      <div className="flex items-center justify-center mb-4 mt-6">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="18" height="18" fill="#ffb300" viewBox="0 0 20 20"><polygon points="10,1 12.6,7.5 19.5,7.5 13.8,11.9 16.4,18.5 10,14.1 3.6,18.5 6.2,11.9 0.5,7.5 7.4,7.5" /></svg>
                        ))}
                      </div>
                      <p className="text-[#212529]/80 leading-[20px] text-[14px] mb-6">Quick turnaround and excellent quality. The retouching exceeded my expectations, enhancing every detail perfectly.</p>
                      <div className="font-bold text-[#222] text-sm">lia vie</div>
                      <div className="text-xs text-[#888]">Austria</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TrustSection; 