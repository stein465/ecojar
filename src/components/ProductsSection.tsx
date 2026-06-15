import Link from "next/link";
import { getProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default async function ProductsSection() {
  const products = await getProducts();

  return (
    <section
      id="produtos"
      className="bg-wine py-16 md:py-24 overflow-hidden scroll-mt-[98px]"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="text-center md:text-left">
            {/* Sobretítulo só no mobile, conforme Figma (160:519). */}
            <p className="md:hidden font-sans text-white/70 text-sm tracking-wide mb-2">
              Os mais desejados
            </p>
            <h2 className="font-sans font-bold text-blush text-4xl md:text-5xl">
              Para seu <em>ritual</em>
            </h2>
          </div>

          {/* Link para o catálogo completo — desktop, à direita do título. */}
          <Link
            href="/produtos-catalogo"
            className="group hidden md:inline-flex items-center gap-2 whitespace-nowrap font-sans text-lg text-blush/80 transition-colors hover:text-blush focus-visible:outline-2 focus-visible:outline-blush focus-visible:outline-offset-4"
          >
            ver catálogo
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
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
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

        {/* Fade na borda direita — reforça que há mais para rolar. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-2 w-12 md:w-24 bg-gradient-to-l from-wine to-transparent"
        />
      </div>

      {/* Link para o catálogo completo — mobile, abaixo do carrossel. */}
      <div className="md:hidden mt-9 px-5 text-center">
        <Link
          href="/produtos-catalogo"
          className="group inline-flex items-center gap-2 border-b border-blush/40 pb-1 font-sans text-base text-blush transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-blush focus-visible:outline-offset-4"
        >
          ver catálogo completo
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
