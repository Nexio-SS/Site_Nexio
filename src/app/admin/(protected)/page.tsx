import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import { Wordmark } from "@/components/brand/LogoN";
import { logout } from "../actions";

export const metadata: Metadata = { title: "Painel · Leads", robots: { index: false } };

// Sempre dinâmico — lê o banco a cada acesso.
export const dynamic = "force-dynamic";

function fmtDate(d: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

export default async function AdminPage() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  const today = new Date();
  const last7 = leads.filter(
    (l) => today.getTime() - l.createdAt.getTime() < 7 * 864e5,
  ).length;

  return (
    <main className="min-h-screen bg-bg">
      <header className="border-b border-line">
        <div className="container-nx flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Wordmark />
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              / leads
            </span>
          </div>
          <form action={logout}>
            <button className="text-sm text-muted transition-colors hover:text-fg">
              Sair
            </button>
          </form>
        </div>
      </header>

      <div className="container-nx py-10">
        <div className="mb-8 flex flex-wrap items-end gap-8">
          <div>
            <div className="font-mono text-3xl font-bold">{leads.length}</div>
            <div className="text-sm text-muted">leads no total</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-bold text-accent">{last7}</div>
            <div className="text-sm text-muted">nos últimos 7 dias</div>
          </div>
        </div>

        {leads.length === 0 ? (
          <p className="rounded-xl border border-line bg-surface-2/40 p-10 text-center text-muted">
            Nenhum lead ainda. Os envios do formulário de contato aparecem aqui.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-line">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-line bg-surface-2/60 text-left font-mono text-[11px] uppercase tracking-wider text-muted">
                  <th className="px-4 py-3 font-medium">Data</th>
                  <th className="px-4 py-3 font-medium">Nome</th>
                  <th className="px-4 py-3 font-medium">Empresa</th>
                  <th className="px-4 py-3 font-medium">WhatsApp</th>
                  <th className="px-4 py-3 font-medium">Tipo</th>
                  <th className="px-4 py-3 font-medium">Orçamento</th>
                  <th className="px-4 py-3 font-medium">Descrição</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr
                    key={l.id}
                    className="border-b border-line align-top last:border-b-0 hover:bg-surface/30"
                  >
                    <td className="whitespace-nowrap px-4 py-4 font-mono text-xs text-muted">
                      {fmtDate(l.createdAt)}
                    </td>
                    <td className="px-4 py-4 font-medium">{l.name}</td>
                    <td className="px-4 py-4 text-muted">{l.company ?? "—"}</td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <a
                        href={`https://wa.me/${l.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        {l.whatsapp}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="rounded border border-line px-2 py-1 font-mono text-[11px] text-muted">
                        {l.projectType}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-muted">
                      {l.budgetRange ?? "—"}
                    </td>
                    <td className="max-w-md px-4 py-4 text-muted">{l.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
