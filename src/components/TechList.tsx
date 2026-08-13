import { techGroups } from "@/content/content";

/*
 * F3 · Spec sheet, one row per group. Was a grid of bordered pills — several
 * dozen small boxes, each with its own border, which is a lot of visual noise
 * for what is really a list of words. Set as rows they read in one pass.
 */

export default function TechList() {
  return (
    <section id="stack" className="section-gap border-t border-border">
      <div className="container-wide">
        <span className="section-label">Stack</span>

        <dl className="idx mt-8">
          {techGroups.map((group) => (
            <div
              key={group.label}
              className="idx__row idx__row--tight grid gap-x-10 gap-y-2 lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] lg:items-baseline"
            >
              <dt className="label">{group.label}</dt>
              <dd>
                <p className="text-text-2 leading-relaxed">
                  {group.items.join("  ·  ")}
                </p>
                {group.note && (
                  <p className="label mt-1.5" style={{ textTransform: "none" }}>
                    {group.note}
                  </p>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
