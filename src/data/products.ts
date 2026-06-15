import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
};

const reader = createReader(process.cwd(), keystaticConfig);

// Normaliza o valor do campo de imagem do Keystatic para um caminho público.
function toPublicPath(image: string | null): string {
  if (!image) return "";
  return image.startsWith("/") ? image : `/produtos/${image}`;
}

// Fonte da verdade dos produtos = CMS (Keystatic), lido no momento do build.
// Ordena por `order` para preservar a sequência definida no painel.
export async function getProducts(): Promise<Product[]> {
  const entries = await reader.collections.produtos.all();

  return entries
    .map(({ slug, entry }) => ({
      order: entry.order ?? 0,
      product: {
        id: slug,
        name: entry.name,
        price: entry.price ?? 0,
        image: toPublicPath(entry.image),
        description:
          entry.description && entry.description.trim()
            ? entry.description.trim()
            : undefined,
      } satisfies Product,
    }))
    .sort((a, b) => a.order - b.order)
    .map(({ product }) => product);
}

// "R$ 55" — moeda pt-BR sem centavos.
export function formatPrice(n: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(n);
}
