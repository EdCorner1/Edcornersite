import {
  financeActions,
  financeSummary,
  formatEur,
  monthlyGoal,
  revenueLedger,
} from "@/data/ops";
import { OpsLayout } from "@/components/ops/OpsLayout";
import { OpsTopbar } from "@/components/ops/OpsTopbar";
import "../ops.css";

const landedProgress = Math.round((financeSummary.landedEur / financeSummary.targetEur) * 100);
const expectedProgress = Math.round((financeSummary.expectedEur / financeSummary.targetEur) * 100);
const fullPipelineProgress = Math.round(
  ((financeSummary.expectedEur + financeSummary.pipelineEur) / financeSummary.targetEur) * 100,
);
const expectedGap = Math.max(financeSummary.targetEur - financeSummary.expectedEur, 0);
const pipelineGap = Math.max(financeSummary.targetEur - financeSummary.expectedEur - financeSummary.pipelineEur, 0);

const confirmedRows = revenueLedger.filter((row) => row.status !== "Pipeline");
const pipelineRows = revenueLedger.filter((row) => row.status === "Pipeline");

export default function FinancesPage() {
  return (
    <OpsLayout activeNav="Finances">
      <OpsTopbar title="Finances" label="Monthly tracking" />

      <section className="finance-hero" aria-label="June revenue summary">
        <div>
          <p className="ops-kicker">June 2026</p>
          <h2>Revenue tracker</h2>
          <span>EUR-first view of expected payments, received payments and pipeline upside.</span>
        </div>
        <div className="finance-target-card">
          <span>Monthly target</span>
          <strong>{monthlyGoal.target}</strong>
          <small>{formatEur(expectedGap)} gap from confirmed expected revenue</small>
        </div>
      </section>

      <section className="ops-summary-grid finance-summary" aria-label="Finance summary">
        <article className="ops-metric">
          <span>Received</span>
          <strong>{formatEur(financeSummary.landedEur)}</strong>
          <small>{landedProgress}% of target logged as paid</small>
        </article>
        <article className="ops-metric">
          <span>Expected</span>
          <strong>{formatEur(financeSummary.expectedEur)}</strong>
          <small>{expectedProgress}% of target from current clients</small>
        </article>
        <article className="ops-metric">
          <span>Pipeline upside</span>
          <strong>{formatEur(financeSummary.pipelineEur)}</strong>
          <small>{fullPipelineProgress}% if current pipeline lands</small>
        </article>
        <article className="ops-metric">
          <span>Best-case gap</span>
          <strong>{formatEur(pipelineGap)}</strong>
          <small>Remaining gap after current pipeline</small>
        </article>
      </section>

      <section className="ops-panel finance-panel">
        <div className="ops-section-title">
          <div>
            <p>Monthly ledger</p>
            <h2>Expected and received</h2>
          </div>
        </div>

        <div className="finance-ledger" role="table" aria-label="June expected and received revenue">
          <div className="finance-ledger-row header" role="row">
            <span>Client</span>
            <span>Expected</span>
            <span>Received</span>
            <span>Due</span>
            <span>Status</span>
          </div>
          {confirmedRows.map((row) => (
            <div className="finance-ledger-row" role="row" key={row.id}>
              <div>
                <strong>{row.client}</strong>
                <small>{row.original}</small>
              </div>
              <span>{formatEur(row.expectedEur)}</span>
              <span>{row.actualEur === null ? "—" : formatEur(row.actualEur)}</span>
              <span>{row.due}</span>
              <em data-status={row.status}>{row.status}</em>
            </div>
          ))}
        </div>
      </section>

      <section className="finance-split-grid">
        <div className="ops-panel finance-panel">
          <div className="ops-section-title compact">
            <div>
              <p>Gap</p>
              <h2>Target progress</h2>
            </div>
          </div>

          <div className="finance-progress-stack">
            <div>
              <div>
                <span>Expected from current clients</span>
                <strong>{formatEur(financeSummary.expectedEur)}</strong>
              </div>
              <div className="ops-progress" aria-label={`${expectedProgress}% of target`}>
                <span style={{ width: `${Math.min(expectedProgress, 100)}%` }} />
              </div>
            </div>
            <div>
              <div>
                <span>Expected plus pipeline</span>
                <strong>{formatEur(financeSummary.expectedEur + financeSummary.pipelineEur)}</strong>
              </div>
              <div className="ops-progress" aria-label={`${fullPipelineProgress}% of target`}>
                <span style={{ width: `${Math.min(fullPipelineProgress, 100)}%` }} />
              </div>
            </div>
            <article className="finance-gap-card">
              <span>Confirmed gap</span>
              <strong>{formatEur(expectedGap)}</strong>
              <small>Gap before Layla upside and Limba.</small>
            </article>
          </div>
        </div>

        <div className="ops-panel finance-panel">
          <div className="ops-section-title compact">
            <div>
              <p>Actions</p>
              <h2>Money moves</h2>
            </div>
          </div>

          <div className="finance-action-list">
            {financeActions.map((action) => (
              <article key={action.label}>
                <div>
                  <strong>{action.label}</strong>
                  <span>{action.client}</span>
                </div>
                <div>
                  <em>{action.impact}</em>
                  <small>{action.due}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ops-panel finance-panel">
        <div className="ops-section-title">
          <div>
            <p>Pipeline</p>
            <h2>Possible upside</h2>
          </div>
        </div>

        <div className="finance-pipeline-list">
          {pipelineRows.map((row) => (
            <article key={row.id}>
              <div>
                <strong>{row.client}</strong>
                <span>{row.note}</span>
              </div>
              <em>{formatEur(row.expectedEur)}</em>
            </article>
          ))}
        </div>
      </section>
    </OpsLayout>
  );
}
