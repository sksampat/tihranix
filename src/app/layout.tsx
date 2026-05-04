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
  title: "Tihranix — Free cash trapped in dead inventory",
  description:
    "Tihranix autonomously identifies slow-moving and non-moving inventory, simulates liquidation strategies, and recommends actions that unlock working capital without damaging margins or service levels.",
  metadataBase: new URL("https://tihranix.ai"),
  openGraph: {
    title: "Tihranix — Dead Inventory Liquidation Engine",
    description:
      "Enterprise AI for autonomous capital and operational optimization. Unlock working capital from dead and slow-moving inventory.",
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
