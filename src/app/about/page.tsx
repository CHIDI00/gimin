import AboutHero from "@/components/sections/About/AboutHero";
import AboutPhilosophy from "@/components/sections/About/AboutPhilosophy";
import AboutPrinciples from "@/components/sections/About/AboutPrinciples";
import AboutCTA from "@/components/sections/About/AboutCTA";

export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <main className="w-full bg-[#050505] min-h-screen text-white">
      <AboutHero />
      <AboutPhilosophy />
      <AboutPrinciples />
      <AboutCTA />
    </main>
  );
}
