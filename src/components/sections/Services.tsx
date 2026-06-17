import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button, Arrow } from "@/components/ui/Button";
import { services } from "@/lib/content";

const CardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2 3 7l9 5 9-5-9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Services() {
  return (
    <section id="servicos" className="border-b border-line py-24 md:py-32">
      <div className="container-nx">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel num="01">O que fazemos</SectionLabel>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Conheça nossas principais soluções.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Button href="/servicos" variant="secondary" pill>
              Todos os serviços <Arrow />
            </Button>
          </div>
        </div>

        {/* Cards no estilo conexte — versão escura */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                href="/servicos"
                className="group flex h-full flex-col rounded-2xl border border-line bg-gradient-to-br from-surface-2/80 to-bg p-7 transition-colors hover:border-line-strong"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong text-accent">
                    <CardIcon />
                  </span>
                  <span className="rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-muted">
                    {s.num}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide transition-colors group-hover:text-accent">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.short}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.deliver.slice(0, 4).map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-line bg-surface/50 px-3 py-1 text-xs text-muted"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
