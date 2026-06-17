import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  // Azul elétrico, sólido (sem glow)
  primary: "bg-primary text-white hover:bg-primary-600",
  secondary:
    "border border-line-strong text-fg hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-fg",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  pill = false,
  children,
  className = "",
  ...rest
}: {
  href: string;
  variant?: Variant;
  size?: keyof typeof sizes;
  pill?: boolean;
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  const radius = pill ? "rounded-full" : "rounded-md";
  return (
    <Link
      href={href}
      className={`${base} ${radius} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
