import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { WhyMattersSection } from "@/components/sections/why-matters";
import { HowTihranixWorksSection } from "@/components/sections/how-tihranix-works";
import { BringIntelligenceSection } from "@/components/sections/bring-intelligence";
import { WhyNowSection } from "@/components/sections/why-now";
import { DesignPartnerSection } from "@/components/sections/design-partner";
import { IntelligenceEngineSection } from "@/components/sections/intelligence-engine";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WhyMattersSection />
        <HowTihranixWorksSection />
        <BringIntelligenceSection />
        <WhyNowSection />
        <DesignPartnerSection />
        <IntelligenceEngineSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
