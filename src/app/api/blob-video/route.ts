import { get } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

const ALLOWED_PREFIXES = ["UGC Content/Clients/"];

function isAllowedPathname(pathname: string) {
  return ALLOWED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.searchParams.get("pathname");

  if (!pathname) {
    return NextResponse.json({ error: "Missing pathname" }, { status: 400 });
  }

  if (!isAllowedPathname(pathname)) {
    return NextResponse.json({ error: "Blob pathname is not allowed" }, { status: 403 });
  }

  const result = await get(pathname, { access: "private" });

  if (!result || result.statusCode !== 200 || !result.stream) {
    return NextResponse.json({ error: "Blob not found" }, { status: 404 });
  }

  return new NextResponse(result.stream, {
    status: 200,
    headers: {
      "Content-Type": result.blob.contentType || "video/mp4",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
