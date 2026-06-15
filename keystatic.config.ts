import { config, fields, collection } from "@keystatic/core";

// Schema do CMS (Keystatic). O conteúdo fica versionado em content/ no próprio
// repo (modo local). O painel de edição roda em /keystatic apenas no `next dev`
// — em produção ele é excluído do build estático (ver next.config.ts).
export default config({
  storage: { kind: "local" },
  ui: {
    brand: { name: "EcoJar" },
    navigation: {
      Loja: ["produtos"],
    },
  },
  collections: {
    produtos: collection({
      label: "Produtos",
      slugField: "name",
      path: "content/produtos/*",
      format: { data: "yaml" },
      columns: ["name", "price"],
      schema: {
        name: fields.slug({
          name: {
            label: "Nome",
            validation: { isRequired: true },
          },
        }),
        price: fields.integer({
          label: "Preço (R$)",
          description: "Valor em reais, sem centavos. Ex.: 55",
          validation: { isRequired: true },
        }),
        order: fields.integer({
          label: "Ordem de exibição",
          description: "Posição no carrossel e no catálogo (1 = primeiro).",
          validation: { isRequired: true },
        }),
        image: fields.image({
          label: "Imagem",
          directory: "public/produtos",
          publicPath: "/produtos",
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: "Descrição",
          description: "Ativos / nota curta. Opcional.",
          multiline: true,
        }),
      },
    }),
  },
});
