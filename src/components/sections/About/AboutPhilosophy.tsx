"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "4,200+", label: "ACTIVE ATHLETES" },
  { value: "12", label: "YEARS OPERATING" },
  { value: "4", label: "GLOBAL FACILITIES" },
  { value: "98%", label: "RETENTION RATE" },
];

export default function AboutPhilosophy() {
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
        ".phil-tag",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      );

      tl.fromTo(
        ".phil-headline-line",
        { y: "110%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, ease: "power4.out", stagger: 0.1 },
        "-=0.6",
      );

      tl.fromTo(
        ".phil-desc p",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.15 },
        "-=0.8",
      );

      // Stats animation
      const statsScroll = gsap.timeline({
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      statsScroll.fromTo(
        ".stat-item",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.1 },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] py-24 md:py-32 flex flex-col z-20 overflow-hidden"
    >
      <div className="max-w-360 mx-auto w-full px-6 md:px-12 lg:px-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between mb-32 gap-12 lg:gap-24">
          {/* Left: Heading */}
          <div className="lg:w-1/2">
            <p className="phil-tag text-[#a3a3a3] text-[10px] sm:text-xs tracking-[0.2em] font-medium uppercase mb-8">
              Our Philosophy
            </p>

            <h2 className="text-[12vw] sm:text-[9vw] lg:text-[5vw] font-black uppercase leading-[0.9] tracking-tighter text-white font-['Oswald',sans-serif]">
              <div className="overflow-hidden pb-1">
                <span className="block phil-headline-line translate-y-full opacity-0">
                  Performance
                </span>
              </div>
              <div className="overflow-hidden flex items-baseline gap-4 pb-1">
                <span className="block phil-headline-line translate-y-full opacity-0">
                  Is A
                </span>
                <span className="block phil-headline-line translate-y-full opacity-0 text-[#666666]">
                  Practice.
                </span>
              </div>
            </h2>
          </div>

          {/* Right: Paragraphs */}
          <div className="lg:w-1/2 phil-desc flex flex-col justify-center gap-6 mt-4 lg:mt-16">
            <p className="text-[#d4d4d4] text-sm md:text-base leading-[1.8] font-light opacity-0">
              GIMIN was founded in 2026 with a single conviction: most gyms are
              built for entertainment, not results. We built the opposite
              &mdash; a facility stripped of distraction, engineered for output.
            </p>
            <p className="text-[#a3a3a3] text-sm md:text-base leading-[1.8] font-light opacity-0">
              What started as a 200sqm unit in East London has grown into four
              facilities across three continents. But the principle hasn&apos;t
              changed: every square metre, every piece of equipment, every
              coaching hour exists to move you forward.
            </p>
            <p className="text-[#a3a3a3] text-sm md:text-base leading-[1.8] font-light opacity-0">
              We don&apos;t sell motivation. We build systems. If you&apos;re
              looking for a gym that makes you feel good about showing up,
              we&apos;re not it. If you&apos;re looking for a place that makes
              showing up worth it &mdash; welcome.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Stats Grid */}
      <div className="stats-container w-full bg-[#050505]">
        <div className="max-w-360 mx-auto w-full px-6 md:px-12 lg:px-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 py-16 lg:py-24">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-item flex flex-col items-center justify-center text-center opacity-0 group"
              >
                <h3 className="text-5xl md:text-6xl lg:text-[5vw] font-black tracking-tighter text-white font-['Oswald',sans-serif] mb-4 group-hover:scale-105 transition-transform duration-500">
                  {stat.value}
                </h3>
                <p className="text-[#666] text-[10px] sm:text-xs tracking-[0.2em] font-semibold uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
