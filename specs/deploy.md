# Spec — Deploy do EcoJar (site estático em AWS)

> Spec leve: define O QUE e em QUE ORDEM antes de gerar código.
> É a fonte de verdade do deploy. Reusável como base pros próximos clientes.

## Objetivo
Colocar o site Next.js do EcoJar no ar como site estático, servido por
CloudFront sobre um bucket S3 privado, e automatizar o deploy via GitHub Actions.

## Fora de escopo (por enquanto)
- Domínio próprio + certificado (ACM / Route53) — fase seguinte.
- CMS visual (editor): fase seguinte — roda como runtime separado (não cabe no
  `output:'export'`). O conteúdo de produtos já vem de um CMS no build (Keystatic,
  `content/produtos/*.yaml`); ver CLAUDE.md.
- Recursos dinâmicos (agendamento, API) — vão em infra separada no futuro.
- IaC (Terraform / CDK) — o primeiro deploy é manual; o template vem depois.

## Decisões já tomadas
- Hospedagem: S3 (privado) + CloudFront + OAC. Não Vercel.
- Next em modo estático: `output: 'export'`, `images.unoptimized: true` por ora.
- Auth do CI: chaves de um usuário IAM dedicado em GitHub Secrets (OIDC depois).
- **Roteamento de sub-rotas** (ex.: `/produtos-catalogo`): a origem é S3 privado via
  OAC (REST, **não** o *website endpoint*), então o CloudFront NÃO resolve
  `index.html` / `.html` automaticamente para sub-caminhos. Uma **CloudFront Function**
  (viewer request) reescreve a URI: barra final → `index.html`; caminho sem extensão →
  `+ .html`. (O `defaultRootObject` só cobre a raiz; o `next export` gera
  `produtos-catalogo.html`, não `produtos-catalogo/`.)

## Plano (tarefas)
- [x] **1.** Configurar `next.config` para static export e validar que `npm run build` gera `out/`.
- [x] **2.** Criar bucket S3 privado e subir `out/` com `aws s3 sync`.
- [x] **3.** Criar distribution CloudFront (OAC; defaultRootObject `index.html`;
  error responses 403/404 -> `/404.html`; redirect HTTP -> HTTPS).
- [x] **4.** Validar o site na URL `*.cloudfront.net`.
- [x] **5.** Criar usuário IAM dedicado, least privilege (S3 só nesse bucket + invalidação CloudFront).
- [x] **6.** Adicionar workflow GitHub Actions (`.github/workflows/deploy.yml`):
  build -> `s3 sync --delete` -> `cloudfront create-invalidation`.
- [x] **7.** Validar o deploy automático com um push de teste.
- [x] **8.** **CloudFront Function `ecojar-rewrite-uri`** (runtime `cloudfront-js-2.0`)
  criada, testada, publicada e **associada** à default behavior (viewer-request) na
  distribution `E172ZK6UD9WU33`; invalidação `/*` aplicada. Verificado no ar:
  `/index` → `/index.html` → **200** (reescrita funciona). Pendente só: `/produtos-catalogo`
  → 200, que depende do **deploy do código do catálogo** (push na `main`).

## Critérios de aceite
- [x] `npm run build` gera `out/` sem erro.
- [x] Site abre e navega na URL do CloudFront, sem link quebrado.
- [x] Push na `main` dispara o workflow e a mudança aparece no ar após a invalidação.
- [x] Bucket continua privado (sem acesso público direto).
- [x] Usuário IAM do CI não tem permissão além do necessário.
- [ ] Sub-rotas (`/produtos-catalogo`; futura `/sobre`) abrem direto com **200**,
  inclusive em refresh / deep-link, sem cair no `404.html`. Validar também a navegação
  via `next/link` depois do deploy.

## Função de rewrite (CloudFront Function)

Runtime `cloudfront-js-1.0`, evento **viewer request**, associada à *default cache
behavior* da distribution. Reescreve a URI para servir os `.html` que o `next export`
gera (a origem OAC/REST não faz resolução de índice como o *website endpoint* faria):

```js
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Raiz ou caminho terminando em "/" -> index.html
  if (uri.charAt(uri.length - 1) === '/') {
    request.uri = uri + 'index.html';
    return request;
  }

  // Último segmento sem ponto (sem extensão) -> acrescenta .html
  var lastSegment = uri.substring(uri.lastIndexOf('/') + 1);
  if (lastSegment.indexOf('.') === -1) {
    request.uri = uri + '.html';
  }

  return request;
}
```

Cobre: `/` → `/index.html`; `/produtos-catalogo` → `/produtos-catalogo.html`; assets com
extensão (`/produtos/x.png`, `/_next/.../x.js`) passam intactos. Rotas realmente
inexistentes viram um `.html` ausente → 404 → `/404.html` (como antes). Aplicação é
manual (console/CLI) — entra na IaC quando ela existir; não faz parte do workflow do CI.
