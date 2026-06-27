"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { portfolio } from "@/lib/content";

// Lista duplicada → loop infinito (o "salto" de volta é invisível pois o
// segundo bloco é idêntico ao primeiro).
const loopItems = [...portfolio, ...portfolio];

export function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Reset invisível: quando passa do 1º bloco, recua a largura de um bloco.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const setWidth = el.scrollWidth / 2;
      if (el.scrollLeft >= setWidth) {
        el.scrollLeft -= setWidth;
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    // Indo pra trás a partir do início: pula pro fim do 1º bloco antes.
    if (dir === -1 && el.scrollLeft <= 1) {
      el.scrollLeft += el.scrollWidth / 2;
    }
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  // Autoplay: avança sozinho, sem nunca voltar arrastando. Pausa ao interagir.
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const id = setInterval(() => scrollBy(1), 2000);
    return () => clearInterval(id);
  }, [paused, scrollBy]);

  return (
    <section id="portfolio" className="border-b border-line bg-surface py-24 md:py-32">
      <div className="container-nx">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionLabel num="04">Projetos</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Trabalhos concluídos, no ar e gerando resultado.
            </h2>
          </div>

          <div className="hidden shrink-0 gap-2 md:flex">
            <CarouselButton dir="prev" onClick={() => scrollBy(-1)} />
            <CarouselButton dir="next" onClick={() => scrollBy(1)} />
          </div>
        </div>

        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={() => setPaused(true)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          className="nx-scrollbar -mx-6 mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:mx-0 md:px-0"
        >
          {loopItems.map((c, i) => (
            <div
              key={`${c.title}-${i}`}
              className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-3rem)/3)]"
            >
              <article
                data-card
                className="flex h-full flex-col rounded-xl border border-line bg-bg p-7 transition-colors hover:border-line-strong"
              >
                <span className="w-fit rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                  {c.category}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {c.title}
                </h3>

                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      Problema
                    </dt>
                    <dd className="mt-1 text-muted">{c.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      Solução
                    </dt>
                    <dd className="mt-1 text-fg">{c.solution}</dd>
                  </div>
                </dl>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2">
                    {c.stackUsed.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-line px-2 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 border-t border-line pt-4 text-sm font-medium text-accent">
                    {c.result}
                  </p>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
                    >
                      Ver site
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  dir,
  onClick,
}: {
  dir: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Anterior" : "Próximo"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-line-strong hover:text-accent"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d={dir === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
