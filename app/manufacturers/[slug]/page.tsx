import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { manufacturerData, manufacturerBySlug, type SvgType } from "@/lib/manufacturer-data";

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return manufacturerData.map((m) => ({ slug: m.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = manufacturerBySlug[slug];
  if (!m) return { title: "Not Found" };
  return {
    title: `${m.name} – Robotics Manufacturer Profile`,
    description: `${m.name} manufacturer profile: robots, technology, deployment details, and how RBOT integrates ${m.name} hardware for enterprise customers.`,
  };
}

// ── SVG illustrations ─────────────────────────────────────────────────────────

function HumanoidSvg() {
  return (
    <svg
      viewBox="0 0 400 360"
      width="100%"
      style={{ maxWidth: 400 }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* background grid */}
      <defs>
        <pattern id="hgrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--bdr)" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="400" height="360" fill="url(#hgrid)" />

      {/* HEAD */}
      <circle cx="200" cy="46" r="24" stroke="var(--t2)" strokeWidth="1.5" />
      {/* Vision sensors */}
      <circle cx="191" cy="43" r="5" stroke="var(--acc)" strokeWidth="1.2" />
      <circle cx="209" cy="43" r="5" stroke="var(--acc)" strokeWidth="1.2" />
      <circle cx="191" cy="43" r="2" fill="var(--acc)" opacity="0.4" />
      <circle cx="209" cy="43" r="2" fill="var(--acc)" opacity="0.4" />
      {/* head antenna */}
      <line x1="200" y1="22" x2="200" y2="14" stroke="var(--t2)" strokeWidth="1" />
      <circle cx="200" cy="12" r="3" stroke="var(--acc)" strokeWidth="1" />

      {/* NECK */}
      <rect x="192" y="70" width="16" height="14" rx="2" stroke="var(--t2)" strokeWidth="1.2" />

      {/* TORSO */}
      <rect x="162" y="84" width="76" height="88" rx="3" stroke="var(--t2)" strokeWidth="1.5" />
      {/* chest panel */}
      <rect x="174" y="96" width="52" height="36" rx="2" stroke="var(--acc)" strokeWidth="1" />
      <line x1="178" y1="108" x2="222" y2="108" stroke="var(--acc)" strokeWidth="0.7" strokeDasharray="3,2" />
      <line x1="178" y1="116" x2="222" y2="116" stroke="var(--acc)" strokeWidth="0.7" strokeDasharray="3,2" />
      <line x1="178" y1="124" x2="222" y2="124" stroke="var(--acc)" strokeWidth="0.7" strokeDasharray="3,2" />
      {/* torso center line */}
      <line x1="200" y1="84" x2="200" y2="172" stroke="var(--bdr3)" strokeWidth="0.5" strokeDasharray="4,3" />

      {/* SHOULDERS */}
      <circle cx="150" cy="94" r="10" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="250" cy="94" r="10" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="150" cy="94" r="4" stroke="var(--acc)" strokeWidth="1" />
      <circle cx="250" cy="94" r="4" stroke="var(--acc)" strokeWidth="1" />

      {/* LEFT ARM */}
      <line x1="141" y1="101" x2="118" y2="158" stroke="var(--t2)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="141" y1="101" x2="118" y2="158" stroke="var(--bg)" strokeWidth="1.5" />
      {/* left elbow */}
      <circle cx="118" cy="158" r="7" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="118" cy="158" r="3" stroke="var(--acc)" strokeWidth="1" />
      <line x1="118" y1="165" x2="106" y2="218" stroke="var(--t2)" strokeWidth="3" strokeLinecap="round" />
      <line x1="118" y1="165" x2="106" y2="218" stroke="var(--bg)" strokeWidth="1" />
      {/* left wrist */}
      <circle cx="106" cy="218" r="6" stroke="var(--acc)" strokeWidth="1.5" />
      {/* left hand */}
      <rect x="95" y="224" width="22" height="26" rx="3" stroke="var(--t2)" strokeWidth="1.2" />
      <line x1="100" y1="224" x2="97" y2="210" stroke="var(--t2)" strokeWidth="1" />
      <line x1="106" y1="224" x2="105" y2="210" stroke="var(--t2)" strokeWidth="1" />
      <line x1="112" y1="224" x2="113" y2="210" stroke="var(--t2)" strokeWidth="1" />
      <line x1="118" y1="224" x2="119" y2="210" stroke="var(--t2)" strokeWidth="1" />

      {/* RIGHT ARM */}
      <line x1="259" y1="101" x2="282" y2="158" stroke="var(--t2)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="259" y1="101" x2="282" y2="158" stroke="var(--bg)" strokeWidth="1.5" />
      {/* right elbow */}
      <circle cx="282" cy="158" r="7" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="282" cy="158" r="3" stroke="var(--acc)" strokeWidth="1" />
      <line x1="282" y1="165" x2="294" y2="218" stroke="var(--t2)" strokeWidth="3" strokeLinecap="round" />
      <line x1="282" y1="165" x2="294" y2="218" stroke="var(--bg)" strokeWidth="1" />
      {/* right wrist */}
      <circle cx="294" cy="218" r="6" stroke="var(--acc)" strokeWidth="1.5" />
      {/* right hand */}
      <rect x="283" y="224" width="22" height="26" rx="3" stroke="var(--t2)" strokeWidth="1.2" />
      <line x1="288" y1="224" x2="285" y2="210" stroke="var(--t2)" strokeWidth="1" />
      <line x1="294" y1="224" x2="293" y2="210" stroke="var(--t2)" strokeWidth="1" />
      <line x1="300" y1="224" x2="301" y2="210" stroke="var(--t2)" strokeWidth="1" />
      <line x1="306" y1="224" x2="307" y2="210" stroke="var(--t2)" strokeWidth="1" />

      {/* HIP */}
      <rect x="168" y="172" width="64" height="18" rx="3" stroke="var(--t2)" strokeWidth="1.5" />
      {/* hip joints */}
      <circle cx="180" cy="190" r="8" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="220" cy="190" r="8" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="180" cy="190" r="3" stroke="var(--acc)" strokeWidth="1" />
      <circle cx="220" cy="190" r="3" stroke="var(--acc)" strokeWidth="1" />

      {/* LEFT LEG */}
      <line x1="177" y1="198" x2="168" y2="264" stroke="var(--t2)" strokeWidth="4" strokeLinecap="round" />
      <line x1="177" y1="198" x2="168" y2="264" stroke="var(--bg)" strokeWidth="1.5" />
      {/* left knee */}
      <circle cx="168" cy="264" r="8" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="168" cy="264" r="3" stroke="var(--acc)" strokeWidth="1" />
      <line x1="168" y1="272" x2="162" y2="330" stroke="var(--t2)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="168" y1="272" x2="162" y2="330" stroke="var(--bg)" strokeWidth="1.2" />
      {/* left ankle */}
      <circle cx="162" cy="330" r="6" stroke="var(--acc)" strokeWidth="1.5" />
      {/* left foot */}
      <path d="M 143 335 L 180 335 L 180 346 L 140 346 Z" stroke="var(--t2)" strokeWidth="1.2" />

      {/* RIGHT LEG */}
      <line x1="223" y1="198" x2="232" y2="264" stroke="var(--t2)" strokeWidth="4" strokeLinecap="round" />
      <line x1="223" y1="198" x2="232" y2="264" stroke="var(--bg)" strokeWidth="1.5" />
      {/* right knee */}
      <circle cx="232" cy="264" r="8" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="232" cy="264" r="3" stroke="var(--acc)" strokeWidth="1" />
      <line x1="232" y1="272" x2="238" y2="330" stroke="var(--t2)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="232" y1="272" x2="238" y2="330" stroke="var(--bg)" strokeWidth="1.2" />
      {/* right ankle */}
      <circle cx="238" cy="330" r="6" stroke="var(--acc)" strokeWidth="1.5" />
      {/* right foot */}
      <path d="M 220 335 L 257 335 L 260 346 L 220 346 Z" stroke="var(--t2)" strokeWidth="1.2" />

      {/* ANNOTATION LINES + LABELS */}
      <line x1="224" y1="46" x2="340" y2="30" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="342" y="33" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">HEAD UNIT</text>
      <line x1="260" y1="94" x2="340" y2="94" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="342" y="97" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">SHOULDER</text>
      <line x1="289" y1="158" x2="340" y2="148" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="342" y="151" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">ELBOW</text>
      <line x1="300" y1="218" x2="340" y2="208" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="342" y="211" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">WRIST</text>
      <line x1="160" y1="190" x2="50" y2="186" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="8" y="189" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">HIP</text>
      <line x1="160" y1="264" x2="50" y2="258" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="8" y="261" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">KNEE</text>
      <line x1="156" y1="330" x2="50" y2="324" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="8" y="327" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">ANKLE</text>

      {/* height dimension */}
      <line x1="360" y1="22" x2="360" y2="346" stroke="var(--bdr2)" strokeWidth="0.5" />
      <line x1="356" y1="22" x2="364" y2="22" stroke="var(--bdr2)" strokeWidth="0.5" />
      <line x1="356" y1="346" x2="364" y2="346" stroke="var(--bdr2)" strokeWidth="0.5" />
      <text x="366" y="188" fill="var(--t3)" fontSize="8" fontFamily="monospace" letterSpacing="1">~1.7 m</text>
    </svg>
  );
}

function ArmSvg() {
  return (
    <svg
      viewBox="0 0 400 360"
      width="100%"
      style={{ maxWidth: 400 }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="agrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--bdr)" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="400" height="360" fill="url(#agrid)" />

      {/* FLOOR PLATE */}
      <line x1="60" y1="344" x2="340" y2="344" stroke="var(--t2)" strokeWidth="2" />
      <rect x="140" y="320" width="120" height="24" rx="2" stroke="var(--t2)" strokeWidth="1.5" />
      <line x1="150" y1="320" x2="148" y2="344" stroke="var(--bdr3)" strokeWidth="0.8" />
      <line x1="165" y1="320" x2="163" y2="344" stroke="var(--bdr3)" strokeWidth="0.8" />
      <line x1="235" y1="320" x2="237" y2="344" stroke="var(--bdr3)" strokeWidth="0.8" />
      <line x1="250" y1="320" x2="252" y2="344" stroke="var(--bdr3)" strokeWidth="0.8" />

      {/* JOINT 0 – BASE ROTATION */}
      <circle cx="200" cy="316" r="16" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="200" cy="316" r="7" stroke="var(--acc)" strokeWidth="1.2" />
      <circle cx="200" cy="316" r="2" fill="var(--acc)" />
      {/* rotation arc */}
      <path d="M 185 308 A 16 16 0 0 1 215 308" stroke="var(--acc)" strokeWidth="1" strokeDasharray="3,2" />

      {/* LINK 1 – base column */}
      <rect x="191" y="240" width="18" height="76" rx="2" stroke="var(--t2)" strokeWidth="1.5" />
      <line x1="196" y1="240" x2="196" y2="316" stroke="var(--bdr3)" strokeWidth="0.6" />
      <line x1="204" y1="240" x2="204" y2="316" stroke="var(--bdr3)" strokeWidth="0.6" />

      {/* JOINT 1 – shoulder */}
      <circle cx="200" cy="238" r="14" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="200" cy="238" r="6" stroke="var(--acc)" strokeWidth="1.2" />
      {/* shoulder arc */}
      <path d="M 188 228 A 14 14 0 0 1 212 228" stroke="var(--acc)" strokeWidth="1" strokeDasharray="3,2" />

      {/* LINK 2 – upper arm (angled up-right) */}
      <line x1="200" y1="224" x2="278" y2="162" stroke="var(--t2)" strokeWidth="9" strokeLinecap="round" />
      <line x1="200" y1="224" x2="278" y2="162" stroke="var(--bg1)" strokeWidth="5" />
      <line x1="200" y1="224" x2="278" y2="162" stroke="var(--bdr3)" strokeWidth="0.8" />

      {/* JOINT 2 – elbow */}
      <circle cx="278" cy="162" r="13" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="278" cy="162" r="5" stroke="var(--acc)" strokeWidth="1.2" />
      {/* elbow arc */}
      <path d="M 266 152 A 13 13 0 0 1 290 152" stroke="var(--acc)" strokeWidth="1" strokeDasharray="3,2" />

      {/* LINK 3 – forearm (angled up-right further) */}
      <line x1="278" y1="149" x2="326" y2="98" stroke="var(--t2)" strokeWidth="7" strokeLinecap="round" />
      <line x1="278" y1="149" x2="326" y2="98" stroke="var(--bg1)" strokeWidth="3" />

      {/* JOINT 3 – wrist roll */}
      <circle cx="326" cy="98" r="11" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="326" cy="98" r="4" stroke="var(--acc)" strokeWidth="1.2" />

      {/* LINK 4 – wrist */}
      <line x1="326" y1="87" x2="340" y2="65" stroke="var(--t2)" strokeWidth="5" strokeLinecap="round" />
      <line x1="326" y1="87" x2="340" y2="65" stroke="var(--bg1)" strokeWidth="2" />

      {/* JOINT 4 – wrist bend */}
      <circle cx="340" cy="64" r="9" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="340" cy="64" r="3" stroke="var(--acc)" strokeWidth="1.2" />

      {/* END EFFECTOR / GRIPPER */}
      <line x1="340" y1="55" x2="340" y2="28" stroke="var(--t2)" strokeWidth="3" strokeLinecap="round" />
      {/* gripper fingers */}
      <path d="M 340 28 L 326 18 L 324 8" stroke="var(--acc)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 340 28 L 354 18 L 356 8" stroke="var(--acc)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="324" y1="8" x2="356" y2="8" stroke="var(--bdr3)" strokeWidth="0.8" strokeDasharray="2,2" />
      <rect x="329" y="14" width="22" height="8" rx="1" stroke="var(--acc)" strokeWidth="1" />

      {/* ANNOTATIONS */}
      <line x1="155" y1="316" x2="60" y2="316" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="8" y="319" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">J0 BASE</text>
      <line x1="186" y1="238" x2="60" y2="238" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="8" y="241" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">J1 SHLDR</text>
      <line x1="265" y1="162" x2="60" y2="162" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="8" y="165" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">J2 ELBOW</text>
      <line x1="315" y1="98" x2="60" y2="98" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="8" y="101" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">J3 WRIST</text>
      <line x1="349" y1="64" x2="375" y2="50" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="372" y="45" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">J4</text>
      <text x="368" y="30" fill="var(--acc)" fontSize="9" fontFamily="monospace" letterSpacing="1">EFF.</text>

      {/* DOF count badge */}
      <rect x="14" y="24" width="68" height="22" rx="2" stroke="var(--bdr3)" strokeWidth="1" />
      <text x="22" y="33" fill="var(--t3)" fontSize="8" fontFamily="monospace">6 AXIS</text>
      <text x="22" y="41" fill="var(--acc)" fontSize="8" fontFamily="monospace">ARTICULATED</text>

      {/* reach arc */}
      <path d="M 200 316 A 180 180 0 0 1 346 136" stroke="var(--bdr2)" strokeWidth="0.6" strokeDasharray="4,4" />
    </svg>
  );
}

function AmrSvg() {
  return (
    <svg
      viewBox="0 0 400 360"
      width="100%"
      style={{ maxWidth: 400 }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="amrgrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--bdr)" strokeWidth="0.4" />
        </pattern>
        <radialGradient id="scanGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--acc)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--acc)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="360" fill="url(#amrgrid)" />

      {/* LIDAR SCAN FIELD */}
      <path d="M 200 136 L 76 70 A 140 140 0 0 1 324 70 Z" fill="url(#scanGrad)" />
      <path d="M 76 70 A 140 140 0 0 1 324 70" stroke="var(--acc)" strokeWidth="0.6" strokeDasharray="4,3" fill="none" />

      {/* LIDAR SCAN RAYS */}
      <line x1="200" y1="136" x2="76" y2="70" stroke="var(--acc)" strokeWidth="0.7" strokeDasharray="5,4" />
      <line x1="200" y1="136" x2="116" y2="50" stroke="var(--acc)" strokeWidth="0.7" strokeDasharray="5,4" />
      <line x1="200" y1="136" x2="160" y2="34" stroke="var(--acc)" strokeWidth="0.7" strokeDasharray="5,4" />
      <line x1="200" y1="136" x2="200" y2="28" stroke="var(--acc)" strokeWidth="0.7" strokeDasharray="5,4" />
      <line x1="200" y1="136" x2="240" y2="34" stroke="var(--acc)" strokeWidth="0.7" strokeDasharray="5,4" />
      <line x1="200" y1="136" x2="284" y2="50" stroke="var(--acc)" strokeWidth="0.7" strokeDasharray="5,4" />
      <line x1="200" y1="136" x2="324" y2="70" stroke="var(--acc)" strokeWidth="0.7" strokeDasharray="5,4" />

      {/* LIDAR DOME PEDESTAL */}
      <rect x="184" y="150" width="32" height="18" rx="1" stroke="var(--t2)" strokeWidth="1.2" />
      <line x1="192" y1="150" x2="192" y2="168" stroke="var(--bdr3)" strokeWidth="0.6" />
      <line x1="208" y1="150" x2="208" y2="168" stroke="var(--bdr3)" strokeWidth="0.6" />

      {/* LIDAR DOME */}
      <path d="M 168 150 A 32 32 0 0 1 232 150 Z" stroke="var(--t2)" strokeWidth="1.5" fill="var(--bg2)" />
      <ellipse cx="200" cy="150" rx="32" ry="8" stroke="var(--t2)" strokeWidth="1.2" />
      <circle cx="200" cy="148" r="8" stroke="var(--acc)" strokeWidth="1.5" />
      <circle cx="200" cy="148" r="3" fill="var(--acc)" opacity="0.5" />

      {/* MAIN BODY */}
      <rect x="78" y="168" width="244" height="108" rx="8" stroke="var(--t2)" strokeWidth="1.8" />
      {/* body panel lines */}
      <line x1="78" y1="196" x2="322" y2="196" stroke="var(--bdr3)" strokeWidth="0.6" />
      <line x1="78" y1="248" x2="322" y2="248" stroke="var(--bdr3)" strokeWidth="0.6" />
      {/* panel sections */}
      <rect x="94" y="204" width="72" height="36" rx="2" stroke="var(--bdr3)" strokeWidth="0.8" />
      <rect x="180" y="204" width="72" height="36" rx="2" stroke="var(--bdr3)" strokeWidth="0.8" />
      {/* status indicator */}
      <rect x="92" y="256" width="8" height="8" rx="1" fill="var(--good)" opacity="0.7" />
      <rect x="106" y="256" width="8" height="8" rx="1" fill="var(--acc)" opacity="0.5" />
      <rect x="120" y="256" width="8" height="8" rx="1" stroke="var(--bdr3)" strokeWidth="0.8" />

      {/* FRONT BUMPER + SENSORS */}
      <path d="M 78 268 L 78 276 Q 78 280 82 280 L 318 280 Q 322 280 322 276 L 322 268" stroke="var(--t2)" strokeWidth="1.2" />
      {/* front proximity sensors */}
      <circle cx="90" cy="272" r="4" stroke="var(--acc)" strokeWidth="1" />
      <circle cx="200" cy="274" r="4" stroke="var(--acc)" strokeWidth="1" />
      <circle cx="310" cy="272" r="4" stroke="var(--acc)" strokeWidth="1" />

      {/* DRIVE WHEELS */}
      {/* front-left */}
      <ellipse cx="112" cy="286" rx="24" ry="12" stroke="var(--t2)" strokeWidth="1.5" />
      <ellipse cx="112" cy="286" rx="14" ry="7" stroke="var(--bdr3)" strokeWidth="0.7" />
      <line x1="88" y1="286" x2="136" y2="286" stroke="var(--bdr3)" strokeWidth="0.6" strokeDasharray="2,2" />
      {/* front-right */}
      <ellipse cx="288" cy="286" rx="24" ry="12" stroke="var(--t2)" strokeWidth="1.5" />
      <ellipse cx="288" cy="286" rx="14" ry="7" stroke="var(--bdr3)" strokeWidth="0.7" />
      <line x1="264" y1="286" x2="312" y2="286" stroke="var(--bdr3)" strokeWidth="0.6" strokeDasharray="2,2" />
      {/* caster wheels (simplified) */}
      <ellipse cx="140" cy="294" rx="10" ry="6" stroke="var(--bdr3)" strokeWidth="0.8" />
      <ellipse cx="260" cy="294" rx="10" ry="6" stroke="var(--bdr3)" strokeWidth="0.8" />

      {/* FLOOR SHADOW */}
      <ellipse cx="200" cy="306" rx="110" ry="6" fill="var(--bdr)" opacity="0.3" />

      {/* ANNOTATIONS */}
      <line x1="232" y1="148" x2="350" y2="128" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="352" y="122" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">360° LIDAR</text>
      <text x="352" y="132" fill="var(--acc)" fontSize="9" fontFamily="monospace" letterSpacing="1">SLAM NAV</text>
      <line x1="322" y1="210" x2="360" y2="200" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="362" y="203" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">PAYLOAD</text>
      <text x="362" y="213" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">SURFACE</text>
      <line x1="322" y1="272" x2="360" y2="265" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="362" y="268" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">PROXIMITY</text>
      <line x1="78" y1="286" x2="40" y2="286" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="8" y="283" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">DRIVE</text>
      <text x="8" y="293" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">WHEEL</text>

      {/* spec callout */}
      <rect x="8" y="168" width="60" height="32" rx="2" stroke="var(--bdr3)" strokeWidth="0.8" />
      <text x="16" y="181" fill="var(--t3)" fontSize="8" fontFamily="monospace">SPEED</text>
      <text x="16" y="191" fill="var(--acc)" fontSize="9" fontFamily="monospace">1.5 m/s</text>
    </svg>
  );
}

function QuadrupedSvg() {
  return (
    <svg
      viewBox="0 0 400 360"
      width="100%"
      style={{ maxWidth: 400 }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="qgrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--bdr)" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="400" height="360" fill="url(#qgrid)" />

      {/* SENSOR PAYLOAD ON TOP */}
      <rect x="148" y="100" width="104" height="28" rx="3" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="176" cy="114" r="7" stroke="var(--acc)" strokeWidth="1.5" />
      <circle cx="176" cy="114" r="3" fill="var(--acc)" opacity="0.4" />
      <circle cx="200" cy="114" r="7" stroke="var(--acc)" strokeWidth="1.5" />
      <circle cx="200" cy="114" r="3" fill="var(--acc)" opacity="0.4" />
      <circle cx="224" cy="114" r="7" stroke="var(--acc)" strokeWidth="1.5" />
      <circle cx="224" cy="114" r="3" fill="var(--acc)" opacity="0.4" />
      {/* camera/lidar mount */}
      <rect x="182" y="88" width="36" height="12" rx="2" stroke="var(--t2)" strokeWidth="1.2" />
      <line x1="200" y1="88" x2="200" y2="76" stroke="var(--t2)" strokeWidth="1.2" />
      <circle cx="200" cy="73" r="7" stroke="var(--acc)" strokeWidth="1.5" />
      <circle cx="200" cy="73" r="3" fill="var(--acc)" opacity="0.4" />

      {/* MAIN BODY */}
      <rect x="120" y="128" width="160" height="72" rx="5" stroke="var(--t2)" strokeWidth="1.8" />
      {/* body panel details */}
      <line x1="120" y1="152" x2="280" y2="152" stroke="var(--bdr3)" strokeWidth="0.6" />
      <line x1="200" y1="128" x2="200" y2="200" stroke="var(--bdr3)" strokeWidth="0.6" strokeDasharray="4,3" />
      {/* vents */}
      <line x1="130" y1="160" x2="148" y2="160" stroke="var(--bdr3)" strokeWidth="1" />
      <line x1="130" y1="166" x2="148" y2="166" stroke="var(--bdr3)" strokeWidth="1" />
      <line x1="130" y1="172" x2="148" y2="172" stroke="var(--bdr3)" strokeWidth="1" />
      <line x1="252" y1="160" x2="270" y2="160" stroke="var(--bdr3)" strokeWidth="1" />
      <line x1="252" y1="166" x2="270" y2="166" stroke="var(--bdr3)" strokeWidth="1" />
      <line x1="252" y1="172" x2="270" y2="172" stroke="var(--bdr3)" strokeWidth="1" />

      {/* HEAD (front, right side of body) */}
      <rect x="268" y="132" width="58" height="48" rx="4" stroke="var(--t2)" strokeWidth="1.5" />
      {/* head sensors */}
      <rect x="310" y="140" width="10" height="10" rx="1" stroke="var(--acc)" strokeWidth="1.2" />
      <rect x="310" y="158" width="10" height="8" rx="1" stroke="var(--t2)" strokeWidth="1" />
      <line x1="326" y1="156" x2="340" y2="148" stroke="var(--acc)" strokeWidth="0.8" strokeDasharray="2,2" />
      <line x1="326" y1="162" x2="344" y2="168" stroke="var(--acc)" strokeWidth="0.8" strokeDasharray="2,2" />
      {/* chin lidar */}
      <path d="M 326 176 A 8 8 0 0 1 318 180 L 268 180" stroke="var(--t2)" strokeWidth="1" />

      {/* HIP JOINTS */}
      <circle cx="138" cy="128" r="8" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="138" cy="128" r="3" stroke="var(--acc)" strokeWidth="1" />
      <circle cx="262" cy="128" r="8" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="262" cy="128" r="3" stroke="var(--acc)" strokeWidth="1" />
      <circle cx="138" cy="200" r="8" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="138" cy="200" r="3" stroke="var(--acc)" strokeWidth="1" />
      <circle cx="262" cy="200" r="8" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="262" cy="200" r="3" stroke="var(--acc)" strokeWidth="1" />

      {/* FRONT-LEFT LEG */}
      <line x1="133" y1="120" x2="106" y2="186" stroke="var(--t2)" strokeWidth="4" strokeLinecap="round" />
      <line x1="133" y1="120" x2="106" y2="186" stroke="var(--bg1)" strokeWidth="1.5" />
      <circle cx="106" cy="186" r="7" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="106" cy="186" r="3" stroke="var(--acc)" strokeWidth="1" />
      <line x1="106" y1="193" x2="86" y2="256" stroke="var(--t2)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="86" y1="256" x2="66" y2="262" stroke="var(--t2)" strokeWidth="2.5" strokeLinecap="round" />

      {/* FRONT-RIGHT LEG */}
      <line x1="267" y1="120" x2="294" y2="186" stroke="var(--t2)" strokeWidth="4" strokeLinecap="round" />
      <line x1="267" y1="120" x2="294" y2="186" stroke="var(--bg1)" strokeWidth="1.5" />
      <circle cx="294" cy="186" r="7" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="294" cy="186" r="3" stroke="var(--acc)" strokeWidth="1" />
      <line x1="294" y1="193" x2="314" y2="256" stroke="var(--t2)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="314" y1="256" x2="334" y2="262" stroke="var(--t2)" strokeWidth="2.5" strokeLinecap="round" />

      {/* REAR-LEFT LEG */}
      <line x1="133" y1="208" x2="104" y2="268" stroke="var(--t2)" strokeWidth="4" strokeLinecap="round" />
      <line x1="133" y1="208" x2="104" y2="268" stroke="var(--bg1)" strokeWidth="1.5" />
      <circle cx="104" cy="268" r="7" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="104" cy="268" r="3" stroke="var(--acc)" strokeWidth="1" />
      <line x1="104" y1="275" x2="88" y2="326" stroke="var(--t2)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="88" y1="326" x2="62" y2="332" stroke="var(--t2)" strokeWidth="2.5" strokeLinecap="round" />

      {/* REAR-RIGHT LEG */}
      <line x1="267" y1="208" x2="296" y2="268" stroke="var(--t2)" strokeWidth="4" strokeLinecap="round" />
      <line x1="267" y1="208" x2="296" y2="268" stroke="var(--bg1)" strokeWidth="1.5" />
      <circle cx="296" cy="268" r="7" stroke="var(--t2)" strokeWidth="1.5" />
      <circle cx="296" cy="268" r="3" stroke="var(--acc)" strokeWidth="1" />
      <line x1="296" y1="275" x2="312" y2="326" stroke="var(--t2)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="312" y1="326" x2="338" y2="332" stroke="var(--t2)" strokeWidth="2.5" strokeLinecap="round" />

      {/* FLOOR */}
      <line x1="50" y1="344" x2="350" y2="344" stroke="var(--t2)" strokeWidth="1.2" />
      {/* foot shadows */}
      <ellipse cx="66" cy="344" rx="12" ry="3" fill="var(--bdr)" opacity="0.5" />
      <ellipse cx="66" cy="344" rx="12" ry="3" stroke="var(--bdr2)" strokeWidth="0.5" />
      <ellipse cx="334" cy="344" rx="12" ry="3" fill="var(--bdr)" opacity="0.5" />
      <ellipse cx="88" cy="344" rx="12" ry="3" fill="var(--bdr)" opacity="0.3" />
      <ellipse cx="312" cy="344" rx="12" ry="3" fill="var(--bdr)" opacity="0.3" />

      {/* ANNOTATIONS */}
      <line x1="326" y1="100" x2="370" y2="78" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="372" y="75" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">SENSOR</text>
      <text x="372" y="85" fill="var(--acc)" fontSize="9" fontFamily="monospace" letterSpacing="1">PAYLOAD</text>
      <line x1="338" y1="156" x2="372" y2="140" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="374" y="143" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">HEAD CAM</text>
      <line x1="120" y1="164" x2="60" y2="150" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="8" y="148" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">BODY</text>
      <line x1="104" y1="268" x2="40" y2="268" stroke="var(--bdr2)" strokeWidth="0.5" strokeDasharray="3,3" />
      <text x="8" y="271" fill="var(--t3)" fontSize="9" fontFamily="monospace" letterSpacing="1">KNEE</text>
    </svg>
  );
}

function RobotIllustration({ svgType }: { svgType: SvgType }) {
  if (svgType === "humanoid") return <HumanoidSvg />;
  if (svgType === "arm") return <ArmSvg />;
  if (svgType === "amr") return <AmrSvg />;
  return <QuadrupedSvg />;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ManufacturerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = manufacturerBySlug[slug];
  if (!m) notFound();

  const categoryColor =
    m.category.includes("Humanoid") || m.category.includes("Mobile")
      ? "var(--acc)"
      : m.category === "AMR"
      ? "var(--good)"
      : "var(--t3)";

  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <div className="page-hero" style={{ borderBottom: "1px solid var(--bdr)" }}>
        <span className="lbl">Manufacturer Profile</span>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <h1 className="d1">{m.name}</h1>
          <span
            className="lbl"
            style={{
              padding: "4px 10px",
              border: "1px solid var(--bdr3)",
              borderRadius: 2,
              color: categoryColor,
              borderColor: categoryColor,
              opacity: 0.85,
              alignSelf: "flex-start",
              marginTop: 8,
              whiteSpace: "nowrap",
            }}
          >
            {m.category}
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div>
            <p className="body-lg" style={{ maxWidth: 640, marginBottom: 20 }}>
              {m.overview[0]}
            </p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <div>
                <div className="lbl" style={{ marginBottom: 2 }}>Founded</div>
                <div className="mono" style={{ fontSize: 14, color: "var(--t1)" }}>{m.founded}</div>
              </div>
              <div>
                <div className="lbl" style={{ marginBottom: 2 }}>Headquarters</div>
                <div style={{ fontSize: 14, color: "var(--t1)" }}>{m.headquarters}</div>
              </div>
              {m.parentCompany && (
                <div>
                  <div className="lbl" style={{ marginBottom: 2 }}>Parent Company</div>
                  <div style={{ fontSize: 14, color: "var(--t1)" }}>{m.parentCompany}</div>
                </div>
              )}
            </div>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <Link href="/assessment" className="btn btn-p">
                Request {m.name} Deployment
              </Link>
              <Link href="/manufacturers" className="btn btn-g">
                All Manufacturers
              </Link>
            </div>
          </div>
          {/* SVG illustration */}
          <div
            style={{
              width: 380,
              minWidth: 320,
              flexShrink: 0,
              border: "1px solid var(--bdr2)",
              borderRadius: 4,
              background: "var(--bg1)",
              padding: 16,
            }}
          >
            <div className="lbl" style={{ marginBottom: 8 }}>
              {m.svgType === "humanoid"
                ? "Bipedal Humanoid — Schematic"
                : m.svgType === "arm"
                ? "Articulated Arm — Schematic"
                : m.svgType === "amr"
                ? "Autonomous Mobile Robot — Schematic"
                : "Quadruped Platform — Schematic"}
            </div>
            <RobotIllustration svgType={m.svgType} />
          </div>
        </div>
      </div>

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <div className="sec-hd">
                <span className="lbl">Company Overview</span>
                <h2 className="d3">Background &amp; positioning</h2>
              </div>
              <p className="body" style={{ marginBottom: 20 }}>{m.overview[1]}</p>
              <p className="body">{m.overview[2]}</p>
            </div>
            <div>
              {/* SPECS TABLE */}
              <div className="sec-hd">
                <span className="lbl">Key Specifications</span>
                <h2 className="d3">Platform parameters</h2>
              </div>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  border: "1px solid var(--bdr2)",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <tbody>
                  {m.specs.map((spec, i) => (
                    <tr
                      key={spec.label}
                      style={{
                        background: i % 2 === 0 ? "var(--bg1)" : "var(--bg2)",
                        borderBottom: "1px solid var(--bdr)",
                      }}
                    >
                      <td
                        style={{
                          padding: "12px 16px",
                          fontFamily: "var(--font-mono, monospace)",
                          fontSize: 11,
                          letterSpacing: "0.06em",
                          color: "var(--t3)",
                          textTransform: "uppercase",
                          whiteSpace: "nowrap",
                          width: "44%",
                        }}
                      >
                        {spec.label}
                      </td>
                      <td style={{ padding: "12px 16px" }}>
                        <span
                          className="mono"
                          style={{ fontSize: 14, color: "var(--t1)", fontWeight: 500 }}
                        >
                          {spec.value}
                        </span>
                        {spec.note && (
                          <span
                            style={{
                              display: "block",
                              fontSize: 11,
                              color: "var(--t3)",
                              marginTop: 2,
                            }}
                          >
                            {spec.note}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROBOT MODELS ──────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 560 }}>
            <span className="lbl">Product Line</span>
            <h2 className="d2">Robot models</h2>
            <p className="body-lg">
              {m.name}&apos;s commercial and research platforms available through RBOT deployments.
            </p>
          </div>
          <div className="robot-grid">
            {m.robots.map((robot, i) => (
              <div key={robot.name} className="r-card">
                <div className="r-icon">
                  <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                    <rect
                      x="1"
                      y="1"
                      width="30"
                      height="30"
                      rx="4"
                      stroke="var(--bdr3)"
                      strokeWidth="1"
                    />
                    <text
                      x="16"
                      y="21"
                      textAnchor="middle"
                      fontFamily="monospace"
                      fontSize="12"
                      fill="var(--acc)"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </text>
                  </svg>
                </div>
                <h3>{robot.name}</h3>
                <p>{robot.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY ────────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 560 }}>
            <span className="lbl">Technical Approach</span>
            <h2 className="d2">Technology &amp; architecture</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <p className="body" style={{ marginBottom: 20 }}>{m.technology[0]}</p>
              <p className="body">{m.technology[1]}</p>
            </div>
            <div>
              {/* mini process steps for RBOT deployment */}
              <div
                style={{
                  background: "var(--bg1)",
                  border: "1px solid var(--bdr2)",
                  borderRadius: 3,
                  padding: 28,
                }}
              >
                <div className="lbl" style={{ marginBottom: 20 }}>
                  RBOT Integration Flow
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    { label: "Assess", desc: "Facility audit and task mapping specific to " + m.name + " capabilities." },
                    { label: "Configure", desc: "Platform setup, sensor calibration, and safety system commissioning." },
                    { label: "Integrate", desc: "ERP, WMS, and MES connectivity via OPC UA or standard APIs." },
                    { label: "Deploy", desc: "Go-live with operator training and performance baseline capture." },
                    { label: "Manage", desc: "Ongoing fleet monitoring, updates, and maintenance through RBOT Platform." },
                  ].map((step, i) => (
                    <div
                      key={step.label}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "20px 1fr",
                        gap: "0 14px",
                        paddingBottom: i < 4 ? 20 : 0,
                        position: "relative",
                      }}
                    >
                      {/* connector line */}
                      {i < 4 && (
                        <div
                          style={{
                            position: "absolute",
                            left: 9,
                            top: 20,
                            width: 1,
                            height: "calc(100% - 8px)",
                            background: "var(--bdr2)",
                          }}
                        />
                      )}
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: i === 0 ? "var(--acc)" : "var(--bg2)",
                          border: `1px solid ${i === 0 ? "var(--acc)" : "var(--bdr3)"}`,
                          flexShrink: 0,
                          position: "relative",
                          zIndex: 1,
                          boxShadow: i === 0 ? "0 0 10px var(--acc-bg)" : "none",
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            letterSpacing: "-0.02em",
                            marginBottom: 3,
                            color: i === 0 ? "var(--t1)" : "var(--t2)",
                          }}
                        >
                          {step.label}
                        </div>
                        <div style={{ fontSize: 12, color: "var(--t3)", lineHeight: 1.55 }}>
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Market Coverage</span>
            <h2 className="d3">Industries served</h2>
          </div>
          <div className="chips">
            {m.industries.map((ind) => (
              <span key={ind} className="ichip">
                {ind}
              </span>
            ))}
          </div>
          <p className="body" style={{ marginTop: 24, maxWidth: 600 }}>
            RBOT deploys {m.name} hardware across these verticals, handling industry-specific
            regulatory requirements, safety certification, and workflow integration in each sector.
            Contact our team to discuss your specific use case.
          </p>
        </div>
      </section>

      {/* ── DEPLOYMENT ────────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <div className="sec-hd">
                <span className="lbl">Availability</span>
                <h2 className="d3">Deployment &amp; pricing</h2>
              </div>
              <p className="body">{m.deployment}</p>
            </div>
            <div>
              <div className="sec-hd">
                <span className="lbl">RBOT Integration</span>
                <h2 className="d3">How RBOT deploys {m.name}</h2>
              </div>
              <div
                style={{
                  background: "var(--acc-bg)",
                  border: "1px solid var(--acc-bdr)",
                  borderRadius: 3,
                  padding: 24,
                }}
              >
                <p className="body">{m.rbotNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNER BADGES ────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="partner">
            <div>
              <span className="lbl" style={{ display: "block", marginBottom: 14 }}>
                What RBOT Provides
              </span>
              <h2 className="d3">Complete deployment coverage</h2>
              <p className="body" style={{ marginTop: 14, maxWidth: 420 }}>
                RBOT is hardware-agnostic. We work with {m.name} because it&apos;s the right fit for
                specific use cases — not because we have inventory to move. Every deployment includes
                site assessment, integration engineering, training, and managed monitoring.
              </p>
            </div>
            <div>
              <div className="lbl" style={{ marginBottom: 14 }}>What's Included</div>
              <div className="partner-badges">
                {[
                  "Site Assessment",
                  "Safety Engineering",
                  "WMS / ERP Integration",
                  "Operator Training",
                  "Fleet Monitoring",
                  "Preventive Maintenance",
                  "SLA Reporting",
                  "Software Updates",
                ].map((badge) => (
                  <span key={badge} className="pbadge">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="fcta">
        <div className="fcta-inner">
          <span className="lbl">{m.name} Deployment</span>
          <h2 className="d2">Ready to deploy {m.name}?</h2>
          <p className="body-lg">
            RBOT handles everything from site assessment through ongoing fleet management.
            Tell us about your operation and we&apos;ll scope a deployment.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">
              Request a Deployment Assessment
            </Link>
            <Link href="/manufacturers" className="btn btn-g">
              View All Manufacturers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
