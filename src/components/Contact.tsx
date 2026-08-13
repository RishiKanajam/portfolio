import { ArrowUpRight } from "lucide-react";
import { contact, hero } from "@/content/content";

/*
 * Was a full-bleed near-black band with every colour hard-coded as a hex —
 * eight inline values that no token knew about, and a slab of pure-dark that
 * fought the parchment in light mode. It's a raised paper band now, and the
 * addresses are set as a spec sheet because that's what they are: a list of
 * ways to reach one person, each with a value worth reading.
 */

export default function Contact() {
  return (
    <section id="contact" className="section-gap border-t border-border bg-bg-subtle">
      <div className="container-wide">
        <span className="section-label">Contact</span>

        <p
          className="text-text-1 measure-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display-s)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.022em",
          }}
        >
          Let&rsquo;s build something together.
        </p>

        <p className="mt-5 measure text-text-2 leading-[1.7]">{contact.pitch}</p>

        <dl className="idx mt-10 max-w-3xl">
          {contact.socials.map((social) => (
            <div
              key={social.href}
              className="idx__row idx__row--tight grid gap-x-8 gap-y-0 sm:grid-cols-[minmax(0,7rem)_minmax(0,1fr)] sm:items-center"
            >
              <dt className="label">{social.label}</dt>
              <dd>
                <a
                  href={social.href}
                  {...(social.href.startsWith("mailto:")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="link-t text-[15px]"
                  style={{ fontFamily: "var(--font-outlier)", fontSize: "14px" }}
                >
                  {social.value}
                  <ArrowUpRight size={12} className="text-text-4" aria-hidden="true" />
                </a>
              </dd>
            </div>
          ))}

          <div className="idx__row idx__row--tight grid gap-x-8 gap-y-0 sm:grid-cols-[minmax(0,7rem)_minmax(0,1fr)] sm:items-center">
            <dt className="label">CV</dt>
            <dd>
              <a
                href={hero.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-t text-[15px]"
                style={{ fontFamily: "var(--font-outlier)", fontSize: "14px" }}
              >
                resume.pdf
                <ArrowUpRight size={12} className="text-text-4" aria-hidden="true" />
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
