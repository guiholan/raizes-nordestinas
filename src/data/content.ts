export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tradições", href: "#tradicoes" },
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
        nome: "Cacuriá",
        descricao:
          "Folguedo maranhense de roda, com palmas, pandeiro e versos cantados em toadas animadas — celebração popular ligada ao ciclo junino do Maranhão.",
        image: "/images/maracatu-caixa.jpg",
      },
      {
        nome: "Cana Verde",
        descricao:
          "Dança de par em quadrilha, com marcações coordenadas e trajes caipiras coloridos, celebrando as festas de São João.",
        image: "/images/quadrilha-verde-amarelo.jpg",
      },
      {
        nome: "São Gonçalo",
        descricao:
          "Dança de promessa em devoção a São Gonçalo, com cortejo em torno de uma mesa ornamentada, cantos de louvor e presentes simbólicos.",
        image: "/images/cortejo-mesa.jpg",
      },
      {
        nome: "Colheita",
        descricao:
          "Dança que celebra o trabalho no campo, com a peneira como símbolo da colheita e do dia a dia da lavoura nordestina.",
        image: "/images/peneira-noturna.jpg",
      },
      {
        nome: "Cana Verde",
        descricao:
          "Outro momento da dança de par em quadrilha, marcada pela coordenação dos passos e pelo colorido dos trajes em cena.",
        image: "/images/pastoril-casal.jpg",
      },
      {
        nome: "Boi da Paraíba",
        descricao:
          "Variante paraibana do Bumba-meu-boi, em cordão, com capacetes ornamentados e fitas coloridas em movimento contínuo.",
        image: "/images/fitas-capacete.jpg",
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

export const GALLERY_PHOTO = {
  src: "/images/grupo-palco-premiacao.jpg",
  alt: "Grupo completo do Raízes Nordestinas em trajes de gala no palco",
};

export const FOOTER = {
  telefone: "Telefone Público: (85) 98776-3640",
  email: "gruporaizesnordestinas@gmail.com",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/gtfraizesnordestinas/" },
    { label: "TikTok", href: "#" },
    { label: "YouTube", href: "https://www.youtube.com/user/GTFRaizesNordestinas" },
  ],
  linkColumns: [
    {
      title: "Grupo",
      links: [
        { label: "Sobre", href: "#sobre" },
        { label: "Tradições", href: "#tradicoes" },
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
