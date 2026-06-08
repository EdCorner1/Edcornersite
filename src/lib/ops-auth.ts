import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "ops_admin_session";
const SESSION_VALUE = "ops-admin";

export function getOpsAdminPassword() {
  return process.env.OPS_ADMIN_PASSWORD || process.env.BLOB_INVENTORY_SECRET || "";
}

function signSession(secret: string) {
  return createHmac("sha256", secret).update(SESSION_VALUE).digest("hex");
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function verifyOpsAdminPassword(password: string) {
  const configuredPassword = getOpsAdminPassword();

  if (!configuredPassword) {
    return false;
  }

  return safeEqual(password, configuredPassword);
}

export async function isOpsAdminAuthenticated() {
  const configuredPassword = getOpsAdminPassword();

  if (!configuredPassword) {
    return false;
  }

  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME)?.value;

  if (!sessionCookie) {
    return false;
  }

  return safeEqual(sessionCookie, signSession(configuredPassword));
}

export async function setOpsAdminSession() {
  const configuredPassword = getOpsAdminPassword();

  if (!configuredPassword) {
    return false;
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, signSession(configuredPassword), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/ops",
    maxAge: 60 * 60 * 24 * 30,
  });

  return true;
}

export async function clearOpsAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
