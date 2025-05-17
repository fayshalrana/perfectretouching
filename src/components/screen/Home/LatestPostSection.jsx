import React from "react";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80",
    date: "April 25, 2025, 4:42 A.M.",
    title: "Master Photoshop Bracelet Jewelry Retouching with These Simple Steps in 2025"
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80",
    date: "April 17, 2025, 10:24 A.M.",
    title: "Food Photo Retouching Services to Turn Your Photos Yummy"
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80",
    date: "April 5, 2025, 5:24 A.M.",
    title: "9 Diamond Ring Retouching Tips to Perfect Jewelry Photos"
  }
];

const LatestPostSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container flex flex-col md:flex-row gap-8 items-start">
        {/* Left */}
        <div className="w-full md:w-1/3 flex flex-col items-start justify-start mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#222] mb-2">Our Latest Post</h2>
          <p className="text-[#444] text-sm mb-6">Capture, Create, and Enhance: Pro Photography and Editing Advice</p>
          <button className="bg-[#f5f5f5] hover:bg-[#e9faf7] text-[#222] font-medium px-6 py-2 rounded-md text-base shadow-sm transition-all">
            View all Posts
          </button>
        </div>
        {/* Right: Posts */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="w-full h-[160px] rounded-md overflow-hidden mb-2 bg-gray-100">
                <img src={post.image} alt="post" className="w-full h-full object-cover" />
              </div>
              <div className="text-xs text-[#888] mb-1">{post.date}</div>
              <div className="text-[#222] font-medium text-[15px] leading-snug line-clamp-2 hover:underline cursor-pointer">
                {post.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPostSection; 