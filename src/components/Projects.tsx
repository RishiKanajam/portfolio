"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { projects, type Project, type ProjectTag } from "@/content/content";

// ── GitHub icon ───────────────────────────────────────────────────────────────
function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// ── SVG Illustrations ─────────────────────────────────────────────────────────

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
      {Array.from({length:15},(_,i)=>(<line key={`v${i}`} x1={i*40} y1="0" x2={i*40} y2="220" stroke="#0D1A26" strokeWidth="0.5"/>))}
      {Array.from({length:6},(_,i)=>(<line key={`h${i}`} x1="0" y1={i*44} x2="220" y2={i*44} stroke="#0D1A26" strokeWidth="0.5"/>))}
      <rect x="10" y="10" width="210" height="200" rx="8" fill="#080F18" stroke="#0E2030" strokeWidth="1"/>
      <text x="22" y="28" fontSize="8" fill="#2A5878" fontFamily="monospace" fontWeight="bold">MEDVAULT · PATIENT MONITOR</text>
      <path d={ecgPath} stroke="#22D3EE" strokeWidth="1.8" fill="none" strokeLinecap="round" transform="translate(10, 30)"/>
      <path d={ecgPath} stroke="#22D3EE" strokeWidth="4" fill="none" opacity="0.12" strokeLinecap="round" transform="translate(10, 30)"/>
      {[{label:"HR",value:"78",unit:"bpm",color:"#22D3EE",x:22,y:118},{label:"SpO₂",value:"98",unit:"%",color:"#4ADE80",x:80,y:118},{label:"BP",value:"120/80",unit:"mmHg",color:"#F97316",x:140,y:118}].map(({label,value,unit,color,x,y})=>(<g key={label} transform={`translate(${x},${y})`}><text x="0" y="0" fontSize="7" fill="#2A5878" fontFamily="monospace">{label}</text><text x="0" y="13" fontSize="13" fill={color} fontFamily="monospace" fontWeight="bold">{value}</text><text x="0" y="23" fontSize="7" fill="#1A3A50" fontFamily="monospace">{unit}</text></g>))}
      <rect x="22" y="148" width="56" height="14" rx="3" fill="#1A2C1A" stroke="#166534" strokeWidth="1"/>
      <text x="30" y="158" fontSize="7" fill="#4ADE80" fontFamily="monospace">● OFFLINE OK</text>
      <rect x="232" y="10" width="316" height="96" rx="8" fill="#0A1220" stroke="#0E2030" strokeWidth="1"/>
      <text x="248" y="28" fontSize="8" fill="#7C3AED" fontFamily="monospace" fontWeight="bold">RxAI · GEMINI PRO VISION</text>
      <rect x="248" y="56" width="288" height="38" rx="5" fill="#0D1820" stroke="#0E2C40" strokeWidth="1"/>
      <text x="258" y="70" fontSize="8" fill="#4ADE80" fontFamily="monospace" fontWeight="bold">Suggested: Paracetamol 500mg</text>
      <text x="258" y="82" fontSize="7" fill="#1A4A30" fontFamily="monospace">Confidence: 0.91 · Safety-checked · Multi-modal</text>
      <rect x="232" y="116" width="316" height="82" rx="8" fill="#0A1220" stroke="#0E2030" strokeWidth="1"/>
      <text x="248" y="132" fontSize="8" fill="#F97316" fontFamily="monospace" fontWeight="bold">PHARMANET · DRUG INTELLIGENCE</text>
      {[{name:"Amoxicillin 250mg",stock:"In stock",col:"#4ADE80"},{name:"Ibuprofen 400mg",stock:"Low stock",col:"#FBBF24"},{name:"Azithromycin 500mg",stock:"In stock",col:"#4ADE80"}].map(({name,stock,col},i)=>(<g key={name} transform={`translate(248, ${144+i*16})`}><text x="0" y="0" fontSize="8" fill="#2A5878" fontFamily="monospace">{name}</text><text x="160" y="0" fontSize="7" fill={col} fontFamily="monospace">{stock}</text></g>))}
    </svg>
  );
}

function OciusIllustration() {
  return (
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="560" height="220" fill="#060E18"/>
      {Array.from({length:15}).map((_,i)=>(<line key={`v${i}`} x1={i*40} y1="0" x2={i*40} y2="220" stroke="#0F1E30" strokeWidth="0.5"/>))}
      {Array.from({length:6}).map((_,i)=>(<line key={`h${i}`} x1="0" y1={i*44} x2="560" y2={i*44} stroke="#0F1E30" strokeWidth="0.5"/>))}
      <rect x="0" y="130" width="560" height="90" fill="#080D18"/>
      <g transform="translate(120,94)"><path d="M0 32 L140 32 L133 44 L7 44Z" fill="#1E3554"/><rect x="46" y="14" width="34" height="18" rx="2" fill="#1E3554"/><rect x="56" y="4" width="14" height="10" rx="1" fill="#253F60"/><line x1="63" y1="4" x2="63" y2="0" stroke="#3A5878" strokeWidth="1.5"/></g>
      <rect x="104" y="82" width="175" height="76" fill="none" stroke="#00FF88" strokeWidth="2" strokeDasharray="7,2"/>
      <rect x="104" y="82" width="96" height="14" fill="#00FF88" rx="2"/>
      <text x="110" y="92" fontSize="9" fill="#001A0D" fontFamily="monospace" fontWeight="bold">vessel_A  0.94</text>
      <text x="460" y="20" fontSize="9" fill="#00FF88" fontFamily="monospace">394 FPS</text>
      <text x="460" y="32" fontSize="8" fill="#2A7A50" fontFamily="monospace">EDGE · LIVE</text>
      <text x="14" y="210" fontSize="8" fill="#1A4A30" fontFamily="monospace">YOLOv8 · INT8 · TensorRT · Ocius Technology · NVIDIA Jetson</text>
    </svg>
  );
}

function MangRAGIllustration() {
  return (
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="560" height="220" fill="#080C12"/>
      {[0,1,2].map((i)=>(<g key={i} transform={`translate(24, ${28+i*60})`}><rect width="66" height="42" rx="5" fill="#101C2C" stroke="#1A3D5C" strokeWidth="1.5"/><line x1="8" y1="11" x2="58" y2="11" stroke="#1E5070" strokeWidth="1.2"/><line x1="8" y1="19" x2="58" y2="19" stroke="#123040" strokeWidth="1"/><text x="8" y="39" fontSize="8" fill="#2A6888" fontFamily="monospace">{["PDF","DOCX","MD"][i]}</text></g>))}
      {[0,1,2].map((i)=>(<line key={i} x1="90" y1={49+i*60} x2="188" y2="110" stroke="#1A3D5C" strokeWidth="1.2" strokeDasharray="3,2"/>))}
      <g transform="translate(188,80)"><ellipse cx="34" cy="10" rx="34" ry="9" fill="#091C2C" stroke="#0D9488" strokeWidth="1.5"/><rect x="0" y="9" width="68" height="40" fill="#091C2C" stroke="#0D9488" strokeWidth="1.5"/><ellipse cx="34" cy="49" rx="34" ry="9" fill="#091C2C" stroke="#0D9488" strokeWidth="1.5"/><text x="12" y="30" fontSize="8" fill="#0D9488" fontFamily="monospace">pgvector</text></g>
      <line x1="256" y1="110" x2="352" y2="110" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="4,2"/>
      <polygon points="352,106 348,114 356,110" fill="#0D9488"/>
      <g transform="translate(356,82)"><rect width="88" height="56" rx="8" fill="#0A1A2C" stroke="#1A4060" strokeWidth="1.5"/><text x="10" y="20" fontSize="9" fill="#3A80B8" fontFamily="monospace">LLM</text><text x="10" y="33" fontSize="7" fill="#1A4060" fontFamily="monospace">+ context</text><text x="10" y="44" fontSize="7" fill="#1A4060" fontFamily="monospace">+ sources</text></g>
      <text x="14" y="210" fontSize="8" fill="#0A2030" fontFamily="monospace">FastAPI · LangChain · pgvector · grounded LLM responses with attribution</text>
    </svg>
  );
}

function RNAIllustration() {
  const nodes = Array.from({length:24},(_,i)=>{const a=(i/24)*Math.PI*4;return{x:38+i*18,y1:108+Math.sin(a)*44,y2:108-Math.sin(a)*44,c1:i%3===0?"#A855F7":i%3===1?"#7C3AED":"#6D28D9",c2:i%3===0?"#06B6D4":i%3===1?"#0891B2":"#0E7490",a};});
  return (
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="560" height="220" fill="#0A0818"/>
      {nodes.map((n,i)=>(<g key={i}>{i<23&&(<><line x1={n.x} y1={n.y1} x2={nodes[i+1].x} y2={nodes[i+1].y1} stroke="#5B21B6" strokeWidth="2.5" strokeLinecap="round"/><line x1={n.x} y1={n.y2} x2={nodes[i+1].x} y2={nodes[i+1].y2} stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round"/></>)}<circle cx={n.x} cy={n.y1} r="4" fill={n.c1} opacity="0.9"/><circle cx={n.x} cy={n.y2} r="4" fill={n.c2} opacity="0.9"/></g>))}
      <rect x="420" y="18" width="128" height="80" rx="6" fill="#160830" stroke="#5B21B6" strokeWidth="1.5"/>
      <text x="434" y="36" fontSize="9" fill="#9F7AEA" fontFamily="monospace">TM-SCORE</text>
      <text x="430" y="66" fontSize="16" fill="#F87171" fontFamily="monospace" fontWeight="bold">0.600</text>
      <text x="430" y="94" fontSize="16" fill="#4ADE80" fontFamily="monospace" fontWeight="bold">0.984</text>
    </svg>
  );
}

const C1=[[90,70],[102,78],[86,82],[98,66],[108,72],[94,90],[80,75],[112,85],[88,60],[105,65]] as const;
const C2=[[160,110],[172,102],[158,94],[175,118],[165,125],[148,108],[178,95],[155,130],[185,112],[170,90]] as const;
const C3=[[112,130],[125,138],[100,142],[130,125],[118,150],[108,122],[135,140],[95,135],[122,118],[140,130]] as const;
const RADII=[3.0,2.5,3.5,2.8,3.2,2.6,3.4,2.7,3.1,2.9];
const OPS=[0.85,0.70,0.90,0.75,0.88,0.72,0.92,0.78,0.82,0.80];

function LlamaIllustration() {
  const lc=["#F97316","#0D9488","#A855F7","#3B82F6"];
  return (
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="560" height="220" fill="#060A0E"/>
      {C1.map(([cx,cy],i)=><circle key={`c1-${i}`} cx={cx} cy={cy} r={RADII[i]} fill="#F97316" opacity={OPS[i]}/>)}
      {C2.map(([cx,cy],i)=><circle key={`c2-${i}`} cx={cx} cy={cy} r={RADII[i]} fill="#0D9488" opacity={OPS[i]}/>)}
      {C3.map(([cx,cy],i)=><circle key={`c3-${i}`} cx={cx} cy={cy} r={RADII[i]} fill="#A855F7" opacity={OPS[i]}/>)}
      {[8,16,24,32].map((layer,i)=>(<g key={layer} transform={`translate(230, ${18+i*44})`}><rect width="310" height="34" rx="5" fill="#0A0E14" stroke={lc[i]} strokeWidth="1.5"/><text x="12" y="14" fontSize="9" fill={lc[i]} fontFamily="monospace">Layer {layer}</text><text x="12" y="26" fontSize="7" fill="#4B5563" fontFamily="monospace">{["4096-dim · MLP","4096-dim · Self-Attn","4096-dim · MLP","output head · logits"][i]}</text>{Array.from({length:10},(_,j)=>{const bh=Math.round(20*Math.abs(Math.sin(i*2.5+j*0.65)));return<rect key={j} x={200+j*10} y={30-bh} width="7" height={bh} fill={lc[i]} opacity="0.55"/>;})}</g>))}
    </svg>
  );
}

function DeceptionArenaIllustration() {
  const ag=[{id:"GPT-4o",x:85,y:55,c:"#10B981"},{id:"L3",x:133,y:82,c:"#8B5CF6"},{id:"Claude",x:133,y:138,c:"#F59E0B"},{id:"Mistral",x:85,y:165,c:"#EF4444"},{id:"Gemini",x:37,y:138,c:"#3B82F6"},{id:"Human",x:37,y:82,c:"#6B7280"}] as const;
  const edges:[[number,number,boolean]][]=[[[0,1,false]],[[1,2,true]],[[2,3,false]],[[3,4,true]],[[4,5,false]],[[5,0,true]],[[0,3,true]],[[1,4,false]]];
  const lb=[{name:"GPT-4o",elo:1847,d:0.82,c:"#10B981"},{name:"Claude",elo:1809,d:0.76,c:"#F59E0B"},{name:"Llama-3",elo:1723,d:0.68,c:"#8B5CF6"},{name:"Gemini",elo:1712,d:0.61,c:"#3B82F6"}] as const;
  return (
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="560" height="220" fill="#06080E"/>
      {edges.map(([[a,b,deceptive]],i)=>(<line key={i} x1={ag[a].x} y1={ag[a].y} x2={ag[b].x} y2={ag[b].y} stroke={deceptive?"#EF4444":"#1A3A5A"} strokeWidth={deceptive?1:1.5} strokeDasharray={deceptive?"3,2":undefined} opacity="0.55"/>))}
      <circle cx="85" cy="110" r="18" fill="none" stroke="#1A2A3C" strokeWidth="1.5" opacity="0.7"/>
      <rect x="74" y="99" width="14" height="20" rx="2" fill="#0A1220" stroke="#1A3A60" strokeWidth="1"/>
      <text x="78" y="113" fontSize="9" fill="#EF4444" fontFamily="monospace">♥</text>
      {ag.map((a,i)=>(<g key={i}><circle cx={a.x} cy={a.y} r="11" fill="#080E18" stroke={a.c} strokeWidth="1.5"/><text x={a.x} y={a.y+3} fontSize="6" fill={a.c} fontFamily="monospace" textAnchor="middle">{a.id}</text></g>))}
      <line x1="175" y1="12" x2="175" y2="208" stroke="#0E1C2C" strokeWidth="1"/>
      <text x="192" y="22" fontSize="10" fill="#EF4444" fontFamily="monospace" fontWeight="bold">DECEPTION ARENA</text>
      <text x="192" y="34" fontSize="8" fill="#2A4A6A" fontFamily="monospace">COUP + SECRET HITLER · MULTI-LLM BENCHMARK</text>
      <rect x="192" y="42" width="352" height="100" rx="6" fill="#080E18" stroke="#0E1C2C" strokeWidth="1"/>
      <text x="204" y="57" fontSize="7" fill="#1A3A58" fontFamily="monospace" fontWeight="bold" letterSpacing="0.1em">DECEPTION ELO</text>
      {lb.map(({name,elo,d,c},i)=>(<g key={name} transform={`translate(204, ${62+i*20})`}><circle cx="5" cy="5" r="4" fill={c}/><text x="15" y="9" fontSize="8" fill="#2A5878" fontFamily="monospace">{name}</text><text x="95" y="9" fontSize="9" fill={c} fontFamily="monospace" fontWeight="bold">{elo}</text><text x="148" y="9" fontSize="7" fill="#1A3A50" fontFamily="monospace">d={d}</text></g>))}
      <rect x="192" y="150" width="352" height="46" rx="6" fill="#080E18" stroke="#0E1C2C" strokeWidth="1"/>
      {[{l:"GAMES",v:"147",x:204},{l:"ROUNDS",v:"1,470",x:308},{l:"DECEIVE RATE",v:"72%",x:416}].map(({l,v,x})=>(<g key={l}><text x={x} y="164" fontSize="6" fill="#1A3050" fontFamily="monospace">{l}</text><text x={x} y="183" fontSize="13" fill="#EF4444" fontFamily="monospace" fontWeight="bold">{v}</text></g>))}
    </svg>
  );
}

// ── ChronoLens — Cultural Evidence OS ─────────────────────────────────────────
// Nodes: center(380,108) + 4 main + 4 outer + 2 far — all precomputed, no Math.random()
const CL_NODES = [
  { x: 380, y: 108, r: 15, label: "Silk Rd", c: "#5CBB78" },
  { x: 380, y: 50,  r: 10, label: "China",   c: "#60A5FA" },
  { x: 438, y: 108, r: 10, label: "Persia",  c: "#A78BFA" },
  { x: 380, y: 166, r: 10, label: "India",   c: "#F97316" },
  { x: 322, y: 108, r: 10, label: "Rome",    c: "#FBBF24" },
  { x: 306, y: 65,  r:  6, label: "",        c: "#60A5FA" },
  { x: 454, y: 65,  r:  6, label: "",        c: "#A78BFA" },
  { x: 454, y: 152, r:  6, label: "",        c: "#F97316" },
  { x: 306, y: 152, r:  6, label: "",        c: "#FBBF24" },
  { x: 512, y: 108, r:  5, label: "",        c: "#5CBB78" },
] as const;
const CL_EDGES = [[0,1],[0,2],[0,3],[0,4],[1,5],[2,6],[3,7],[4,8],[1,2],[2,3],[2,9]] as const;

const CL_EVIDENCE = [
  { badge: "FACT",        c: "#4ADE80", bg: "#0F2010", text: "Qin Dynasty standardised casting (221 BCE)" },
  { badge: "CONTEXT",     c: "#60A5FA", bg: "#0E1A2C", text: "Bronze traditions shared — Central Asia" },
  { badge: "HYPOTHESIS",  c: "#FBBF24", bg: "#221A08", text: "Artisan transfer via Silk Road networks" },
  { badge: "NEEDS REVIEW",c: "#F87171", bg: "#221010", text: "Cross-cultural dating — expert required" },
] as const;

function ChronoLensIllustration() {
  return (
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="560" height="220" fill="#070A12"/>
      {Array.from({length:6},(_,i)=>(<line key={`v${i}`} x1={i*40} y1="0" x2={i*40} y2="220" stroke="#0C1220" strokeWidth="0.5"/>))}
      {Array.from({length:6},(_,i)=>(<line key={`h${i}`} x1="0" y1={i*44} x2="232" y2={i*44} stroke="#0C1220" strokeWidth="0.5"/>))}

      {/* Header + query */}
      <text x="10" y="18" fontSize="8" fill="#5CBB78" fontFamily="monospace" fontWeight="bold">CHRONOLENS · CULTURAL EVIDENCE OS</text>
      <rect x="10" y="24" width="214" height="14" rx="3" fill="#0E1A28" stroke="#1A3A5A" strokeWidth="1"/>
      <text x="15" y="34" fontSize="7" fill="#2A5878" fontFamily="monospace">❯  Silk Road bronze metallurgy</text>

      {/* Evidence classification cards */}
      {CL_EVIDENCE.map(({badge,c,bg,text},i)=>(
        <g key={i} transform={`translate(10,${44+i*42})`}>
          <rect width="214" height="34" rx="4" fill={bg} stroke={c} strokeWidth="0.8"/>
          <rect x="0" y="0" width={badge.length*5+12} height="13" rx="2" fill={c} opacity="0.9"/>
          <text x="5" y="9" fontSize="6" fill="#050A08" fontFamily="monospace" fontWeight="bold">{badge}</text>
          <text x="6" y="27" fontSize="7" fill="#8E9AA8" fontFamily="monospace">{text}</text>
        </g>
      ))}

      {/* Source strip */}
      <rect x="0" y="210" width="232" height="10" fill="#080E18"/>
      {[{t:"OpenAlex",x:10},{t:"LoC",x:80},{t:"Met",x:116},{t:"MusicBrainz",x:150}].map(({t,x})=>(
        <text key={t} x={x} y="218" fontSize="6" fill="#1A3A50" fontFamily="monospace">{t}</text>
      ))}

      {/* Divider */}
      <line x1="232" y1="10" x2="232" y2="210" stroke="#0E1C2C" strokeWidth="1"/>

      {/* Knowledge graph */}
      {CL_EDGES.map(([a,b],i)=>(
        <line key={i} x1={CL_NODES[a].x} y1={CL_NODES[a].y} x2={CL_NODES[b].x} y2={CL_NODES[b].y} stroke="#1A3050" strokeWidth="1.2" opacity="0.65"/>
      ))}
      {CL_NODES.map((n,i)=>(
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r+5} fill={n.c} opacity="0.07"/>
          <circle cx={n.x} cy={n.y} r={n.r} fill="#080E18" stroke={n.c} strokeWidth="1.5"/>
          {n.label && <text x={n.x} y={n.y+3} fontSize={n.r>10?7:6} fill={n.c} fontFamily="monospace" textAnchor="middle" fontWeight="bold">{n.label}</text>}
        </g>
      ))}
      <text x="238" y="16" fontSize="7" fill="#1A3050" fontFamily="monospace">KNOWLEDGE GRAPH · 47 nodes · 128 edges</text>

      {/* Legend */}
      {[["#4ADE80","Fact"],["#60A5FA","Context"],["#FBBF24","Hypothesis"],["#F87171","Needs Review"]].map(([c,l],i)=>(
        <g key={i} transform={`translate(${238+i*79},200)`}>
          <circle cx="5" cy="5" r="4" fill={c} opacity="0.8"/>
          <text x="13" y="9" fontSize="6" fill="#2A4A6A" fontFamily="monospace">{l}</text>
        </g>
      ))}
    </svg>
  );
}

// ── PathFinder — Mental Health Triage ──────────────────────────────────────────
// Smooth voice waveform as cubic bezier — no runtime math
const PF_WAVE = "M10,55 C18,38 28,72 38,55 C48,38 58,72 68,55 C78,38 88,72 98,55 C108,38 118,72 128,55 C138,38 148,72 158,55 C164,48 170,60 180,55";

const PF_QUEUE = [
  { level: "HIGH", c: "#F87171", bg: "#1C0A0A", desc: "Anonymous · Voice · 2m ago",      quote: "everything feels pointless" },
  { level: "MED",  c: "#FBBF24", bg: "#1C1408", desc: "Self-referred · QR portal · 18m", quote: "losing all motivation lately" },
  { level: "LOW",  c: "#4ADE80", bg: "#0A1C0A", desc: "GP referral · Text · 1h ago",    quote: "anxiety and trouble sleeping" },
] as const;

function PathFinderIllustration() {
  return (
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="560" height="220" fill="#060910"/>

      {/* Title */}
      <text x="10" y="16" fontSize="8" fill="#60A5FA" fontFamily="monospace" fontWeight="bold">PATHFINDER · MENTAL HEALTH TRIAGE</text>
      <text x="10" y="26" fontSize="6" fill="#1A2A50" fontFamily="monospace">Lake Macquarie &amp; Newcastle SPN</text>

      {/* Voice intake panel */}
      <rect x="10" y="32" width="188" height="54" rx="4" fill="#080F1C" stroke="#1A2A4A" strokeWidth="1"/>
      <text x="16" y="43" fontSize="7" fill="#2A4A7A" fontFamily="monospace">● VOICE INTAKE · ACTIVE</text>
      <path d={PF_WAVE} stroke="#60A5FA" strokeWidth="1.8" fill="none" opacity="0.85" transform="translate(0,10)"/>
      <path d={PF_WAVE} stroke="#60A5FA" strokeWidth="4"   fill="none" opacity="0.08" transform="translate(0,10)"/>
      <text x="16" y="82" fontSize="6" fill="#1A3060" fontFamily="monospace">Azure STT · tone analysis · confidence 0.97</text>

      {/* Risk assessment */}
      <rect x="10" y="92" width="188" height="52" rx="4" fill="#080F1C" stroke="#1A2A4A" strokeWidth="1"/>
      <text x="16" y="104" fontSize="7" fill="#2A4A7A" fontFamily="monospace">RISK ASSESSMENT ENGINE</text>
      {[{k:"Keywords",v:"HIGH",c:"#F87171"},{k:"Sentiment",v:"-0.87",c:"#FBBF24"},{k:"Voice tone",v:"distress",c:"#F87171"},{k:"Linguistic",v:"absolutist",c:"#F87171"}].map(({k,v,c},i)=>(
        <g key={i} transform={`translate(16,${110+i*8})`}>
          <text x="0" y="0" fontSize="6" fill="#1A3060" fontFamily="monospace">{k}:</text>
          <text x="62" y="0" fontSize="6" fill={c} fontFamily="monospace" fontWeight="bold">{v}</text>
        </g>
      ))}

      {/* Escalation protocol */}
      <rect x="10" y="150" width="188" height="50" rx="4" fill="#1C0A0A" stroke="#3A1010" strokeWidth="1"/>
      <text x="16" y="162" fontSize="7" fill="#F87171" fontFamily="monospace" fontWeight="bold">⚠ HIGH RISK · ESCALATING</text>
      {["→ Clinician alert sent","→ Supervisor notified","→ CEO backup in 10 min"].map((t,i)=>(
        <text key={i} x="16" y={172+i*9} fontSize="6" fill="#5A2020" fontFamily="monospace">{t}</text>
      ))}

      {/* Crisis bar */}
      <rect x="0" y="208" width="205" height="12" fill="#100808"/>
      <text x="10" y="217" fontSize="6" fill="#5A2020" fontFamily="monospace">Lifeline 13 11 14  ·  000  ·  Beyond Blue</text>

      {/* Divider */}
      <line x1="205" y1="10" x2="205" y2="208" stroke="#0E1C2C" strokeWidth="1"/>

      {/* Admin dashboard title */}
      <text x="214" y="16" fontSize="9" fill="#2A4A7A" fontFamily="monospace" fontWeight="bold">ADMIN DASHBOARD · Evolve Hub</text>
      <text x="214" y="26" fontSize="6" fill="#1A2A4A" fontFamily="monospace">14 programs · 15 staff · Live</text>

      {/* Risk priority queue */}
      {PF_QUEUE.map(({level,c,bg,desc,quote},i)=>(
        <g key={i} transform={`translate(214,${32+i*54})`}>
          <rect width="338" height="48" rx="4" fill={bg} stroke={c} strokeWidth="0.8"/>
          <rect x="0" y="0" width={level.length*7+10} height="14" rx="2" fill={c} opacity="0.9"/>
          <text x="5" y="10" fontSize="7" fill="#060910" fontFamily="monospace" fontWeight="bold">{level}</text>
          <text x={level.length*7+14} y="10" fontSize="6" fill="#6B7280" fontFamily="monospace">{desc}</text>
          <text x="10" y="34" fontSize="8" fill={c} fontFamily="monospace" opacity="0.85">{quote}</text>
        </g>
      ))}

      {/* Analytics strip */}
      <rect x="214" y="198" width="338" height="20" rx="3" fill="#080F1C" stroke="#1A2A4A" strokeWidth="1"/>
      {[{l:"Referrals",v:"12",c:"#60A5FA"},{l:"Avg resp.",v:"3.2m",c:"#4ADE80"},{l:"High risk",v:"2",c:"#F87171"},{l:"QR scans",v:"8",c:"#FBBF24"}].map(({l,v,c},i)=>(
        <g key={l} transform={`translate(${224+i*82},203)`}>
          <text x="0" y="7" fontSize="6" fill="#1A3060" fontFamily="monospace">{l}</text>
          <text x="0" y="16" fontSize="8" fill={c} fontFamily="monospace" fontWeight="bold">{v}</text>
        </g>
      ))}
    </svg>
  );
}

const ILLUSTRATIONS: Record<Project["placeholderVariant"], React.FC> = {
  medvault:   MedVaultIllustration,
  ocius:      OciusIllustration,
  mangrag:    MangRAGIllustration,
  rna:        RNAIllustration,
  llama:      LlamaIllustration,
  deceptiona: DeceptionArenaIllustration,
  chronolens: ChronoLensIllustration,
  pathfinder: PathFinderIllustration,
};

// ── Filter chips ──────────────────────────────────────────────────────────────

const FILTERS = ["All", "AI/ML", "Full Stack", "Research"] as const;
type Filter = (typeof FILTERS)[number];

function FilterChips({ active, onSelect }: { active: Filter; onSelect: (f: Filter) => void }) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onSelect(f)}
          className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-150 ${
            active === f
              ? "bg-accent text-white shadow-sm"
              : "bg-surface border border-border text-text-3 hover:text-text-1 hover:border-border-strong"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

// ── Project card ──────────────────────────────────────────────────────────────

function TechChip({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 rounded-full border border-border bg-surface text-[11px] font-medium text-text-3">
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Illustration = ILLUSTRATIONS[project.placeholderVariant];
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, delay: index * 0.04 }}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
      className="rounded-2xl border border-border bg-bg-subtle overflow-hidden flex flex-col transition-shadow"
    >
      {/* Illustration */}
      <div className="aspect-video relative overflow-hidden border-b border-border">
        {/* TODO: replace with real screenshot — set project.image in content.ts */}
        {project.image
          ? <Image src={project.image} alt={project.title} fill className="object-cover" />
          : <Illustration />
        }
        {/* Corner number */}
        <span className="absolute bottom-2 right-3 text-[11px] font-[var(--font-mono)] font-bold text-white/20 select-none">
          {num}
        </span>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {project.featured && (
            <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-accent text-white tracking-wide">
              Featured
            </span>
          )}
          {project.inProgress && (
            <span className="animate-pulse-badge text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-surface/90 border border-border text-text-3 tracking-wide backdrop-blur-sm">
              In Progress
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col grow">
        <h3 className="text-[17px] font-bold text-text-1 mb-2 leading-snug">{project.title}</h3>
        <p className="text-[13px] text-text-2 leading-relaxed mb-4 grow line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-1">
          {project.tech.slice(0, 4).map((t) => <TechChip key={t} label={t} />)}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-1 text-[12px] text-text-4">+{project.tech.length - 4}</span>
          )}
        </div>
        <ProjectLinks project={project} />
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.tags?.includes(active as ProjectTag));

  return (
    <section id="projects" className="section-gap border-t border-border">
      <div className="container-wide">
        <AnimatedSection>
          <span className="section-label">Projects</span>
          <h2 className="text-[32px] md:text-[42px] font-bold text-text-1 tracking-tight leading-tight mb-3">
            Things I&apos;ve built.
          </h2>
          <p className="text-[17px] text-text-3 mb-10 max-w-xl leading-relaxed">
            From production computer vision to clinical AI — projects that ship and push boundaries.
          </p>
        </AnimatedSection>

        <FilterChips active={active} onSelect={setActive} />

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
