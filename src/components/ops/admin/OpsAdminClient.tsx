"use client";

import { useMemo, useState } from "react";
import type { OpsEditableData } from "@/lib/ops-store";
import "./admin.css";

type JsonKey = keyof Pick<
  OpsEditableData,
  "clients" | "pipeline" | "actions" | "projects" | "monthlyGoal" | "revenueLedger" | "financeActions" | "payments" | "workload"
>;

const editableSections: { key: JsonKey; label: string; description: string }[] = [
  { key: "clients", label: "Clients", description: "Cards on the main ops dashboard." },
  { key: "revenueLedger", label: "Revenue ledger", description: "Expected, received, pipeline and finance totals." },
  { key: "monthlyGoal", label: "Monthly goal", description: "€5k target, current/projected values and gap." },
  { key: "actions", label: "Tasks", description: "Next actions shown on the overview." },
  { key: "payments", label: "Payments", description: "Upcoming payment cards." },
  { key: "pipeline", label: "Pipeline", description: "Potential clients and follow-ups." },
  { key: "financeActions", label: "Money moves", description: "Actions shown on the finance page." },
  { key: "projects", label: "Projects", description: "Active project cards." },
  { key: "workload", label: "Workload", description: "At-a-glance workload copy." },
];

function pretty(value: unknown) {
  return JSON.stringify(value, null, 2);
}

function recalculateMonthlyGoal(data: OpsEditableData) {
  const confirmed = data.revenueLedger.filter((row) => row.status !== "Pipeline");
  const pipeline = data.revenueLedger.filter((row) => row.status === "Pipeline");
  const currentEur = confirmed.reduce((total, row) => total + row.expectedEur, 0);
  const projectedEur = currentEur + pipeline.reduce((total, row) => total + row.expectedEur, 0);
  const targetEur = data.monthlyGoal.targetEur;
  const gapEur = Math.max(targetEur - currentEur, 0);
  const projectedGapEur = Math.max(targetEur - projectedEur, 0);
  const format = (amount: number) => amount === 0 ? "€0" : `~€${amount.toLocaleString("en-IE")}+`;

  return {
    ...data,
    monthlyGoal: {
      ...data.monthlyGoal,
      currentEur,
      current: format(currentEur),
      projectedEur,
      projected: format(projectedEur),
      progress: Math.min(Math.round((currentEur / targetEur) * 100), 100),
      projectedProgress: Math.min(Math.round((projectedEur / targetEur) * 100), 100),
      gapEur,
      gap: gapEur === 0 ? "€0" : `~€${gapEur.toLocaleString("en-IE")}`,
      projectedGapEur,
      projectedGap: projectedGapEur === 0 ? "€0" : `~€${projectedGapEur.toLocaleString("en-IE")}`,
    },
  };
}

export function OpsAdminClient({ initialData, isAuthenticated }: { initialData: OpsEditableData; isAuthenticated: boolean }) {
  const [authenticated, setAuthenticated] = useState(isAuthenticated);
  const [password, setPassword] = useState("");
  const [data, setData] = useState(initialData);
  const [activeSection, setActiveSection] = useState<JsonKey>("clients");
  const [drafts, setDrafts] = useState(() =>
    Object.fromEntries(editableSections.map((section) => [section.key, pretty(initialData[section.key])])) as Record<JsonKey, string>,
  );
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const activeMeta = useMemo(
    () => editableSections.find((section) => section.key === activeSection) ?? editableSections[0],
    [activeSection],
  );

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Checking password…");

    const response = await fetch("/api/ops-auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      setMessage("Nope. Wrong password or admin password is not configured.");
      return;
    }

    setAuthenticated(true);
    setPassword("");
    setMessage("Logged in. Try not to financially freestyle too hard.");
  }

  function applySection() {
    try {
      const parsed = JSON.parse(drafts[activeSection]);
      setData((current) => ({ ...current, [activeSection]: parsed }));
      setMessage(`${activeMeta.label} applied locally. Hit Save changes to publish it.`);
    } catch (error) {
      const detail = error instanceof Error ? error.message : "Invalid JSON";
      setMessage(`Invalid JSON in ${activeMeta.label}: ${detail}`);
    }
  }

  function syncDrafts(nextData: OpsEditableData) {
    setDrafts(Object.fromEntries(editableSections.map((section) => [section.key, pretty(nextData[section.key])])) as Record<JsonKey, string>);
  }

  function handleRecalculate() {
    const nextData = recalculateMonthlyGoal(data);
    setData(nextData);
    syncDrafts(nextData);
    setMessage("Monthly goal recalculated from the revenue ledger.");
  }

  async function handleSave() {
    setIsSaving(true);
    setMessage("Saving…");

    const response = await fetch("/api/ops-data", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const body = await response.json().catch(() => ({}));
    setIsSaving(false);

    if (!response.ok) {
      setMessage(body.error ?? "Save failed.");
      return;
    }

    setData(body);
    syncDrafts(body);
    setMessage("Saved. Dashboard pages now read this data.");
  }

  async function handleLogout() {
    await fetch("/api/ops-auth/logout", { method: "POST" });
    setAuthenticated(false);
    setMessage("Logged out.");
  }

  if (!authenticated) {
    return (
      <section className="admin-login-shell">
        <form className="admin-login-card" onSubmit={handleLogin}>
          <p className="ops-kicker">Ops admin</p>
          <h1>Log in</h1>
          <p>Password-protected editing for the ops dashboard.</p>
          <label>
            Password
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" autoFocus />
          </label>
          <button type="submit">Log in</button>
          {message ? <small>{message}</small> : null}
        </form>
      </section>
    );
  }

  return (
    <section className="admin-shell">
      <header className="admin-header">
        <div>
          <p className="ops-kicker">Ops admin</p>
          <h1>Edit dashboard data</h1>
          <span>Change a section, apply it locally, then save. JSON is ugly but dependable — unlike half the SaaS tools you tried.</span>
        </div>
        <div className="admin-header-actions">
          <a href="/ops">View dashboard</a>
          <button type="button" onClick={handleLogout}>Log out</button>
        </div>
      </header>

      <div className="admin-grid">
        <aside className="admin-nav">
          {editableSections.map((section) => (
            <button
              className={section.key === activeSection ? "active" : undefined}
              key={section.key}
              type="button"
              onClick={() => setActiveSection(section.key)}
            >
              <strong>{section.label}</strong>
              <span>{section.description}</span>
            </button>
          ))}
        </aside>

        <main className="admin-editor-card">
          <div className="admin-editor-title">
            <div>
              <h2>{activeMeta.label}</h2>
              <p>{activeMeta.description}</p>
            </div>
            <div>
              <button type="button" onClick={applySection}>Apply section</button>
              <button type="button" onClick={handleRecalculate}>Recalculate totals</button>
              <button type="button" disabled={isSaving} onClick={handleSave}>{isSaving ? "Saving…" : "Save changes"}</button>
            </div>
          </div>

          <textarea
            spellCheck={false}
            value={drafts[activeSection]}
            onChange={(event) => setDrafts((current) => ({ ...current, [activeSection]: event.target.value }))}
          />
          {message ? <p className="admin-message">{message}</p> : null}
        </main>
      </div>
    </section>
  );
}
