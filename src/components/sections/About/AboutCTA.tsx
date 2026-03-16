"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import HoverText from "@/components/ui/HoverText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutCTA() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".cta-headline-line",
        { y: "110%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, ease: "power4.out", stagger: 0.15 },
      );

      tl.fromTo(
        ".cta-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6",
      );

      tl.fromTo(
        ".cta-button-anim",
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] py-32 md:py-48 z-20 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">
        {/* Headline */}
        <h2 className="text-[14vw] sm:text-[12vw] lg:text-[9vw] font-black uppercase leading-[0.85] tracking-tighter text-white font-['Oswald',sans-serif] mb-8">
          <div className="overflow-hidden pb-1">
            <span className="block cta-headline-line translate-y-full opacity-0">
              Ready To
            </span>
          </div>
          <div className="overflow-hidden pb-1">
            <span className="block cta-headline-line translate-y-full opacity-0 text-[#666666]">
              Train?
            </span>
          </div>
        </h2>

        {/* Subtext */}
        <p className="cta-desc text-[#a3a3a3] text-sm md:text-base leading-[1.8] font-light opacity-0 mb-12 max-w-[500px]">
          Book a free assessment session. We&apos;ll evaluate your movement,
          discuss your goals, and build a programme that meets you where you
          are.
        </p>

        {/* CTA Button */}
        <div className="cta-button-anim opacity-0">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center bg-white text-black px-10 py-5 text-xs sm:text-sm tracking-[0.25em] font-bold uppercase transition-all duration-300 hover:bg-[#e5e5e5]  rounded-full"
          >
            <HoverText>Book Assessment</HoverText>

            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
