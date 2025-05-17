import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const stats = [
  { value: "100+", label: "DESIGNERS" },
  { value: "3313+", label: "CLIENTS" },
  { value: "5192+", label: "PROJECTS" },
  { value: "12274033+", label: "IMAGES" },
];

const testimonials = [
  {
    logo: "https://via.placeholder.com/60x60?text=LOGO",
    stars: 5,
    text: "Excellent photo retouching service! Fast, detailed, and professional. Transformed images beautifully, enhancing every detail!",
    name: "Burdeens Jewelry Ltd",
    country: "USA"
  },
  {
    logo: "https://via.placeholder.com/60x60?text=LOGO",
    stars: 5,
    text: "Amazing results! The retouching was flawless, making my photos look natural and polished. Highly recommend!",
    name: "Epicmind Studio",
    country: "Canada"
  },
  {
    logo: "https://via.placeholder.com/60x60?text=LOGO",
    stars: 5,
    text: "Quick turnaround and excellent quality. The retouching exceeded my expectations, enhancing every detail perfectly.",
    name: "lia vie",
    country: "Austria"
  }
];

const TrustSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="bg-[#f7f8fa] py-16">
      <div className="container flex flex-col lg:flex-row gap-10 items-start">
        {/* Left */}
        <div className="flex-1 max-w-2xl mb-10 lg:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#222] mb-2">Trust, Transparency, Transformation.</h2>
          <p className="text-[#444] mb-2">Having the essence of trust with professional work transparency.</p>
          <div className="w-10 h-1 bg-[#222] mb-6" />
          <a href="#" className="text-[#1abc9c] font-semibold text-sm mb-2 inline-block">Know More</a>
          <h3 className="text-2xl md:text-2xl font-bold text-[#222] mb-6">Rethink, Rebuilt, Retouch - Unleash<br />Your Brand's Potential</h3>
          <div className="grid grid-cols-2 gap-6 mb-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[#1abc9c] text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-[#444] font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-[#444] text-base">
            From commercial photo editing to portrait photo editing, get impactful and best photo editing services from a reputable photo editing company. Custom photo editing services that will fix old photos through color correction services, smoothening, and other techniques to provide the perfect photo restoration service.
          </p>
        </div>
        {/* Right: Slider */}
        {/* <div className="flex-1 max-w-xl w-full">
          <Slider {...settings} className="h-full">
            {testimonials.map((t, idx) => (
              <div key={idx} className="px-4 py-6 h-full flex items-center justify-center">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center text-center h-full min-h-[240px]">
                  <img src={t.logo} alt="logo" className="w-14 h-14 object-contain mb-2" />
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(t.stars)].map((_, i) => (
                      <svg key={i} width="18" height="18" fill="#ffb300" viewBox="0 0 20 20"><polygon points="10,1 12.6,7.5 19.5,7.5 13.8,11.9 16.4,18.5 10,14.1 3.6,18.5 6.2,11.9 0.5,7.5 7.4,7.5" /></svg>
                    ))}
                  </div>
                  <p className="text-[#222] text-[15px] mb-3">{t.text}</p>
                  <div className="font-bold text-[#222] text-sm">{t.name}</div>
                  <div className="text-xs text-[#888]">{t.country}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div> */}
      </div>
    </section>
  );
};

export default TrustSection; 