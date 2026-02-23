"use client";

import { Heart, Camera, Users, Leaf } from "lucide-react";

const pillars = [
  {
    icon: <Users size={22} className="text-green-600" />,
    title: "Women-Led",
    desc: "Managed by Sharda Bhandari (owner's mother) and local housewives, providing financial independence and entrepreneurial experience to women of the community.",
  },
  {
    icon: <Camera size={22} className="text-green-600" />,
    title: "Artist-Friendly",
    desc: "Founded by a freelance cinematographer and filmmaker who loves meeting artists of all backgrounds — expect long fireside conversations and creative inspiration.",
  },
  {
    icon: <Heart size={22} className="text-green-600" />,
    title: "Cooked with Love",
    desc: "Menuka Di and the team prepare authentic local cuisine from scratch. Guests also have access to a fully equipped kitchen for self-cooking.",
  },
  {
    icon: <Leaf size={22} className="text-green-600" />,
    title: "Nature-Rooted",
    desc: "Nestled atop a serene hill, surrounded by trees, with unobstructed Himalayan air and breathtaking Kanchenjunga views right from the terrace.",
  },
];

const collagePlaceholders = [
  "bg-gradient-to-br from-green-200 to-teal-300",
  "bg-gradient-to-br from-amber-100 to-orange-200",
  "bg-gradient-to-br from-yellow-200 to-amber-300",
  "bg-gradient-to-br from-slate-300 to-blue-400",
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className={`rounded-2xl overflow-hidden aspect-[3/4] shadow-md ${collagePlaceholders[0]}`}>
                  <img
                    src="/images/about-1.jpg"
                    alt="Homestay terrace with mountain view"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`rounded-2xl overflow-hidden aspect-square shadow-md ${collagePlaceholders[1]}`}>
                  <img
                    src="/images/about-2.jpg"
                    alt="Cozy room interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className={`rounded-2xl overflow-hidden aspect-square shadow-md ${collagePlaceholders[2]}`}>
                  <img
                    src="/images/about-3.jpg"
                    alt="Home-cooked meal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`rounded-2xl overflow-hidden aspect-[3/4] shadow-md ${collagePlaceholders[3]}`}>
                  <img
                    src="/images/about-4.jpg"
                    alt="Bonfire on terrace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-green-700 text-white rounded-2xl px-5 py-4 shadow-xl">
              <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                9.2
                <span className="text-sm font-normal">/10</span>
              </div>
              <div className="text-xs text-green-200 mt-0.5">Booking.com Rating</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Himalayan Home,{" "}
              <span className="text-gradient">Managed by Heart</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <em>&ldquo;Hi there, firstly I would like to warmly welcome you to my humble home.&rdquo;</em>
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Basant Hritu Homestay was born from a simple yet powerful idea — a freelance
              cinematographer and filmmaker returning to his roots in Kalimpong, opening his family
              home to travellers, and building something meaningful in the process.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The homestay is run day-to-day by <strong>Sharda Bhandari</strong> (the owner&apos;s mother)
              and local women of the neighbourhood, with the warm and beloved <strong>Menuka Di</strong>
              at the heart of hospitality. The vision? To give local women financial independence,
              entrepreneurial confidence, and — through welcoming guests — a window to the wider world.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Solo travellers, couples, remote workers, and artists all find a quiet corner here.
              Especially welcome are solo and group women travellers — safe, friendly, and celebrated.
            </p>

            {/* Pillars grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="flex gap-3 p-4 rounded-xl bg-green-50 border border-green-100"
                >
                  <div className="mt-0.5 shrink-0">{p.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{p.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
