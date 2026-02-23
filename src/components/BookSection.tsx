"use client";

import {
  ExternalLink,
  MessageCircle,
  Phone,
  Calendar,
  CreditCard,
  AlertCircle,
} from "lucide-react";

const bookingPlatforms = [
  {
    name: "Booking.com",
    rating: "9.2/10",
    description: "Instant confirmation, free cancellation options",
    url: "https://www.booking.com/hotel/in/basant-hritu-homestay.html",
    color: "bg-blue-600 hover:bg-blue-700",
    badge: "Most Popular",
  },
  {
    name: "Airbnb — Jaba Kusum",
    rating: "4.81★",
    description: "Book the Jaba Kusum double room",
    url: "https://www.airbnb.com/rooms/933701914243394168",
    color: "bg-rose-600 hover:bg-rose-700",
    badge: "",
  },
  {
    name: "Airbnb — Makhamali",
    rating: "Top Rated",
    description: "Book the Makhamali double room",
    url: "https://www.airbnb.com/rooms/933756316620206054",
    color: "bg-rose-600 hover:bg-rose-700",
    badge: "",
  },
  {
    name: "MakeMyTrip",
    rating: "5.0/5",
    description: "Great for Indian travellers, EMI options",
    url: "https://www.makemytrip.com/hotels/basant_hritu_homestay-details-kalimpong.html",
    color: "bg-orange-600 hover:bg-orange-700",
    badge: "",
  },
];

const policies = [
  { icon: <Calendar size={16} />, label: "Check-In", value: "2:00 PM (early check-in on request)" },
  { icon: <Calendar size={16} />, label: "Check-Out", value: "11:00 AM (late check-out on request)" },
  { icon: <CreditCard size={16} />, label: "Payment", value: "Cash only at property" },
  { icon: <AlertCircle size={16} />, label: "ID Required", value: "Passport / Aadhaar / Driving License / Govt. ID" },
  { icon: <AlertCircle size={16} />, label: "Note", value: "Bachelor/bachelorette parties not allowed" },
];

export default function BookSection() {
  return (
    <section id="book" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Reserve Your Stay
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Book Now
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Choose your preferred booking platform below, or reach out directly for
            the best rates and personalised assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Booking platforms */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5">Book Online</h3>
            <div className="space-y-3">
              {bookingPlatforms.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 rounded-xl text-white transition-all duration-200 hover:shadow-lg group ${p.color}`}
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{p.name}</span>
                        {p.badge && (
                          <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                            {p.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-white/70 mt-0.5">{p.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">{p.rating}</span>
                    <ExternalLink size={16} className="opacity-70 group-hover:opacity-100" />
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp direct */}
            <div className="mt-6 p-5 rounded-xl bg-green-50 border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <MessageCircle size={18} className="text-green-600" />
                Book Directly via WhatsApp
              </h4>
              <p className="text-sm text-gray-500 mb-4">
                For direct bookings, custom requests, or group bookings, reach out on WhatsApp for the best rates.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/918420066596?text=Hi!%20I%20would%20like%20to%20book%20a%20stay%20at%20Basant%20Hritu%20Homestay."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full transition-colors shadow"
                >
                  <MessageCircle size={16} />
                  WhatsApp: +91 84200 66596
                </a>
                <a
                  href="https://wa.me/918617430149?text=Hi!%20I%20would%20like%20to%20book%20a%20stay%20at%20Basant%20Hritu%20Homestay."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full transition-colors shadow"
                >
                  <MessageCircle size={16} />
                  WhatsApp: +91 86174 30149
                </a>
              </div>
            </div>
          </div>

          {/* Policies + Pricing */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              Policies & Pricing
            </h3>

            {/* Pricing */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-stone-100 mb-5">
              <h4 className="font-semibold text-gray-900 mb-4">Approximate Rates</h4>
              <div className="space-y-2">
                {[
                  { platform: "MakeMyTrip", price: "~₹1,359/night" },
                  { platform: "Goibibo", price: "~₹1,958 + taxes/night" },
                  { platform: "Airbnb", price: "~$18/night (~₹1,500)" },
                  { platform: "Booking.com", price: "Seasonal — check site" },
                ].map((r) => (
                  <div
                    key={r.platform}
                    className="flex justify-between items-center py-2 border-b border-stone-50 last:border-0"
                  >
                    <span className="text-sm text-gray-600">{r.platform}</span>
                    <span className="text-sm font-semibold text-green-700">{r.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                * Prices vary by season and room type. Contact us for current rates.
              </p>
            </div>

            {/* Policies */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-stone-100">
              <h4 className="font-semibold text-gray-900 mb-4">Property Policies</h4>
              <div className="space-y-3">
                {policies.map((p) => (
                  <div key={p.label} className="flex gap-3 items-start">
                    <span className="text-green-600 shrink-0 mt-0.5">{p.icon}</span>
                    <div>
                      <span className="text-xs text-gray-400 uppercase tracking-wide block">
                        {p.label}
                      </span>
                      <span className="text-sm text-gray-700">{p.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="tel:+918420066596"
                className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white text-sm font-semibold rounded-full transition-all duration-200"
              >
                <Phone size={16} />
                +91 84200 66596
              </a>
              <a
                href="tel:+918617430149"
                className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white text-sm font-semibold rounded-full transition-all duration-200"
              >
                <Phone size={16} />
                +91 86174 30149
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
