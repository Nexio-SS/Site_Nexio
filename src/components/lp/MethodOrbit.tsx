"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { lp } from "@/lib/lp-content";

// Pontos numa elipse (rx 38, ry 42) ao redor do centro (50,50), viewBox 0..100
const POS: [number, number][] = [
  [50, 8],
  [86.1, 37],
  [72.3, 84],
  [27.7, 84],
  [13.9, 37],
];

const CYCLE_MS = 3200;
const PROGRESS_R = 15;
const PROGRESS_C = 2 * Math.PI * PROGRESS_R; // circunferência do anel de progresso

export function MethodOrbit() {
  const steps = lp.method.steps.slice(0, 5);
  const nodes = steps.map((s, i) => ({ ...s, x: POS[i][0], y: POS[i][1] }));

  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  // Respeita prefers-reduced-motion: sem auto-play (só clique)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Avança sozinho (reinicia o timer sempre que a etapa muda, inclusive por clique)
  useEffect(() => {
    if (reduced) return;
    const id = setTimeout(
      () => setActive((a) => (a + 1) % steps.length),
      CYCLE_MS,
    );
    return () => clearTimeout(id);
  }, [active, reduced, steps.length]);

  const current = nodes[active];
  const autoplay = !reduced;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      {/* ── Coluna 1: diagrama ─────────────────────────────────────── */}
      <div className="relative mx-auto aspect-square w-full max-w-[440px]">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          {/* anéis decorativos girando */}
          <g className="orbit-spin">
            <ellipse
              cx="50" cy="50" rx="38" ry="42"
              fill="none" stroke="var(--color-accent)"
              strokeOpacity="0.16" strokeWidth="0.3" strokeDasharray="1.5 2.5"
            />
          </g>
          <g className="orbit-spin-rev">
            <circle
              cx="50" cy="50" r="21"
              fill="none" stroke="var(--color-accent)"
              strokeOpacity="0.2" strokeWidth="0.3" strokeDasharray="0.8 3"
            />
          </g>

          {/* raios do centro até cada etapa (ativo mais forte) */}
          {nodes.map((n, i) => (
            <line
              key={`l-${n.n}`}
              x1="50" y1="50" x2={n.x} y2={n.y}
              stroke="var(--color-accent)"
              strokeOpacity={i === active ? 0.85 : 0.2}
              strokeWidth={i === active ? 0.55 : 0.35}
              style={{ transition: "stroke-opacity .4s, stroke-width .4s" }}
            />
          ))}

          {/* pulso de energia na linha ativa (só com movimento permitido) */}
          {!reduced && (
            <circle key={`pulse-${active}`} r="1.2" fill="#bfdbfe">
              <animateMotion
                dur="1.15s"
                repeatCount="indefinite"
                path={`M50,50 L${current.x},${current.y}`}
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.7;1"
                dur="1.15s"
                repeatCount="indefinite"
              />
            </circle>
          )}

          {/* trilho + anel de progresso do ciclo em volta do centro */}
          <circle
            cx="50" cy="50" r={PROGRESS_R}
            fill="none" stroke="var(--color-accent)" strokeOpacity="0.15" strokeWidth="0.8"
          />
          {autoplay && (
            <circle
              key={`prog-${active}`}
              cx="50" cy="50" r={PROGRESS_R}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="0.8"
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
              style={
                {
                  "--dash": PROGRESS_C,
                  strokeDasharray: PROGRESS_C,
                  animation: `orbit-progress ${CYCLE_MS}ms linear`,
                } as React.CSSProperties
              }
            />
          )}

          {/* nós */}
          {nodes.map((n, i) => (
            <circle
              key={`d-${n.n}`}
              cx={n.x} cy={n.y}
              r={i === active ? 1.7 : 1.1}
              fill="var(--color-accent)"
              style={{ transition: "r .4s" }}
            />
          ))}
        </svg>

        {/* centro: logo N com glow pulsante */}
        <div className="orbit-pulse absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-accent/30 bg-[#0d1017] md:h-[104px] md:w-[104px]">
          <Image
            src="/logo.png"
            alt="Nexio"
            width={80}
            height={80}
            className="h-16 w-16 md:h-[70px] md:w-[70px]"
          />
        </div>

        {/* etapas orbitando (clicáveis) */}
        {nodes.map((n, i) => {
          const on = i === active;
          return (
            <button
              key={n.n}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={on}
              aria-label={`Etapa ${n.n}: ${n.title}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <span
                className={`flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1.5 backdrop-blur transition-all duration-300 ${
                  on
                    ? "border-accent bg-primary/20 shadow-[0_0_20px_rgba(96,165,250,0.55)]"
                    : "border-line-strong bg-[#0d1017]/90 hover:border-accent/60"
                }`}
              >
                <span className={`font-mono text-xs font-bold ${on ? "text-white" : "text-accent"}`}>
                  {n.n}
                </span>
                <span className="text-xs font-semibold sm:text-sm">{n.title}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Coluna 2: card da etapa ativa ──────────────────────────── */}
      <div className="text-center lg:text-left" aria-live="polite">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Etapa {active + 1} de {steps.length}
        </p>

        <div key={active} className="lp-fade mt-3">
          <div className="flex items-baseline justify-center gap-4 lg:justify-start">
            <span className="font-display text-5xl font-bold text-[color-mix(in_srgb,var(--color-accent)_45%,transparent)] sm:text-6xl">
              {current.n}
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {current.title}
            </h3>
          </div>
          <p className="mx-auto mt-4 max-w-md text-muted lg:mx-0">{current.desc}</p>
        </div>

        {/* indicadores de etapa */}
        <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start">
          {steps.map((s, i) => (
            <button
              key={s.n}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ir para etapa ${s.n}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-accent" : "w-1.5 bg-line-strong hover:bg-accent/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
