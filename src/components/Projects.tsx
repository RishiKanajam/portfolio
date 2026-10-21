import Link from "next/link";
import { projects, siteConfig } from "@/content/content";
import ProjectLinks from "./ProjectLinks";

const featured = ["krama-core", "pathfinder", "deceptionarena", "chronolens"];
const more = ["pdf-rag", "pinch-recovery", "medvault", "mangrag", "anomaly-detector", "dsa-learning-web"];

export default function Projects() {
  return <>
    <section id="work" aria-labelledby="work-heading">
      <h2 id="work-heading">Selected work</h2>
      {featured.map(slug => {
        const project = projects.find(p => p.slug === slug)!;
        return <article className="project" key={slug}>
          <div className="project-heading">
            <h3><Link prefetch={false} href={`/work/${slug}`}>{project.title}</Link></h3>
            <span className="metadata">{project.status === "shipped" ? "Shipped" : "In progress"}</span>
          </div>
          <p>{project.summary ?? project.description}</p>
          {project.decision && <p className="decision"><strong>One decision: {project.decision.label}.</strong></p>}
          <ProjectLinks project={project} />
        </article>;
      })}
    </section>
    <section aria-labelledby="more-heading">
      <h2 id="more-heading">More work</h2>
      <ul className="plain-list more-work">
        {more.map(slug => {
          const project = projects.find(p => p.slug === slug)!;
          return <li key={slug}><a href={project.githubUrl}>{project.title}</a><span> — {project.aboutLine}</span></li>;
        })}
      </ul>
      <p><a href={siteConfig.github}>More on GitHub →</a></p>
    </section>
  </>;
}
