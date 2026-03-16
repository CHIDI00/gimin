"use client";

import { Inter } from "next/font/google";
import HeroCanvas from "./HeroCanvas";
import HeroTextOverlays from "./HeroTextOverlays";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function Hero() {
  return (
    <section
      id="hero-scroll-container"
      className={`relative  w-full bg-[#03060d] text-white ${inter.className}`}
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <HeroCanvas />

        <HeroTextOverlays />

        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#03060d]/55 via-transparent to-transparent pointer-events-none z-[5]" /> */}
        <div className="absolute inset-0 bg-[#03060d]/20 pointer-events-none z-[5]" />
      </div>
    </section>
  );
}
