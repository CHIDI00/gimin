"use client";

import { useRef, useState } from "react"; // Added useState
import { Inter } from "next/font/google";
import HeroCanvas from "./HeroCanvas";
import HeroTextOverlays from "./HeroTextOverlays";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HoverText from "@/components/ui/HoverText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Add a state switch to track if the canvas has loaded the first image
  const [isCanvasReady, setIsCanvasReady] = useState(false);

  useGSAP(
    () => {
      gsap.set(".cta-anim", { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: "#hero-scroll-container",
        start: "bottom 60",
        end: "bottom bottom",
        onEnter: () => {
          gsap.to(".cta-anim", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(".cta-anim", {
            opacity: 0,
            y: 32,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.inOut",
          });
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="hero-scroll-container"
      className={`relative w-full bg-[#03060d] text-white ${inter.className}`}
      style={{ height: "500vh" }}
    >
      <div
        ref={containerRef}
        className="sticky top-0 left-0 h-screen w-full overflow-hidden flex items-center justify-center"
      >
        {/* Pass the state setter to the Canvas */}
        <HeroCanvas onReady={() => setIsCanvasReady(true)} />

        {/* Pass the ready state to the Overlays */}
        <HeroTextOverlays isReady={isCanvasReady} />

        <div className="absolute inset-0 bg-[#03060d]/20 pointer-events-none z-[5]" />

        <div className="absolute bottom-5 md:left-10 left-6 md:w-auto w-[8rem] pointer-events-none z-10 text-white/40 text-left md:text-md text-sm tracking-[0.1em] uppercase">
          <p>Scroll to explore</p>
        </div>
      </div>

      <div className="absolute bottom-5 right-10 flex w-[53%] justify-between items-end p-0 pointer-events-auto z-10">
        <button className="cta-anim hidden md:flex px-10 py-4 bg-white text-xs tracking-[0.25em] uppercase font-bold hover:bg-white/90 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] relative overflow-hidden rounded-full">
          <span className="relative z-10 transition-all duration-300 ease-out text-black">
            <HoverText>Join GIMiN</HoverText>
          </span>
        </button>

        <p className="cta-anim text-white text-right md:text-md text-xs md:tracking-[0.2em] tracking-[0.2em] uppercase font-bold mb-1 drop-shadow-lg">
          The result you get <br /> is a balanced physique
        </p>
      </div>
    </section>
  );
}
