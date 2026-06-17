import { site } from "@/lib/content";

/** Barra fina no topo: e-mail à esquerda, redes sociais à direita (estilo conexte, em escuro). */
export function TopBar() {
  return (
    <div className="border-b border-line bg-surface-2">
      <div className="container-nx flex h-9 items-center justify-between font-mono text-xs text-muted">
        <a href={`mailto:${site.email}`} className="hover:text-fg">
          {site.email}
        </a>
        <div className="flex items-center gap-4">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Nexio"
            className="hover:text-fg"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
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
            className="hover:text-fg"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.76-1.95C20.6 8.69 22 10.6 22 14.06V21h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
