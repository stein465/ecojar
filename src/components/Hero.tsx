import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-blush px-5 md:px-8 py-16 lg:py-24">
      {/* Decorativo — palavra vertical gigante encostada na borda direita (lg+). */}
      {/* TODO: Yasmim confirmar grafia: "visceral" (padrão) ou "vísceral" (estilizada). */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 font-display text-wine/10 text-[10rem] xl:text-[13rem] leading-none"
      >
        visceral
      </span>

      <div className="relative mx-auto max-w-7xl flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
        {/* Coluna de texto */}
        <div className="flex flex-col gap-6 lg:w-[45%]">
          <Image
            src="/brand/monograma.svg"
            width={40}
            height={47}
            alt=""
            aria-hidden="true"
            className="h-10 w-auto"
          />

          <h1 className="font-display text-wine text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
            A natureza em sua forma mais profunda
          </h1>

          <p className="font-sans text-ink text-lg sm:text-xl">
            Cosmética botânica de alta performance
          </p>

          <p className="font-sans text-slate text-base leading-relaxed">
            A mesma força que pulsa na seiva das plantas, devolvida à sua pele.
            Estudamos os fluxos vitais da natureza e os transmutamos em cuidado
            para a pele madura. Ativos vegetais que penetram além da superfície.
            Beleza real que vem de dentro.
          </p>

          <div className="pt-2">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center rounded-full bg-wine text-white font-sans text-base min-h-12 px-8 transition-colors hover:bg-wine/90 focus-visible:outline-2 focus-visible:outline-wine focus-visible:outline-offset-2"
            >
              Conheça a ECOJAR
            </a>
          </div>
        </div>

        {/* Coluna de imagem */}
        <div className="lg:w-[55%]">
          {/* Sem moldura/arredondamento: o fundo da foto casa com bg-blush e funde com a home. */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/hero-foto.png"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 55vw, 100vw"
              priority
              alt="Vidro rosé com tag da Ecojar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
