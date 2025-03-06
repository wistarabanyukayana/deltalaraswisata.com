import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delta Laras Wisata",
  description: "Travel Handal dan Terpecaya",
  icons: {
    apple: [
      { url: "apple-icon.png?v=1" },
      {
        url: "apple-icon-57x57.png?v=1",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "apple-icon-60x60.png?v=1",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "apple-icon-72x72.png?v=1",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "apple-icon-76x76.png?v=1",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "apple-icon-114x114.png?v=1",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "apple-icon-120x120.png?v=1",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "apple-icon-144x144.png?v=1",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "apple-icon-152x152.png?v=1",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "apple-icon-180x180.png?v=1",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    icon: [
      {
        url: "android-icon-192x192.png?v=1",
        sizes: "192x192",
        type: "image/png",
      },
      { url: "favicon-16x16.png?v=1", sizes: "16x16", type: "image/png" },
      { url: "favicon-32x32.png?v=1", sizes: "32x32", type: "image/png" },
      { url: "favicon-96x96.png?v=1", sizes: "96x96", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-icon-precomposed",
        url: "apple-icon-precomposed.png?v=1",
      },
    ],
  },
  manifest: "manifest.json",
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
