import Image from "next/image";

const NAV_LINKS = [
  { label: "Início", href: "#" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

// Conteúdo do footer mobile do Figma (nó 158:148).
const ATIVOS = [
  "Aloe Vera",
  "Extrato de Rosa Mosqueta",
  "Ácido Hialurônico Vegetal",
  "Óleo de Jatropha",
  "Óleo de Baobá",
  "Extrato de Camomila",
  "Vitamina C Estabilizada",
  "Óleo de Copaíba",
];

// PLACEHOLDER: Igor — trocar pelos perfis reais das redes.
const SOCIAL = [
  {
    label: "Facebook",
    href: "#",
    path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.628-5.373-12-12-12s-12 5.372-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  },
  {
    label: "X",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.163c3.204 0 3.584.012 4.849.07 3.26.149 4.771 1.699 4.919 4.92.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
] as const;

function SocialIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contato" className="scroll-mt-[98px]">
      {/* ===== Desktop — layout claro (Figma 116:44) ===== */}
      <div className="hidden md:block bg-blush px-8 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-9 text-center">
          <Image
            src="/brand/logo.svg"
            width={200}
            height={59}
            alt="Ecojar"
            className="h-auto w-[180px]"
          />

          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-sans text-wine text-xl transition-colors hover:text-wine/70 rounded-sm focus-visible:outline-2 focus-visible:outline-wine focus-visible:outline-offset-2"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex w-full items-center justify-between border-t border-wine/15 pt-6">
            <p className="font-sans text-sm text-wine/70">TROÇA © 2026. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-wine transition-colors hover:text-wine/60 rounded-sm focus-visible:outline-2 focus-visible:outline-wine focus-visible:outline-offset-2"
                >
                  <SocialIcon path={s.path} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Mobile — layout rico em vinho (Figma 158:148) ===== */}
      <div className="md:hidden bg-wine text-white px-5 py-12">
        <Image
          src="/brand/logo.svg"
          width={124}
          height={37}
          alt="Ecojar"
          className="[filter:brightness(0)_invert(1)]"
        />

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-9">
          <div>
            <h3 className="font-sans uppercase tracking-[0.2em] text-xs text-white/70 mb-3">
              Fale conosco
            </h3>
            <ul className="flex flex-col gap-1.5 font-sans text-sm text-white/90">
              <li>
                <a href="mailto:contato@ecojar.com" className="hover:text-white transition-colors">
                  contato@ecojar.com
                </a>
              </li>
              <li>55 98891-0099</li>
              <li>Rua das Garças, 0106 Avaré, SP</li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              {SOCIAL.filter((s) => s.label === "Facebook" || s.label === "Instagram").map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-wine focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  <SocialIcon path={s.path} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-sans uppercase tracking-[0.2em] text-xs text-white/70 mb-3">
              Nossos ativos
            </h3>
            <ul className="flex flex-col gap-1.5 font-sans text-sm text-white/90">
              {ATIVOS.map((ativo) => (
                <li key={ativo}>{ativo}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans uppercase tracking-[0.2em] text-xs text-white/70 mb-3">
              Sobre
            </h3>
            <p className="font-sans text-sm text-white/90 leading-relaxed">
              A mesma força que pulsa na seiva das plantas, devolvida à sua pele.
            </p>
          </div>

          <div>
            <h3 className="font-sans uppercase tracking-[0.2em] text-xs text-white/70 mb-3">
              Funcionamento
            </h3>
            <ul className="flex flex-col gap-1.5 font-sans text-sm text-white/90">
              <li>Segunda à Sexta / 09h às 17h</li>
              <li>Sábado / 09h às 13h</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6">
          <span className="inline-flex items-center gap-1.5 font-sans text-sm text-white/80">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18" />
            </svg>
            Português
          </span>
          <p className="font-sans text-xs text-white/60 tracking-wide">
            TROÇA © 2026. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
