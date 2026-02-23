"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="#home" className="flex flex-col leading-tight">
          <span
            className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
              scrolled ? "text-green-800" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Basant Hritu
          </span>
          <span
            className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
              scrolled ? "text-green-600" : "text-green-200"
            }`}
          >
            Homestay · Kalimpong
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-green-500 ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="ml-2 px-5 py-2 bg-green-700 hover:bg-green-600 text-white text-sm font-semibold rounded-full transition-colors duration-200 shadow"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile: phone + menu */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+918420066596"
            className={`p-2 rounded-full transition-colors ${
              scrolled ? "text-green-700" : "text-white"
            }`}
          >
            <Phone size={18} />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 rounded-full transition-colors ${
              scrolled ? "text-green-800" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-green-100 shadow-xl">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium text-sm hover:text-green-700 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-5 py-2.5 bg-green-700 hover:bg-green-600 text-white text-sm font-semibold rounded-full text-center transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
