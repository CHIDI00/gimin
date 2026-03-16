"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-tag",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 },
      );

      tl.fromTo(
        ".hero-headline-line",
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
        },
        "-=0.6",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-[#050505] overflow-hidden z-20 pt-20"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-neutral-700 animate-pulse -z-20" />

        {/* Fallback image path, replace with actual gym image */}
        <Image
          src="/giminheroimage.png"
          alt="Dark moody gym background"
          fill
          className="object-cover object-center opacity-100 mix-blend-overlay -z-10"
        />

        {/* Gradients to blend into the next sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-90 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] opacity-60 -z-10"></div>
      </div>

      <div className="relative z-10 w-full max-w-360 px-6 md:px-12 lg:px-0 flex flex-col justify-center h-full">
        {/* Small Tagline */}
        <div className="hero-tag mb-8 opacity-0">
          <p className="text-[#a3a3a3] text-[10px] sm:text-xs tracking-[0.2em] font-medium uppercase border-b border-white/20 inline-block pb-1">
            EST. 2026 &mdash; LAGOS
          </p>
        </div>

        {/* Headline */}
        <h1 className="text-[15vw] sm:text-[12vw] lg:text-[5vw] font-black uppercase leading-[0.85] tracking-tighter text-white">
          <div className="overflow-hidden pb-2">
            <span className="block hero-headline-line translate-y-full opacity-0">
              Built For
            </span>
          </div>
          <div className="overflow-hidden pb-2">
            <span className="block hero-headline-line translate-y-full opacity-0 text-[#888888]">
              The Serious.
            </span>
          </div>
        </h1>
      </div>
    </section>
  );
}
