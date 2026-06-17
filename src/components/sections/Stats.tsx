import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/lib/content";

/** Destaca símbolos (+, %) em dourado e mantém os dígitos em branco — estilo conexte. */
function StatValue({ value }: { value: string }) {
  const parts = value.match(/[+%]|[\d.]+/g) ?? [value];
  return (
    <span className="font-display text-5xl font-bold tracking-tight lg:text-6xl">
      {parts.map((p, i) =>
        /[+%]/.test(p) ? (
          <span key={i} className="text-[var(--color-gold)]">
            {p}
          </span>
        ) : (
          <span key={i} className="text-fg">
            {p}
          </span>
        ),
      )}
    </span>
  );
}

export function Stats() {
  return (
    <section className="border-b border-line">
      <div className="container-nx grid grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 60}>
            <div className="py-12 md:py-14">
              <StatValue value={s.value} />
              <div className="mt-3 text-sm text-muted">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
