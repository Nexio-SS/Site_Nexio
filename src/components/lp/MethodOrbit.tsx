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

const CYCLE_MS = 3000;

export function MethodOrbit() {
  const steps = lp.method.steps.slice(0, 5);
  const nodes = steps.map((s, i) => ({ ...s, x: POS[i][0], y: POS[i][1] }));

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % steps.length),
      CYCLE_MS,
    );
    return () => clearInterval(id);
  }, [paused, steps.length]);

  const current = nodes[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto aspect-square w-full max-w-[520px]">
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
              strokeOpacity={i === active ? 0.85 : 0.22}
              strokeWidth={i === active ? 0.55 : 0.35}
              style={{ transition: "stroke-opacity .4s, stroke-width .4s" }}
            />
          ))}

          {/* pulso de energia viajando na linha ativa */}
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
        <div className="orbit-pulse absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-accent/30 bg-[#0d1017] md:h-28 md:w-28">
          <Image
            src="/logo.png"
            alt="Nexio"
            width={80}
            height={80}
            className="h-16 w-16 md:h-[74px] md:w-[74px]"
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
              className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
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

      {/* descrição da etapa ativa */}
      <div className="mx-auto mt-4 flex min-h-[92px] max-w-md items-start justify-center">
        <p key={active} className="lp-fade text-center text-muted">
          <span className="font-mono text-sm font-bold text-accent">{current.n}</span>{" "}
          <span className="font-semibold text-fg">{current.title}</span>
          <span className="mt-1 block text-sm leading-relaxed">{current.desc}</span>
        </p>
      </div>
    </div>
  );
}
