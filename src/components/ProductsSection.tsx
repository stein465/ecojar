import Image from "next/image";
import { products, formatPrice } from "@/data/products";
import { whatsappLink } from "@/data/site";

export default function ProductsSection() {
  return (
    <section id="produtos" className="bg-wine py-16 md:py-24 overflow-hidden scroll-mt-[98px]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-10 md:mb-14 text-center md:text-left">
        {/* Sobretítulo só no mobile, conforme Figma (160:519). */}
        <p className="md:hidden font-sans text-white/70 text-sm tracking-wide mb-2">
          Os mais desejados
        </p>
        <h2 className="font-sans font-bold text-blush text-4xl md:text-5xl">
          Para seu <em>ritual</em>
        </h2>
      </div>

      {/* Carrossel horizontal com scroll-snap. Cards estreitos mostram vários de
          uma vez e o último fica cortado, sinalizando que há rolagem. */}
      <div className="relative mx-auto max-w-7xl">
        <ul className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-5 md:px-8 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {products.map((product) => (
            <li
              key={product.id}
              className="snap-start shrink-0 w-[78vw] sm:w-[48vw] md:w-[300px] lg:w-[320px]"
            >
              <article className="relative flex flex-col overflow-hidden rounded-3xl bg-white">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={product.image}
                    fill
                    className="object-cover"
                    sizes="(min-width:768px) 320px, (min-width:640px) 48vw, 78vw"
                    alt={product.name}
                  />

                  {/* Desktop — barra inferior translúcida com nome + preço sobre a foto. */}
                  <div className="hidden md:flex absolute inset-x-0 bottom-0 items-center justify-between gap-3 bg-ink/55 px-4 py-3">
                    <span className="font-sans text-white text-sm leading-tight">
                      {product.name}
                    </span>
                    <span className="font-sans text-white text-sm whitespace-nowrap">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                </div>

                {/* Mobile — bloco branco abaixo da foto: nome, preço, descrição e CTA. */}
                <div className="md:hidden flex flex-col gap-3 px-4 pt-3 pb-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-sans text-ink text-base font-medium leading-tight">
                      {product.name}
                    </span>
                    <span className="shrink-0 rounded-full border border-wine/40 px-2.5 py-0.5 font-sans text-wine text-sm whitespace-nowrap">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  {product.description && (
                    <p className="font-sans text-slate text-sm leading-snug">
                      {product.description}
                    </p>
                  )}

                  {/* TODO: virar add-to-cart na fase e-commerce. Por ora, abre o WhatsApp. */}
                  <a
                    href={whatsappLink(
                      `Olá! Tenho interesse no produto "${product.name}". Pode me ajudar?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center justify-center rounded-full bg-wine text-white font-sans text-sm py-3 transition-colors hover:bg-wine/90 focus-visible:outline-2 focus-visible:outline-wine focus-visible:outline-offset-2"
                  >
                    Eu quero!
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* Fade na borda direita — reforça que há mais para rolar. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-2 w-12 md:w-24 bg-gradient-to-l from-wine to-transparent"
        />
      </div>
    </section>
  );
}
