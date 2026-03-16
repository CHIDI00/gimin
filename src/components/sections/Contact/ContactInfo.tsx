import Link from "next/link";

const locations = [
  {
    city: "LAGOS",
    address: "Lekki Phase 2, lekki, Lagos",
    phone: "+234 90 7123 4567",
    hours: "05:00 - 22:00 daily",
  },
  {
    city: "NEW YORK",
    address: "88 Warren St, Tribeca, NY 10007",
    phone: "+1 212 555 0199",
    hours: "05:00 - 23:00 daily",
  },
  {
    city: "TOKYO",
    address: "3-14-1 Roppongi, Minato-ku",
    phone: "+81 3 1234 5678",
    hours: "06:00 - 22:00 daily",
  },
];

const socials = [
  { name: "Instagram", handle: "@gimin.fit", href: "#" },
  { name: "X / Twitter", handle: "@gimin", href: "#" },
  { name: "Facebook", handle: "GIMIN Training", href: "#" },
];

export default function ContactInfo() {
  return (
    <div className="w-full">
      <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8 mt-2">
        OUR LOCATIONS
      </h3>

      <div className="space-y-4 mb-16">
        {locations.map((loc) => (
          <div
            key={loc.city}
            className="group relative bg-[#0a0a0a] border border-white/5 p-6 sm:p-8 hover:border-white/10 transition-colors cursor-pointer"
          >
            <div className="absolute top-8 right-8">
              <svg
                className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>

            <h4 className="text-lg font-black uppercase text-white mb-6">
              {loc.city}
            </h4>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <svg
                  className="w-4 h-4 text-blue-700 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span>{loc.address}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <svg
                    className="w-4 h-4 text-blue-700 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{loc.hours}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <svg
                    className="w-4 h-4 text-blue-700 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5z"
                    />
                  </svg>
                  <span>{loc.phone}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8">
        FOLLOW US
      </h3>

      <div className="border border-white/5 divide-y divide-white/5 mb-16">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors group"
          >
            <div className="flex items-center gap-4 text-sm font-bold text-white">
              {/* Using simple SVG placeholders for social icons */}
              {social.name === "Instagram" && (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              )}
              {social.name === "X / Twitter" && (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              )}
              {social.name === "Facebook" && (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              )}
              {social.name}
            </div>
            <span className="text-xs text-zinc-500 font-mono tracking-wider group-hover:text-white transition-colors">
              {social.handle}
            </span>
          </Link>
        ))}
      </div>

      <div className="bg-[#111] p-6 sm:p-8 flex items-center gap-6">
        <div className="flex-shrink-0">
          <svg
            className="w-6 h-6 text-blue-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">
            GENERAL ENQUIRIES
          </p>
          <a
            href="mailto:hello@gimin.com"
            className="text-white font-bold hover:text-blue-700 transition-colors"
          >
            hello@gimin.com
          </a>
        </div>
      </div>
    </div>
  );
}
