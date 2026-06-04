import Link from "next/link";

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
    </aside>
  );
}
