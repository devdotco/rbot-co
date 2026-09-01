import Link from "next/link";
import { fleetRows } from "@/lib/site-data";

const sideItems = [
  { group: "Fleet",     items: ["Fleet Overview", "Tasks", "Workflows"] },
  { group: "Analytics", items: ["Performance", "Utilization", "Cost Per Task"] },
  { group: "System",    items: ["Integrations", "Maintenance", "API"] },
];

const fleetStats = [
  { lbl: "Robots Online",  val: <>119<span style={{ fontSize: 16, color: "var(--t3)" }}> / 127</span></>, sub: "6 idle · 2 maintenance" },
  { lbl: "Utilization",    val: <><span className="acc">94.2</span><span style={{ fontSize: 16 }}>%</span></>,   sub: "↑ 2.1% vs last week", accent: true },
  { lbl: "Tasks Today",    val: "18,492",  sub: "1,284 in last hour" },
  { lbl: "Cost Per Task",  val: "$2.41",   sub: "↓ $0.18 vs baseline" },
];

type RowStatus = "task" | "online" | "idle";

function Chip({ status }: { status: RowStatus }) {
  const map: Record<RowStatus, { cls: string; label: string }> = {
    task:   { cls: "chip chip-task", label: "TASK ACTIVE" },
    online: { cls: "chip chip-on",   label: "ONLINE" },
    idle:   { cls: "chip chip-idle", label: "IDLE" },
  };
  const { cls, label } = map[status];
  return <span className={cls}>{label}</span>;
}

function Battery({ pct }: { pct: number | null }) {
  if (pct === null) return <span style={{ color: "var(--t3)", fontSize: 11, fontFamily: "var(--font-mono, monospace)" }}>—</span>;
  const color = pct > 70 ? "var(--good)" : pct > 40 ? "var(--warn)" : "#EF4444";
  return (
    <div className="batt">
      <div className="batt-track">
        <div className="batt-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
      {pct}%
    </div>
  );
}

export default function Platform() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-hd" style={{ maxWidth: 620 }}>
          <span className="lbl">RBOT Platform</span>
          <h2 className="d2">One control plane for your robotic workforce.</h2>
          <p className="body-lg">
            Fleet management, task orchestration, performance analytics, integrations, and maintenance
            tracking — unified in a single interface.
          </p>
        </div>

        <div className="plat-shell">
          <div className="plat-bar">
            <div className="plat-dot" /><div className="plat-dot" /><div className="plat-dot" />
            <div className="plat-title">RBOT Platform — Fleet Overview</div>
            <span className="live-dot" style={{ marginLeft: "auto" }} />
          </div>

          <div className="plat-body">
            <div className="plat-side">
              {sideItems.map((group, gi) => (
                <div key={group.group}>
                  <div className="side-lbl" style={{ marginTop: gi > 0 ? 16 : 4 }}>{group.group}</div>
                  {group.items.map((item, ii) => (
                    <div key={item} className={`side-item${gi === 0 && ii === 0 ? " on" : ""}`}>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="plat-main">
              <div className="fleet-stats">
                {fleetStats.map(s => (
                  <div key={s.lbl} className="stat">
                    <div className="stat-lbl">{s.lbl}</div>
                    <div className={`stat-val${s.accent ? " acc" : ""}`}>{s.val}</div>
                    <div className="stat-sub">{s.sub}</div>
                  </div>
                ))}
              </div>

              <div className="rtable-hd">
                <span>Robot</span>
                <span>Status</span>
                <span>Current Task</span>
                <span>Battery</span>
              </div>

              {fleetRows.map(row => (
                <div key={row.id} className="rrow">
                  <div>
                    <div className="rrow-name">{row.name}</div>
                    <div className="rrow-sub">{row.id} · {row.zone}</div>
                  </div>
                  <div><Chip status={row.status as RowStatus} /></div>
                  <div className="body" style={{ fontSize: 12, color: "var(--t2)" }}>{row.task}</div>
                  <Battery pct={row.battery} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <Link href="/platform" className="btn btn-g">Explore RBOT Platform</Link>
        </div>
      </div>
    </section>
  );
}
