import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { ArchitectureSection } from "@/components/sections/architecture";
import { OutcomesSection } from "@/components/sections/outcomes";
import { UseCasesSection } from "@/components/sections/use-cases";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { RegisterSection } from "@/components/sections/register";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ArchitectureSection />
        <OutcomesSection />
        <UseCasesSection />
        <HowItWorksSection />
        <RegisterSection />
      </main>
      <Footer />
    </div>
  );
}
