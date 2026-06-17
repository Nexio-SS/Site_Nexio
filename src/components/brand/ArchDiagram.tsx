/**
 * Diagrama de arquitetura autoral (SVG) — usado no hero/infra.
 * Representa o fluxo CDN → App → Dados sobre AWS, sem ícones de banco genéricos.
 */
export function ArchDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      className={className}
      role="img"
      aria-label="Diagrama de arquitetura: CDN, aplicação e dados sobre AWS"
    >
      <defs>
        <linearGradient id="ad-stroke" x1="0" y1="0" x2="420" y2="340" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0A4DE0" />
          <stop offset="1" stopColor="#60A5FA" />
        </linearGradient>
      </defs>

      {/* conexões */}
      <g stroke="url(#ad-stroke)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.7">
        <path d="M210 70 V120" />
        <path d="M210 184 V214" />
        <path d="M120 250 H300" />
      </g>

      {/* nó: usuário / CDN */}
      <g>
        <rect x="150" y="28" width="120" height="42" rx="8" fill="#0c1322" stroke="#60A5FA" strokeOpacity="0.5" />
        <text x="210" y="54" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontFamily="monospace">
          CloudFront
        </text>
      </g>

      {/* nó: app */}
      <g>
        <rect x="130" y="120" width="160" height="64" rx="10" fill="#0c1322" stroke="url(#ad-stroke)" />
        <text x="210" y="148" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontFamily="monospace">
          Next.js App
        </text>
        <text x="210" y="167" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="monospace">
          SSR · SSG · API
        </text>
      </g>

      {/* nós inferiores */}
      <g>
        <rect x="60" y="214" width="120" height="42" rx="8" fill="#0c1322" stroke="#60A5FA" strokeOpacity="0.5" />
        <text x="120" y="240" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontFamily="monospace">
          Lambda
        </text>
      </g>
      <g>
        <rect x="240" y="214" width="120" height="42" rx="8" fill="#0c1322" stroke="#60A5FA" strokeOpacity="0.5" />
        <text x="300" y="240" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontFamily="monospace">
          Database
        </text>
      </g>

      {/* base AWS */}
      <g>
        <rect x="40" y="288" width="340" height="36" rx="8" fill="#0A4DE0" fillOpacity="0.08" stroke="#0A4DE0" strokeOpacity="0.4" />
        <text x="210" y="311" textAnchor="middle" fill="#60A5FA" fontSize="12" fontFamily="monospace" letterSpacing="2">
          AWS · S3 · ROUTE 53 · SES
        </text>
      </g>
    </svg>
  );
}
