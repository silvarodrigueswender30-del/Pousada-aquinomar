export interface Room {
  slug: string
  name: string
  description: string
  images: string[]
  photoCount: number
  capacity: number
  roomCount: number
  bedSetup: string
  location: string
  rating: number
  reviewCount: number
  amenitiesIncluded: string[]
  amenitiesNotIncluded: string[]
  highlights: string[]
}

const sharedIncludedAmenities = [
  "Café da manhã incluso",
  "Ar-condicionado Split",
  "Smart TV",
  "Frigobar",
  "Wi-Fi grátis",
  "Roupas de cama e toalhas",
  "Estacionamento grátis",
]

const sharedNotIncludedAmenities = [
  "Almoço e jantar",
  "Bebidas do frigobar (cobradas à parte)",
  "Passeios terceirizados",
]

export const rooms: Room[] = [
  {
    slug: "suite-casal",
    name: "Suíte Casal",
    description:
      "Ambiente intimista e confortável, ideal para casais ou estadias individuais que prezam por espaço e privacidade. Contamos com 5 unidades idênticas nesta categoria, todas oferecendo um espaço amplo e acabamento padronizado.",
    images: [
      "/images/quarto-casal-superior/quarto-casal-superior-1.avif",
      "/images/quarto-casal-superior/quarto-casal-superior-2.avif",
      "/images/quarto-casal-superior/quarto-casal-superior-3.avif",
      "/images/quarto-casal-superior/quarto-casal-superior-4.avif",
    ],
    photoCount: 4,
    capacity: 2,
    roomCount: 5,
    bedSetup: "Cama King Size (2m x 2m) e poltrona",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 411,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 2 pessoas",
      "Cama King Size (2m x 2m)",
      "Ambiente intimista",
    ],
  },
  {
    slug: "suite-multipla",
    name: "Suíte Múltipla",
    description:
      "Alta versatilidade e flexibilidade de ocupação, ideal para famílias, pequenos grupos ou viagens corporativas. Temos 13 unidades modulares que acomodam confortavelmente 3 ou 4 pessoas em um espaço amplo e bem equipado.",
    images: [
      "/images/quarto-triplo/quarto-triplo-2.avif",
      "/images/quarto-triplo/quarto-triplo-3.avif",
      "/images/quarto-triplo/quarto-triplo-4.avif",
      "/images/quarto-triplo/quarto-triplo-5.avif",
      "/images/quarto-triplo/quarto-triplo-1.avif",
    ],
    photoCount: 5,
    capacity: 4,
    roomCount: 13,
    bedSetup: "Cama King Size modular (p/ 3 ou 4 pax)",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 411,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 3 a 4 pessoas",
      "Versatilidade para famílias",
      "Estrutura modular",
    ],
  },
]
