import AnimatedSection from "@/components/AnimatedSection";
import { certifications, education, publications } from "@/content/content";
import { GraduationCap, Award, FileText } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-gap border-t border-border">
      <div className="container-wide">
        <AnimatedSection>
          <span className="section-label">Background</span>
          <h2 className="text-[32px] md:text-[42px] font-bold text-text-1 tracking-tight leading-tight mb-12">
            Credentials.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Certifications */}
          <AnimatedSection delay={0.06}>
            <div className="flex items-center gap-2 mb-5">
              <Award size={16} className="text-accent" />
              <h3 className="text-[12px] font-semibold text-text-4 uppercase tracking-widest">
                Certifications
              </h3>
            </div>
            <ul className="space-y-5">
              {certifications.map((cert) => (
                <li key={cert.title} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true"/>
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
              <GraduationCap size={16} className="text-accent" />
              <h3 className="text-[12px] font-semibold text-text-4 uppercase tracking-widest">
                Education
              </h3>
            </div>
            <ul className="space-y-5">
              {education.map((edu) => (
                <li key={edu.degree} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true"/>
                  <div>
                    <p className="text-[15px] font-semibold text-text-1 leading-snug">{edu.degree}</p>
                    <p className="text-[12px] text-text-4 mt-0.5">
                      {edu.institution} · {edu.period}
                    </p>
                    {edu.location && (
                      <p className="text-[11px] text-text-4/70 mt-0.5">{edu.location}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Research */}
          <AnimatedSection delay={0.14}>
            <div className="flex items-center gap-2 mb-5">
              <FileText size={16} className="text-accent" />
              <h3 className="text-[12px] font-semibold text-text-4 uppercase tracking-widest">
                Research
              </h3>
            </div>
            <ul className="space-y-5">
              {publications.map((pub) => (
                <li key={pub.title} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true"/>
                  <div>
                    {pub.url ? (
                      <a href={pub.url} target="_blank" rel="noopener noreferrer"
                        className="text-[15px] font-semibold text-text-1 leading-snug hover:text-accent transition-colors">
                        {pub.title}
                      </a>
                    ) : (
                      <p className="text-[15px] font-semibold text-text-1 leading-snug">{pub.title}</p>
                    )}
                    <p className="text-[12px] text-text-4 mt-0.5">{pub.venue} · {pub.year}</p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
