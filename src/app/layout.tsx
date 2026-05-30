import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Impossible Goals Club · Upgrading the human operating system",
  description:
    "A coach for the goal that feels impossible. Step outside the system, make the bold, bounded move, at the pace your readiness allows.",
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
