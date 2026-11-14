import { get } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

function isSafePathname(pathname: string) {
  return Boolean(pathname) && !pathname.includes("..") && !pathname.startsWith("/");
}

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.searchParams.get("pathname");

  if (!pathname) {
    return NextResponse.json({ error: "Missing pathname" }, { status: 400 });
  }

  if (!isSafePathname(pathname)) {
    return NextResponse.json({ error: "Blob pathname is not allowed" }, { status: 403 });
  }

  const rangeHeader = request.headers.get("range");
  const forwardHeaders = rangeHeader ? { Range: rangeHeader } : undefined;

  const result =
    (await get(pathname, { access: "private", headers: forwardHeaders }).catch(() => null)) ??
    (await get(pathname, { access: "public", headers: forwardHeaders }).catch(() => null));

  if (!result || result.statusCode !== 200 || !result.stream) {
    return NextResponse.json({ error: "Blob not found" }, { status: 404 });
  }

  const contentRange = result.headers.get("content-range");
  const contentLength = result.headers.get("content-length");
  const acceptRanges = result.headers.get("accept-ranges") || "bytes";

  const rawContentType = result.blob.contentType || "video/mp4";
  const contentType =
    rawContentType === "video/quicktime" ? "video/mp4" : rawContentType;

  const responseHeaders: Record<string, string> = {
    "Content-Type": contentType,
    "Accept-Ranges": acceptRanges,
    "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    "X-Content-Type-Options": "nosniff",
  };

  if (contentRange) {
    responseHeaders["Content-Range"] = contentRange;
  }
  if (contentLength) {
    responseHeaders["Content-Length"] = contentLength;
  }

  return new NextResponse(result.stream, {
    status: contentRange ? 206 : 200,
    headers: responseHeaders,
  });
}
