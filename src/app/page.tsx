import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { RoiSection } from "@/components/sections/roi";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { AgenticSystemSection } from "@/components/sections/agentic-system";
import { PersonaSection } from "@/components/sections/persona";
import { ExpansionSection } from "@/components/sections/expansion";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { ContactSection } from "@/components/sections/contact";

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
        <AgenticSystemSection />
        <PersonaSection />
        <ExpansionSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
