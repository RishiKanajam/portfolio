import AnimatedSection from "@/components/AnimatedSection";
import { certifications, publications } from "@/content/content";

export default function Publications() {
  return (
    <section id="publications" className="section-gap border-t border-border">
      <div className="container-wide">
        <AnimatedSection>
          <span className="section-label">Publications &amp; Certifications</span>
          <h2 className="text-[32px] md:text-[40px] font-bold text-text-1 tracking-tight leading-tight mb-10">
            Credentials.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
          {/* Certifications */}
          <AnimatedSection delay={0.06}>
            <h3 className="text-[13px] font-semibold text-text-4 uppercase tracking-widest mb-5">
              Certifications
            </h3>
            <ul className="space-y-5">
              {certifications.map((cert) => (
                <li key={cert.title} className="flex items-start gap-4">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true"/>
                  <div>
                    <p className="text-[16px] font-semibold text-text-1 leading-snug">{cert.title}</p>
                    <p className="text-[13px] text-text-4 mt-0.5">
                      {cert.issuer}{cert.year ? ` · ${cert.year}` : ""}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Publications */}
          <AnimatedSection delay={0.1}>
            <h3 className="text-[13px] font-semibold text-text-4 uppercase tracking-widest mb-5">
              Published Research
            </h3>
            <ul className="space-y-5">
              {publications.map((pub) => (
                <li key={pub.title} className="flex items-start gap-4">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true"/>
                  <div>
                    {pub.url ? (
                      <a href={pub.url} target="_blank" rel="noopener noreferrer"
                        className="text-[16px] font-semibold text-text-1 leading-snug hover:text-accent transition-colors">
                        {pub.title}
                      </a>
                    ) : (
                      <p className="text-[16px] font-semibold text-text-1 leading-snug">{pub.title}</p>
                    )}
                    <p className="text-[13px] text-text-4 mt-0.5">{pub.venue} · {pub.year}</p>
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
