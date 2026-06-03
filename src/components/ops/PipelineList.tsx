import type { PipelineItem } from "@/data/ops";

export function PipelineList({ pipeline }: { pipeline: PipelineItem[] }) {
  return (
    <section className="ops-panel pipeline-panel" id="pipeline">
      <div className="ops-section-title">
        <div>
          <p>Pipeline</p>
          <h2>Potential clients and follow-ups</h2>
        </div>
      </div>

      <div className="ops-pipeline-grid">
        {pipeline.map((lead) => (
          <article key={lead.name} className="ops-pipeline-card">
            <div>
              <h3>{lead.name}</h3>
              <span>{lead.status}</span>
            </div>
            <strong>{lead.value}</strong>
            <p>{lead.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
