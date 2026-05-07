import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Experience from "@/components/Experience";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <Marquee />
        <Experience />
        <OpenSource />
        <Projects />
        <Writing />
        <Education />
        {/* TODO: testimonials section — add when LinkedIn recommendations are available */}
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
    </>
  );
}
