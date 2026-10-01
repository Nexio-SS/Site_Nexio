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
    url: "https://barberos-pied.vercel.app",
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
  {
    title: "Clippboard",
    category: "SaaS",
    problem:
      "Personal trainers montando treino em planilha solta, cobrando aluno pelo WhatsApp e sem histórico de evolução.",
    solution:
      "Painel com alunos, planilhas de treino por divisão, agenda, avaliações físicas com gráfico de evolução e biblioteca de exercícios. O aluno acompanha o treino por um link próprio, direto no celular.",
    stackUsed: ["Next.js", "TypeScript", "Supabase", "PWA"],
    result: "Treino, agenda e evolução do aluno num lugar só, com login Google e dado na nuvem.",
    url: "https://clippboard.vercel.app",
  },
  {
    title: "AgendaSorriso",
    category: "Automação com IA",
    problem:
      "Clínicas odontológicas perdendo paciente porque a mensagem no WhatsApp fica sem resposta fora do horário.",
    solution:
      "Agente de IA no WhatsApp que responde e agenda consulta, com página de venda própria. O formulário grava o lead no CRM e, se o banco não responder, a mensagem vai pronta pro WhatsApp.",
    stackUsed: ["HTML/CSS", "JavaScript", "Supabase", "Meta Pixel"],
    result: "Nenhum lead se perde: ou cai no CRM, ou chega no WhatsApp com os dados preenchidos.",
    url: "https://agendasorriso-lp.vercel.app",
  },
  {
    title: "Pauta",
    category: "Aplicativo",
    problem:
      "Estudante do ENEM treinando redação sem correção e estudando matéria sem saber o que cai mais.",
    solution:
      "App de treino com redação corrigida nas 5 competências e questões reais das provas anteriores nas 4 áreas, com a pauta do dia e contagem até a prova.",
    stackUsed: ["Next.js", "TypeScript", "Tailwind", "IA"],
    result: "Redação e matérias no mesmo app, com evolução por competência a cada correção.",
    url: "https://pauta-enem.vercel.app",
  },
  {
    title: "Padaria Rafael Vidal",
    category: "Site + cardápio digital",
    problem:
      "Padaria com cardápio só impresso e sem um endereço na internet pra mostrar a casa.",
    solution:
      "Site institucional e cardápio digital com a identidade tirada do cardápio impresso: horários, a casa, galeria dos pratos e delivery.",
    stackUsed: ["HTML/CSS", "JavaScript", "Vercel"],
    result: "Cardápio no celular do cliente e site com horário e contato sempre à mão.",
    url: "https://padaria-vidal-site.vercel.app",
  },
  {
    title: "Clínica do Corpo",
    category: "Site institucional",
    problem:
      "Academia sem site, com horário e informações espalhados em posts do Instagram.",
    solution:
      "Site com a estrutura da academia, painel de horário que mostra se está aberto agora, selo Wellhub e TotalPass e contato direto pelo WhatsApp.",
    stackUsed: ["HTML/CSS", "JavaScript", "Vercel"],
    result: "Horário, estrutura e contato numa página que o aluno acha no Google.",
    url: "https://site-academia-clinica-do-corpo.vercel.app",
  },
  {
    title: "Poker na Praia",
    category: "Site institucional",
    problem:
      "Clube de poker que também é churrascaria e hamburgueria, com a programação só no Instagram.",
    solution:
      "Site com identidade tirada da logo: torneios, cash game, ladies poker e home game, cozinha da casa e como chegar.",
    stackUsed: ["HTML/CSS", "JavaScript", "Vercel"],
    result: "O clube e a cozinha apresentados juntos, com WhatsApp e Instagram a um toque.",
    url: "https://poker-na-praia.vercel.app",
  },
  {
    title: "Kontatus",
    category: "Site de loja",
    problem:
      "Loja de moda feminina e plus size mostrando as peças só no feed do Instagram.",
    solution:
      "Site com lookbook casual e plus size com fotos reais da loja, montador de looks e pedido pelo WhatsApp com a mensagem já escrita.",
    stackUsed: ["HTML/CSS", "JavaScript", "Vercel"],
    result: "A cliente monta o look no site e chega no WhatsApp sabendo o que quer.",
    url: "https://kontatus-three.vercel.app",
  },
  {
    title: "Strutura Ferry Boat",
    category: "Site de loja",
    problem:
      "Loja de roupas no terminal do Ferry Boat sem vitrine online para quem passa pela balsa.",
    solution:
      "Site com lookbook masculino e feminino, montador de looks, provador com manequim e mapa de como chegar com horário de hoje.",
    stackUsed: ["HTML/CSS", "JavaScript", "Vercel"],
    result: "Vitrine da loja aberta 24h, com rota até o terminal.",
    url: "https://strutura-ferryboat.vercel.app",
  },
  {
    title: "Juice 6ix",
    category: "Site + pedidos",
    problem:
      "Casa de sucos naturais sem um lugar para mostrar os sabores e receber pedido.",
    solution:
      "Site com um sabor para cada dia da semana, carrinho e pedido direto, na identidade da marca.",
    stackUsed: ["React", "TypeScript", "Vite", "Tailwind"],
    result: "Cardápio da semana com preço e pedido em poucos toques.",
    url: "https://juice-six-glow.vercel.app",
  },
  {
    title: "Joelheiras ChrisSports",
    category: "Landing page de venda",
    problem:
      "Loja precisando vender um produto específico por tráfego pago, sem página que converta.",
    solution:
      "Landing page com vídeo de abertura, benefícios do produto e checkout integrado, pensada para o clique que vem do anúncio.",
    stackUsed: ["HTML/CSS", "JavaScript", "Vercel"],
    result: "Do anúncio ao checkout numa página só.",
    url: "https://joelheiras-lp.vercel.app",
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
