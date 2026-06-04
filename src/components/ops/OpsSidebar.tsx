import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/ops#overview" },
  { label: "Clients", href: "/ops#clients" },
  { label: "Projects", href: "/ops#projects" },
  { label: "Tasks", href: "/ops#tasks" },
  { label: "Pipeline", href: "/ops#pipeline" },
  { label: "Payments", href: "/ops#payments" },
  { label: "Finances", href: "/ops/finances" },
];

export function OpsSidebar({ active = "Overview" }: { active?: string }) {
  return (
    <aside className="ops-sidebar" aria-label="Ops navigation">
      <Link className="ops-brand" href="/">
        <img src="/assets/profile/ed-logo.png" alt="" />
        <span>Ed Corner</span>
      </Link>

      <nav>
        {navItems.map((item) => (
          <Link className={item.label === active ? "active" : undefined} href={item.href} key={item.label}>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
