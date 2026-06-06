export default function Hero() {
  return (
    <section className="bg-sand px-5 md:px-8 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row lg:items-center gap-14 lg:gap-20">
        {/* Text column */}
        <div className="flex flex-col gap-6 lg:w-[45%]">
          <h1 className="font-heavy text-clay text-6xl sm:text-7xl lg:text-8xl leading-none tracking-tight lowercase">
            Alquimia botânica.
          </h1>

          <p className="font-sans text-clay text-xs sm:text-sm tracking-[0.22em] uppercase">
            Beleza natural, de dentro pra fora
          </p>

          <p className="font-sans text-ink text-base sm:text-lg leading-relaxed">
            Óleos e séruns botânicos que devolvem viço à pele madura — com
            a força do hibisco e fórmulas refiláveis.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
            <a
              href="https://wa.me/55SEUNUMERO"
              className="inline-flex items-center bg-clay text-white font-sans text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
            >
              Falar no WhatsApp
            </a>

            <a
              href="#produtos"
              className="inline-flex items-center font-sans text-wine text-sm font-medium py-3 hover:underline decoration-clay underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-clay focus-visible:outline-offset-2"
            >
              Ver produtos →
            </a>
          </div>
        </div>

        {/* Image column */}
        <div className="lg:w-[55%]">
          {/* TODO: trocar por <Image> real (3 frascos em pedestais) */}
          <div className="aspect-[4/3] lg:aspect-[5/4] rounded-2xl bg-mauve/30 flex items-center justify-center">
            <span className="font-sans text-mauve text-sm tracking-wide">
              imagem do produto
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
