import type { Metadata } from "next";
import type { ReactNode } from "react";
import { satoshi } from "./fonts";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aira Euro Automation - Leading Valve Manufacturer & Exporter in India",
  description: "Aira Euro Automation is a leading valve manufacturer and exporter in India, specializing in automation products and comprehensive one-stop solutions for all your valve automation needs.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={satoshi.variable} style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <body className="font-sans bg-white text-custom_neutral-900 antialiased overflow-x-hidden max-w-full">
        <Header />
        <main className="overflow-x-hidden max-w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
