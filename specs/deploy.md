# Spec — Deploy do EcoJar (site estático em AWS)

> Spec leve: define O QUE e em QUE ORDEM antes de gerar código.
> É a fonte de verdade do deploy. Reusável como base pros próximos clientes.

## Objetivo
Colocar o site Next.js do EcoJar no ar como site estático, servido por
CloudFront sobre um bucket S3 privado, e automatizar o deploy via GitHub Actions.

## Fora de escopo (por enquanto)
- Domínio próprio + certificado (ACM / Route53) — fase seguinte.
- Sanity / CMS — fase seguinte (o conteúdo segue em JSON neste momento).
- Recursos dinâmicos (agendamento, API) — vão em infra separada no futuro.
- IaC (Terraform / CDK) — o primeiro deploy é manual; o template vem depois.

## Decisões já tomadas
- Hospedagem: S3 (privado) + CloudFront + OAC. Não Vercel.
- Next em modo estático: `output: 'export'`, `images.unoptimized: true` por ora.
- Auth do CI: chaves de um usuário IAM dedicado em GitHub Secrets (OIDC depois).

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

## Critérios de aceite
- [x] `npm run build` gera `out/` sem erro.
- [x] Site abre e navega na URL do CloudFront, sem link quebrado.
- [x] Push na `main` dispara o workflow e a mudança aparece no ar após a invalidação.
- [x] Bucket continua privado (sem acesso público direto).
- [x] Usuário IAM do CI não tem permissão além do necessário.
