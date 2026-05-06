import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { InventoryCapitalUrgencySection } from "@/components/sections/inventory-capital-urgency";
import { ProductSection } from "@/components/sections/product";
import { AgenticDecisionSystemSection } from "@/components/sections/agentic-decision-system";
import { OutcomesSection } from "@/components/sections/outcomes";
import { WhyNowSection } from "@/components/sections/why-now";
import { HowItFitsSection } from "@/components/sections/how-it-fits";
import { RoadmapSection } from "@/components/sections/roadmap";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <InventoryCapitalUrgencySection />
        <ProductSection />
        <AgenticDecisionSystemSection />
        <OutcomesSection />
        <WhyNowSection />
        <HowItFitsSection />
        <RoadmapSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
