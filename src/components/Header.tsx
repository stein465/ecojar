"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
];

// Links de conta/carrinho — visuais por enquanto.
// TODO: ligar ao carrinho na fase e-commerce.
const ACCOUNT_LINKS = [
  { label: "Log In", href: "#" },
  { label: "Carrinho", href: "#" },
];

const cellBase =
  "flex items-center justify-center px-6 py-4 font-sans text-wine text-sm transition-colors hover:text-wine/70 focus-visible:outline-2 focus-visible:outline-wine focus-visible:outline-offset-2";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const linkClasses = (href: string) =>
    [
      cellBase,
      active === href
        ? "underline decoration-wine decoration-2 underline-offset-4"
        : "",
    ].join(" ");

  return (
    <header className="bg-blush sticky top-0 z-50">
      {/* Desktop — grid de 5 células com divisórias e borda inferior */}
      <nav
        aria-label="Navegação principal"
        className="hidden md:grid grid-cols-5 divide-x divide-wine/15 border-b border-wine/15"
      >
        <a
          href="#produtos"
          onClick={() => setActive("#produtos")}
          className={linkClasses("#produtos")}
        >
          Produtos
        </a>
        <a
          href="#sobre"
          onClick={() => setActive("#sobre")}
          className={linkClasses("#sobre")}
        >
          Sobre
        </a>
        <a
          href="#"
          aria-label="Ecojar — início"
          className="flex items-center justify-center px-6 py-3 focus-visible:outline-2 focus-visible:outline-wine focus-visible:outline-offset-2"
        >
          <Image src="/brand/logo.svg" width={124} height={37} alt="Ecojar" priority />
        </a>
        {ACCOUNT_LINKS.map(({ label, href }) => (
          <a key={label} href={href} className={cellBase}>
            {label}
          </a>
        ))}
      </nav>

      {/* Mobile — logo central + hambúrguer */}
      <div className="md:hidden flex items-center justify-between px-5 h-16 border-b border-wine/15">
        <button
          type="button"
          aria-label="Abrir menu de navegação"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
          className="w-10 h-10 -ml-2 flex flex-col justify-center items-center gap-1.5 rounded focus-visible:outline-2 focus-visible:outline-wine focus-visible:outline-offset-2"
        >
          <span aria-hidden="true" className="block w-5 h-0.5 bg-wine" />
          <span aria-hidden="true" className="block w-5 h-0.5 bg-wine" />
          <span aria-hidden="true" className="block w-5 h-0.5 bg-wine" />
        </button>

        <a
          href="#"
          aria-label="Ecojar — início"
          className="rounded focus-visible:outline-2 focus-visible:outline-wine focus-visible:outline-offset-2"
        >
          <Image src="/brand/logo.svg" width={124} height={37} alt="Ecojar" priority />
        </a>

        {/* espaçador para centralizar o logo */}
        <span aria-hidden="true" className="w-10" />
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
          "fixed top-0 left-0 z-50 h-full w-72 bg-blush flex flex-col p-7 shadow-2xl",
          "transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between mb-8">
          <Image src="/brand/logo.svg" width={124} height={37} alt="Ecojar" />
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded text-wine hover:text-wine/70 transition-colors focus-visible:outline-2 focus-visible:outline-wine focus-visible:outline-offset-2"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ✕
            </span>
          </button>
        </div>

        <nav className="flex flex-col gap-5" aria-label="Navegação mobile">
          {[...NAV_LINKS, { label: "Carrinho", href: "#" }].map(
            ({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => {
                  setActive(href);
                  setOpen(false);
                }}
                className={[
                  "font-sans text-wine text-base rounded-sm hover:text-wine/70 transition-colors",
                  "focus-visible:outline-2 focus-visible:outline-wine focus-visible:outline-offset-2",
                  active === href
                    ? "underline decoration-wine decoration-2 underline-offset-4"
                    : "",
                ].join(" ")}
              >
                {label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
