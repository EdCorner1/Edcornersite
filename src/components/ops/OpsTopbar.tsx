import { CalendarDays } from "lucide-react";

export function OpsTopbar({ title, label = "Ops dashboard" }: { title: string; label?: string }) {
  return (
    <header className="ops-topbar">
      <div>
        <p className="ops-kicker">{label}</p>
        <h1>{title}</h1>
      </div>
      <div className="ops-date-pill">
        <CalendarDays size={16} />
        <span>Approval preview</span>
      </div>
    </header>
  );
}
