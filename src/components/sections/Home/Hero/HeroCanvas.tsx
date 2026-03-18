"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 240;

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef({ current: 1 });

  // We initialize with an array of nulls so we can safely check if a frame exists
  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(FRAME_COUNT).fill(null),
  );

  // We store the math calculations here so we only run them once per window resize
  const layoutRef = useRef({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    logicalWidth: 0,
    logicalHeight: 0,
  });

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // 1. SMART PRELOADING
    const loadFrame = (index: number) => {
      const img = new Image();
      img.src = `/imageFrame/ezgif-frame-${index.toString().padStart(3, "0")}.png`;
      img.onload = () => {
        imagesRef.current[index - 1] = img;
        // If the user scrolled to this frame while it was loading, draw it immediately
        if (index === Math.round(frameRef.current.current)) {
          render(index);
        }
      };
    };

    // Load Frame 1 instantly so the user sees the hero image immediately
    loadFrame(1);

    // Push the remaining 239 images to the back of the browser's queue
    // so it doesn't block the rest of your website from loading
    setTimeout(() => {
      for (let i = 2; i <= FRAME_COUNT; i++) {
        loadFrame(i);
      }
    }, 100); // Small delay lets the main thread breathe

    // 2. THE RENDER LOOP (Now math-free)
    const render = (frameIndex: number) => {
      const img = imagesRef.current[frameIndex - 1];

      // Only draw if the image has finished downloading
      if (img && img.complete) {
        const { x, y, width, height, logicalWidth, logicalHeight } =
          layoutRef.current;
        context.clearRect(0, 0, logicalWidth, logicalHeight);
        context.drawImage(img, x, y, width, height);
      }
    };

    // 3. PRE-CALCULATE MATH
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const logicalWidth = window.innerWidth;
      const logicalHeight = window.innerHeight;

      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;
      canvas.style.width = `${logicalWidth}px`;
      canvas.style.height = `${logicalHeight}px`;

      context.scale(dpr, dpr);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      // i only calculate the scale and position once when the window changes size,
      // instead of calculating it inside the render loop on every scroll tick.
      const firstImg = imagesRef.current[0];
      if (firstImg && firstImg.naturalWidth > 0) {
        const scale = Math.max(
          logicalWidth / firstImg.naturalWidth,
          logicalHeight / firstImg.naturalHeight,
        );
        layoutRef.current = {
          logicalWidth,
          logicalHeight,
          width: firstImg.naturalWidth * scale,
          height: firstImg.naturalHeight * scale,
          x: logicalWidth / 2 - (firstImg.naturalWidth * scale) / 2,
          y: logicalHeight / 2 - (firstImg.naturalHeight * scale) / 2,
        };
      }

      render(Math.round(frameRef.current.current));
    };

    window.addEventListener("resize", handleResize);

    // Wait a fraction of a second for Frame 1 to load, then do the initial math
    const checkFirstFrame = setInterval(() => {
      if (imagesRef.current[0]?.complete) {
        clearInterval(checkFirstFrame);
        handleResize();
      }
    }, 50);

    // 4. GSAP SCROLL TRIGGER
    gsap.to(frameRef.current, {
      current: FRAME_COUNT,
      snap: "current", // Ensures we land on whole numbers (frame 2, not frame 2.4)
      ease: "none",
      scrollTrigger: {
        trigger: "#hero-scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // The 0.5 adds a slight smoothing effect to the canvas draw
      },
      onUpdate: () => render(Math.round(frameRef.current.current)),
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(checkFirstFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full block z-0"
    />
  );
}
