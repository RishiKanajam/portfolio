"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { projects, type Project } from "@/content/content";

// ── GitHub icon ───────────────────────────────────────────────────────────────
function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// ── Illustrated SVG placeholders — ALL deterministic, no Math.random() ────────

function MedVaultIllustration() {
  const ecgPoints = [
    [0,60],[30,60],[40,60],[48,20],[54,90],[60,55],[70,55],
    [80,55],[88,18],[94,88],[100,55],[110,55],[120,55],
    [128,22],[134,86],[140,55],[150,55],[160,55],
    [168,25],[174,84],[180,55],[190,55],[200,55],
  ] as const;
  const ecgPath = ecgPoints.map(([x,y],i) => `${i===0?"M":"L"}${x} ${y}`).join(" ");

  return (
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="560" height="220" fill="#060B12"/>
      {Array.from({length:15},(_,i)=>(
        <line key={`v${i}`} x1={i*40} y1="0" x2={i*40} y2="220" stroke="#0D1A26" strokeWidth="0.5"/>
      ))}
      {Array.from({length:6},(_,i)=>(
        <line key={`h${i}`} x1="0" y1={i*44} x2="220" y2={i*44} stroke="#0D1A26" strokeWidth="0.5"/>
      ))}
      <rect x="10" y="10" width="210" height="200" rx="8" fill="#080F18" stroke="#0E2030" strokeWidth="1"/>
      <text x="22" y="28" fontSize="8" fill="#2A5878" fontFamily="monospace" fontWeight="bold">MEDVAULT · PATIENT MONITOR</text>
      <path d={ecgPath} stroke="#22D3EE" strokeWidth="1.8" fill="none" strokeLinecap="round" transform="translate(10, 30)"/>
      <path d={ecgPath} stroke="#22D3EE" strokeWidth="4" fill="none" opacity="0.12" strokeLinecap="round" transform="translate(10, 30)"/>
      {[
        { label:"HR", value:"78", unit:"bpm", color:"#22D3EE", x:22, y:118 },
        { label:"SpO₂", value:"98", unit:"%",   color:"#4ADE80", x:80, y:118 },
        { label:"BP",  value:"120/80", unit:"mmHg", color:"#F97316", x:140, y:118 },
      ].map(({label,value,unit,color,x,y}) => (
        <g key={label} transform={`translate(${x},${y})`}>
          <text x="0" y="0"  fontSize="7"  fill="#2A5878" fontFamily="monospace">{label}</text>
          <text x="0" y="13" fontSize="13" fill={color}   fontFamily="monospace" fontWeight="bold">{value}</text>
          <text x="0" y="23" fontSize="7"  fill="#1A3A50" fontFamily="monospace">{unit}</text>
        </g>
      ))}
      <line x1="22" y1="140" x2="208" y2="140" stroke="#0E2030" strokeWidth="1"/>
      <rect x="22" y="148" width="56" height="14" rx="3" fill="#1A2C1A" stroke="#166534" strokeWidth="1"/>
      <text x="30" y="158" fontSize="7" fill="#4ADE80" fontFamily="monospace">● OFFLINE OK</text>
      <rect x="22" y="168" width="180" height="30" rx="4" fill="#0D1A26" stroke="#0E2C40" strokeWidth="1"/>
      <text x="30" y="180" fontSize="7" fill="#2A5878" fontFamily="monospace">COLD CHAIN</text>
      {[
        {label:"TEMP",val:"4.2°C",col:"#22D3EE", ox:30},
        {label:"HUM", val:"62%",  col:"#4ADE80", ox:90},
        {label:"PSI", val:"1.01", col:"#F97316", ox:148},
      ].map(({label,val,col,ox})=>(
        <g key={label}>
          <text x={ox}  y="192" fontSize="6" fill="#1A3A50" fontFamily="monospace">{label}</text>
          <text x={ox}  y="200" fontSize="8" fill={col}     fontFamily="monospace" fontWeight="bold">{val}</text>
        </g>
      ))}
      <rect x="232" y="10" width="316" height="96" rx="8" fill="#0A1220" stroke="#0E2030" strokeWidth="1"/>
      <text x="248" y="28" fontSize="8" fill="#7C3AED" fontFamily="monospace" fontWeight="bold">RxAI · GEMINI PRO VISION</text>
      {["Fever","Cough","Fatigue"].map((s,i)=>(
        <g key={s}>
          <rect x={248 + i*76} y="34" width={s.length*6+8} height="14" rx="7" fill="#1A0A2C" stroke="#5B21B6" strokeWidth="1"/>
          <text x={252 + i*76} y="44" fontSize="7" fill="#9F7AEA" fontFamily="monospace">{s}</text>
        </g>
      ))}
      <rect x="248" y="56" width="288" height="38" rx="5" fill="#0D1820" stroke="#0E2C40" strokeWidth="1"/>
      <text x="258" y="70" fontSize="8" fill="#4ADE80" fontFamily="monospace" fontWeight="bold">Suggested: Paracetamol 500mg</text>
      <text x="258" y="82" fontSize="7" fill="#1A4A30" fontFamily="monospace">Confidence: 0.91 · Safety-checked · Multi-modal</text>
      <text x="258" y="92" fontSize="7" fill="#0A2A20" fontFamily="monospace">Sources: clinical guidelines + image analysis</text>
      <rect x="232" y="116" width="316" height="82" rx="8" fill="#0A1220" stroke="#0E2030" strokeWidth="1"/>
      <text x="248" y="132" fontSize="8" fill="#F97316" fontFamily="monospace" fontWeight="bold">PHARMANET · DRUG INTELLIGENCE</text>
      {[
        {name:"Amoxicillin 250mg", stock:"In stock", trial:"NCT04521322", col:"#4ADE80"},
        {name:"Ibuprofen 400mg",   stock:"Low stock", trial:"NCT04112836", col:"#FBBF24"},
        {name:"Azithromycin 500mg",stock:"In stock",  trial:"NCT05002088", col:"#4ADE80"},
      ].map(({name,stock,trial,col},i)=>(
        <g key={name} transform={`translate(248, ${144+i*16})`}>
          <text x="0"   y="0" fontSize="8" fill="#2A5878" fontFamily="monospace">{name}</text>
          <text x="160" y="0" fontSize="7" fill={col}     fontFamily="monospace">{stock}</text>
          <text x="232" y="0" fontSize="7" fill="#1A3A50" fontFamily="monospace">{trial}</text>
        </g>
      ))}
      <text x="232" y="212" fontSize="8" fill="#0A1A28" fontFamily="monospace">
        Next.js 15 · Firebase · Gemini · Cloud Run · IndexedDB · offline-first
      </text>
    </svg>
  );
}

function OciusIllustration() {
  return (
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="560" height="220" fill="#060E18"/>
      {Array.from({ length: 15 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="220" stroke="#0F1E30" strokeWidth="0.5"/>
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 44} x2="560" y2={i * 44} stroke="#0F1E30" strokeWidth="0.5"/>
      ))}
      <rect x="0" y="130" width="560" height="90" fill="#080D18"/>
      <path d="M0 132 Q70 126 140 132 Q210 138 280 132 Q350 126 420 132 Q490 138 560 132 L560 130 L0 130Z" fill="#112238" opacity="0.8"/>
      <g transform="translate(120,94)">
        <path d="M0 32 L140 32 L133 44 L7 44Z" fill="#1E3554"/>
        <rect x="46" y="14" width="34" height="18" rx="2" fill="#1E3554"/>
        <rect x="56" y="4" width="14" height="10" rx="1" fill="#253F60"/>
        <line x1="63" y1="4" x2="63" y2="0" stroke="#3A5878" strokeWidth="1.5"/>
        <line x1="63" y1="0" x2="48" y2="8" stroke="#3A5878" strokeWidth="1"/>
        <line x1="63" y1="0" x2="78" y2="8" stroke="#3A5878" strokeWidth="1"/>
      </g>
      <rect x="104" y="82" width="175" height="76" fill="none" stroke="#00FF88" strokeWidth="2" strokeDasharray="7,2"/>
      <rect x="104" y="82" width="96" height="14" fill="#00FF88" rx="2"/>
      <text x="110" y="92" fontSize="9" fill="#001A0D" fontFamily="monospace" fontWeight="bold">vessel_A  0.94</text>
      <rect x="340" y="100" width="78" height="56" fill="none" stroke="#FFD700" strokeWidth="1.5" strokeDasharray="4,2"/>
      <rect x="340" y="100" width="62" height="12" fill="#FFD700" rx="2"/>
      <text x="344" y="109" fontSize="8" fill="#1A1200" fontFamily="monospace" fontWeight="bold">wake  0.87</text>
      <rect x="24" y="106" width="54" height="46" fill="none" stroke="#00CFFF" strokeWidth="1.5" strokeDasharray="4,2"/>
      <rect x="24" y="106" width="46" height="12" fill="#00CFFF" rx="2"/>
      <text x="28" y="115" fontSize="8" fill="#001A2A" fontFamily="monospace" fontWeight="bold">buoy  0.81</text>
      <text x="14" y="20" fontSize="9" fill="#00FF88" fontFamily="monospace">REC ●</text>
      <text x="460" y="20" fontSize="9" fill="#00FF88" fontFamily="monospace">394 FPS</text>
      <text x="460" y="32" fontSize="8" fill="#2A7A50" fontFamily="monospace">EDGE · LIVE</text>
      <line x1="0" y1="118" x2="560" y2="118" stroke="#00FF88" strokeWidth="0.6" opacity="0.2"/>
      <text x="14" y="210" fontSize="8" fill="#1A4A30" fontFamily="monospace">YOLOv8 · conf=0.45 · NMS=0.5 · Ocius Technology</text>
    </svg>
  );
}

function MangRAGIllustration() {
  return (
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="560" height="220" fill="#080C12"/>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(24, ${28 + i * 60})`}>
          <rect width="66" height="42" rx="5" fill="#101C2C" stroke="#1A3D5C" strokeWidth="1.5"/>
          <line x1="8" y1="11" x2="58" y2="11" stroke="#1E5070" strokeWidth="1.2"/>
          <line x1="8" y1="19" x2="58" y2="19" stroke="#123040" strokeWidth="1"/>
          <line x1="8" y1="27" x2="42" y2="27" stroke="#123040" strokeWidth="1"/>
          <text x="8" y="39" fontSize="8" fill="#2A6888" fontFamily="monospace">{["PDF","DOCX","MD"][i]}</text>
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <line key={i} x1="90" y1={49 + i * 60} x2="188" y2="110" stroke="#1A3D5C" strokeWidth="1.2" strokeDasharray="3,2"/>
      ))}
      <g transform="translate(188,80)">
        <ellipse cx="34" cy="10" rx="34" ry="9" fill="#091C2C" stroke="#0D9488" strokeWidth="1.5"/>
        <rect x="0" y="9" width="68" height="40" fill="#091C2C" stroke="#0D9488" strokeWidth="1.5"/>
        <ellipse cx="34" cy="49" rx="34" ry="9" fill="#091C2C" stroke="#0D9488" strokeWidth="1.5"/>
        <text x="12" y="30" fontSize="8" fill="#0D9488" fontFamily="monospace">pgvector</text>
        <text x="12" y="42" fontSize="7" fill="#0A5050" fontFamily="monospace">k=6 MMR</text>
      </g>
      <line x1="256" y1="110" x2="352" y2="110" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="4,2"/>
      <polygon points="352,106 348,114 356,110" fill="#0D9488"/>
      <g transform="translate(356,82)">
        <rect width="88" height="56" rx="8" fill="#0A1A2C" stroke="#1A4060" strokeWidth="1.5"/>
        <text x="10" y="20" fontSize="9" fill="#3A80B8" fontFamily="monospace">LLM</text>
        <text x="10" y="33" fontSize="7" fill="#1A4060" fontFamily="monospace">+ context</text>
        <text x="10" y="44" fontSize="7" fill="#1A4060" fontFamily="monospace">+ sources</text>
      </g>
      <line x1="444" y1="110" x2="510" y2="110" stroke="#1A4060" strokeWidth="1.5"/>
      <polygon points="510,106 506,114 514,110" fill="#1A4060"/>
      <g transform="translate(514,90)">
        <rect width="26" height="44" rx="4" fill="#0A1A2C" stroke="#3A80B8" strokeWidth="1.5"/>
        <text x="4" y="28" fontSize="22" fill="#3A80B8">↩</text>
      </g>
      <text x="192" y="76" fontSize="8" fill="#0D9488" fontFamily="monospace">VECTOR DB</text>
      <text x="358" y="76" fontSize="8" fill="#1A4060" fontFamily="monospace">GENERATOR</text>
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={370 + i * 12} cy={160} r="4" fill={["#0D9488","#1A6080","#3A80B8"][i]} opacity="0.8"/>
      ))}
      <text x="14" y="210" fontSize="8" fill="#0A2030" fontFamily="monospace">FastAPI · LangChain · pgvector · grounded LLM responses</text>
    </svg>
  );
}

function RNAIllustration() {
  const nodes = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * Math.PI * 4;
    return {
      x: 38 + i * 18,
      y1: 108 + Math.sin(angle) * 44,
      y2: 108 - Math.sin(angle) * 44,
      color1: i % 3 === 0 ? "#A855F7" : i % 3 === 1 ? "#7C3AED" : "#6D28D9",
      color2: i % 3 === 0 ? "#06B6D4" : i % 3 === 1 ? "#0891B2" : "#0E7490",
      angle,
    };
  });
  return (
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="560" height="220" fill="#0A0818"/>
      {nodes.map((n, i) => (
        <g key={i}>
          {i < 23 && (<>
            <line x1={n.x} y1={n.y1} x2={nodes[i+1].x} y2={nodes[i+1].y1} stroke="#5B21B6" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1={n.x} y1={n.y2} x2={nodes[i+1].x} y2={nodes[i+1].y2} stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round"/>
          </>)}
          {Math.abs(Math.sin(n.angle)) < 0.3 && (
            <line x1={n.x} y1={n.y1} x2={n.x} y2={n.y2} stroke="#2D3748" strokeWidth="1.5" strokeDasharray="2,1"/>
          )}
          <circle cx={n.x} cy={n.y1} r="4" fill={n.color1} opacity="0.9"/>
          <circle cx={n.x} cy={n.y2} r="4" fill={n.color2} opacity="0.9"/>
        </g>
      ))}
      <rect x="420" y="18" width="128" height="80" rx="6" fill="#160830" stroke="#5B21B6" strokeWidth="1.5"/>
      <text x="434" y="36" fontSize="9" fill="#9F7AEA" fontFamily="monospace">TM-SCORE</text>
      <text x="430" y="52" fontSize="8" fill="#6D28D9" fontFamily="monospace">before fix</text>
      <text x="430" y="66" fontSize="16" fill="#F87171" fontFamily="monospace" fontWeight="bold">0.600</text>
      <text x="430" y="80" fontSize="8" fill="#6D28D9" fontFamily="monospace">after fix</text>
      <text x="430" y="94" fontSize="16" fill="#4ADE80" fontFamily="monospace" fontWeight="bold">0.984</text>
      <rect x="14" y="14" width="138" height="36" rx="5" fill="#160830" stroke="#5B21B6" strokeWidth="1"/>
      <text x="24" y="28" fontSize="8" fill="#9F7AEA" fontFamily="monospace">TBM + RibonanzaNet</text>
      <text x="24" y="41" fontSize="8" fill="#6D28D9" fontFamily="monospace">+ MDS refinement</text>
      <text x="14" y="210" fontSize="8" fill="#2A1050" fontFamily="monospace">Stanford RNA 3D · Kaggle · PyTorch · sentinel-fix +0.384 TM</text>
    </svg>
  );
}

const C1 = [[90,70],[102,78],[86,82],[98,66],[108,72],[94,90],[80,75],[112,85],[88,60],[105,65]] as const;
const C2 = [[160,110],[172,102],[158,94],[175,118],[165,125],[148,108],[178,95],[155,130],[185,112],[170,90]] as const;
const C3 = [[112,130],[125,138],[100,142],[130,125],[118,150],[108,122],[135,140],[95,135],[122,118],[140,130]] as const;
const RADII    = [3.0, 2.5, 3.5, 2.8, 3.2, 2.6, 3.4, 2.7, 3.1, 2.9];
const OPACITIES = [0.85, 0.70, 0.90, 0.75, 0.88, 0.72, 0.92, 0.78, 0.82, 0.80];

function LlamaIllustration() {
  const layerColors = ["#F97316","#0D9488","#A855F7","#3B82F6"];
  return (
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="560" height="220" fill="#060A0E"/>
      {C1.map(([cx,cy],i) => <circle key={`c1-${i}`} cx={cx} cy={cy} r={RADII[i]} fill="#F97316" opacity={OPACITIES[i]}/>)}
      {C2.map(([cx,cy],i) => <circle key={`c2-${i}`} cx={cx} cy={cy} r={RADII[i]} fill="#0D9488" opacity={OPACITIES[i]}/>)}
      {C3.map(([cx,cy],i) => <circle key={`c3-${i}`} cx={cx} cy={cy} r={RADII[i]} fill="#A855F7" opacity={OPACITIES[i]}/>)}
      {[8,16,24,32].map((layer, i) => (
        <g key={layer} transform={`translate(230, ${18 + i * 44})`}>
          <rect width="310" height="34" rx="5" fill="#0A0E14" stroke={layerColors[i]} strokeWidth="1.5"/>
          <text x="12" y="14" fontSize="9" fill={layerColors[i]} fontFamily="monospace">Layer {layer}</text>
          <text x="12" y="26" fontSize="7" fill="#4B5563" fontFamily="monospace">
            {["4096-dim · MLP","4096-dim · Self-Attn","4096-dim · MLP","output head · logits"][i]}
          </text>
          {Array.from({ length: 10 }, (_, j) => {
            const bh = Math.round(20 * Math.abs(Math.sin(i * 2.5 + j * 0.65)));
            return <rect key={j} x={200 + j * 10} y={30 - bh} width="7" height={bh} fill={layerColors[i]} opacity="0.55"/>;
          })}
        </g>
      ))}
      <g transform="translate(14,186)">
        {[["#F97316","factual"],["#0D9488","reasoning"],["#A855F7","instruction"]].map(([col,label],i) => (
          <g key={i} transform={`translate(${i * 110}, 0)`}>
            <circle cx="6" cy="6" r="4" fill={col}/>
            <text x="15" y="10" fontSize="8" fill="#4B5563" fontFamily="monospace">{label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

// ── DeceptionArena illustration — social-deduction game with LLM agents ───────
// Agent positions: hexagonal ring, center=(85,110), radius=55
// Precomputed: top(85,55), TR(133,82), BR(133,138), bot(85,165), BL(37,138), TL(37,82)
function DeceptionArenaIllustration() {
  const ag = [
    { id: "GPT-4o",  x: 85,  y: 55,  c: "#10B981", elo: 1847 },
    { id: "L3",      x: 133, y: 82,  c: "#8B5CF6", elo: 1723 },
    { id: "Claude",  x: 133, y: 138, c: "#F59E0B", elo: 1809 },
    { id: "Mistral", x: 85,  y: 165, c: "#EF4444", elo: 1654 },
    { id: "Gemini",  x: 37,  y: 138, c: "#3B82F6", elo: 1712 },
    { id: "Human",   x: 37,  y: 82,  c: "#6B7280", elo: 1591 },
  ] as const;

  // [from, to, isDeceptive]
  const edges: [number, number, boolean][] = [
    [0,1,false],[1,2,true],[2,3,false],[3,4,true],[4,5,false],[5,0,true],
    [0,3,true],[1,4,false],
  ];

  const leaderboard = [
    { name: "GPT-4o",  elo: 1847, d: 0.82, c: "#10B981" },
    { name: "Claude",  elo: 1809, d: 0.76, c: "#F59E0B" },
    { name: "Llama-3", elo: 1723, d: 0.68, c: "#8B5CF6" },
    { name: "Gemini",  elo: 1712, d: 0.61, c: "#3B82F6" },
  ] as const;

  return (
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="560" height="220" fill="#06080E"/>
      {/* Grid — left panel only */}
      {Array.from({length:5},(_,i)=>(
        <line key={`v${i}`} x1={i*40} y1="0" x2={i*40} y2="220" stroke="#0C1020" strokeWidth="0.5"/>
      ))}
      {Array.from({length:6},(_,i)=>(
        <line key={`h${i}`} x1="0" y1={i*44} x2="175" y2={i*44} stroke="#0C1020" strokeWidth="0.5"/>
      ))}

      {/* ── Agent social graph ── */}
      {/* Deceptive / honest edges */}
      {edges.map(([a, b, deceptive], i) => (
        <line key={i}
          x1={ag[a].x} y1={ag[a].y}
          x2={ag[b].x} y2={ag[b].y}
          stroke={deceptive ? "#EF4444" : "#1A3A5A"}
          strokeWidth={deceptive ? "1" : "1.5"}
          strokeDasharray={deceptive ? "3,2" : undefined}
          opacity="0.55"
        />
      ))}
      {/* Game-table ring */}
      <circle cx="85" cy="110" r="18" fill="none" stroke="#1A2A3C" strokeWidth="1.5" opacity="0.7"/>
      {/* Playing cards at centre */}
      <rect x="74" y="99" width="14" height="20" rx="2" fill="#0A1220" stroke="#1A3A60" strokeWidth="1"/>
      <text x="78" y="113" fontSize="9" fill="#EF4444" fontFamily="monospace">♥</text>
      <rect x="83" y="102" width="14" height="20" rx="2" fill="#0A1220" stroke="#2A4060" strokeWidth="1"/>
      <text x="88" y="116" fontSize="9" fill="#2A4060" fontFamily="monospace">?</text>

      {/* Agent nodes */}
      {ag.map((a, i) => (
        <g key={i}>
          <circle cx={a.x} cy={a.y} r="11" fill="#080E18" stroke={a.c} strokeWidth="1.5"/>
          <text x={a.x} y={a.y + 3} fontSize="6" fill={a.c} fontFamily="monospace" textAnchor="middle">
            {a.id}
          </text>
        </g>
      ))}

      {/* Panel divider */}
      <line x1="175" y1="12" x2="175" y2="208" stroke="#0E1C2C" strokeWidth="1"/>

      {/* ── Right stats panel ── */}
      <text x="192" y="22" fontSize="10" fill="#EF4444" fontFamily="monospace" fontWeight="bold">
        DECEPTION ARENA
      </text>
      <text x="192" y="34" fontSize="8" fill="#2A4A6A" fontFamily="monospace">
        COUP + SECRET HITLER · MULTI-LLM BENCHMARK
      </text>

      {/* ELO Leaderboard */}
      <rect x="192" y="42" width="352" height="100" rx="6" fill="#080E18" stroke="#0E1C2C" strokeWidth="1"/>
      <text x="204" y="57" fontSize="7" fill="#1A3A58" fontFamily="monospace" fontWeight="bold" letterSpacing="0.1em">
        DECEPTION ELO
      </text>
      {leaderboard.map(({ name, elo, d, c }, i) => (
        <g key={name} transform={`translate(204, ${62 + i * 20})`}>
          <circle cx="5" cy="5" r="4" fill={c}/>
          <text x="15" y="9" fontSize="8" fill="#2A5878" fontFamily="monospace">{name}</text>
          <text x="95" y="9" fontSize="9" fill={c} fontFamily="monospace" fontWeight="bold">{elo}</text>
          <text x="148" y="9" fontSize="7" fill="#1A3A50" fontFamily="monospace">d={d}</text>
          <rect x="195" y="1" width={Math.round(d * 90)} height="8" rx="2" fill={c} opacity="0.25"/>
          <rect x="195" y="1" width={Math.round(d * 90)} height="8" rx="2" fill="none" stroke={c} strokeWidth="0.5" opacity="0.4"/>
        </g>
      ))}

      {/* Stats row */}
      <rect x="192" y="150" width="352" height="46" rx="6" fill="#080E18" stroke="#0E1C2C" strokeWidth="1"/>
      {[
        { label: "GAMES PLAYED", val: "147",  x: 204 },
        { label: "TOTAL ROUNDS", val: "1,470",x: 308 },
        { label: "DECEIVE RATE", val: "72%",  x: 416 },
      ].map(({ label, val, x }) => (
        <g key={label}>
          <text x={x} y="164" fontSize="6" fill="#1A3050" fontFamily="monospace" letterSpacing="0.05em">{label}</text>
          <text x={x} y="183" fontSize="13" fill="#EF4444" fontFamily="monospace" fontWeight="bold">{val}</text>
        </g>
      ))}

      <text x="192" y="210" fontSize="7" fill="#0A1828" fontFamily="monospace">
        asyncio · OpenRouter · OpenAI · Anthropic · React + Pixi.js · arXiv target
      </text>
    </svg>
  );
}

const ILLUSTRATIONS = {
  ocius:     OciusIllustration,
  medvault:  MedVaultIllustration,
  mangrag:   MangRAGIllustration,
  rna:       RNAIllustration,
  llama:     LlamaIllustration,
  deceptiona: DeceptionArenaIllustration,
} as const;

// ── Shared card atoms — theme-aware via CSS vars ──────────────────────────────

function Chip({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 rounded-full bg-surface text-[12px] text-text-3 font-medium border border-border">
      {label}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.githubUrl && !project.liveUrl && !project.caseStudyUrl) return null;
  return (
    <div className="flex flex-wrap items-center gap-4 mt-4">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] text-text-3 hover:text-accent transition-colors">
          <GithubIcon size={13} /> GitHub
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] text-text-3 hover:text-accent transition-colors">
          <ExternalLink size={13} /> Live demo
        </a>
      )}
      {project.caseStudyUrl && (
        <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] text-text-3 hover:text-accent transition-colors">
          <BookOpen size={13} /> Read the case study →
        </a>
      )}
    </div>
  );
}

// ── Card visual ───────────────────────────────────────────────────────────────

function CardVisual({ project, tall = false }: { project: Project; tall?: boolean }) {
  const aspectClass = tall ? "aspect-2/1" : "aspect-video";
  // TODO: replace illustration with real screenshot — set project.image in content.ts
  if (project.image) {
    return (
      <div className={`${aspectClass} rounded-xl overflow-hidden border border-border mb-5 relative`}>
        <Image src={project.image} alt={project.title} fill className="object-cover"/>
      </div>
    );
  }
  const Illustration = ILLUSTRATIONS[project.placeholderVariant];
  return (
    <div className={`${aspectClass} rounded-xl overflow-hidden border border-border mb-5`}>
      <Illustration />
    </div>
  );
}

// ── Card variants ─────────────────────────────────────────────────────────────

/** Full-width featured card */
function CardFull({ project, badge }: { project: Project; badge?: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className="rounded-2xl bg-bg-subtle border border-border p-6 md:p-8 relative overflow-hidden col-span-full"
    >
      {badge && (
        <span className="absolute top-5 right-5 text-[11px] font-semibold text-accent tracking-widest uppercase">
          {badge}
        </span>
      )}
      <CardVisual project={project} tall />
      <div className="md:grid md:grid-cols-[1fr_260px] md:gap-8">
        <div>
          <h3 className="text-[22px] md:text-[26px] font-bold text-text-1 mb-3 leading-snug pr-20 md:pr-0">
            {project.title}
          </h3>
          <p className="text-[15px] text-text-2 leading-relaxed mb-5">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tech.map((t) => <Chip key={t} label={t} />)}
          </div>
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.div>
  );
}

/** Small card — illustration + text */
function CardSmall({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className="rounded-2xl bg-bg-subtle border border-border p-5 flex flex-col relative overflow-hidden"
    >
      {/* In-progress badge */}
      {project.inProgress && (
        <span className="absolute top-4 right-4 text-[10px] font-semibold text-text-3 tracking-wide bg-surface border border-border px-2 py-0.5 rounded-full z-10">
          In Progress
        </span>
      )}
      {/* Mini illustration */}
      <div className="aspect-video rounded-xl overflow-hidden border border-border mb-4">
        {(() => { const I = ILLUSTRATIONS[project.placeholderVariant]; return <I />; })()}
      </div>
      <h3 className="text-[16px] font-bold text-text-1 mb-2 leading-snug pr-16">{project.title}</h3>
      <p className="text-[13px] text-text-2 leading-relaxed mb-4 grow line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {project.tech.slice(0, 4).map((t) => <Chip key={t} label={t} />)}
        {project.tech.length > 4 && (
          <span className="px-2.5 py-1 rounded-full text-[12px] text-text-4 font-medium">+{project.tech.length - 4}</span>
        )}
      </div>
      <ProjectLinks project={project} />
    </motion.div>
  );
}

// ── Mosaic layout ─────────────────────────────────────────────────────────────
//
// Row 1: MedVault     — full 12 cols — Featured
// Row 2: Ocius        — full 12 cols — Highlight
// Row 3: MangRAG (4) | RNA (4) | DeceptionArena (4)
// Row 4: Llama        — 4 cols alone (last / smallest)

export default function Projects() {
  const medvault    = projects.find(p => p.placeholderVariant === "medvault");
  const ocius       = projects.find(p => p.placeholderVariant === "ocius");
  const mangrag     = projects.find(p => p.placeholderVariant === "mangrag");
  const rna         = projects.find(p => p.placeholderVariant === "rna");
  const deceptiona  = projects.find(p => p.placeholderVariant === "deceptiona");
  const llama       = projects.find(p => p.placeholderVariant === "llama");

  return (
    <section id="projects" className="section-gap border-t border-border">
      <div className="container-wide">
        {/* Header */}
        <AnimatedSection>
          <span className="section-label">Projects</span>
          <h2 className="text-[32px] md:text-[44px] font-bold text-text-1 tracking-tight leading-tight mb-3">
            Things I&apos;ve built.
          </h2>
          <p className="text-[17px] text-text-3 mb-10 max-w-xl leading-relaxed">
            From production computer vision to clinical AI — projects that ship and push boundaries.
          </p>
        </AnimatedSection>

        {/* Mosaic grid — 12-column base */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">

          {/* Row 1: MedVault — full 12 cols */}
          {medvault && (
            <AnimatedSection delay={0.06} className="md:col-span-12">
              <CardFull project={medvault} badge="Featured" />
            </AnimatedSection>
          )}

          {/* Row 2: Ocius — full 12 cols */}
          {ocius && (
            <AnimatedSection delay={0.10} className="md:col-span-12">
              <CardFull project={ocius} badge="Highlight" />
            </AnimatedSection>
          )}

          {/* Row 3: MangRAG (4) + RNA (4) + DeceptionArena (4) */}
          {mangrag && (
            <AnimatedSection delay={0.14} className="md:col-span-4">
              <CardSmall project={mangrag} />
            </AnimatedSection>
          )}
          {rna && (
            <AnimatedSection delay={0.18} className="md:col-span-4">
              <CardSmall project={rna} />
            </AnimatedSection>
          )}
          {deceptiona && (
            <AnimatedSection delay={0.22} className="md:col-span-4">
              <CardSmall project={deceptiona} />
            </AnimatedSection>
          )}

          {/* Row 4: Llama — last / smallest */}
          {llama && (
            <AnimatedSection delay={0.26} className="md:col-span-4">
              <CardSmall project={llama} />
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
}
