import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Companies from "@/components/Companies";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechList from "@/components/TechList";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import IntelligenceBar from "@/components/IntelligenceBar";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        {/* Projects lead: an engineer clicking through from a CV starts here. */}
        <Projects />
        <About />
        <Experience />
        <Companies />
        <TechList />
        <Education />
        <Contact />
      </main>
      <Footer />
      {/* Global overlays — not in document flow */}
      <CommandPalette />
      <IntelligenceBar />
    </>
  );
}
