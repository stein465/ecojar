import Image from "next/image";
import { products, formatPrice } from "@/data/products";

export default function ProductsSection() {
  return (
    <section id="produtos" className="bg-wine py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
        <h2 className="font-display text-white text-4xl md:text-5xl">
          Para seu <em>ritual</em>
        </h2>
        <p
          aria-hidden="true"
          className="font-sans text-white/70 text-sm flex items-center gap-2"
        >
          Deslize para ver mais
          <span aria-hidden="true">→</span>
        </p>
      </div>

      {/* Carrossel horizontal com scroll-snap. Cards estreitos mostram vários de
          uma vez e o último fica cortado, sinalizando que há rolagem. */}
      <div className="relative mx-auto max-w-7xl">
        <ul className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-5 md:px-8 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {products.map((product) => (
            <li
              key={product.id}
              className="snap-start shrink-0 w-[58vw] sm:w-[42vw] md:w-[300px] lg:w-[320px]"
            >
              <article className="relative rounded-3xl overflow-hidden bg-white">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={product.image}
                    fill
                    className="object-cover"
                    sizes="(min-width:768px) 320px, (min-width:640px) 42vw, 58vw"
                    alt={product.name}
                  />
                </div>

                {/* Favoritar — visual por enquanto. TODO: wishlist na fase e-commerce. */}
                <button
                  type="button"
                  aria-label={`Favoritar ${product.name}`}
                  className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 text-wine transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-wine focus-visible:outline-offset-2"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5"
                  >
                    <path
                      d="M12 20.5 4.2 13a4.5 4.5 0 0 1 6.36-6.36L12 8.08l1.44-1.44A4.5 4.5 0 1 1 19.8 13L12 20.5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Barra inferior translúcida com nome + preço. */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-ink/55 px-4 py-3">
                  <span className="font-sans text-white text-sm leading-tight">
                    {product.name}
                  </span>
                  <span className="font-sans text-white text-sm whitespace-nowrap">
                    {formatPrice(product.price)}
                  </span>
                </div>
                {/* TODO: add to cart na fase e-commerce. */}
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
