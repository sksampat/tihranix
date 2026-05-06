import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Tihranix — Governed inventory capital decisions from dead and slow-moving stock",
  description:
    "Tihranix continuously detects trapped inventory, simulates recovery paths, and recommends actions that unlock working capital without breaking service, margin, or policy constraints—then expands upstream into inventory capital optimization.",
  metadataBase: new URL("https://tihranix.ai"),
  openGraph: {
    title: "Tihranix — Inventory capital decision engine",
    description:
      "Governed inventory-capital decisions under constraint. Starts with dead and slow-moving inventory; extends into continuous optimization and constrained allocation across supply chain and finance.",
    siteName: "Tihranix",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full scroll-smooth`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
