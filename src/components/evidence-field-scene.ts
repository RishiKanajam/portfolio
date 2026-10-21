import {
  BufferAttribute,
  BufferGeometry,
  Camera,
  Color,
  NormalBlending,
  Points,
  Scene,
  ShaderMaterial,
  Vector2,
  WebGLRenderer,
} from "three";

// A grid of points that comes into focus near the evidence (the pointer) and
// blurs, fades and drifts where there is none.

const SPACING = 26; // CSS px between grid points
const FOCUS_INNER = 70; // px: fully sharp inside this radius
const FOCUS_OUTER = 300; // px: fully uncertain beyond this radius

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uFocus;
  uniform float uPixelRatio;
  attribute vec2 aGrid;
  attribute float aSeed;
  varying float vCertainty;
  varying float vSeed;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  void main() {
    float d = distance(aGrid, uFocus);
    float certainty = 1.0 - smoothstep(${FOCUS_INNER.toFixed(1)}, ${FOCUS_OUTER.toFixed(1)}, d);
    float uncertainty = 1.0 - certainty;
    vec2 q = aGrid * 0.006 + aSeed;
    vec2 drift = vec2(noise(q + uTime * 0.07), noise(q.yx - uTime * 0.06)) - 0.5;
    vec2 px = aGrid + drift * uncertainty * 22.0;
    vec2 clip = (px / uResolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    gl_PointSize = mix(2.4, 8.0, uncertainty) * uPixelRatio;
    vCertainty = certainty;
    vSeed = aSeed;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uTime;
  varying float vCertainty;
  varying float vSeed;

  void main() {
    float r = length(gl_PointCoord - 0.5);
    float edge = mix(0.0, 0.42, vCertainty);
    float disc = 1.0 - smoothstep(edge, 0.5, r);
    float flicker = 0.75 + 0.25 * sin(uTime * 0.8 + vSeed * 40.0);
    float alpha = disc * mix(0.16 * flicker, 0.75, vCertainty);
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(uColor, alpha);
  }
`;

export interface FieldHandle { dispose(): void }

export function mountEvidenceField(canvas: HTMLCanvasElement, reducedMotion: boolean): FieldHandle | null {
  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
  } catch {
    return null;
  }
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
  renderer.setPixelRatio(pixelRatio);

  const scene = new Scene();
  const camera = new Camera();
  const uniforms = {
    uTime: { value: 0 },
    uResolution: { value: new Vector2(1, 1) },
    uFocus: { value: new Vector2(0, 0) },
    uPixelRatio: { value: pixelRatio },
    uColor: { value: new Color() },
  };
  const material = new ShaderMaterial({ uniforms, vertexShader, fragmentShader, transparent: true, depthTest: false, blending: NormalBlending });
  let geometry = new BufferGeometry();
  const points = new Points(geometry, material);
  scene.add(points);

  let width = 0, height = 0;
  const focus = new Vector2();
  const target = new Vector2();
  let lastPointer = -Infinity;

  function readInk() {
    const ink = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim() || "#171717";
    uniforms.uColor.value.set(ink);
  }

  function layout() {
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));
    renderer.setSize(width, height, false);
    uniforms.uResolution.value.set(width, height);
    const cols = Math.ceil(width / SPACING) + 1;
    const rows = Math.ceil(height / SPACING) + 1;
    const offsetX = (width - (cols - 1) * SPACING) / 2;
    const grid = new Float32Array(cols * rows * 2);
    const seed = new Float32Array(cols * rows);
    for (let y = 0, i = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++, i++) {
        grid[i * 2] = offsetX + x * SPACING;
        grid[i * 2 + 1] = y * SPACING + SPACING / 2;
        seed[i] = Math.random();
      }
    }
    geometry.dispose();
    geometry = new BufferGeometry();
    geometry.setAttribute("aGrid", new BufferAttribute(grid, 2));
    geometry.setAttribute("aSeed", new BufferAttribute(seed, 1));
    // Positions are computed in the shader; a dummy attribute keeps three happy.
    geometry.setAttribute("position", new BufferAttribute(new Float32Array(cols * rows * 3), 3));
    points.geometry = geometry;
    if (lastPointer === -Infinity) { focus.set(width * 0.72, height * 0.42); target.copy(focus); }
  }

  function render() { renderer.render(scene, camera); }

  // Without a pointer (touch, idle), the focus wanders slowly on its own.
  function wander(t: number) {
    target.set(width * (0.62 + 0.22 * Math.sin(t * 0.00011)), height * (0.45 + 0.25 * Math.sin(t * 0.00017 + 1.3)));
  }

  let frame = 0, visible = true, running = false;
  function tick(t: number) {
    if (!running) return;
    if (t - lastPointer > 4000) wander(t);
    focus.lerp(target, 0.06);
    uniforms.uTime.value = t / 1000;
    uniforms.uFocus.value.copy(focus);
    render();
    frame = requestAnimationFrame(tick);
  }
  function start() {
    if (reducedMotion || running || !visible || document.hidden) return;
    running = true;
    frame = requestAnimationFrame(tick);
  }
  function stop() { running = false; cancelAnimationFrame(frame); }

  function onPointer(event: PointerEvent) {
    if (event.pointerType === "touch") return;
    const rect = canvas.getBoundingClientRect();
    target.set(event.clientX - rect.left, event.clientY - rect.top);
    lastPointer = performance.now();
    if (reducedMotion) { focus.copy(target); uniforms.uFocus.value.copy(focus); render(); }
  }
  function onVisibility() { if (document.hidden) stop(); else start(); }
  function onTheme() { readInk(); render(); }

  const resizeObserver = new ResizeObserver(() => { layout(); uniforms.uFocus.value.copy(focus); render(); });
  const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) start(); else stop(); });
  const themeObserver = new MutationObserver(onTheme);
  const scheme = window.matchMedia("(prefers-color-scheme: dark)");

  readInk();
  layout();
  uniforms.uFocus.value.copy(focus);
  render();
  resizeObserver.observe(canvas);
  intersection.observe(canvas);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-theme"] });
  scheme.addEventListener("change", onTheme);
  window.addEventListener("pointermove", onPointer, { passive: true });
  document.addEventListener("visibilitychange", onVisibility);
  start();

  return {
    dispose() {
      stop();
      resizeObserver.disconnect();
      intersection.disconnect();
      themeObserver.disconnect();
      scheme.removeEventListener("change", onTheme);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    },
  };
}
