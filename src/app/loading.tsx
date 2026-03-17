// import React from "react";

// export default function Loading() {
//   return (
//     <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#03060d]">
//       <div className="relative flex items-center justify-center">
//         {/* Sleek outer spinner */}
//         <div className="h-20 w-20 animate-spin rounded-full border-2 border-white/10 border-t-white/90"></div>
//         {/* Center brand text */}
//         <div className="absolute text-white/90 text-[10px] uppercase tracking-[0.3em] font-bold ml-1">
//           GIMIN
//         </div>
//       </div>
//       {/* Loading text with pulse */}
//       <p className="mt-8 text-white/40 text-[10px] uppercase tracking-[0.4em] animate-pulse ml-1">
//         Loading...
//       </p>
//     </div>
//   );
// }

"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Loading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. The infinite letter wave animation
      const textTl = gsap.timeline({ repeat: -1 });

      textTl
        .fromTo(
          ".loader-char",
          { y: 150, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.out",
          },
        )
        .to({}, { duration: 0.7 }) // A brief pause when fully visible
        .to(".loader-char", {
          y: -150,
          opacity: 0,
          duration: 0.95,
          stagger: 0.05,
          ease: "power4.in",
        });

      // 2. The relentless sweeping tracking line at the bottom
      gsap.fromTo(
        barRef.current,
        { xPercent: -100 },
        {
          xPercent: 100,
          duration: 1.2,
          repeat: -1,
          ease: "power2.inOut",
        },
      );
    },
    { scope: containerRef },
  );

  const brandName = "GIMiN";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* The massive staggered text */}
      <div className="overflow-hidden flex">
        {brandName.split("").map((char, index) => (
          <span
            key={index}
            className={`loader-char text-7xl md:text-[12vw] font-black leading-none inline-block tracking-tighter ${
              index === 3 ? "text-blue-700" : "text-white"
            }`}
          >
            {char}
          </span>
        ))}
      </div>

      {/* The technical status tracker at the bottom */}
      <div className="absolute bottom-16 md:bottom-24 flex flex-col items-center gap-4 w-full px-12">
        <span className="text-[#888888] text-[10px] tracking-[0.4em] uppercase font-bold">
          Calibrating Systems
        </span>

        {/* The thin tracking line container */}
        <div className="w-full max-w-sm h-[1px] bg-white/10 relative overflow-hidden">
          {/* The high-visibility sweeping accent line */}
          <div
            ref={barRef}
            className="absolute inset-y-0 left-0 w-full bg-blue-700"
          />
        </div>
      </div>
    </div>
  );
}
