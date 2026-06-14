import { CalendarDays, CircleDollarSign, Dumbbell, PiggyBank } from "lucide-react";
import { OpsLayout } from "@/components/ops/OpsLayout";
import { OpsTopbar } from "@/components/ops/OpsTopbar";
import { formatEur } from "@/data/ops";
import { getSavedOpsData } from "@/lib/ops-store";
import "../ops.css";

export const dynamic = "force-dynamic";

const statusLabels = {
  done: "Done",
  partial: "Partial",
  missed: "Missed",
  pending: "Pending",
};

const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

export default async function LifeOSPage() {
  const data = await getSavedOpsData();
  const lifeOS = data.lifeOS;
  const stretchGap = Math.max(lifeOS.revenueTarget.stretchTargetEur - lifeOS.revenueTarget.expectedBaseEur, 0);
  const baseProgress = Math.round((lifeOS.revenueTarget.expectedBaseEur / lifeOS.revenueTarget.currentTargetEur) * 100);
  const stretchProgress = Math.round((lifeOS.revenueTarget.expectedBaseEur / lifeOS.revenueTarget.stretchTargetEur) * 100);

  return (
    <OpsLayout activeNav="Life OS">
      <OpsTopbar title="Life OS" label="Habits and goals" />

      <section className="life-hero" aria-label="Life OS summary">
        <article>
          <span>Daily score</span>
          <strong>{lifeOS.dailyScore.completed}/{lifeOS.dailyScore.total}</strong>
          <p>Today&apos;s completion across fitness, nutrition, lifestyle and delivery habits.</p>
        </article>
        <article>
          <span>Base revenue</span>
          <strong>{formatEur(lifeOS.revenueTarget.expectedBaseEur)}</strong>
          <p>{baseProgress}% of the {formatEur(lifeOS.revenueTarget.currentTargetEur)} target.</p>
        </article>
        <article>
          <span>Stretch gap</span>
          <strong>{formatEur(stretchGap)}</strong>
          <p>{stretchProgress}% toward the {formatEur(lifeOS.revenueTarget.stretchTargetEur)} stretch target.</p>
        </article>
        <article>
          <span>Bonus estimate</span>
          <strong>{lifeOS.revenueTarget.bonusEstimateEur === null ? "Pending" : formatEur(lifeOS.revenueTarget.bonusEstimateEur)}</strong>
          <p>Requires live view and bonus data before it should be counted.</p>
        </article>
      </section>

      <section className="life-grid-main">
        <div className="ops-panel life-panel">
          <div className="ops-section-title compact">
            <div>
              <p>Today</p>
              <h2>Daily checklist</h2>
            </div>
          </div>
          <div className="life-checklist">
            {lifeOS.habits.map((habit) => (
              <article key={habit.id} data-status={habit.status}>
                <div>
                  <strong>{habit.label}</strong>
                  <span>{habit.category} · {habit.target}</span>
                </div>
                <em>{statusLabels[habit.status]}</em>
              </article>
            ))}
          </div>
        </div>

        <div className="ops-panel life-panel">
          <div className="ops-section-title compact">
            <div>
              <p>Streaks</p>
              <h2>Consistency view</h2>
            </div>
          </div>
          <div className="life-streak-grid">
            {lifeOS.habits.map((habit) => (
              <article key={habit.id}>
                <div>
                  <strong>{habit.currentStreak}</strong>
                  <span>{habit.label}</span>
                </div>
                <small>Best: {habit.bestStreak}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ops-panel life-panel">
        <div className="ops-section-title">
          <div>
            <p>Week</p>
            <h2>Habit history</h2>
          </div>
        </div>
        <div className="life-week-table" role="table" aria-label="Weekly habit history">
          <div className="life-week-row header" role="row">
            <span>Habit</span>
            {dayLabels.map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}
          </div>
          {lifeOS.habits.map((habit) => (
            <div className="life-week-row" role="row" key={habit.id}>
              <strong>{habit.label}</strong>
              {habit.week.map((status, index) => <span className="life-dot" data-status={status} key={`${habit.id}-${index}`} />)}
            </div>
          ))}
        </div>
      </section>

      <section className="life-grid-main">
        <div className="ops-panel life-panel">
          <div className="ops-section-title compact">
            <div>
              <p>Monthly allocation</p>
              <h2>Revenue plan</h2>
            </div>
            <CircleDollarSign size={20} />
          </div>
          <div className="life-allocation-list">
            {lifeOS.allocations.map((allocation) => (
              <article key={allocation.label}>
                <div>
                  <strong>{allocation.label}</strong>
                  <span>{allocation.note}</span>
                </div>
                <em>{formatEur(allocation.amountEur)}</em>
              </article>
            ))}
          </div>
        </div>

        <div className="ops-panel life-panel">
          <div className="ops-section-title compact">
            <div>
              <p>Purchase goals</p>
              <h2>Planned upgrades</h2>
            </div>
            <PiggyBank size={20} />
          </div>
          <div className="life-goal-list">
            {lifeOS.purchaseGoals.map((goal) => {
              const savedProgress = Math.round((goal.savedEur / goal.targetEur) * 100);
              return (
                <article key={goal.id}>
                  <div className="life-goal-head">
                    <div>
                      <strong>{goal.label}</strong>
                      <span>{goal.note}</span>
                    </div>
                    <em>{goal.priority}</em>
                  </div>
                  <div className="life-goal-meta">
                    <span>{formatEur(goal.savedEur)} saved</span>
                    <span>{formatEur(goal.targetEur - goal.savedEur)} remaining</span>
                    <span>{goal.deadline}</span>
                  </div>
                  <div className="ops-progress" aria-label={`${savedProgress}% saved`}>
                    <span style={{ width: `${Math.min(savedProgress, 100)}%` }} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="life-note-grid">
        <article className="ops-panel life-panel">
          <Dumbbell size={20} />
          <div>
            <strong>Daily fitness target</strong>
            <span>5km run, 100 press-ups, 100 sit-ups and 100 squats.</span>
          </div>
        </article>
        <article className="ops-panel life-panel">
          <CalendarDays size={20} />
          <div>
            <strong>Morning briefing integration</strong>
            <span>Briefing can surface pending habits and the highest-value content priority.</span>
          </div>
        </article>
      </section>
    </OpsLayout>
  );
}
