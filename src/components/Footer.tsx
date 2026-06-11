import Image from "next/image";

const FOOTER_LINKS = [
  { label: "Início", href: "#" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Endereço", href: "#endereco" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer id="contato" className="bg-blush py-14 px-5 md:px-8">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-8 text-center">
        <Image src="/brand/logo.svg" width={124} height={37} alt="Ecojar" />

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-sans text-wine text-sm transition-colors hover:text-wine/70 rounded-sm focus-visible:outline-2 focus-visible:outline-wine focus-visible:outline-offset-2"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-sans text-slate text-xs tracking-wide">
          TROÇA | Estúdio ©
        </p>
      </div>
    </footer>
  );
}
