import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Sessão simples e stateless para o /admin:
 * cookie httpOnly assinado por HMAC com AUTH_SECRET. Sem dependências externas.
 */

const COOKIE_NAME = "nexio_admin";
const MAX_AGE = 60 * 60 * 8; // 8h

function secret(): string {
  const s = process.env.AUTH_SECRET;
  if (!s) throw new Error("AUTH_SECRET não configurado no .env");
  return s;
}

function sign(value: string): string {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

/** Gera o valor do cookie de sessão (payload.assinatura). */
export function createSessionToken(): string {
  const payload = `admin.${Date.now()}`;
  return `${payload}.${sign(payload)}`;
}

/** Valida o token do cookie (assinatura + expiração). */
export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const idx = token.lastIndexOf(".");
  if (idx < 0) return false;
  const payload = token.slice(0, idx);
  const sig = token.slice(idx + 1);
  const expected = sign(payload);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;

  const ts = Number(payload.split(".")[1]);
  if (!Number.isFinite(ts)) return false;
  return Date.now() - ts < MAX_AGE * 1000;
}

/** Confere a senha de acesso (constante, contra timing attack). */
export function checkPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD ?? "";
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const AUTH = { COOKIE_NAME, MAX_AGE };
