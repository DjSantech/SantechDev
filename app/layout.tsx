import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), {
  ssr: false,
});

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TarreDev Landing Page",
  description: "Landing page made by TarreDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}