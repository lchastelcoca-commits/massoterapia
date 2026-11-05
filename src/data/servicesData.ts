import { Service, Professional, Testimonial } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_spa_massage_1793900519103.jpg';
export const MASSAGE_IMAGE = '/src/assets/images/massage_treatment_1793900533139.jpg';
export const EPILATION_IMAGE = '/src/assets/images/epilation_aesthetic_1793900533369.jpg';
export const STUDIO_IMAGE = '/src/assets/images/studio_reception_1793900549489.jpg';

export const SERVICES_DATA: Service[] = [
  // --- MASSOTERAPIA ---
  {
    id: 'massagem-relaxante-aroma',
    name: 'Massagem Relaxante com Aromaterapia',
    category: 'massoterapia',
    tagline: 'Desconexão e alívio das tensões cotidianas com óleos essenciais puros.',
    price: 140,
    priceFormatted: 'R$ 140,00',
    durationMinutes: 50,
    durationFormatted: '50 min',
    description: 'Manobras suaves e contínuas que atuam no sistema nervoso parassimpático, reduzindo o estresse, a ansiedade e relaxando as fibras musculares.',
    benefits: [
      'Alívio imediato do estresse e agitação mental',
      'Óleos essenciais orgânicos de Lavanda e Laranja Doce',
      'Estimulação suave da oxigenação tecidual'
    ],
    recommendedFor: 'Tensão do dia a dia, insônia, cansaço físico e sobrecarga emocional.',
    preparationNote: 'Recomendamos chegar 10 minutos antes e vir com roupas confortáveis.',
    image: MASSAGE_IMAGE,
    popular: true
  },
  {
    id: 'massagem-terapeutica-miofascial',
    name: 'Massagem Terapêutica & Liberação Miofascial',
    category: 'massoterapia',
    tagline: 'Foco técnico em nós de tensão, contraturas e dores musculares crônicas.',
    price: 165,
    priceFormatted: 'R$ 165,00',
    durationMinutes: 60,
    durationFormatted: '60 min',
    description: 'Trabalho profundo na fáscia muscular com digito-pressão e alongamentos passivos para desfazer pontos-gatilho na coluna, escápulas e lombar.',
    benefits: [
      'Desativação de pontos-gatilho (trigger points)',
      'Aumento da amplitude de movimento articular',
      'Alívio duradouro de dores posturais e cervicais'
    ],
    recommendedFor: 'Dores nas costas, má postura no computador, praticantes de atividades físicas.',
    preparationNote: 'Evite refeições pesadas até 1h antes da sessão.',
    image: MASSAGE_IMAGE
  },
  {
    id: 'massagem-pedras-quentes',
    name: 'Massagem com Pedras Quentes Vulcânicas',
    category: 'massoterapia',
    tagline: 'Termoterapia com pedras basálticas aquecidas e óleos botânicos.',
    price: 185,
    priceFormatted: 'R$ 185,00',
    durationMinutes: 75,
    durationFormatted: '75 min',
    description: 'O calor suave penetra profundamente nos tecidos musculares, proporcionando relaxamento térmico sem necessidade de pressão excessiva.',
    benefits: [
      'Profunda dilatação vascular e melhora circulatória',
      'Acalma o sistema nervoso central de forma profunda',
      'Experiência sensorial com pedras de basalto natural'
    ],
    recommendedFor: 'Rigidez muscular, dias frios, estresse acumulado e cansaço generalizado.',
    image: MASSAGE_IMAGE,
    popular: true
  },
  {
    id: 'drenagem-linfatica-manual',
    name: 'Drenagem Linfática Manual Corporal',
    category: 'massoterapia',
    tagline: 'Estímulo suave do sistema linfático para redução de edemas e inchaço.',
    price: 150,
    priceFormatted: 'R$ 150,00',
    durationMinutes: 50,
    durationFormatted: '50 min',
    description: 'Pressões leves, rítmicas e direcionadas aos gânglios linfáticos para acelerar a eliminação de líquidos retidos e toxinas corporais.',
    benefits: [
      'Sensação imediata de pernas leves e desinchadas',
      'Melhora da microcirculação periférica',
      'Auxilia no pós-operatório e retenção hídrica hormonal'
    ],
    recommendedFor: 'Retenção de líquidos, sensação de peso nas pernas, TPM e pós-viagem.',
    image: MASSAGE_IMAGE
  },
  {
    id: 'reflexologia-podal',
    name: 'Reflexologia Podal Revitalizante',
    category: 'massoterapia',
    tagline: 'Massagem focada em pontos reflexos dos pés com escalda-pés prévio.',
    price: 95,
    priceFormatted: 'R$ 95,00',
    durationMinutes: 40,
    durationFormatted: '40 min',
    description: 'Inicia com um banho de ervas e sais nos pés, seguido de estímulo preciso nas zonas reflexas que equilibram todo o organismo.',
    benefits: [
      'Escalda-pés aromático com sais de Epsom incluso',
      'Alívio do peso nos pés e calcanhares',
      'Harmonização holística das energias corporais'
    ],
    recommendedFor: 'Profissionais que passam muito tempo em pé, fascite plantar, cansaço.',
    image: MASSAGE_IMAGE
  },

  // --- EPILAÇÃO ---
  {
    id: 'epilacao-virilha-completa',
    name: 'Epilação Virilha Completa (Cera Calmante)',
    category: 'epilacao',
    tagline: 'Cera morna hipoalergênica enriquecida com própolis e camomila.',
    price: 85,
    priceFormatted: 'R$ 85,00',
    durationMinutes: 35,
    durationFormatted: '35 min',
    description: 'Remoção total ou com faixa desejada utilizando método descartável individual com cera à base de resinas naturais e extrato de calêndula.',
    benefits: [
      'Material 100% descartável certificado pela Anvisa',
      'Cera com temperatura corporal agradável, não queima',
      'Finalização com gel termoprotetor e calmante dérmico'
    ],
    recommendedFor: 'Pele sensível que busca durabilidade de 20 a 30 dias sem foliculite.',
    preparationNote: 'Pelos com no mínimo 5mm de comprimento. Evite esfoliar 2 dias antes.',
    image: EPILATION_IMAGE,
    popular: true
  },
  {
    id: 'epilacao-perna-inteira',
    name: 'Epilação Perna Inteira com Toque Acetinado',
    category: 'epilacao',
    tagline: 'Pernas macias e livres de pelos com hidratação pós-procedimento.',
    price: 95,
    priceFormatted: 'R$ 95,00',
    durationMinutes: 45,
    durationFormatted: '45 min',
    description: 'Aplicação com sistema roll-on descartável de alta precisão e cera de mel com camomila, garantindo remoção rápida da raiz.',
    benefits: [
      'Remoção uniforme da coxa ao tornozelo',
      'Loção pós-epilatória restauradora da barreira cutânea',
      'Toque aveludado sem irritação'
    ],
    recommendedFor: 'Quem deseja praticidade e semanas sem preocupação com lâminas.',
    image: EPILATION_IMAGE
  },
  {
    id: 'epilacao-meia-perna',
    name: 'Epilação Meia Perna (Joelho aos Pés)',
    category: 'epilacao',
    tagline: 'Cuidado ágil e preciso com fórmula calmante para pernas.',
    price: 60,
    priceFormatted: 'R$ 60,00',
    durationMinutes: 30,
    durationFormatted: '30 min',
    description: 'Ideal para manutenção regular do comprimento do joelho até o peito do pé com acabamento suave e cera elástica.',
    benefits: [
      'Procedimento rápido e confortável',
      'Retardador botânico do crescimento do pelo',
      'Descarte obrigatório de espátula e cera'
    ],
    recommendedFor: 'Manutenção periódica para o dia a dia.',
    image: EPILATION_IMAGE
  },
  {
    id: 'epilacao-axilas-suave',
    name: 'Epilação de Axilas com Cera Suave',
    category: 'epilacao',
    tagline: 'Procedimento delicado para axilas claras e macias.',
    price: 45,
    priceFormatted: 'R$ 45,00',
    durationMinutes: 20,
    durationFormatted: '20 min',
    description: 'Método indolor adaptado para a área sensível das axilas, prevenindo escurecimento provocado por lâminas e atrito.',
    benefits: [
      'Previne o escurecimento natural da região',
      'Cera vegetal que arranca pela raiz sem quebrar',
      'Aplicação de tônico calmante sem álcool'
    ],
    recommendedFor: 'Substituição definitiva da lâmina para evitar foliculite.',
    image: EPILATION_IMAGE,
    popular: true
  },
  {
    id: 'design-sobrancelhas-epilacao-facial',
    name: 'Design de Sobrancelhas + Epilação com Linha',
    category: 'epilacao',
    tagline: 'Alinhamento visagista das sobrancelhas e epilação egípcia.',
    price: 65,
    priceFormatted: 'R$ 65,00',
    durationMinutes: 35,
    durationFormatted: '35 min',
    description: 'Mapeamento facial personalizado de acordo com seus traços naturais com remoção dos fios através da técnica milenar de linha 100% algodão.',
    benefits: [
      'Hipoalergênico e não agride a elastina da pálpebra',
      'Desenho sob medida para a simetria do seu rosto',
      'Retira até a penugem mais fina e imperceptível'
    ],
    recommendedFor: 'Rosto harmônico, pele fina e alérgica a ceras químicas.',
    image: EPILATION_IMAGE
  },
  {
    id: 'epilacao-masculina-dorsal',
    name: 'Epilação Masculina Costas & Ombros',
    category: 'epilacao',
    tagline: 'Cera de alta aderência formulada para pelos masculinos densos.',
    price: 90,
    priceFormatted: 'R$ 90,00',
    durationMinutes: 40,
    durationFormatted: '40 min',
    description: 'Tratamento específico para as costas e ombros com cera verde emoliente, reduzindo o desconforto e prevenindo pelos encravados.',
    benefits: [
      'Excelente durabilidade (até 4 semanas limpo)',
      'Finalização com spray antisséptico refrescante',
      'Total privacidade e conforto em cabine individual'
    ],
    recommendedFor: 'Homens que praticam esportes, natação ou sentem desconforto com pelos.',
    image: EPILATION_IMAGE
  },

  // --- COMBOS ---
  {
    id: 'combo-serena',
    name: 'Combo Serena: Massagem Relaxante + Epilação Axilas & Meia Perna',
    category: 'combos',
    tagline: 'O ritual completo de autocuidado para corpo leve e pele impecável.',
    price: 220,
    priceFormatted: 'R$ 220,00',
    durationMinutes: 90,
    durationFormatted: '1h 30 min',
    description: 'Começamos com a epilação delicada e finalizamos com a massagem relaxante aromática para você sair do estúdio renovada.',
    benefits: [
      'Economia de R$ 25 em relação aos serviços individuais',
      'Mesma cabine privativa sem correria',
      'Chá herbal de boas-vindas incluso'
    ],
    recommendedFor: 'Quem quer resolver tudo em uma única visita sem pagar adiantado.',
    image: HERO_IMAGE,
    popular: true
  },
  {
    id: 'combo-glow-total',
    name: 'Combo Glow: Drenagem Linfática + Epilação Virilha Completa',
    category: 'combos',
    tagline: 'Redução de retenção de líquidos com o conforto da virilha lisinha.',
    price: 215,
    priceFormatted: 'R$ 215,00',
    durationMinutes: 80,
    durationFormatted: '1h 20 min',
    description: 'Combinação perfeita para pré-viagem ou renovação periódica. Primeiro a higiene e suavidade da epilação, seguida da drenagem desintoxicante.',
    benefits: [
      'Economia de R$ 20 no pacote',
      'Atendimento contínuo e acolhedor',
      'Ideal antes de fins de semana na praia ou eventos'
    ],
    recommendedFor: 'Pré-viagem, preparação para eventos ou dia da noiva express.',
    image: HERO_IMAGE
  },
  {
    id: 'combo-harmonia-termica',
    name: 'Combo Harmonia: Pedras Quentes + Reflexologia Podal',
    category: 'combos',
    tagline: 'Imersão profunda de relaxamento dos pés à cabeça.',
    price: 255,
    priceFormatted: 'R$ 255,00',
    durationMinutes: 110,
    durationFormatted: '1h 50 min',
    description: 'O melhor das terapias manuais integradas: escalda-pés com ervas, reflexologia completa e a sessão profunda de pedras vulcânicas aquecidas.',
    benefits: [
      'Experiência sensorial máxima antiestresse',
      'Óleos essenciais nobres de vetiver, cedro e bergamota',
      'Pausa revigorante inesquecível'
    ],
    recommendedFor: 'Presente para si mesmo(a) ou alívio de estresse intenso.',
    image: HERO_IMAGE
  }
];

export const PROFESSIONALS_DATA: Professional[] = [
  {
    id: 'dra-helena-moura',
    name: 'Dra. Helena Moura',
    role: 'Fisioterapeuta & Massoterapeuta Clínica',
    specialties: ['Massagem Terapêutica', 'Liberação Miofascial', 'Drenagem Linfática'],
    bio: 'Especialista em reabilitação miofascial e terapias corporais com mais de 8 anos de prática clínica. Foco em alívio de dores posturais e relaxamento terapêutico.',
    experienceYears: 8,
    rating: 4.98,
    reviewsCount: 142,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face'
  },
  {
    id: 'beatriz-vasconcellos',
    name: 'Beatriz Vasconcellos',
    role: 'Esteticista & Especialista em Epilação Suave',
    specialties: ['Epilação com Cera Morna', 'Design Visagista', 'Cuidados Pós-Epilatórios'],
    bio: 'Certificada internacionalmente em epilação hipoalergênica e visagismo facial. Apaixonada por técnicas que respeitam a sensibilidade da pele e minimizam o desconforto.',
    experienceYears: 6,
    rating: 4.96,
    reviewsCount: 188,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face'
  },
  {
    id: 'sofia-lins',
    name: 'Sofia Lins',
    role: 'Terapeuta Holística & Aromaterapeuta',
    specialties: ['Pedras Quentes', 'Aromaterapia Clínica', 'Reflexologia Podal'],
    bio: 'Formada em terapias integrativas com pós-graduação em Aromaterapia. Cria rituais personalizados de relaxamento que restauram o equilíbrio físico e mental.',
    experienceYears: 5,
    rating: 4.95,
    reviewsCount: 115,
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&h=300&fit=crop&crop=face'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'dep-1',
    name: 'Mariana Duarte',
    serviceUsed: 'Massagem com Pedras Quentes',
    rating: 5,
    date: 'Há 3 dias',
    comment: 'A experiência foi impecável do início ao fim! A cabine é super silenciosa, cheiro maravilhoso de lavanda e a Dra. Helena conseguiu tirar todas as contraturas do meu pescoço. Amei que não precisei pagar nada adiantado, agendei em 1 minuto e paguei no cartão lá.',
    city: 'São Paulo, SP'
  },
  {
    id: 'dep-2',
    name: 'Camila Fagundes',
    serviceUsed: 'Epilação Virilha Completa & Meia Perna',
    rating: 5,
    date: 'Semana passada',
    comment: 'Tenho a pele hiper sensível e costumava ter foliculite com cera comum. A técnica da Beatriz com a cera de camomila foi mágica, quase indolor e não ficou vermelho. O agendamento pelo site é muito rápido.',
    city: 'São Paulo, SP'
  },
  {
    id: 'dep-3',
    name: 'Renato Siqueira',
    serviceUsed: 'Massagem Terapêutica Miofascial',
    rating: 5,
    date: 'Há 2 semanas',
    comment: 'Trabalho muito tempo sentado em home office e estava com a lombar travada. Saí da sessão renovado. A transparência de preços no site sem pegadinha de cobrança antecipada me passou muita confiança.',
    city: 'São Paulo, SP'
  }
];

export const AVAILABLE_TIME_SLOTS = [
  '08:30',
  '09:30',
  '10:45',
  '11:45',
  '13:30',
  '14:45',
  '16:00',
  '17:15',
  '18:30',
  '19:30'
];

export const FAQ_DATA = [
  {
    question: 'Preciso pagar algum valor agora para agendar?',
    answer: 'Não! O agendamento é 100% gratuito pela internet. O valor do serviço é pago exclusivamente no estúdio no dia e horário do seu atendimento, após o procedimento. Aceitamos PIX, cartões de débito, crédito e dinheiro.'
  },
  {
    question: 'E se eu precisar desmarcar ou reagendar?',
    answer: 'Você pode cancelar ou reagendar sem nenhuma multa ou taxa! Apenas pedimos a gentileza de avisar com pelo menos 2 horas de antecedência pelo nosso WhatsApp ou pelo botão de Meus Agendamentos no site, para que possamos liberar a vaga para outro cliente.'
  },
  {
    question: 'Como devo me preparar para a sessão de epilação?',
    answer: 'Para que a cera agarre com perfeição pela raiz, os pelos devem ter cerca de 4 a 5 milímetros (aproximadamente 2 semanas sem raspar com lâmina). Recomendamos vir com roupas leves e soltas de algodão e evitar esfoliar a pele no mesmo dia.'
  },
  {
    question: 'Grávidas podem fazer massagem relaxante ou drenagem?',
    answer: 'Sim, a partir do terceiro mês de gestação (12 semanas). Nossas profissionais adaptam o posicionamento lateral com almofadas especiais e realizam manobras suaves específicas para gestantes. No formulário de agendamento há um campo para nos avisar!'
  },
  {
    question: 'Os materiais e ceras são descartáveis?',
    answer: 'Sim, seguimos as normas mais rigorosas da Anvisa. Toda cera utilizada é descartada imediatamente em lixo infectante na frente do cliente, lençóis são descartáveis e todas as pinças e espátulas passam por higienização e esterilização química/autoclave.'
  },
  {
    question: 'Posso agendar mais de um serviço no mesmo dia?',
    answer: 'Com certeza! Você pode optar por um dos nossos Combos Especiais com desconto ou nos enviar uma mensagem no WhatsApp para agendarmos múltiplos serviços em sequência na mesma visita.'
  }
];
