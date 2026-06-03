import { ArrowRight } from "lucide-react";
import type { OpsClient } from "@/data/ops";
import { ProgressBar } from "./ProgressBar";

export function ClientList({ clients }: { clients: OpsClient[] }) {
  return (
    <div className="ops-panel" id="clients">
      <div className="ops-section-title">
        <div>
          <p>Clients</p>
          <h2>Active client accounts</h2>
        </div>
        <a href="#pipeline">View pipeline <ArrowRight size={14} /></a>
      </div>

      <div className="ops-client-list">
        {clients.map((client) => (
          <article key={client.name} className="ops-client">
            <div className="ops-client-top">
              <div>
                <h3>{client.name}</h3>
                <span>{client.cycle}</span>
              </div>
              <strong>{client.value}</strong>
            </div>
            <ProgressBar value={client.progress} />
            <div className="ops-client-bottom">
              <span>{client.delivered}</span>
              <span>{client.payment}</span>
              <em>{client.status}</em>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
