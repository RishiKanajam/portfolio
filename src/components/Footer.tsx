import Link from "next/link";
import { about, siteConfig } from "@/content/content";
import ProfileLinks from "./ProfileLinks";
import ThemeToggle from "./ThemeToggle";

const closing = about.movements[2].paragraphs.at(-1);

export default function Footer() {
  return <footer className="section">
    <div className="section-head"><h2 className="sr-only">Contact</h2></div>
    <div className="section-body dots">
      <p className="closing">{closing}</p>
      <p className="closing-email"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
      <ProfileLinks footer />
      <div className="footer-actions"><Link prefetch={false} href="/about">Background</Link><ThemeToggle /><a href="#top">↑ Top</a></div>
      <p className="metadata colophon">Written and maintained by Rishi Kanajam in Sydney, Australia. 2026.</p>
    </div>
  </footer>;
}
