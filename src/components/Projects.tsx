"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { projects, type Project } from "@/content/content";

// ── Status badge ──────────────────────────────────────────────────────────────

const STATUS_LABELS: Record<string, string> = {
  "in-progress": "In progress",
  shipped: "Shipped",
  concept: "Concept",
};

const STATUS_COLORS: Record<string, string> = {
  "in-progress": "text-yellow-500 border-yellow-500/30 bg-yellow-500/10",
  shipped: "text-dot-green border-dot-green/30 bg-dot-green/10",
  concept: "text-text-3 border-border bg-bg-subtle",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-semibold tracking-wide uppercase ${STATUS_COLORS[status] ?? STATUS_COLORS.concept} ${status === "in-progress" ? "animate-pulse-badge" : ""}`}
      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
    >
      {STATUS_LABELS[status] ?? status}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-2">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub — ${project.shortTitle}`}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-text-3 hover:text-text-1 hover:border-border-strong transition-all"
        >
          <GitBranch size={13} />
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live — ${project.shortTitle}`}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-text-3 hover:text-text-1 hover:border-border-strong transition-all"
        >
          <ExternalLink size={13} />
        </a>
      )}
    </div>
  );
}

function TechTag({ label }: { label: string }) {
  return (
    <span
      className="px-2 py-0.5 rounded-md border border-border text-[11px] text-text-3"
      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
    >
      {label}
    </span>
  );
}

// ── Sticky scene (01 + 02) ───────────────────────────────────────────────────

function StickyScene({ project }: { project: Project }) {
  return (
    <div className="relative md:grid md:grid-cols-[1fr_1fr] md:gap-16 py-12 md:py-0">
      <div className="md:sticky md:top-[100px] md:self-start md:pb-24 mb-6 md:mb-0">
        <AnimatedSection>
          <div
            className="text-[12px] text-text-4 mb-4 font-semibold"
            style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
          >
            {project.number}
          </div>
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full border border-accent/30 text-[11px] text-accent font-medium"
                  style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h3
            className="text-[32px] md:text-[46px] font-bold text-text-1 leading-tight tracking-tight mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            {project.title}
          </h3>
          {project.award && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 mb-4">
              <span className="text-[12px] font-semibold text-accent">{project.award}</span>
            </div>
          )}
          {project.status && (
            <div className="mb-6">
              <StatusBadge status={project.status} />
            </div>
          )}
          <ProjectLinks project={project} />
        </AnimatedSection>
      </div>

      <div className="flex flex-col gap-5 md:py-24">
        <AnimatedSection delay={0.1}>
          <p className="text-[16px] md:text-[17px] text-text-2 leading-relaxed">
            {project.description}
          </p>
          {project.longDescription && (
            <p className="text-[15px] text-text-3 leading-relaxed mt-3">
              {project.longDescription}
            </p>
          )}
        </AnimatedSection>
        {project.tech.length > 0 && (
          <AnimatedSection delay={0.15}>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((t) => <TechTag key={t} label={t} />)}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}

// ── Grid card (03–10) ────────────────────────────────────────────────────────

function GridCard({ project, wide }: { project: Project; wide: boolean }) {
  return (
    <AnimatedSection className="h-full">
      <motion.div
        className="relative rounded-2xl border border-border bg-bg-subtle p-6 md:p-7 h-full flex flex-col group"
        whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.10)" }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-start justify-between mb-4 gap-3">
          <span
            className="text-[12px] text-text-4 font-semibold shrink-0"
            style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
          >
            {project.number}
          </span>
          <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
            {project.award && (
              <span className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-semibold text-accent">
                {project.award}
              </span>
            )}
            {project.status && <StatusBadge status={project.status} />}
          </div>
        </div>

        <h3
          className="text-[19px] md:text-[21px] font-bold text-text-1 leading-snug mb-3"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          {project.title}
        </h3>

        <p className="text-[14px] text-text-2 leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, wide ? 8 : 5).map((t) => <TechTag key={t} label={t} />)}
            {project.tech.length > (wide ? 8 : 5) && (
              <span className="px-2 py-0.5 rounded-md border border-border text-[11px] text-text-4">
                +{project.tech.length - (wide ? 8 : 5)}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between gap-3 mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full border border-accent/20 text-[10px] text-accent font-medium"
                style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <ProjectLinks project={project} />
        </div>

        <ArrowUpRight
          size={13}
          className="absolute top-5 right-[72px] text-text-4 opacity-0 group-hover:opacity-60 transition-opacity"
          aria-hidden="true"
        />
      </motion.div>
    </AnimatedSection>
  );
}

// ── Asymmetric grid ───────────────────────────────────────────────────────────

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((project, i) => {
        const wide = i % 3 === 0;
        return (
          <div key={project.number} className={`flex flex-col ${wide ? "lg:col-span-2" : "lg:col-span-1"}`}>
            <GridCard project={project} wide={wide} />
          </div>
        );
      })}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function Projects() {
  const stickyProjects = projects.filter((p) => p.stickyScene);
  const gridProjects = projects.filter((p) => !p.stickyScene);

  return (
    <section id="projects" className="section-gap border-t border-border">
      <div className="container-wide">
        <AnimatedSection>
          <span className="section-label">Projects</span>
          <h2
            className="text-[32px] md:text-[44px] font-bold text-text-1 tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            What I&apos;ve built.
          </h2>
          <p className="text-[15px] text-text-3 max-w-[520px] mb-16">
            Research, products, and experiments — numbered by impact.
          </p>
        </AnimatedSection>

        <div className="divide-y divide-border mb-16">
          {stickyProjects.map((project) => (
            <StickyScene key={project.number} project={project} />
          ))}
        </div>

        <div className="border-t border-border pt-12">
          <div
            className="text-[11px] text-text-4 font-semibold mb-8 tracking-wider uppercase"
            style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
          >
            More work
          </div>
          <ProjectGrid items={gridProjects} />
        </div>
      </div>
    </section>
  );
}
