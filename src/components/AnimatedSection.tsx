/*
 * Was: an IntersectionObserver that faded and slid every section into view.
 *
 * That's "animate-on-scroll on everything" — the page never settled, and it
 * spent the whole motion budget on content the reader had already arrived at.
 * There is now exactly one orchestrated entrance (the masthead, on load).
 *
 * Kept as a pass-through so the remaining call sites stay valid. `delay` is
 * accepted and ignored.
 */

export default function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}
