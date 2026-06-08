import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export default function Hero() {
  return (
    <section className="bg-noir px-5 md:px-8 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row lg:items-center gap-14 lg:gap-20">
        {/* Text column */}
        <div className="flex flex-col gap-6 lg:w-[45%]">
          <h1 className="font-display text-ambar text-6xl sm:text-7xl lg:text-8xl leading-none tracking-tight lowercase">
            Alquimia botânica.
          </h1>

          <p className="font-body text-rosa text-xs sm:text-sm tracking-[0.22em] uppercase">
            Beleza natural, de dentro pra fora
          </p>

          <p className="font-body text-blush text-base sm:text-lg leading-relaxed">
            Óleos e séruns botânicos que devolvem viço à pele madura — com
            a força do hibisco e fórmulas refiláveis.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
            <WhatsAppCTA size="lg" />

            <a
              href="#produtos"
              className="inline-flex items-center font-body text-ambar text-sm font-medium py-3 hover:underline decoration-ambar underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-ambar focus-visible:outline-offset-2"
            >
              Ver produtos →
            </a>
          </div>
        </div>

        {/* Image column */}
        <div className="lg:w-[55%]">
          {/* TODO: trocar por <Image> real (3 frascos em pedestais) */}
          <div className="aspect-[4/3] lg:aspect-[5/4] rounded-2xl bg-rosa/10 flex items-center justify-center">
            <span className="font-body text-rosa text-sm tracking-wide">
              imagem do produto
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
