"use client";

import { useState } from "react";
import Link from "next/link";

interface State {
  employees: number;
  wage: number;
  burden: number;
  hours: number;
  shifts: number;
  days: number;
  robots: number;
  robotCost: number;
}

function fmt(n: number): string {
  const abs = Math.abs(Math.round(n));
  const s = "$" + abs.toLocaleString("en-US");
  return n < 0 ? "-" + s : s;
}

export default function ROICalculator() {
  const [v, setV] = useState<State>({
    employees: 10, wage: 20, burden: 25,
    hours: 8, shifts: 2, days: 5,
    robots: 3, robotCost: 4500,
  });

  const set = (k: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setV(prev => ({ ...prev, [k]: parseFloat(e.target.value) || 0 }));

  const labor  = v.employees * v.wage * (1 + v.burden / 100) * v.hours * v.shifts * v.days * 52;
  const robo   = v.robots * v.robotCost * 12;
  const saves  = labor - robo;
  const fiveYr = saves * 5;

  return (
    <section className="sec" id="roi">
      <div className="wrap">
        <div className="sec-hd" style={{ maxWidth: 600 }}>
          <span className="lbl">Economics</span>
          <h2 className="d2">Calculate the ROI</h2>
          <p className="body-lg">Estimate the financial case for automation in your specific operation.</p>
        </div>
        <div className="calc">
          <div className="calc-in">
            <span className="lbl">Your Operation</span>
            <div className="field-row">
              <div className="field">
                <label>Employees performing task</label>
                <input type="number" value={v.employees} min={1} onChange={set("employees")} />
              </div>
              <div className="field">
                <label>Average hourly wage ($)</label>
                <input type="number" value={v.wage} min={1} onChange={set("wage")} />
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label>Benefits / payroll burden (%)</label>
                <input type="number" value={v.burden} min={0} max={100} onChange={set("burden")} />
              </div>
              <div className="field">
                <label>Hours per shift</label>
                <input type="number" value={v.hours} min={1} max={24} onChange={set("hours")} />
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label>Shifts per day</label>
                <input type="number" value={v.shifts} min={1} max={3} onChange={set("shifts")} />
              </div>
              <div className="field">
                <label>Days per week</label>
                <input type="number" value={v.days} min={1} max={7} onChange={set("days")} />
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label>Robots required</label>
                <input type="number" value={v.robots} min={1} onChange={set("robots")} />
              </div>
              <div className="field">
                <label>Robot monthly cost ($)</label>
                <input type="number" value={v.robotCost} min={0} onChange={set("robotCost")} />
              </div>
            </div>
          </div>

          <div className="calc-out">
            <span className="lbl">Estimated Savings</span>
            <div className="out-row">
              <div className="out-lbl">Current Annual Labor Cost</div>
              <div className="out-val mono">{fmt(labor)}</div>
            </div>
            <div className="out-row">
              <div className="out-lbl">Annual Robot Operating Cost</div>
              <div className="out-val mono">{fmt(robo)}</div>
            </div>
            <div className="out-row">
              <div className="out-lbl">Estimated Annual Savings</div>
              <div className={`out-val mono${saves > 0 ? " pos" : ""}`}>{fmt(saves)}</div>
            </div>
            <div className="out-row">
              <div className="out-lbl">Monthly Savings</div>
              <div className="out-val mono" style={{ fontSize: 20 }}>{fmt(saves / 12)}</div>
            </div>
            <div className="out-row">
              <div className="out-lbl">5-Year Savings</div>
              <div className={`out-val mono${fiveYr > 0 ? " pos" : ""}`}>{fmt(fiveYr)}</div>
              <div className="out-note">Assumes consistent operation and costs</div>
            </div>
            <div style={{ marginTop: 28 }}>
              <Link href="/assessment" className="btn btn-p" style={{ width: "100%", justifyContent: "center" }}>
                Get a Full Automation Analysis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
