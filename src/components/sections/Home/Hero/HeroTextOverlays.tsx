"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const labels = [
  // Phase 1
  {
    id: "neck",
    title: "Neck & Traps",
    desc: "The anchor.",
    side: "left",
    textPos: { top: "30%", left: "15%" },
    targetPos: { top: "30%", left: "46%" },
    startFrame: 5,
    endFrame: 30,
  },
  {
    id: "arms",
    title: "Arms & Delts",
    desc: "Raw power.",
    side: "right",
    textPos: { top: "32%", right: "15%" },
    targetPos: { top: "64%", right: "30%" },
    startFrame: 1,
    endFrame: 28,
  },

  // Phase 2
  {
    id: "core",
    title: "Core & Obliques",
    desc: "Absolute stability.",
    side: "left",
    textPos: { top: "50%", left: "18%" },
    targetPos: { top: "30%", left: "43%" },
    startFrame: 20,
    endFrame: 50,
  },
  {
    id: "chest",
    title: "Chest & Lats",
    desc: "Structural integrity.",
    side: "right",
    textPos: { top: "70%", right: "18%" },
    targetPos: { top: "20%", right: "50%" },
    startFrame: 15,
    endFrame: 40,
  },
  // Phase 3
  {
    id: "calves",
    title: "Calves",
    desc: "Explosive force.",
    side: "left",
    textPos: { top: "75%", left: "20%" },
    targetPos: { top: "80%", left: "46%" },
    startFrame: 40,
    endFrame: 80,
  },
  {
    id: "hamstrings",
    title: "Hamstrings",
    desc: "Powering the posterior.",
    side: "right",
    textPos: { top: "55%", right: "28%" },
    targetPos: { top: "70%", right: "45%" },
    startFrame: 43,
    endFrame: 80,
  },
  {
    id: "foundation",
    title: "Foundation",
    desc: "Grounded alignment.",
    side: "right",
    textPos: { top: "80%", right: "20%" },
    targetPos: { top: "80%", right: "40%" },
    startFrame: 65,
    endFrame: 96,
  },
];

export default function HeroTextOverlays() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      labels.forEach((l) => {
        gsap.set(`#text-${l.id}`, { opacity: 0, y: 16 });
        gsap.set(`#line-${l.id}`, { strokeDashoffset: 100, opacity: 1 });
      });

      gsap.set("#cta-button", { opacity: 0, y: 20 });

      // 2. Main Labels Scrub Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-scroll-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      // Dummy tween ensuring timeline perfectly represents 240 units
      tl.to({}, { duration: 240 });

      labels.forEach((label) => {
        // ... (Label group parallax)
        tl.fromTo(
          [`#group-${label.id}`, `#wrapper-${label.id}`],
          { y: 40 },
          {
            y: -60,
            duration: label.endFrame - label.startFrame,
            ease: "none",
          },
          label.startFrame,
        );

        // ... (Line drawing)
        tl.to(
          `#line-${label.id}`,
          {
            strokeDashoffset: 0,
            duration: 15,
            ease: "none",
          },
          label.startFrame,
        );

        // ... (Text appear)
        tl.to(
          `#text-${label.id}`,
          {
            opacity: 1,
            y: 0,
            duration: 10,
            ease: "power2.out",
          },
          label.startFrame + 5,
        );

        // ... (Text fade out)
        tl.to(
          `#text-${label.id}`,
          {
            opacity: 0,
            y: -16,
            duration: 10,
            ease: "power2.inOut",
          },
          label.endFrame - 10,
        );

        // ... (Line visible retract)
        tl.to(
          `#line-${label.id}`,
          {
            strokeDashoffset: 100,
            duration: 15,
            ease: "none",
          },
          label.endFrame - 10,
        );
      });

      ScrollTrigger.create({
        trigger: "#hero-scroll-container",
        start: "bottom 70%",
        end: "bottom bottom",
        onEnter: () => {
          // Play the animation forward when scrolling down and entering this zone
          gsap.to("#cta-button", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          // Play the animation backward (or simply fade it out) when scrolling up and leaving the zone
          gsap.to("#cta-button", {
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
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
    >
      {/* SVG Canvas */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {labels.map((l) => (
          <g key={`group-${l.id}`} id={`group-${l.id}`}>
            <line
              id={`line-${l.id}`}
              x1={
                l.side === "left"
                  ? l.textPos.left
                  : `calc(100% - ${l.textPos.right})`
              }
              y1={l.textPos.top}
              x2={
                l.side === "left"
                  ? l.targetPos.left
                  : `calc(100% - ${l.targetPos.right})`
              }
              y2={l.targetPos.top}
              className="stroke-white/80 stroke-[1.5px]"
              pathLength="100"
              strokeDasharray="100"
              strokeDashoffset="100"
            />
          </g>
        ))}
      </svg>

      {/* Typography Elements */}
      {labels.map((l) => (
        <div
          key={`wrapper-${l.id}`}
          id={`wrapper-${l.id}`}
          className="absolute flex flex-col justify-center"
          style={{
            top: l.textPos.top,
            ...(l.side === "left"
              ? {
                  right: `calc(100% - ${l.textPos.left})`,
                  alignItems: "flex-end",
                  textAlign: "right",
                }
              : {
                  left: `calc(100% - ${l.textPos.right})`,
                  alignItems: "flex-start",
                  textAlign: "left",
                }),
            marginTop: "-1.5rem",
          }}
        >
          <div
            id={`text-${l.id}`}
            className={`flex flex-col relative w-max ${l.side === "left" ? "pr-4" : "pl-4"}`}
            style={{
              alignItems: l.side === "left" ? "flex-end" : "flex-start",
            }}
          >
            {/* Dot */}
            <div
              className="absolute w-1.5 h-1.5 bg-white rounded-full top-[10px] shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={l.side === "left" ? { right: "-3px" } : { left: "-3px" }}
            />

            <h3 className="text-white text-sm tracking-[0.2em] uppercase font-bold mb-1 drop-shadow-lg">
              {l.title}
            </h3>
            <p className="text-white/70 text-xs tracking-wider uppercase drop-shadow-lg font-light">
              {l.desc}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex px-10 w-full items-end justify-between pointer-events-auto">
        <div className="text-white/40 text-left md:text-md text-sm tracking-[0.1em] uppercase ">
          <p>Scroll to explore</p>
        </div>

        <div
          id="cta-button"
          // ref={containerRef}
          className="relative flex w-[55%] justify-between items-end p-0"
        >
          <button
            // id="cta-button"
            className="px-10 py-4 bg-white text-xs tracking-[0.25em] uppercase font-bold hover:bg-white/90 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] relative overflow-hidden group rounded-sm"
          >
            <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300 ease-out text-black">
              Join GIMIN
            </span>
          </button>

          <p
            // id="cta-button"
            className="text-white text-right text-md tracking-[0.2em] uppercase font-bold mb-1 drop-shadow-lg"
          >
            The result you get <br /> is a balanced physique
          </p>
        </div>
      </div>
    </div>
  );
}
