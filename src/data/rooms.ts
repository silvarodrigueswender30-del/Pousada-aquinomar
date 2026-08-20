export interface Room {
  slug: string
  name: string
  description: string
  pricePerNight: number
  images: string[]
  capacity: number
  location: string
  rating: number
  reviewCount: number
  amenitiesIncluded: string[]
  amenitiesNotIncluded: string[]
  highlights: string[]
}

export const rooms: Room[] = [
  {
    slug: "suite-vista-mar",
    name: "Suite Vista Mar",
    description:
      "Uma suite acolhedora para dias tranquilos perto do mar, com varanda privativa, cama queen e uma atmosfera leve para casais que querem descansar com conforto.",
    pricePerNight: 420,
    images: ["/images/hero-carousel/slide-1.avif", "/images/hero-carousel/slide-2.avif"],
    capacity: 2,
    location: "Praia do Itagua, Ubatuba",
    rating: 4.9,
    reviewCount: 128,
    amenitiesIncluded: [
      "Cafe da manha artesanal",
      "Ar-condicionado",
      "Wi-Fi de alta velocidade",
      "Enxoval completo",
      "Varanda com rede",
      "Estacionamento rotativo",
    ],
    amenitiesNotIncluded: [
      "Almoco e jantar",
      "Bebidas do frigobar",
      "Translado ate a pousada",
      "Passeios terceirizados",
    ],
    highlights: [
      "Vista parcial para o mar ao amanhecer",
      "Decoracao clara com madeira natural",
      "Banheiro amplo com ducha pressurizada",
    ],
  },
  {
    slug: "quarto-standard-jardim",
    name: "Quarto Standard Jardim",
    description:
      "Opcao pratica e charmosa para quem passa o dia explorando Ubatuba e quer voltar para um quarto silencioso, confortavel e cercado pelo jardim da pousada.",
    pricePerNight: 280,
    images: ["/images/galeria/passeio-1.webp", "/images/galeria/passeio-2.webp"],
    capacity: 2,
    location: "Centro, Ubatuba",
    rating: 4.7,
    reviewCount: 94,
    amenitiesIncluded: [
      "Cafe da manha",
      "Ar-condicionado",
      "Smart TV",
      "Wi-Fi",
      "Secador de cabelo",
      "Acesso ao jardim",
    ],
    amenitiesNotIncluded: [
      "Cozinha privativa",
      "Berco sob demanda",
      "Lavanderia",
      "Room service",
    ],
    highlights: [
      "Localizacao facil para restaurantes",
      "Ambiente silencioso no terreo",
      "Melhor custo-beneficio para estadias curtas",
    ],
  },
  {
    slug: "chale-familia",
    name: "Chale Familia",
    description:
      "Espaco pensado para familias pequenas, com configuracao flexivel, varanda integrada e facil acesso as areas comuns da pousada.",
    pricePerNight: 560,
    images: ["/images/hero-carousel/slide-4.avif", "/images/hero-carousel/slide-5.avif"],
    capacity: 4,
    location: "Pereque-Acu, Ubatuba",
    rating: 4.8,
    reviewCount: 76,
    amenitiesIncluded: [
      "Cafe da manha",
      "Cama queen e duas camas solteiro",
      "Ar-condicionado",
      "Micro-ondas",
      "Wi-Fi",
      "Vaga de estacionamento",
    ],
    amenitiesNotIncluded: [
      "Utensilios para cozinhar",
      "Pet care",
      "Passeios de barco",
      "Limpeza extra durante o dia",
    ],
    highlights: [
      "Varanda privativa voltada para area verde",
      "Planta confortavel para familias",
      "Proximo a praias de mar calmo",
    ],
  },
  {
    slug: "suite-master-hidromassagem",
    name: "Suite Master Hidromassagem",
    description:
      "A acomodacao mais completa da pousada, ideal para uma experiencia especial com hidromassagem, area de descanso e detalhes pensados para uma estadia memoravel.",
    pricePerNight: 690,
    images: ["/images/hero-2.avif", "/images/imagem6.avif"],
    capacity: 2,
    location: "Enseada, Ubatuba",
    rating: 5,
    reviewCount: 52,
    amenitiesIncluded: [
      "Cafe da manha premium",
      "Hidromassagem",
      "Roupao e amenities",
      "Ar-condicionado split",
      "Smart TV",
      "Late checkout mediante disponibilidade",
    ],
    amenitiesNotIncluded: [
      "Espumante",
      "Decoracao romantica",
      "Massagem",
      "Transporte executivo",
    ],
    highlights: [
      "Hidromassagem privativa",
      "Suite ampla para datas especiais",
      "Detalhes de conforto acima da categoria",
    ],
  },
]
