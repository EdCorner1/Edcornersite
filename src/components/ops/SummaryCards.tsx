import type { LucideIcon } from "lucide-react";

export type SummaryStatView = {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
};

export function SummaryCards({ stats }: { stats: SummaryStatView[] }) {
  return (
    <section className="ops-summary-grid" id="overview" aria-label="Business overview metrics">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <article className="ops-metric" key={stat.label}>
            <div className="ops-metric-icon"><Icon size={19} /></div>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <small>{stat.note}</small>
          </article>
        );
      })}
    </section>
  );
}
