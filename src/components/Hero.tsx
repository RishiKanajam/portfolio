"use client";

import { ArrowUpRight } from "lucide-react";
import { siteConfig, hero, statusLine } from "@/content/content";

/*
 * Masthead.
 *
 * Index-First proper opens with a plain label and no display type. This page
 * deviates once, deliberately: the through-line is the reason a reader keeps
 * scrolling, so it gets the display face. Everything under it returns to the
 * index voice — mono metadata, hairline rules, links that are just links.
 *
 * No min-height:100vh, no centred column. The masthead is the height of what
 * it contains.
 */

const LINKS = [
  { label: "Email", href: siteConfig.mailtoHref, external: false },
  { label: "CV", href: hero.resumeHref, external: true },
  { label: "GitHub", href: siteConfig.github, external: true },
  { label: "LinkedIn", href: siteConfig.linkedIn, external: true },
];

export default function Hero() {
  return (
    <header className="container-wide pt-24 pb-24 md:pt-32 md:pb-36" aria-label="Introduction">
      {/* Identity strip: name left, place right, hairline between */}
      <div
        className="reveal flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-3 border-b border-border"
        style={{ ["--i" as string]: 0 }}
      >
        <span className="label" style={{ color: "var(--ink-2)" }}>
          Rishi Kanajam &middot; Full-stack &amp; AI engineer
        </span>
        <span className="label">{hero.locationPill}</span>
      </div>

      {/* The statement */}
      <h1
        className="reveal mt-10 md:mt-14 text-text-1 measure-tight"
        style={{
          ["--i" as string]: 1,
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-display-s)",
          fontWeight: 600,
          lineHeight: 1.08,
          letterSpacing: "-0.022em",
        }}
      >
        I build AI systems that know what they don&rsquo;t know.
      </h1>

      <p
        className="reveal mt-6 measure text-text-2"
        style={{ ["--i" as string]: 2, fontSize: "var(--text-md)", lineHeight: 1.65 }}
      >
        {siteConfig.oneLiner}
      </p>

      {/* C3 · typographic links. No boxes, no fills. */}
      <nav
        className="reveal mt-6 flex flex-wrap items-center gap-x-7 gap-y-0"
        style={{ ["--i" as string]: 3 }}
        aria-label="Contact and profiles"
      >
        {LINKS.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="link-t text-[15px]"
          >
            {label}
            <ArrowUpRight size={13} className="text-text-4" aria-hidden="true" />
          </a>
        ))}
      </nav>

      {/* Status: content, not chrome. It used to live in a fixed strip. */}
      <p
        className="reveal mt-8 md:mt-10 pt-3 border-t border-border flex items-start gap-2 label"
        style={{ ["--i" as string]: 4, textTransform: "none", letterSpacing: "0.02em", lineHeight: 1.7 }}
      >
        <span
          className="status-dot mt-[7px] w-1 h-1 rounded-full shrink-0"
          style={{ backgroundColor: "var(--accent)" }}
          aria-hidden="true"
        />
        {statusLine}
      </p>
    </header>
  );
}
