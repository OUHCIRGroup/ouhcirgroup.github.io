import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Banner from "@/components/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HCIR Lab at UWM",
  description:
    "The Human-Computer Interaction and Recommendation (HCIR) Lab at the University of Wisconsin–Milwaukee's School of Information Studies investigates how people interact with information, search and recommendation systems, and artificial intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col bg-white`}
      >
        <Header />
        <Banner title="Human-Computer Interaction & Recommendation Lab" />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
