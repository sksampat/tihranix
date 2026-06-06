import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { WhyMattersSection } from "@/components/sections/why-matters";
import { OutcomeAgentsSection } from "@/components/sections/outcome-agents";
import { HowTihranixWorksSection } from "@/components/sections/how-tihranix-works";
import { DiscoveryLayerSection } from "@/components/sections/discovery-layer";
import { IntelligenceEngineSection } from "@/components/sections/intelligence-engine";
import { FutureVisionSection } from "@/components/sections/future-vision";
import { EnterpriseTrustSection } from "@/components/sections/enterprise-trust";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WhyMattersSection />
        <OutcomeAgentsSection />
        <HowTihranixWorksSection />
        <DiscoveryLayerSection />
        <IntelligenceEngineSection />
        <FutureVisionSection />
        <EnterpriseTrustSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
