import {
  BedDouble,
  CalendarCheck,
  Coffee,
  Handshake,
  MapPin,
  MessageCircle,
  Route,
  Sparkles,
  Users,
  Wifi,
  Waves,
} from "lucide-react"

export const groupsWhatsappMessage =
  "Olá! Estou organizando um grupo para Paraty e gostaria de consultar hospedagem na Pousada Aquino Mar."

export const groupsWhatsappHref = `https://wa.me/5524998280363?text=${encodeURIComponent(groupsWhatsappMessage)}`

export const proofItems = [
  { title: "Atendimento direto ao organizador", icon: MessageCircle },
  { title: "Acomodações para diferentes perfis", icon: BedDouble },
  { title: "Café da manhã", icon: Coffee },
  { title: "Localização em Paraty", icon: MapPin },
]

export const processSteps = [
  {
    title: "Conte sobre seu grupo",
    description: "Data, período e quantidade aproximada de viajantes.",
    icon: Users,
  },
  {
    title: "Montamos a melhor configuração",
    description:
      "Nossa equipe verifica disponibilidade e combinações possíveis de acomodação.",
    icon: BedDouble,
  },
  {
    title: "Alinhamos diretamente com você",
    description:
      "Centralizamos as informações da hospedagem com o responsável pela excursão.",
    icon: Handshake,
  },
  {
    title: "O grupo chega a Paraty",
    description: "Com a hospedagem previamente alinhada.",
    icon: CalendarCheck,
  },
]

export const groupAccommodationFeatures = [
  "Acomodações para diferentes perfis",
  "Organização conforme disponibilidade",
  "Atendimento direto ao responsável",
  "Café da manhã",
  "Cotação personalizada",
]

export const profileTags = [
  "Casais",
  "Famílias",
  "Amigos",
  "Excursões",
  "Grupos organizados",
]

export const groupAmenities = [
  {
    title: "Café da manhã",
    description:
      "Mais praticidade para o grupo começar o dia antes de sair para conhecer Paraty.",
    icon: Coffee,
  },
  {
    title: "Wi-Fi",
    description:
      "Conforto essencial para organizadores, guias e hóspedes durante a estadia.",
    icon: Wifi,
  },
  {
    title: "Piscina",
    description:
      "Um espaço de descanso para aproveitar entre um roteiro e outro.",
    icon: Waves,
  },
  {
    title: "Atendimento direto",
    description:
      "Converse com a equipe da pousada para alinhar disponibilidade e necessidades da viagem.",
    icon: Handshake,
  },
]

export const paratyGroupRoutes = [
  {
    title: "Centro Histórico",
    image: "/images/passeio/centro-historico.avif",
    alt: "Rua de pedra com casarões coloniais no Centro Histórico de Paraty",
    text: "Roteiros culturais, gastronomia e caminhadas pelas ruas históricas.",
  },
  {
    title: "Passeios de barco",
    image: "/images/galeria/passeio-1.webp",
    alt: "Passeio de barco em Paraty com mar e montanhas ao fundo",
    text: "Experiências náuticas para complementar a viagem do grupo.",
  },
  {
    title: "Praias",
    image: "/images/passeio/praia-do-pontal.avif",
    alt: "Praia do Pontal em Paraty com barcos e montanhas ao fundo",
    text: "Dias leves na orla e em cenários clássicos da região.",
  },
  {
    title: "Cachoeiras",
    image: "/images/passeio/cachoeira-toboga.avif",
    alt: "Cachoeira do Tobogã cercada por mata e pedras em Paraty",
    text: "Contato com natureza para grupos que buscam roteiros ao ar livre.",
  },
  {
    title: "Cultura local",
    image: "/images/passeio/praia-do-cais.avif",
    alt: "Barcos coloridos na Praia do Cais em Paraty",
    text: "Uma base para viver Paraty com calma, história e paisagens.",
  },
]

export const partnershipBenefits = [
  {
    title: "Atendimento direto",
    description: "Centralize as informações da hospedagem com nossa equipe.",
    icon: MessageCircle,
  },
  {
    title: "Cotação personalizada",
    description:
      "Consulte disponibilidade e condições para o período do seu grupo.",
    icon: Sparkles,
  },
  {
    title: "Organização antecipada",
    description: "Alinhe as acomodações antes da chegada.",
    icon: CalendarCheck,
  },
  {
    title: "Relacionamento para novas viagens",
    description:
      "Se Paraty faz parte dos seus roteiros, podemos continuar essa conversa em outras datas.",
    icon: Route,
  },
]

export const groupFaqs = [
  {
    question: "Vocês recebem grupos e caravanas?",
    answer:
      "Sim. A Pousada Aquino Mar atende organizadores de grupos, excursões e caravanas. Consulte nossa equipe para verificar disponibilidade e condições para sua data.",
  },
  {
    question: "Como solicito uma cotação para meu grupo?",
    answer:
      "Fale diretamente pelo WhatsApp informando período, quantidade aproximada de viajantes e perfil do grupo. A equipe retorna com as possibilidades disponíveis.",
  },
  {
    question: "Como funciona a distribuição dos hóspedes?",
    answer:
      "A distribuição é avaliada conforme composição do grupo, categorias de acomodação disponíveis e período da viagem. Nossa equipe orienta o responsável durante a cotação.",
  },
  {
    question: "É possível reservar várias acomodações na mesma viagem?",
    answer:
      "Sim, mediante disponibilidade. Consulte nossa equipe para confirmar as condições para sua data.",
  },
  {
    question: "O café da manhã está incluído?",
    answer:
      "Sim. O café da manhã faz parte da experiência da pousada. Para grupos, consulte nossa equipe sobre horários e organização conforme o período da viagem.",
  },
  {
    question: "Vocês atendem agências e empresas de turismo?",
    answer:
      "Sim. O atendimento é feito diretamente com o responsável pela viagem, agência, empresa de turismo ou organizador da caravana.",
  },
  {
    question: "Como funciona o check-in de grupos?",
    answer:
      "O alinhamento é feito previamente com a equipe da pousada para orientar a chegada. Consulte nossa equipe para confirmar as condições para sua data.",
  },
  {
    question: "Posso consultar disponibilidade para datas futuras?",
    answer:
      "Pode. Informe a data desejada e a composição aproximada do grupo para que a equipe verifique as possibilidades.",
  },
  {
    question: "Como alinhar necessidades específicas da excursão?",
    answer:
      "Envie as necessidades pelo WhatsApp durante a cotação. A equipe confirma o que pode ser organizado para o período solicitado.",
  },
  {
    question: "Como falar diretamente com a pousada?",
    answer:
      "Use o WhatsApp da Pousada Aquino Mar para conversar com a equipe e solicitar a cotação do grupo.",
  },
]
