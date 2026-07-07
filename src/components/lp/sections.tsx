import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Button";
import { Wordmark } from "@/components/brand/LogoN";
import { lp } from "@/lib/lp-content";
import { site, portfolio } from "@/lib/content";
import { LpForm } from "./LpForm";
import { MethodOrbit } from "./MethodOrbit";

type Utm = {
  utmSource?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
};

/** Eyebrow técnico da LP — mesma assinatura mono do site. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
      <span className="h-px w-8 bg-accent/60" />
      {children}
    </p>
  );
}

const ctaClasses =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#1a5cf0] hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(96,165,250,0.75)]";

/* ── 1. Hero — centralizado, logo no topo (estilo LP de conversão) ── */
export function LpHero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* Fundo: cinza gunmetal fosco — mesma cor do fundo da logo (blend perfeito) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 32%, #333b45 0%, #1b212a 42%, #12161d 72%, #0b0e14 100%)",
        }}
        aria-hidden="true"
      />
      <div className="container-nx relative flex flex-col items-center pt-8 pb-16 text-center md:pt-10 md:pb-20">
        <Reveal>
          <Image
            src="/nexio-lockup.png"
            alt="Nexio — Softwares e Sistemas"
            width={680}
            height={699}
            priority
            className="h-auto w-[140px] md:w-[180px]"
          />
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {lp.hero.title}
            <span className="mt-2 block font-black text-accent">
              {lp.hero.titleAccent}.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
            {lp.hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <a href="#diagnostico" className={`mt-10 ${ctaClasses}`}>
            {lp.hero.cta} <Arrow />
          </a>
          <p className="mt-4 font-mono text-xs text-muted">{lp.hero.microProof}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 2. Ticker de prova social — faixas diagonais cruzadas ────────── */
function TickerStrip({
  tone,
  marquee,
  bullet,
}: {
  tone: "black" | "light";
  marquee: "lp-marquee" | "lp-marquee-rev";
  bullet: string;
}) {
  const items = [...lp.ticker, ...lp.ticker, ...lp.ticker];
  const skin =
    tone === "black"
      ? "bg-black text-white border-y border-white/12"
      : "bg-gradient-to-r from-white via-slate-100 to-slate-300 text-[#0a0a0a]";
  return (
    <div className={`overflow-hidden py-5 shadow-2xl md:py-6 ${skin}`}>
      <div className={`flex w-max ${marquee}`}>
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-4 whitespace-nowrap px-5 text-xl font-black uppercase tracking-wide md:text-2xl"
          >
            {t}
            <span className={bullet} aria-hidden="true">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function LpTicker() {
  return (
    <section
      className="relative isolate overflow-hidden border-y border-line bg-bg py-28 md:py-32"
      aria-hidden="true"
    >
      {/* Faixa 1 — preta com texto branco (igual à foto), inclinada, acima */}
      <div className="absolute left-1/2 top-1/2 w-[165%] -translate-x-1/2 -translate-y-[calc(50%+2rem)] -rotate-[8deg]">
        <TickerStrip tone="black" marquee="lp-marquee" bullet="text-[var(--color-gold)]" />
      </div>
      {/* Faixa 2 — clara, inclinação oposta, abaixo (cruza a azul) */}
      <div className="absolute left-1/2 top-1/2 w-[165%] -translate-x-1/2 -translate-y-[calc(50%-2rem)] rotate-[8deg]">
        <TickerStrip tone="light" marquee="lp-marquee-rev" bullet="text-primary" />
      </div>
    </section>
  );
}

/* ── 3. Faixa de urgência ─────────────────────────────────────────── */
export function LpUrgency() {
  return (
    <section className="border-b border-line bg-[color-mix(in_srgb,var(--color-gold)_10%,transparent)]">
      <div className="container-nx flex items-center gap-4 py-4">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-gold)] opacity-70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
        </span>
        <p className="text-sm text-fg/90">{lp.urgency}</p>
      </div>
    </section>
  );
}

/* ── 4. Captura de lead ───────────────────────────────────────────── */
export function LpCapture({ utm }: { utm: Utm }) {
  return (
    <section id="diagnostico" className="scroll-mt-8 border-b border-line bg-surface">
      <div className="container-nx grid gap-12 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Esquerda — passos */}
        <div>
          <Reveal>
            <Eyebrow>Diagnóstico gratuito</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {lp.capture.title}
            </h2>
            <p className="mt-4 max-w-md text-muted">{lp.capture.subtitle}</p>
          </Reveal>
          <ol className="mt-10 space-y-6">
            {lp.capture.steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 font-mono text-sm text-accent">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted">{s.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Direita — formulário */}
        <Reveal delay={120}>
          <div className="rounded-2xl border border-line-strong bg-surface-2/60 p-6 sm:p-8 lg:sticky lg:top-8">
            <LpForm utm={utm} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 5. Resultados (portfólio real) ───────────────────────────────── */
export function LpResults() {
  return (
    <section className="border-b border-line">
      <div className="container-nx py-20 md:py-24">
        <Reveal>
          <Eyebrow>Resultados reais</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Projetos que já estão no ar, gerando negócio
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {portfolio.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface-2/40 p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                    {p.category}
                  </span>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-muted hover:text-fg"
                    >
                      ver ao vivo →
                    </a>
                  )}
                </div>
                <h3 className="mt-3 text-xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.solution}</p>
                <p className="mt-auto pt-5 text-sm font-medium text-fg">
                  <span className="text-[var(--color-gold)]">↗</span> {p.result}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 6. Quem somos ────────────────────────────────────────────────── */
export function LpAbout() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-nx grid gap-12 py-20 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>Quem somos</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {lp.about.title}
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Reveal delay={80}>
            <p className="text-lg leading-relaxed text-muted">{lp.about.body}</p>
          </Reveal>
          <ul className="mt-8 space-y-3">
            {lp.about.pillars.map((p, i) => (
              <Reveal key={p} delay={120 + i * 60}>
                <li className="flex items-center gap-3 text-fg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 text-accent">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {p}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── 7. O Método — diagrama orbital interativo ────────────────────── */
export function LpMethod() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-nx py-20 text-center md:py-24">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow>O método Nexio</Eyebrow>
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {lp.method.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">{lp.method.subtitle}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14">
            <MethodOrbit />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 8. O que fazemos ─────────────────────────────────────────────── */
export function LpServices() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-nx py-20 md:py-24">
        <Reveal>
          <Eyebrow>O que fazemos</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Do tráfego ao software — tudo personalizado, num só lugar
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lp.services.map((s, i) => (
            <Reveal key={s.num} delay={i * 50}>
              <div className="flex h-full flex-col rounded-xl border border-line bg-surface-2/40 p-6 transition-colors hover:border-accent/40">
                <span className="font-mono text-xs text-accent">{s.num}</span>
                <h3 className="mt-3 text-lg font-bold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.short}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 9. Planos / modelos de trabalho ──────────────────────────────── */
export function LpPlans() {
  return (
    <section className="border-b border-line">
      <div className="container-nx py-20 md:py-24">
        <Reveal>
          <Eyebrow>Modelos de trabalho</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {lp.plans.title}
          </h2>
          <p className="mt-4 max-w-xl text-muted">{lp.plans.subtitle}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {lp.plans.items.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 ${
                  p.highlight
                    ? "border-accent/60 bg-[color-mix(in_srgb,var(--color-primary)_10%,var(--color-surface-2))]"
                    : "border-line bg-surface-2/40"
                }`}
              >
                {p.highlight && (
                  <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white">
                    Mais escolhido
                  </span>
                )}
                <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
                <p className="mt-1 text-sm text-accent">{p.for}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{p.desc}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-fg">
                      <span className="text-[var(--color-gold)]">·</span> {b}
                    </li>
                  ))}
                </ul>
                <a href="#diagnostico" className="mt-6 text-sm font-semibold text-accent hover:underline">
                  Quero este formato →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 10. Garantia / time exclusivo ────────────────────────────────── */
export function LpGuarantee() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-nx py-20 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-line-strong bg-surface-2 p-8 sm:p-12">
            <div className="relative max-w-2xl">
            <Reveal>
              <Eyebrow>Sem folha de pagamento</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {lp.guarantee.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">{lp.guarantee.body}</p>
              <a href="#diagnostico" className={`mt-8 ${ctaClasses}`}>
                {lp.guarantee.cta} <Arrow />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 11. FAQ ──────────────────────────────────────────────────────── */
export function LpFaq() {
  return (
    <section className="border-b border-line">
      <div className="container-nx grid gap-12 py-20 md:grid-cols-12 md:py-24">
        <div className="md:col-span-4">
          <Reveal>
            <Eyebrow>Perguntas frequentes</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ainda com dúvida? A gente responde.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <div className="divide-y divide-line border-y border-line">
            {lp.faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-fg">
                  {f.q}
                  <span className="shrink-0 text-accent transition-transform duration-200 group-open:rotate-45">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 12. Rodapé enxuto (sem nav — foco em conversão) ──────────────── */
export function LpFooter() {
  return (
    <footer className="bg-surface-2">
      <div className="container-nx flex flex-col items-center gap-6 py-14 text-center">
        <Wordmark />
        <p className="max-w-md text-sm text-muted">{site.description}</p>
        <a href="#diagnostico" className={ctaClasses}>
          {lp.hero.cta} <Arrow />
        </a>
        <div className="flex items-center gap-5 pt-2">
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Nexio" className="text-muted hover:text-fg">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Nexio" className="text-muted hover:text-fg">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.76-1.95C20.6 8.69 22 10.6 22 14.06V21h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z" />
            </svg>
          </a>
        </div>
        <p className="font-mono text-xs text-muted">
          © 2026 {site.name} · {site.tagline} · {site.city}
        </p>
      </div>
    </footer>
  );
}
