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
    // Wait for the page to finish loading, then a beat more, then an idle slot.
    let timer: ReturnType<typeof setTimeout> | undefined;
    let idle: number | undefined;
    const schedule = () => {
      timer = setTimeout(() => {
        if (typeof window.requestIdleCallback === "function") idle = window.requestIdleCallback(load, { timeout: 4000 });
        else load();
      }, 1500);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      disposed = true;
      window.removeEventListener("load", schedule);
      clearTimeout(timer);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      handle?.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="evidence-field" aria-hidden="true" />;
}
