import React from "react";
import Slider from "react-slick";
import logo1 from "@assets/images/burdeens.webp";
import logo2 from "@assets/images/doriane.webp";
import logo3 from "@assets/images/pmp.webp";
import logo4 from "@assets/images/henri-daussi.webp";
import logo5 from "@assets/images/segent4.webp";
import logo6 from "@assets/images/giorpura.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
  {
    name: "agent7",
    img: logo1,
    alt: "agent7 logo",
  },
  {
    name: "DORIANE",
    img: logo2,
    alt: "DORIANE logo",
  },
  {
    name: "PMP",
    img: logo3,
    alt: "PMP logo",
  },
  {
    name: "HENRI DAUSSI",
    img: logo4,
    alt: "HENRI DAUSSI logo",
  },
  {
    name: "KATE SPADE",
    img: logo5,
    alt: "KATE SPADE logo",
  },
  {
    name: "GIORPURA",
    img: logo6,
    alt: "GIORPURA logo",
  },
];

const ClientSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // slow, smooth scroll
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  };

  return (
    <section className="py-4 border-b border-[#dee2e6] border-t">
      <div className="container">
        <div className="flex items-center justify-between gap-6">
          <span className="hidden md:block lg:min-w-[380px] font-semibold text-[15px] text-black whitespace-nowrap">
            Trusted by 3.3K clients worldwide —
          </span>
          <div className="flex-1 min-w-0">
            <Slider {...settings}>
              {clients.map((client) => (
                <div key={client.name} className="flex justify-center items-center w-[109px] h-[36px]">
                  <img
                    src={client.img}
                    alt={client.alt}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
