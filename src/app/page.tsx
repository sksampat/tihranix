import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { WhyMattersSection } from "@/components/sections/why-matters";
import { HowTihranixWorksSection } from "@/components/sections/how-tihranix-works";
import { StrategicPillarsSection } from "@/components/sections/strategic-pillars";
import { WedgePlatformSection } from "@/components/sections/wedge-platform";
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
        <HowTihranixWorksSection />
        <StrategicPillarsSection />
        <WedgePlatformSection />
        <EnterpriseTrustSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
