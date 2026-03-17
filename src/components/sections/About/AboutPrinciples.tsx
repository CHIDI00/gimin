"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const principles = [
  {
    num: "01",
    title: "NO SHORTCUTS",
    description:
      "We believe in earned progress. Every program is built on progressive overload, periodisation, and discipline — not trends.",
  },
  {
    num: "02",
    title: "SPECIALIST COACHING",
    description:
      "Every coach at GIMIN has competed at national or international level. We do not hire generalists — we recruit technicians.",
  },
  {
    num: "03",
    title: "DATA-DRIVEN",
    description:
      "Heart rate zones, velocity-based training, force plates. We measure what matters and programme based on evidence.",
  },
  {
    num: "04",
    title: "COMMUNITY OVER COMPETITION",
    description:
      "Iron sharpens iron. Our culture is built around mutual accountability, shared sessions, and collective intensity.",
  },
];

export default function AboutPrinciples() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".principle-tag",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      );

      tl.fromTo(
        ".principle-headline-line",
        { y: "110%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, ease: "power4.out", stagger: 0.1 },
        "-=0.6",
      );

      // Animate each principle row
      tl.fromTo(
        ".principle-row",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.15 },
        "-=0.5",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] py-24 md:py-32 z-20 overflow-hidden"
    >
      <div className="max-w-360 mx-auto w-full px-6 md:px-12 lg:px-10">
        {/* Header */}
        <div className="mb-20 lg:mb-32">
          <p className="principle-tag text-[#a3a3a3] text-[10px] sm:text-xs tracking-[0.2em] font-medium uppercase mb-8">
            What We Stand For
          </p>

          <h2 className="text-[12vw] sm:text-[9vw] lg:text-[5vw] font-black uppercase leading-[0.9] tracking-tighter text-white font-['Oswald',sans-serif]">
            <div className="overflow-hidden flex flex-wrap items-baseline gap-x-4 pb-1">
              <span className="block principle-headline-line translate-y-full opacity-0">
                Core
              </span>
              <span className="block principle-headline-line translate-y-full opacity-0 text-[#666666]">
                Principles.
              </span>
            </div>
          </h2>
        </div>

        {/* Principles List */}
        <div className="flex flex-col">
          <div className="border-t border-white/5 w-full"></div>
          {principles.map((p, i) => (
            <div
              key={i}
              className="principle-row flex flex-col md:flex-row items-start py-10 px-5 md:py-10 border-b border-white/5 opacity-0 group hover:bg-white/[0.02] transition-colors duration-500 -mt-[1px]"
            >
              <div className="md:w-[10%] mb-4 md:mb-0">
                <span className="text-[#555] font-['Oswald',sans-serif] text-sm md:text-base font-bold tracking-widest">
                  {p.num}
                </span>
              </div>

              <div className="md:w-[40%] mb-4 md:mb-0">
                <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-wide font-['Oswald',sans-serif] group-hover:text-gray-300 transition-colors duration-300">
                  {p.title}
                </h3>
              </div>

              <div className="md:w-[50%]">
                <p className="text-[#a3a3a3] text-sm md:text-base leading-[1.8] font-light max-w-xl">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
