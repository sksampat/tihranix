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
  title: "Tihranix — Reduce dead inventory and unlock working capital",
  description:
    "Tihranix is inventory decision intelligence for supply chain and finance teams. Identify inventory at risk of becoming dead stock and act on governed recommendations—bringing distributed intelligence to ERP, WMS, spreadsheets, and operational data where it already resides.",
  metadataBase: new URL("https://tihranix.ai"),
  openGraph: {
    title: "Tihranix — Inventory decision intelligence",
    description:
      "Reduce dead inventory and unlock working capital with governed, portable enterprise intelligence. Bring intelligence to the data—no forced centralization.",
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
