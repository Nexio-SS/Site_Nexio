# Nexio — Site Institucional

Landing + páginas essenciais (Serviços e Contato) da **Nexio · Softwares e Sistemas**.
Construído com Next.js (App Router), TypeScript, Tailwind CSS v4 e Prisma.

## Stack
- **Next.js 16** (App Router, Server Actions) + **React 19**
- **TypeScript** + **Tailwind CSS v4** (tokens em `src/app/globals.css`)
- **Prisma + SQLite** para os leads (portável p/ PostgreSQL/RDS na fase AWS)
- **react-hook-form + zod** (validação client e server com o mesmo schema)

## Rodando localmente
```bash
npm install
cp .env.example .env          # ajuste as variáveis
npx prisma migrate dev        # cria o banco SQLite (prisma/dev.db)
npm run dev                   # http://localhost:3000
```

## Variáveis de ambiente (`.env`)
| Variável | Descrição |
| --- | --- |
| `DATABASE_URL` | Conexão do banco. Dev: `file:./dev.db` |
| `ADMIN_PASSWORD` | Senha do painel `/admin` |
| `AUTH_SECRET` | Segredo p/ assinar o cookie de sessão (string longa/aleatória) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp para o link de follow-up (só dígitos) |

## Rotas
- `/` — landing (hero, números, serviços, stack, infra AWS, cases, sobre, CTA)
- `/servicos` — detalhe dos 7 serviços
- `/contato` — formulário funcional (grava lead no banco)
- `/admin` — painel de leads (protegido por senha) · `/admin/login`

### Painel de leads
Acesse `/admin`, faça login com `ADMIN_PASSWORD`. Os envios do formulário de
contato aparecem na tabela. O acesso é protegido por cookie httpOnly assinado.

## Conteúdo (placeholders)
Todo o conteúdo editável está em **`src/lib/content.ts`** e marcado com `TODO`
onde precisa de dados reais (domínio, e-mail, WhatsApp, números, cases, time).

## Próximas fases (do planejamento, fora do escopo atual)
Portfólio/Blog via CMS, integração SES + WhatsApp API + CRM, GA4/Clarity,
deploy AWS (S3/CloudFront, Amplify, Route 53, Lambda), painel admin completo.

## Build de produção
```bash
npm run build && npm start
```
# Site_Nexio
