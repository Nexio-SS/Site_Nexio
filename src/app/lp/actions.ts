"use server";

import { prisma } from "@/lib/db";
import { lpLeadSchema, type LpLeadInput } from "@/lib/lp-validation";

export type LpSubmitResult = { ok: true } | { ok: false; error: string };

export async function submitLpLead(input: LpLeadInput): Promise<LpSubmitResult> {
  const parsed = lpLeadSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Dados inválidos. Revise os campos." };
  }
  const d = parsed.data;

  // Honeypot: bots preenchem o campo oculto "website".
  if (d.website) return { ok: true };

  // Monta a descrição a partir dos campos da LP + rastreio da campanha.
  const utmLine = [d.utmCampaign, d.utmContent, d.utmTerm]
    .filter(Boolean)
    .join(" / ");
  const description =
    [
      d.message?.trim() || "(sem mensagem)",
      d.business ? `Negócio: ${d.business}` : null,
      utmLine ? `Campanha: ${utmLine}` : null,
    ]
      .filter(Boolean)
      .join(" · ") || "(via LP)";

  try {
    await prisma.lead.create({
      data: {
        name: d.name,
        company: d.business || null,
        whatsapp: d.whatsapp,
        projectType: d.need || "Diagnóstico (LP)",
        budgetRange: null,
        description,
        source: d.utmSource ? `lp:${d.utmSource}` : "lp",
      },
    });
    // Fase 2 (AWS): disparar SES + notificação WhatsApp API aqui.
    return { ok: true };
  } catch (err) {
    console.error("Erro ao salvar lead da LP:", err);
    return { ok: false, error: "Não foi possível enviar agora. Tente novamente." };
  }
}
