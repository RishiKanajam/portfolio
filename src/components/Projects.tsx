import Link from "next/link";
import { projects, siteConfig } from "@/content/content";
import ProjectLinks from "./ProjectLinks";

const featured = ["krama-core", "pathfinder", "deceptionarena", "chronolens"];
const more = ["pdf-rag", "pinch-recovery", "medvault", "mangrag", "anomaly-detector", "dsa-learning-web"];

export default function Projects() {
  return <>
    <section id="work" className="section" aria-labelledby="work-heading">
      <h2 id="work-heading">Selected work</h2>
      <div className="section-body">
        {featured.map(slug => {
          const project = projects.find(p => p.slug === slug)!;
          return <article className="project" key={slug}>
            <div className="project-meta metadata">
              <span className="status">{project.status === "shipped" ? "Shipped" : "In progress"}</span>
              {project.award && <span>{project.award}</span>}
              {project.credit && <span>{project.credit}</span>}
              <span className="project-stack">{project.tech.slice(0, 3).join(" · ")}</span>
            </div>
            <div className="project-body">
              <h3><Link prefetch={false} href={`/work/${slug}`}>{project.title}<span className="arrow" aria-hidden="true">→</span></Link></h3>
              <p>{project.summary ?? project.description}</p>
              {project.decision && <p className="decision"><span className="decision-label">One decision:</span> <strong>{project.decision.label}.</strong></p>}
              <ProjectLinks project={project} />
            </div>
          </article>;
        })}
      </div>
    </section>
    <section className="section" aria-labelledby="more-heading">
      <h2 id="more-heading">More work</h2>
      <div className="section-body">
        <ul className="plain-list more-work">
          {more.map(slug => {
            const project = projects.find(p => p.slug === slug)!;
            return <li key={slug}>
              <a href={project.githubUrl}>{project.title}</a>
              <span className="more-work-about">{project.aboutLine}</span>
            </li>;
          })}
        </ul>
        <p className="more-github"><a href={siteConfig.github}>More on GitHub →</a></p>
      </div>
    </section>
  </>;
}
