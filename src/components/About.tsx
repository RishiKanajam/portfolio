import Link from "next/link";
import { about } from "@/content/content";
import Prose from "./Prose";

export default function About() {
  return <section id="about" className="section" aria-labelledby="about-heading">
    <div className="section-head"><h2 id="about-heading">About</h2></div>
    <div className="section-body dots">
      <p className="lede"><Prose text={about.movements[0].paragraphs[0]} /></p>
      <p><Prose text={about.movements[2].paragraphs[0]} /></p>
      <p className="more-github"><Link prefetch={false} href="/about">Background, experience and education →</Link></p>
    </div>
  </section>;
}
