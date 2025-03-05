import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delta Laras Wisata",
  description: "Travel Handal dan Terpecaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
