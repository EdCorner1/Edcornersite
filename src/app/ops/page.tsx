import {
  actions,
  clients,
  payments,
  pipeline,
  projects,
  summaryStats,
} from "@/data/ops";
import { ClientList } from "@/components/ops/ClientList";
import { MonthlyTarget } from "@/components/ops/MonthlyTarget";
import { OpsLayout } from "@/components/ops/OpsLayout";
import { OpsTopbar } from "@/components/ops/OpsTopbar";
import { PaymentsGrid } from "@/components/ops/PaymentsGrid";
import { PipelineList } from "@/components/ops/PipelineList";
import { ProjectsGrid } from "@/components/ops/ProjectsGrid";
import { SummaryCards } from "@/components/ops/SummaryCards";
import { TaskList } from "@/components/ops/TaskList";
import { WorkloadGlance } from "@/components/ops/WorkloadGlance";
import "./ops.css";

export default function OpsDashboard() {
  return (
    <OpsLayout>
      <OpsTopbar title="Overview" />
      <SummaryCards stats={summaryStats} />
      <MonthlyTarget />
      <WorkloadGlance />

      <section className="ops-layout-two">
        <ClientList clients={clients} />
        <TaskList actions={actions} />
      </section>

      <PipelineList pipeline={pipeline} />
      <PaymentsGrid payments={payments} />
      <ProjectsGrid projects={projects} />
    </OpsLayout>
  );
}
