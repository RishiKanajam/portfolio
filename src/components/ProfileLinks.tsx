import { hero, siteConfig } from "@/content/content";

export default function ProfileLinks({ footer = false }: { footer?: boolean }) {
  const links = [
    { label: footer ? siteConfig.email : "Email", href: `mailto:${siteConfig.email}` },
    { label: "CV", href: hero.resumeHref },
    { label: "GitHub", href: siteConfig.github },
    { label: "LinkedIn", href: siteConfig.linkedIn },
  ];
  return <nav className="profile-links" aria-label={footer ? "Footer links" : "Contact and profiles"}>
    {links.map((link, index) => <span key={link.label}>
      {index > 0 && <span className="separator" aria-hidden="true"> · </span>}
      <a href={link.href}>{link.label}</a>
    </span>)}
  </nav>;
}
