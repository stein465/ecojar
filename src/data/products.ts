export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "vela-hermetica",
    name: "Vela hermética",
    price: 55,
    image: "/produtos/produto-vela-hermetica.png",
    description: "Resina de madeira",
  },
  {
    id: "creme-hidratante",
    name: "Creme hidratante",
    price: 65,
    image: "/produtos/produto-creme-hidratante.png",
    description: "Camomila & melaleuca",
  },
  {
    id: "kit-reparacao",
    name: "Kit reparação",
    price: 210,
    image: "/produtos/produto-kit-reparacao.png",
    description: "Máscara vegetal, creme reparador e creme balsâmico",
  },
  {
    id: "creme-reparador",
    name: "Creme reparador",
    price: 65,
    image: "/produtos/produto-creme-reparador.png",
    description: "Andiroba & cera de abelha",
  },
];

// "R$ 55" — moeda pt-BR sem centavos.
export function formatPrice(n: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(n);
}
