"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "The setup is very comfortable and clean, the staff is extremely competent and loving. The meals are cooked with so much love that you pause to feel the taste of each dish.",
    author: "Priya S.",
    platform: "Booking.com",
    rating: 5,
    location: "Mumbai",
  },
  {
    text: "It was like home away from home. The terrace being the charm of the place. There's a small bonfire to keep you warm while you stargaze at night.",
    author: "Arjun M.",
    platform: "Airbnb",
    rating: 5,
    location: "Bengaluru",
  },
  {
    text: "Very friendly hosts, good quality meals, amazing views from the terrace, quiet location at the top of the town, lovely room.",
    author: "Rahul & Sunita",
    platform: "Booking.com",
    rating: 5,
    location: "Delhi",
  },
  {
    text: "A memorable experience from all aspects. Nice clean cosy rooms with all facilities. Food was exceptionally good. Kanchenjunga view from terrace with a warm cup of tea was cherry on the cake.",
    author: "Ananya T.",
    platform: "MakeMyTrip",
    rating: 5,
    location: "Kolkata",
  },
  {
    text: "Nestled atop a serene hill and surrounded by nature, it offers a tranquil retreat. The owner went above and beyond to ensure all our needs were met.",
    author: "Karan D.",
    platform: "Booking.com",
    rating: 5,
    location: "Hyderabad",
  },
  {
    text: "Perfect for a working person... good WiFi range overall. There is one lady named Menuka Di, she's lovely when it comes to taking care of the guest.",
    author: "Vikram P.",
    platform: "Airbnb",
    rating: 5,
    location: "Pune",
  },
];

const platforms = [
  { name: "Booking.com", rating: "9.2/10", color: "bg-blue-600" },
  { name: "MakeMyTrip", rating: "5.0/5", color: "bg-red-600" },
  { name: "Airbnb", rating: "4.81★", color: "bg-rose-600" },
  { name: "TripAdvisor", rating: "Top 10%", color: "bg-green-600" },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-green-950 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Guest Voices
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Guests Say
          </h2>

          {/* Platform ratings */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15"
              >
                <span className={`w-2 h-2 rounded-full ${p.color}`} />
                <span className="text-sm text-white/80">{p.name}</span>
                <span className="text-sm font-bold text-white">{p.rating}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured testimonial slider */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <Quote size={48} className="text-green-700 mb-6" />
            <p
              className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              &ldquo;{testimonials[current].text}&rdquo;
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <StarRow count={testimonials[current].rating} />
                <p className="text-white font-semibold mt-2">
                  {testimonials[current].author}
                </p>
                <p className="text-white/50 text-sm">
                  {testimonials[current].location} · {testimonials[current].platform}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-green-400" : "bg-white/20"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid of mini cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                i === current
                  ? "bg-green-700/30 border-green-500/40"
                  : "bg-white/5 border-white/10 hover:bg-white/8"
              }`}
              onClick={() => setCurrent(i)}
            >
              <StarRow count={t.rating} />
              <p className="text-white/70 text-sm mt-3 leading-relaxed line-clamp-3">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-white/50 text-xs mt-3">
                — {t.author}, {t.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
