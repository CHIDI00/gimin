"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const quotes = [
  {
    quote:
      "“The detail and precision GIMIN demands is unlike any other studio. It forces you to rethink every single rep.”",
    name: "Alex Rivera",
    title: "Olympic Athlete",
  },
  {
    quote:
      "“They do not focus on volume; they focus on integrity. I have never felt stronger or more functionally kinetic.”",
    name: "Sarah Chen",
    title: "Pro CrossFit Competitor",
  },
  {
    quote:
      "“It is an athletic sanctuary. A perfect blend of technical expertise and relentless drive. Step up, or step aside.”",
    name: "Marcus Thorne",
    title: "Strength & Conditioning Coach",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null); // Updated back to HTMLDivElement
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useGSAP(
    () => {
      // fade in the container
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // parallax
      gsap.fromTo(
        bgRef.current,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // text rotation loop
      const loop = gsap.timeline({ repeat: -1 });

      // delay of 6 seconds for each quote
      const holdTime = 6;

      quotes.forEach((_, index) => {
        loop.addLabel(`quote-${index}`);

        // Hold current text
        loop.to({}, { duration: holdTime });

        // Fade and slide the current text OUT
        loop.to([".testimonial-quote", ".testimonial-meta"], {
          opacity: 0,
          y: -10,
          duration: 0.8,
          ease: "power2.inOut",
          stagger: 0.1,
        });

        // Update the state to the NEXT index
        loop.call(() => {
          const nextIndex = (index + 1) % quotes.length;
          setCurrentQuoteIndex(nextIndex);
        });

        // Immediately snap new text from below
        loop.set([".testimonial-quote", ".testimonial-meta"], { y: 15 });

        // Fade and slide the new text UP and IN
        loop.to([".testimonial-quote", ".testimonial-meta"], {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#050505] py-24 md:py-32 px-6 md:px-12 lg:px-3 z-20 flex items-center justify-center overflow-hidden"
    >
      <div
        ref={containerRef}
        className="relative w-full max-w-[90rem] md:h-[50rem] h-[30rem] py-24 md:py-32 px-6 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden mx-auto rounded-lg"
      >
        <div
          ref={bgRef}
          className="absolute -top-[15%] left-0 w-full h-[130%] z-0"
        >
          <Image
            src="/testbg2.png"
            alt="Parallax Background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-60"
          />
        </div>

        <div className="absolute inset-0 bg-[#03060d]/50 pointer-events-none z-[5]" />

        <div className="absolute inset-0 flex items-center justify-center -translate-y-1/4 select-none pointer-events-none z-10">
          <span className="text-[60vw] md:text-[40vw] font-black leading-none text-white/40 opacity-50 drop-shadow-[0_0_20px_rgba(255,255,255,0.02)]">
            “
          </span>
        </div>

        <div
          ref={contentRef}
          className="relative z-20 max-w-screen-2xl mx-auto w-full flex flex-col items-center justify-center text-center"
        >
          <p className="testimonial-quote text-white/90 text-[7vw] md:text-[3.5vw] font-light leading-snug tracking-tight mb-12 max-w-6xl drop-shadow-xl opacity-100">
            {quotes[currentQuoteIndex].quote}
          </p>

          <div className="testimonial-meta flex flex-col items-center gap-1 opacity-100">
            <h4 className="text-white text-xs md:text-sm tracking-[0.25em] uppercase font-bold">
              {quotes[currentQuoteIndex].name}
            </h4>
            <p className="text-white/50 text-[10px] md:text-xs tracking-wider uppercase font-light">
              {quotes[currentQuoteIndex].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
