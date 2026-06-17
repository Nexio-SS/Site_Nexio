import Image from "next/image";

/** Marca "N" da Nexio — SVG autoral, sólido (sem glow). */
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
        <linearGradient id="nexio-n" x1="4" y1="26" x2="28" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0A4DE0" />
          <stop offset="1" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="7" stroke="url(#nexio-n)" strokeOpacity="0.5" />
      <path
        d="M9 23V9l14 14V9"
        stroke="url(#nexio-n)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
