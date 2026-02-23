"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name} — Basant Hritu Homestay`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:basanthritukalimpong@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Get in Touch
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contact Us
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Have a question? Want to make a custom booking? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div>
            <div className="bg-green-700 rounded-2xl p-8 text-white mb-6">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Basant Hritu Homestay
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <MapPin size={18} className="text-green-300 shrink-0 mt-0.5" />
                  <p className="text-green-100 text-sm leading-relaxed">
                    Fairview Cottage, Hill Top Road,<br />
                    Near Tribal Boys Hostel,<br />
                    Kalimpong 734301, West Bengal, India
                  </p>
                </div>
                <a href="tel:+918420066596" className="flex gap-4 items-center hover:text-green-200 transition-colors">
                  <Phone size={18} className="text-green-300 shrink-0" />
                  <span className="text-sm">+91 84200 66596</span>
                </a>
                <a href="tel:+918617430149" className="flex gap-4 items-center hover:text-green-200 transition-colors">
                  <Phone size={18} className="text-green-300 shrink-0" />
                  <span className="text-sm">+91 86174 30149</span>
                </a>
                <a
                  href="mailto:basanthritukalimpong@gmail.com"
                  className="flex gap-4 items-center hover:text-green-200 transition-colors"
                >
                  <Mail size={18} className="text-green-300 shrink-0" />
                  <span className="text-sm">basanthritukalimpong@gmail.com</span>
                </a>
                <a
                  href="mailto:workworksnihal@gmail.com"
                  className="flex gap-4 items-center hover:text-green-200 transition-colors"
                >
                  <Mail size={18} className="text-green-300 shrink-0" />
                  <span className="text-sm">workworksnihal@gmail.com</span>
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918420066596?text=Hi!%20I%20have%20a%20query%20about%20Basant%20Hritu%20Homestay."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200 hover:bg-green-100 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white">
                <MessageCircle size={18} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Chat on WhatsApp</p>
                <p className="text-xs text-gray-500">We typically reply within a few hours</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">
                  Your email client should have opened. We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="mt-4 text-green-600 text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us your travel dates, number of guests, or any special requests..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
                <p className="text-xs text-gray-400 text-center">
                  This will open your email client with the message pre-filled.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
