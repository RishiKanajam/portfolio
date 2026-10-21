"use client";

export default function ThemeToggle() {
  function toggle() {
    const dark = getComputedStyle(document.documentElement).colorScheme !== "dark";
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }
  return <button type="button" className="text-button" onClick={toggle} aria-label="Toggle theme between light and dark">Toggle theme</button>;
}
