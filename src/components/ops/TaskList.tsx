import { CheckCircle2 } from "lucide-react";
import type { OpsAction } from "@/data/ops";

export function TaskList({ actions }: { actions: OpsAction[] }) {
  return (
    <aside className="ops-panel ops-actions" id="tasks">
      <div className="ops-section-title compact">
        <div>
          <p>Tasks</p>
          <h2>Next actions</h2>
        </div>
      </div>

      {actions.map((action) => (
        <article key={action.label} className="ops-action-row">
          <CheckCircle2 size={18} />
          <div>
            <strong>{action.label}</strong>
            <span>{action.meta}</span>
          </div>
          <em>{action.priority}</em>
        </article>
      ))}
    </aside>
  );
}
