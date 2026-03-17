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

const pillars = [
  {
    id: "strength",
    title: "Strength",
    desc: "Build the foundation. Raw power.",
    image: "/strength.png",
  },
  {
    id: "mobility",
    title: "Mobility",
    desc: "Unlock fluidity. Precision movement.",
    image: "/mobility.png",
  },
  {
    id: "conditioning",
    title: "Conditioning",
    desc: "Enhance endurance. Relentless drive.",
    image: "/conditioning.png",
  },
];

export default function TrainingTeaser() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // fade in the section header
      tl.fromTo(
        ".teaser-header",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      );

      // stagger the 3 cards sliding up
      tl.fromTo(
        ".teaser-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.15 },
        "-=0.4",
      );

      // parallax effect for the background images
      gsap.utils
        .toArray<HTMLElement>(".parallax-wrapper")
        .forEach((wrapper) => {
          gsap.fromTo(
            wrapper,
            { yPercent: -10 },
            {
              yPercent: 20,
              ease: "none",
              scrollTrigger: {
                trigger: wrapper.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#050505] py-24 md:py-32 px-6 md:px-12 lg:px-14 z-20"
    >
      <div className="max-w-screen-[90rem] mx-auto">
        {/* header Area */}
        <div className="teaser-header flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight mb-2">
              The Disciplines
            </h2>
            <p className="text-white/60 text-sm font-light max-w-md">
              Three core pillars engineered to unlock your absolute potential.
            </p>
          </div>

          <Link
            href="/training"
            className="group flex items-center gap-2 text-white text-xs tracking-[0.2em] uppercase font-bold hover:text-white/70 transition-colors"
          >
            <HoverText>Explore Training</HoverText>

            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        {/* column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <Link
              href="/training"
              key={pillar.id}
              className="teaser-card group relative block aspect-[4/5] overflow-hidden bg-[#1a1a1a] rounded-sm"
            >
              {/* Parallax Wrapper */}
              <div className="parallax-wrapper absolute -top-[15%] -bottom-[15%] left-0 right-0 w-full">
                {/* Image Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${pillar.image})` }}
                />
              </div>

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Text Content locked to the bottom */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end z-10">
                <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide mb-2">
                  {pillar.title}
                </h3>
                <p className="text-white/70 text-xs md:text-sm font-light">
                  {pillar.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
