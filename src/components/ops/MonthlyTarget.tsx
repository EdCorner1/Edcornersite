import type { CSSProperties } from "react";
import { ProgressBar } from "./ProgressBar";
import { monthlyGoal } from "@/data/ops";

function Donut({ value, confirmed = false }: { value: number; confirmed?: boolean }) {
  return (
    <div
      className={`goal-donut${confirmed ? " confirmed" : ""}`}
      style={{ "--value": `${value}%` } as CSSProperties}
    >
      <span>{value}%</span>
    </div>
  );
}

export function MonthlyTarget() {
  return (
    <section className="ops-overview-panel monthly-goal-panel">
      <div className="ops-section-title">
        <div>
          <p>Monthly target</p>
          <h2>€5k income goal</h2>
        </div>
        <span className="goal-gap">Gap: {monthlyGoal.gap}</span>
      </div>

      <div className="goal-visual-grid">
        <div className="goal-donut-card" aria-label="Current confirmed monthly revenue progress">
          <Donut value={monthlyGoal.progress} confirmed />
          <div>
            <span>Confirmed</span>
            <strong>{monthlyGoal.current}</strong>
            <ProgressBar value={monthlyGoal.progress} />
            <p>{monthlyGoal.progress}% of {monthlyGoal.target} target based on confirmed monthly work.</p>
          </div>
        </div>

        <div className="goal-donut-card projected" aria-label="Projected monthly revenue if pipeline closes">
          <Donut value={monthlyGoal.projectedProgress} />
          <div>
            <span>Projected</span>
            <strong>{monthlyGoal.projected}</strong>
            <ProgressBar value={monthlyGoal.projectedProgress} />
            <p>If 10X.app, Layla upside and Limba land.</p>
          </div>
        </div>

        <div className="goal-gap-card">
          <span>Remaining gap</span>
          <strong>{monthlyGoal.projectedGap}</strong>
          <p>Gap to €5k if pipeline closes.</p>
        </div>
      </div>
    </section>
  );
}
