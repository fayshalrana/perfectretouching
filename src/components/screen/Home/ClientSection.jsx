import React from "react";

const clients = [
  {
    name: "agent7",
    img: "https://via.placeholder.com/100x32?text=agent7",
    alt: "agent7 logo"
  },
  {
    name: "DORIANE",
    img: "https://via.placeholder.com/100x32?text=DORIANE",
    alt: "DORIANE logo"
  },
  {
    name: "PMP",
    img: "https://via.placeholder.com/60x32?text=PMP",
    alt: "PMP logo"
  },
  {
    name: "HENRI DAUSSI",
    img: "https://via.placeholder.com/120x32?text=HENRI+DAUSSI",
    alt: "HENRI DAUSSI logo"
  }
];

const ClientSection = () => {
  return (
    <section className="py-6 border-b">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <span className="font-semibold text-[15px] text-black whitespace-nowrap">
            Trusted by 3.3K clients worldwide —
          </span>
          <div className="flex-1 flex items-center justify-evenly gap-8">
            {clients.map((client, idx) => (
              <img
                key={client.name}
                src={client.img}
                alt={client.alt}
                className="h-8 object-contain max-w-[140px]"
                style={idx === 2 ? { filter: 'brightness(0) saturate(100%) invert(60%) sepia(80%) saturate(500%) hue-rotate(10deg)' } : {}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection; 