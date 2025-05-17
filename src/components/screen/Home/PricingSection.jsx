import React, { useState } from "react";

const plans = [
  {
    name: "Regular",
    delivery: "Delivery in Just 48 Hours",
    deliveryColor: "text-[#ff6a3c]",
    price: 0.49,
    features: [
      "Order Management Dashboard",
      "Editing As Per Service",
      "Free Revision (Max. Quantity 2)",
      "No Minimum Image Cap",
      "Layer File Included",
      "Free Focus Stacking",
      "24 Hours Delivery",
      "Guaranteed Quality",
      "No Subscription Fee",
      "24x7 Live Support"
    ]
  },
  {
    name: "Express",
    delivery: "Delivery in Just 24 Hours",
    deliveryColor: "text-[#1abc9c]",
    price: 0.69,
    features: [
      "Order Management Dashboard",
      "Editing As Per Service",
      "Free Revision (Max. Quantity 1)",
      "No Minimum Image Cap",
      "Layer File Included",
      "Free Focus Stacking",
      "Express Delivery",
      "Guaranteed Quality",
      "No Subscription Fee",
      "24x7 Live Support"
    ]
  },
  {
    name: "Project",
    delivery: "Custom Project Delivery",
    deliveryColor: "text-[#ffb300]",
    price: 0.39,
    features: [
      "Order Management Dashboard",
      "Editing As Per Service",
      "Custom Revision Policy",
      "No Minimum Image Cap",
      "Layer File Included",
      "Project-based Delivery",
      "Guaranteed Quality",
      "No Subscription Fee",
      "Dedicated Manager",
      "24x7 Live Support"
    ]
  },
  {
    name: "Enterprise",
    delivery: "Enterprise Delivery & Support",
    deliveryColor: "text-[#222]",
    price: 0.29,
    features: [
      "Order Management Dashboard",
      "Editing As Per Service",
      "Unlimited Revision",
      "No Minimum Image Cap",
      "Layer File Included",
      "Enterprise Delivery",
      "Guaranteed Quality",
      "No Subscription Fee",
      "Dedicated Manager",
      "24x7 Priority Support"
    ]
  }
];

const PricingSection = () => {
  const [selected, setSelected] = useState(0);
  const plan = plans[selected];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Top */}
        <div className="flex flex-col items-center mb-10">
          <span className="inline-block bg-[#e9faf7] text-[#1abc9c] px-4 py-1 rounded-full text-sm font-medium mb-4">Pricing</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#222] text-center mb-2">
            Unlock stunning visuals with pricing plans<br />designed for every budget
          </h2>
        </div>
        {/* Pricing Table */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-4xl mx-auto">
          {/* Plan Selector */}
          <div className="flex flex-col gap-2 w-full md:w-48">
            {plans.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setSelected(i)}
                className={`w-full text-left px-6 py-4 rounded border border-gray-200 font-semibold text-lg transition-all flex items-center gap-2 ${
                  selected === i
                    ? "bg-[#1abc9c] text-white shadow-md border-[#1abc9c]" 
                    : "bg-white text-[#222] hover:bg-[#e9faf7]"
                }`}
              >
                <span className={`mr-2 w-3 h-3 rounded-full border-2 ${selected === i ? "border-white bg-white" : "border-[#1abc9c] bg-transparent"}`}></span>
                {p.name}
              </button>
            ))}
          </div>
          {/* Plan Details */}
          <div className="flex-1 bg-white rounded border border-gray-200 px-8 py-6 flex flex-col justify-between min-w-[320px]">
            <div>
              <h3 className={`text-lg font-bold mb-2 ${plan.deliveryColor}`}>{plan.delivery}</h3>
              <hr className="mb-4" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-[15px] text-[#222]">
                {plan.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg width="16" height="16" fill="#1abc9c" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#e9faf7" /><path d="M6.5 8.5l1.5 1.5 3-3" stroke="#1abc9c" strokeWidth="1.5" fill="none"/></svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Price Box */}
          <div className="flex flex-col items-center justify-center bg-[#f8f9fa] border border-gray-200 rounded min-w-[180px] px-8 py-8">
            <span className="text-xs text-[#888] mb-1">AS LOW AS</span>
            <div className="flex items-end mb-1">
              <span className="text-3xl font-bold text-[#222]">${plan.price.toFixed(2)}</span>
              <span className="text-[#ff6a3c] font-bold ml-1 mb-1">IMAGE</span>
            </div>
            <button className="mt-4 bg-[#1abc9c] hover:bg-[#159c82] text-white font-medium px-6 py-2 rounded-md text-base transition-all w-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 