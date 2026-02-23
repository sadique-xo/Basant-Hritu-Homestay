"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is the homestay suitable for solo women travellers?",
    a: "Absolutely. Basant Hritu Homestay is run by women and especially welcomes solo and group women travellers. The property is in a safe, quiet residential area with 24/7 support from the in-house team.",
  },
  {
    q: "Is the homestay pet-friendly?",
    a: "Yes, pets are welcome with advance notice. Please inform us at the time of booking so we can make the necessary arrangements.",
  },
  {
    q: "Is it suitable for remote work / digital nomads?",
    a: "Yes! Every room has a working desk, uninterrupted power supply, and high-speed Wi-Fi throughout the property. Multiple guests have rated it perfect for remote work.",
  },
  {
    q: "Do you serve food? Can we cook ourselves?",
    a: "The host team prepares delicious local Nepali and Gorkha cuisine, including breakfast. You can also use the fully equipped shared kitchen to prepare your own meals.",
  },
  {
    q: "Can unmarried couples stay?",
    a: "Yes, the homestay is couple-friendly and welcoming to all. There is no restriction on unmarried couples.",
  },
  {
    q: "Is car rental available from the property?",
    a: "Yes, the owner arranges car rentals at standard rates — no seasonal price hikes. Ask at the time of booking or when you arrive.",
  },
  {
    q: "What ID proofs are accepted at check-in?",
    a: "Passport, Aadhaar Card, Driving License, and any other Government-issued photo ID are accepted.",
  },
  {
    q: "Is the payment cashless or cash only?",
    a: "As per current property policy, payments are accepted in cash at the property. Please carry sufficient cash. Confirm with the property directly for any updates.",
  },
  {
    q: "How far is the homestay from Kalimpong town?",
    a: "The property is approximately 2 km from Kalimpong town centre — about a 20-minute walk or a very short drive. Shared cabs stop just 5 minutes away on foot.",
  },
  {
    q: "Can I see Mt. Kanchenjunga from the property?",
    a: "Yes! On clear days (typically early mornings), you can see panoramic views of the Sikkim mountains including Mt. Kanchenjunga right from the terrace. This is one of the most-praised features by our guests.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Have Questions?
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            FAQ
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-stone-100 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-stone-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-green-600 shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
