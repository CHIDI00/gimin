"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const gridPattern = [
  1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1,
];

export default function ProgramStory() {
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

      // stagger the scattered images popping in
      tl.fromTo(
        ".scatter-image",
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
          stagger: 0.05,
        },
      );

      // slide and fade the text in on the right
      tl.fromTo(
        ".story-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.15 },
        "-=0.6",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#050505] py-24 md:py-32 px-6 md:px-12 lg:px-14 z-20"
    >
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* left side*/}
        <div className="grid grid-cols-4 gap-2 md:gap-7 w-full aspect-[4/5] lg:aspect-1/2">
          {gridPattern.map((item, index) => {
            if (item === 0) {
              return <div key={index} className="w-full h-full" />;
            }

            return (
              <div
                key={index}
                className="scatter-image w-full h-full bg-[#1a1a1a] overflow-hidden relative"
              >
                <div className="w-full h-full transition-transform duration-700 hover:scale-110 relative">
                  <Image
                    src={`/scatteredImages/scatter-${index}.png`}
                    alt={`Program detail ${index}`}
                    fill
                    sizes="(max-width: 768px) 30vw, (max-width: 1200px) 25vw, 20vw"
                    className="object-cover object-center"
                    style={{
                      backgroundColor: `hsl(0, 0%, ${18 + index * 3}%)`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* right side */}
        <div className="flex flex-col justify-center max-w-xl">
          <h2 className="story-text text-white text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
            Why We Created <br /> These Programs
          </h2>

          <div className="space-y-6 text-white/70 text-sm md:text-base font-light leading-relaxed">
            <p className="story-text">
              We designed these programs to make real, lasting transformation
              accessible to everyone no matter your starting point. Whether your
              goal is to lose weight, build strength, or simply feel better in
              your own body, each program follows a structured, sustainable
              approach built on proven methods.
            </p>

            <p className="story-text">
              Every detail was created with balance in mind. You will not find
              quick fixes or unrealistic promises, only smart, adaptable
              routines that evolve with your progress. Our goal is to help you
              train effectively, stay consistent, and enjoy the process.
            </p>

            <p className="story-text">
              From beginners taking their first steps to athletes refining their
              performance, our programs are built to meet you where you are.
              With clear guidance and measurable results, you will have
              everything you need to move forward, one workout, one habit, one
              win at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
