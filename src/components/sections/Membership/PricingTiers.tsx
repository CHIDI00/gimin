import Link from "next/link";

const tiers = [
  {
    name: "FOUNDATION",
    price: "89",
    description:
      "For those beginning their strength journey with structure and accountability.",
    features: [
      "3x weekly group sessions",
      "Periodised programming",
      "Movement screening on entry",
      "Access to open gym hours",
      "Community app access",
    ],
    buttonText: "START FOUNDATION →",
    popular: false,
    href: "#",
  },
  {
    name: "PERFORMANCE",
    price: "179",
    description:
      "For intermediate to advanced athletes seeking measurable, data-backed progress.",
    features: [
      "5x weekly group sessions",
      "Individualised programming",
      "Quarterly performance testing",
      "Nutrition guidance",
      "Recovery suite access",
      "Priority booking",
    ],
    buttonText: "GO PERFORMANCE →",
    popular: true,
    href: "#",
  },
  {
    name: "ELITE",
    price: "349",
    description:
      "1-on-1 specialist coaching for competitive athletes and high-performers.",
    features: [
      "Unlimited 1-on-1 coaching",
      "Bespoke periodisation",
      "Weekly performance reviews",
      "Full recovery suite",
      "Sport-specific programming",
      "Competition prep support",
      "Direct coach messaging",
    ],
    buttonText: "APPLY FOR ELITE →",
    popular: false,
    href: "#",
  },
];

export default function PricingTiers() {
  return (
    <section className="w-full  text-white pt-40 pb-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-blue-700 uppercase text-xs sm:text-[10px] font-bold tracking-[0.2em] mb-4">
            PROGRAMS & PRICING
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-6xl font-black uppercase leading-[0.85] tracking-tight mb-6">
            CHOOSE YOUR <br />
            <span className="text-white/40">PROTOCOL.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Three tiers. Zero fluff. Every program is built on progressive
            overload and coached by specialists who have competed at the highest
            level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col h-full bg-[#111] border ${
                tier.popular
                  ? "border-blue-600"
                  : "border-white/10 text-zinc-400"
              } p-8 lg:p-10`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-6 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
                {tier.name}
              </h3>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white leading-none">
                  £{tier.price}
                </span>
                <span className="text-zinc-500 text-sm">/mo</span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-10 h-16">
                {tier.description}
              </p>

              <ul className="flex-1 space-y-4 mb-10">
                {tier.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-sm text-zinc-300"
                  >
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        tier.popular ? "text-blue-700" : "text-blue-700"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`w-full py-4 text-center text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                  tier.popular
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "bg-white text-black hover:bg-neutral-200"
                }`}
              >
                {tier.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
