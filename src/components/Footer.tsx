import Link from "next/link";
import ProfileLinks from "./ProfileLinks";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return <footer>
    <ProfileLinks footer />
    <div className="footer-actions"><Link prefetch={false} href="/about">Background</Link><ThemeToggle /><a href="#top">↑ Top</a></div>
    <p className="metadata colophon">Set in IBM Plex Sans and JetBrains Mono. Built with Next.js and TypeScript, deployed on Vercel. Written and maintained by Rishi Kanajam in Sydney, Australia. 2026.</p>
    <p className="metadata colophon-note">The field at the top is drawn with three.js: points come into focus near your cursor, where there’s evidence, and blur where there isn’t.</p>
  </footer>;
}
