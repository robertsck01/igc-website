import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Impossible Goals Club — Upgrading the human operating system",
  description:
    "A structured methodology for second-order change, using the pursuit of impossible goals as the mechanism for growth that transforms both what you achieve and who you become.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
