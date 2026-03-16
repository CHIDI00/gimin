const features = [
  {
    name: "Group Sessions",
    foundation: "3x / week",
    performance: "5x / week",
    elite: "Unlimited",
  },
  {
    name: "Programming",
    foundation: "Template",
    performance: "Individualised",
    elite: "Bespoke",
  },
  {
    name: "Performance Testing",
    foundation: "Entry only",
    performance: "Quarterly",
    elite: "Monthly",
  },
  {
    name: "Recovery Suite",
    foundation: "—",
    performance: "✓",
    elite: "✓",
  },
  {
    name: "Nutrition Guidance",
    foundation: "—",
    performance: "✓",
    elite: "✓",
  },
  {
    name: "1-on-1 Coaching",
    foundation: "—",
    performance: "Add-on",
    elite: "Unlimited",
  },
  {
    name: "Competition Prep",
    foundation: "—",
    performance: "—",
    elite: "✓",
  },
  {
    name: "Direct Coach Access",
    foundation: "—",
    performance: "—",
    elite: "✓",
  },
];

export default function FeatureComparison() {
  return (
    <section className="w-full text-white py-20 px-6 sm:px-12 lg:px-24 ">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-700 uppercase text-xs sm:text-[10px] font-bold tracking-[0.2em] mb-4">
            SIDE BY SIDE
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.85] tracking-tight">
            FEATURE COMPARISON
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-4 text-xs font-bold text-zinc-500 uppercase tracking-widest w-[40%]">
                  FEATURE
                </th>
                <th className="py-6 px-4 text-xs font-bold text-zinc-500 uppercase tracking-widest w-[20%] text-center">
                  FOUNDATION
                </th>
                <th className="py-6 px-4 text-xs font-bold text-blue-700 uppercase tracking-widest w-[20%] text-center">
                  PERFORMANCE
                </th>
                <th className="py-6 px-4 text-xs font-bold text-zinc-500 uppercase tracking-widest w-[20%] text-center">
                  ELITE
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={i}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-6 px-4 text-sm font-medium text-zinc-300">
                    {feature.name}
                  </td>
                  <td className="py-6 px-4 text-sm text-center text-zinc-400">
                    {feature.foundation === "—" ? (
                      <span className="text-zinc-600">—</span>
                    ) : feature.foundation === "✓" ? (
                      <span className="text-zinc-400 font-bold text-lg">✓</span>
                    ) : (
                      feature.foundation
                    )}
                  </td>
                  <td className="py-6 px-4 text-sm text-center text-zinc-100 font-medium bg-blue-700/5">
                    {feature.performance === "—" ? (
                      <span className="text-zinc-600">—</span>
                    ) : feature.performance === "✓" ? (
                      <span className="text-zinc-100 font-bold text-lg">✓</span>
                    ) : (
                      feature.performance
                    )}
                  </td>
                  <td className="py-6 px-4 text-sm text-center text-zinc-400">
                    {feature.elite === "—" ? (
                      <span className="text-zinc-600">—</span>
                    ) : feature.elite === "✓" ? (
                      <span className="text-zinc-400 font-bold text-lg">✓</span>
                    ) : (
                      feature.elite
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
