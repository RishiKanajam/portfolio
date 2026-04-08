"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { experience } from "@/content/content";

export default function Experience() {
  return (
    <section id="experience" className="section-gap border-t border-border">
      <div className="container-wide">
        <AnimatedSection>
          <span className="section-label">Experience</span>
          <h2 className="text-[32px] md:text-[40px] font-bold text-text-1 tracking-tight leading-tight mb-12">
            Where I&apos;ve worked.
          </h2>
        </AnimatedSection>

        {/* Each role gets its own AnimatedSection — no stagger wrapper + intermediate div */}
        <div className="relative">
          {/* Vertical timeline line — desktop only */}
          <div
            className="hidden md:block absolute top-0 bottom-0 w-px bg-border"
            style={{ left: "200px" }}
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <AnimatedSection
                key={item.role}
                delay={i * 0.08}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10"
              >
                {/* Left: company + dates */}
                <div className="md:text-right md:pr-10 md:pt-0.5">
                  <p className="text-[14px] font-semibold text-text-2">{item.company}</p>
                  <p className="text-[13px] text-text-4 mt-0.5 tabular-nums">{item.period}</p>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 mt-2 text-[12px] text-dot-green font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute h-full w-full rounded-full bg-dot-green opacity-60" />
                        <span className="relative h-2 w-2 rounded-full bg-dot-green" />
                      </span>
                      Current
                    </span>
                  )}
                </div>

                {/* Right: role + bullets */}
                <div className="md:pl-10 relative">
                  {/* Timeline dot */}
                  <div
                    className="hidden md:block absolute top-2 w-1.5 h-1.5 rounded-full bg-accent"
                    style={{ left: "-3px" }}
                    aria-hidden="true"
                  />
                  <h3 className="text-[18px] font-bold text-text-1 mb-4">{item.role}</h3>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-[15px] text-text-2 leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-accent/50 shrink-0" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
