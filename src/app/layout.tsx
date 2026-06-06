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
  title: "Tihranix — Stop Losing Millions to Dead Inventory",
  description:
    "Tell Tihranix the business outcome you want. It discovers trapped working capital, identifies root causes, and recommends the next best action using autonomous business intelligence—starting with dead inventory optimization and inventory health.",
  metadataBase: new URL("https://tihranix.ai"),
  openGraph: {
    title: "Tihranix — Outcome-driven AI for inventory intelligence",
    description:
      "Tell us the business outcome. Tihranix discovers the context, builds the intelligence stack, and deploys the right outcome agent—starting with dead inventory and inventory health.",
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
