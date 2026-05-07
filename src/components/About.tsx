import AnimatedSection from "@/components/AnimatedSection";
import { about } from "@/content/content";

export default function About() {
  return (
    <section id="about" className="section-gap border-t border-border">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: heading */}
          <div>
            <AnimatedSection>
              <span className="section-label">About</span>
              <h2 className="text-[32px] md:text-[42px] font-bold text-text-1 tracking-tight leading-tight">
                Building AI that matters.
              </h2>
            </AnimatedSection>
          </div>

          {/* Right: paragraphs */}
          <AnimatedSection delay={0.08} className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] md:text-[17px] text-text-2 leading-relaxed">
                {p}
              </p>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
