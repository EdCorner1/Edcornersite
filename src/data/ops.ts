import {
  Banknote,
  CircleDollarSign,
  Film,
  UserRoundCheck,
  type LucideIcon,
} from "lucide-react";

export type ClientStatus = "Active" | "Batch needed" | "Meeting tomorrow" | "Onboarding";

export type OpsClient = {
  name: string;
  value: string;
  cycle: string;
  progress: number;
  delivered: string;
  payment: string;
  status: ClientStatus;
};

export type PipelineItem = {
  name: string;
  value: string;
  note: string;
  status: "Warm lead" | "Bonus upside" | "Unsigned";
};

export type OpsAction = {
  label: string;
  meta: string;
  priority: "High" | "Medium" | "Low";
};

export type OpsProject = {
  name: string;
  status: string;
  next: string;
  progress: number;
};

export type SummaryStat = {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
};

export type PaymentItem = {
  label: string;
  client: string;
  value: string;
  note: string;
  next?: boolean;
};

export type RevenueStatus = "Paid" | "Expected" | "To confirm" | "Pending" | "Pipeline";

export type RevenueLedgerItem = {
  id: string;
  month: string;
  client: string;
  type: "Retainer" | "Weekly" | "Base" | "Project" | "Pipeline";
  expectedEur: number;
  actualEur: number | null;
  original: string;
  due: string;
  status: RevenueStatus;
  note: string;
};

export type FinanceAction = {
  label: string;
  client: string;
  impact: string;
  due: string;
};

export const currencySettings = {
  primary: "EUR",
  usdToEurEstimate: 0.862,
  note: "EUR is the default operating currency. Source USD is shown only where useful.",
};

export const formatEur = (amount: number) =>
  new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);

export const clients: OpsClient[] = [
  {
    name: "Clawbite + Detris",
    value: "~€517/mo",
    cycle: "$600 combined client account",
    progress: 50,
    delivered: "May 6–20 invoice paid",
    payment: "May 20–Jun 4 period under review",
    status: "Meeting tomorrow",
  },
  {
    name: "Pingo AI",
    value: "~€775+/mo",
    cycle: "$900 minimum monthly retainer",
    progress: 62,
    delivered: "Continuing as normal",
    payment: "Monthly retainer active",
    status: "Active",
  },
  {
    name: "Airalo",
    value: "~€517/mo",
    cycle: "$600 renewed for summer",
    progress: 70,
    delivered: "Summer retainer confirmed",
    payment: "Monthly retainer active",
    status: "Active",
  },
  {
    name: "Layla AI",
    value: "€200+ /mo",
    cycle: "Minimum base + data-based final amount",
    progress: 35,
    delivered: "Another batch session needed",
    payment: "€200 minimum confirmed",
    status: "Batch needed",
  },
  {
    name: "Manus",
    value: "~€47/video",
    cycle: "$55 per video plus strong view bonuses",
    progress: 10,
    delivered: "Onboarding today at 7pm",
    payment: "Confirmed per-video client",
    status: "Onboarding",
  },
];

export const pipeline: PipelineItem[] = [
  {
    name: "Layla upside",
    value: "~€603+/mo",
    note: "Potential extra from views, on top of €200 base",
    status: "Bonus upside",
  },
  {
    name: "Limba",
    value: "~€517/mo potential",
    note: "Deal is $600/month but not signed yet; follow up in roughly one month",
    status: "Unsigned",
  },
];

export const actions: OpsAction[] = [
  {
    label: "Prepare for Clawbite + Detris meeting",
    meta: "Discuss May 20–Jun 4 period and negotiate the ongoing ~€517/month setup",
    priority: "High",
  },
  {
    label: "Record Layla AI batch",
    meta: "Confirmed €200 minimum; another batch session is needed",
    priority: "High",
  },
  {
    label: "Keep Pingo AI content moving",
    meta: "~€775 minimum/month continuing as normal",
    priority: "Medium",
  },
  {
    label: "Manus onboarding at 7pm",
    meta: "Confirmed at ~$55/video (~€47) plus strong view bonuses",
    priority: "High",
  },
];

export const projects: OpsProject[] = [
  {
    name: "Ottougc.com",
    status: "Active idea",
    next: "Define offer, positioning and homepage structure",
    progress: 18,
  },
  {
    name: "MadebyFriday.tech",
    status: "Active idea",
    next: "Define service, proof and launch plan",
    progress: 12,
  },
];

export const monthlyGoal = {
  targetEur: 5000,
  target: "€5,000",
  currentEur: 3431,
  current: "~€3,431+",
  projectedEur: 4551,
  projected: "~€4,551+",
  progress: 69,
  projectedProgress: 91,
  gapEur: 1569,
  gap: "~€1,569",
  projectedGapEur: 449,
  projectedGap: "~€449",
};

export const revenueLedger: RevenueLedgerItem[] = [
  {
    id: "2026-06-pingo-month",
    month: "June 2026",
    client: "Pingo AI",
    type: "Retainer",
    expectedEur: 775,
    actualEur: null,
    original: "$900 monthly minimum",
    due: "Weekly Mondays",
    status: "Expected",
    note: "Minimum monthly value based on four weekly payments",
  },
  {
    id: "2026-06-airalo",
    month: "June 2026",
    client: "Airalo",
    type: "Retainer",
    expectedEur: 517,
    actualEur: null,
    original: "$600 monthly",
    due: "5th–11th",
    status: "Expected",
    note: "Renewed for the rest of summer",
  },
  {
    id: "2026-06-clawbite-detris",
    month: "June 2026",
    client: "Clawbite + Detris",
    type: "Retainer",
    expectedEur: 517,
    actualEur: null,
    original: "$600 combined",
    due: "After meeting",
    status: "To confirm",
    note: "May 20–Jun 4 period needs confirming",
  },
  {
    id: "2026-06-layla-base",
    month: "June 2026",
    client: "Layla AI",
    type: "Base",
    expectedEur: 200,
    actualEur: null,
    original: "€200 minimum",
    due: "Month end",
    status: "Expected",
    note: "Final amount depends on month-end data",
  },
  {
    id: "2026-06-manus",
    month: "June 2026",
    client: "Manus",
    type: "Project",
    expectedEur: 1422,
    actualEur: null,
    original: "$55/video; 30 videos assumed for planning",
    due: "Onboarding today at 7pm",
    status: "Expected",
    note: "Confirmed per-video client; strong view bonuses on top",
  },
  {
    id: "2026-06-layla-upside",
    month: "June 2026",
    client: "Layla upside",
    type: "Pipeline",
    expectedEur: 603,
    actualEur: null,
    original: "~$700 potential",
    due: "Month end",
    status: "Pipeline",
    note: "View-based upside, separate from base",
  },
  {
    id: "2026-06-limba",
    month: "June 2026",
    client: "Limba",
    type: "Pipeline",
    expectedEur: 517,
    actualEur: null,
    original: "$600 unsigned",
    due: "Follow-up later",
    status: "Pipeline",
    note: "Keep warm; follow up in roughly one month",
  },
];

const confirmedRows = revenueLedger.filter((row) => row.status !== "Pipeline");
const pipelineRows = revenueLedger.filter((row) => row.status === "Pipeline");

export const financeSummary = {
  targetEur: monthlyGoal.targetEur,
  landedEur: confirmedRows.reduce((total, row) => total + (row.actualEur ?? 0), 0),
  expectedEur: confirmedRows.reduce((total, row) => total + row.expectedEur, 0),
  pipelineEur: pipelineRows.reduce((total, row) => total + row.expectedEur, 0),
};

export const financeActions: FinanceAction[] = [
  {
    label: "Confirm Clawbite + Detris period",
    client: "Clawbite + Detris",
    impact: "~€517 expected",
    due: "After meeting",
  },
  {
    label: "Check Airalo payment window",
    client: "Airalo",
    impact: "~€517 expected",
    due: "5th–11th",
  },
  {
    label: "Record next Layla batch",
    client: "Layla AI",
    impact: "€200+ base",
    due: "Next batch",
  },
  {
    label: "Complete Manus onboarding",
    client: "Manus",
    impact: "~€47/video plus bonuses",
    due: "Today 7pm",
  },
];

export const summaryStats: SummaryStat[] = [
  {
    label: "Confirmed MRR",
    value: monthlyGoal.current,
    note: "Approx EUR equivalent; source retainers include USD",
    icon: CircleDollarSign,
  },
  {
    label: "Active clients",
    value: String(clients.length),
    note: "Confirmed client accounts right now",
    icon: UserRoundCheck,
  },
  {
    label: "Pipeline",
    value: String(pipeline.length),
    note: "Layla upside and Limba unsigned",
    icon: Film,
  },
  {
    label: "Next payment due",
    value: "Pingo",
    note: "Monday · ~€175 / $210",
    icon: Banknote,
  },
];

export const payments: PaymentItem[] = [
  {
    label: "Next due",
    client: "Pingo AI",
    value: "Monday",
    note: "~€175 / $210 weekly payment",
    next: true,
  },
  {
    label: "Monthly window",
    client: "Airalo",
    value: "5th–11th",
    note: "~€517 / $600",
  },
  {
    label: "To confirm",
    client: "Clawbite + Detris",
    value: "~€517",
    note: "Current period to discuss in meeting",
  },
  {
    label: "Month-end data",
    client: "Layla AI",
    value: "€200+",
    note: "Minimum confirmed; final amount TBC",
  },
];

export const workload = {
  attentionCount: 2,
  attentionText: "Clawbite + Detris meeting, Layla AI batch",
  retainerCount: clients.length,
  retainerText: "Pingo AI, Airalo, Layla AI, Clawbite + Detris",
  pipelineCount: pipeline.length,
  pipelineText: "Layla bonus upside, Limba unsigned",
};
