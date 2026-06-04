import { NextRequest, NextResponse } from "next/server";

const OPS_PATH_PREFIX = "/ops";

function isOpsRoute(pathname: string) {
  return pathname === OPS_PATH_PREFIX || pathname.startsWith(`${OPS_PATH_PREFIX}/`);
}

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Ed Corner Ops", charset="UTF-8"',
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;
  for (let index = 0; index < a.length; index += 1) {
    result |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }

  return result === 0;
}

function hasValidBasicAuth(request: NextRequest, expectedPassword: string) {
  const header = request.headers.get("authorization");

  if (!header?.startsWith("Basic ")) {
    return false;
  }

  try {
    const encoded = header.slice("Basic ".length);
    const decoded = atob(encoded);
    const separatorIndex = decoded.indexOf(":");
    const password = separatorIndex >= 0 ? decoded.slice(separatorIndex + 1) : "";

    return timingSafeEqual(password, expectedPassword);
  } catch {
    return false;
  }
}

export function proxy(request: NextRequest) {
  if (!isOpsRoute(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const expectedPassword = process.env.OPS_PASSWORD;

  if (!expectedPassword) {
    return new NextResponse("OPS_PASSWORD is not configured", {
      status: 503,
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    });
  }

  if (!hasValidBasicAuth(request, expectedPassword)) {
    return unauthorized();
  }

  const response = NextResponse.next();
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");

  return response;
}

export const config = {
  matcher: ["/ops/:path*"],
};
