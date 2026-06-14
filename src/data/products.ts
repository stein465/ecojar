export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
};

// Fonte da verdade: carrossel "Para seu ritual" do Figma (nó 9:435).
// ⚠️ Descrições de Vela, Creme hidratante e Kit não constam no Figma lido —
// mantidas as anteriores até a Yasmim confirmar. Máscara vegetal sem descrição.
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
    // id/imagem mantidos para não quebrar o asset; rótulo veio do Figma ("Kit hidratação").
    id: "kit-reparacao",
    name: "Kit hidratação",
    price: 210,
    image: "/produtos/produto-kit-reparacao.png",
    description: "Máscara vegetal, creme reparador e creme balsâmico",
  },
  {
    id: "creme-reparador",
    name: "Creme reparador",
    price: 85,
    image: "/produtos/produto-creme-reparador.png",
    description: "Andiroba & cera de abelha",
  },
  {
    id: "serum-facial",
    name: "Sérum facial",
    price: 90,
    image: "/produtos/produto-serum-facial.png",
    description: "Hibisco & Jatropha",
  },
  {
    id: "creme-balsamico",
    name: "Creme balsâmico",
    price: 110,
    image: "/produtos/produto-creme-balsamico.png",
    description: "Aloe Vera & Copaíba",
  },
  {
    id: "mascara-vegetal",
    name: "Máscara vegetal",
    price: 90,
    image: "/produtos/produto-mascara-vegetal.png",
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
