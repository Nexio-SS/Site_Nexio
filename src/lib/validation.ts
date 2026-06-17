import { z } from "zod";
import { projectTypes, budgetRanges } from "@/lib/content";

// Schema único, reusado no client (react-hook-form) e no server (action).
export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome.")
    .max(120, "Nome muito longo."),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  whatsapp: z
    .string()
    .trim()
    .min(8, "Informe um WhatsApp válido.")
    .max(30, "Número muito longo.")
    .regex(/^[\d\s()+-]+$/, "Use apenas números e os símbolos + ( ) -."),
  projectType: z.enum(projectTypes, {
    message: "Selecione o tipo de projeto.",
  }),
  budgetRange: z
    .enum(budgetRanges)
    .optional()
    .or(z.literal("")),
  description: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais sobre o projeto (mín. 10 caracteres).")
    .max(2000, "Descrição muito longa."),
  // Honeypot anti-spam — deve permanecer vazio.
  website: z.string().max(0, "Spam detectado.").optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
