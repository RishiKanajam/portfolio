import { experience } from "@/content/content";

export default function Experience() {
  return <section id="experience" aria-labelledby="experience-heading">
    <h2 id="experience-heading">Experience</h2>
    <ul className="plain-list experience">
      {experience.map(item => <li key={item.company}>
        <span className="experience-role">{item.role}</span>{" · "}{item.company}{" · "}
        <span className="metadata">{item.period}</span>
      </li>)}
    </ul>
  </section>;
}
