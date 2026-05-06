import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { ProductSection } from "@/components/sections/product";
import { OutcomesSection } from "@/components/sections/outcomes";
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
        <ProductSection />
        <OutcomesSection />
        <HowItFitsSection />
        <RoadmapSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
