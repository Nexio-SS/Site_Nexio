"use server";

import { prisma } from "@/lib/db";
import { leadSchema, type LeadInput } from "@/lib/validation";

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitLead(input: LeadInput): Promise<SubmitResult> {
  // Validação no server (single source of truth — mesmo schema do client).
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Dados inválidos. Revise os campos." };
  }

  const data = parsed.data;

  // Honeypot: bots preenchem o campo oculto "website".
  if (data.website) {
    return { ok: true }; // finge sucesso, descarta
  }

  try {
    await prisma.lead.create({
      data: {
        name: data.name,
        company: data.company || null,
        whatsapp: data.whatsapp,
        projectType: data.projectType,
        budgetRange: data.budgetRange || null,
        description: data.description,
      },
    });
    // Fase 2 (AWS): disparar SES + notificação WhatsApp API aqui.
    return { ok: true };
  } catch (err) {
    console.error("Erro ao salvar lead:", err);
    return { ok: false, error: "Não foi possível enviar agora. Tente novamente." };
  }
}
