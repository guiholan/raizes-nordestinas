export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tradições", href: "#tradicoes" },
  { label: "Agenda", href: "#agenda" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
] as const;

export const HERO = {
  eyebrow: "Grupo de Tradições Folclóricas",
  title: "Raízes Nordestinas",
  subtitle:
    "Dança, memória e resistência: levamos os folguedos do Nordeste brasileiro para palcos, praças e festivais, mantendo viva a cultura popular a cada apresentação.",
  ctaPrimary: "Assistir vídeo",
  ctaSecondary: "Conhecer o grupo",
  video: { src: "/videos/video-destaque.mp4", alt: "Apresentação do grupo Raízes Nordestinas" },
};

export const DIFERENCIAIS = [
  {
    title: "Resgate cultural",
    text: "Pesquisamos a origem de cada folguedo e mantemos viva a tradição oral, os passos e os cantos transmitidos entre gerações de mestres populares.",
    image: "/images/evento-candid.jpg",
  },
  {
    title: "Figurinos autênticos",
    text: "Cada traje é confeccionado à mão, respeitando cores, tecidos e adornos originais de cada dança — do bordado ao capacete de fitas.",
    image: "/images/fitas-capacete.jpg",
  },
  {
    title: "Para todas as idades",
    text: "Crianças, jovens e adultos dividem o mesmo palco e o mesmo propósito: manter a cultura nordestina viva para as próximas gerações.",
    image: "/images/danca-salao-casal.jpg",
  },
] as const;

export const VIDEO_DESTAQUE = {
  title: "Veja o grupo em ação",
  text: "Um cortejo de cores, ritmo e memória — assista a um trecho de uma de nossas apresentações.",
  image: "/images/cortejo-mesa.jpg",
  video: { src: "/videos/video-destaque.mp4", alt: "Apresentação do grupo Raízes Nordestinas" },
};

export type TradicaoItem = {
  nome: string;
  descricao: string;
  image: string;
  confirmar?: boolean;
};

export const TRADICOES_TABS: {
  key: string;
  label: string;
  items: TradicaoItem[];
}[] = [
  {
    key: "folguedos",
    label: "Folguedos",
    items: [
      {
        nome: "Maracatu",
        descricao:
          "Cortejo afro-brasileiro de cor e batuque, marcado pela caixa, pelos adereços dourados e pela força das mestras de bateria.",
        image: "/images/maracatu-caixa.jpg",
      },
      {
        nome: "Quadrilha Junina",
        descricao:
          "Marcações e mudanças de par em homenagem às festas de São João, com trajes caipiras coloridos e muita animação.",
        image: "/images/quadrilha-verde-amarelo.jpg",
      },
      {
        nome: "Reisado",
        descricao:
          "Cortejo devocional que reencena a Jornada dos Reis Magos, com mesa, cantos de louvor e presentes simbólicos.",
        image: "/images/cortejo-mesa.jpg",
      },
      {
        nome: "Coco de Roda",
        descricao:
          "Dança de roda ao som de palmas e pandeiro, com a peneira como símbolo do trabalho no campo nordestino.",
        image: "/images/peneira-noturna.jpg",
      },
      {
        nome: "Pastoril",
        descricao:
          "Auto natalino que reencena a chegada dos pastores ao presépio, com pastoras em trajes claros e o mestre-pastor à frente do cortejo.",
        image: "/images/pastoril-casal.jpg",
      },
      {
        nome: "Cordão de Fitas",
        descricao:
          "Coreografia em cortejo com capacetes ornamentados e fitas coloridas em movimento — nome do folguedo a confirmar com o grupo.",
        image: "/images/fitas-capacete.jpg",
        confirmar: true,
      },
    ],
  },
  {
    key: "salao",
    label: "Danças de Salão",
    items: [
      {
        nome: "Dança de Salão",
        descricao:
          "Par afinado em passos de salão ao ar livre, com figurino clássico em branco e vermelho — apresentação especial do repertório do grupo.",
        image: "/images/danca-salao-casal.jpg",
      },
    ],
  },
];

export type AgendaRow = {
  data: string;
  local: string;
  horario: string;
};

// [DADOS A CONFIRMAR COM O GRUPO]
export const AGENDA: AgendaRow[] = [
  { data: "[DATA A CONFIRMAR]", local: "[LOCAL A CONFIRMAR]", horario: "[HORÁRIO A CONFIRMAR]" },
  { data: "[DATA A CONFIRMAR]", local: "[LOCAL A CONFIRMAR]", horario: "[HORÁRIO A CONFIRMAR]" },
  { data: "[DATA A CONFIRMAR]", local: "[LOCAL A CONFIRMAR]", horario: "[HORÁRIO A CONFIRMAR]" },
];

export const GALLERY_PHOTO = {
  src: "/images/grupo-palco-premiacao.jpg",
  alt: "Grupo completo do Raízes Nordestinas em trajes de gala no palco",
};

export const FOOTER = {
  endereco: "[ENDEREÇO A CONFIRMAR]",
  telefone: "[TELEFONE A CONFIRMAR]",
  email: "[E-MAIL A CONFIRMAR]",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  linkColumns: [
    {
      title: "Grupo",
      links: [
        { label: "Sobre", href: "#sobre" },
        { label: "Tradições", href: "#tradicoes" },
        { label: "Agenda", href: "#agenda" },
      ],
    },
    {
      title: "Explorar",
      links: [
        { label: "Galeria", href: "#galeria" },
        { label: "Contato", href: "#contato" },
      ],
    },
  ],
};
