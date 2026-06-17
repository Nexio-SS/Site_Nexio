import Link from "next/link";
import { Wordmark } from "@/components/brand/LogoN";
import { services, site } from "@/lib/content";

export function Footer() {
  const year = 2026; // estático para SSG estável

  return (
    <footer className="mt-auto border-t border-line bg-surface-2">
      <div className="container-nx grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {site.description}
          </p>
          <p className="mt-4 font-mono text-xs text-muted">
            {site.city} · {site.hours}
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Serviços
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href="/servicos" className="text-muted hover:text-fg">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Contato
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="text-muted hover:text-fg">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-fg"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <Link href="/contato" className="text-muted hover:text-fg">
                Falar com especialista
              </Link>
            </li>
            <li className="flex items-center gap-4 pt-2">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Nexio"
                className="text-muted hover:text-fg"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Nexio"
                className="text-muted hover:text-fg"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.76-1.95C20.6 8.69 22 10.6 22 14.06V21h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-nx flex flex-col items-start justify-between gap-2 py-6 font-mono text-xs text-muted md:flex-row md:items-center">
          <span>
            © {year} {site.name} · {site.tagline}
          </span>
          <span>{site.founders.map((f) => f.name).join(" & ")}</span>
        </div>
      </div>
    </footer>
  );
}
