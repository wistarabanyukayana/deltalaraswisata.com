import React from "react";

import type { Metadata } from "next";
import { Lato, Merriweather } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";

const latoSans = Lato({
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato-sans",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const merriweatherSans = Merriweather({
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather-sans",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delta Laras Wisata",
  description: "Travel Umroh Handal dan Terpecaya",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${latoSans.variable} ${merriweatherSans.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>

        {children}
      </body>
    </html>
  );
}
