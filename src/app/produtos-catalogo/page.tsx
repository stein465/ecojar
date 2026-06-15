import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Catálogo · Ecojar",
  description:
    "A coleção completa da Ecojar — cosmética botânica de alta performance para a pele madura.",
};

export default async function CatalogoPage() {
  const products = await getProducts();

  return (
    <>
      <Header />
      <main className="bg-blush">
        <section className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20">
          {/* Cabeçalho da página */}
          <div className="mb-10 max-w-2xl md:mb-14">
            <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-slate">
              Catálogo
            </p>
            <h1 className="font-sans text-4xl font-bold leading-tight text-wine md:text-5xl">
              Todos os nossos <em>rituais</em>
            </h1>
            <p className="mt-4 font-sans text-base leading-relaxed text-slate md:text-lg">
              A coleção completa da Ecojar — ativos botânicos de alta
              performance, formulados para a pele madura.
            </p>
          </div>

          {/* Grid de produtos */}
          <ul className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
