import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre · Ecojar",
  description:
    "A origem da Ecojar: cosmética botânica de alta performance, da seiva à pele.",
};

const PRINCIPIOS = [
  {
    num: "01",
    titulo: "Botânica de alta performance",
    texto:
      "Ativos vegetais concentrados que penetram além da superfície e agem onde a pele realmente se renova.",
  },
  {
    num: "02",
    titulo: "A aura que fica",
    texto:
      "Aromas, texturas e gestos que transformam o cuidado em ritual — uma presença sensorial que permanece muito além do toque.",
  },
  {
    num: "03",
    titulo: "O pote que volta",
    texto:
      "Embalagem reutilizável: você devolve, a gente reabastece. Menos resíduo, mais ritual.",
  },
];

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

// Eyebrow (Figma: Inter Semibold, tracking 2.4px @15px = 0.16em). Tamanho/cor por seção.
const eyebrow = "font-sans font-semibold uppercase tracking-[0.16em]";
// Corpo de texto sobre fundo claro = #383838 (valor do node /sobre; sem token no @theme).
const CORPO = "text-[#383838]";

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero — wine, headline Gloock 92px + "origem" 360px decorativo ===== */}
        <section className="relative overflow-hidden bg-wine px-6 md:px-8 py-18 md:py-33">
          <span
            aria-hidden="true"
            className="hidden md:block pointer-events-none select-none absolute left-[586px] top-[65px] whitespace-nowrap font-display text-[360px] leading-none text-white/[0.06]"
          >
            origem
          </span>
          <div className="relative mx-auto max-w-7xl flex flex-col gap-4 md:gap-[26px]">
            <p className={`${eyebrow} text-[13px] md:text-[15px] text-white/70`}>
              Sobre a Ecojar
            </p>
            <h1 className="font-display text-blush text-[40px] md:text-[92px] leading-[1.06] md:leading-[1.04] max-w-[900px]">
              Beleza que nasce da raiz
            </h1>
            <p className="font-sans text-white/85 text-[16px] md:text-[20px] leading-[1.5] max-w-[560px]">
              Cosmética botânica de alta performance, nascida do encontro entre
              ciência e natureza — para a pele que pede profundidade.
            </p>
          </div>
        </section>

        {/* ===== Manifesto — blush, 2 colunas (título Gloock 44 | narrativa) ===== */}
        <section className="bg-blush px-6 md:px-8 py-16 md:py-28">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-[18px] md:gap-20 md:items-start">
            <div className="flex flex-col gap-[18px] md:w-[460px] md:shrink-0">
              <p className={`${eyebrow} text-[13px] md:text-[15px] text-clay`}>
                Nossa origem
              </p>
              <h2 className="font-display text-wine text-[30px] md:text-[44px] leading-[1.12]">
                Da seiva à pele, sem atalhos
              </h2>
            </div>
            <div
              className={`flex flex-1 flex-col gap-[18px] md:gap-[22px] font-sans text-[16px] md:text-[18px] leading-[1.65] ${CORPO}`}
            >
              <p>
                A ECOJAR nasceu de uma inquietação simples: por que tão pouco do
                que a natureza oferece chega de verdade à pele? Fomos à raiz —
                literalmente. Estudamos os fluxos vitais das plantas, a força que
                pulsa na seiva, e aprendemos a transmutá-la em fórmulas que
                penetram além da superfície.
              </p>
              <p>
                Cada produto é cosmética botânica de alta performance: ativos
                vegetais concentrados, pensados para devolver vitalidade e
                firmeza, num cuidado que é quase ritual. Beleza real — a que vem
                de dentro.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Princípios — sand, 3 pilares com número Gloock 52 ===== */}
        <section className="bg-sand px-6 md:px-8 py-15 md:py-26">
          <div className="mx-auto max-w-7xl flex flex-col gap-8 md:gap-14">
            <div className="flex flex-col gap-3 md:gap-4">
              <p className={`${eyebrow} text-[13px] md:text-[15px] text-clay`}>
                Princípios
              </p>
              <h2 className="font-display text-wine text-[30px] md:text-[44px] leading-[1.1]">
                O que nos guia
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-12">
              {PRINCIPIOS.map((p) => (
                <div key={p.num} className="flex flex-col gap-2 md:gap-3">
                  <span className="font-display text-wine text-[40px] md:text-[52px] leading-none">
                    {p.num}
                  </span>
                  <h3 className="font-sans font-semibold text-wine text-[19px] md:text-[22px] leading-[1.22]">
                    {p.titulo}
                  </h3>
                  <p className={`font-sans text-[15px] md:text-[16px] leading-[1.58] ${CORPO}`}>
                    {p.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Ativos — wine, grade com filete clay ===== */}
        <section className="bg-wine px-6 md:px-8 py-15 md:py-26">
          <div className="mx-auto max-w-7xl flex flex-col gap-[34px] md:gap-13">
            <div className="flex flex-col gap-3 md:gap-4">
              <p className={`${eyebrow} text-[13px] md:text-[15px] text-white/70`}>
                Da natureza
              </p>
              <h2 className="font-display text-blush text-[30px] md:text-[44px] leading-[1.1]">
                Nossos ativos
              </h2>
            </div>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-6 md:grid-cols-4 md:gap-x-6 md:gap-y-[30px]">
              {ATIVOS.map((ativo) => (
                <li key={ativo} className="flex flex-col gap-[10px] md:gap-3">
                  <span aria-hidden="true" className="block h-0.5 w-7 bg-clay" />
                  <span className="font-sans font-medium text-blush text-[15px] md:text-[17px] leading-[1.35]">
                    {ativo}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== Citação — blush, foto do frasco (cover) + frase Gloock 38 ===== */}
        <section className="bg-blush px-6 md:px-8 py-15 md:py-28">
          <div className="mx-auto max-w-7xl flex flex-col gap-6 md:flex-row md:gap-[72px] md:items-center">
            <div className="relative w-full md:w-[520px] h-[360px] md:h-[560px] shrink-0 overflow-hidden rounded-2xl bg-sand">
              <Image
                src="/sobre-frasco.png"
                fill
                className="object-cover"
                sizes="(min-width:768px) 520px, 100vw"
                alt="Frasco da Ecojar com a tag da marca"
              />
            </div>
            <figure className="flex flex-1 flex-col gap-6">
              <blockquote className="font-display text-wine text-[26px] md:text-[38px] leading-[1.32]">
                “A mesma força que pulsa na seiva das plantas, devolvida à sua
                pele.”
              </blockquote>
              <figcaption className={`${eyebrow} text-[13px] md:text-[14px] text-clay`}>
                Ecojar · Manifesto
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ===== CTA — wine, centralizado, botão pill blush ===== */}
        <section className="bg-wine px-6 md:px-8 py-20 md:py-30">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 md:gap-[26px] text-center">
            <h2 className="font-display text-blush text-[34px] md:text-[50px] leading-[1.1] max-w-[820px]">
              Comece o seu ritual
            </h2>
            <p className="font-sans text-white/80 text-[15px] md:text-[18px] leading-[1.52] max-w-[540px]">
              Ative os fluxos vitais da sua pele com cosmética botânica de alta
              performance.
            </p>
            <Link
              href="/produtos-catalogo"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-blush text-wine font-sans font-semibold text-[16px] md:text-[17px] px-[34px] py-[16px] md:px-[38px] md:py-[17px] transition-colors hover:bg-blush/90 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              Conheça os produtos
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
