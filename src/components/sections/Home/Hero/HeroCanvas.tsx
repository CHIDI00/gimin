"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 240;

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef({ current: 1 });
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Load images synchronously on the client
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/imageFrame/ezgif-frame-${i.toString().padStart(3, '0')}.png`;
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;

    const render = (frameIndex: number) => {
      const img = imagesRef.current[frameIndex - 1];
      if (img && img.complete && img.naturalWidth > 0) {
        // Use logical window dimensions for math, not the physical canvas.width
        const logicalWidth = window.innerWidth;
        const logicalHeight = window.innerHeight;

        const scale = Math.max(logicalWidth / img.naturalWidth, logicalHeight / img.naturalHeight);
        const drawWidth = img.naturalWidth * scale;
        const drawHeight = img.naturalHeight * scale;
        const x = (logicalWidth / 2) - (drawWidth / 2);
        const y = (logicalHeight / 2) - (drawHeight / 2);

        context.clearRect(0, 0, logicalWidth, logicalHeight);
        context.drawImage(img, x, y, drawWidth, drawHeight);
      }
    };

    const handleResize = () => {
      // Get the display's pixel density
      const dpr = window.devicePixelRatio || 1;

      // Set the physical drawing buffer size to match the screen's pixel density
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      // Keep the CSS display size at 100vw / 100vh
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      // Normalize the coordinate system to use CSS pixels
      context.scale(dpr, dpr);

      // Force high-quality image smoothing
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';

      render(frameRef.current.current);
    };

    // Initialize dimensions
    handleResize();

    // Safely render the first frame immediately
    const firstImg = imagesRef.current[0];
    if (firstImg) {
      firstImg.onload = () => render(1);
      if (firstImg.complete) {
        render(1);
      }
    }

    gsap.to(frameRef.current, {
      current: FRAME_COUNT,
      snap: "current",
      ease: "none",
      scrollTrigger: {
        trigger: "#hero-scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
      onUpdate: () => {
        render(frameRef.current.current);
      }
    });

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full block z-0"
    />
  );
}