import Link from "next/link";
import { projects, siteConfig, type Project } from "@/content/content";
import ProjectIndex from "./ProjectIndex";
import ProjectLinks from "./ProjectLinks";

const featured = ["krama-core", "pathfinder", "deceptionarena", "chronolens"].map(slug => projects.find(p => p.slug === slug)!);
const more = ["pdf-rag", "pinch-recovery", "medvault", "mangrag", "anomaly-detector", "dsa-learning-web"].map(slug => projects.find(p => p.slug === slug)!);

function Ledger({ project }: { project: Project }) {
  return <dl className="ledger metadata">
    {project.evidence && <div>
      <dt>Evidence</dt>
      {project.evidence.map(item => <dd className="known" key={item}>{item}</dd>)}
    </div>}
    {project.limits && <div>
      <dt>Limits</dt>
      {project.limits.map(item => <dd className="open" key={item}>{item}</dd>)}
    </div>}
    <div>
      <dt>Built with</dt>
      <dd>{project.tech.slice(0, 4).join(" · ")}</dd>
    </div>
  </dl>;
}

export default function Projects() {
  return <>
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="section-head">
        <h2 id="work-heading">Selected work</h2>
        <ProjectIndex items={featured.map(({ slug, title }) => ({ slug, title }))} />
      </div>
      <div className="section-body">
        {featured.map(project => <article className="project dots" id={`project-${project.slug}`} key={project.slug}>
          <p className="project-status metadata">{project.status === "shipped" ? "Shipped" : "In progress"}</p>
          <div className="project-body">
            <h3><Link prefetch={false} href={`/work/${project.slug}`}>{project.title}<span className="arrow" aria-hidden="true">→</span></Link></h3>
            <p>{project.summary ?? project.description}</p>
            {project.decision && <p className="decision"><span className="decision-label">One decision:</span> <strong>{project.decision.label}.</strong></p>}
            <ProjectLinks project={project} />
          </div>
          <Ledger project={project} />
        </article>)}
      </div>
    </section>
    <section className="section" aria-labelledby="more-heading">
      <div className="section-head"><h2 id="more-heading">More work</h2></div>
      <div className="section-body">
        <ul className="plain-list more-work">
          {more.map(project => <li className="dots" key={project.slug}>
            <a href={project.githubUrl}>{project.title}</a>
            <span className="more-work-about">{project.aboutLine}</span>
          </li>)}
        </ul>
        <p className="more-github"><a href={siteConfig.github}>More on GitHub →</a></p>
      </div>
    </section>
  </>;
}
