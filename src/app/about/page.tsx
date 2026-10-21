import type { Metadata } from "next";
import Link from "next/link";
import { about, experience, companies, education, certifications } from "@/content/content";
import Prose from "@/components/Prose";

export const metadata: Metadata = { title: "Background · Rishi Kanajam", description: "Background, experience and side projects of Rishi Kanajam." };
export default function Background() {
  return <main id="main" className="detail">
    <Link prefetch={false} href="/">← Back</Link>
    <header id="top"><h1>Background</h1></header>
    {about.movements.map(movement => <section key={movement.label}>
      <h2>{movement.label}</h2>
      {movement.paragraphs.map(paragraph => <p key={paragraph}><Prose text={paragraph} /></p>)}
    </section>)}
    <section><h2>Experience</h2>
      {experience.map(item => <article className="background-entry" key={item.company}>
        <h3>{item.role}</h3><p>{item.company} · <span className="metadata">{item.period}</span></p>
        <ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
      </article>)}
    </section>
    <section><h2>On my own time</h2>
      {companies.map(company => <article className="background-entry" key={company.name}>
        <h3>{company.name}</h3><p className="metadata">{company.role}{company.status && ` · ${company.status}`}</p>
        <p>{company.tagline}</p><p>{company.what}</p>
        {company.points?.map(point => <p key={point}>{point}</p>)}
        <div className="project-links">{company.links.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}</div>
      </article>)}
    </section>
    <section><h2>Education &amp; certifications</h2>
      {education.map(item => <p key={item.degree}>{item.degree}<br />{item.institution} · <span className="metadata">{item.period}</span></p>)}
      {certifications.map(item => <p key={item.title}>{item.title} · {item.issuer}<br /><span className="metadata">{item.year}</span></p>)}
    </section>
  </main>;
}
