import { experience } from "@/content/content";

export default function Experience() {
  return <section id="experience" className="section" aria-labelledby="experience-heading">
    <div className="section-head"><h2 id="experience-heading">Experience</h2></div>
    <div className="section-body">
      <ul className="plain-list experience">
        {experience.map(item => <li className="dots" data-current={item.current ? "" : undefined} key={item.company}>
          <span className="metadata experience-dates">{item.period}</span>
          <span className="experience-what">
            <span className="experience-role">{item.role}</span>
            <span className="experience-org">{item.company}</span>
          </span>
        </li>)}
      </ul>
    </div>
  </section>;
}
