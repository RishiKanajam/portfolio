"use client";

import { useEffect, useRef } from "react";

// Decorative hero background. three.js is fetched only after the page is idle,
// so it never competes with the text for first paint.
export default function EvidenceField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let disposed = false;
    let handle: { dispose(): void } | null = null;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const load = () => import("./evidence-field-scene").then(({ mountEvidenceField }) => {
      if (disposed) return;
      handle = mountEvidenceField(canvas, reducedMotion);
      if (handle) canvas.dataset.ready = "";
    });
    // Start on the first sign of a reader (pointer, touch, scroll, key), or a
    // few seconds after load, whichever comes first, in an idle slot.
    const triggers = ["pointermove", "pointerdown", "touchstart", "scroll", "keydown", "wheel"] as const;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let idle: number | undefined;
    let started = false;
    const begin = () => {
      if (started) return;
      started = true;
      triggers.forEach(type => window.removeEventListener(type, begin));
      clearTimeout(timer);
      if (typeof window.requestIdleCallback === "function") idle = window.requestIdleCallback(load, { timeout: 1500 });
      else load();
    };
    const arm = () => { timer = setTimeout(begin, 4000); };
    triggers.forEach(type => window.addEventListener(type, begin, { once: true, passive: true }));
    if (document.readyState === "complete") arm();
    else window.addEventListener("load", arm, { once: true });

    return () => {
      disposed = true;
      triggers.forEach(type => window.removeEventListener(type, begin));
      window.removeEventListener("load", arm);
      clearTimeout(timer);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      handle?.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="evidence-field" aria-hidden="true" />;
}
