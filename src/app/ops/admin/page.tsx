import { OpsAdminClient } from "@/components/ops/admin/OpsAdminClient";
import { isOpsAdminAuthenticated } from "@/lib/ops-auth";
import { getSavedOpsData } from "@/lib/ops-store";

export const dynamic = "force-dynamic";

export default async function OpsAdminPage() {
  const [initialData, isAuthenticated] = await Promise.all([
    getSavedOpsData(),
    isOpsAdminAuthenticated(),
  ]);

  return <OpsAdminClient initialData={initialData} isAuthenticated={isAuthenticated} />;
}
