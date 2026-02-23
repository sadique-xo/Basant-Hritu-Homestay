"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  { src: "/images/mountain2.webp", alt: "Kanchenjunga view from terrace", category: "views", span: "col-span-2 row-span-2" },
  { src: "/images/Bonfire-image-terrace.webp", alt: "Terrace bonfire at night", category: "terrace", span: "" },
  { src: "/images/room-image.webp", alt: "Cozy bedroom interior", category: "rooms", span: "" },
  { src: "/images/home-meal.webp", alt: "Home-cooked breakfast spread", category: "food", span: "" },
  { src: "/images/room-image4.webp", alt: "Room with mountain view window", category: "rooms", span: "" },
  { src: "/images/mountain.webp", alt: "Kalimpong town view", category: "views", span: "" },
  { src: "/images/bonfire.webp", alt: "BBQ on terrace", category: "terrace", span: "" },
  { src: "/images/Kitchen-Image.webp", alt: "Kitchen and dining area", category: "food", span: "" },
  { src: "/images/bhh-image.webp", alt: "Garden and property exterior", category: "views", span: "" },
  { src: "/images/Room-workspace.jpg", alt: "Workstation with a view", category: "rooms", span: "" },
  { src: "/images/rainy-view.jpg", alt: "Rainy mountain view", category: "views", span: "" },
  { src: "/images/room-work-view.jpg", alt: "Mountain view from workspace", category: "rooms", span: "" },
  { src: "/images/view-from-room.jpg", alt: "View from the bedroom window", category: "views", span: "" },
  { src: "/images/wind0w-view.jpg", alt: "Window overlooking the valley", category: "views", span: "" },
];

const categories = ["all", "views", "rooms", "terrace", "food"];

const placeholderColors: Record<number, string> = {
  0: "from-slate-400 to-blue-600",
  1: "from-orange-600 to-red-800",
  2: "from-amber-200 to-orange-300",
  3: "from-yellow-300 to-orange-200",
  4: "from-teal-300 to-green-400",
  5: "from-green-600 to-teal-700",
  6: "from-red-700 to-orange-700",
  7: "from-lime-400 to-green-500",
  8: "from-emerald-200 to-teal-300",
};

export default function GallerySection() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "all"
      ? galleryItems
      : galleryItems.filter((g) => g.category === active);

  return (
    <section id="gallery" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Visual Story
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Gallery
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            A glimpse into life at Basant Hritu — the views, the warmth, the meals, and the moments.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200 ${active === cat
                ? "bg-green-700 text-white shadow"
                : "bg-white text-gray-600 hover:bg-green-50 border border-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${i === 0 && active === "all" ? "col-span-2 row-span-2" : "aspect-square"
                } ${i === 0 && active === "all" ? "aspect-auto min-h-[300px]" : ""}`}
              onClick={() => setLightbox(galleryItems.indexOf(item))}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${placeholderColors[i % 9]}`}
              />
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </div>

          ))}
        </div>

        {/* Add photos note */}
        <p className="text-center text-sm text-gray-400 mt-6 italic">
          More photos coming soon — follow us on Instagram for the latest updates.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`w-full h-[70vh] bg-gradient-to-br ${placeholderColors[lightbox % 9]} rounded-xl flex items-end`}
            >
              <img
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].alt}
                className="w-full h-full object-contain rounded-xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>

        </div>
      )}
    </section>
  );
}
