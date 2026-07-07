"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { companies, type Company } from "@/content/content";

// OldTalkies' own brand palette (its design system — not the portfolio's).
const OLDTALKIES_BRAND = {
  navy: "#283747",
  cream: "#EAE6E3",
  olive: "#738063",
  bronze: "#91703F",
};

// Brand chip: portfolio-green for Nirvya, OldTalkies' own colours + Poppins for OldTalkies.
function BrandChip({ company }: { company: Company }) {
  if (company.brand === "oldtalkies") {
    return (
      <span
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] font-semibold"
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
          backgroundColor: OLDTALKIES_BRAND.navy,
          color: OLDTALKIES_BRAND.cream,
        }}
      >
        <span
          className="inline-block w-3 h-3 rounded-full border-2"
          style={{ borderColor: OLDTALKIES_BRAND.bronze }}
          aria-hidden="true"
        />
        {company.name}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-[13px] font-semibold text-accent">
      <span className="text-accent" aria-hidden="true">◆</span>
      {company.name}
    </span>
  );
}

function CompanyCard({ company }: { company: Company }) {
  const isOldTalkies = company.brand === "oldtalkies";

  return (
    <AnimatedSection>
      <motion.article
        className="relative rounded-2xl border border-border bg-bg-subtle p-7 md:p-10 h-full flex flex-col overflow-hidden"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header: role + status */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <span
            className="text-[11px] font-semibold tracking-wider uppercase text-text-4"
            style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
          >
            {company.role}
          </span>
          {company.status && (
            <span
              className="px-2 py-0.5 rounded-full border border-accent/30 text-[10px] font-semibold uppercase tracking-wide text-accent animate-pulse-badge"
              style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
            >
              {company.status}
            </span>
          )}
        </div>

        {/* Brand chip */}
        <div className="mb-4">
          <BrandChip company={company} />
        </div>

        {/* Tagline — serif */}
        <h3
          className="text-[24px] md:text-[30px] font-bold text-text-1 leading-tight tracking-tight mb-5"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          {company.tagline}
        </h3>

        {/* What */}
        <p className="text-[15px] text-text-2 leading-relaxed mb-6">{company.what}</p>

        {/* Product lines */}
        {company.productLines && (
          <div className="space-y-4 mb-6">
            {company.productLines.map((line) => (
              <div key={line.name} className="border-l-2 border-accent/40 pl-4">
                <p className="text-[14px] font-semibold text-text-1 mb-1">{line.name}</p>
                <p className="text-[13px] text-text-3 leading-relaxed">{line.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Bullet points */}
        {company.points && (
          <ul className="space-y-2.5 mb-6">
            {company.points.map((pt, i) => (
              <li key={i} className="flex gap-3 text-[14px] text-text-2 leading-relaxed">
                <span
                  className="mt-[9px] w-1 h-1 rounded-full shrink-0"
                  style={{ backgroundColor: isOldTalkies ? OLDTALKIES_BRAND.olive : "var(--accent)" }}
                  aria-hidden="true"
                />
                {pt}
              </li>
            ))}
          </ul>
        )}

        {/* Why */}
        {company.why && (
          <p className="text-[14px] text-text-3 leading-relaxed italic mb-6 border-t border-border pt-5">
            {company.why}
          </p>
        )}

        {/* Links */}
        {company.links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {company.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border text-[12px] font-medium text-text-2 hover:text-text-1 hover:border-border-strong transition-all"
              >
                {link.label}
                <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </motion.article>
    </AnimatedSection>
  );
}

export default function Companies() {
  return (
    <section id="companies" className="section-gap border-t border-border">
      <div className="container-wide">
        <AnimatedSection>
          <span className="section-label">Companies</span>
          <h2
            className="text-[32px] md:text-[44px] font-bold text-text-1 tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            What I&apos;m founding.
          </h2>
          <p className="text-[15px] text-text-3 max-w-[520px] mb-14">
            Two companies, one thesis: own the layer everyone else builds on.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {companies.map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
