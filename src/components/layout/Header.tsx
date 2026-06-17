"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand/LogoN";
import { Button, Arrow } from "@/components/ui/Button";
import { nav } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-3 md:pt-4">
      <div className="container-nx">
        <div
          className={`flex h-14 items-center justify-between rounded-full border px-4 transition-all duration-300 md:px-6 ${
            scrolled || open
              ? "border-line-strong bg-bg/80 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl"
              : "border-line bg-bg/50 backdrop-blur-md"
          }`}
        >
          <Link href="/" aria-label="Nexio — início">
            <Wordmark priority />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/contato" variant="primary" pill>
              Fale conosco <Arrow />
            </Button>
          </div>

          <button
            className="md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-line bg-bg/95 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-base text-muted hover:bg-surface hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contato" variant="primary" pill className="mt-2 w-full">
                Fale conosco <Arrow />
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
