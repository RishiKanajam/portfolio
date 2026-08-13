import { experience } from "@/content/content";

/*
 * F3 · Tabular spec sheet. Period in the left column, role and detail in the
 * right — a CV reads as a table, so it's set as one. The old timeline had a
 * vertical rail with dots and a card per role; the rail was decoration and the
 * cards nested a bordered box inside a bordered section.
 */

export default function Experience() {
  return (
    <section id="experience" className="section-gap border-t border-border">
      <div className="container-wide">
        <span className="section-label">Experience</span>

        <div className="idx mt-8">
          {experience.map((item) => (
            <div key={`${item.company}-${item.role}`} className="idx__row">
              {/*
                Single column. The period used to sit in its own left column
                with the role heading beside it. A mono-caps label to the left
                of a heading on the same row is the templated-editorial tell
                gate 54 exists to catch. It stacks above the heading instead.
              */}
              <div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                  <span className="label tnum whitespace-nowrap">{item.period}</span>
                  {item.current && (
                    <span
                      className="label inline-flex items-center gap-1.5"
                      style={{ color: "var(--accent)" }}
                    >
                      <span
                        className="status-dot inline-block w-1 h-1 rounded-full"
                        style={{ backgroundColor: "var(--accent)" }}
                        aria-hidden="true"
                      />
                      Current
                    </span>
                  )}
                </div>

                <div>
                  <h3
                    className="text-text-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      lineHeight: 1.3,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {item.role}
                  </h3>
                  <p className="label mt-1" style={{ color: "var(--muted)" }}>
                    {item.company}
                  </p>

                  <ul className="mt-4 measure space-y-2.5">
                    {item.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex gap-3 text-text-2 leading-[1.65] text-[15px]">
                        <span
                          className="mt-[0.7em] w-2 h-px shrink-0"
                          style={{ backgroundColor: "var(--rule-2)" }}
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {item.tech && item.tech.length > 0 && (
                    <p
                      className="label mt-4 leading-relaxed"
                      style={{ textTransform: "none", letterSpacing: "0.04em" }}
                    >
                      {item.tech.join("  ·  ")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
