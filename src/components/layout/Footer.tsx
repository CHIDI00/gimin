"use client";

import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import HoverText from "../ui/HoverText";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white px-6 md:px-12 lg:px-24 pt-20 pb-0 overflow-hidden relative font-sans break-words selection:bg-gray-800">
      <div className="max-w-360 mx-auto">
        {/* Top Logo Section */}
        <div className="flex flex-col items-center mb-24 md:mb-32">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-2">
            GIM<span className="text-blue-600">i</span>N
          </h1>
          <p className="text-[10px] md:text-xs tracking-[0.3em] text-gray-400 font-mono">
            PRECISION FITNESS
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-20 relative z-10">
          {/* Left Column (Marketing & Newsletter) */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#a1a1aa] mb-8 uppercase">
              <div className="w-2 h-2 rounded-full bg-blue-700"></div>
              System Status: Active
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              TRAIN AT THE <br />
              <span className="text-[#a1a1aa]">GLOBAL STANDARD.</span>
            </h2>

            <p className="text-[#a1a1aa] mb-8 max-w-sm text-sm leading-relaxed">
              Join 4,200+ athletes. Weekly programming delivered to your inbox.
            </p>

            <form
              className="flex w-full max-w-sm overflow-hidden rounded-full gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email Address"
                className="bg-[#18181b] text-white px-5 py-4 outline-none flex-grow text-sm placeholder:text-[#52525b] border border-transparent focus:border-[#27272a] transition-colors rounded-lg"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-8 py-4 text-sm font-bold tracking-widest transition-opacity hover:opacity-90 rounded-lg"
              >
                <HoverText>JOIN</HoverText>
              </button>
            </form>
          </div>

          {/* Right Column (Links) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:mt-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-[#52525b] mb-6 font-mono font-medium">
                Facilities
              </span>
              <ul className="flex flex-col gap-4 text-sm text-[#x1a1aa] text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <HoverText>Lagos</HoverText>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <HoverText>London</HoverText>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <HoverText>New York</HoverText>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <HoverText>Tokyo</HoverText>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <HoverText>Berlin</HoverText>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-[#52525b] mb-6 font-mono font-medium">
                Programs
              </span>
              <ul className="flex flex-col gap-4 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <HoverText>High Performance</HoverText>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <HoverText>Recovery</HoverText>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <HoverText>Endurance</HoverText>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <HoverText>Private</HoverText>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-[#52525b] mb-6 font-mono font-medium">
                Company
              </span>
              <ul className="flex flex-col gap-4 text-sm text-gray-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    <HoverText>About</HoverText>
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <HoverText>Careers</HoverText>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <HoverText>Journal</HoverText>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <HoverText>Contact</HoverText>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section (Copyright & Socials) */}
        <div className="border-t border-[#18181b] pt-8 pb-32 lg:pb-60 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
          <div className="flex gap-6 text-[10px] font-mono tracking-widest text-[#71717a] font-medium uppercase">
            <span>© 2026 GIMIN®</span>
            <a href="#" className="hover:text-white transition-colors">
              <HoverText>Privacy</HoverText>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <HoverText>Terms</HoverText>
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center hover:bg-[#27272a] transition-colors"
            >
              <Instagram
                className="w-[18px] h-[18px] text-[#a1a1aa]"
                strokeWidth={1.5}
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center hover:bg-[#27272a] transition-colors"
            >
              <Facebook
                className="w-[18px] h-[18px] text-[#a1a1aa]"
                strokeWidth={1.5}
              />
            </a>
            <a
              href="https://x.com/chidi_mathaias"
              className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center hover:bg-[#27272a] transition-colors"
            >
              <Twitter
                className="w-[18px] h-[18px] text-[#a1a1aa]"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>

        {/* Giant Background Text */}
        <div className="absolute -bottom-10 left-0 right-0 flex justify-center translate-y-[30%] pointer-events-none select-none overflow-hidden ">
          <span className="text-[21vw] font-bold tracking-tighter text-[#ffffff] leading-none opacity-10 my-12">
            GIMiN
          </span>
        </div>
      </div>
    </footer>
  );
}
