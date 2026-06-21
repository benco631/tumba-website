import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tumba | Social Rewards for Real-Life Groups",
  description:
    "Tumba turns friend groups and communities into active social games with Coins, XP, Levels and real partner benefits.",
  keywords: [
    "Tumba",
    "social rewards",
    "group challenges",
    "community app",
    "partner rewards",
  ],
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
      <body className="min-h-full bg-[#020617] text-slate-100">{children}</body>
    </html>
  );
}
