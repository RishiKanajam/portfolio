"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, siteConfig, type Project } from "@/content/content";

/*
 * Index-First.
 *
 * The page is a manifest of work: hairline-ruled rows, metadata in mono, prose
 * in the body face. The four leads open into full case studies in place — no
 * separate route, no accordion, nothing to click before you can read.
 *
 * What's deliberately absent:
 *  · Numbered labels (01 / 02 / …). They were ordinal decoration on content
 *    that isn't ordinal, and the number-left / title-right pairing is the most
 *    reliable templated-editorial tell there is.
 *  · Cards. Rows and rules carry the structure instead.
 *  · Scroll reveals on everything. Only the four case-study rows reveal, once
 *    each; the compact rows and spec sheets are simply there when you arrive.
 */

const SERIF = { fontFamily: "var(--font-display)" } as const;

/**
 * Reveal-once on intersection.
 *
 * Toggles a class on the node directly rather than holding React state — this
 * is a visual flag, not data, and re-rendering the row to change its opacity
 * would be work for nothing. Honours prefers-reduced-motion by showing the row
 * immediately, and disconnects after the first hit so nothing keeps observing.
 */
function useRevealOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-in");
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-in");
        obs.disconnect();
      },
      /*
       * Trigger line at 78% of viewport height, on any pixel crossing it.
       *
       * These rows are 700–900px tall, so a percentage threshold is the wrong
       * instrument: 5% of a 900px row is 45px, which fired the reveal while the
       * row's top edge was still grazing the bottom of the screen — the
       * transition then finished off-screen and you never saw it. threshold 0
       * plus a deeper bottom margin means the row's top has to reach the lower
       * quarter, where the reader is actually looking, before anything moves.
       */
      { threshold: 0, rootMargin: "0px 0px -22% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

function StatusMark({ project }: { project: Project }) {
  if (!project.status) return null;
  const live = project.status === "shipped";
  return (
    <span className="inline-flex items-center gap-1.5 label" style={{ color: "var(--muted)" }}>
      <span
        className="w-1 h-1 rounded-full shrink-0"
        style={{ backgroundColor: live ? "var(--signal)" : "var(--faint)" }}
        aria-hidden="true"
      />
      {live ? "Shipped" : project.status === "in-progress" ? "In progress" : "Concept"}
    </span>
  );
}

/** Every project links to real source, or says plainly that there isn't any. */
function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-0">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-t text-[14px]">
          Source
          <ArrowUpRight size={12} className="text-text-4" aria-hidden="true" />
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-t text-[14px]">
          {project.liveLabel ?? "Live"}
          <ArrowUpRight size={12} className="text-text-4" aria-hidden="true" />
        </a>
      )}
      {project.repoNote && (
        <span className="label inline-flex items-center min-h-[44px]">{project.repoNote}</span>
      )}
    </div>
  );
}

function Tech({ items }: { items: string[] }) {
  return (
    <p className="label leading-relaxed" style={{ textTransform: "none", letterSpacing: "0.04em" }}>
      {items.join("  ·  ")}
    </p>
  );
}

// ── Case study ────────────────────────────────────────────────────────────────

function CaseStudy({ project }: { project: Project }) {
  const ref = useRevealOnce<HTMLElement>();

  return (
    <article ref={ref} className="idx__row reveal-row">
      <div className="idx__case">
        {/* Left rail: identity and metadata */}
        <div className="flex flex-col gap-4">
          <h3
            className="text-text-1"
            style={{ ...SERIF, fontSize: "1.65rem", fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.02em" }}
          >
            {project.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <StatusMark project={project} />
            {project.award && (
              <span className="label" style={{ color: "var(--accent)" }}>{project.award}</span>
            )}
            {project.credit && <span className="label">{project.credit}</span>}
          </div>

          <Tech items={project.tech} />
          <Links project={project} />
        </div>

        {/* Right: the reading column. Continuous prose, inline heads. */}
        <div className="measure">
          <p className="text-text-1" style={{ fontSize: "var(--text-md)", lineHeight: 1.6 }}>
            {project.description}
          </p>

          {project.problem && (
            <p className="mt-5 text-text-2 leading-[1.7]">
              <span className="head-inline">The problem. </span>
              {project.problem}
            </p>
          )}

          {project.built && (
            <p className="mt-4 text-text-2 leading-[1.7]">
              <span className="head-inline">What I built. </span>
              {project.built}
            </p>
          )}

          {project.decision && (
            <p className="mt-4 text-text-2 leading-[1.7]">
              <span className="head-inline">One decision. </span>
              <strong className="font-semibold text-text-1">{project.decision.label}.</strong>{" "}
              {project.decision.body}
            </p>
          )}

          {project.caveat && (
            <p className="mt-4 text-text-3 leading-[1.7] text-[15px]">
              <span className="head-inline">Scope, honestly. </span>
              {project.caveat}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

// ── Compact row ───────────────────────────────────────────────────────────────

function CompactRow({ project }: { project: Project }) {
  return (
    <article className="idx__row idx__row--tight">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-x-10">
        <div className="flex flex-col gap-2">
          <h3
            className="text-text-1"
            style={{ ...SERIF, fontSize: "1.15rem", fontWeight: 600, lineHeight: 1.25, letterSpacing: "-0.015em" }}
          >
            {project.title}
          </h3>
          <div className="lg:hidden"><Tech items={project.tech} /></div>
        </div>

        <div>
          <p className="text-text-2 leading-[1.65] measure">{project.description}</p>
          <div className="hidden lg:block mt-3"><Tech items={project.tech} /></div>
          <div className="mt-1 lg:mt-2"><Links project={project} /></div>
        </div>
      </div>
    </article>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function Projects() {
  const caseStudies = projects.filter((p) => p.caseStudy);
  const alsoBuilt = projects.filter((p) => !p.caseStudy);

  return (
    <section id="projects" className="section-gap">
      <div className="container-wide">
        {/* Index-First opens with a label and one short paragraph. No display type. */}
        <span className="section-label">Selected work</span>
        <p className="measure text-text-2 leading-[1.7] mb-10 md:mb-14">
          Four of these get the full treatment: the problem, the build, and the
          one decision worth remembering. Everything else is listed underneath.
          Each entry links to source, or says why it can&rsquo;t.
        </p>

        <div className="idx">
          {caseStudies.map((project) => (
            <CaseStudy key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-14 md:mt-20">
          <span className="label">Also built</span>
          <div className="idx mt-4">
            {alsoBuilt.map((project) => (
              <CompactRow key={project.title} project={project} />
            ))}
          </div>
        </div>

        <p className="mt-8">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="link-t text-[14px]">
            The rest of it on GitHub
            <ArrowUpRight size={13} className="text-text-4" aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}
