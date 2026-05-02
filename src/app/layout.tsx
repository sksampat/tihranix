import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tihranix.ai — Optimize Operations. Unlock Capital.",
  description:
    "Tihranix helps enterprises identify inefficiencies, improve decisions, and coordinate execution across fragmented systems—driving measurable operational and financial impact.",
  metadataBase: new URL("https://tihranix.ai"),
  openGraph: {
    title: "Tihranix.ai — Optimize Operations. Unlock Capital.",
    description:
      "Enterprise agentic AI for coordinated execution, operational optimization, and capital performance.",
    siteName: "Tihranix",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full scroll-smooth`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
