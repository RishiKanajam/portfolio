"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Brings each dotted rule into focus the first time it scrolls into view.
// Without JavaScript, or with reduced motion, the rules are simply sharp.
export default function FocusObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".dots:not([data-focus])");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      targets.forEach(el => { el.dataset.focus = ""; });
      return;
    }
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.focus = "";
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -12% 0px" });
    targets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
