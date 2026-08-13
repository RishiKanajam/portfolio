import { stats } from "@/content/content";

/*
 * F3 · Tabular spec sheet.
 *
 * Was four boxed tiles in a 2×2 grid — big mono numbers of wildly different
 * lengths, each in its own cell, none of them lining up with anything. As a
 * spec sheet it reads the way the rest of the index reads: key, value, note,
 * hairline between rows, one alignment down the page.
 *
 * The count-up-on-scroll came out with it. It animated a number the reader
 * could already see, and the page spends its one motion budget on the load.
 */

export default function Stats() {
  return (
    <section id="stats" className="container-wide" aria-label="Facts">
      <dl className="idx">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="idx__row idx__row--tight grid gap-x-8 gap-y-1 sm:grid-cols-[minmax(0,11rem)_minmax(0,10rem)_minmax(0,1fr)] sm:items-baseline"
          >
            <dt className="label" style={{ color: "var(--muted)" }}>
              {stat.label}
            </dt>
            <dd
              className="tnum text-text-1"
              style={{
                fontFamily: "var(--font-outlier)",
                fontSize: "var(--text-base)",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              {stat.value}
            </dd>
            <dd className="text-[14px] text-text-3 leading-snug sm:col-start-3">
              {stat.sublabel}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
