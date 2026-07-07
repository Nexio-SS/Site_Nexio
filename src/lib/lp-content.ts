/**
 * Conteúdo da Landing Page de tráfego pago (/lp).
 * Funil de conversão inspirado na estrutura de LP de ads:
 * hero → prova social → captura → resultados → quem somos → método →
 * serviços → planos → garantia → FAQ.
 *
 * Textos honestos, sem número inventado. Ajustar cases/prova conforme real.
 */

export const lp = {
  // ── Hero ──────────────────────────────────────────────────────────
  hero: {
    eyebrow: "Software sob medida · IA · AWS",
    title: "O processo manual que trava sua empresa vira",
    titleAccent: "um sistema que trabalha por você",
    subtitle:
      "Sites, sistemas de gestão, aplicativos e automações com IA — da ideia ao ar, com engenharia de produção e infraestrutura profissional na AWS. Sem template genérico, sem gambiarra.",
    cta: "Quero meu diagnóstico gratuito",
    microProof: "Resposta em até 1 dia útil · sem compromisso · seus dados seguros",
  },

  // ── Ticker de prova social ────────────────────────────────────────
  ticker: [
    "+40 projetos entregues",
    "+25 clientes atendidos",
    "6 anos de mercado",
    "99,9% de uptime em produção",
    "Next.js · AWS · IA aplicada",
  ],

  // ── Faixa de urgência / escassez honesta ──────────────────────────
  urgency:
    "Atendemos poucos projetos por mês para manter o padrão de qualidade. Garanta seu diagnóstico enquanto há vaga na agenda.",

  // ── Captura de lead (coluna esquerda) ─────────────────────────────
  capture: {
    title: "Receba um diagnóstico gratuito do seu projeto",
    subtitle:
      "Preencha o formulário e um especialista analisa o seu caso — sem robô, sem enrolação.",
    steps: [
      {
        n: "01",
        title: "Preencha em 30 segundos",
        desc: "Só o essencial. Seus dados ficam seguros e não viram spam.",
      },
      {
        n: "02",
        title: "Diagnóstico gratuito",
        desc: "A gente analisa o seu problema de negócio e mostra o caminho técnico.",
      },
      {
        n: "03",
        title: "Proposta sob medida",
        desc: "Escopo, prazo e investimento claros. Você decide sem pressão.",
      },
    ],
  },

  // ── Quem somos ────────────────────────────────────────────────────
  about: {
    title: "Um parceiro técnico, não um freelancer sumido",
    body: "A Nexio é uma software house da Baixada Santista que constrói software de produção — não script feito às pressas. Cuidamos do código, da infraestrutura na AWS e da evolução do seu produto, para que você foque no que faz o seu negócio crescer. Cada projeto tem arquitetura própria, documentação e ownership do roadmap.",
    pillars: [
      "Código de produção, testado e documentado",
      "Infraestrutura profissional na AWS",
      "Acompanhamento próximo, do diagnóstico ao pós-entrega",
    ],
  },

  // ── O Método Nexio ────────────────────────────────────────────────
  method: {
    title: "Existe um método por trás de cada entrega",
    subtitle:
      "Nada de começar a codar no escuro. Seguimos um processo que reduz risco e entrega no prazo.",
    steps: [
      {
        n: "01",
        title: "Diagnóstico",
        desc: "Entendemos o problema de negócio antes de escrever qualquer linha de código.",
      },
      {
        n: "02",
        title: "Arquitetura",
        desc: "Desenhamos a solução sob medida: escopo, stack, prazo e orçamento fechados.",
      },
      {
        n: "03",
        title: "Construção",
        desc: "Código de produção, em ciclos, com você acompanhando a evolução de perto.",
      },
      {
        n: "04",
        title: "No ar & evolução",
        desc: "Deploy na AWS, monitoramento, suporte e melhoria contínua depois da entrega.",
      },
    ],
  },

  // ── Planos / modelos de trabalho ──────────────────────────────────
  plans: {
    title: "Modelos de trabalho que se adaptam ao seu momento",
    subtitle:
      "Sem pacote engessado. Escolhemos juntos o formato certo para o seu projeto.",
    items: [
      {
        name: "Projeto fechado",
        for: "Ideal para sites e sistemas com objetivo claro.",
        desc: "Escopo definido, preço e prazo fixos. Você sabe exatamente o que recebe e quando.",
        bullets: ["Escopo e prazo fechados", "Preço fixo", "Entrega com documentação"],
        highlight: false,
      },
      {
        name: "Sob medida",
        for: "Para produtos do zero: SaaS, app ou plataforma.",
        desc: "Descoberta + construção por fases. Evoluímos com base em uso real e feedback.",
        bullets: ["Descoberta de produto", "Build por fases", "Roadmap compartilhado"],
        highlight: true,
      },
      {
        name: "Parceria contínua",
        for: "Para quem já tem produto e quer evoluir sempre.",
        desc: "Um time dedicado para manter, escalar e evoluir o seu produto mês a mês.",
        bullets: ["Squad dedicado", "Sprints mensais", "Suporte e evolução"],
        highlight: false,
      },
    ],
  },

  // ── Garantia / time exclusivo ─────────────────────────────────────
  guarantee: {
    title: "Um time de produto inteiro, sem folha de pagamento",
    body: "Engenharia, design e produto sob demanda. Você recebe a estrutura de uma equipe de tecnologia sem o custo de contratar, treinar e reter — sem CLT, sem rotatividade, sem RH. Você cuida do negócio; a gente cuida da tecnologia.",
    cta: "Falar com um especialista",
  },

  // ── FAQ ───────────────────────────────────────────────────────────
  faq: [
    {
      q: "Quanto custa?",
      a: "Depende do escopo — por isso o diagnóstico é gratuito. Você recebe uma proposta com preço e prazo claros antes de qualquer compromisso.",
    },
    {
      q: "Quanto tempo leva?",
      a: "Um site fica pronto em semanas; sistemas, apps e SaaS variam conforme o escopo. Definimos um prazo real na proposta e cumprimos.",
    },
    {
      q: "Vocês atendem meu segmento ou minha cidade?",
      a: "Trabalhamos remoto para todo o Brasil e presencial na Baixada Santista. Atendemos qualquer segmento — do comércio local ao produto digital.",
    },
    {
      q: "E se eu já tenho um site ou sistema?",
      a: "A gente melhora, integra ou reconstrói o que já existe. Nem sempre é preciso começar do zero — o diagnóstico aponta o melhor caminho.",
    },
    {
      q: "Vocês somem depois de entregar?",
      a: "Não. Entregamos com documentação e oferecemos suporte e evolução contínuos. A entrega é o começo da parceria, não o fim.",
    },
    {
      q: "Minha ideia e meus dados ficam seguros?",
      a: "Sim. Código, dados e propriedade intelectual são seus. Trabalhamos com sigilo do primeiro contato à entrega.",
    },
  ],

  // Tipos de necessidade no formulário da LP (mapeia para projectType do Lead)
  needs: [
    "Site institucional / landing page",
    "Sistema de gestão (ERP/CRM/painel)",
    "Aplicativo mobile",
    "SaaS / produto digital",
    "Automação com IA",
    "Ainda não sei, quero orientação",
  ] as const,
} as const;
