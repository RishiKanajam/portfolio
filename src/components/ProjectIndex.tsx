"use client";

import { useEffect, useState } from "react";

// Sticky minimap of the selected projects; the one being read is marked.
export default function ProjectIndex({ items }: { items: { slug: string; title: string }[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id.replace("project-", ""));
    }, { rootMargin: "-35% 0px -60% 0px" });
    items.forEach(({ slug }) => {
      const el = document.getElementById(`project-${slug}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return <nav className="project-index" aria-label="Selected projects">
    <ol className="plain-list">
      {items.map(({ slug, title }) => <li key={slug}>
        <a href={`#project-${slug}`} aria-current={active === slug ? "true" : undefined}>{title}</a>
      </li>)}
    </ol>
  </nav>;
}
