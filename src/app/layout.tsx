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
    <html lang="en" className={satoshi.variable}>
      <body className="font-sans bg-white text-custom_neutral-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
