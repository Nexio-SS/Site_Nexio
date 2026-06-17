import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/lib/content";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contato — fale com um especialista",
  description:
    "Conte seu projeto e receba um diagnóstico técnico da Nexio. Desenvolvimento de software, sistemas, apps, SaaS e automações com IA.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden="true" />
      <div className="container-nx relative grid gap-12 py-20 md:grid-cols-12 md:py-28">
        {/* Coluna informativa */}
        <div className="md:col-span-5">
          <SectionLabel num="—">Contato</SectionLabel>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            Vamos falar sobre o seu projeto.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Preencha o formulário com o máximo de contexto. Respondemos com um
            diagnóstico técnico e os próximos passos.
          </p>

          <dl className="mt-10 space-y-6 border-t border-line pt-8">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                E-mail
              </dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="text-fg hover:text-accent">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                WhatsApp
              </dt>
              <dd className="mt-1">
                <a
                  href={`https://wa.me/${site.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg hover:text-accent"
                >
                  Iniciar conversa
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Atendimento
              </dt>
              <dd className="mt-1 text-fg">
                {site.city} · {site.hours}
              </dd>
            </div>
          </dl>
        </div>

        {/* Formulário */}
        <div className="md:col-span-7">
          <div className="rounded-2xl border border-line bg-bg/40 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
