import { ArrowRight } from "lucide-react";
import type { workload as defaultWorkload } from "@/data/ops";

type WorkloadData = typeof defaultWorkload;

export function WorkloadGlance({ workload }: { workload: WorkloadData }) {
  return (
    <section className="ops-overview-panel">
      <div className="ops-section-title">
        <div>
          <p>At a glance</p>
          <h2>Current workload</h2>
        </div>
        <a href="#clients">View clients <ArrowRight size={14} /></a>
      </div>

      <div className="ops-glance-grid">
        <article>
          <span>Clients needing attention</span>
          <strong>{workload.attentionCount}</strong>
          <p>{workload.attentionText}</p>
        </article>
        <article>
          <span>Active retainers</span>
          <strong>{workload.retainerCount}</strong>
          <p>{workload.retainerText}</p>
        </article>
        <article>
          <span>Pipeline opportunities</span>
          <strong>{workload.pipelineCount}</strong>
          <p>{workload.pipelineText}</p>
        </article>
      </div>
    </section>
  );
}
