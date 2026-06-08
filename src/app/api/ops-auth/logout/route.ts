import { NextResponse } from "next/server";
import { clearOpsAdminSession } from "@/lib/ops-auth";

export async function POST() {
  await clearOpsAdminSession();
  return NextResponse.json({ ok: true });
}
