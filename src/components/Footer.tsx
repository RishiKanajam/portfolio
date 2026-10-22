import Link from "next/link";
import { about, siteConfig } from "@/content/content";
import ProfileLinks from "./ProfileLinks";
import ThemeToggle from "./ThemeToggle";

const closing = about.movements[2].paragraphs.at(-1);

export default function Footer() {
  return <footer className="section">
    <h2 className="sr-only">Contact</h2>
    <div className="section-body">
      <p className="closing">{closing}</p>
      <p className="closing-email"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
      <ProfileLinks footer />
      <div className="footer-actions"><Link prefetch={false} href="/about">Background</Link><ThemeToggle /><a href="#top">↑ Top</a></div>
      <p className="metadata colophon">Set in IBM Plex Sans and JetBrains Mono. Built with Next.js and TypeScript, deployed on Vercel. Written and maintained by Rishi Kanajam in Sydney, Australia. 2026.</p>
      <p className="metadata colophon-note">The field at the top is drawn with three.js and a depth-of-field lens: whatever sits at the focal distance, which follows your cursor, is sharp. Everything else is out of focus.</p>
    </div>
  </footer>;
}
