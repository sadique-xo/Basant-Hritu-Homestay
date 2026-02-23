"use client";

import { Flame, UtensilsCrossed, Laptop, Compass } from "lucide-react";

const experiences = [
  {
    icon: <Flame size={28} className="text-orange-500" />,
    title: "Bonfire & BBQ Nights",
    subtitle: "Under the Himalayan Stars",
    description:
      "As dusk falls over Kanchenjunga, gather around our terrace bonfire. Roast marshmallows, grill over the BBQ, stargaze, and share stories with fellow travellers in the crisp mountain air.",
    image: "/images/bonfire.webp",
    color: "from-orange-900/80 to-amber-900/60",
    fallbackColor: "from-orange-700 to-amber-800",
    tags: ["Outdoor Bonfire", "BBQ / Grill", "Stargazing", "Terrace"],
  },
  {
    icon: <UtensilsCrossed size={28} className="text-green-500" />,
    title: "Home-Cooked Meals",
    subtitle: "Prepared with Love",
    description:
      "Experience authentic Nepali and Gorkha cuisine — delicious dal bhat, momos, thukpa, and seasonal vegetables, all prepared by Menuka Di and the team. Or use the fully equipped kitchen for your own culinary adventures.",
    image: "/images/home-meal.webp",
    color: "from-green-900/80 to-teal-900/60",
    fallbackColor: "from-green-700 to-teal-800",
    tags: ["Breakfast Included", "Local Cuisine", "Shared Kitchen", "Veg Options"],
  },
  {
    icon: <Laptop size={28} className="text-blue-500" />,
    title: "Work From Mountains",
    subtitle: "Productivity with a View",
    description:
      "Uninterrupted power supply, high-speed Wi-Fi throughout, and a dedicated working desk in every room. Attend your meetings with Mt. Kanchenjunga in the background — the world's most beautiful office.",
    image: "/images/room1001-large.webp",
    color: "from-blue-900/80 to-indigo-900/60",
    fallbackColor: "from-blue-800 to-indigo-900",
    tags: ["High-Speed Wi-Fi", "Working Desk", "UPS Power", "Quiet Zone"],
  },
  {
    icon: <Compass size={28} className="text-purple-500" />,
    title: "Explore Kalimpong",
    subtitle: "Gateway to the Himalayas",
    description:
      "Step out from your doorstep into one of the most scenic hill towns in India. The owner arranges car rentals at fair rates — no seasonal hikes — so you can explore Durpin Monastery, Deolo Hill, Lava, Rishop, Darjeeling, and Sikkim at your own pace.",
    image: "/images/mountain.webp",
    color: "from-purple-900/80 to-pink-900/60",
    fallbackColor: "from-purple-800 to-pink-900",
    tags: ["Car Rental (no hikes)", "Darjeeling Day Trip", "Sikkim", "Local Trails"],
  },
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-2">
            What Awaits You
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Experiences
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            More than a stay — a collection of moments that linger long after you leave.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.title}
              className={`relative rounded-2xl overflow-hidden min-h-[360px] flex flex-col justify-end group ${idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
            >
              {/* Background image */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${exp.fallbackColor}`}
              />
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${exp.color} via-black/30`}
              />

              {/* Content */}
              <div className="relative z-10 p-7">
                <div className="mb-3">{exp.icon}</div>
                <span className="text-xs text-white/60 uppercase tracking-widest font-medium">
                  {exp.subtitle}
                </span>
                <h3
                  className="text-2xl font-bold text-white mt-1 mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {exp.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed mb-4 max-w-md">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
