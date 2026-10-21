import { about } from "@/content/content";
import Prose from "./Prose";

export default function About() {
  return <section id="about" aria-labelledby="about-heading">
    <h2 id="about-heading">About</h2>
    <p><Prose text={about.movements[0].paragraphs[0]} /></p>
    <p><Prose text={about.movements[2].paragraphs[0]} /></p>
  </section>;
}
