// "use client";

// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const labels = [
//   // Phase 1
//   {
//     id: "neck",
//     title: "Neck & Traps",
//     desc: "The anchor.",
//     side: "left",
//     textPos: { top: "30%", left: "15%" },
//     targetPos: { top: "30%", left: "46%" },
//     startFrame: 5,
//     endFrame: 30,
//   },
//   {
//     id: "arms",
//     title: "Arms & Delts",
//     desc: "Raw power.",
//     side: "right",
//     textPos: { top: "32%", right: "15%" },
//     targetPos: { top: "64%", right: "30%" },
//     startFrame: 1,
//     endFrame: 25,
//   },

//   // Phase 2
//   {
//     id: "core",
//     title: "Core & Obliques",
//     desc: "Absolute stability.",
//     side: "left",
//     textPos: { top: "50%", left: "18%" },
//     targetPos: { top: "30%", left: "43%" },
//     startFrame: 15,
//     endFrame: 45,
//   },
//   {
//     id: "chest",
//     title: "Chest & Lats",
//     desc: "Structural integrity.",
//     side: "right",
//     textPos: { top: "70%", right: "18%" },
//     targetPos: { top: "20%", right: "50%" },
//     startFrame: 12,
//     endFrame: 40,
//   },
//   // Phase 3
//   {
//     id: "calves",
//     title: "Calves",
//     desc: "Explosive force.",
//     side: "left",
//     textPos: { top: "75%", left: "20%" },
//     targetPos: { top: "80%", left: "46%" },
//     startFrame: 35,
//     endFrame: 70,
//   },
//   {
//     id: "hamstrings",
//     title: "Hamstrings",
//     desc: "Powering the posterior.",
//     side: "right",
//     textPos: { top: "55%", right: "28%" },
//     targetPos: { top: "70%", right: "45%" },
//     startFrame: 43,
//     endFrame: 70,
//   },
//   {
//     id: "foundation",
//     title: "Foundation",
//     desc: "Grounded alignment.",
//     side: "right",
//     textPos: { top: "80%", right: "20%" },
//     targetPos: { top: "80%", right: "40%" },
//     startFrame: 60,
//     endFrame: 90,
//   },
// ];

// export default function HeroTextOverlays({ isReady }: { isReady?: boolean }) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       labels.forEach((l) => {
//         gsap.set(`#text-${l.id}`, { opacity: 0, y: 16 });
//         gsap.set(`#line-${l.id}`, { strokeDashoffset: 100, opacity: 1 });
//       });

//       // 2. Main Labels Scrub Timeline
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: "#hero-scroll-container",
//           start: "top top",
//           end: "bottom bottom",
//           scrub: 0.5,
//         },
//       });

//       // Dummy tween ensuring timeline perfectly represents 240 units
//       tl.to({}, { duration: 240 });

//       labels.forEach((label) => {
//         // ... (Label group parallax)
//         tl.fromTo(
//           [`#group-${label.id}`, `#wrapper-${label.id}`],
//           { y: 40 },
//           {
//             y: -60,
//             duration: label.endFrame - label.startFrame,
//             ease: "none",
//           },
//           label.startFrame,
//         );

//         // ... (Line drawing)
//         tl.to(
//           `#line-${label.id}`,
//           {
//             strokeDashoffset: 0,
//             duration: 15,
//             ease: "none",
//           },
//           label.startFrame,
//         );

//         // ... (Text appear)
//         tl.to(
//           `#text-${label.id}`,
//           {
//             opacity: 1,
//             y: 0,
//             duration: 10,
//             ease: "power2.out",
//           },
//           label.startFrame + 5,
//         );

//         // ... (Text fade out)
//         tl.to(
//           `#text-${label.id}`,
//           {
//             opacity: 0,
//             y: -16,
//             duration: 10,
//             ease: "power2.inOut",
//           },
//           label.endFrame - 10,
//         );

//         // ... (Line visible retract)
//         tl.to(
//           `#line-${label.id}`,
//           {
//             strokeDashoffset: 100,
//             duration: 15,
//             ease: "none",
//           },
//           label.endFrame - 10,
//         );
//       });
//     },
//     { scope: containerRef },
//   );

//   return (
//     <div
//       ref={containerRef}
//       className={`absolute inset-0 pointer-events-none z-10 w-full h-full transition-opacity duration-700 ease-out ${
//         isReady ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       {/* SVG Canvas */}
//       <svg className="absolute inset-0 w-full h-full pointer-events-none">
//         {labels.map((l) => (
//           <g key={`group-${l.id}`} id={`group-${l.id}`}>
//             <line
//               id={`line-${l.id}`}
//               x1={
//                 l.side === "left"
//                   ? l.textPos.left
//                   : `calc(100% - ${l.textPos.right})`
//               }
//               y1={l.textPos.top}
//               x2={
//                 l.side === "left"
//                   ? l.targetPos.left
//                   : `calc(100% - ${l.targetPos.right})`
//               }
//               y2={l.targetPos.top}
//               className="stroke-white/80 stroke-[1.5px]"
//               pathLength="100"
//               strokeDasharray="100"
//               strokeDashoffset="100"
//             />
//           </g>
//         ))}
//       </svg>

//       {/* Typography Elements */}
//       {labels.map((l) => (
//         <div
//           key={`wrapper-${l.id}`}
//           id={`wrapper-${l.id}`}
//           className="absolute flex flex-col justify-center"
//           style={{
//             top: l.textPos.top,
//             ...(l.side === "left"
//               ? {
//                   right: `calc(100% - ${l.textPos.left})`,
//                   alignItems: "flex-end",
//                   textAlign: "right",
//                 }
//               : {
//                   left: `calc(100% - ${l.textPos.right})`,
//                   alignItems: "flex-start",
//                   textAlign: "left",
//                 }),
//             marginTop: "-1.5rem",
//           }}
//         >
//           <div
//             id={`text-${l.id}`}
//             className={`flex flex-col relative w-max ${l.side === "left" ? "pr-4" : "pl-4"}`}
//             style={{
//               alignItems: l.side === "left" ? "flex-end" : "flex-start",
//             }}
//           >
//             {/* Dot */}
//             <div
//               className="absolute w-1.5 h-1.5 bg-white rounded-full top-[10px] shadow-[0_0_10px_rgba(255,255,255,0.8)]"
//               style={l.side === "left" ? { right: "-3px" } : { left: "-3px" }}
//             />

//             <h3 className="text-white text-sm tracking-[0.2em] uppercase font-bold mb-1 drop-shadow-lg">
//               {l.title}
//             </h3>
//             <p className="text-white/70 text-xs tracking-wider uppercase drop-shadow-lg font-light">
//               {l.desc}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const labels = [
  {
    id: "neck",
    title: "Neck & Traps",
    desc: "The anchor.",
    side: "left",
    textPos: { top: "30%", left: "15%" },
    targetPos: { top: "30%", left: "46%" },
    mobileTextPos: { top: "25%", left: "25%" },
    mobileTargetPos: { top: "28%", left: "50%" },
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
    mobileTextPos: { top: "15%", right: "25%" },
    mobileTargetPos: { top: "40%", right: "10%" },
    startFrame: 1,
    endFrame: 25,
  },

  {
    id: "core",
    title: "Core & Obliques",
    desc: "Absolute stability.",
    side: "left",
    textPos: { top: "50%", left: "18%" },
    targetPos: { top: "30%", left: "43%" },
    mobileTextPos: { top: "48%", left: "27%" },
    mobileTargetPos: { top: "35%", left: "48%" },
    startFrame: 15,
    endFrame: 45,
  },
  {
    id: "chest",
    title: "Chest & Lats",
    desc: "Structural integrity.",
    side: "right",
    textPos: { top: "70%", right: "18%" },
    targetPos: { top: "20%", right: "50%" },
    mobileTextPos: { top: "60%", right: "20%" },
    mobileTargetPos: { top: "20%", right: "45%" },
    startFrame: 12,
    endFrame: 40,
  },
  {
    id: "calves",
    title: "Calves",
    desc: "Explosive force.",
    side: "left",
    textPos: { top: "75%", left: "20%" },
    targetPos: { top: "80%", left: "46%" },
    mobileTextPos: { top: "72%", left: "25%" },
    mobileTargetPos: { top: "78%", left: "50%" },
    startFrame: 35,
    endFrame: 70,
  },
  {
    id: "hamstrings",
    title: "Hamstrings",
    desc: "Powering the posterior.",
    side: "right",
    textPos: { top: "55%", right: "28%" },
    targetPos: { top: "70%", right: "45%" },
    mobileTextPos: { top: "78%", right: "35%" },
    mobileTargetPos: { top: "70%", right: "45%" },
    startFrame: 43,
    endFrame: 70,
  },
  {
    id: "foundation",
    title: "Foundation",
    desc: "Grounded alignment.",
    side: "right",
    textPos: { top: "80%", right: "20%" },
    targetPos: { top: "80%", right: "40%" },
    mobileTextPos: { top: "88%", right: "35%" },
    mobileTargetPos: { top: "82%", right: "85%" },
    startFrame: 60,
    endFrame: 90,
  },
];

export default function HeroTextOverlays({ isReady }: { isReady?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track if we are on a mobile device
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check immediately on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // helpers to fetch the correct coordinates based on screen size
  const getTextPos = (l: (typeof labels)[0]) =>
    isMobile && l.mobileTextPos ? l.mobileTextPos : l.textPos;
  const getTargetPos = (l: (typeof labels)[0]) =>
    isMobile && l.mobileTargetPos ? l.mobileTargetPos : l.targetPos;

  useGSAP(
    () => {
      labels.forEach((l) => {
        gsap.set(`#text-${l.id}`, { opacity: 0, y: 16 });
        gsap.set(`#line-${l.id}`, { strokeDashoffset: 100, opacity: 1 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-scroll-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      tl.to({}, { duration: 240 });

      labels.forEach((label) => {
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

        tl.to(
          `#line-${label.id}`,
          {
            strokeDashoffset: 0,
            duration: 15,
            ease: "none",
          },
          label.startFrame,
        );

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
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none z-10 w-full h-full transition-opacity duration-700 ease-out ${
        isReady ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* SVG Canvas */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {labels.map((l) => (
          <g key={`group-${l.id}`} id={`group-${l.id}`}>
            <line
              id={`line-${l.id}`}
              x1={
                l.side === "left"
                  ? getTextPos(l).left
                  : `calc(100% - ${getTextPos(l).right})`
              }
              y1={getTextPos(l).top}
              x2={
                l.side === "left"
                  ? getTargetPos(l).left
                  : `calc(100% - ${getTargetPos(l).right})`
              }
              y2={getTargetPos(l).top}
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
            top: getTextPos(l).top,
            ...(l.side === "left"
              ? {
                  right: `calc(100% - ${getTextPos(l).left})`,
                  alignItems: "flex-end",
                  textAlign: "right",
                }
              : {
                  left: `calc(100% - ${getTextPos(l).right})`,
                  alignItems: "flex-start",
                  textAlign: "left",
                }),
            marginTop: "-1.5rem",
          }}
        >
          <div
            id={`text-${l.id}`}
            // Added max-w-[130px] md:max-w-none so text wraps nicely on mobile instead of strictly remaining on one long line
            className={`flex flex-col relative max-w-[130px] md:max-w-none md:w-max ${
              l.side === "left" ? "pr-4" : "pl-4"
            }`}
            style={{
              alignItems: l.side === "left" ? "flex-end" : "flex-start",
            }}
          >
            {/* Dot */}
            <div
              className="absolute w-1.5 h-1.5 bg-white rounded-full top-[10px] shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={l.side === "left" ? { right: "-3px" } : { left: "-3px" }}
            />

            <h3 className="text-white text-sm tracking-[0.2em] uppercase font-bold mb-1 drop-shadow-lg leading-tight">
              {l.title}
            </h3>
            <p className="text-white/70 text-[10px] md:text-xs tracking-wider uppercase drop-shadow-lg font-light leading-snug mt-1">
              {l.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
