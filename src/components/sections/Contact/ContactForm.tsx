"use client";

import Image from "next/image";
import { useState } from "react";
import HoverText from "@/components/ui/HoverText";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full">
      <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8 mt-2">
        SEND A MESSAGE
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#111] border border-white/5 p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-700 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[#111] border border-white/5 p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-700 transition-colors"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full bg-[#111] border border-white/5 p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-700 transition-colors"
        />

        <textarea
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full bg-[#111] border border-white/5 p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-700 transition-colors resize-none mb-8"
        />

        <button
          type="submit"
          className="group w-auto sm:w-auto bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors rounded-full"
        >
          <HoverText>SEND MESSAGE</HoverText>

          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </form>

      <div className="relative w-full h-[300px] mt-10 overflow-hidden bg-[#111]">
        <Image
          src="/scatteredImages/scatter-0.png"
          alt="Contact Support"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out"
        />
      </div>
    </div>
  );
}
