import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { inter } from "./fonts";
import "./globals.css";
import Loader from "@/components/Loader";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";
import ThemeScript from "@/components/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anurag - Mobile App Developer",
  description:
    "Personal portfolio showcasing mobile app development and UI/UX design work",
  keywords:
    "mobile app developer, UI/UX design, portfolio, React, Flutter, Kotlin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Loader />
        <KonamiEasterEgg />
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
