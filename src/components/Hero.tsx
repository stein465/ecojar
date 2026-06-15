import Image from "next/image";
import { whatsappLink } from "@/data/site";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-blush px-5 md:px-8 py-14 lg:py-20"
    >
      {/* Decorativo — palavra vertical gigante alinhada à altura da seção (lg+). Gloock. */}
      {/* TODO: Yasmim confirmar grafia: "visceral" (padrão) ou "vísceral" (estilizada). */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none hidden lg:flex absolute inset-y-0 right-0 w-[230px] xl:w-[270px] items-center justify-center overflow-hidden"
      >
        <span className="-rotate-90 font-display text-ink/[0.08] text-[11rem] xl:text-[12.5rem] leading-none tracking-[-0.05em] whitespace-nowrap">
          visceral
        </span>
      </span>

      <div className="relative mx-auto max-w-7xl flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
        {/* Coluna de texto */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          {/* Monograma à esquerda do título, alinhados no topo (conforme Figma). */}
          <div className="flex items-start gap-6 lg:gap-16">
            <Image
              src="/brand/monograma-hero.svg"
              width={58}
              height={101}
              alt=""
              aria-hidden="true"
              className="hidden lg:block shrink-0 lg:h-24 w-auto"
            />
            <h1 className="font-sans font-bold text-wine text-4xl lg:text-5xl leading-none">
              A natureza em sua forma mais profunda
            </h1>
          </div>

          <p className="font-sans text-wine text-2xl lg:text-[2rem] leading-snug">
            Cosmética botânica de alta performance
          </p>

          <p className="font-sans text-slate text-base leading-relaxed max-w-[483px]">
            A mesma força que pulsa na seiva das plantas, devolvida à sua pele.
            Estudamos os fluxos vitais da natureza e os transmutamos em cuidado
            para a pele madura. Ativos vegetais que penetram além da superfície.
            Beleza real que vem de dentro.
          </p>

          <div className="pt-1">
            <a
              href={whatsappLink(
                "Olá! Vim pelo site da ECOJAR e quero conhecer os produtos."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-wine text-white font-sans text-lg min-h-[54px] px-9 transition-colors hover:bg-wine/90 focus-visible:outline-2 focus-visible:outline-wine focus-visible:outline-offset-2"
            >
              Compre no Whatsapp
            </a>
          </div>
        </div>

        {/* Coluna de imagem */}
        <div className="lg:w-1/2">
          {/* Foto com fundo removido (rembg) — o frasco flutua sobre o blush da seção. */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/hero-foto-sem-fundo.png"
              fill
              className="object-contain"
              sizes="(min-width:1024px) 50vw, 100vw"
              priority
              alt="Frasco rosé com tag da Ecojar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
