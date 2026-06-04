import type { ReactNode } from "react";
import { OpsSidebar } from "./OpsSidebar";

export function OpsLayout({ children, activeNav = "Overview" }: { children: ReactNode; activeNav?: string }) {
  return (
    <main className="ops-shell">
      <section className="ops-frame" aria-label="Operations dashboard">
        <OpsSidebar active={activeNav} />
        <div className="ops-main">{children}</div>
      </section>
    </main>
  );
}
