import AnimatedSection from "@/components/AnimatedSection";
import { about } from "@/content/content";
import {
  SiPython, SiCplusplus, SiJavascript,
  SiPytorch, SiTensorflow, SiFastapi,
  SiMongodb, SiPostgresql, SiDocker, SiLangchain,
} from "react-icons/si";
import type { IconType } from "react-icons";

// Brand color — works on both the light bg-subtle chip background and dark surface
const TECH_ICONS: Record<string, { Icon: IconType; color: string }> = {
  Python:     { Icon: SiPython,     color: "#3776AB" },
  "C++":      { Icon: SiCplusplus,  color: "#00599C" },
  JavaScript: { Icon: SiJavascript, color: "#D4B800" },
  PyTorch:    { Icon: SiPytorch,    color: "#EE4C2C" },
  TensorFlow: { Icon: SiTensorflow, color: "#FF6F00" },
  LangChain:  { Icon: SiLangchain,  color: "#1C7C5C" },
  FastAPI:    { Icon: SiFastapi,    color: "#009688" },
  MongoDB:    { Icon: SiMongodb,    color: "#47A248" },
  PostgreSQL: { Icon: SiPostgresql, color: "#336791" },
  Docker:     { Icon: SiDocker,     color: "#2496ED" },
};

const FALLBACK_COLORS: Record<string, string> = {
  SQL:   "#4479A1",
  AWS:   "#FF9900",
  GCP:   "#4285F4",
  Azure: "#0089D6",
};

function TechChip({ label }: { label: string }) {
  const tech = TECH_ICONS[label];
  const dotColor = FALLBACK_COLORS[label];

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface border border-border text-[13px] font-medium text-text-2 transition-all duration-200 hover:border-border-strong hover:scale-[1.04] active:scale-[0.98]">
      {tech ? (
        <tech.Icon size={14} style={{ color: tech.color, flexShrink: 0 }} aria-hidden="true"/>
      ) : dotColor ? (
        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: dotColor }} aria-hidden="true"/>
      ) : null}
      {label}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section-gap border-t border-border">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">

          {/* Left: bio */}
          <div>
            <AnimatedSection>
              <span className="section-label">About</span>
              <h2 className="text-[32px] md:text-[40px] font-bold text-text-1 tracking-tight leading-tight mb-6">
                Building AI that matters.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.06} className="space-y-4">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-[16px] md:text-[17px] text-text-2 leading-relaxed">{p}</p>
              ))}
            </AnimatedSection>
          </div>

          {/* Right: tech chips */}
          <AnimatedSection delay={0.1}>
            <p className="section-label">Tech I work with</p>
            <div className="flex flex-wrap gap-2.5">
              {about.tech.map((chip) => (
                <TechChip key={chip} label={chip} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
