"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand/LogoN";

/**
 * Animação de abertura: logo aparece + faixa azul varre, depois some e revela o site.
 * Toca uma vez por sessão e é pulada sob prefers-reduced-motion.
 */
export function IntroLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    if (sessionStorage.getItem("nexio-intro-seen")) return;

    sessionStorage.setItem("nexio-intro-seen", "1");
    setShow(true);
    const t = setTimeout(() => setShow(false), 1700);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div
      className="intro-overlay fixed inset-0 z-[100] flex items-center justify-center bg-bg"
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center gap-5">
        <div className="intro-logo">
          <Wordmark size={128} priority />
        </div>
        <div className="h-px w-40 overflow-hidden bg-line">
          <div className="intro-sweep h-full w-full bg-primary" />
        </div>
      </div>
    </div>
  );
}
