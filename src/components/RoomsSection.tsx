"use client";

import {
  Wifi,
  Tv,
  Wind,
  Coffee,
  Bath,
  Monitor,
  Mountain,
  Zap,
} from "lucide-react";

const amenities = [
  { icon: <Wifi size={16} />, label: "Free High-Speed Wi-Fi" },
  { icon: <Tv size={16} />, label: "Flat-Screen TV" },
  { icon: <Coffee size={16} />, label: "Electric Kettle" },
  { icon: <Monitor size={16} />, label: "Working Desk" },
  { icon: <Zap size={16} />, label: "Uninterrupted Power Supply" },
  { icon: <Bath size={16} />, label: "Private Bathroom" },
  { icon: <Wind size={16} />, label: "Free Toiletries" },
  { icon: <Mountain size={16} />, label: "Mountain / Terrace Access" },
];

const rooms = [
  {
    name: "Jaba Kusum",
    subtitle: "Double Room",
    description:
      "Named after the vibrant Hibiscus flower, Jaba Kusum is a warm, sunlit room with a cozy double bed, working desk, and access to the terrace with sweeping mountain views. Rated 4.81★ on Airbnb.",
    rating: "4.81★ on Airbnb",
    airbnbUrl: "https://www.airbnb.com/rooms/933701914243394168",
    image: "/images/room-image.webp",
    color: "from-rose-100 to-amber-50",
    badge: "Most Reviewed",
  },
  {
    name: "Makhamali",
    subtitle: "Double Room",
    description:
      "Named after the soft Velvet flower, Makhamali is a serene retreat with plush bedding, a private bathroom with bath/shower, and a working desk — perfect for remote workers seeking mountain solitude.",
    rating: "Top Rated on Airbnb",
    airbnbUrl: "https://www.airbnb.com/rooms/933756316620206054",
    image: "/images/room-image2.webp",
    color: "from-violet-100 to-purple-50",
    badge: "Work-Friendly",
  },
  {
    name: "Pahad Ko Kotha",
    subtitle: "Double Room",
    description:
      "Our third mountain room — quiet, private, and thoughtfully furnished. Enjoy direct terrace access, fresh mountain air, and the gentle sounds of nature waking you each morning.",
    rating: "",
    airbnbUrl: "https://www.booking.com/hotel/in/basant-hritu-homestay.html",
    image: "/images/room-image3.webp",
    color: "from-green-100 to-teal-50",
    badge: "Terrace Access",
  },
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Accommodation
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Rooms
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Three beautifully named private rooms — each designed for comfort,
            privacy, and a deep connection with the Himalayas.
          </p>
        </div>

        {/* Rooms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className={`relative h-56 bg-gradient-to-br ${room.color}`}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="absolute top-3 left-3 bg-white/90 text-green-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {room.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <span className="text-xs text-green-600 uppercase tracking-wider font-medium">
                    {room.subtitle}
                  </span>
                  <h3
                    className="text-2xl font-bold text-gray-900 mt-0.5"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {room.name}
                  </h3>
                  {room.rating && (
                    <span className="text-xs text-amber-600 font-medium">{room.rating}</span>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                  {room.description}
                </p>
                <a
                  href={room.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 px-5 rounded-full border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold text-sm transition-all duration-200"
                >
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-green-50">
          <h3
            className="text-2xl font-bold text-gray-900 mb-6 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            All Rooms Include
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {amenities.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-3 p-3 rounded-xl bg-green-50 text-sm text-gray-700"
              >
                <span className="text-green-600 shrink-0">{a.icon}</span>
                {a.label}
              </div>
            ))}
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            Also: bed linen & towels · private entrance · terrace access · free parking · laundry service · room service
          </div>
        </div>
      </div>
    </section>
  );
}
