import { get, put } from "@vercel/blob";
import {
  actions,
  clients,
  currencySettings,
  financeActions,
  monthlyGoal,
  payments,
  pipeline,
  projects,
  revenueLedger,
  workload,
  type FinanceAction,
  type OpsAction,
  type OpsClient,
  type OpsProject,
  type PaymentItem,
  type PipelineItem,
  type RevenueLedgerItem,
} from "@/data/ops";

const OPS_DATA_PATH = "ops-dashboard/data.json";

export type OpsEditableData = {
  currencySettings: typeof currencySettings;
  clients: OpsClient[];
  pipeline: PipelineItem[];
  actions: OpsAction[];
  projects: OpsProject[];
  monthlyGoal: typeof monthlyGoal;
  revenueLedger: RevenueLedgerItem[];
  financeActions: FinanceAction[];
  payments: PaymentItem[];
  workload: typeof workload;
};

export const defaultOpsData: OpsEditableData = {
  currencySettings,
  clients,
  pipeline,
  actions,
  projects,
  monthlyGoal,
  revenueLedger,
  financeActions,
  payments,
  workload,
};

export function normalizeOpsData(data: Partial<OpsEditableData>): OpsEditableData {
  return {
    currencySettings: data.currencySettings ?? defaultOpsData.currencySettings,
    clients: data.clients ?? defaultOpsData.clients,
    pipeline: data.pipeline ?? defaultOpsData.pipeline,
    actions: data.actions ?? defaultOpsData.actions,
    projects: data.projects ?? defaultOpsData.projects,
    monthlyGoal: data.monthlyGoal ?? defaultOpsData.monthlyGoal,
    revenueLedger: data.revenueLedger ?? defaultOpsData.revenueLedger,
    financeActions: data.financeActions ?? defaultOpsData.financeActions,
    payments: data.payments ?? defaultOpsData.payments,
    workload: data.workload ?? defaultOpsData.workload,
  };
}

export async function getSavedOpsData(): Promise<OpsEditableData> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return defaultOpsData;
  }

  try {
    const result = await get(OPS_DATA_PATH, { access: "private" });

    if (!result || result.statusCode !== 200) {
      return defaultOpsData;
    }

    const savedData = (await new Response(result.stream).json()) as Partial<OpsEditableData>;
    return normalizeOpsData(savedData);
  } catch {
    return defaultOpsData;
  }
}

export async function saveOpsData(data: OpsEditableData) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("BLOB_READ_WRITE_TOKEN is not configured");
  }

  const normalizedData = normalizeOpsData(data);

  await put(OPS_DATA_PATH, JSON.stringify(normalizedData, null, 2), {
    access: "private",
    contentType: "application/json",
    allowOverwrite: true,
  });

  return normalizedData;
}

export function getFinanceSummary(data: OpsEditableData) {
  const confirmedRows = data.revenueLedger.filter((row) => row.status !== "Pipeline");
  const pipelineRows = data.revenueLedger.filter((row) => row.status === "Pipeline");

  return {
    targetEur: data.monthlyGoal.targetEur,
    landedEur: confirmedRows.reduce((total, row) => total + (row.actualEur ?? 0), 0),
    expectedEur: confirmedRows.reduce((total, row) => total + row.expectedEur, 0),
    pipelineEur: pipelineRows.reduce((total, row) => total + row.expectedEur, 0),
  };
}
