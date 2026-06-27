/**
 * Conteúdo centralizado do site (placeholders realistas).
 * ⚠️  SUBSTITUIR pelos dados reais da Nexio antes do lançamento:
 *     números, cases, contatos, fotos e textos finais.
 */

export const site = {
  name: "Nexio",
  tagline: "Softwares e Sistemas",
  url: "https://nexio.com.br", // TODO: domínio real
  description:
    "Parceiro técnico estratégico em desenvolvimento de software sob medida, sistemas web, aplicativos, SaaS e automações com IA — sobre infraestrutura AWS.",
  email: "contato@nexio.com.br", // TODO
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5513991563817",
  city: "São Paulo · SP", // TODO
  hours: "Seg a sex · 9h às 18h",
  social: {
    instagram: "https://www.instagram.com/nexio_site/",
    linkedin: "https://www.linkedin.com/company/nexiosistemasesoftware/",
  },
  founders: [
    {
      name: "Lucas Pinheiro",
      role: "Co-fundador · Engenharia",
      bio: "Lidera arquitetura de sistemas e infraestrutura. Foco em soluções escaláveis e código de produção.",
      image: "/team/lucas.jpg",
      imagePosition: "center",
      whatsapp: "5513991563817",
    },
    {
      name: "Cristopher Ribeiro",
      role: "Co-fundador · Produto",
      bio: "Conduz produto e experiência. Traduz problema de negócio em software que gera resultado.",
      image: "/team/cristopher.jpg",
      imagePosition: "35% 38%",
      whatsapp: "5513997519188",
    },
  ],
};

export const stats = [
  { value: "+40", label: "projetos entregues" },
  { value: "+25", label: "clientes atendidos" },
  { value: "6", label: "anos de mercado" },
  { value: "99.9%", label: "uptime em produção" },
];

export type Service = {
  slug: string;
  num: string;
  title: string;
  short: string;
  long: string;
  forWho: string;
  deliver: string[];
};

export const services: Service[] = [
  {
    slug: "sites",
    num: "01",
    title: "Sites",
    short: "Sites institucionais e landing pages de alta performance, focados em conversão e SEO.",
    long: "Sites rápidos, semânticos e otimizados para ranquear. Da identidade à entrega, sem template genérico.",
    forWho: "Empresas que precisam de presença digital séria e geração de leads.",
    deliver: ["Next.js + SSG", "SEO técnico", "Core Web Vitals 90+", "CMS opcional"],
  },
  {
    slug: "softwares",
    num: "02",
    title: "Softwares",
    short: "Software sob medida para resolver problemas que nenhuma ferramenta de prateleira resolve.",
    long: "Desenvolvimento de aplicações sob medida — do levantamento ao deploy — com código de produção e ownership do roadmap.",
    forWho: "Negócios com processos específicos que exigem solução própria.",
    deliver: ["Arquitetura sob medida", "Código testado", "Documentação", "Evolução contínua"],
  },
  {
    slug: "sistemas",
    num: "03",
    title: "Sistemas Web",
    short: "Sistemas web robustos: ERPs, CRMs, painéis e portais internos para escalar operações.",
    long: "Sistemas de gestão e operação com regras de negócio complexas, controle de acesso e relatórios.",
    forWho: "PMEs e operações que precisam centralizar e automatizar processos.",
    deliver: ["Multiusuário e permissões", "Dashboards", "Integrações", "Auditoria"],
  },
  {
    slug: "apps",
    num: "04",
    title: "Aplicativos",
    short: "Apps mobile e web responsivos com experiência fluida em qualquer dispositivo.",
    long: "Aplicativos mobile (iOS/Android) e PWAs com foco em performance e experiência do usuário.",
    forWho: "Produtos digitais que precisam estar na mão do usuário.",
    deliver: ["iOS e Android", "PWA", "Push e offline", "Publicação nas lojas"],
  },
  {
    slug: "saas",
    num: "05",
    title: "SaaS",
    short: "Transformamos seu serviço em produto digital recorrente — multitenancy, planos e assinatura.",
    long: "Arquitetura multitenancy, sistema de planos e assinaturas, onboarding automatizado, painel por tenant e infraestrutura escalável na AWS.",
    forWho: "Empresas com serviço consolidado que querem virar produto recorrente.",
    deliver: ["Multitenancy", "Planos e billing", "Onboarding automatizado", "Escala na AWS"],
  },
  {
    slug: "automacao-ia",
    num: "06",
    title: "Automações com IA",
    short: "Substituímos planilhas e tarefas manuais por automações inteligentes com IA aplicada.",
    long: "RPA e IA aplicada para eliminar trabalho repetitivo: extração de dados, atendimento, classificação e fluxos automáticos.",
    forWho: "Empresas com processos manuais buscando eficiência e redução de custo.",
    deliver: ["RPA", "IA aplicada", "Integrações via API", "Webhooks"],
  },
  {
    slug: "infra-aws",
    num: "07",
    title: "Infraestrutura AWS",
    short: "Hospedagem profissional na AWS: CDN global, deploy automatizado e alta disponibilidade.",
    long: "Arquitetura de nuvem com S3/CloudFront, deploy contínuo, DNS gerenciado, e-mail transacional e funções serverless.",
    forWho: "Quem exige performance, segurança e disponibilidade de verdade.",
    deliver: ["S3 + CloudFront", "Route 53 + SSL", "SES", "Lambda serverless"],
  },
];

export const stack = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "React",
  "PostgreSQL",
  "Python",
  "AWS",
  "Tailwind",
  "Prisma",
  "Docker",
];

export const infra = [
  {
    code: "S3 + CloudFront",
    title: "CDN global",
    desc: "Assets servidos por CDN com latência mínima e cache afinado para PageSpeed máximo.",
  },
  {
    code: "Amplify / EC2",
    title: "Deploy automático",
    desc: "Deploy via git push, ambiente de staging separado e rollback em caso de falha.",
  },
  {
    code: "Route 53 + ACM",
    title: "DNS e SSL",
    desc: "DNS gerenciado com alta disponibilidade, failover e HTTPS com renovação automática.",
  },
  {
    code: "SES",
    title: "E-mail transacional",
    desc: "Notificações de formulário e e-mails com alta entregabilidade, sem cair em spam.",
  },
  {
    code: "Lambda",
    title: "Serverless",
    desc: "Processamento de formulários e integrações sem custo de servidor fixo.",
  },
];

export type PortfolioItem = {
  title: string;
  category: string;
  problem: string;
  solution: string;
  stackUsed: string[];
  result: string;
  url?: string;
};

export const portfolio: PortfolioItem[] = [
  {
    title: "Conexte Tecnologia",
    category: "Site institucional",
    problem:
      "Empresa de infraestrutura de TI sem presença digital à altura, atendendo empresas privadas e órgãos públicos.",
    solution:
      "Site institucional sob medida com animações GSAP, identidade própria e foco em geração de contato.",
    stackUsed: ["HTML/CSS", "JavaScript", "GSAP", "Vercel"],
    result: "Presença digital profissional e canal de contato direto via WhatsApp.",
    url: "https://conexte.com.br",
  },
  {
    title: "Henrique Veículos",
    category: "Sistema Web",
    problem:
      "Revenda de veículos sem vitrine online e com estoque atualizado manualmente.",
    solution:
      "Site público em Next.js com estoque sincronizado via XML do Revenda Mais e formulários (avaliação, financiamento, consignação) direto no WhatsApp.",
    stackUsed: ["Next.js", "TypeScript", "Vercel"],
    result: "Estoque sempre atualizado automaticamente e leads chegando pelo site.",
    url: "https://henrique-veiculos.vercel.app",
  },
  {
    title: "BarberOS",
    category: "SaaS",
    problem:
      "Barbearias gerenciando agenda, equipe e clientes no caderno e no WhatsApp, sem controle financeiro.",
    solution:
      "SaaS multi-tenant com agendamento online, site próprio por barbearia, gestão de equipe, dashboard financeiro e resumo do mês com IA.",
    stackUsed: ["React", "TypeScript", "Supabase", "Stripe", "IA"],
    result: "Agenda, equipe e finanças centralizadas, com assinatura recorrente por barbearia.",
    url: "https://barberos.vercel.app",
  },
  {
    title: "Cardápio Santa Helena",
    category: "Cardápio digital",
    problem:
      "Panificadora dependia de cardápio físico, difícil de atualizar e sem acesso pelo celular do cliente.",
    solution:
      "Cardápio digital responsivo com busca, categorias, destaques e botão de pedido no WhatsApp.",
    stackUsed: ["HTML/CSS", "JavaScript", "Vercel"],
    result: "Cardápio acessível por QR Code, atualização instantânea e pedidos via WhatsApp.",
    url: "https://cardapio-santa-helena.vercel.app",
  },
];

// Opções do formulário de contato — fonte da verdade compartilhada
export const projectTypes = [
  "Site",
  "Software sob medida",
  "Sistema Web",
  "Aplicativo",
  "SaaS",
  "Automação com IA",
  "Infraestrutura AWS",
  "Outro",
] as const;

export const budgetRanges = [
  "Até R$ 10 mil",
  "R$ 10 mil – R$ 30 mil",
  "R$ 30 mil – R$ 80 mil",
  "Acima de R$ 80 mil",
  "Ainda não sei",
] as const;

export const nav = [
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/contato" },
];
