import Hero from "@/components/sections/Home/Hero";
import Philosophy from "@/components/sections/Home/Philosophy";
import CallToAction from "@/components/sections/Home/Pricing/Pricing";
import ProgramStory from "@/components/sections/Home/Program/ProgramStory";
import Team from "@/components/sections/Home/Team";
import Testimonials from "@/components/sections/Home/Testimonial/Testimonial";
import TrainingTeaser from "@/components/sections/Home/TrainingTeaser/TrainingTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <TrainingTeaser />
      <ProgramStory />
      <Testimonials />
      <Team />
      <CallToAction />
    </>
  );
}
