import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

export function About() {
  return (
    <section id="sobre" className="border-b border-line py-24 md:py-32">
      <div className="container-nx grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionLabel num="05">Quem constrói</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Uma empresa de engenharia, não uma agência genérica.
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            A Nexio não compete por preço. Entregamos sistemas robustos,
            escaláveis e com infraestrutura profissional — com a seriedade de
            quem assume o roadmap junto do cliente.
          </p>
        </div>

        <div className="grid gap-6 md:col-span-7 md:grid-cols-2">
          {site.founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 80}>
              <div className="flex h-full flex-col rounded-xl border border-line bg-surface-2/50 p-7">
                {f.image ? (
                  <Image
                    src={f.image}
                    alt={f.name}
                    width={56}
                    height={56}
                    style={{ objectPosition: f.imagePosition ?? "center" }}
                    className="h-14 w-14 rounded-full border border-line-strong object-cover"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line-strong font-mono text-sm text-accent">
                    {f.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {f.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {f.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.bio}</p>
                {f.whatsapp && (
                  <a
                    href={`https://wa.me/${f.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-4 font-mono text-xs text-accent hover:underline"
                  >
                    WhatsApp ↗
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
