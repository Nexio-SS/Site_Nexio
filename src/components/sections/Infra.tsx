import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ArchDiagram } from "@/components/brand/ArchDiagram";
import { infra } from "@/lib/content";

export function Infra() {
  return (
    <section className="border-b border-line py-24 md:py-32">
      <div className="container-nx">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-9">
            <SectionLabel num="03">Infraestrutura AWS</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              O mesmo padrão de infraestrutura que entregamos para clientes.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-12 md:items-center">
          {/* Lista de serviços AWS — formato técnico com código mono */}
          <ul className="md:col-span-7">
            {infra.map((item, i) => (
              <Reveal key={item.code} as="li" delay={i * 50}>
                <div className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-line py-6 first:border-t-0 md:first:border-t">
                  <span className="mt-0.5 whitespace-nowrap font-mono text-xs uppercase tracking-wider text-accent">
                    {item.code}
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="md:col-span-5">
            <Reveal delay={120}>
              <div className="rounded-2xl border border-line bg-surface-2/60 p-5">
                <ArchDiagram className="w-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
