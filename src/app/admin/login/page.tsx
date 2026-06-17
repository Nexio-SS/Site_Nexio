"use client";

import { useActionState } from "react";
import { Wordmark } from "@/components/brand/LogoN";
import { login, type LoginState } from "../actions";

const initial: LoginState = {};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, initial);

  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Wordmark size={32} />
        </div>
        <div className="rounded-2xl border border-line bg-surface-2/60 p-8">
          <h1 className="text-xl font-bold tracking-tight">Painel · Leads</h1>
          <p className="mt-1 text-sm text-muted">Acesso restrito.</p>

          <form action={formAction} className="mt-6 space-y-4">
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoFocus
                required
                className="w-full rounded-md border border-line bg-bg px-4 py-3 text-fg transition-colors focus:border-accent focus:outline-none"
              />
            </div>

            {state.error && (
              <p className="text-sm text-red-400">{state.error}</p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600 disabled:opacity-60"
            >
              {pending ? "Entrando…" : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
