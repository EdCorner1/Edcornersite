import type { CSSProperties } from "react";
import { formatEur, type LifeOSData } from "@/data/ops";

const statusLabels = {
  done: "Done",
  partial: "Partial",
  missed: "Missed",
  pending: "Pending",
};

function ScoreRing({ percentage }: { percentage: number }) {
  return (
    <div className="life-score-ring" style={{ "--value": `${percentage}%` } as CSSProperties}>
      <span>{percentage}%</span>
    </div>
  );
}

export function LifeOSOverview({ lifeOS }: { lifeOS: LifeOSData }) {
  const visibleHabits = lifeOS.habits.slice(0, 8);
  const noSugar = lifeOS.habits.find((habit) => habit.id === "no-refined-sugar");
  const run = lifeOS.habits.find((habit) => habit.id === "run-5k");
  const content = lifeOS.habits.find((habit) => habit.id === "client-content");
  const stretchGap = Math.max(lifeOS.revenueTarget.stretchTargetEur - lifeOS.revenueTarget.expectedBaseEur, 0);

  return (
    <section className="ops-overview-panel life-overview-panel" aria-label="Life OS overview">
      <div className="ops-section-title">
        <div>
          <p>Life OS</p>
          <h2>Today&apos;s operating score</h2>
        </div>
      </div>

      <div className="life-overview-grid">
        <article className="life-score-card">
          <ScoreRing percentage={lifeOS.dailyScore.percentage} />
          <div>
            <span>Daily score</span>
            <strong>{lifeOS.dailyScore.completed}/{lifeOS.dailyScore.total}</strong>
            <p>Launch week checklist for fitness, nutrition, lifestyle and delivery.</p>
          </div>
        </article>

        <div className="life-habit-strip" aria-label="Today habit status">
          {visibleHabits.map((habit) => (
            <article key={habit.id} data-status={habit.status}>
              <span className="life-status-marker" aria-hidden="true" />
              <div>
                <strong>{habit.label}</strong>
                <span>{statusLabels[habit.status]}</span>
              </div>
            </article>
          ))}
        </div>

        <article className="life-snapshot-card">
          <span>Key streaks</span>
          <div className="life-streak-list">
            <div>
              <strong>{run?.currentStreak ?? 0}</strong>
              <small>Run</small>
            </div>
            <div>
              <strong>{noSugar?.currentStreak ?? 0}</strong>
              <small>No sugar</small>
            </div>
            <div>
              <strong>{content?.currentStreak ?? 0}</strong>
              <small>Content</small>
            </div>
          </div>
          <p>Expected base: {formatEur(lifeOS.revenueTarget.expectedBaseEur)} · Stretch gap: {formatEur(stretchGap)}</p>
        </article>
      </div>
    </section>
  );
}
