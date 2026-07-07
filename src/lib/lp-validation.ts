import { z } from "zod";
import { lp } from "@/lib/lp-content";

// Schema enxuto da LP — reusado no client (react-hook-form) e no server (action).
// Fica fora do arquivo "use server" (lá só funções async podem ser exportadas).
export const lpLeadSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(120, "Nome muito longo."),
  whatsapp: z
    .string()
    .trim()
    .min(8, "Informe um WhatsApp válido.")
    .max(30, "Número muito longo.")
    .regex(/^[\d\s()+-]+$/, "Use apenas números e os símbolos + ( ) -."),
  business: z.string().trim().max(160).optional().or(z.literal("")),
  need: z.enum(lp.needs).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  // UTMs / origem (campos ocultos preenchidos pela querystring do anúncio)
  utmSource: z.string().trim().max(120).optional().or(z.literal("")),
  utmCampaign: z.string().trim().max(200).optional().or(z.literal("")),
  utmContent: z.string().trim().max(200).optional().or(z.literal("")),
  utmTerm: z.string().trim().max(200).optional().or(z.literal("")),
  // Honeypot anti-spam — deve permanecer vazio.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type LpLeadInput = z.infer<typeof lpLeadSchema>;
