import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { portfolio } from "@/lib/content";

export function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-line bg-surface py-24 md:py-32">
      <div className="container-nx">
        <SectionLabel num="04">Cases</SectionLabel>
        <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Problemas reais, resolvidos com software.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {portfolio.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className="flex h-full flex-col rounded-xl border border-line bg-bg p-7 transition-colors hover:border-line-strong">
                <span className="w-fit rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                  {c.category}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {c.title}
                </h3>

                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      Problema
                    </dt>
                    <dd className="mt-1 text-muted">{c.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      Solução
                    </dt>
                    <dd className="mt-1 text-fg">{c.solution}</dd>
                  </div>
                </dl>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2">
                    {c.stackUsed.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-line px-2 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 border-t border-line pt-4 text-sm font-medium text-accent">
                    {c.result}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
