"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

interface Bot {
  id: string;
  model: string;
  type: string;
  waypoints: { x: number; y: number }[];
  wi: number;
  t: number;
  speed: number;
  status: string;
  task: string;
  battery: number | null;
  stationary?: boolean;
  pos: { x: number; y: number };
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Capture as non-nullable reference for use inside inner functions
    const cv = canvas as HTMLCanvasElement;
    const ctx = cv.getContext("2d")!;
    const L = 500, H_L = 460;
    let animId: number;
    let lastTs = 0;

    function getCSS(prop: string) {
      return getComputedStyle(document.documentElement).getPropertyValue(prop).trim();
    }
    function colors() {
      return {
        bg:   getCSS("--bg1"),
        bdr:  getCSS("--bdr"),
        bdr2: getCSS("--bdr2"),
        t1:   getCSS("--t1"),
        t2:   getCSS("--t2"),
        t3:   getCSS("--t3"),
        acc:  "#0AAEFF",
        good: "#22C55E",
        warn: "#F59E0B",
      };
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = cv.parentElement!.clientWidth || 500;
      cv.width  = w * dpr;
      cv.height = Math.round(w * H_L / L) * dpr;
      cv.style.width  = `${w}px`;
      cv.style.height = `${Math.round(w * H_L / L)}px`;
      ctx.setTransform(dpr * w / L, 0, 0, dpr * w / L, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const FX = 28, FY = 70, FW = 444, FH = 288;
    const zones = [
      { x: FX,       y: FY,        w: 148, h: FH,    label: "ZONE A — RECEIVING" },
      { x: FX + 148, y: FY,        w: 148, h: FH / 2, label: "ZONE B — STORAGE" },
      { x: FX + 148, y: FY + FH/2, w: 148, h: FH / 2, label: "ZONE C — PROCESSING" },
      { x: FX + 296, y: FY,        w: 148, h: FH,    label: "ZONE D — SHIPPING" },
    ];

    const bots: Bot[] = [
      {
        id: "RBT-0042", model: "Figure 03", type: "Humanoid",
        waypoints: [{ x: 60, y: 160 }, { x: 195, y: 160 }, { x: 195, y: 240 }, { x: 60, y: 240 }],
        wi: 0, t: 0, speed: 28, status: "TASK", task: "Pallet Move",
        battery: 74, pos: { x: 60, y: 160 },
      },
      {
        id: "RBT-0031", model: "Digit V3", type: "AMR",
        waypoints: [{ x: 340, y: 98 }, { x: 420, y: 98 }, { x: 420, y: 320 }, { x: 340, y: 320 }],
        wi: 0, t: 0, speed: 38, status: "TASK", task: "Zone Pick",
        battery: 62, pos: { x: 340, y: 98 },
      },
      {
        id: "RBT-0055", model: "UR20 Arm", type: "Arm",
        waypoints: [{ x: 222, y: 232 }, { x: 222, y: 232 }],
        wi: 0, t: 0, speed: 0, status: "ONLINE", task: "Machine Tend",
        battery: null, stationary: true, pos: { x: 222, y: 232 },
      },
    ];

    const MONO = `'SF Mono','Cascadia Code',ui-monospace,monospace`;

    function drawGrid(C: ReturnType<typeof colors>) {
      ctx.globalAlpha = 0.25;
      ctx.strokeStyle = C.bdr;
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= L; x += 20) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H_L); ctx.stroke();
      }
      for (let y = 0; y <= H_L; y += 20) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(L, y); ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    function drawHeader(C: ReturnType<typeof colors>, ts: number) {
      ctx.fillStyle = C.bg;
      ctx.fillRect(0, 0, L, 60);
      ctx.strokeStyle = C.bdr;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, 60); ctx.lineTo(L, 60); ctx.stroke();

      ctx.font = `500 10px ${MONO}`;
      ctx.fillStyle = C.t3;
      ctx.textAlign = "left";
      ctx.fillText("RBOT FLEET CONTROL", 14, 18);

      const pulse = 0.55 + 0.45 * Math.sin(ts / 600);
      ctx.fillStyle = C.good;
      ctx.globalAlpha = pulse;
      ctx.beginPath(); ctx.arc(L - 22, 15, 4, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = C.t3;
      ctx.textAlign = "right";
      ctx.font = `400 9px ${MONO}`;
      ctx.fillText("LIVE", L - 12, 18);

      const stats = [
        { lbl: "ONLINE",     val: "119",     accent: false },
        { lbl: "TASKS",      val: "18,492",  accent: false },
        { lbl: "UTIL",       val: "94.2%",   accent: true  },
        { lbl: "COST/TASK",  val: "$2.41",   accent: false },
      ];
      const cw = L / stats.length;
      stats.forEach((s, i) => {
        const cx = cw * i + cw / 2;
        ctx.textAlign = "center";
        ctx.fillStyle = C.t3;
        ctx.font = `400 9px ${MONO}`;
        ctx.fillText(s.lbl, cx, 40);
        ctx.fillStyle = s.accent ? "#0AAEFF" : C.t1;
        ctx.font = `600 15px ${MONO}`;
        ctx.fillText(s.val, cx, 57);
      });
    }

    function drawFloor(C: ReturnType<typeof colors>) {
      zones.forEach(z => {
        ctx.strokeStyle = C.bdr2;
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.strokeRect(z.x, z.y, z.w, z.h);
        ctx.fillStyle = C.t3;
        ctx.font = `400 8px ${MONO}`;
        ctx.textAlign = "center";
        ctx.fillText(z.label, z.x + z.w / 2, z.y + 12);
      });
      ctx.strokeStyle = C.bdr2;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(FX, FY, FW, FH);
    }

    function drawBot(b: Bot, C: ReturnType<typeof colors>, ts: number) {
      const { x, y } = b.pos;
      const sz = b.type === "Humanoid" ? 10 : 9;

      if (!b.stationary) {
        ctx.fillStyle = "#0AAEFF";
        ctx.globalAlpha = 0.07;
        ctx.fillRect(x - sz / 2 - 5, y - sz / 2 - 5, sz + 10, sz + 10);
        ctx.globalAlpha = 1;
      }

      if (b.stationary) {
        const pulse = 0.25 + 0.15 * Math.sin(ts / 500);
        ctx.globalAlpha = pulse;
        ctx.strokeStyle = "#0AAEFF";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, sz + 7, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      ctx.fillStyle = b.status === "TASK" ? "#0AAEFF" : C.t2;
      ctx.fillRect(x - sz / 2, y - sz / 2, sz, sz);

      ctx.fillStyle = C.t3;
      ctx.font = `400 8px ${MONO}`;
      ctx.textAlign = "center";
      ctx.fillText(b.id, x, y - sz / 2 - 5);

      const chipColor = b.status === "TASK" ? "#0AAEFF" : C.good;
      ctx.fillStyle = chipColor;
      ctx.globalAlpha = 0.12;
      ctx.fillRect(x - 23, y + sz / 2 + 3, 46, 11);
      ctx.globalAlpha = 1;
      ctx.fillStyle = chipColor;
      ctx.font = `500 7px ${MONO}`;
      ctx.textAlign = "center";
      ctx.fillText(b.task, x, y + sz / 2 + 11.5);
    }

    function drawStatus(C: ReturnType<typeof colors>) {
      const barY = FY + FH + 14;
      bots.forEach((b, i) => {
        const bx = 14 + i * (L / 3);
        ctx.fillStyle = C.t3;
        ctx.font = `400 8px ${MONO}`;
        ctx.textAlign = "left";
        ctx.fillText(`${b.id} · ${b.model}`, bx, barY + 8);
        if (b.battery !== null) {
          const bw = 60;
          ctx.fillStyle = C.bdr2;
          ctx.fillRect(bx, barY + 13, bw, 5);
          ctx.fillStyle = b.battery > 70 ? C.good : b.battery > 40 ? C.warn : "#EF4444";
          ctx.fillRect(bx, barY + 13, bw * (b.battery / 100), 5);
          ctx.fillStyle = C.t3;
          ctx.font = `400 8px ${MONO}`;
          ctx.fillText(`${b.battery}%`, bx + bw + 5, barY + 19);
        } else {
          ctx.fillStyle = C.t3;
          ctx.font = `400 8px ${MONO}`;
          ctx.fillText("Fixed mount", bx, barY + 19);
        }
      });
    }

    function updateBots(dt: number) {
      bots.forEach(b => {
        if (b.stationary) return;
        const curr = b.waypoints[b.wi];
        const next = b.waypoints[(b.wi + 1) % b.waypoints.length];
        const dx = next.x - curr.x, dy = next.y - curr.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        b.t += (b.speed * dt) / dist;
        if (b.t >= 1) {
          b.t = 0;
          b.wi = (b.wi + 1) % b.waypoints.length;
        }
        const c2 = b.waypoints[b.wi];
        const n2 = b.waypoints[(b.wi + 1) % b.waypoints.length];
        b.pos.x = c2.x + (n2.x - c2.x) * b.t;
        b.pos.y = c2.y + (n2.y - c2.y) * b.t;
      });
    }

    function draw(ts: number) {
      animId = requestAnimationFrame(draw);
      const dt = Math.min((ts - lastTs) / 1000, 0.05);
      lastTs = ts;
      updateBots(dt);
      const C = colors();
      ctx.clearRect(0, 0, L, H_L);
      ctx.fillStyle = C.bg;
      ctx.fillRect(0, 0, L, H_L);
      drawGrid(C);
      drawHeader(C, ts);
      drawFloor(C);
      bots.forEach(b => drawBot(b, C, ts));
      drawStatus(C);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="hero">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="lbl">Physical AI Infrastructure</span>
          </div>
          <h1 className="d1">Put AI to Work in the Physical World.</h1>
          <p className="body-lg hero-desc">
            Deploy intelligent robots across your facilities without building a robotics team internally.
            RBOT helps you source, integrate, manage, and finance physical AI systems from leading manufacturers.
          </p>
          <div className="btn-row">
            <Link href="/robot-finder" className="btn btn-p">Find the Right Robot</Link>
            <Link href="/assessment" className="btn btn-g">Talk to a Specialist</Link>
          </div>
          <div className="hero-tags">
            {["Humanoids", "Autonomous Mobile Robots", "Warehouse Automation", "Industrial Robotics", "Physical AI"].map(t => (
              <span key={t} className="hero-tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="canvas-wrap">
          <canvas ref={canvasRef} id="heroCanvas" aria-label="RBOT fleet control visualization" />
        </div>
      </div>
    </div>
  );
}
