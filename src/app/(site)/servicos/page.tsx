import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button, Arrow } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import { services, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Serviços — desenvolvimento de software, sistemas e automação com IA",
  description:
    "Sites, software sob medida, sistemas web, aplicativos, SaaS, automações com IA e infraestrutura AWS. Conheça o que a Nexio entrega.",
  alternates: { canonical: "/servicos" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "Service",
    position: i + 1,
    name: s.title,
    description: s.short,
    provider: { "@type": "Organization", name: site.name },
  })),
};

export default function ServicosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Cabeçalho da página */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden="true" />
        <div className="container-nx relative py-20 md:py-28">
          <SectionLabel num="—">Serviços</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            Engenharia de software de ponta a ponta.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Do site institucional ao SaaS multitenancy — cada serviço entregue
            com código de produção e infraestrutura na AWS.
          </p>
        </div>
      </section>

      {/* Blocos detalhados por serviço — layout alternado/assimétrico */}
      <section className="py-8 md:py-12">
        <div className="container-nx divide-y divide-line">
          {services.map((s) => (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className="grid scroll-mt-24 gap-8 py-14 md:grid-cols-12 md:gap-10"
              >
                <div className="md:col-span-4">
                  <div className="font-mono text-sm text-accent">{s.num}</div>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.long}
                  </p>
                </div>

                <div className="md:col-span-5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    Para quem
                  </p>
                  <p className="mt-2 leading-relaxed text-fg">{s.forWho}</p>
                </div>

                <div className="md:col-span-3">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    Entregamos
                  </p>
                  <ul className="mt-3 space-y-2">
                    {s.deliver.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-fg">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contato" variant="ghost" className="mt-5 px-0">
                    Solicitar orçamento <Arrow />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
