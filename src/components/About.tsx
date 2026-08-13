import { Fragment } from "react";
import { about } from "@/content/content";

/*
 * Prose with S4 inline heads — the movement label opens the paragraph rather
 * than sitting in its own left column. The old layout put a mono label in a
 * narrow left rail with the text beside it, which is the templated-editorial
 * pattern this page is trying not to be.
 *
 * The metadata sidebar became a spec row at the foot: it's reference data, and
 * reference data belongs in the same tabular voice as everything else here.
 */

function Emphasis({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-text-1">{part}</strong>
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
        <span className="section-label">About</span>

        <div className="measure">
          {about.movements.map((movement, mi) => (
            <div key={movement.label} className={mi === 0 ? "" : "mt-8"}>
              {movement.paragraphs.map((para, pi) => (
                <p
                  key={pi}
                  className={
                    mi === 0
                      ? "text-text-1 leading-[1.45]"
                      : "text-text-2 leading-[1.7] mt-4 first:mt-0"
                  }
                  style={
                    mi === 0
                      ? {
                          fontFamily: "var(--font-display)",
                          fontSize: "1.5rem",
                          fontWeight: 500,
                          letterSpacing: "-0.015em",
                        }
                      : undefined
                  }
                >
                  {mi !== 0 && pi === 0 && (
                    <span className="head-inline">{movement.label}. </span>
                  )}
                  <Emphasis text={para} />
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Reference data, in the same tabular voice as the rest of the index. */}
        <dl className="idx mt-12 max-w-3xl">
          {about.sidebar.map((line) => {
            const [key, ...rest] = line.split(" · ");
            return (
              <div
                key={line}
                className="idx__row idx__row--tight grid gap-x-8 gap-y-1 sm:grid-cols-[minmax(0,7rem)_minmax(0,1fr)] sm:items-baseline"
              >
                <dt className="label">{key}</dt>
                <dd
                  className="text-text-2 text-[14px]"
                  style={{ fontFamily: "var(--font-outlier)" }}
                >
                  {rest.join(" · ")}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
