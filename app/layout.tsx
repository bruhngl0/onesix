import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HUD from "./components/HUD"; // adjust path to wherever you put HUD.tsx
import CookieBanner from "./components/CookieBanner";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ONESIX8",
  description: "An independent creative company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        {/* HUD is fixed/overlay — renders above every page */}
        <HUD />
        <CookieBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
