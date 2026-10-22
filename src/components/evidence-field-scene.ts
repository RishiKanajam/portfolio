import {
  BufferAttribute,
  BufferGeometry,
  Color,
  PerspectiveCamera,
  Plane,
  Points,
  Raycaster,
  Scene,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";

// A landscape of points seen through a lens with real depth of field.
// Whatever sits at the focal distance (set by the pointer) is sharp; the rest
// is out of focus. Things you have evidence for are in focus.

const COLS = 140;
const ROWS = 90;
const WIDTH = 64; // world units across
const NEAR_Z = 6;
const FAR_Z = -70;

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uFocusDepth;
  uniform vec3 uFocusPoint;
  uniform float uPixelRatio;
  uniform float uViewHeight;
  attribute float aSeed;
  varying float vAlpha;
  varying float vSharp;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  void main() {
    vec3 p = position;
    // Slow swell across the field.
    float n = noise(p.xz * 0.11 + vec2(uTime * 0.035, -uTime * 0.02));
    float n2 = noise(p.xz * 0.27 - vec2(uTime * 0.02, 0.0));
    p.y += (n - 0.5) * 2.2 + (n2 - 0.5) * 0.6;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float depth = -mv.z;
    gl_Position = projectionMatrix * mv;

    // Circle of confusion: distance from the focal plane, relative to it.
    float coc = abs(depth - uFocusDepth) / uFocusDepth;
    // A little extra sharpness right where the pointer lands.
    float near = 1.0 - smoothstep(0.0, 9.0, distance(p.xz, uFocusPoint.xz));
    float blur = clamp(coc * 3.2 - near * 0.6, 0.0, 1.6);

    float size = (1.4 + blur * 9.0) * (uViewHeight / 900.0) * (14.0 / depth);
    gl_PointSize = clamp(size, 0.0, 34.0) * uPixelRatio;

    float fog = 1.0 - smoothstep(38.0, 78.0, depth);
    float edge = smoothstep(${(WIDTH / 2).toFixed(1)}, ${(WIDTH / 2 - 10).toFixed(1)}, abs(p.x));
    float twinkle = 0.8 + 0.2 * sin(uTime * 0.9 + aSeed * 50.0);
    vAlpha = fog * edge * twinkle * (0.95 / (1.0 + blur * blur * 3.0));
    vSharp = 1.0 - clamp(blur, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  varying float vAlpha;
  varying float vSharp;

  void main() {
    float r = length(gl_PointCoord - 0.5);
    float disc = 1.0 - smoothstep(mix(0.0, 0.38, vSharp), 0.5, r);
    float a = disc * vAlpha;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor, a);
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
  const camera = new PerspectiveCamera(38, 1, 0.1, 200);
  camera.position.set(0, 3.4, 10);
  camera.lookAt(0, -2.6, -14);

  const positions = new Float32Array(COLS * ROWS * 3);
  const seeds = new Float32Array(COLS * ROWS);
  for (let row = 0, i = 0; row < ROWS; row++) {
    // Rows spaced so they look evenly spaced in perspective.
    const t = row / (ROWS - 1);
    const z = NEAR_Z + (FAR_Z - NEAR_Z) * Math.pow(t, 1.35);
    for (let col = 0; col < COLS; col++, i++) {
      positions[i * 3] = (col / (COLS - 1) - 0.5) * WIDTH;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = z;
      seeds[i] = Math.random();
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(positions, 3));
  geometry.setAttribute("aSeed", new BufferAttribute(seeds, 1));

  const uniforms = {
    uTime: { value: 0 },
    uFocusDepth: { value: 16 },
    uFocusPoint: { value: new Vector3(4, 0, -6) },
    uPixelRatio: { value: pixelRatio },
    uViewHeight: { value: 900 },
    uColor: { value: new Color() },
  };
  const material = new ShaderMaterial({ uniforms, vertexShader, fragmentShader, transparent: true, depthTest: false, depthWrite: false });
  const points = new Points(geometry, material);
  points.frustumCulled = false;
  scene.add(points);

  const raycaster = new Raycaster();
  const ground = new Plane(new Vector3(0, 1, 0), 0);
  const ndc = new Vector2(0.45, -0.15);
  const hit = new Vector3();
  const focusPoint = new Vector3().copy(uniforms.uFocusPoint.value);
  const targetPoint = new Vector3().copy(focusPoint);
  let lastPointer = -Infinity;

  function aim(x: number, y: number) {
    ndc.set(x, y);
    raycaster.setFromCamera(ndc, camera);
    if (raycaster.ray.intersectPlane(ground, hit) && hit.z > FAR_Z * 0.6) targetPoint.copy(hit);
    else targetPoint.set(x * 20, 0, FAR_Z * 0.45);
  }

  function readInk() {
    const ink = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim() || "#171717";
    uniforms.uColor.value.set(ink);
  }

  function layout() {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    // Keep the field filling narrow (phone) screens too.
    camera.fov = camera.aspect < 0.8 ? 58 : 38;
    camera.updateProjectionMatrix();
    uniforms.uViewHeight.value = height;
  }

  function update() {
    uniforms.uFocusPoint.value.copy(focusPoint);
    uniforms.uFocusDepth.value = Math.max(4, camera.position.distanceTo(focusPoint));
  }
  function render() { update(); renderer.render(scene, camera); }

  // Without a pointer (touch, idle), the focus pulls slowly near and far on its own.
  function wander(t: number) {
    aim(0.5 * Math.sin(t * 0.00009), -0.05 - 0.45 * (0.5 + 0.5 * Math.sin(t * 0.00013 + 1.1)));
  }

  let frame = 0, visible = true, running = false;
  function tick(t: number) {
    if (!running) return;
    if (t - lastPointer > 4000) wander(t);
    focusPoint.lerp(targetPoint, 0.045);
    uniforms.uTime.value = t / 1000;
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
    if (event.clientY > rect.bottom) return;
    aim(((event.clientX - rect.left) / rect.width) * 2 - 1, -(((event.clientY - rect.top) / rect.height) * 2 - 1));
    lastPointer = performance.now();
    if (reducedMotion) { focusPoint.copy(targetPoint); render(); }
  }
  function onVisibility() { if (document.hidden) stop(); else start(); }
  function onTheme() { readInk(); render(); }

  const resizeObserver = new ResizeObserver(() => { layout(); render(); });
  const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) start(); else stop(); });
  const themeObserver = new MutationObserver(onTheme);
  const scheme = window.matchMedia("(prefers-color-scheme: dark)");

  readInk();
  layout();
  aim(ndc.x, ndc.y);
  focusPoint.copy(targetPoint);
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
