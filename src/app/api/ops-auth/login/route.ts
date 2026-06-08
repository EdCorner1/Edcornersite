import { NextResponse } from "next/server";
import { setOpsAdminSession, verifyOpsAdminPassword } from "@/lib/ops-auth";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { password?: string };
  const password = body.password ?? "";

  if (!verifyOpsAdminPassword(password)) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const didSetSession = await setOpsAdminSession();

  if (!didSetSession) {
    return NextResponse.json({ error: "OPS_ADMIN_PASSWORD is not configured" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
