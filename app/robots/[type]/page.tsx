import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { robotTypeData } from "@/lib/robot-type-data";

export async function generateStaticParams() {
  return Object.keys(robotTypeData).map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const data = robotTypeData[type];
  if (!data) return { title: "Robot Types — RBOT" };
  return {
    title: `${data.title} — RBOT`,
    description: `${data.tagline} RBOT deploys ${data.title} across enterprise operations with full integration and support.`,
  };
}

/* ── TECHNICAL SCHEMATICS ─────────────────────────────────────── */

function HumanoidSchematic() {
  return (
    <svg viewBox="0 0 500 400" aria-hidden="true" style={{ width: "100%", maxHeight: 400 }}>
      <defs>
        <pattern id="hg" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0L0 0 0 20" fill="none" stroke="currentColor" strokeOpacity={0.05} strokeWidth={0.5} />
        </pattern>
      </defs>
      <rect width={500} height={400} fill="url(#hg)" />
      <path d="M10 28 L10 10 L28 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 28 L490 10 L472 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M10 372 L10 390 L28 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 372 L490 390 L472 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <text x={250} y={396} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.22} textAnchor="middle">HUMANOID ROBOT — BIPEDAL PLATFORM — TECHNICAL SCHEMATIC</text>
      {/* HEAD */}
      <circle cx={250} cy={58} r={22} fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      <rect x={236} y={44} width={28} height={5} rx={1} fill="none" stroke="currentColor" strokeOpacity={0.4} strokeWidth={0.75} />
      <circle cx={241} cy={55} r={4} fill="none" stroke="currentColor" strokeOpacity={0.6} strokeWidth={1} />
      <circle cx={259} cy={55} r={4} fill="none" stroke="currentColor" strokeOpacity={0.6} strokeWidth={1} />
      <circle cx={241} cy={55} r={1.5} fill="currentColor" fillOpacity={0.4} />
      <circle cx={259} cy={55} r={1.5} fill="currentColor" fillOpacity={0.4} />
      {/* NECK */}
      <rect x={244} y={80} width={12} height={14} rx={1} fill="none" stroke="currentColor" strokeOpacity={0.5} strokeWidth={1} />
      {/* TORSO */}
      <rect x={210} y={94} width={80} height={90} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      <rect x={222} y={108} width={56} height={32} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.28} strokeWidth={0.75} />
      <circle cx={250} cy={153} r={7} fill="none" stroke="currentColor" strokeOpacity={0.32} strokeWidth={1} />
      <circle cx={250} cy={153} r={2} fill="currentColor" fillOpacity={0.18} />
      {/* L SHOULDER */}
      <circle cx={210} cy={108} r={8} fill="none" stroke="currentColor" strokeOpacity={0.75} strokeWidth={1.5} />
      <line x1={202} y1={108} x2={163} y2={168} stroke="currentColor" strokeOpacity={0.13} strokeWidth={10} strokeLinecap="round" />
      <line x1={202} y1={108} x2={163} y2={168} stroke="currentColor" strokeOpacity={0.6} strokeWidth={5} strokeLinecap="round" />
      {/* L ELBOW */}
      <circle cx={163} cy={168} r={7} fill="none" stroke="currentColor" strokeOpacity={0.75} strokeWidth={1.5} />
      <line x1={156} y1={168} x2={146} y2={230} stroke="currentColor" strokeOpacity={0.55} strokeWidth={4} strokeLinecap="round" />
      {/* L GRIPPER */}
      <rect x={132} y={230} width={28} height={22} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.5} />
      <line x1={140} y1={230} x2={140} y2={252} stroke="currentColor" strokeOpacity={0.3} strokeWidth={1} />
      <line x1={148} y1={230} x2={148} y2={252} stroke="currentColor" strokeOpacity={0.3} strokeWidth={1} />
      <line x1={156} y1={230} x2={156} y2={252} stroke="currentColor" strokeOpacity={0.3} strokeWidth={1} />
      {/* R SHOULDER */}
      <circle cx={290} cy={108} r={8} fill="none" stroke="currentColor" strokeOpacity={0.75} strokeWidth={1.5} />
      <line x1={298} y1={108} x2={337} y2={168} stroke="currentColor" strokeOpacity={0.13} strokeWidth={10} strokeLinecap="round" />
      <line x1={298} y1={108} x2={337} y2={168} stroke="currentColor" strokeOpacity={0.6} strokeWidth={5} strokeLinecap="round" />
      {/* R ELBOW */}
      <circle cx={337} cy={168} r={7} fill="none" stroke="currentColor" strokeOpacity={0.75} strokeWidth={1.5} />
      <line x1={344} y1={168} x2={354} y2={230} stroke="currentColor" strokeOpacity={0.55} strokeWidth={4} strokeLinecap="round" />
      {/* R GRIPPER */}
      <rect x={340} y={230} width={28} height={22} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.5} />
      <line x1={348} y1={230} x2={348} y2={252} stroke="currentColor" strokeOpacity={0.3} strokeWidth={1} />
      <line x1={356} y1={230} x2={356} y2={252} stroke="currentColor" strokeOpacity={0.3} strokeWidth={1} />
      <line x1={364} y1={230} x2={364} y2={252} stroke="currentColor" strokeOpacity={0.3} strokeWidth={1} />
      {/* L HIP */}
      <circle cx={224} cy={184} r={8} fill="none" stroke="currentColor" strokeOpacity={0.75} strokeWidth={1.5} />
      <line x1={224} y1={192} x2={212} y2={292} stroke="currentColor" strokeOpacity={0.13} strokeWidth={13} strokeLinecap="round" />
      <line x1={224} y1={192} x2={212} y2={292} stroke="currentColor" strokeOpacity={0.58} strokeWidth={6} strokeLinecap="round" />
      {/* L KNEE */}
      <circle cx={212} cy={292} r={7} fill="none" stroke="currentColor" strokeOpacity={0.75} strokeWidth={1.5} />
      <line x1={212} y1={299} x2={217} y2={373} stroke="currentColor" strokeOpacity={0.52} strokeWidth={5} strokeLinecap="round" />
      <rect x={204} y={373} width={27} height={10} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.5} />
      {/* R HIP */}
      <circle cx={276} cy={184} r={8} fill="none" stroke="currentColor" strokeOpacity={0.75} strokeWidth={1.5} />
      <line x1={276} y1={192} x2={288} y2={292} stroke="currentColor" strokeOpacity={0.13} strokeWidth={13} strokeLinecap="round" />
      <line x1={276} y1={192} x2={288} y2={292} stroke="currentColor" strokeOpacity={0.58} strokeWidth={6} strokeLinecap="round" />
      {/* R KNEE */}
      <circle cx={288} cy={292} r={7} fill="none" stroke="currentColor" strokeOpacity={0.75} strokeWidth={1.5} />
      <line x1={288} y1={299} x2={283} y2={373} stroke="currentColor" strokeOpacity={0.52} strokeWidth={5} strokeLinecap="round" />
      <rect x={269} y={373} width={27} height={10} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.5} />
      {/* LEFT LABELS */}
      <line x1={118} y1={44} x2={228} y2={52} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={42} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>STEREO VISION</text>
      <text x={10} y={52} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>ARRAY</text>
      <line x1={118} y1={108} x2={202} y2={108} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={104} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>SHOULDER</text>
      <text x={10} y={114} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>JOINT</text>
      <line x1={118} y1={168} x2={156} y2={168} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={164} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>ELBOW JOINT</text>
      <line x1={118} y1={241} x2={132} y2={241} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={237} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>DEXTEROUS</text>
      <text x={10} y={247} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>GRIPPER</text>
      <line x1={118} y1={292} x2={205} y2={292} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={288} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>KNEE JOINT</text>
      <line x1={118} y1={378} x2={204} y2={378} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={374} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>ADAPTIVE</text>
      <text x={10} y={384} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>FOOT PAD</text>
      {/* RIGHT LABELS */}
      <line x1={382} y1={125} x2={290} y2={125} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={121} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>DEPTH SENSOR</text>
      <line x1={382} y1={168} x2={344} y2={168} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={164} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>FORCE / TORQUE</text>
      <text x={382} y={174} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>SENSOR</text>
      <line x1={382} y1={184} x2={284} y2={184} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={180} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>HIP JOINT</text>
      <line x1={382} y1={241} x2={368} y2={241} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={237} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>TACTILE</text>
      <text x={382} y={247} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>SENSORS</text>
      <line x1={382} y1={378} x2={296} y2={378} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={374} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>PROPRIOCEPTIVE</text>
      <text x={382} y={384} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>ANKLE JOINT</text>
    </svg>
  );
}

function AMRSchematic() {
  return (
    <svg viewBox="0 0 500 400" aria-hidden="true" style={{ width: "100%", maxHeight: 400 }}>
      <defs>
        <pattern id="ag" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0L0 0 0 20" fill="none" stroke="currentColor" strokeOpacity={0.05} strokeWidth={0.5} />
        </pattern>
      </defs>
      <rect width={500} height={400} fill="url(#ag)" />
      <path d="M10 28 L10 10 L28 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 28 L490 10 L472 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M10 372 L10 390 L28 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 372 L490 390 L472 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <text x={250} y={396} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.22} textAnchor="middle">AUTONOMOUS MOBILE ROBOT — SIDE VIEW — TECHNICAL SCHEMATIC</text>
      {/* CARGO DECK */}
      <rect x={118} y={174} width={264} height={82} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.2} />
      {/* cargo totes on deck */}
      <rect x={128} y={143} width={68} height={31} rx={1} fill="none" stroke="currentColor" strokeOpacity={0.35} strokeWidth={0.85} />
      <rect x={205} y={143} width={68} height={31} rx={1} fill="none" stroke="currentColor" strokeOpacity={0.35} strokeWidth={0.85} />
      <rect x={282} y={143} width={68} height={31} rx={1} fill="none" stroke="currentColor" strokeOpacity={0.35} strokeWidth={0.85} />
      {/* LIDAR DOME */}
      <circle cx={185} cy={168} r={16} fill="none" stroke="currentColor" strokeOpacity={0.68} strokeWidth={1.5} />
      {/* LiDAR rays */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => {
        const rad = (a * Math.PI) / 180;
        return <line key={a} x1={185 + 16*Math.cos(rad)} y1={168 + 16*Math.sin(rad)} x2={185 + 28*Math.cos(rad)} y2={168 + 28*Math.sin(rad)} stroke="currentColor" strokeOpacity={0.18} strokeWidth={0.75} />;
      })}
      {/* MAIN PLATFORM BODY */}
      <rect x={108} y={256} width={284} height={58} rx={4} fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      {/* Front camera bracket */}
      <rect x={96} y={270} width={16} height={24} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.2} />
      <circle cx={96} cy={282} r={7} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1} />
      <circle cx={96} cy={282} r={2} fill="currentColor" fillOpacity={0.3} />
      {/* Safety bumper arc */}
      <path d="M 108 256 Q 88 285 108 314" fill="none" stroke="currentColor" strokeOpacity={0.4} strokeWidth={1.5} strokeDasharray="4,3" />
      {/* Emergency stop */}
      <circle cx={380} cy={278} r={8} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.2} />
      <circle cx={380} cy={278} r={3} fill="currentColor" fillOpacity={0.22} />
      {/* WiFi antenna */}
      <line x1={375} y1={256} x2={380} y2={215} stroke="currentColor" strokeOpacity={0.4} strokeWidth={1} />
      <circle cx={380} cy={212} r={4} fill="none" stroke="currentColor" strokeOpacity={0.4} strokeWidth={0.75} />
      {/* DRIVE WHEELS */}
      <circle cx={152} cy={314} r={30} fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      <circle cx={152} cy={314} r={14} fill="none" stroke="currentColor" strokeOpacity={0.28} strokeWidth={0.75} />
      <circle cx={348} cy={314} r={30} fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      <circle cx={348} cy={314} r={14} fill="none" stroke="currentColor" strokeOpacity={0.28} strokeWidth={0.75} />
      {/* Caster front */}
      <circle cx={122} cy={314} r={14} fill="none" stroke="currentColor" strokeOpacity={0.45} strokeWidth={1} />
      {/* Caster rear */}
      <circle cx={378} cy={314} r={14} fill="none" stroke="currentColor" strokeOpacity={0.45} strokeWidth={1} />
      {/* Ground line */}
      <line x1={80} y1={345} x2={420} y2={345} stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.75} strokeDasharray="6,4" />
      {/* LEFT LABELS */}
      <line x1={118} y1={168} x2={169} y2={168} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={164} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>LIDAR</text>
      <text x={10} y={174} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>SCANNER</text>
      <line x1={118} y1={282} x2={96} y2={282} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={278} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>RGB-D</text>
      <text x={10} y={288} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>FRONT CAMERA</text>
      <line x1={118} y1={260} x2={108} y2={260} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={256} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>SAFETY</text>
      <text x={10} y={266} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>BUMPER</text>
      <line x1={118} y1={314} x2={122} y2={314} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={310} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>DRIVE</text>
      <text x={10} y={320} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>WHEEL</text>
      {/* RIGHT LABELS */}
      <line x1={382} y1={158} x2={356} y2={160} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={154} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>CARGO</text>
      <text x={382} y={164} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>DECK</text>
      <line x1={382} y1={212} x2={384} y2={212} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={390} y={208} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>WIFI</text>
      <text x={390} y={218} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>ANTENNA</text>
      <line x1={382} y1={278} x2={372} y2={278} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={390} y={274} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>EMERGENCY</text>
      <text x={390} y={284} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>STOP</text>
      <line x1={382} y1={314} x2={362} y2={314} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={390} y={310} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>REAR</text>
      <text x={390} y={320} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>CASTER</text>
    </svg>
  );
}

function RoboticArmsSchematic() {
  return (
    <svg viewBox="0 0 500 400" aria-hidden="true" style={{ width: "100%", maxHeight: 400 }}>
      <defs>
        <pattern id="rag" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0L0 0 0 20" fill="none" stroke="currentColor" strokeOpacity={0.05} strokeWidth={0.5} />
        </pattern>
      </defs>
      <rect width={500} height={400} fill="url(#rag)" />
      <path d="M10 28 L10 10 L28 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 28 L490 10 L472 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M10 372 L10 390 L28 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 372 L490 390 L472 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <text x={250} y={396} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.22} textAnchor="middle">6-AXIS ARTICULATED ARM — SIDE VIEW — TECHNICAL SCHEMATIC</text>
      {/* FLOOR / MOUNT */}
      <rect x={100} y={368} width={300} height={14} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.3} strokeWidth={0.75} />
      <line x1={100} y1={382} x2={400} y2={382} stroke="currentColor" strokeOpacity={0.18} strokeWidth={0.75} />
      {/* BASE PLATE */}
      <rect x={205} y={354} width={90} height={18} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.2} />
      {/* J1 BASE ROTATION */}
      <circle cx={250} cy={348} r={14} fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      <circle cx={250} cy={348} r={5} fill="none" stroke="currentColor" strokeOpacity={0.35} strokeWidth={0.75} />
      {/* LINK 1 (column) */}
      <rect x={243} y={268} width={14} height={80} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.12} />
      <line x1={243} y1={268} x2={243} y2={348} stroke="currentColor" strokeOpacity={0.6} strokeWidth={7} strokeLinecap="round" />
      <line x1={257} y1={268} x2={257} y2={348} stroke="currentColor" strokeOpacity={0.6} strokeWidth={7} strokeLinecap="round" />
      {/* J2 SHOULDER */}
      <circle cx={250} cy={264} r={12} fill="none" stroke="currentColor" strokeOpacity={0.75} strokeWidth={1.5} />
      {/* LINK 2 (upper arm, diagonal) */}
      <line x1={242} y1={264} x2={188} y2={180} stroke="currentColor" strokeOpacity={0.13} strokeWidth={14} strokeLinecap="round" />
      <line x1={242} y1={264} x2={188} y2={180} stroke="currentColor" strokeOpacity={0.62} strokeWidth={7} strokeLinecap="round" />
      {/* J3 ELBOW */}
      <circle cx={185} cy={176} r={10} fill="none" stroke="currentColor" strokeOpacity={0.75} strokeWidth={1.5} />
      {/* LINK 3 (forearm) */}
      <line x1={190} y1={168} x2={218} y2={95} stroke="currentColor" strokeOpacity={0.13} strokeWidth={11} strokeLinecap="round" />
      <line x1={190} y1={168} x2={218} y2={95} stroke="currentColor" strokeOpacity={0.62} strokeWidth={6} strokeLinecap="round" />
      {/* J4 WRIST PITCH */}
      <circle cx={222} cy={90} r={9} fill="none" stroke="currentColor" strokeOpacity={0.75} strokeWidth={1.5} />
      {/* LINK 4 (short wrist) */}
      <line x1={228} y1={85} x2={248} y2={62} stroke="currentColor" strokeOpacity={0.6} strokeWidth={5} strokeLinecap="round" />
      {/* J5 WRIST ROLL */}
      <circle cx={252} cy={58} r={8} fill="none" stroke="currentColor" strokeOpacity={0.75} strokeWidth={1.5} />
      {/* TOOL FLANGE */}
      <rect x={246} y={34} width={12} height={24} rx={1} fill="none" stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.2} />
      {/* GRIPPER (2-finger) */}
      <line x1={246} y1={34} x2={234} y2={18} stroke="currentColor" strokeOpacity={0.55} strokeWidth={3} strokeLinecap="round" />
      <line x1={258} y1={34} x2={268} y2={18} stroke="currentColor" strokeOpacity={0.55} strokeWidth={3} strokeLinecap="round" />
      <rect x={228} y={12} width={10} height={12} rx={1} fill="none" stroke="currentColor" strokeOpacity={0.5} strokeWidth={1} />
      <rect x={262} y={12} width={10} height={12} rx={1} fill="none" stroke="currentColor" strokeOpacity={0.5} strokeWidth={1} />
      {/* LEFT LABELS */}
      <line x1={118} y1={348} x2={236} y2={348} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={344} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>J1 — BASE</text>
      <text x={10} y={354} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>ROTATION</text>
      <line x1={118} y1={264} x2={238} y2={264} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={260} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>J2 — SHOULDER</text>
      <line x1={118} y1={176} x2={175} y2={176} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={172} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>J3 — ELBOW</text>
      <line x1={118} y1={90} x2={213} y2={90} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={86} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>J4 — WRIST</text>
      <text x={10} y={96} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>PITCH</text>
      {/* RIGHT LABELS */}
      <line x1={382} y1={58} x2={260} y2={58} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={54} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>J5 — WRIST</text>
      <text x={382} y={64} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>ROLL / J6</text>
      <line x1={382} y1={22} x2={258} y2={28} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={18} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>TOOL FLANGE</text>
      <text x={382} y={28} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>2-FINGER GRIPPER</text>
      <line x1={382} y1={130} x2={310} y2={130} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={126} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>INTEGRATED</text>
      <text x={382} y={136} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>F/T SENSOR</text>
      <line x1={382} y1={370} x2={295} y2={370} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={366} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>MOUNTING</text>
      <text x={382} y={376} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>BASE PLATE</text>
    </svg>
  );
}

function CobotsSchematic() {
  return (
    <svg viewBox="0 0 500 400" aria-hidden="true" style={{ width: "100%", maxHeight: 400 }}>
      <defs>
        <pattern id="cg" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0L0 0 0 20" fill="none" stroke="currentColor" strokeOpacity={0.05} strokeWidth={0.5} />
        </pattern>
      </defs>
      <rect width={500} height={400} fill="url(#cg)" />
      <path d="M10 28 L10 10 L28 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 28 L490 10 L472 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M10 372 L10 390 L28 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 372 L490 390 L472 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <text x={250} y={396} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.22} textAnchor="middle">COLLABORATIVE ROBOT — ISO/TS 15066 COMPLIANT — TECHNICAL SCHEMATIC</text>
      {/* COLLABORATIVE SAFETY ZONE (dashed) */}
      <circle cx={230} cy={260} r={155} fill="none" stroke="currentColor" strokeOpacity={0.14} strokeWidth={1} strokeDasharray="6,5" />
      <text x={230} y={100} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.28} textAnchor="middle">COLLABORATIVE SAFETY ZONE</text>
      <text x={230} y={110} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.28} textAnchor="middle">ISO/TS 15066 — SPEED ≤250mm/s IN ZONE</text>
      {/* WORKBENCH */}
      <rect x={145} y={340} width={200} height={14} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.3} strokeWidth={0.75} />
      <line x1={145} y1={354} x2={345} y2={354} stroke="currentColor" strokeOpacity={0.2} strokeWidth={0.75} />
      {/* BASE */}
      <rect x={196} y={330} width={68} height={14} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.1} />
      {/* J1 */}
      <circle cx={230} cy={323} r={11} fill="none" stroke="currentColor" strokeOpacity={0.68} strokeWidth={1.4} />
      {/* Link 1 */}
      <line x1={230} y1={312} x2={230} y2={252} stroke="currentColor" strokeOpacity={0.1} strokeWidth={10} strokeLinecap="round" />
      <line x1={230} y1={312} x2={230} y2={252} stroke="currentColor" strokeOpacity={0.55} strokeWidth={5} strokeLinecap="round" />
      {/* J2 */}
      <circle cx={230} cy={247} r={9} fill="none" stroke="currentColor" strokeOpacity={0.68} strokeWidth={1.4} />
      {/* force-sensing indicator at J2 */}
      <circle cx={230} cy={247} r={14} fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={0.75} strokeDasharray="3,3" />
      {/* Link 2 (upper arm) */}
      <line x1={226} y1={238} x2={200} y2={175} stroke="currentColor" strokeOpacity={0.1} strokeWidth={9} strokeLinecap="round" />
      <line x1={226} y1={238} x2={200} y2={175} stroke="currentColor" strokeOpacity={0.55} strokeWidth={4.5} strokeLinecap="round" />
      {/* J3 ELBOW */}
      <circle cx={196} cy={170} r={8} fill="none" stroke="currentColor" strokeOpacity={0.68} strokeWidth={1.4} />
      <circle cx={196} cy={170} r={13} fill="none" stroke="currentColor" strokeOpacity={0.18} strokeWidth={0.75} strokeDasharray="3,3" />
      {/* Link 3 (forearm) */}
      <line x1={201} y1={163} x2={220} y2={106} stroke="currentColor" strokeOpacity={0.1} strokeWidth={8} strokeLinecap="round" />
      <line x1={201} y1={163} x2={220} y2={106} stroke="currentColor" strokeOpacity={0.55} strokeWidth={4} strokeLinecap="round" />
      {/* J4 WRIST */}
      <circle cx={223} cy={101} r={7} fill="none" stroke="currentColor" strokeOpacity={0.68} strokeWidth={1.4} />
      {/* Link 4 */}
      <line x1={228} y1={96} x2={242} y2={72} stroke="currentColor" strokeOpacity={0.55} strokeWidth={3.5} strokeLinecap="round" />
      {/* J5 */}
      <circle cx={245} cy={68} r={6} fill="none" stroke="currentColor" strokeOpacity={0.68} strokeWidth={1.4} />
      {/* Tool (simple) */}
      <rect x={240} y={46} width={10} height={22} rx={1} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1} />
      <line x1={240} y1={46} x2={232} y2={34} stroke="currentColor" strokeOpacity={0.5} strokeWidth={2.5} strokeLinecap="round" />
      <line x1={250} y1={46} x2={258} y2={34} stroke="currentColor" strokeOpacity={0.5} strokeWidth={2.5} strokeLinecap="round" />
      {/* TEACHING PENDANT */}
      <rect x={330} y={195} width={50} height={70} rx={4} fill="none" stroke="currentColor" strokeOpacity={0.4} strokeWidth={1} />
      <rect x={335} y={202} width={40} height={24} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.25} strokeWidth={0.75} />
      <circle cx={345} cy={242} r={5} fill="none" stroke="currentColor" strokeOpacity={0.3} strokeWidth={0.75} />
      <circle cx={360} cy={242} r={5} fill="none" stroke="currentColor" strokeOpacity={0.3} strokeWidth={0.75} />
      <line x1={355} y1={230} x2={355} y2={195} stroke="currentColor" strokeOpacity={0.25} strokeWidth={0.75} strokeDasharray="3,2" />
      <text x={305} y={280} fontSize={6.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.35} textAnchor="middle">TEACH</text>
      <text x={305} y={290} fontSize={6.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.35} textAnchor="middle">PENDANT</text>
      {/* LEFT LABELS */}
      <line x1={118} y1={323} x2={196} y2={323} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={319} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>J1 BASE /</text>
      <text x={10} y={329} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>MOUNT</text>
      <line x1={118} y1={247} x2={221} y2={247} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={243} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>J2 SHOULDER</text>
      <text x={10} y={253} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>TORQUE SENSOR</text>
      <line x1={118} y1={170} x2={183} y2={170} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={166} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>J3 ELBOW</text>
      <text x={10} y={176} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>FORCE SENSE</text>
      {/* RIGHT LABELS */}
      <line x1={382} y1={100} x2={230} y2={100} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={96} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>J4–J6 WRIST</text>
      <text x={382} y={106} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>ASSEMBLY</text>
      <line x1={382} y1={46} x2={250} y2={50} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={42} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>END EFFECTOR /</text>
      <text x={382} y={52} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>TOOL FLANGE</text>
      <line x1={382} y1={155} x2={330} y2={200} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={151} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>PROGRAMMING</text>
      <text x={382} y={161} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>TABLET / PENDANT</text>
    </svg>
  );
}

function WarehouseSchematic() {
  return (
    <svg viewBox="0 0 500 400" aria-hidden="true" style={{ width: "100%", maxHeight: 400 }}>
      <defs>
        <pattern id="wg" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0L0 0 0 20" fill="none" stroke="currentColor" strokeOpacity={0.05} strokeWidth={0.5} />
        </pattern>
      </defs>
      <rect width={500} height={400} fill="url(#wg)" />
      <path d="M10 28 L10 10 L28 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 28 L490 10 L472 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M10 372 L10 390 L28 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 372 L490 390 L472 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <text x={250} y={396} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.22} textAnchor="middle">GOODS-TO-PERSON WAREHOUSE ROBOT — VERTICAL LIFT — TECHNICAL SCHEMATIC</text>
      {/* GROUND */}
      <line x1={60} y1={358} x2={440} y2={358} stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.75} strokeDasharray="6,4" />
      {/* MOBILE BASE */}
      <rect x={178} y={302} width={144} height={56} rx={5} fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      {/* DRIVE WHEELS */}
      <circle cx={205} cy={358} r={22} fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      <circle cx={205} cy={358} r={10} fill="none" stroke="currentColor" strokeOpacity={0.28} strokeWidth={0.75} />
      <circle cx={295} cy={358} r={22} fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      <circle cx={295} cy={358} r={10} fill="none" stroke="currentColor" strokeOpacity={0.28} strokeWidth={0.75} />
      {/* LIDAR at base front */}
      <circle cx={180} cy={320} r={10} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.2} />
      {[270,300,330,360,390].map(a => {
        const rad = (a * Math.PI) / 180;
        return <line key={a} x1={180 + 10*Math.cos(rad)} y1={320 + 10*Math.sin(rad)} x2={180 + 20*Math.cos(rad)} y2={320 + 20*Math.sin(rad)} stroke="currentColor" strokeOpacity={0.18} strokeWidth={0.7} />;
      })}
      {/* VERTICAL MAST */}
      <rect x={238} y={52} width={24} height={250} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.4} />
      {/* Mast guide rails */}
      <line x1={242} y1={52} x2={242} y2={302} stroke="currentColor" strokeOpacity={0.25} strokeWidth={0.75} />
      <line x1={258} y1={52} x2={258} y2={302} stroke="currentColor" strokeOpacity={0.25} strokeWidth={0.75} />
      {/* LIFT CARRIAGE */}
      <rect x={234} y={148} width={32} height={28} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.5} strokeWidth={1} />
      {/* SHELF INTERFACE ARM (telescoping) */}
      <rect x={262} y={155} width={130} height={14} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.3} />
      <line x1={270} y1={158} x2={390} y2={158} stroke="currentColor" strokeOpacity={0.2} strokeWidth={0.75} strokeDasharray="4,3" />
      {/* STORAGE TOTE on arm */}
      <rect x={352} y={132} width={80} height={52} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.4} />
      {/* tote contents lines */}
      <line x1={362} y1={148} x2={422} y2={148} stroke="currentColor" strokeOpacity={0.2} strokeWidth={0.75} />
      <line x1={362} y1={162} x2={422} y2={162} stroke="currentColor" strokeOpacity={0.2} strokeWidth={0.75} />
      {/* BARCODE SCANNER BEAM */}
      <line x1={316} y1={162} x2={352} y2={162} stroke="currentColor" strokeOpacity={0.35} strokeWidth={0.75} strokeDasharray="2,2" />
      <polygon points="316,156 316,168 308,162" fill="currentColor" fillOpacity={0.25} />
      {/* Mast TOP sensor */}
      <rect x={234} y={38} width={32} height={16} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.5} strokeWidth={1} />
      {/* HEIGHT dimension line */}
      <line x1={230} y1={52} x2={230} y2={302} stroke="currentColor" strokeOpacity={0.12} strokeWidth={0.75} />
      <line x1={224} y1={52} x2={236} y2={52} stroke="currentColor" strokeOpacity={0.2} strokeWidth={0.75} />
      <line x1={224} y1={302} x2={236} y2={302} stroke="currentColor" strokeOpacity={0.2} strokeWidth={0.75} />
      {/* LEFT LABELS */}
      <line x1={118} y1={46} x2={234} y2={46} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={42} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>TOP SENSOR /</text>
      <text x={10} y={52} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>SLAM REFERENCE</text>
      <line x1={118} y1={162} x2={234} y2={162} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={158} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>VERTICAL LIFT</text>
      <text x={10} y={168} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>CARRIAGE</text>
      <line x1={118} y1={320} x2={170} y2={320} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={316} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>LIDAR + SLAM</text>
      <text x={10} y={326} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>NAVIGATION</text>
      <line x1={118} y1={358} x2={183} y2={358} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={354} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>DRIVE WHEEL</text>
      {/* RIGHT LABELS */}
      <line x1={382} y1={158} x2={262} y2={162} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={154} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>TELESCOPING</text>
      <text x={382} y={164} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>SHELF ARM</text>
      <line x1={382} y1={100} x2={432} y2={158} stroke="currentColor" strokeOpacity={0} strokeWidth={0} />
      <line x1={382} y1={130} x2={352} y2={148} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={126} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>STORAGE TOTE /</text>
      <text x={382} y={136} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>BIN PAYLOAD</text>
      <line x1={382} y1={195} x2={360} y2={162} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={191} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>BARCODE</text>
      <text x={382} y={201} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>SCANNER</text>
      <line x1={382} y1={320} x2={322} y2={302} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={316} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>MOBILE BASE /</text>
      <text x={382} y={326} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>BATTERY MODULE</text>
    </svg>
  );
}

function InspectionSchematic() {
  return (
    <svg viewBox="0 0 500 400" aria-hidden="true" style={{ width: "100%", maxHeight: 400 }}>
      <defs>
        <pattern id="ig" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0L0 0 0 20" fill="none" stroke="currentColor" strokeOpacity={0.05} strokeWidth={0.5} />
        </pattern>
      </defs>
      <rect width={500} height={400} fill="url(#ig)" />
      <path d="M10 28 L10 10 L28 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 28 L490 10 L472 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M10 372 L10 390 L28 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 372 L490 390 L472 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <text x={250} y={396} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.22} textAnchor="middle">QUADRUPED INSPECTION ROBOT — SIDE VIEW — TECHNICAL SCHEMATIC</text>
      {/* GROUND */}
      <line x1={60} y1={370} x2={440} y2={370} stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.75} strokeDasharray="6,4" />
      {/* SENSOR PAYLOAD on top */}
      <rect x={178} y={122} width={144} height={40} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.4} />
      {/* Thermal camera */}
      <rect x={184} y={128} width={30} height={22} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.5} strokeWidth={1} />
      <circle cx={199} cy={139} r={7} fill="none" stroke="currentColor" strokeOpacity={0.45} strokeWidth={0.75} />
      <circle cx={199} cy={139} r={2.5} fill="currentColor" fillOpacity={0.25} />
      {/* RGB camera */}
      <rect x={222} y={130} width={24} height={18} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.5} strokeWidth={1} />
      <circle cx={234} cy={139} r={5} fill="none" stroke="currentColor" strokeOpacity={0.45} strokeWidth={0.75} />
      {/* LiDAR on payload */}
      <circle cx={268} cy={139} r={12} fill="none" stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.2} />
      {[0,45,90,135,180,225,270,315].map(a => {
        const rad = (a * Math.PI) / 180;
        return <line key={a} x1={268 + 12*Math.cos(rad)} y1={139 + 12*Math.sin(rad)} x2={268 + 20*Math.cos(rad)} y2={139 + 20*Math.sin(rad)} stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.65} />;
      })}
      {/* Gas sensor tube */}
      <rect x={293} y={130} width={22} height={18} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.45} strokeWidth={0.9} />
      <line x1={304} y1={128} x2={304} y2={118} stroke="currentColor" strokeOpacity={0.35} strokeWidth={1.5} />
      <circle cx={304} cy={114} r={4} fill="none" stroke="currentColor" strokeOpacity={0.35} strokeWidth={0.75} />
      {/* MAIN BODY */}
      <rect x={172} y={162} width={156} height={72} rx={5} fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      {/* Body internals */}
      <rect x={188} y={178} width={60} height={28} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.22} strokeWidth={0.75} />
      <rect x={256} y={178} width={60} height={28} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.22} strokeWidth={0.75} />
      {/* FRONT LEFT LEG */}
      <circle cx={182} cy={162} r={8} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.3} />
      <line x1={174} y1={162} x2={148} y2={232} stroke="currentColor" strokeOpacity={0.1} strokeWidth={10} strokeLinecap="round" />
      <line x1={174} y1={162} x2={148} y2={232} stroke="currentColor" strokeOpacity={0.55} strokeWidth={5} strokeLinecap="round" />
      <circle cx={148} cy={236} r={7} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.3} />
      <line x1={148} y1={243} x2={162} y2={320} stroke="currentColor" strokeOpacity={0.5} strokeWidth={4} strokeLinecap="round" />
      <rect x={152} y={320} width={22} height={10} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.2} />
      {/* REAR LEFT LEG */}
      <circle cx={318} cy={162} r={8} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.3} />
      <line x1={326} y1={162} x2={352} y2={232} stroke="currentColor" strokeOpacity={0.1} strokeWidth={10} strokeLinecap="round" />
      <line x1={326} y1={162} x2={352} y2={232} stroke="currentColor" strokeOpacity={0.55} strokeWidth={5} strokeLinecap="round" />
      <circle cx={352} cy={236} r={7} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.3} />
      <line x1={352} y1={243} x2={338} y2={320} stroke="currentColor" strokeOpacity={0.5} strokeWidth={4} strokeLinecap="round" />
      <rect x={326} y={320} width={22} height={10} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.2} />
      {/* FRONT RIGHT LEG (slightly back) */}
      <line x1={190} y1={234} x2={166} y2={296} stroke="currentColor" strokeOpacity={0.3} strokeWidth={4} strokeLinecap="round" strokeDasharray="5,3" />
      {/* REAR RIGHT LEG */}
      <line x1={310} y1={234} x2={334} y2={296} stroke="currentColor" strokeOpacity={0.3} strokeWidth={4} strokeLinecap="round" strokeDasharray="5,3" />
      {/* LEFT LABELS */}
      <line x1={118} y1={130} x2={178} y2={135} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={126} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>SENSOR</text>
      <text x={10} y={136} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>PAYLOAD BAY</text>
      <line x1={118} y1={175} x2={172} y2={190} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={171} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>MAIN CHASSIS /</text>
      <text x={10} y={181} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>COMPUTE + BATTERY</text>
      <line x1={118} y1={236} x2={141} y2={236} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={232} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>KNEE JOINT</text>
      <line x1={118} y1={325} x2={152} y2={325} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={321} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>FOOT / CONTACT</text>
      <text x={10} y={331} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>SENSOR</text>
      {/* RIGHT LABELS */}
      <line x1={382} y1={139} x2={316} y2={139} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={135} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>THERMAL + RGB</text>
      <text x={382} y={145} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>CAMERAS</text>
      <line x1={382} y1={115} x2={304} y2={115} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={111} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>GAS / VOC</text>
      <text x={382} y={121} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>DETECTOR</text>
      <line x1={382} y1={236} x2={359} y2={236} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={232} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>REAR LEG</text>
      <text x={382} y={242} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>ASSEMBLY</text>
      <line x1={382} y1={325} x2={348} y2={325} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={321} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>REAR FOOT</text>
    </svg>
  );
}

function CleaningSchematic() {
  return (
    <svg viewBox="0 0 500 400" aria-hidden="true" style={{ width: "100%", maxHeight: 400 }}>
      <defs>
        <pattern id="clg" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0L0 0 0 20" fill="none" stroke="currentColor" strokeOpacity={0.05} strokeWidth={0.5} />
        </pattern>
      </defs>
      <rect width={500} height={400} fill="url(#clg)" />
      <path d="M10 28 L10 10 L28 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 28 L490 10 L472 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M10 372 L10 390 L28 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 372 L490 390 L472 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <text x={250} y={396} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.22} textAnchor="middle">AUTONOMOUS FLOOR SCRUBBER — SIDE VIEW — TECHNICAL SCHEMATIC</text>
      {/* GROUND */}
      <line x1={60} y1={360} x2={440} y2={360} stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.75} strokeDasharray="6,4" />
      {/* SCRUB HEAD (front) */}
      <rect x={90} y={298} width={56} height={40} rx={4} fill="none" stroke="currentColor" strokeOpacity={0.62} strokeWidth={1.4} />
      {/* Brush disc */}
      <circle cx={118} cy={348} r={20} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.3} />
      {[0,60,120,180,240,300].map(a => {
        const rad = (a * Math.PI) / 180;
        return <line key={a} x1={118} y1={348} x2={118 + 18*Math.cos(rad)} y2={348 + 18*Math.sin(rad)} stroke="currentColor" strokeOpacity={0.22} strokeWidth={1} />;
      })}
      <circle cx={118} cy={348} r={4} fill="currentColor" fillOpacity={0.2} />
      {/* MAIN BODY */}
      <path d="M146 200 Q146 180 170 180 L380 180 Q404 180 404 200 L404 318 Q404 336 380 336 L170 336 Q146 336 146 318 Z" fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      {/* CLEAN WATER TANK (left side of body) */}
      <rect x={156} y={196} width={80} height={90} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.38} strokeWidth={0.9} strokeDasharray="4,3" />
      <text x={196} y={236} fontSize={6.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.3} textAnchor="middle">CLEAN</text>
      <text x={196} y={246} fontSize={6.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.3} textAnchor="middle">WATER</text>
      {/* DIRTY WATER RECOVERY (right side) */}
      <rect x={258} y={196} width={80} height={90} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.38} strokeWidth={0.9} strokeDasharray="4,3" />
      <text x={298} y={236} fontSize={6.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.3} textAnchor="middle">DIRTY</text>
      <text x={298} y={246} fontSize={6.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.3} textAnchor="middle">RECOVERY</text>
      {/* UV-C optional line */}
      <line x1={156} y1={318} x2={394} y2={318} stroke="currentColor" strokeOpacity={0.22} strokeWidth={1} strokeDasharray="3,3" />
      <text x={275} y={314} fontSize={6.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.3} textAnchor="middle">OPTIONAL UV-C DISINFECTION ARRAY</text>
      {/* NAVIGATION SENSOR on top */}
      <circle cx={275} cy={165} r={16} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.3} />
      {[0,45,90,135,180,225,270,315].map(a => {
        const rad = (a * Math.PI) / 180;
        return <line key={a} x1={275 + 16*Math.cos(rad)} y1={165 + 16*Math.sin(rad)} x2={275 + 28*Math.cos(rad)} y2={165 + 28*Math.sin(rad)} stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.65} />;
      })}
      {/* Depth cameras (front) */}
      <rect x={144} y={230} width={14} height={20} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1} />
      <circle cx={151} cy={240} r={5} fill="none" stroke="currentColor" strokeOpacity={0.45} strokeWidth={0.75} />
      {/* SQUEEGEE (rear) */}
      <rect x={400} y={310} width={10} height={46} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.62} strokeWidth={1.3} />
      <path d="M410 310 Q420 320 420 335 Q420 350 410 356" fill="none" stroke="currentColor" strokeOpacity={0.45} strokeWidth={1} />
      {/* DRIVE WHEELS */}
      <circle cx={186} cy={348} r={22} fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      <circle cx={186} cy={348} r={10} fill="none" stroke="currentColor" strokeOpacity={0.25} strokeWidth={0.75} />
      <circle cx={364} cy={348} r={22} fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      <circle cx={364} cy={348} r={10} fill="none" stroke="currentColor" strokeOpacity={0.25} strokeWidth={0.75} />
      {/* LEFT LABELS */}
      <line x1={118} y1={165} x2={259} y2={165} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={161} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>LIDAR / SLAM</text>
      <text x={10} y={171} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>NAVIGATION</text>
      <line x1={118} y1={240} x2={144} y2={240} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={236} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>3D OBSTACLE</text>
      <text x={10} y={246} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>DETECTION</text>
      <line x1={118} y1={320} x2={90} y2={320} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={316} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>SCRUB HEAD</text>
      <text x={10} y={326} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>ASSEMBLY</text>
      <line x1={118} y1={348} x2={164} y2={348} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={344} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>DRIVE WHEEL</text>
      {/* RIGHT LABELS */}
      <line x1={382} y1={210} x2={338} y2={210} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={206} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>CLEAN WATER /</text>
      <text x={382} y={216} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>RECOVERY TANKS</text>
      <line x1={382} y1={333} x2={410} y2={333} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={390} y={329} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>SQUEEGEE</text>
      <text x={390} y={339} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>BLADE</text>
      <line x1={382} y1={348} x2={386} y2={348} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={390} y={344} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>REAR DRIVE</text>
      <text x={390} y={354} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>WHEEL</text>
    </svg>
  );
}

function SecuritySchematic() {
  return (
    <svg viewBox="0 0 500 400" aria-hidden="true" style={{ width: "100%", maxHeight: 400 }}>
      <defs>
        <pattern id="sg" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0L0 0 0 20" fill="none" stroke="currentColor" strokeOpacity={0.05} strokeWidth={0.5} />
        </pattern>
      </defs>
      <rect width={500} height={400} fill="url(#sg)" />
      <path d="M10 28 L10 10 L28 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 28 L490 10 L472 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M10 372 L10 390 L28 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 372 L490 390 L472 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <text x={250} y={396} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.22} textAnchor="middle">AUTONOMOUS SECURITY PATROL ROBOT — FRONT VIEW — TECHNICAL SCHEMATIC</text>
      {/* GROUND */}
      <line x1={80} y1={370} x2={420} y2={370} stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.75} strokeDasharray="6,4" />
      {/* DRIVE BASE */}
      <rect x={196} y={330} width={108} height={40} rx={12} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.4} />
      <circle cx={220} cy={370} r={16} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.3} />
      <circle cx={280} cy={370} r={16} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.3} />
      <circle cx={220} cy={370} r={7} fill="none" stroke="currentColor" strokeOpacity={0.28} strokeWidth={0.75} />
      <circle cx={280} cy={370} r={7} fill="none" stroke="currentColor" strokeOpacity={0.28} strokeWidth={0.75} />
      {/* MAIN CYLINDER BODY */}
      <rect x={210} y={148} width={80} height={182} rx={40} fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      {/* LIDAR RING at waist */}
      <rect x={204} y={256} width={92} height={16} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.62} strokeWidth={1.4} />
      {/* LiDAR rays */}
      {[-60,-30,0,30,60,90,120,150,180,-150,-120,-90].map(a => {
        const rad = (a * Math.PI) / 180;
        const cx = 250, cy = 264;
        return <line key={a} x1={cx + 46*Math.cos(rad)} y1={cy + 8*Math.sin(rad)} x2={cx + 60*Math.cos(rad)} y2={cy + 10*Math.sin(rad)} stroke="currentColor" strokeOpacity={0.14} strokeWidth={0.65} />;
      })}
      {/* SPEAKER GRILLE */}
      <rect x={222} y={290} width={56} height={28} rx={4} fill="none" stroke="currentColor" strokeOpacity={0.42} strokeWidth={1} />
      {[0,1,2,3,4].map(i => (
        <line key={i} x1={228} y1={296 + i*5} x2={272} y2={296 + i*5} stroke="currentColor" strokeOpacity={0.2} strokeWidth={0.65} />
      ))}
      {/* STROBE LIGHTS */}
      <circle cx={226} cy={160} r={7} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1} />
      <circle cx={274} cy={160} r={7} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1} />
      <circle cx={226} cy={160} r={2.5} fill="currentColor" fillOpacity={0.25} />
      <circle cx={274} cy={160} r={2.5} fill="currentColor" fillOpacity={0.25} />
      {/* CAMERA DOME */}
      <circle cx={250} cy={130} r={30} fill="none" stroke="currentColor" strokeOpacity={0.72} strokeWidth={1.5} />
      {/* 360 camera ring */}
      <circle cx={250} cy={130} r={18} fill="none" stroke="currentColor" strokeOpacity={0.35} strokeWidth={0.75} strokeDasharray="4,3" />
      {/* PTZ camera lens */}
      <circle cx={250} cy={118} r={10} fill="none" stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.2} />
      <circle cx={250} cy={118} r={4} fill="none" stroke="currentColor" strokeOpacity={0.42} strokeWidth={0.75} />
      <circle cx={250} cy={118} r={1.5} fill="currentColor" fillOpacity={0.3} />
      {/* THERMAL camera (side) */}
      <rect x={210} y={124} width={16} height={12} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.5} strokeWidth={1} />
      {/* Emergency button */}
      <circle cx={290} cy={200} r={9} fill="none" stroke="currentColor" strokeOpacity={0.5} strokeWidth={1.2} />
      <circle cx={290} cy={200} r={4} fill="currentColor" fillOpacity={0.2} />
      {/* LEFT LABELS */}
      <line x1={118} y1={112} x2={220} y2={120} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={108} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>THERMAL</text>
      <text x={10} y={118} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>IMAGER</text>
      <line x1={118} y1={130} x2={220} y2={130} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={140} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>360° CAMERA</text>
      <text x={10} y={150} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>DOME</text>
      <line x1={118} y1={264} x2={204} y2={264} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={260} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>LIDAR RING</text>
      <text x={10} y={270} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>360° SCAN</text>
      <line x1={118} y1={304} x2={222} y2={304} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={300} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>SPEAKER /</text>
      <text x={10} y={310} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>INTERCOM</text>
      {/* RIGHT LABELS */}
      <line x1={382} y1={118} x2={280} y2={118} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={114} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>PTZ CAMERA</text>
      <text x={382} y={124} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>4K OPTICAL</text>
      <line x1={382} y1={160} x2={281} y2={160} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={156} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>STROBE</text>
      <text x={382} y={166} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>WARNING LIGHTS</text>
      <line x1={382} y1={200} x2={299} y2={200} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={196} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>EMERGENCY</text>
      <text x={382} y={206} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>BUTTON</text>
      <line x1={382} y1={350} x2={304} y2={350} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={382} y={346} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>DRIVE BASE /</text>
      <text x={382} y={356} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>OMNI WHEELS</text>
    </svg>
  );
}

function SpecializedSchematic() {
  return (
    <svg viewBox="0 0 500 400" aria-hidden="true" style={{ width: "100%", maxHeight: 400 }}>
      <defs>
        <pattern id="spg" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0L0 0 0 20" fill="none" stroke="currentColor" strokeOpacity={0.05} strokeWidth={0.5} />
        </pattern>
      </defs>
      <rect width={500} height={400} fill="url(#spg)" />
      <path d="M10 28 L10 10 L28 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 28 L490 10 L472 10" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M10 372 L10 390 L28 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <path d="M490 372 L490 390 L472 390" fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth={1} />
      <text x={250} y={396} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.22} textAnchor="middle">MODULAR SPECIALIZED ROBOT PLATFORM — CONFIGURABLE ARCHITECTURE</text>
      {/* GROUND */}
      <line x1={80} y1={360} x2={420} y2={360} stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.75} strokeDasharray="6,4" />
      {/* MOBILE BASE */}
      <rect x={150} y={300} width={200} height={50} rx={6} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.4} />
      {/* Wheels */}
      <circle cx={180} cy={350} r={20} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.3} />
      <circle cx={180} cy={350} r={9} fill="none" stroke="currentColor" strokeOpacity={0.25} strokeWidth={0.75} />
      <circle cx={320} cy={350} r={20} fill="none" stroke="currentColor" strokeOpacity={0.65} strokeWidth={1.3} />
      <circle cx={320} cy={350} r={9} fill="none" stroke="currentColor" strokeOpacity={0.25} strokeWidth={0.75} />
      {/* CENTRAL CHASSIS */}
      <rect x={155} y={200} width={190} height={100} rx={4} fill="none" stroke="currentColor" strokeOpacity={0.7} strokeWidth={1.5} />
      {/* Compute module inside */}
      <rect x={172} y={218} width={70} height={40} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.28} strokeWidth={0.75} />
      <text x={207} y={238} fontSize={6.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.28} textAnchor="middle">ROS2</text>
      <text x={207} y={248} fontSize={6.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.28} textAnchor="middle">COMPUTE</text>
      {/* I/O Panel */}
      <rect x={258} y={218} width={70} height={40} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.28} strokeWidth={0.75} />
      <text x={293} y={238} fontSize={6.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.28} textAnchor="middle">I/O PANEL</text>
      <text x={293} y={248} fontSize={6.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.28} textAnchor="middle">EtherCAT</text>
      {/* PAYLOAD BAY A (left top) */}
      <rect x={120} y={110} width={105} height={90} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.2} strokeDasharray="5,3" />
      <text x={172} y={148} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.32} textAnchor="middle">PAYLOAD</text>
      <text x={172} y={158} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.32} textAnchor="middle">BAY A</text>
      <text x={172} y={168} fontSize={6} fontFamily="monospace" fill="currentColor" fillOpacity={0.22} textAnchor="middle">[ CONFIGURABLE ]</text>
      {/* Connector A to chassis */}
      <line x1={172} y1={200} x2={172} y2={200} stroke="none" />
      <rect x={162} y={196} width={20} height={8} rx={1} fill="none" stroke="currentColor" strokeOpacity={0.4} strokeWidth={0.9} />
      {/* PAYLOAD BAY B (right top) */}
      <rect x={275} y={110} width={105} height={90} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.2} strokeDasharray="5,3" />
      <text x={327} y={148} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.32} textAnchor="middle">PAYLOAD</text>
      <text x={327} y={158} fontSize={7} fontFamily="monospace" fill="currentColor" fillOpacity={0.32} textAnchor="middle">BAY B</text>
      <text x={327} y={168} fontSize={6} fontFamily="monospace" fill="currentColor" fillOpacity={0.22} textAnchor="middle">[ CONFIGURABLE ]</text>
      <rect x={318} y={196} width={20} height={8} rx={1} fill="none" stroke="currentColor" strokeOpacity={0.4} strokeWidth={0.9} />
      {/* MOUNTING RAIL (left) */}
      <rect x={138} y={200} width={16} height={100} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.45} strokeWidth={1} />
      {[0,1,2,3].map(i => (
        <line key={i} x1={138} y1={212 + i*22} x2={154} y2={212 + i*22} stroke="currentColor" strokeOpacity={0.2} strokeWidth={0.65} />
      ))}
      {/* MOUNTING RAIL (right) */}
      <rect x={346} y={200} width={16} height={100} rx={2} fill="none" stroke="currentColor" strokeOpacity={0.45} strokeWidth={1} />
      {[0,1,2,3].map(i => (
        <line key={i} x1={346} y1={212 + i*22} x2={362} y2={212 + i*22} stroke="currentColor" strokeOpacity={0.2} strokeWidth={0.65} />
      ))}
      {/* CUSTOM END EFFECTOR (right side) */}
      <rect x={362} y={220} width={44} height={56} rx={3} fill="none" stroke="currentColor" strokeOpacity={0.58} strokeWidth={1.3} />
      <line x1={362} y1={248} x2={406} y2={248} stroke="currentColor" strokeOpacity={0.25} strokeWidth={0.65} />
      <text x={384} y={238} fontSize={6.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.28} textAnchor="middle">CUSTOM</text>
      <text x={384} y={260} fontSize={6.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.28} textAnchor="middle">TOOL</text>
      {/* LEFT LABELS */}
      <line x1={118} y1={155} x2={120} y2={155} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={151} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>PAYLOAD BAY A</text>
      <text x={10} y={161} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>MISSION SPECIFIC</text>
      <line x1={118} y1={250} x2={138} y2={250} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={246} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>STANDARD</text>
      <text x={10} y={256} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>MOUNTING RAIL</text>
      <line x1={118} y1={230} x2={155} y2={230} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={226} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>ROS2 + COMPUTE</text>
      <line x1={118} y1={325} x2={150} y2={325} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={10} y={321} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>MOBILE BASE /</text>
      <text x={10} y={331} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>BATTERY</text>
      {/* RIGHT LABELS */}
      <line x1={382} y1={155} x2={380} y2={155} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={390} y={151} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>PAYLOAD BAY B</text>
      <text x={390} y={161} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>DOMAIN SPECIFIC</text>
      <line x1={406} y1={248} x2={410} y2={248} stroke="currentColor" strokeOpacity={0.17} strokeWidth={0.75} />
      <text x={418} y={244} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>CUSTOM</text>
      <text x={418} y={254} fontSize={7.5} fontFamily="monospace" fill="currentColor" fillOpacity={0.45}>END EFFECTOR</text>
    </svg>
  );
}

function getSchematic(slug: string) {
  const map: Record<string, React.ReactNode> = {
    humanoid: <HumanoidSchematic />,
    amr: <AMRSchematic />,
    "robotic-arms": <RoboticArmsSchematic />,
    cobots: <CobotsSchematic />,
    warehouse: <WarehouseSchematic />,
    inspection: <InspectionSchematic />,
    cleaning: <CleaningSchematic />,
    security: <SecuritySchematic />,
    specialized: <SpecializedSchematic />,
  };
  return map[slug] ?? null;
}

/* ── PROCESS FLOW ──────────────────────────────────────────────── */

const processFlows: Record<string, string[]> = {
  humanoid:       ["PERCEIVE", "REASON", "EXECUTE", "ADAPT"],
  amr:            ["SCAN", "MAP", "ROUTE", "COMPLETE"],
  "robotic-arms": ["DETECT", "PLAN PATH", "GRASP", "VERIFY"],
  cobots:         ["MONITOR", "COLLABORATE", "ASSIST", "OPTIMIZE"],
  warehouse:      ["ORDER IN", "NAVIGATE", "RETRIEVE", "DELIVER"],
  inspection:     ["PATROL", "SENSE", "DETECT", "REPORT"],
  cleaning:       ["MAP ZONE", "NAVIGATE", "CLEAN", "VERIFY"],
  security:       ["PATROL", "DETECT", "ALERT", "LOG"],
  specialized:    ["SENSE", "COMPUTE", "ACT", "ITERATE"],
};

function ProcessFlowSVG({ steps }: { steps: string[] }) {
  const nodeH = 34, nodeW = 120, gap = 30, startY = 30;
  const totalH = steps.length * nodeH + (steps.length - 1) * gap;
  const viewH = totalH + 60;
  return (
    <svg viewBox={`0 0 240 ${viewH}`} aria-hidden="true" style={{ width: "100%", maxHeight: viewH }}>
      {steps.map((step, i) => {
        const y = startY + i * (nodeH + gap);
        const isLast = i === steps.length - 1;
        return (
          <g key={step}>
            <rect x={60} y={y} width={nodeW} height={nodeH} rx={2}
              fill="none" stroke="currentColor" strokeOpacity={isLast ? 0.55 : 0.32} strokeWidth={isLast ? 1.4 : 1} />
            <text x={120} y={y + nodeH / 2 + 3} fontSize={8} fontFamily="monospace"
              fill="currentColor" fillOpacity={isLast ? 0.65 : 0.45} textAnchor="middle">
              {step}
            </text>
            {!isLast && (
              <>
                <line x1={120} y1={y + nodeH} x2={120} y2={y + nodeH + gap}
                  stroke="currentColor" strokeOpacity={0.22} strokeWidth={1} />
                <polygon
                  points={`114,${y + nodeH + gap - 6} 126,${y + nodeH + gap - 6} 120,${y + nodeH + gap}`}
                  fill="currentColor" fillOpacity={0.22}
                />
              </>
            )}
          </g>
        );
      })}
      <text x={120} y={viewH - 8} fontSize={6.5} fontFamily="monospace"
        fill="currentColor" fillOpacity={0.22} textAnchor="middle">
        OPERATIONAL CYCLE
      </text>
    </svg>
  );
}

/* ── PAGE ──────────────────────────────────────────────────────── */

export default async function RobotTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const data = robotTypeData[type];
  if (!data) redirect("/robots");

  const steps = processFlows[type] ?? ["SENSE", "PLAN", "ACT", "VERIFY"];

  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      {/* ── HERO ── */}
      <div className="page-hero">
        <span className="lbl">Robot Types / {data.title}</span>
        <h1 className="d1">{data.title}</h1>
        <p className="body-lg" style={{ maxWidth: 560, marginBottom: 16 }}>
          {data.tagline}
        </p>
        <p className="body" style={{ maxWidth: 660, marginBottom: 32 }}>
          {data.intro[0]}
        </p>
        <div className="btn-row">
          <Link href="/robot-finder" className="btn btn-p">Find {data.title} →</Link>
          <Link href="/assessment" className="btn btn-g">Talk to a Specialist</Link>
        </div>
      </div>

      {/* ── SCHEMATIC ── */}
      <div className="wrap" style={{ marginBottom: 0 }}>
        <div style={{
          border: "1px solid var(--bdr2)",
          borderRadius: 3,
          background: "var(--bg1)",
          padding: "32px 24px 20px",
          position: "relative",
        }}>
          <span className="lbl" style={{ position: "absolute", top: 14, left: 24 }}>
            Technical Schematic
          </span>
          <span className="lbl" style={{ position: "absolute", top: 14, right: 24 }}>
            {data.title.toUpperCase()}
          </span>
          {getSchematic(type)}
        </div>
      </div>

      {/* ── INTRO CONTINUATION ── */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <p className="body-lg">{data.intro[1]}</p>
            <p className="body-lg">{data.intro[2]}</p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 560 }}>
            <span className="lbl">How It Works</span>
            <h2 className="d2">Technology and autonomy systems.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <p className="body-lg" style={{ marginBottom: 24 }}>{data.howItWorks[0]}</p>
              <p className="body-lg">{data.howItWorks[1]}</p>
            </div>
            <div style={{
              border: "1px solid var(--bdr2)",
              borderRadius: 3,
              background: "var(--bg1)",
              padding: "24px 16px",
            }}>
              <span className="lbl" style={{ display: "block", marginBottom: 20, textAlign: "center" }}>
                Operational Cycle
              </span>
              <ProcessFlowSVG steps={steps} />
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 560 }}>
            <span className="lbl">Use Cases</span>
            <h2 className="d2">Where {data.title} perform best.</h2>
            <p className="body-lg">
              Proven deployment patterns across enterprise operations. Each use case represents a
              commercially validated application with documented ROI at scale.
            </p>
          </div>
          <div className="ind-grid">
            {data.useCases.map((uc, i) => (
              <div key={uc.title} className="ind-card">
                <div className="ind-idx">{String(i + 1).padStart(2, "0")}</div>
                <h3>{uc.title}</h3>
                <p>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 560 }}>
            <span className="lbl">Industries</span>
            <h2 className="d2">Best-fit industry verticals.</h2>
            <p className="body-lg">
              {data.title} deliver the strongest ROI in environments with high task repetition,
              large facilities, multi-shift operations, and labor cost pressure in these verticals.
            </p>
          </div>
          <div className="chips" style={{ gap: 8 }}>
            {data.industries.map((ind) => (
              <span key={ind} className="ichip" style={{ fontSize: 14, padding: "9px 18px" }}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECONOMICS ── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 560 }}>
            <span className="lbl">Economics</span>
            <h2 className="d2">Cost, ROI, and payback periods.</h2>
          </div>
          <div className="raas-pair">
            <div className="raas-card">
              <div className="raas-lbl">Investment &amp; Cost Structure</div>
              <p className="body-lg">{data.economics[0]}</p>
            </div>
            <div className="raas-card feat">
              <div className="raas-lbl">Payback &amp; Operating Economics</div>
              <p className="body-lg">{data.economics[1]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECS + MANUFACTURERS ── */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            {/* SPECS */}
            <div>
              <div className="sec-hd">
                <span className="lbl">Technical Specifications</span>
                <h2 className="d2">Typical platform specs.</h2>
                <p className="body-lg">
                  Representative values across leading {data.title} platforms.
                  Actual specifications vary by manufacturer, model, and configuration.
                </p>
              </div>
              <div>
                {data.specs.map((spec) => (
                  <div
                    key={spec.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "13px 0",
                      borderBottom: "1px solid var(--bdr)",
                      gap: 16,
                    }}
                  >
                    <span className="lbl" style={{ fontSize: 10.5, flexShrink: 0 }}>{spec.label}</span>
                    <span style={{
                      fontSize: 13,
                      fontFamily: "var(--font-mono, monospace)",
                      color: "var(--t1)",
                      fontWeight: 500,
                      textAlign: "right",
                    }}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* MANUFACTURERS */}
            <div>
              <div className="sec-hd">
                <span className="lbl">Manufacturers</span>
                <h2 className="d2">Key vendors in this category.</h2>
                <p className="body-lg">
                  RBOT is vendor-neutral across all {data.title} platforms. We recommend the
                  hardware that best fits your specific operation, facility, and budget — not
                  the vendor with the largest margin incentive.
                </p>
              </div>
              <div className="chips" style={{ gap: 8 }}>
                {data.manufacturers.map((m) => (
                  <span key={m} className="ichip" style={{ fontSize: 13, padding: "8px 16px" }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RBOT APPROACH ── */}
      <section className="sec">
        <div className="wrap">
          <div style={{
            background: "var(--bg1)",
            border: "1px solid var(--acc-bdr)",
            borderRadius: 3,
            padding: "clamp(32px,5vw,56px)",
          }}>
            <span className="lbl" style={{ color: "var(--acc)", display: "block", marginBottom: 14 }}>
              RBOT Approach
            </span>
            <h2 className="d2" style={{ marginBottom: 20 }}>
              How RBOT deploys {data.title}.
            </h2>
            <p className="body-lg" style={{ maxWidth: 760, marginBottom: 16 }}>
              {data.rbotApproach}
            </p>
            <p className="body-lg" style={{ maxWidth: 760, marginBottom: 32 }}>
              {data.deploymentReqs}
            </p>
            <div className="btn-row">
              <Link href="/assessment" className="btn btn-p">Request Assessment</Link>
              <Link href="/robot-finder" className="btn btn-g">Robot Finder →</Link>
              <Link href="/raas" className="btn btn-g">RaaS Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="fcta">
        <div className="fcta-inner">
          <span className="lbl" style={{ marginBottom: 8 }}>Get Started</span>
          <h2 className="d2">Find {data.title} for your operation.</h2>
          <p className="body-lg">
            Answer a few questions about your facility, task profile, and throughput requirements
            and RBOT will identify the right platform, manufacturer, and deployment plan.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/robot-finder" className="btn btn-p">Start Robot Finder</Link>
            <Link href="/assessment" className="btn btn-g">Talk to a Specialist</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
