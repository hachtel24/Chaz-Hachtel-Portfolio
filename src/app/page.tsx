import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhatIDo from "@/components/WhatIDo";
import WorkPreview from "@/components/WorkPreview";
import StatsSection from "@/components/StatsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-white selection:bg-accent selection:text-primary">
      <Navigation />
      <Hero />
      <Marquee />
      <WhatIDo />
      <WorkPreview />
      <StatsSection />
      <CTA />
      <Footer />
    </main>
  );
}
