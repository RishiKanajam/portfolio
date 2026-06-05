"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { experience } from "@/content/content";

function TechTag({ label }: { label: string }) {
  return (
    <span
      className="px-2.5 py-1 rounded-md border border-border bg-transparent text-[11px] font-medium text-text-3"
      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
    >
      {label}
    </span>
  );
}

interface ExperienceCardProps {
  item: (typeof experience)[number];
  index: number;
}

function ExperienceCard({ item, index }: ExperienceCardProps) {
  return (
    <AnimatedSection delay={index * 0.06}>
      <motion.div
        className="relative pl-0 md:pl-12"
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Vertical timeline line — desktop only */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
        {/* Timeline dot */}
        <div className="hidden md:flex absolute -left-[4.5px] top-[26px] w-[9px] h-[9px] rounded-full border-2 border-accent bg-bg items-center justify-center" aria-hidden="true" />

        <div className="py-7 border-t border-border first:border-t-0 md:border-t-0 md:py-8">
          {/* Top row: company + period */}
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-semibold text-accent">{item.company}</span>
              {item.current && (
                <span className="inline-flex items-center gap-1 text-[11px] text-dot-green font-medium">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-dot-green opacity-60" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-dot-green" />
                  </span>
                  Now
                </span>
              )}
            </div>
            <span
              className="text-[12px] text-text-4 shrink-0"
              style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
            >
              {item.period}
            </span>
          </div>

          {/* Role */}
          <h3
            className="text-[19px] md:text-[21px] font-bold text-text-1 leading-snug mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            {item.role}
          </h3>

          {/* Bullets */}
          <ul className="space-y-2 mb-4">
            {item.bullets.map((b, j) => (
              <li key={j} className="flex gap-3 text-[14px] md:text-[15px] text-text-2 leading-relaxed">
                <span className="mt-[9px] w-1 h-1 rounded-full bg-accent/50 shrink-0" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          {item.tech && item.tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {item.tech.map((t) => <TechTag key={t} label={t} />)}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-gap border-t border-border">
      <div className="container-wide">
        <AnimatedSection>
          <span className="section-label">Experience</span>
          <h2
            className="text-[32px] md:text-[44px] font-bold text-text-1 tracking-tight leading-tight mb-14"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Where I&apos;ve worked.
          </h2>
        </AnimatedSection>

        <div className="md:pl-4">
          {experience.map((item, i) => (
            <ExperienceCard key={`${item.company}-${item.role}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
