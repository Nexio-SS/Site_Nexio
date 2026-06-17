import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { stack } from "@/lib/content";

export function Stack() {
  return (
    <section className="border-b border-line bg-surface py-24 md:py-28">
      <div className="container-nx grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel num="02">Stack</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Tecnologia que sustenta produção, não só protótipo.
          </h2>
          <p className="mt-4 text-muted">
            Ferramentas escolhidas por confiabilidade e escala — visíveis, porque
            transparência técnica é parte do trabalho.
          </p>
        </div>

        <div className="md:col-span-8">
          <Reveal>
            <ul className="flex flex-wrap gap-3">
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-line bg-bg px-4 py-2.5 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
