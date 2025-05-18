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
    <section className="py-[6rem] bg-white">
      <div className="container flex flex-col md:flex-row gap-28 items-start">
        {/* Left */}
        <div className="w-full md:w-[330px] flex flex-col items-start justify-start mb-8 md:mb-0">
          <h2 className="text-[40px] leading-[48px] font-normal text-[#222222] mb-[30px]">Our Latest Post</h2>
          <p className="text-black text-base leading-[26px] mb-[30px]">Capture, Create, and Enhance: Pro Photography and Editing Advice</p>
          <button className="bg-[#e8e9e9] text-[#222] font-normal px-6 py-2 hover:bg-[#1abc9c] text-base shadow-lg transition-all">
            View all Posts
          </button>
        </div>
        {/* Right: Posts */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
          <div className="absolute top-0 left-0 h-full w-full dotted-bg pointer-events-none"></div>
          {posts.map((post, idx) => (
            <div key={idx} className="flex flex-col mb-10">
              <div className="w-full h-[160px] rounded-md overflow-hidden mb-6 bg-gray-100">
                <img src={post.image} alt="post" className="w-full h-full object-cover" />
              </div>
              <div className="text-[14px] leading-[21px] text-[#888] mb-4 hover:text-[var(--secondaryClr)]">{post.date}</div>
              <div className="text-[#222] font-normal text-[18px] leading-[27px] line-clamp-2 hover:text-[var(--primaryClr)] cursor-pointer">
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