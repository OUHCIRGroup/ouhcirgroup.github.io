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
  title: "HCIR Lab",
  description:
    "At the OU Human-Computer Interaction and Recommendation (HCIR) Lab, we are working toward modeling and supporting people’s problem-solving and decision-making activities with intelligent information search and recommender systems, and understanding the economic, societal, and ethical impacts of advanced search and recommendation algorithms.",
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
