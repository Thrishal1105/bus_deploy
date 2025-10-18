import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Download from "@/components/Download";
import Insights from "@/components/Insights";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="tech-stack">
        <TechStack />
      </div>
      <div id="features">
        <Features />
      </div>
      <Screenshots />
      <div id="download">
        <Download />
      </div>
      <Insights />
      <FAQ />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
