import type { Metadata } from "next";
import Link from "next/link";
import { Wordmark } from "@/components/brand/LogoN";
import { lp } from "@/lib/lp-content";
import { site } from "@/lib/content";
import {
  LpHero,
  LpTicker,
  LpCapture,
  LpResults,
  LpAbout,
  LpMethod,
  LpServices,
  LpPlans,
  LpGuarantee,
  LpFaq,
  LpFooter,
} from "@/components/lp/sections";

export const metadata: Metadata = {
  title: "Diagnóstico gratuito · Software sob medida para o seu negócio",
  description: lp.hero.subtitle,
  // Página de campanha (tráfego pago) — não deve competir com o site na busca.
  robots: { index: false, follow: true },
  alternates: { canonical: "/lp" },
};

function first(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}

export default async function LpPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const utm = {
    utmSource: first(sp.utm_source),
    utmCampaign: first(sp.utm_campaign),
    utmContent: first(sp.utm_content),
    utmTerm: first(sp.utm_term),
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top bar enxuta — só logo + CTA, sem nav (foco em conversão) */}
      <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
        <div className="container-nx flex items-center justify-between py-3">
          <Link href="/lp" aria-label="Nexio" className="flex items-center">
            <Wordmark size={36} priority />
          </Link>
          <a
            href="#diagnostico"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Diagnóstico gratuito
          </a>
        </div>
      </header>

      <main className="flex-1 pb-20 lg:pb-0">
        <LpHero />
        <LpTicker />
        <LpCapture utm={utm} />
        <LpResults />
        <LpAbout />
        <LpMethod />
        <LpServices />
        <LpPlans />
        <LpGuarantee />
        <LpFaq />
      </main>

      <LpFooter />

      {/* CTA fixo no rodapé — mobile only (padrão de LP de conversão) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 p-3 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3">
          <a
            href="#diagnostico"
            className="flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white"
          >
            {lp.hero.cta}
          </a>
          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-fg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.94 1.35-.5.05-.96.24-3.23-.67-2.72-1.07-4.45-3.86-4.58-4.04-.13-.18-1.1-1.46-1.1-2.78 0-1.32.7-1.97.94-2.24.24-.27.53-.34.7-.34.18 0 .35 0 .5.01.16.01.38-.06.6.46.24.55.8 1.9.87 2.04.07.13.12.29.02.47-.09.18-.14.29-.28.45-.14.16-.29.35-.42.47-.14.13-.28.28-.12.55.16.27.7 1.16 1.51 1.88 1.04.93 1.92 1.22 2.19 1.36.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.6-.14.24.09 1.55.73 1.81.86.27.13.45.2.51.31.07.11.07.63-.17 1.31Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
