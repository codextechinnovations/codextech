import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { StatsBar } from "../components/StatsBar";
import { Services } from "../components/Services";
import { WorkflowSection } from "../components/WorkflowSection";
import { WhyCodeX } from "../components/WhyCodeX";
import { TechStack } from "../components/TechStack";
import { Industries } from "../components/Industries";
import { OurProducts } from "../components/OurProducts";
import { Testimonials } from "../components/Testimonials";
import { CaseStudies } from "../components/CaseStudies";
import { TeamCredentials } from "../components/TeamCredentials";
import { FAQ } from "../components/FAQ";
import { CTABand } from "../components/CTABand";
import { Footer } from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

export default function HomePage() {
  useReveal();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [searchParams]);

  return (
    <div style={{ background: "#0b1929", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <WorkflowSection />
        <WhyCodeX />
        <TechStack />
        <Industries />
        <OurProducts />
        <Testimonials />
        <CaseStudies />
        <TeamCredentials />
        <FAQ />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
