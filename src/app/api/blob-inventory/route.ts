import { list } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

const DEFAULT_PREFIX = "UGC Content/Clients/";
const MAX_LIMIT = 1000;

function isAuthorized(request: NextRequest) {
  const configuredSecret = process.env.BLOB_INVENTORY_SECRET;

  if (!configuredSecret) {
    return false;
  }

  const authHeader = request.headers.get("authorization");
  const bearerToken = authHeader?.startsWith("Bearer ") ? authHeader.slice("Bearer ".length).trim() : undefined;
  const queryToken = request.nextUrl.searchParams.get("secret")?.trim();

  return bearerToken === configuredSecret || queryToken === configuredSecret;
}

function isAllowedPrefix(prefix: string) {
  return prefix === DEFAULT_PREFIX || prefix.startsWith(DEFAULT_PREFIX);
}

function parseLimit(value: string | null) {
  if (!value) {
    return MAX_LIMIT;
  }

  const parsedLimit = Number.parseInt(value, 10);

  if (!Number.isFinite(parsedLimit) || parsedLimit < 1) {
    return MAX_LIMIT;
  }

  return Math.min(parsedLimit, MAX_LIMIT);
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const requestedPrefix = request.nextUrl.searchParams.get("prefix") ?? DEFAULT_PREFIX;
  const prefix = requestedPrefix.trim() || DEFAULT_PREFIX;

  if (!isAllowedPrefix(prefix)) {
    return NextResponse.json({ error: "Prefix is not allowed" }, { status: 403 });
  }

  const mode = request.nextUrl.searchParams.get("mode") === "folded" ? "folded" : "expanded";
  const limit = parseLimit(request.nextUrl.searchParams.get("limit"));
  const cursor = request.nextUrl.searchParams.get("cursor") ?? undefined;

  const result = await list({
    prefix,
    limit,
    cursor,
    mode,
  });

  return NextResponse.json({
    prefix,
    mode,
    hasMore: result.hasMore,
    cursor: result.cursor ?? null,
    folders: "folders" in result ? result.folders : [],
    blobs: result.blobs.map((blob) => ({
      pathname: blob.pathname,
      url: blob.url,
      downloadUrl: blob.downloadUrl,
      size: blob.size,
      uploadedAt: blob.uploadedAt.toISOString(),
    })),
  });
}
