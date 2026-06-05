import AnimatedSection from "@/components/AnimatedSection";
import { certifications, education } from "@/content/content";
import { GraduationCap, Award, FlaskConical } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-gap border-t border-border">
      <div className="container-wide">
        <AnimatedSection>
          <span className="section-label">Background</span>
          <h2
            className="text-[32px] md:text-[44px] font-bold text-text-1 tracking-tight leading-tight mb-12"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Credentials.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Certifications */}
          <AnimatedSection delay={0.06}>
            <div className="flex items-center gap-2 mb-5">
              <Award size={15} className="text-accent" aria-hidden="true" />
              <h3
                className="text-[11px] font-semibold text-text-4 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
              >
                Certifications
              </h3>
            </div>
            <ul className="space-y-5">
              {certifications.map((cert) => (
                <li key={cert.title} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-[15px] font-semibold text-text-1 leading-snug">{cert.title}</p>
                    <p className="text-[12px] text-text-4 mt-0.5">
                      {cert.issuer}{cert.year ? ` · ${cert.year}` : ""}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection delay={0.10}>
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap size={15} className="text-accent" aria-hidden="true" />
              <h3
                className="text-[11px] font-semibold text-text-4 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
              >
                Education
              </h3>
            </div>
            <ul className="space-y-5">
              {education.map((edu) => (
                <li key={edu.degree} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-[15px] font-semibold text-text-1 leading-snug">{edu.degree}</p>
                    <p className="text-[12px] text-text-4 mt-0.5">
                      {edu.institution} · {edu.period}
                    </p>
                    {edu.location && (
                      <p className="text-[11px] text-text-4/60 mt-0.5">{edu.location}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Research */}
          <AnimatedSection delay={0.14}>
            <div className="flex items-center gap-2 mb-5">
              <FlaskConical size={15} className="text-accent" aria-hidden="true" />
              <h3
                className="text-[11px] font-semibold text-text-4 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
              >
                Research
              </h3>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[15px] font-semibold text-text-1 leading-snug">
                    Measuring Deception in LLMs Across Social Deduction Games
                  </p>
                  <p className="text-[12px] text-text-4 mt-0.5">
                    In preparation — targeting arXiv · 2025
                  </p>
                </div>
              </li>
            </ul>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
