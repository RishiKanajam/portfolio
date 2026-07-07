"use client";

import { Fragment } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { about } from "@/content/content";

// Parse **bold** spans in the movement copy and render them with accent emphasis.
function Emphasis({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-text-1">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

export default function About() {
  return (
    <section id="about" className="section-gap border-t border-border">
      <div className="container-wide">
        <AnimatedSection>
          <span className="section-label">About</span>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-x-16 gap-y-12 mt-4">
          {/* Left — three movements */}
          <div className="max-w-[680px]">
            {about.movements.map((movement, mi) => (
              <AnimatedSection key={movement.label} delay={mi * 0.08}>
                <div className={mi === 0 ? "" : "mt-14"}>
                  {/* Movement label — mono footnote marker */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-[11px] font-semibold tracking-wider uppercase text-accent"
                      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
                    >
                      {String(mi + 1).padStart(2, "0")} · {movement.label}
                    </span>
                    <span className="flex-1 h-px bg-border" aria-hidden="true" />
                  </div>

                  {movement.paragraphs.map((para, pi) => (
                    <p
                      key={pi}
                      className={
                        mi === 0
                          ? "text-[21px] md:text-[26px] leading-[1.5] text-text-2 tracking-tight"
                          : "text-[16px] md:text-[17px] leading-[1.7] text-text-2 mb-4 last:mb-0"
                      }
                      style={
                        mi === 0
                          ? { fontFamily: "var(--font-fraunces), Georgia, serif" }
                          : undefined
                      }
                    >
                      <Emphasis text={para} />
                    </p>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Right — sticky mono metadata sidebar */}
          <AnimatedSection delay={0.1}>
            <div className="lg:sticky lg:top-[100px]">
              <ul className="space-y-4 border-l border-border pl-5">
                {about.sidebar.map((line) => {
                  const [key, ...rest] = line.split(" · ");
                  return (
                    <li key={line} className="flex flex-col gap-0.5">
                      <span
                        className="text-[15px] leading-snug text-text-2"
                        style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
                      >
                        <span className="text-text-4">{key}</span>
                        {rest.length > 0 && (
                          <span className="text-text-3"> · {rest.join(" · ")}</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
