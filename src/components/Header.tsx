"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Produtos", href: "#produtos" },
  { label: "História", href: "#historia" },
  { label: "Fabricação", href: "#fabricacao" },
  { label: "Embalagem", href: "#embalagem" },
  { label: "Equipe", href: "#equipe" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  return (
    <header className="bg-sand sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between h-16 gap-4">
        {/* Wordmark */}
        <a
          href="#"
          className="font-display text-wine text-2xl leading-none rounded-sm focus-visible:outline-2 focus-visible:outline-clay focus-visible:outline-offset-2"
        >
          ecojar
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setActive(href)}
              className={[
                "font-sans text-ink text-sm transition-colors hover:text-wine rounded-sm",
                "focus-visible:outline-2 focus-visible:outline-clay focus-visible:outline-offset-2",
                active === href
                  ? "underline decoration-clay decoration-2 underline-offset-4"
                  : "",
              ].join(" ")}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <a
            href="https://wa.me/55SEUNUMERO"
            className="hidden md:inline-flex bg-clay text-white font-sans text-sm font-medium px-5 py-2 rounded-full hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
          >
            Falar no WhatsApp
          </a>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label="Abrir menu de navegação"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded focus-visible:outline-2 focus-visible:outline-clay focus-visible:outline-offset-2"
          >
            <span className="block w-5 h-0.5 bg-ink" />
            <span className="block w-5 h-0.5 bg-ink" />
            <span className="block w-5 h-0.5 bg-ink" />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-40 bg-ink/40 transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!open}
        className={[
          "fixed top-0 right-0 z-50 h-full w-72 bg-sand flex flex-col p-7 shadow-2xl",
          "transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-display text-wine text-2xl leading-none">
            ecojar
          </span>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded text-ink hover:text-wine transition-colors focus-visible:outline-2 focus-visible:outline-clay focus-visible:outline-offset-2"
          >
            <span aria-hidden="true" className="text-lg leading-none">✕</span>
          </button>
        </div>

        <nav className="flex flex-col gap-5" aria-label="Navegação mobile">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => {
                setActive(href);
                setOpen(false);
              }}
              className={[
                "font-sans text-ink text-base rounded-sm hover:text-wine transition-colors",
                "focus-visible:outline-2 focus-visible:outline-clay focus-visible:outline-offset-2",
                active === href
                  ? "underline decoration-clay decoration-2 underline-offset-4"
                  : "",
              ].join(" ")}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/55SEUNUMERO"
          className="mt-auto inline-flex justify-center bg-clay text-white font-sans text-sm font-medium px-5 py-3.5 rounded-full hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
