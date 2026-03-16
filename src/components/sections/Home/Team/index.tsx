"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
  {
    name: "MARCUS COLE",
    role: "HEAD COACH - STRENGTH & POWER",
    image: "/cole.png",
  },
  {
    name: "ELENA VOSS",
    role: "PERFORMANCE COACH - CONDITIONING",
    image: "/elena.png",
  },
  {
    name: "JAMES ARCHER",
    role: "S&C SPECIALIST - ENDURANCE",
    image: "/james.png",
  },
  {
    name: "RINA TANAKA",
    role: "MOVEMENT COACH - MOBILITY",
    image: "/rina.png",
  },
];

export default function Team() {
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

      // Headline Animation
      tl.to(".team-headline-line", {
        y: "0%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        opacity: 1,
      });

      // Fade in Team Cards
      tl.fromTo(
        ".team-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.15 },
        "-=0.5",
      );

      // Paragraph Animation
      tl.fromTo(
        ".team-description",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.8",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] py-24 md:py-32 px-6 md:px-12 lg:px-14 z-20 overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 lg:mb-24 gap-10">
          <div>
            <p className="text-[#a3a3a3] text-[10px] sm:text-xs tracking-[0.2em] font-medium uppercase mb-6 ml-1">
              The Coaches
            </p>
            <h2 className="text-[14vw] sm:text-[12vw] lg:text-[9vw] font-black uppercase leading-[0.85] tracking-tighter text-white font-['Oswald',sans-serif]">
              <div className="overflow-hidden pb-1">
                <span className="block team-headline-line translate-y-[110%] opacity-0">
                  Meet The
                </span>
              </div>
              <div className="overflow-hidden pb-1">
                <span className="block team-headline-line translate-y-[110%] opacity-0 text-[#888888]">
                  Team.
                </span>
              </div>
            </h2>
          </div>

          <div className="max-w-[400px] lg:mb-8">
            <p className="team-description text-[#a3a3a3] text-sm md:text-[15px] leading-[1.8] font-light opacity-0">
              Every coach at GIMIN is a specialist. We do not hire generalists —
              we recruit athletes, technicians, and movement experts who have
              lived what they teach.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 overflow-hidden">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card group flex flex-col opacity-0"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden bg-[#111]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Info below the card */}
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#f5f5f5] mb-2 font-['Oswald',sans-serif]">
                  {member.name}
                </h3>
                <p className="text-[#666666] text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
