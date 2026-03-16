"use client";

import { useState } from "react";
import Link from "next/link";
import HoverText from "../ui/HoverText";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none ${isOpen ? "mix-blend-normal" : "mix-blend-difference"}`}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/50 to-transparent mix-blend-normal"></div>

      <div className="text-white text-3xl font-bold tracking-tighter relative z-10 pointer-events-auto">
        <Link href="/">
          GIM<span className="text-blue-600">i</span>N
        </Link>
      </div>

      <ul className="hidden md:flex gap-10 text-white text-xs tracking-[0.2em] font-medium uppercase relative z-10 pointer-events-auto">
        <li>
          <Link href="/" className="hover:text-white/70 transition-colors">
            <HoverText>Home</HoverText>
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-white/70 transition-colors">
            <HoverText>About</HoverText>
          </Link>
        </li>

        <li>
          <Link
            href="/membership"
            className="hover:text-white/70 transition-colors"
          >
            <HoverText>Membership</HoverText>
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-white/70 transition-colors"
          >
            <HoverText>Contact</HoverText>
          </Link>
        </li>
      </ul>

      <div className="hidden md:flex relative z-10 pointer-events-auto">
        <button className="text-white border border-white/30 px-6 py-2.5 text-[10px] uppercase font-bold tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all duration-300">
          <HoverText>Sign in</HoverText>
        </button>
      </div>

      {/* Menu bar icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50 pointer-events-auto"
        aria-label="Toggle menu"
      >
        <div
          className={`h-[.15rem] w-7 bg-white transition-all duration-300 absolute ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}
        ></div>
        <div
          className={`h-[.15rem] w-7 bg-white transition-all duration-300 absolute ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}
        ></div>
      </button>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
    </nav>
  );
}
