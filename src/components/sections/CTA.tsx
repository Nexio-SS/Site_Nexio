import { Button, Arrow } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
      <div className="container-nx relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface-2 px-8 py-16 text-center md:px-16">
            <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Vamos conversar
            </p>
            <h2 className="relative mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Tem um projeto em mente? A gente constrói.
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-muted">
              Conte o desafio do seu negócio. Respondemos com um diagnóstico
              técnico e os próximos passos — sem enrolação.
            </p>
            <div className="relative mt-9 flex justify-center">
              <Button href="/contato" variant="primary">
                Falar com especialista <Arrow />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
