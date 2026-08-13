import { ArrowUpRight } from "lucide-react";
import { companies } from "@/content/content";

/*
 * Two index rows, same voice as the work index.
 *
 * The old version was two large bordered cards, one of which carried a second
 * brand's navy-and-bronze palette and a fourth font (Poppins) inside the page.
 * A second design system running inside this one was the loudest inconsistency
 * on the site. OldTalkies keeps its name and its description; it doesn't get to
 * bring its own typography onto this page.
 */

export default function Companies() {
  return (
    <section id="companies" className="section-gap border-t border-border">
      <div className="container-wide">
        <span className="section-label">On my own time</span>

        <div className="idx mt-8">
          {companies.map((company) => (
            <article key={company.name} className="idx__row">
              <div className="idx__case">
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-text-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.35rem",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      letterSpacing: "-0.018em",
                    }}
                  >
                    {company.name}
                  </h3>
                  <p className="label" style={{ color: "var(--muted)" }}>
                    {company.role}
                  </p>
                  {company.status && (
                    <p className="label" style={{ color: "var(--accent)" }}>
                      {company.status}
                    </p>
                  )}

                  {company.links.length > 0 && (
                    <div className="flex flex-wrap items-center gap-x-6">
                      {company.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-t text-[14px]"
                        >
                          {link.label}
                          <ArrowUpRight size={12} className="text-text-4" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="measure">
                  <p className="text-text-1" style={{ fontSize: "var(--text-md)", lineHeight: 1.6 }}>
                    {company.tagline}
                  </p>
                  <p className="mt-3 text-text-2 leading-[1.7]">{company.what}</p>

                  {company.points && (
                    <ul className="mt-4 space-y-2.5">
                      {company.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-text-2 leading-[1.65] text-[15px]">
                          <span
                            className="mt-[0.7em] w-2 h-px shrink-0"
                            style={{ backgroundColor: "var(--rule-2)" }}
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
