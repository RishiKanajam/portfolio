import { experience } from "@/content/content";

export default function Experience() {
  return <section id="experience" aria-labelledby="experience-heading">
    <h2 id="experience-heading">Experience</h2>
    <ul className="plain-list experience">
      {experience.map(item => <li key={item.company}>
        <span className="experience-what">
          <span className="experience-role">{item.role}</span>
          <span className="experience-org">{item.company}</span>
        </span>
        <span className="metadata experience-dates">{item.period}</span>
      </li>)}
    </ul>
  </section>;
}
