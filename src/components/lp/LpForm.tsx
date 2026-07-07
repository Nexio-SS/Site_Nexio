"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { lp } from "@/lib/lp-content";
import { site } from "@/lib/content";
import { Arrow } from "@/components/ui/Button";
import { submitLpLead } from "@/app/lp/actions";
import { lpLeadSchema, type LpLeadInput } from "@/lib/lp-validation";

const field =
  "w-full rounded-md border border-line bg-surface-2/60 px-4 py-3 text-fg placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none";
const label = "mb-2 block text-sm font-medium text-fg";
const err = "mt-1.5 text-xs text-red-400";

type Utm = {
  utmSource?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
};

export function LpForm({ utm }: { utm: Utm }) {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<LpLeadInput>({
    resolver: zodResolver(lpLeadSchema),
    defaultValues: {
      website: "",
      utmSource: utm.utmSource ?? "",
      utmCampaign: utm.utmCampaign ?? "",
      utmContent: utm.utmContent ?? "",
      utmTerm: utm.utmTerm ?? "",
    },
  });

  async function onSubmit(data: LpLeadInput) {
    setServerError(null);
    const res = await submitLpLead(data);
    if (res.ok) setSent(true);
    else setServerError(res.error);
  }

  if (sent) {
    const v = getValues();
    const waMsg = encodeURIComponent(
      `Olá! Acabei de pedir um diagnóstico pelo site. Sou ${v.name}` +
        (v.business ? ` (${v.business})` : "") +
        (v.need ? `, preciso de: ${v.need}.` : "."),
    );
    return (
      <div className="rounded-2xl border border-line-strong bg-surface-2 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 text-accent">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-5 text-2xl font-bold tracking-tight">Recebemos seu pedido!</h3>
        <p className="mt-3 text-muted">
          Um especialista vai analisar o seu caso e retornar em breve. Quer adiantar?
        </p>
        <a
          href={`https://wa.me/${site.whatsappNumber}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
        >
          Adiantar no WhatsApp <Arrow />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label>
          Não preencha
          <input tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>
      {/* UTMs ocultos */}
      <input type="hidden" {...register("utmSource")} />
      <input type="hidden" {...register("utmCampaign")} />
      <input type="hidden" {...register("utmContent")} />
      <input type="hidden" {...register("utmTerm")} />

      <div>
        <label htmlFor="lp-name" className={label}>
          Nome <span className="text-accent">*</span>
        </label>
        <input id="lp-name" className={field} placeholder="Seu nome" {...register("name")} />
        {errors.name && <p className={err}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="lp-whatsapp" className={label}>
          WhatsApp <span className="text-accent">*</span>
        </label>
        <input
          id="lp-whatsapp"
          inputMode="tel"
          className={field}
          placeholder="(13) 99999-9999"
          {...register("whatsapp")}
        />
        {errors.whatsapp && <p className={err}>{errors.whatsapp.message}</p>}
      </div>

      <div>
        <label htmlFor="lp-business" className={label}>
          O que seu negócio faz?
        </label>
        <input
          id="lp-business"
          className={field}
          placeholder="Ex: revenda de veículos, barbearia, e-commerce…"
          {...register("business")}
        />
      </div>

      <div>
        <label htmlFor="lp-need" className={label}>
          O que você precisa?
        </label>
        <select id="lp-need" className={field} defaultValue="" {...register("need")}>
          <option value="">Selecione…</option>
          {lp.needs.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      {serverError && (
        <p className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#1a5cf0] hover:shadow-[0_0_30px_rgba(96,165,250,0.7)] disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none"
      >
        {isSubmitting ? "Enviando…" : lp.hero.cta}
        {!isSubmitting && <Arrow />}
      </button>
      <p className="text-center text-xs text-muted">{lp.hero.microProof}</p>
    </form>
  );
}
