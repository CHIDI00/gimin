"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Create a timeline that fires when this section enters the viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%", // Starts the animation when the top of the section is 75% down the screen
          toggleActions: "play none none reverse", // Plays on scroll down, reverses if you scroll back up
        },
      });

      // 1. Reveal the massive headline lines one by one
      tl.to(".philosophy-line", {
        y: "0%", // Moves it from the Tailwind translate-y-full back to its resting position
        duration: 1,
        ease: "power4.out",
        stagger: 0.15, // Adds a sleek delay between each line
      });

      // 2. Fade and slide in the supporting paragraphs
      tl.to(
        ".philosophy-text",
        {
          opacity: 1,
          y: 0, // Clears the translate-y-4 class
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.6",
      ); // The "-=0.6" tells it to start slightly before the headline animation finishes
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] py-32 md:py-48 px-6 md:px-14 lg:px-14 z-20"
    >
      <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        {/* Left Side: Massive Headline */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col justify-center">
          <h2 className="text-[12vw] lg:text-[6vw] xl:text-[5vw] font-black uppercase leading-[0.85] tracking-tight text-white">
            <div className="overflow-hidden pb-2">
              <span className="block philosophy-line translate-y-full">
                We build the
              </span>
            </div>
            <div className="overflow-hidden pb-2">
              <span className="block philosophy-line translate-y-full">
                foundation.
              </span>
            </div>
            <div className="overflow-hidden pb-2">
              <span className="block philosophy-line translate-y-full text-white/40">
                You bring
              </span>
            </div>
            <div className="overflow-hidden pb-2">
              <span className="block philosophy-line translate-y-full text-white/40">
                the force.
              </span>
            </div>
          </h2>
        </div>

        {/* Right Side: Supporting Paragraph */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-end lg:pb-4">
          <div className="max-w-sm">
            <p className="philosophy-text text-white/70 text-xs md:text-[1vw] leading-relaxed font-light mb-6 opacity-0 translate-y-4">
              GIMIN is not just about moving weights. It is about precision. We
              focus on structural integrity and kinetic power, providing the
              technical expertise and grounded stability you need to unlock your
              ultimate potential.
            </p>
            <p className="philosophy-text text-white/70 text-xs md:text-sm leading-relaxed font-light opacity-0 translate-y-4">
              Every lift is deliberate. Every motion is purposeful. Your journey
              starts with form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// if (typeof window !== "undefined") {
//     gsap.registerPlugin(ScrollTrigger);
// }

// export default function Philosophy() {
//     const containerRef = useRef<HTMLElement>(null);

//     useGSAP(() => {
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: containerRef.current,
//                 start: "top 75%",
//                 toggleActions: "play none none reverse",
//             }
//         });

//         tl.to(".philosophy-line", {
//             y: "0%",
//             duration: 1,
//             ease: "power4.out",
//             stagger: 0.15,
//         });

//         tl.to(".philosophy-text", {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//             ease: "power2.out",
//             stagger: 0.2,
//         }, "-=0.6");

//     }, { scope: containerRef });

//     return (
//         <section ref={containerRef} className="relative w-full bg-[#f4f4f0] py-32 md:py-48 px-6 md:px-12 lg:px-24 z-20">
//             <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

//                 {/* Left Side: Massive Headline */}
//                 <div className="lg:col-span-8 flex flex-col justify-center">
//                     <h2 className="text-[12vw] lg:text-[7vw] font-black uppercase leading-[0.85] tracking-tight text-[#0a0a0a]">
//                         <div className="overflow-hidden pb-2">
//                             <span className="block philosophy-line translate-y-full">We build the</span>
//                         </div>
//                         <div className="overflow-hidden pb-2">
//                             <span className="block philosophy-line translate-y-full">foundation.</span>
//                         </div>
//                         <div className="overflow-hidden pb-2">
//                             <span className="block philosophy-line translate-y-full text-[#0a0a0a]/30">You bring</span>
//                         </div>
//                         <div className="overflow-hidden pb-2">
//                             <span className="block philosophy-line translate-y-full text-[#0a0a0a]/30">the force.</span>
//                         </div>
//                     </h2>
//                 </div>

//                 {/* Right Side: Supporting Paragraph */}
//                 <div className="lg:col-span-4 flex flex-col justify-end lg:pb-4">
//                     <div className="max-w-sm">
//                         <p className="philosophy-text text-[#0a0a0a]/80 text-xs md:text-sm leading-relaxed font-light mb-6 opacity-0 translate-y-4">
//                             GIMIN is not just about moving weights. It is about precision. We focus on structural integrity and kinetic power, providing the technical expertise and grounded stability you need to unlock your ultimate potential.
//                         </p>
//                         <p className="philosophy-text text-[#0a0a0a]/80 text-xs md:text-sm leading-relaxed font-light opacity-0 translate-y-4">
//                             Every lift is deliberate. Every motion is purposeful. Your journey starts with form.
//                         </p>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }
