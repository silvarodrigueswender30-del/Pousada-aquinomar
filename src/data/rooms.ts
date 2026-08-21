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

const placeholderImages = {
  casalSuperior: "/images/hero-carousel/slide-2.avif",
  triplo: "/images/hero-carousel/slide-3.avif",
  triploSuperior: "/images/hero-carousel/slide-4.avif",
}

function makeRoomImages(image: string, count: number) {
  return Array.from({ length: count }, () => image)
}

const sharedIncludedAmenities = [
  "Cafe da manha incluido",
  "Wi-Fi gratis",
  "Ar-condicionado",
  "Roupas de cama disponiveis",
  "Estacionamento gratis",
]

const sharedNotIncludedAmenities = [
  "Almoco e jantar",
  "Bebidas do frigobar",
  "Passeios terceirizados",
  "Camas extras sob consulta",
]

export const rooms: Room[] = [
  {
    slug: "quarto-casal-superior",
    name: "Quarto casal superior",
    description:
      "Acomodacao para duas pessoas, com 1 cama King, Wi-Fi gratis e o conforto essencial para descansar em Paraty.",
    images: makeRoomImages(placeholderImages.casalSuperior, 6),
    photoCount: 6,
    capacity: 2,
    roomCount: 1,
    bedSetup: "1 cama King",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 2 hospedes",
      "Configuracao com cama King",
      "Quarto superior conforme cadastro da pousada",
    ],
  },
  {
    slug: "quarto-triplo",
    name: "Quarto triplo",
    description:
      "Acomodacao para tres pessoas, com 1 cama King e 1 cama de solteiro, Wi-Fi gratis e estrutura pratica para familias ou pequenos grupos.",
    images: makeRoomImages(placeholderImages.triplo, 5),
    photoCount: 5,
    capacity: 3,
    roomCount: 1,
    bedSetup: "1 cama King e 1 cama de solteiro",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 3 hospedes",
      "Configuracao tripla com cama King",
      "Opcao destacada como extraordinaria no cadastro",
    ],
  },
  {
    slug: "quarto-triplo-superior",
    name: "Quarto triplo superior",
    description:
      "Quarto triplo superior para tres pessoas, com 1 cama King e 1 cama de solteiro, Wi-Fi gratis e mais espaco para a estadia.",
    images: makeRoomImages(placeholderImages.triploSuperior, 6),
    photoCount: 6,
    capacity: 3,
    roomCount: 1,
    bedSetup: "1 cama King e 1 cama de solteiro",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 3 hospedes",
      "Categoria superior",
      "Configuracao para casal com uma cama extra",
    ],
  },
  {
    slug: "quarto-casal-superior-2",
    name: "Quarto casal superior",
    description:
      "Acomodacao superior para duas pessoas, com 1 cama King, Wi-Fi gratis e ambiente claro para uma estadia confortavel.",
    images: makeRoomImages(placeholderImages.casalSuperior, 5),
    photoCount: 5,
    capacity: 2,
    roomCount: 1,
    bedSetup: "1 cama King",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 2 hospedes",
      "Cama King",
      "Wi-Fi gratis",
    ],
  },
  {
    slug: "quarto-casal-superior-3",
    name: "Quarto casal superior",
    description:
      "Quarto casal superior para duas pessoas, com 1 cama King e estrutura pensada para uma hospedagem simples e confortavel.",
    images: makeRoomImages(placeholderImages.casalSuperior, 5),
    photoCount: 5,
    capacity: 2,
    roomCount: 1,
    bedSetup: "1 cama King",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 2 hospedes",
      "Categoria superior",
      "Ideal para casal",
    ],
  },
  {
    slug: "quarto-casal-superior-4",
    name: "Quarto casal superior",
    description:
      "Opcao casal superior com 1 cama King, Wi-Fi gratis e acomodacao para duas pessoas no padrao informado pela pousada.",
    images: makeRoomImages(placeholderImages.casalSuperior, 5),
    photoCount: 5,
    capacity: 2,
    roomCount: 1,
    bedSetup: "1 cama King",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 2 hospedes",
      "1 quarto",
      "Wi-Fi gratis",
    ],
  },
  {
    slug: "quarto-triplo-2",
    name: "Quarto triplo",
    description:
      "Quarto triplo para tres pessoas, com 1 cama King e 1 cama de solteiro, indicado para hospedes que querem praticidade e conforto.",
    images: makeRoomImages(placeholderImages.triplo, 5),
    photoCount: 5,
    capacity: 3,
    roomCount: 1,
    bedSetup: "1 cama King e 1 cama de solteiro",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 3 hospedes",
      "1 cama King e 1 cama de solteiro",
      "Wi-Fi gratis",
    ],
  },
  {
    slug: "quarto-triplo-3",
    name: "Quarto triplo",
    description:
      "Acomodacao tripla para tres pessoas, com 1 cama King e 1 cama de solteiro, conforme a configuracao real da pousada.",
    images: makeRoomImages(placeholderImages.triplo, 4),
    photoCount: 4,
    capacity: 3,
    roomCount: 1,
    bedSetup: "1 cama King e 1 cama de solteiro",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 3 hospedes",
      "1 quarto",
      "Wi-Fi gratis",
    ],
  },
  {
    slug: "quarto-triplo-4",
    name: "Quarto triplo",
    description:
      "Quarto triplo para ate tres hospedes, com cama King e cama de solteiro para acomodar familia ou grupo pequeno.",
    images: makeRoomImages(placeholderImages.triplo, 4),
    photoCount: 4,
    capacity: 3,
    roomCount: 1,
    bedSetup: "1 cama King e 1 cama de solteiro",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 3 hospedes",
      "Configuracao tripla",
      "Wi-Fi gratis",
    ],
  },
  {
    slug: "quarto-triplo-5",
    name: "Quarto triplo",
    description:
      "Acomodacao tripla com 1 cama King e 1 cama de solteiro, pensada para uma estadia funcional perto do Centro Historico.",
    images: makeRoomImages(placeholderImages.triplo, 5),
    photoCount: 5,
    capacity: 3,
    roomCount: 1,
    bedSetup: "1 cama King e 1 cama de solteiro",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 3 hospedes",
      "Cama King e cama de solteiro",
      "Cafe da manha incluido",
    ],
  },
  {
    slug: "quarto-triplo-6",
    name: "Quarto triplo",
    description:
      "Quarto triplo para tres hospedes, com 1 cama King e 1 cama de solteiro, Wi-Fi gratis e comodidades essenciais.",
    images: makeRoomImages(placeholderImages.triplo, 4),
    photoCount: 4,
    capacity: 3,
    roomCount: 1,
    bedSetup: "1 cama King e 1 cama de solteiro",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 3 hospedes",
      "1 quarto",
      "Ar-condicionado",
    ],
  },
  {
    slug: "quarto-triplo-superior-2",
    name: "Quarto triplo superior",
    description:
      "Quarto triplo superior para tres pessoas, com 1 cama King e 1 cama de solteiro, ideal para quem busca um pouco mais de conforto.",
    images: makeRoomImages(placeholderImages.triploSuperior, 6),
    photoCount: 6,
    capacity: 3,
    roomCount: 1,
    bedSetup: "1 cama King e 1 cama de solteiro",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 3 hospedes",
      "Categoria superior",
      "Wi-Fi gratis",
    ],
  },
  {
    slug: "quarto-triplo-superior-3",
    name: "Quarto triplo superior",
    description:
      "Acomodacao triplo superior para tres hospedes, com 1 cama King e 1 cama de solteiro e estrutura da Pousada Aquino Mar.",
    images: makeRoomImages(placeholderImages.triploSuperior, 4),
    photoCount: 4,
    capacity: 3,
    roomCount: 1,
    bedSetup: "1 cama King e 1 cama de solteiro",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 3 hospedes",
      "1 quarto",
      "Cafe da manha incluido",
    ],
  },
  {
    slug: "quarto-triplo-superior-4",
    name: "Quarto triplo superior",
    description:
      "Quarto triplo superior com 1 cama King e 1 cama de solteiro, acomodando ate tres pessoas com Wi-Fi gratis.",
    images: makeRoomImages(placeholderImages.triploSuperior, 4),
    photoCount: 4,
    capacity: 3,
    roomCount: 1,
    bedSetup: "1 cama King e 1 cama de solteiro",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 3 hospedes",
      "Categoria superior",
      "Ar-condicionado",
    ],
  },
  {
    slug: "quarto-triplo-superior-5",
    name: "Quarto triplo superior",
    description:
      "Opcao triplo superior para tres hospedes, com 1 cama King e 1 cama de solteiro, conforme exibido no cadastro da pousada.",
    images: makeRoomImages(placeholderImages.triploSuperior, 4),
    photoCount: 4,
    capacity: 3,
    roomCount: 1,
    bedSetup: "1 cama King e 1 cama de solteiro",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 3 hospedes",
      "Wi-Fi gratis",
      "Estacionamento gratis",
    ],
  },
  {
    slug: "quarto-triplo-superior-6",
    name: "Quarto triplo superior",
    description:
      "Quarto triplo superior para tres pessoas, com alternativa de 1 cama King ou 1 cama de solteiro conforme disponibilidade informada no cadastro.",
    images: makeRoomImages(placeholderImages.triploSuperior, 4),
    photoCount: 4,
    capacity: 3,
    roomCount: 1,
    bedSetup: "1 cama King OU 1 cama de solteiro",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 3 hospedes",
      "Configuracao flexivel",
      "Wi-Fi gratis",
    ],
  },
  {
    slug: "quarto-triplo-superior-7",
    name: "Quarto triplo superior",
    description:
      "Acomodacao triplo superior para tres hospedes, com alternativa de 1 cama King ou 1 cama de solteiro conforme o cadastro original.",
    images: makeRoomImages(placeholderImages.triploSuperior, 4),
    photoCount: 4,
    capacity: 3,
    roomCount: 1,
    bedSetup: "1 cama King OU 1 cama de solteiro",
    location: "Cabore, Paraty - RJ",
    rating: 5,
    reviewCount: 23,
    amenitiesIncluded: sharedIncludedAmenities,
    amenitiesNotIncluded: sharedNotIncludedAmenities,
    highlights: [
      "Acomoda 3 hospedes",
      "Categoria superior",
      "Wi-Fi gratis",
    ],
  },
]
