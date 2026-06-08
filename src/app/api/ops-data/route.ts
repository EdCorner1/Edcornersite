import { NextResponse } from "next/server";
import { isOpsAdminAuthenticated } from "@/lib/ops-auth";
import { getSavedOpsData, normalizeOpsData, saveOpsData } from "@/lib/ops-store";

export async function GET() {
  const data = await getSavedOpsData();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  if (!(await isOpsAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  try {
    const data = await saveOpsData(normalizeOpsData(body));
    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save ops data";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
