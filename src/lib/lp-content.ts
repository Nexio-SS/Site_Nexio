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
    eyebrow: "Tudo sob medida · do código ao cliente",
    title: "A tecnologia do seu negócio e o tráfego que traz cliente —",
    titleAccent: "tudo num só parceiro",
    subtitle:
      "Sites, softwares, apps, SaaS, agentes e automações com IA feitos sob medida — mais tráfego pago pra colocar sua marca na frente de quem está pronto pra comprar. A Nexio constrói e também traz resultado.",
    cta: "Quero meu diagnóstico gratuito",
    microProof: "Resposta em até 1 dia útil · sem compromisso · seus dados seguros",
  },

  // ── Ticker de prova social — soluções Nexio + prova ───────────────
  ticker: [
    "Tráfego pago que traz cliente",
    "Sites & landing pages de alta conversão",
    "Softwares e sistemas sob medida",
    "Aplicativos mobile iOS & Android",
    "SaaS do zero ao lançamento",
    "Agentes e automações com IA",
    "Tudo feito sob medida pro seu negócio",
    "+40 projetos entregues",
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
    title: "Um parceiro de tecnologia, não um freelancer sumido",
    body: "A Nexio é uma software house da Baixada Santista que faz tudo sob medida: do site ao sistema, dos apps às automações e agentes com IA — e ainda cuida do tráfego pago que traz cliente. Você não precisa de uma agência pra anunciar e outra empresa pra desenvolver: a gente constrói a tecnologia e traz o resultado, num só lugar.",
    pillars: [
      "Construção e captação sob o mesmo teto",
      "Tudo personalizado — nada de template ou solução de prateleira",
      "Acompanhamento próximo, do diagnóstico ao pós-entrega",
    ],
  },

  // ── O que fazemos (serviços da LP) ────────────────────────────────
  services: [
    {
      num: "01",
      title: "Tráfego pago",
      short:
        "Campanhas no Meta e no Google que colocam seu negócio na frente de quem está pronto pra comprar.",
    },
    {
      num: "02",
      title: "Sites & landing pages",
      short:
        "Páginas rápidas, sob medida e focadas em conversão — como esta que você está vendo agora.",
    },
    {
      num: "03",
      title: "Softwares & sistemas",
      short:
        "Software sob medida pro seu processo: ERPs, CRMs, painéis e portais. Nada de prateleira.",
    },
    {
      num: "04",
      title: "Aplicativos",
      short:
        "Apps mobile iOS e Android e PWAs com experiência fluida em qualquer dispositivo.",
    },
    {
      num: "05",
      title: "SaaS",
      short:
        "Seu serviço virando produto digital recorrente: multitenancy, planos e assinatura.",
    },
    {
      num: "06",
      title: "IA & automações",
      short:
        "Agentes de IA e automações sob medida que atendem, qualificam leads e eliminam o trabalho manual do seu negócio.",
    },
  ],

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
        title: "Deploy",
        desc: "Publicação na AWS com monitoramento, segurança e ambiente de produção.",
      },
      {
        n: "05",
        title: "Evolução",
        desc: "Suporte contínuo e melhorias com base em uso real depois da entrega.",
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
    title: "Um time inteiro de tecnologia e marketing, sem folha de pagamento",
    body: "Engenharia, design, produto e tráfego pago sob demanda. Você recebe a estrutura de uma equipe completa sem o custo de contratar, treinar e reter — sem CLT, sem rotatividade, sem RH. Você cuida do negócio; a gente cuida da tecnologia e da captação.",
    cta: "Falar com um especialista",
  },

  // ── FAQ ───────────────────────────────────────────────────────────
  faq: [
    {
      q: "Quanto custa?",
      a: "Depende do escopo — por isso o diagnóstico é gratuito. Você recebe uma proposta com preço e prazo claros antes de qualquer compromisso.",
    },
    {
      q: "Vocês também cuidam do tráfego pago / anúncios?",
      a: "Sim. Além de construir o site, sistema ou app, gerenciamos suas campanhas no Meta e no Google — a mesma equipe que cria a tecnologia traz o cliente.",
    },
    {
      q: "Quanto tempo leva?",
      a: "Uma landing page fica pronta em dias; sites, sistemas, apps e SaaS variam conforme o escopo. Campanhas de tráfego começam a rodar em poucos dias. Definimos um prazo real na proposta.",
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
    "Tráfego pago / gestão de anúncios",
    "Site / landing page",
    "Software ou sistema sob medida",
    "Aplicativo mobile",
    "SaaS / produto digital",
    "Agente ou automação com IA",
    "Ainda não sei, quero orientação",
  ] as const,
} as const;
