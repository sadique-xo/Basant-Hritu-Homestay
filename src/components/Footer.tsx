import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

const bookingLinks = [
  { label: "Booking.com", href: "https://www.booking.com/hotel/in/basant-hritu-homestay.html" },
  { label: "Airbnb — Jaba Kusum", href: "https://www.airbnb.com/rooms/933701914243394168" },
  { label: "Airbnb — Makhamali", href: "https://www.airbnb.com/rooms/933756316620206054" },
  { label: "MakeMyTrip", href: "https://www.makemytrip.com/hotels/basant_hritu_homestay-details-kalimpong.html" },
  { label: "TripAdvisor", href: "https://www.tripadvisor.com/Hotel_Review-g503707-d26453990-Reviews-Basant_Hritu_Homestay-Kalimpong_Kalimpong_District_West_Bengal.html" },
];

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Rooms", href: "#rooms" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "How to Reach", href: "#location" },
  { label: "Guest Reviews", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-green-950 text-green-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Basant Hritu
            </h3>
            <p className="text-green-400 text-sm tracking-widest uppercase mb-4">
              Homestay · Kalimpong
            </p>
            <p className="text-green-300 text-sm leading-relaxed">
              A Himalayan home where mountains meet heart. Women-led, artist-loved,
              and blessed with Kanchenjunga views.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-green-800 hover:bg-green-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-green-800 hover:bg-green-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-green-300 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Book Online */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Book Online
            </h4>
            <ul className="space-y-2">
              {bookingLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-300 hover:text-white text-sm transition-colors inline-flex items-center gap-1.5"
                  >
                    {l.label}
                    <ExternalLink size={11} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-green-300">
                <MapPin size={16} className="text-green-400 shrink-0 mt-0.5" />
                <span>
                  Fairview Cottage, Hill Top Road,<br />
                  Near Tribal Boys Hostel,<br />
                  Kalimpong 734301, West Bengal
                </span>
              </li>
              <li>
                <a
                  href="tel:+918420066596"
                  className="flex gap-3 text-sm text-green-300 hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-green-400 shrink-0 mt-0.5" />
                  +91 84200 66596
                </a>
              </li>
              <li>
                <a
                  href="tel:+918617430149"
                  className="flex gap-3 text-sm text-green-300 hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-green-400 shrink-0 mt-0.5" />
                  +91 86174 30149
                </a>
              </li>
              <li>
                <a
                  href="mailto:basanthritukalimpong@gmail.com"
                  className="flex gap-3 text-sm text-green-300 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-green-400 shrink-0 mt-0.5" />
                  basanthritukalimpong@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-green-500">
          <p>© {new Date().getFullYear()} Basant Hritu Homestay. All rights reserved.</p>
          <p>Registered with Kalimpong Police / Tourism · Kalimpong, West Bengal 734301</p>
        </div>
      </div>
    </footer>
  );
}
