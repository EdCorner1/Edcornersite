import { clients, monthlyGoal, payments, pipeline } from "@/data/ops";
import { OpsLayout } from "@/components/ops/OpsLayout";
import { OpsTopbar } from "@/components/ops/OpsTopbar";
import { PaymentsGrid } from "@/components/ops/PaymentsGrid";
import { PipelineList } from "@/components/ops/PipelineList";
import { ProgressBar } from "@/components/ops/ProgressBar";
import "../ops.css";

const closeoutRows = [
  { source: "Pingo AI", expected: "~€775+", received: "TBC", status: "Weekly" },
  { source: "Airalo", expected: "~€517", received: "TBC", status: "5th–11th" },
  { source: "Clawbite + Detris", expected: "~€517", received: "TBC", status: "Meeting tomorrow" },
  { source: "Layla AI", expected: "€200+", received: "TBC", status: "Month-end data" },
];

export default function FinancesPage() {
  return (
    <OpsLayout>
      <OpsTopbar title="Finances" label="Monthly tracking" />

      <section className="ops-summary-grid finance-summary" aria-label="Finance summary">
        <article className="ops-metric">
          <span>Target</span>
          <strong>{monthlyGoal.target}</strong>
          <small>Monthly income goal</small>
        </article>
        <article className="ops-metric">
          <span>Confirmed</span>
          <strong>{monthlyGoal.current}</strong>
          <small>{monthlyGoal.progress}% of target</small>
        </article>
        <article className="ops-metric">
          <span>Projected</span>
          <strong>{monthlyGoal.projected}</strong>
          <small>{monthlyGoal.projectedProgress}% if pipeline closes</small>
        </article>
        <article className="ops-metric">
          <span>Projected gap</span>
          <strong>{monthlyGoal.projectedGap}</strong>
          <small>Remaining to €5k</small>
        </article>
      </section>

      <section className="ops-panel finance-panel">
        <div className="ops-section-title">
          <div>
            <p>Month closeout</p>
            <h2>Actual received tracker</h2>
          </div>
        </div>

        <div className="finance-table" role="table" aria-label="Monthly actual revenue tracker">
          <div className="finance-table-row header" role="row">
            <span>Source</span>
            <span>Expected</span>
            <span>Received</span>
            <span>Status</span>
          </div>
          {closeoutRows.map((row) => (
            <div className="finance-table-row" role="row" key={row.source}>
              <span>{row.source}</span>
              <strong>{row.expected}</strong>
              <em>{row.received}</em>
              <span>{row.status}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ops-panel finance-panel">
        <div className="ops-section-title">
          <div>
            <p>Revenue mix</p>
            <h2>Confirmed client base</h2>
          </div>
        </div>

        <div className="finance-client-bars">
          {clients.map((client) => (
            <article key={client.name}>
              <div>
                <strong>{client.name}</strong>
                <span>{client.value}</span>
              </div>
              <ProgressBar value={client.progress} />
            </article>
          ))}
        </div>
      </section>

      <PaymentsGrid payments={payments} />
      <PipelineList pipeline={pipeline} />
    </OpsLayout>
  );
}
