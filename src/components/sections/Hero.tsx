import { Button, Arrow } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* Camada de foto (data center) — usa /hero.jpg se existir; senão fica só o gradiente */}
      <div
        className="hero-photo-mask pointer-events-none absolute inset-y-0 right-0 w-full bg-cover bg-center bg-no-repeat md:w-3/5"
        style={{ backgroundImage: "url(/hero.jpg)" }}
        aria-hidden="true"
      />
      <div className="hero-photo-overlay pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden="true" />

      <div className="container-nx relative grid items-center gap-12 py-24 md:grid-cols-12 md:py-32 lg:py-40">
        <div className="md:col-span-7">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent/60" />
              Parceiro técnico estratégico
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Software sob medida que{" "}
              <span className="text-accent">escala o seu negócio</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              Sistemas, aplicativos, SaaS e automações com IA — construídos com
              código de produção e infraestrutura profissional na AWS. Não é
              script feito às pressas. É engenharia.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href="/contato" variant="primary" size="lg" pill>
                Falar com especialista <Arrow />
              </Button>
              <Button href="/servicos" variant="secondary" size="lg" pill>
                Ver serviços
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
