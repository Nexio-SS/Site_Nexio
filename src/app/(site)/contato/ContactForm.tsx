"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadInput } from "@/lib/validation";
import { projectTypes, budgetRanges, site } from "@/lib/content";
import { Arrow } from "@/components/ui/Button";
import { submitLead } from "./actions";

const fieldBase =
  "w-full rounded-md border border-line bg-surface-2/60 px-4 py-3 text-fg placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none";
const labelBase = "mb-2 block text-sm font-medium text-fg";
const errBase = "mt-1.5 text-xs text-red-400";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: { projectType: undefined, website: "" },
  });

  async function onSubmit(data: LeadInput) {
    setServerError(null);
    const res = await submitLead(data);
    if (res.ok) setSent(true);
    else setServerError(res.error);
  }

  if (sent) {
    const v = getValues();
    const waMsg = encodeURIComponent(
      `Olá! Acabei de enviar um contato pelo site. Sou ${v.name}` +
        (v.company ? ` (${v.company})` : "") +
        `, sobre: ${v.projectType}.`,
    );
    return (
      <div className="rounded-2xl border border-line-strong bg-surface-2 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 text-accent">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-5 text-2xl font-bold tracking-tight">Mensagem enviada!</h2>
        <p className="mt-3 text-muted">
          Recebemos seu contato e retornamos em breve. Quer adiantar a conversa?
        </p>
        <a
          href={`https://wa.me/${site.whatsappNumber}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
        >
          Continuar no WhatsApp <Arrow />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — escondido de humanos */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label>
          Não preencha
          <input tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Nome <span className="text-accent">*</span>
          </label>
          <input id="name" className={fieldBase} placeholder="Seu nome" {...register("name")} />
          {errors.name && <p className={errBase}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="company" className={labelBase}>
            Empresa
          </label>
          <input id="company" className={fieldBase} placeholder="Nome da empresa" {...register("company")} />
          {errors.company && <p className={errBase}>{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="whatsapp" className={labelBase}>
            WhatsApp <span className="text-accent">*</span>
          </label>
          <input
            id="whatsapp"
            inputMode="tel"
            className={fieldBase}
            placeholder="(11) 99999-9999"
            {...register("whatsapp")}
          />
          {errors.whatsapp && <p className={errBase}>{errors.whatsapp.message}</p>}
        </div>
        <div>
          <label htmlFor="projectType" className={labelBase}>
            Tipo de projeto <span className="text-accent">*</span>
          </label>
          <select id="projectType" className={fieldBase} defaultValue="" {...register("projectType")}>
            <option value="" disabled>
              Selecione…
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.projectType && <p className={errBase}>{errors.projectType.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="budgetRange" className={labelBase}>
          Orçamento estimado
        </label>
        <select id="budgetRange" className={fieldBase} defaultValue="" {...register("budgetRange")}>
          <option value="">Prefiro não informar</option>
          {budgetRanges.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className={labelBase}>
          Sobre o projeto <span className="text-accent">*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          className={`${fieldBase} resize-y`}
          placeholder="Conte o desafio do seu negócio e o que você precisa resolver."
          {...register("description")}
        />
        {errors.description && <p className={errBase}>{errors.description.message}</p>}
      </div>

      {serverError && (
        <p className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Enviando…" : "Enviar mensagem"}
        {!isSubmitting && <Arrow />}
      </button>
    </form>
  );
}
