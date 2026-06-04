import type { ReactNode } from "react";
import { OpsSidebar } from "./OpsSidebar";

export function OpsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="ops-shell">
      <section className="ops-frame" aria-label="Operations dashboard">
        <OpsSidebar />
        <div className="ops-main">{children}</div>
      </section>
    </main>
  );
}
