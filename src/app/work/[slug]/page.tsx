import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/content";
import ProjectLinks from "@/components/ProjectLinks";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.filter(project => project.caseStudy).map(({ slug }) => ({ slug }));
}
function getProject(slug: string) {
  const project = projects.find(project => project.slug === slug && project.caseStudy);
  if (!project) notFound();
  return project;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  const title = `${project.title} · Rishi Kanajam`;
  return { title, description: project.description,
    openGraph: { title, description: project.description, url: `/work/${project.slug}` },
    twitter: { card: "summary", title, description: project.description } };
}
export default async function WorkPage({ params }: Props) {
  const project = getProject((await params).slug);
  return <main id="main" className="detail" >
    <Link prefetch={false} href="/#work">← Back</Link>
    <article>
      <header id="top">
        <h1>{project.title}</h1>
        <p className="metadata">{project.status === "shipped" ? "Shipped" : "In progress"}</p>
        {project.award && <p className="metadata">{project.award}</p>}
        {project.credit && <p className="metadata">{project.credit}</p>}
        <p>{project.description}</p>
      </header>
      <section><h2>The problem</h2><p>{project.problem}</p></section>
      <section><h2>What I built</h2><p>{project.built}</p></section>
      {project.decision && <section><h2>One decision</h2><p><strong>{project.decision.label}.</strong>{" "}{project.decision.body}</p></section>}
      {project.caveat && <section><h2>Scope, honestly</h2><p>{project.caveat}</p></section>}
      <section><h2>Stack &amp; links</h2><p className="metadata stack">{project.tech.join(" · ")}</p><ProjectLinks project={project} /></section>
    </article>
  </main>;
}
