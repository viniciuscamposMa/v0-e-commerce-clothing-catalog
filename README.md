# STYLO - Catálogo de Roupas

Um catálogo de roupas moderno construído com Next.js, shadcn/ui e TailwindCSS.

## Tecnologias

- **Frontend**: Next.js 15, React 19, TailwindCSS v4
- **UI Components**: shadcn/ui
- **Database**: PostgreSQL (pronto para Docker)
- **Deploy**: Vercel

## Categorias

- Camisas
- Shorts
- Chinelos
- Tênis

## Rodando Localmente

### 1. Instalar dependências

\`\`\`bash
npm install
# ou
pnpm install
\`\`\`

### 2. Rodar o PostgreSQL com Docker

\`\`\`bash
docker-compose up -d
\`\`\`

Isso irá:
- Criar um container PostgreSQL na porta 5432
- Criar o banco de dados `stylo_catalog`
- Executar os scripts de criação de tabelas e seed

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env.local`:

\`\`\`env
DATABASE_URL=postgresql://stylo_user:stylo_password@localhost:5432/stylo_catalog
\`\`\`

### 4. Rodar o projeto

\`\`\`bash
npm run dev
\`\`\`

Acesse [http://localhost:3000](http://localhost:3000)

## Deploy na Vercel

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente:
   - `DATABASE_URL`: URL do seu PostgreSQL em produção (ex: Neon, Supabase, Railway)
3. Deploy!

## Estrutura do Projeto

\`\`\`
├── app/
│   ├── api/
│   │   └── products/       # API Routes
│   ├── categoria/[slug]/   # Páginas de categoria
│   ├── produto/[id]/       # Página de produto
│   └── page.tsx            # Homepage
├── components/
│   ├── ui/                 # shadcn components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── product-card.tsx
│   └── ...
├── lib/
│   └── data.ts             # Dados mockados e helpers
├── scripts/
│   ├── 001-create-tables.sql
│   └── 002-seed-data.sql
├── docker-compose.yml
└── Dockerfile.postgres
\`\`\`

## Conectando ao PostgreSQL Real

Para usar o PostgreSQL em produção, instale o pacote:

\`\`\`bash
npm install @neondatabase/serverless
# ou para Supabase
npm install @supabase/supabase-js
\`\`\`

E atualize as API routes para buscar dados do banco.
\`\`\`
