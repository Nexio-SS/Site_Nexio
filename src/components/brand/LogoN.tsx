import Image from "next/image";

/**
 * Marca "N" da Nexio — SVG autoral. "N" facetado em fita 3D dobrada:
 * duas faces de azul (clara + escura) dão profundidade, sobre quadrado
 * escuro arredondado. Vetorial, nítido em qualquer tamanho, sem glow.
 */
export function LogoN({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="nx-bg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B1424" />
          <stop offset="1" stopColor="#05080F" />
        </linearGradient>
        <linearGradient id="nx-post" x1="16" y1="7" x2="16" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7DB4FF" />
          <stop offset="1" stopColor="#0A4DE0" />
        </linearGradient>
        <linearGradient id="nx-light" x1="9" y1="7" x2="22" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8EC2FF" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="nx-dark" x1="12" y1="7" x2="24" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E4FD1" />
          <stop offset="1" stopColor="#0A2A93" />
        </linearGradient>
      </defs>

      {/* Quadrado-container escuro */}
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="7"
        fill="url(#nx-bg)"
        stroke="#2A4A8F"
        strokeOpacity="0.45"
      />

      {/* Hastes verticais do N */}
      <path d="M8 7.5H11.6V24.5H8Z" fill="url(#nx-post)" />
      <path d="M20.4 7.5H24V24.5H20.4Z" fill="url(#nx-post)" />

      {/* Diagonal — fita dobrada em duas faces */}
      <path d="M9.8 7.5H11.6L24 24.5H22.2Z" fill="url(#nx-dark)" />
      <path d="M8 7.5H9.8L22.2 24.5H20.4Z" fill="url(#nx-light)" />

      {/* Brilho na quina viva da fita */}
      <path d="M8 7.5H8.7L21.1 24.5H20.4Z" fill="#BFDBFE" fillOpacity="0.4" />
    </svg>
  );
}

/** Logo oficial da Nexio (imagem) — usada no header, footer, intro e admin. */
export function Wordmark({
  size = 40,
  priority = false,
}: {
  size?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Nexio — Softwares e Sistemas"
      width={size}
      height={size}
      priority={priority}
      className="rounded-md"
    />
  );
}
