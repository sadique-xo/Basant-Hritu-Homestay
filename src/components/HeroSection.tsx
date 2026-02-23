"use client";

import { ChevronDown, Star, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Kanchenjunga view from terrace"
          className="w-full h-full object-cover"
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = "none";
          }}
        />
        {/* Fallback gradient when image missing */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.25 0.08 200) 0%, oklch(0.18 0.06 160) 40%, oklch(0.12 0.04 140) 100%)",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Mountain silhouette decoration */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200 L0 140 L120 90 L240 120 L360 60 L480 100 L600 40 L720 80 L840 30 L960 70 L1080 20 L1200 60 L1320 100 L1440 80 L1440 200 Z"
            fill="oklch(0.98 0.005 80)"
            fillOpacity="0.12"
          />
          <path
            d="M0 200 L0 160 L180 110 L360 140 L540 90 L720 120 L900 70 L1080 100 L1260 130 L1440 90 L1440 200 Z"
            fill="oklch(0.98 0.005 80)"
            fillOpacity="0.08"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs tracking-widest uppercase mb-6">
            <MapPin size={12} className="text-green-300" />
            Kalimpong, West Bengal · India
          </div>

          {/* Main headline */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Where the{" "}
            <span className="text-green-300">Mountains</span>
            <br />
            Meet Home
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
            Wake up to panoramic Kanchenjunga views, savour home-cooked meals,
            and unwind by a terrace bonfire under Himalayan stars — at Basant Hritu Homestay, Kalimpong.
          </p>

          {/* Rating pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { label: "9.2/10 on Booking.com", color: "bg-blue-500/20 border-blue-300/30 text-blue-100" },
              { label: "5.0/5 on MakeMyTrip", color: "bg-orange-500/20 border-orange-300/30 text-orange-100" },
              { label: "Travellers' Choice — TripAdvisor", color: "bg-green-500/20 border-green-300/30 text-green-100" },
            ].map((r) => (
              <span
                key={r.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium backdrop-blur-sm ${r.color}`}
              >
                <Star size={11} fill="currentColor" />
                {r.label}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#book"
              className="px-8 py-3.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full shadow-lg shadow-green-900/40 transition-all duration-200 hover:scale-105 text-sm"
            >
              Book Your Stay
            </a>
            <a
              href="#rooms"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-all duration-200 text-sm"
            >
              Explore Rooms
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-white/20">
          {[
            { value: "3", label: "Private Rooms" },
            { value: "~2 km", label: "From Town Centre" },
            { value: "Mt. K3", label: "Kanchenjunga Views" },
            { value: "₹1,350+", label: "Per Night (approx.)" },
          ].map((s) => (
            <div key={s.label} className="text-center px-4">
              <div
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {s.value}
              </div>
              <div className="text-xs text-white/60 mt-0.5 uppercase tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
