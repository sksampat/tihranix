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
  title: "Tihranix — Human-governed decisions for dead inventory and working capital",
  description:
    "Tihranix is a human-governed decision layer for inventory capital: detect dead and slow-moving stock, simulate actions under policy, approve decisions, and expand the same fabric into broader constrained inventory flows across ERP, planning, and WMS.",
  metadataBase: new URL("https://tihranix.ai"),
  openGraph: {
    title: "Tihranix — Governed inventory capital decisions",
    description:
      "Start with dead inventory and trapped working capital. Expand into broader supply chain decision flows with recommend, approve, and guardrailed execute modes—policy-aware, explainable, and auditable.",
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
