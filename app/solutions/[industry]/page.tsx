import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industryData } from "@/lib/industry-data";

export async function generateStaticParams() {
  return Object.keys(industryData).map((industry) => ({ industry }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const data = industryData[industry];
  if (!data) return { title: "Industry Not Found" };
  return {
    title: `${data.title} Robotics Solutions — RBOT`,
    description: data.tagline,
  };
}

/* ── SVG Diagrams ─────────────────────────────────────────────── */

function ManufacturingSVG() {
  return (
    <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 500, display: "block" }}>
      {/* Background */}
      <rect width="500" height="350" fill="var(--bg2)" rx="3" />
      {/* Grid floor */}
      {[60,120,180,240,300,360,420].map(x => <line key={`vg-${x}`} x1={x} y1="30" x2={x} y2="320" stroke="var(--bdr)" strokeWidth="0.5" />)}
      {[60,120,180,240,300].map(y => <line key={`hg-${y}`} x1="30" y1={y} x2="470" y2={y} stroke="var(--bdr)" strokeWidth="0.5" />)}
      {/* Assembly line conveyor */}
      <rect x="60" y="140" width="380" height="22" fill="var(--bdr2)" rx="2" />
      <rect x="60" y="142" width="380" height="18" fill="none" stroke="var(--bdr3)" strokeWidth="1" strokeDasharray="12 6" />
      {/* AMR path */}
      <path d="M 40 260 H 460 V 200 H 40 V 100" stroke="var(--acc)" strokeWidth="1.5" strokeDasharray="6 4" fill="none" opacity="0.6" />
      {/* Robotic Arms at stations */}
      {[100, 200, 300, 400].map((x, i) => (
        <g key={`arm-${i}`}>
          <rect x={x - 14} y="100" width="28" height="36" fill="var(--bg3)" stroke="var(--bdr3)" strokeWidth="1" rx="2" />
          <line x1={x} y1="100" x2={x - 16} y2="82" stroke="var(--acc)" strokeWidth="2" strokeLinecap="round" />
          <line x1={x - 16} y1="82" x2={x - 8} y2="70" stroke="var(--acc)" strokeWidth="2" strokeLinecap="round" />
          <circle cx={x - 16} cy="82" r="3" fill="var(--acc)" />
          <circle cx={x - 8} cy="70" r="2.5" fill="var(--t3)" />
          <text x={x} y="148" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">ARM</text>
        </g>
      ))}
      {/* AMR robot */}
      <g>
        <rect x="200" y="245" width="32" height="24" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1.2" rx="2" />
        <circle cx="207" cy="274" r="4" fill="var(--bdr3)" />
        <circle cx="225" cy="274" r="4" fill="var(--bdr3)" />
        <text x="216" y="260" textAnchor="middle" fontSize="7" fill="var(--acc)" fontFamily="monospace">AMR</text>
      </g>
      {/* Inspection station */}
      <rect x="350" y="85" width="50" height="40" fill="var(--bg3)" stroke="var(--good)" strokeWidth="1.2" rx="2" />
      <text x="375" y="101" textAnchor="middle" fontSize="7" fill="var(--good)" fontFamily="monospace">VISION</text>
      <text x="375" y="114" textAnchor="middle" fontSize="7" fill="var(--good)" fontFamily="monospace">INSPECT</text>
      {/* Zone labels */}
      <text x="60" y="50" fontSize="8" fill="var(--t3)" fontFamily="monospace">ZONE A — ASSEMBLY</text>
      <text x="60" y="330" fontSize="8" fill="var(--t3)" fontFamily="monospace">ZONE B — AMR TRANSPORT LOOP</text>
      {/* Parts on conveyor */}
      {[90, 160, 230, 310, 390].map((x, i) => (
        <rect key={`part-${i}`} x={x} y="144" width="14" height="14" fill="var(--bdr3)" rx="1" />
      ))}
      {/* Dock area */}
      <rect x="420" y="250" width="50" height="60" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
      <text x="445" y="278" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">DOCK</text>
      {/* Legend */}
      <line x1="40" y1="16" x2="56" y2="16" stroke="var(--acc)" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="60" y="20" fontSize="8" fill="var(--t3)" fontFamily="monospace">AMR ROUTE</text>
    </svg>
  );
}

function WarehousingFacilitySVG() {
  return (
    <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 500, display: "block" }}>
      <rect width="500" height="350" fill="var(--bg2)" rx="3" />
      {/* Racking aisles */}
      {[0, 1, 2, 3].map(col => (
        <g key={`rack-col-${col}`}>
          <rect x={40 + col * 100} y="40" width="35" height="220" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" />
          <rect x={79 + col * 100} y="40" width="35" height="220" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" />
          {[0,1,2,3,4].map(row => (
            <line key={`shelf-${col}-${row}`} x1={40 + col * 100} y1={60 + row * 40} x2={113 + col * 100} y2={60 + row * 40} stroke="var(--bdr3)" strokeWidth="0.8" />
          ))}
          <text x={76 + col * 100} y="275" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="monospace">AISLE {col + 1}</text>
        </g>
      ))}
      {/* AMR routes through aisles */}
      {[0, 1, 2, 3].map(col => (
        <line key={`amr-path-${col}`} x1={76 + col * 100} y1="42" x2={76 + col * 100} y2="260" stroke="var(--acc)" strokeWidth="1.2" strokeDasharray="5 4" opacity="0.7" />
      ))}
      {/* Horizontal route at pick station level */}
      <path d="M 40 290 H 460" stroke="var(--acc)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
      {/* Pick station */}
      <rect x="400" y="250" width="70" height="60" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1.2" rx="2" />
      <text x="435" y="274" textAnchor="middle" fontSize="7" fill="var(--acc)" fontFamily="monospace">PICK</text>
      <text x="435" y="285" textAnchor="middle" fontSize="7" fill="var(--acc)" fontFamily="monospace">STATION</text>
      {/* Dock doors */}
      {[0, 1, 2].map(d => (
        <g key={`dock-${d}`}>
          <rect x={30 + d * 55} y="308" width="45" height="30" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" rx="1" />
          <text x={52 + d * 55} y="328" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">D{d + 1}</text>
        </g>
      ))}
      {/* AMR robots in aisles */}
      <g>
        <rect x="63" y="150" width="26" height="20" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1" rx="2" />
        <text x="76" y="163" textAnchor="middle" fontSize="7" fill="var(--acc)" fontFamily="monospace">AMR</text>
      </g>
      <g>
        <rect x="263" y="100" width="26" height="20" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1" rx="2" />
        <text x="276" y="113" textAnchor="middle" fontSize="7" fill="var(--acc)" fontFamily="monospace">AMR</text>
      </g>
      {/* Inventory robots */}
      <circle cx="163" cy="200" r="10" fill="var(--bg3)" stroke="var(--good)" strokeWidth="1.2" />
      <text x="163" y="204" textAnchor="middle" fontSize="6" fill="var(--good)" fontFamily="monospace">INV</text>
      {/* Zone label */}
      <text x="40" y="22" fontSize="8" fill="var(--t3)" fontFamily="monospace">STORAGE — ZONES 1-4 — PICK STATION — SHIPPING DOCK</text>
      <line x1="330" y1="16" x2="346" y2="16" stroke="var(--acc)" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="350" y="20" fontSize="8" fill="var(--t3)" fontFamily="monospace">AMR ROUTE</text>
    </svg>
  );
}

function DistributionSVG() {
  return (
    <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 500, display: "block" }}>
      <rect width="500" height="350" fill="var(--bg2)" rx="3" />
      {/* Main conveyor belt horizontal */}
      <rect x="30" y="155" width="440" height="20" fill="var(--bdr2)" rx="2" />
      <rect x="30" y="157" width="440" height="16" fill="none" stroke="var(--bdr3)" strokeWidth="1" strokeDasharray="10 5" />
      {/* Inbound spurs */}
      <rect x="30" y="70" width="120" height="16" fill="var(--bdr2)" rx="2" />
      <path d="M 90 86 L 90 155" stroke="var(--bdr3)" strokeWidth="16" strokeLinecap="square" />
      <rect x="30" y="72" width="120" height="12" fill="none" stroke="var(--bdr3)" strokeWidth="1" strokeDasharray="8 4" />
      {/* Outbound spurs */}
      {[0, 1, 2, 3].map(i => (
        <g key={`spur-${i}`}>
          <rect x={280 + i * 52} y="175" width="16" height="90" fill="var(--bdr2)" rx="2" />
          <text x={288 + i * 52} y="285" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace" transform={`rotate(-90, ${288 + i * 52}, 285)`}>LANE {i + 1}</text>
        </g>
      ))}
      {/* Divert robot */}
      <g>
        <rect x="253" y="145" width="30" height="40" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1.2" rx="2" />
        <text x="268" y="162" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">SORT</text>
        <text x="268" y="172" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">BOT</text>
      </g>
      {/* Induction robot */}
      <g>
        <rect x="110" y="140" width="28" height="36" fill="var(--bg3)" stroke="var(--good)" strokeWidth="1.2" rx="2" />
        <text x="124" y="156" textAnchor="middle" fontSize="6" fill="var(--good)" fontFamily="monospace">IND</text>
        <text x="124" y="166" textAnchor="middle" fontSize="6" fill="var(--good)" fontFamily="monospace">UCT</text>
      </g>
      {/* Parcels on belt */}
      {[60, 140, 210, 340, 400, 450].map((x, i) => (
        <rect key={`parcel-${i}`} x={x} y="158" width="16" height="13" fill="var(--bdr3)" rx="1" />
      ))}
      {/* Palletizer */}
      <rect x="410" y="225" width="55" height="65" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
      <text x="437" y="250" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">PALLET</text>
      <text x="437" y="262" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">IZER</text>
      {/* Scan tunnel */}
      <rect x="170" y="140" width="40" height="36" fill="var(--bg3)" stroke="var(--warn)" strokeWidth="1" rx="2" />
      <text x="190" y="155" textAnchor="middle" fontSize="6" fill="var(--warn)" fontFamily="monospace">SCAN</text>
      <text x="190" y="165" textAnchor="middle" fontSize="6" fill="var(--warn)" fontFamily="monospace">DIMN</text>
      {/* Inbound label */}
      <text x="40" y="22" fontSize="8" fill="var(--t3)" fontFamily="monospace">INBOUND — CONVEYOR — SORTATION — OUTBOUND LANES</text>
      <text x="30" y="60" fontSize="8" fill="var(--t3)" fontFamily="monospace">INBOUND</text>
      <text x="420" y="335" fontSize="8" fill="var(--t3)" fontFamily="monospace">STAGING</text>
    </svg>
  );
}

function LogisticsSVG() {
  return (
    <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 500, display: "block" }}>
      <rect width="500" height="350" fill="var(--bg2)" rx="3" />
      {/* Dock wall */}
      <rect x="30" y="130" width="440" height="12" fill="var(--bdr2)" stroke="var(--bdr3)" strokeWidth="1" />
      <text x="250" y="125" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="monospace">DOCK WALL</text>
      {/* Truck bays */}
      {[0, 1, 2, 3, 4].map(b => (
        <g key={`bay-${b}`}>
          <rect x={40 + b * 86} y="42" width="76" height="90" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1.2" rx="2" />
          <rect x={54 + b * 86} y="52" width="48" height="72" fill="var(--bdr)" rx="1" />
          <text x={78 + b * 86} y="98" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">TRAILER</text>
          <text x={78 + b * 86} y="108" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">BAY {b + 1}</text>
        </g>
      ))}
      {/* Dock doors at wall */}
      {[0, 1, 2, 3, 4].map(b => (
        <rect key={`door-${b}`} x={55 + b * 86} y="130" width="46" height="18" fill="var(--bg1)" stroke="var(--bdr3)" strokeWidth="1" />
      ))}
      {/* Loading robot in bay 2 */}
      <g>
        <rect x="170" y="80" width="34" height="28" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1.2" rx="2" />
        <text x="187" y="91" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">LOAD</text>
        <text x="187" y="101" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">ROBOT</text>
      </g>
      {/* Unload robot in bay 4 */}
      <g>
        <rect x="344" y="75" width="34" height="28" fill="var(--acc-bg)" stroke="var(--good)" strokeWidth="1.2" rx="2" />
        <text x="361" y="86" textAnchor="middle" fontSize="6" fill="var(--good)" fontFamily="monospace">UNLD</text>
        <text x="361" y="96" textAnchor="middle" fontSize="6" fill="var(--good)" fontFamily="monospace">ROBOT</text>
      </g>
      {/* Dock floor AMRs */}
      <path d="M 60 200 H 440 V 280" stroke="var(--acc)" strokeWidth="1.5" strokeDasharray="7 5" opacity="0.7" />
      <g>
        <rect x="210" y="190" width="28" height="22" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1" rx="2" />
        <text x="224" y="204" textAnchor="middle" fontSize="7" fill="var(--acc)" fontFamily="monospace">AMR</text>
      </g>
      {/* Scan gate */}
      <rect x="65" y="150" width="20" height="44" fill="var(--bg3)" stroke="var(--warn)" strokeWidth="1" rx="1" />
      <rect x="85" y="156" width="180" height="32" fill="none" stroke="var(--warn)" strokeWidth="0.5" strokeDasharray="4 3" />
      <text x="75" y="185" fontSize="7" fill="var(--warn)" fontFamily="monospace">SCAN GATE</text>
      {/* Yard area */}
      <rect x="30" y="290" width="440" height="50" fill="var(--bg1)" stroke="var(--bdr)" strokeWidth="1" rx="2" />
      <text x="250" y="320" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="monospace">YARD — AUTONOMOUS SPOTTER TRUCK ZONE</text>
      <rect x="380" y="296" width="60" height="36" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
      <text x="410" y="316" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">AUTO YARD</text>
    </svg>
  );
}

function RetailSVG() {
  return (
    <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 500, display: "block" }}>
      <rect width="500" height="350" fill="var(--bg2)" rx="3" />
      {/* Store outline */}
      <rect x="30" y="30" width="440" height="290" fill="var(--bg1)" stroke="var(--bdr2)" strokeWidth="1.5" rx="3" />
      {/* Shelving aisles */}
      {[0, 1, 2, 3].map(col => (
        <g key={`shelf-col-${col}`}>
          <rect x={60 + col * 90} y="60" width="60" height="180" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" rx="1" />
          {[0, 1, 2, 3, 4].map(row => (
            <line key={`sh-${col}-${row}`} x1={60 + col * 90} y1={80 + row * 32} x2={119 + col * 90} y2={80 + row * 32} stroke="var(--bdr3)" strokeWidth="0.8" />
          ))}
          <text x={90 + col * 90} y="252" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">AISLE {col + 1}</text>
        </g>
      ))}
      {/* Inventory robot path */}
      <path d="M 50 130 H 440 V 160 H 50 V 190 H 440" stroke="var(--acc)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />
      {/* Inventory audit robot */}
      <g>
        <rect x="280" y="120" width="32" height="26" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1.2" rx="2" />
        <rect x="288" y="114" width="16" height="10" fill="var(--bg3)" stroke="var(--acc)" strokeWidth="0.8" rx="1" />
        <text x="296" y="130" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">TALLY</text>
        <text x="296" y="139" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">BOT</text>
      </g>
      {/* Cleaning robot */}
      <g>
        <circle cx="430" cy="270" r="18" fill="var(--bg3)" stroke="var(--good)" strokeWidth="1.2" />
        <text x="430" y="268" textAnchor="middle" fontSize="6" fill="var(--good)" fontFamily="monospace">CLEAN</text>
        <text x="430" y="278" textAnchor="middle" fontSize="6" fill="var(--good)" fontFamily="monospace">BOT</text>
      </g>
      {/* Checkout area */}
      <rect x="350" y="60" width="100" height="60" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
      <text x="400" y="85" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">CHECKOUT</text>
      <text x="400" y="97" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">AREA</text>
      {/* Backroom */}
      <rect x="30" y="260" width="120" height="60" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
      <text x="90" y="285" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">BACK</text>
      <text x="90" y="296" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">ROOM</text>
      {/* BOPIS area */}
      <rect x="160" y="270" width="80" height="50" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1" rx="2" />
      <text x="200" y="291" textAnchor="middle" fontSize="7" fill="var(--acc)" fontFamily="monospace">BOPIS</text>
      <text x="200" y="302" textAnchor="middle" fontSize="7" fill="var(--acc)" fontFamily="monospace">PICKUP</text>
      {/* Legend */}
      <text x="40" y="22" fontSize="8" fill="var(--t3)" fontFamily="monospace">STORE FLOOR PLAN — INVENTORY AUDIT ROBOT ROUTE</text>
      <line x1="350" y1="16" x2="366" y2="16" stroke="var(--acc)" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="370" y="20" fontSize="8" fill="var(--t3)" fontFamily="monospace">AUDIT ROUTE</text>
    </svg>
  );
}

function HealthcareSVG() {
  return (
    <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 500, display: "block" }}>
      <rect width="500" height="350" fill="var(--bg2)" rx="3" />
      {/* Main corridor */}
      <rect x="30" y="155" width="440" height="50" fill="var(--bg1)" stroke="var(--bdr2)" strokeWidth="1" />
      <text x="250" y="184" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="monospace">MAIN CORRIDOR — FLOOR 3</text>
      {/* Patient rooms top */}
      {[0, 1, 2, 3, 4].map(r => (
        <g key={`room-top-${r}`}>
          <rect x={40 + r * 84} y="60" width="70" height="90" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
          <text x={75 + r * 84} y="100" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">ROOM</text>
          <text x={75 + r * 84} y="112" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">{30 + r}</text>
          {/* Bed icon */}
          <rect x={53 + r * 84} y="70" width="34" height="16" fill="var(--bdr2)" rx="2" />
        </g>
      ))}
      {/* Patient rooms bottom */}
      {[0, 1, 2, 3, 4].map(r => (
        <g key={`room-bot-${r}`}>
          <rect x={40 + r * 84} y="210" width="70" height="90" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
          <text x={75 + r * 84} y="252" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">ROOM</text>
          <text x={75 + r * 84} y="264" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">{35 + r}</text>
          <rect x={53 + r * 84} y="220" width="34" height="16" fill="var(--bdr2)" rx="2" />
        </g>
      ))}
      {/* Delivery robot path */}
      <path d="M 30 180 H 250 V 155 H 370 V 180 H 470" stroke="var(--acc)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />
      {/* Delivery robot */}
      <g>
        <rect x="195" y="162" width="30" height="30" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1.2" rx="2" />
        <text x="210" y="175" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">RELAY</text>
        <text x="210" y="185" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">ROBOT</text>
      </g>
      {/* UV robot */}
      <g>
        <circle cx="390" cy="240" r="16" fill="var(--bg3)" stroke="var(--warn)" strokeWidth="1.2" />
        <text x="390" y="237" textAnchor="middle" fontSize="6" fill="var(--warn)" fontFamily="monospace">UV-C</text>
        <text x="390" y="247" textAnchor="middle" fontSize="6" fill="var(--warn)" fontFamily="monospace">DISINFECT</text>
      </g>
      {/* Nursing station */}
      <rect x="380" y="155" width="90" height="50" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1" rx="2" />
      <text x="425" y="179" textAnchor="middle" fontSize="7" fill="var(--acc)" fontFamily="monospace">NURSING</text>
      <text x="425" y="190" textAnchor="middle" fontSize="7" fill="var(--acc)" fontFamily="monospace">STATION</text>
      {/* Elevator */}
      <rect x="30" y="155" width="40" height="50" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" />
      <text x="50" y="181" textAnchor="middle" fontSize="6" fill="var(--t3)" fontFamily="monospace">ELEV</text>
      {/* Legend */}
      <text x="40" y="22" fontSize="8" fill="var(--t3)" fontFamily="monospace">HOSPITAL FLOOR 3 — DELIVERY ROBOT ROUTE</text>
      <line x1="330" y1="16" x2="346" y2="16" stroke="var(--acc)" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="350" y="20" fontSize="8" fill="var(--t3)" fontFamily="monospace">ROBOT ROUTE</text>
    </svg>
  );
}

function HospitalitySVG() {
  return (
    <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 500, display: "block" }}>
      <rect width="500" height="350" fill="var(--bg2)" rx="3" />
      {/* Hotel corridor */}
      <rect x="30" y="160" width="440" height="40" fill="var(--bg1)" stroke="var(--bdr2)" strokeWidth="1" />
      <text x="250" y="184" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="monospace">GUEST FLOOR 8 — CORRIDOR</text>
      {/* Guest rooms top */}
      {[0, 1, 2, 3, 4, 5].map(r => (
        <g key={`groom-top-${r}`}>
          <rect x={36 + r * 72} y="60" width="60" height="98" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
          <rect x={46 + r * 72} y="70" width="40" height="22" fill="var(--bdr2)" rx="2" />
          <text x={66 + r * 72} y="108" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">8{r + 1}{r < 10 ? "0" : ""}</text>
        </g>
      ))}
      {/* Guest rooms bottom */}
      {[0, 1, 2, 3, 4, 5].map(r => (
        <g key={`groom-bot-${r}`}>
          <rect x={36 + r * 72} y="202" width="60" height="98" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
          <rect x={46 + r * 72} y="210" width="40" height="22" fill="var(--bdr2)" rx="2" />
          <text x={66 + r * 72} y="252" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">8{r + 7}</text>
        </g>
      ))}
      {/* Delivery robot path */}
      <path d="M 30 180 H 160 V 160 H 320 V 180 H 470" stroke="var(--acc)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />
      {/* Delivery robot */}
      <g>
        <rect x="242" y="164" width="28" height="32" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1.2" rx="3" />
        <text x="256" y="177" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">RELAY</text>
        <text x="256" y="187" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">DLVRY</text>
      </g>
      {/* Cleaning robot */}
      <g>
        <circle cx="130" cy="180" r="15" fill="var(--bg3)" stroke="var(--good)" strokeWidth="1.2" />
        <text x="130" y="177" textAnchor="middle" fontSize="6" fill="var(--good)" fontFamily="monospace">CLEAN</text>
        <text x="130" y="187" textAnchor="middle" fontSize="6" fill="var(--good)" fontFamily="monospace">BOT</text>
      </g>
      {/* Elevator bank */}
      <rect x="30" y="160" width="50" height="40" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" />
      <text x="55" y="181" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">ELEV</text>
      <text x="55" y="191" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">BANK</text>
      {/* Linen closet */}
      <rect x="420" y="160" width="50" height="40" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" />
      <text x="445" y="177" textAnchor="middle" fontSize="6" fill="var(--t3)" fontFamily="monospace">LINEN</text>
      <text x="445" y="188" textAnchor="middle" fontSize="6" fill="var(--t3)" fontFamily="monospace">CLOSET</text>
      {/* Legend */}
      <text x="40" y="22" fontSize="8" fill="var(--t3)" fontFamily="monospace">HOTEL FLOOR PLAN — ROOM DELIVERY + CLEANING ROUTES</text>
      <line x1="340" y1="16" x2="356" y2="16" stroke="var(--acc)" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="360" y="20" fontSize="8" fill="var(--t3)" fontFamily="monospace">ROBOT ROUTE</text>
    </svg>
  );
}

function ConstructionSVG() {
  return (
    <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 500, display: "block" }}>
      <rect width="500" height="350" fill="var(--bg2)" rx="3" />
      {/* Site perimeter */}
      <rect x="30" y="30" width="440" height="290" fill="var(--bg1)" stroke="var(--bdr2)" strokeWidth="1.5" strokeDasharray="8 4" rx="3" />
      {/* Building footprint */}
      <rect x="100" y="80" width="280" height="180" fill="var(--bg3)" stroke="var(--bdr3)" strokeWidth="1.5" rx="2" />
      {/* Grid on slab */}
      {[0,1,2,3,4,5,6].map(i => <line key={`sg-v-${i}`} x1={100 + i * 40} y1="80" x2={100 + i * 40} y2="260" stroke="var(--bdr)" strokeWidth="0.5" />)}
      {[0,1,2,3,4].map(i => <line key={`sg-h-${i}`} x1="100" y1={80 + i * 36} x2="380" y2={80 + i * 36} stroke="var(--bdr)" strokeWidth="0.5" />)}
      {/* Layout robot */}
      <g>
        <rect x="148" y="118" width="32" height="26" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1.2" rx="2" />
        <text x="164" y="129" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">LAYOUT</text>
        <text x="164" y="138" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">ROBOT</text>
      </g>
      {/* Layout robot path (zigzag on slab) */}
      <path d="M 110 92 H 370 V 128 H 110 V 164 H 370 V 200 H 110" stroke="var(--acc)" strokeWidth="1.2" strokeDasharray="5 3" opacity="0.7" />
      {/* Inspection robot (Spot-like) */}
      <g>
        <rect x="280" y="155" width="28" height="20" fill="var(--bg3)" stroke="var(--good)" strokeWidth="1.2" rx="2" />
        <line x1="285" y1="175" x2="280" y2="185" stroke="var(--good)" strokeWidth="1.5" />
        <line x1="300" y1="175" x2="296" y2="185" stroke="var(--good)" strokeWidth="1.5" />
        <line x1="285" y1="175" x2="284" y2="188" stroke="var(--good)" strokeWidth="1.5" />
        <line x1="300" y1="175" x2="302" y2="188" stroke="var(--good)" strokeWidth="1.5" />
        <text x="294" y="150" textAnchor="middle" fontSize="6" fill="var(--good)" fontFamily="monospace">SPOT</text>
      </g>
      {/* Drone */}
      <g>
        <circle cx="370" cy="50" r="10" fill="var(--bg3)" stroke="var(--warn)" strokeWidth="1.2" />
        <line x1="360" y1="46" x2="350" y2="38" stroke="var(--warn)" strokeWidth="1.2" />
        <line x1="380" y1="46" x2="390" y2="38" stroke="var(--warn)" strokeWidth="1.2" />
        <line x1="360" y1="54" x2="350" y2="62" stroke="var(--warn)" strokeWidth="1.2" />
        <line x1="380" y1="54" x2="390" y2="62" stroke="var(--warn)" strokeWidth="1.2" />
        <text x="370" y="53" textAnchor="middle" fontSize="6" fill="var(--warn)" fontFamily="monospace">DRONE</text>
      </g>
      {/* Drone survey path */}
      <path d="M 370 60 V 80 M 370 80 L 100 80" stroke="var(--warn)" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      {/* Laydown area */}
      <rect x="30" y="230" width="60" height="60" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
      <text x="60" y="258" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">LAYER</text>
      <text x="60" y="269" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">DOWN</text>
      {/* Material AMR */}
      <g>
        <rect x="55" y="175" width="28" height="22" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1" rx="2" />
        <text x="69" y="189" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">AMR</text>
      </g>
      <path d="M 60 230 V 198 H 100" stroke="var(--acc)" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
      {/* Columns on slab */}
      {[0,1,2,3].map(col => [0,1,2].map(row => (
        <rect key={`col-${col}-${row}`} x={107 + col * 84} y={87 + row * 72} width="10" height="10" fill="var(--bdr3)" />
      )))}
      {/* Legend */}
      <text x="40" y="22" fontSize="8" fill="var(--t3)" fontFamily="monospace">JOB SITE — SLAB LAYOUT + INSPECTION ROUTES</text>
      <line x1="360" y1="335" x2="376" y2="335" stroke="var(--warn)" strokeWidth="1" strokeDasharray="3 2" />
      <text x="380" y="339" fontSize="7" fill="var(--t3)" fontFamily="monospace">DRONE</text>
      <line x1="410" y1="335" x2="426" y2="335" stroke="var(--acc)" strokeWidth="1" strokeDasharray="3 2" />
      <text x="430" y="339" fontSize="7" fill="var(--t3)" fontFamily="monospace">LAYOUT / AMR</text>
    </svg>
  );
}

function FoodBeverageSVG() {
  return (
    <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 500, display: "block" }}>
      <rect width="500" height="350" fill="var(--bg2)" rx="3" />
      {/* Production line main conveyor */}
      <rect x="30" y="145" width="440" height="22" fill="var(--bdr2)" rx="2" />
      <rect x="30" y="147" width="440" height="18" fill="none" stroke="var(--bdr3)" strokeWidth="1" strokeDasharray="10 5" />
      {/* Filler station */}
      <rect x="60" y="100" width="55" height="42" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
      <text x="87" y="118" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">FILL</text>
      <text x="87" y="129" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">STATION</text>
      <line x1="87" y1="142" x2="87" y2="145" stroke="var(--bdr3)" strokeWidth="2" />
      {/* Vision inspection */}
      <rect x="155" y="95" width="55" height="48" fill="var(--bg3)" stroke="var(--good)" strokeWidth="1.2" rx="2" />
      <text x="182" y="113" textAnchor="middle" fontSize="7" fill="var(--good)" fontFamily="monospace">VISION</text>
      <text x="182" y="124" textAnchor="middle" fontSize="7" fill="var(--good)" fontFamily="monospace">INSPECT</text>
      <text x="182" y="135" textAnchor="middle" fontSize="7" fill="var(--good)" fontFamily="monospace">AI</text>
      <line x1="182" y1="143" x2="182" y2="145" stroke="var(--good)" strokeWidth="2" />
      {/* Checkweigher */}
      <rect x="250" y="110" width="55" height="32" fill="var(--bg3)" stroke="var(--warn)" strokeWidth="1" rx="2" />
      <text x="277" y="123" textAnchor="middle" fontSize="7" fill="var(--warn)" fontFamily="monospace">CHECK</text>
      <text x="277" y="134" textAnchor="middle" fontSize="7" fill="var(--warn)" fontFamily="monospace">WEIGHER</text>
      <line x1="277" y1="142" x2="277" y2="145" stroke="var(--warn)" strokeWidth="2" />
      {/* Packing robot (delta) */}
      <g>
        <circle cx="360" cy="95" r="22" fill="var(--bg3)" stroke="var(--acc)" strokeWidth="1.2" />
        <line x1="345" y1="82" x2="338" y2="115" stroke="var(--acc)" strokeWidth="1.5" />
        <line x1="360" y1="80" x2="360" y2="115" stroke="var(--acc)" strokeWidth="1.5" />
        <line x1="375" y1="82" x2="382" y2="115" stroke="var(--acc)" strokeWidth="1.5" />
        <circle cx="360" cy="118" r="5" fill="var(--acc)" opacity="0.7" />
        <text x="360" y="94" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">DELTA</text>
        <text x="360" y="104" textAnchor="middle" fontSize="6" fill="var(--acc)" fontFamily="monospace">PICK</text>
      </g>
      {/* Palletizer */}
      <rect x="420" y="90" width="50" height="52" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
      <text x="445" y="112" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">PALLET</text>
      <text x="445" y="123" textAnchor="middle" fontSize="7" fill="var(--t3)" fontFamily="monospace">IZER</text>
      {/* Products on belt */}
      {[80, 130, 200, 240, 295, 330, 400].map((x, i) => (
        <g key={`prod-${i}`}>
          <rect x={x} y="148" width="12" height="16" fill="var(--bdr3)" rx="1" />
        </g>
      ))}
      {/* X-ray tunnel */}
      <rect x="200" y="140" width="30" height="28" fill="var(--bg3)" stroke="var(--t3)" strokeWidth="1" rx="1" />
      <text x="215" y="152" textAnchor="middle" fontSize="5.5" fill="var(--t3)" fontFamily="monospace">X-RAY</text>
      <text x="215" y="161" textAnchor="middle" fontSize="5.5" fill="var(--t3)" fontFamily="monospace">SCAN</text>
      {/* CIP label */}
      <rect x="30" y="240" width="440" height="50" fill="var(--bg1)" stroke="var(--bdr)" strokeWidth="1" rx="2" />
      <text x="250" y="270" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="monospace">CIP ZONE — AUTOMATED SANITATION MONITORING</text>
      {/* Legend */}
      <text x="40" y="22" fontSize="8" fill="var(--t3)" fontFamily="monospace">FOOD PRODUCTION LINE — FILL → INSPECT → PACK → PALLETIZE</text>
    </svg>
  );
}

const diagrams: Record<string, () => React.JSX.Element> = {
  manufacturing: ManufacturingSVG,
  warehousing: WarehousingFacilitySVG,
  distribution: DistributionSVG,
  logistics: LogisticsSVG,
  retail: RetailSVG,
  healthcare: HealthcareSVG,
  hospitality: HospitalitySVG,
  construction: ConstructionSVG,
  "food-beverage": FoodBeverageSVG,
};

/* ── Page ──────────────────────────────────────────────────────── */

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const data = industryData[industry];
  if (!data) notFound();

  const DiagramComponent = diagrams[industry] ?? ManufacturingSVG;
  const challengeParas = data.challenge.split("\n\n").filter(Boolean);
  const economicsParas = data.economics.split("\n\n").filter(Boolean);
  const caseStudyParas = data.caseStudy.split("\n\n").filter(Boolean);

  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="page-hero">
        <span className="lbl">Industry Solutions / {data.title}</span>
        <h1 className="d1" style={{ maxWidth: 760, marginBottom: 20 }}>{data.title} Robotics</h1>
        <p className="body-lg" style={{ maxWidth: 580, marginBottom: 32 }}>{data.tagline}</p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Request Industry Assessment</Link>
          <Link href="/raas" className="btn btn-g">View RaaS Pricing</Link>
        </div>
      </div>

      {/* ── Facility Diagram ─────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <div className="sec-hd" style={{ marginBottom: 24 }}>
                <span className="lbl">Facility Overview</span>
                <h2 className="d2">How robots fit into your operation</h2>
              </div>
              <p className="body-lg">{challengeParas[0]}</p>
            </div>
            <div style={{ border: "1px solid var(--bdr2)", borderRadius: 3, overflow: "hidden", background: "var(--bg2)" }}>
              <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--bdr)", background: "var(--bg3)", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--bdr3)", display: "inline-block" }} />
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--bdr3)", display: "inline-block" }} />
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--bdr3)", display: "inline-block" }} />
                <span className="lbl" style={{ marginLeft: 8 }}>{data.title.toUpperCase()} — FACILITY DIAGRAM</span>
              </div>
              <div style={{ padding: 16 }}>
                <DiagramComponent />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenge ────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 60 }}>
            <div className="sec-hd" style={{ marginBottom: 0 }}>
              <span className="lbl">The Challenge</span>
              <h2 className="d2">Why {data.title} needs physical AI now</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {challengeParas.map((para, i) => (
                <p key={i} className="body-lg">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Robot Types ──────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Robotics for {data.title}</span>
            <h2 className="d2">The right hardware for your environment</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--bdr)", border: "1px solid var(--bdr)" }}>
            {data.robotTypes.map((rt, i) => (
              <div
                key={rt.type}
                style={{
                  background: "var(--bg)",
                  padding: "32px 28px",
                  borderBottom: "1px solid var(--bdr)",
                  transition: "background .14s",
                }}
              >
                <div className="ind-idx">RBT — {String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-.025em", marginBottom: 10, color: "var(--t1)" }}>{rt.type}</h3>
                <p className="body">{rt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Use Cases</span>
            <h2 className="d2">Specific applications in {data.title}</h2>
          </div>
          <div className="ind-grid">
            {data.useCases.map((uc, i) => (
              <div key={uc.title} className="ind-card">
                <div className="ind-idx">UC — {String(i + 1).padStart(2, "0")}</div>
                <h3>{uc.title}</h3>
                <p>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Economics ────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 60 }}>
            <div className="sec-hd" style={{ marginBottom: 0 }}>
              <span className="lbl">The Financial Case</span>
              <h2 className="d2">ROI in {data.title}</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {economicsParas.map((para, i) => (
                <p key={i} className="body-lg">{para}</p>
              ))}
              <div style={{ marginTop: 12 }}>
                <Link href="/assessment" className="btn btn-p">Get Your ROI Estimate</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Study ───────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Customer Results</span>
            <h2 className="d2">Case study</h2>
          </div>
          <div style={{
            background: "var(--bg1)",
            border: "1px solid var(--bdr2)",
            borderLeft: "3px solid var(--acc)",
            borderRadius: "0 3px 3px 0",
            padding: "40px 44px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <span className="lbl" style={{ color: "var(--acc)" }}>{data.title.toUpperCase()} DEPLOYMENT</span>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--good)", display: "inline-block" }} />
              <span className="lbl">DEPLOYED VIA RBOT RAAS</span>
            </div>
            {caseStudyParas.map((para, i) => (
              <p key={i} className="body-lg" style={{ marginBottom: i < caseStudyParas.length - 1 ? 20 : 0 }}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deployment Considerations ────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 60 }}>
            <div className="sec-hd" style={{ marginBottom: 0 }}>
              <span className="lbl">Deployment</span>
              <h2 className="d2">Environment-specific requirements</h2>
            </div>
            <div>
              <p className="body-lg">{data.deploymentConsiderations}</p>
              <div style={{ marginTop: 28, padding: "20px 24px", background: "var(--bg1)", border: "1px solid var(--bdr2)", borderRadius: 3 }}>
                <div className="lbl" style={{ marginBottom: 10, display: "block" }}>RBOT&apos;s Approach</div>
                <p className="body">{data.rbotApproach}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── System Integrations ──────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">System Integrations</span>
            <h2 className="d2">Platform connections for {data.title}</h2>
            <p className="body-lg">RBOT integrates with your existing technology stack — no rip-and-replace required.</p>
          </div>
          <div className="chips">
            {data.integrations.map((intg) => (
              <span key={intg} className="ichip">{intg}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="fcta">
        <div className="fcta-inner">
          <span className="lbl">{data.title} Robotics</span>
          <h2 className="d2">Ready to automate your {data.title.toLowerCase()} operation?</h2>
          <p className="body-lg">
            RBOT provides a free assessment that maps your specific workflows to the right robots, models your ROI, and designs a deployment plan that fits your timeline and budget.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request Free Assessment</Link>
            <Link href="/raas" className="btn btn-g">Explore RaaS Model</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
