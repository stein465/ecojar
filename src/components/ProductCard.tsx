import Image from "next/image";
import { formatPrice, type Product } from "@/data/products";
import { whatsappLink } from "@/data/site";

// Card de produto compartilhado entre o carrossel da home e o catálogo.
// Desktop: imagem com barra translúcida (nome + preço). Mobile: bloco branco
// com nome, preço, descrição e CTA de WhatsApp. Fiel ao Figma (nó 9:435).
export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-3xl bg-white">
      <div className="relative aspect-[3/4]">
        <Image
          src={product.image}
          fill
          className="object-cover"
          sizes="(min-width:1024px) 320px, (min-width:768px) 33vw, (min-width:640px) 48vw, 78vw"
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
  );
}
