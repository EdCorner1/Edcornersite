import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function OpsSidebar() {
  return (
    <aside className="ops-sidebar" aria-label="Ops navigation">
      <Link className="ops-brand" href="/">
        <img src="/assets/profile/ed-logo.png" alt="" />
        <span>Ed Corner</span>
      </Link>

      <nav>
        <a className="active" href="/ops#overview">Overview</a>
        <a href="/ops#clients">Clients</a>
        <a href="/ops#projects">Projects</a>
        <a href="/ops#tasks">Tasks</a>
        <a href="/ops#pipeline">Pipeline</a>
        <a href="/ops#payments">Payments</a>
        <Link href="/ops/finances">Finances</Link>
      </nav>

      <div className="ops-auth-card">
        <ShieldCheck size={18} />
        <div>
          <strong>Private dashboard</strong>
          <span>Password protected and hidden from the public site</span>
        </div>
      </div>
    </aside>
  );
}
