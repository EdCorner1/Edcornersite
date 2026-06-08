import { Banknote, CircleDollarSign, Film, UserRoundCheck } from "lucide-react";
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
import { getSavedOpsData } from "@/lib/ops-store";
import "./ops.css";

export const dynamic = "force-dynamic";

export default async function OpsDashboard() {
  const data = await getSavedOpsData();
  const summaryStats = [
    {
      label: "Confirmed MRR",
      value: data.monthlyGoal.current,
      note: "Approx EUR equivalent; source retainers include USD",
      icon: CircleDollarSign,
    },
    {
      label: "Active clients",
      value: String(data.clients.length),
      note: "Confirmed client accounts right now",
      icon: UserRoundCheck,
    },
    {
      label: "Pipeline",
      value: String(data.pipeline.length),
      note: data.workload.pipelineText,
      icon: Film,
    },
    {
      label: "Next payment due",
      value: "Pingo",
      note: "Monday · ~€175 / $210",
      icon: Banknote,
    },
  ];

  return (
    <OpsLayout>
      <OpsTopbar title="Overview" />
      <SummaryCards stats={summaryStats} />
      <MonthlyTarget monthlyGoal={data.monthlyGoal} />
      <WorkloadGlance workload={data.workload} />

      <section className="ops-layout-two">
        <ClientList clients={data.clients} />
        <TaskList actions={data.actions} />
      </section>

      <PipelineList pipeline={data.pipeline} />
      <PaymentsGrid payments={data.payments} />
      <ProjectsGrid projects={data.projects} />
    </OpsLayout>
  );
}
