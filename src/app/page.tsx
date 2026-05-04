import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { RoiSection } from "@/components/sections/roi";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { PersonaSection } from "@/components/sections/persona";
import { ExpansionSection } from "@/components/sections/expansion";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { RegisterSection } from "@/components/sections/register";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <RoiSection />
        <HowItWorksSection />
        <PersonaSection />
        <ExpansionSection />
        <FinalCtaSection />
        <RegisterSection />
      </main>
      <Footer />
    </div>
  );
}
