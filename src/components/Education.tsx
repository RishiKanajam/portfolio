import { education, certifications } from "@/content/content";

/*
 * Two more spec-sheet blocks. Nothing here needs a card — it's four facts with
 * dates, and dates want a column.
 */

export default function Education() {
  return (
    <section id="education" className="section-gap border-t border-border">
      <div className="container-wide grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="section-label">Education</span>
          <dl className="idx mt-8">
            {education.map((item) => (
              <div key={item.degree} className="idx__row idx__row--tight">
                <dt
                  className="text-text-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    lineHeight: 1.35,
                    letterSpacing: "-0.012em",
                  }}
                >
                  {item.degree}
                </dt>
                <dd className="mt-1.5 text-text-2 text-[15px]">{item.institution}</dd>
                <dd className="label tnum mt-1.5">
                  {item.period}
                  {item.location ? ` · ${item.location}` : ""}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <span className="section-label">Certifications</span>
          <dl className="idx mt-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="idx__row idx__row--tight grid gap-x-8 gap-y-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline"
              >
                <dt className="text-text-1 text-[15px] font-medium">{cert.title}</dt>
                {cert.year && <dd className="label tnum whitespace-nowrap">{cert.year}</dd>}
                <dd className="text-text-3 text-[14px] sm:col-span-2">{cert.issuer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
