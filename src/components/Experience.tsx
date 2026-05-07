"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { experience } from "@/content/content";

function TechTag({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 rounded-full border border-border bg-surface text-[11px] font-medium text-text-3">
      {label}
    </span>
  );
}

// Visual panel — numbered accent block that flips sides per row
function NumberPanel({ index }: { index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="relative h-full min-h-[220px] rounded-2xl bg-bg-subtle border border-border flex items-center justify-center overflow-hidden">
      {/* Large faded number */}
      <span
        className="absolute text-[120px] font-bold font-[var(--font-mono)] leading-none select-none"
        style={{ color: "var(--border-strong)" }}
        aria-hidden="true"
      >
        {num}
      </span>
      {/* Small accent label */}
      <span className="relative text-[11px] font-semibold text-accent tracking-[0.12em] uppercase z-10">
        Role {num}
      </span>
    </div>
  );
}

interface ExperienceCardProps {
  item: (typeof experience)[number];
  index: number;
}

function ExperienceCard({ item, index }: ExperienceCardProps) {
  const isEven = index % 2 === 0;

  const ContentBlock = (
    <div className="flex flex-col justify-center h-full">
      {/* Company + dates */}
      <div className="mb-4">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-[13px] font-semibold text-accent">{item.company}</span>
          {item.current && (
            <span className="inline-flex items-center gap-1 text-[11px] text-dot-green font-medium">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-dot-green opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-dot-green" />
              </span>
              Current
            </span>
          )}
        </div>
        <h3 className="text-[20px] md:text-[22px] font-bold text-text-1 leading-snug mb-1">
          {item.role}
        </h3>
        <p className="text-[13px] text-text-4 font-[var(--font-mono)]">{item.period}</p>
      </div>

      {/* Bullets */}
      <ul className="space-y-2.5 mb-5">
        {item.bullets.map((b, j) => (
          <li key={j} className="flex gap-3 text-[14px] md:text-[15px] text-text-2 leading-relaxed">
            <span className="mt-2 w-1 h-1 rounded-full bg-accent/50 shrink-0" aria-hidden="true" />
            {b}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      {item.tech && (
        <div className="flex flex-wrap gap-2">
          {item.tech.map((t) => <TechTag key={t} label={t} />)}
        </div>
      )}
    </div>
  );

  return (
    <AnimatedSection delay={index * 0.06}>
      <motion.div
        className="rounded-2xl border border-border bg-bg-subtle p-5 sm:p-6 md:p-8"
        whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
        transition={{ duration: 0.2 }}
      >
        {/*
         * Desktop: 2-col alternating (content | panel or panel | content)
         * Mobile:  single column, panel always hidden so content is full-width
         */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {isEven ? (
            <>
              <div>{ContentBlock}</div>
              <div className="hidden md:block"><NumberPanel index={index} /></div>
            </>
          ) : (
            <>
              <div className="hidden md:block"><NumberPanel index={index} /></div>
              <div>{ContentBlock}</div>
            </>
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
          <h2 className="text-[32px] md:text-[42px] font-bold text-text-1 tracking-tight leading-tight mb-12">
            Where I&apos;ve worked.
          </h2>
        </AnimatedSection>

        <div className="space-y-5">
          {experience.map((item, i) => (
            <ExperienceCard key={item.role} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
