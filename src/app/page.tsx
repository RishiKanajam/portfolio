import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechList from "@/components/TechList";
import Writing from "@/components/Writing";
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
        <Experience />
        <Projects />
        <TechList />
        <Writing />
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
