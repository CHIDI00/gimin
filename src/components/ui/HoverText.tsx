"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Swap out 'text' for 'children' here
export default function HoverText({ children }: { children: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const tl = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      const chars = containerRef.current?.querySelectorAll(".char");
      if (!chars) return;

      tl.current = gsap.timeline({ paused: true });

      tl.current.to(chars, {
        yPercent: -100,
        duration: 0.4,
        ease: "back.inOut(1.5)",
        stagger: 0.02,
      });
    },
    { scope: containerRef },
  );

  const handleMouseEnter = () => tl.current?.play();
  const handleMouseLeave = () => tl.current?.reverse();

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex overflow-hidden cursor-pointer"
    >
      {/* Target 'children' instead of 'text' for the split method */}
      {children.split("").map((char, index) => (
        <span key={index} className="char relative inline-flex flex-col">
          <span className="block">{char === " " ? "\u00A0" : char}</span>
          <span className="block absolute top-full left-0">
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}
