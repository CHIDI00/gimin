"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HoverText from "@/components/ui/HoverText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CallToAction() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      // The text scales down and locks into place, giving it a heavy, impactful feel
      tl.fromTo(
        ".cta-line",
        { opacity: 0, scale: 1.2, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
        },
      );

      // The button fades and slides up smoothly
      tl.fromTo(
        ".cta-button",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.6",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] py-32 md:py-48 px-6 flex flex-col items-center justify-center overflow-hidden z-20"
    >
      {/* Subtle background glow to separate it from pure black */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl">
        <h2 className="text-[10vw] md:text-[7vw] font-black uppercase leading-[0.85] tracking-tight text-white mb-12 flex flex-col">
          <span className="block cta-line origin-bottom">The Standard</span>
          <span className="block cta-line origin-bottom">Is Set.</span>
          <span className="block cta-line origin-bottom text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 mt-4">
            Step Up.
          </span>
        </h2>

        <Link
          href="/membership"
          className="cta-button group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all duration-500 hover:border-white/60 hover:scale-105"
        >
          {/* The glowing gradient hover effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <span className="relative z-10 text-white text-xs md:text-sm tracking-[0.2em] uppercase font-bold flex items-center gap-3">
            <HoverText>Explore Membership</HoverText>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
