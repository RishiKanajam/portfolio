import type { Project } from "@/content/content";

export default function ProjectLinks({ project }: { project: Project }) {
  return <div className="project-links">
    {project.githubUrl && <a href={project.githubUrl} aria-label={`${project.title} source`}>Source</a>}
    {project.liveUrl && <a href={project.liveUrl} aria-label={`${project.title} ${project.liveLabel ?? "live site"}`}>{project.liveLabel ?? "Live"}</a>}
    {project.repoNote && <span className="metadata">{project.repoNote}</span>}
  </div>;
}
