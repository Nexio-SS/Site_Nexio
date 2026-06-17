"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { checkPassword, createSessionToken, AUTH } from "@/lib/auth";

export type LoginState = { error?: string };

export async function login(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  if (!checkPassword(password)) {
    return { error: "Senha incorreta." };
  }
  const c = await cookies();
  c.set(AUTH.COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: AUTH.MAX_AGE,
  });
  redirect("/admin");
}

export async function logout() {
  const c = await cookies();
  c.delete({ name: AUTH.COOKIE_NAME, path: "/admin" });
  redirect("/admin/login");
}
