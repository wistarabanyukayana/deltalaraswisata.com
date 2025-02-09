import React from "react";

import type { Metadata } from "next";
import { Lato, Merriweather } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const latoSans = Lato({
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato-sans",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const merriweatherSans = Merriweather({
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather-sans",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
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
        className={`${latoSans.variable} ${merriweatherSans.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
