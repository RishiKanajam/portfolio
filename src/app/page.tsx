import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <OpenSource />
        <Projects />
        <Writing />
        <Publications />
        <Contact />
      </main>
      <Footer />
      {/* Floating AI chat widget — bottom-right, no page section */}
      <AIChatbot />
    </>
  );
}
