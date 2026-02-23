import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://basant-hritu-homestay.sadique.co"),
  title: "Basant Hritu Homestay | Kalimpong, West Bengal",
  description:
    "A cozy Himalayan homestay in Kalimpong with panoramic Kanchenjunga views, home-cooked meals, bonfire nights, and high-speed Wi-Fi. Women-led, artist-friendly, and pet-friendly.",
  keywords:
    "homestay in Kalimpong, Kalimpong homestay Kanchenjunga view, budget homestay Kalimpong, work from mountains, pet friendly homestay, Basant Hritu Homestay",
  icons: {
    icon: "/images/bhh.png",
    apple: "/images/bhh.png",
  },
  openGraph: {
    title: "Basant Hritu Homestay | Kalimpong, West Bengal",
    description:
      "A cozy Himalayan homestay in Kalimpong with panoramic Kanchenjunga views, home-cooked meals, bonfire nights, and high-speed Wi-Fi.",
    url: "https://basant-hritu-homestay.sadique.co/",
    siteName: "Basant Hritu Homestay",
    images: [
      {
        url: "/images/social-image.jpg",
        width: 1200,
        height: 630,
        alt: "Basant Hritu Homestay - A cozy Himalayan getaway",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basant Hritu Homestay | Kalimpong, West Bengal",
    description:
      "A cozy Himalayan homestay in Kalimpong with panoramic Kanchenjunga views.",
    images: ["/images/social-image.jpg"],
  },
  alternates: {
    canonical: "https://basant-hritu-homestay.sadique.co/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased`}
        style={{ fontFamily: "var(--font-lato), sans-serif" }}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
