"use client";

import { MapPin, Clock, Car, Plane, Train, Navigation } from "lucide-react";

const distances = [
  { from: "Bagdogra Airport (IXB)", dist: "77 km", time: "~2 hrs", icon: <Plane size={18} /> },
  { from: "NJP Railway Station", dist: "71 km", time: "~2 hrs", icon: <Train size={18} /> },
  { from: "Pakyong Airport (Sikkim)", dist: "~20 km", time: "~45 min", icon: <Plane size={18} /> },
  { from: "Darjeeling", dist: "~50 km", time: "~2.5 hrs", icon: <Car size={18} /> },
  { from: "Siliguri", dist: "~75 km", time: "~2 hrs", icon: <Car size={18} /> },
  { from: "Kalimpong Town Centre", dist: "~2 km", time: "~20 min walk", icon: <Navigation size={18} /> },
];

const nearby = [
  { place: "Durpin Monastery", dist: "~8 km" },
  { place: "Deolo Hill", dist: "~10 km" },
  { place: "Pine View Nursery", dist: "~500 m" },
  { place: "Samco Ropeway", dist: "Nearby" },
  { place: "Art Cafe", dist: "12 min" },
  { place: "Karma's Kitchen", dist: "9 min" },
  { place: "Gompu's Restaurant", dist: "9 min" },
  { place: "Munsong", dist: "~15 km" },
];

const howToReach = [
  {
    mode: "By Air",
    icon: <Plane size={20} className="text-blue-600" />,
    desc: "Fly into Bagdogra Airport (IXB) or Pakyong Airport. From there, hire a private cab or shared jeep to Kalimpong. Shared cabs are available 5 minutes walk from the homestay.",
  },
  {
    mode: "By Train",
    icon: <Train size={20} className="text-green-600" />,
    desc: "Take a train to New Jalpaiguri (NJP) Junction — the nearest major railhead. From NJP, hire a shared jeep or private cab to Kalimpong (~2 hrs). 3 routes available via Teesta and Tista road.",
  },
  {
    mode: "By Road",
    icon: <Car size={20} className="text-orange-600" />,
    desc: "Kalimpong is well-connected by road from Siliguri, Darjeeling, and Gangtok. Drive via NH-10 / Teesta River route. The property is on Hill Top Road, ~2 km from the town centre, in a quiet residential zone.",
  },
];

export default function LocationSection() {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Find Us
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Location & How to Reach
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Perched on a quiet hilltop above Kalimpong town, just far enough from the bustle
            and close enough to everything.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map placeholder + address */}
          <div>
            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-md mb-6 h-72 bg-green-50 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.1628107977363!2d88.45797161170925!3d27.056608376463917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e423c2ac360631%3A0xc98033181a3243f!2sBasant%20Hritu%20Homestay!5e0!3m2!1sen!2sin!4v1771880808384!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Basant Hritu Homestay Location"
                className="w-full h-full"
              />
              {/* Fallback for when map doesn't load */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-50 pointer-events-none opacity-0">
                <MapPin size={40} className="text-green-500 mb-2" />
                <span className="text-gray-500 text-sm">Map of Kalimpong</span>
              </div>
            </div>

            {/* Address card */}
            <div className="bg-green-700 rounded-2xl p-6 text-white">
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={20} className="text-green-300 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                    Basant Hritu Homestay
                  </h4>
                  <p className="text-green-200 text-sm mt-1 leading-relaxed">
                    Fairview Cottage, Hill Top Road,<br />
                    Near Tribal Boys Hostel,<br />
                    Kalimpong 734301, West Bengal, India
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-green-200">
                <Clock size={16} className="text-green-300" />
                <span>Check-in: 2:00 PM &nbsp;|&nbsp; Check-out: 11:00 AM</span>
              </div>
              <a
                href="https://www.google.com/maps/search/Basant+Hritu+Homestay+Kalimpong"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm bg-white/15 hover:bg-white/25 px-4 py-2 rounded-full transition-colors"
              >
                <Navigation size={14} />
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right column */}
          <div>
            {/* Distance table */}
            <h3
              className="text-xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Getting Here
            </h3>
            <div className="space-y-3 mb-8">
              {distances.map((d) => (
                <div
                  key={d.from}
                  className="flex items-center gap-4 p-3 rounded-xl bg-stone-50 border border-stone-100"
                >
                  <span className="text-green-600 shrink-0">{d.icon}</span>
                  <span className="flex-1 text-sm text-gray-700">{d.from}</span>
                  <span className="text-sm font-semibold text-gray-900">{d.dist}</span>
                  <span className="text-xs text-gray-400">{d.time}</span>
                </div>
              ))}
            </div>

            {/* How to reach cards */}
            <h3
              className="text-xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Travel Tips
            </h3>
            <div className="space-y-3 mb-8">
              {howToReach.map((h) => (
                <div key={h.mode} className="flex gap-3 p-4 rounded-xl bg-stone-50 border border-stone-100">
                  <div className="shrink-0 mt-0.5">{h.icon}</div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">{h.mode}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Nearby places */}
            <h3
              className="text-xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nearby Attractions
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {nearby.map((n) => (
                <div
                  key={n.place}
                  className="flex justify-between items-center p-2.5 rounded-lg bg-green-50 text-xs"
                >
                  <span className="text-gray-700 font-medium">{n.place}</span>
                  <span className="text-green-600 font-semibold">{n.dist}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
