import { useState } from "react";
import { Link } from "react-router-dom";

type ServiceItem = {
  name: string;
  desc: string;
  duration: string;
  price: string;
  featured?: boolean;
};

type ServiceSection = {
  category: string;
  items: ServiceItem[];
};

const SERVICES: ServiceSection[] = [
  {
    category: "Haircuts",
    items: [
      {
        name: "Classic Cut",
        desc: "Timeless scissor cut shaped to your face. Includes wash, cut, and style.",
        duration: "45 min",
        price: "LKR 1,500",
      },
      {
        name: "Skin Fade",
        desc: "Seamless gradient from skin to length. The modern gentleman's signature.",
        duration: "50 min",
        price: "LKR 2,000",
      },
      {
        name: "Textured Crop",
        desc: "Contemporary disconnected cut with texture and movement on top.",
        duration: "45 min",
        price: "LKR 1,800",
      },
      {
        name: "Kids Cut",
        desc: "Friendly, patient service for boys under 12. Classic or modern styles.",
        duration: "30 min",
        price: "LKR 900",
      },
    ],
  },
  {
    category: "Beard & Shave",
    items: [
      {
        name: "Hot Towel Shave",
        desc: "Straight-razor shave with hot towels, pre-shave oil, and cooling balm.",
        duration: "45 min",
        price: "LKR 2,000",
      },
      {
        name: "Beard Sculpt",
        desc: "Precision shaping and defining your beard's natural lines.",
        duration: "30 min",
        price: "LKR 1,200",
      },
      {
        name: "Beard Trim",
        desc: "Tidy up and maintain your existing beard length and shape.",
        duration: "20 min",
        price: "LKR 800",
      },
      {
        name: "Beard Treatment",
        desc: "Deep conditioning oil treatment and mask for beard health.",
        duration: "30 min",
        price: "LKR 1,500",
      },
    ],
  },
  {
    category: "Packages",
    items: [
      {
        name: "The Works",
        desc: "Classic cut + beard sculpt + hot towel shave + scalp massage.",
        duration: "90 min",
        price: "LKR 4,500",
        featured: true,
      },
      {
        name: "Gentleman's Refresh",
        desc: "Classic cut + beard trim + hot towel treatment.",
        duration: "75 min",
        price: "LKR 3,200",
        featured: true,
      },
      {
        name: "Quick Groom",
        desc: "Express cut and beard tidy for the man on the go.",
        duration: "30 min",
        price: "LKR 2,000",
      },
    ],
  },
  {
    category: "Treatments",
    items: [
      {
        name: "Scalp Massage",
        desc: "Revitalizing 20-minute pressure point massage. Stress relief guaranteed.",
        duration: "20 min",
        price: "LKR 800",
      },
      {
        name: "Hair Mask",
        desc: "Protein-rich treatment for strength, shine, and manageability.",
        duration: "30 min",
        price: "LKR 1,200",
      },
      {
        name: "Grey Blending",
        desc: "Subtle, natural-looking colour to blend or cover grey.",
        duration: "60 min",
        price: "LKR 3,500",
      },
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...SERVICES.map((s) => s.category)];
  const filtered =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="scissors-bg py-24 px-6 border-b border-[#c9a84c]/20 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-linear-to-l from-[#c9a84c]/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <p className="font-body tracking-[0.4em] text-[#c9a84c] text-sm uppercase mb-4">
            What We Offer
          </p>
          <h1
            className="font-headline leading-none text-[#f5f0e8] mb-6"
            style={{ fontSize: "clamp(3rem,8vw,7rem)" }}
          >
            OUR
            <br />
            SERVICES
          </h1>
          <p className="font-body text-[#f5f0e8]/55 text-xl max-w-xl leading-relaxed">
            Every service is performed by a master barber with years of
            experience. No rushing. No compromise. Just craft.
          </p>
        </div>
        <div className="absolute right-8 bottom-0 font-headline text-[15rem] text-[#c9a84c]/5 leading-none select-none">
          ✦
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16.25 z-40 bg-[#0d0d0d]/90 backdrop-blur-sm border-b border-[#c9a84c]/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-headline tracking-widest text-sm px-6 py-2 whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#c9a84c] text-[#0d0d0d]"
                  : "border border-[#c9a84c]/20 text-[#f5f0e8]/50 hover:border-[#c9a84c]/50 hover:text-[#f5f0e8]"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {filtered.map((section) => (
          <div key={section.category} className="mb-16 fade-in">
            <div className="flex items-center gap-6 mb-8">
              <h2 className="font-display text-3xl">{section.category}</h2>
              <div className="flex-1 h-px bg-[#c9a84c]/20" />
              <span className="font-body text-[#f5f0e8]/30 text-sm tracking-widest uppercase">
                {section.items.length} services
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className={`service-card border p-6 relative overflow-hidden group ${
                    item.featured
                      ? "border-[#c9a84c]/50 bg-[#111111]"
                      : "border-[#c9a84c]/15 bg-[#0d0d0d]"
                  }`}
                >
                  {item.featured && (
                    <div className="absolute top-0 right-0 bg-[#c9a84c] text-[#0d0d0d] font-headline tracking-widest text-xs px-3 py-1">
                      POPULAR
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display text-xl group-hover:text-[#c9a84c] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="text-right ml-4 shrink-0">
                      <div className="font-headline text-xl gold tracking-wide">
                        {item.price}
                      </div>
                      <div className="font-body text-[#f5f0e8]/35 text-xs tracking-widest uppercase mt-0.5">
                        {item.duration}
                      </div>
                    </div>
                  </div>
                  <p className="font-body text-[#f5f0e8]/50 text-lg leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <Link
                    to="/booking"
                    className="reveal-btn inline-block border border-[#c9a84c]/50 text-[#c9a84c] font-headline tracking-widest text-xs px-4 py-2 hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-all duration-300"
                  >
                    BOOK THIS →
                  </Link>
                  <div className="absolute left-0 top-0 left-accent" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Inclusions Banner */}
      <section className="border-t border-[#c9a84c]/20 bg-[#111111] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-between items-center">
          <div>
            <h3 className="font-display text-2xl mb-4">All services include</h3>
            <div className="flex flex-wrap gap-6">
              {[
                "Hot Towel Finish",
                "Complimentary Drink",
                "Style Consultation",
                "Premium Products",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="gold text-xs">✦</span>
                  <span className="font-body text-[#f5f0e8]/60 tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <Link
            to="/booking"
            className="shrink-0 bg-[#c9a84c] text-[#0d0d0d] font-headline tracking-widest px-10 py-4 text-lg hover:bg-[#f5f0e8] transition-all duration-300"
          >
            BOOK YOUR VISIT
          </Link>
        </div>
      </section>
    </div>
  );
}
