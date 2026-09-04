const siteUrl = "https://pousadaaquinomarparaty.com.br"
const lodgingId = `${siteUrl}/#lodging`
const websiteId = `${siteUrl}/#website`
const imageUrl = `${siteUrl}/og/aquinomar-share.jpg`
const logoUrl = `${siteUrl}/images/Logo-Colorida.png`
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Rua%20Guapuruvu%20371%20Cabore%20Paraty%20RJ"
const officialProfiles = [
  "https://www.tripadvisor.com.br/Hotel_Review-g303503-d26338879-Reviews-Pousada_Aquino_Mar-Paraty_State_of_Rio_de_Janeiro.html",
  "https://www.facebook.com/pousadaaquinomar",
  "https://www.instagram.com/pousadaaquinomar/",
]

function jsonLd(schema: unknown) {
  return JSON.stringify(schema).replace(/</g, "\\u003c")
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": lodgingId,
        "name": "Pousada Aquino Mar",
        "description":
          "Pousada familiar e acolhedora em Caborê, Paraty, com café da manhã, piscina, Wi-Fi, ar-condicionado, estacionamento privativo gratuito e atendimento próximo para casais, famílias e grupos.",
        "url": siteUrl,
        "image": imageUrl,
        "logo": logoUrl,
        "telephone": "+55-24-99828-0363",
        "hasMap": mapUrl,
        "sameAs": officialProfiles,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Guapuruvu, 371",
          "addressLocality": "Paraty",
          "addressRegion": "RJ",
          "postalCode": "23970-000",
          "addressCountry": "BR",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -23.2120025,
          "longitude": -44.7176435,
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Café da manhã", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Piscina", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Wi-Fi", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Ar-condicionado", "value": true },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Estacionamento privativo gratuito",
            "value": true,
          },
          { "@type": "LocationFeatureSpecification", "name": "Limpeza diária", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Jardim", "value": true },
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "name": "Suíte Casal",
            "url": `${siteUrl}/quartos/suite-casal`,
            "itemOffered": {
              "@type": "HotelRoom",
              "name": "Suíte Casal",
              "occupancy": { "@type": "QuantitativeValue", "value": 2 },
            },
          },
          {
            "@type": "Offer",
            "name": "Suíte Múltipla",
            "url": `${siteUrl}/quartos/suite-multipla`,
            "itemOffered": {
              "@type": "HotelRoom",
              "name": "Suíte Múltipla",
              "occupancy": { "@type": "QuantitativeValue", "value": 4 },
            },
          },
        ],
        "priceRange": "$$",
        "checkinTime": "14:00",
        "checkoutTime": "12:00",
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        "name": "Pousada Aquino Mar",
        "url": siteUrl,
        "publisher": { "@id": lodgingId },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
    />
  )
}

export function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Onde fica a Pousada Aquino Mar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "A Pousada Aquino Mar fica na Rua Guapuruvu, 371, no bairro Caborê, em Paraty, Rio de Janeiro.",
        },
      },
      {
        "@type": "Question",
        "name": "A pousada fica perto do Centro Histórico de Paraty?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Sim. O site informa acesso ao Centro Histórico de Paraty em aproximadamente 12 a 20 minutos de caminhada, dependendo do ritmo e do trajeto.",
        },
      },
      {
        "@type": "Question",
        "name": "A Pousada Aquino Mar tem café da manhã?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. A pousada comunica café da manhã como uma das comodidades oferecidas aos hóspedes.",
        },
      },
      {
        "@type": "Question",
        "name": "A pousada tem piscina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. A Pousada Aquino Mar informa piscina e áreas externas para descanso.",
        },
      },
      {
        "@type": "Question",
        "name": "A pousada tem estacionamento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. O site informa estacionamento privativo gratuito para hóspedes.",
        },
      },
      {
        "@type": "Question",
        "name": "Tem Wi-Fi e ar-condicionado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. A pousada comunica Wi-Fi e ar-condicionado como comodidades disponíveis.",
        },
      },
      {
        "@type": "Question",
        "name": "A pousada recebe famílias e grupos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Sim. A Pousada Aquino Mar atende casais, famílias, pequenos grupos, amigos, viagens corporativas, excursões e caravanas, com cotação conforme composição da viagem e disponibilidade.",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
    />
  )
}

type HotelRoomSchemaRoom = {
  slug: string
  name: string
  description: string
  images: string[]
  capacity: number
  bedSetup: string
  amenitiesIncluded: string[]
}

export function HotelRoomSchema({ room }: { room: HotelRoomSchemaRoom }) {
  const roomUrl = `${siteUrl}/quartos/${room.slug}`
  const schema = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "@id": `${roomUrl}#room`,
    "name": `${room.name} na Pousada Aquino Mar em Paraty`,
    "description": room.description,
    "url": roomUrl,
    "image": room.images.map((image) => `${siteUrl}${image}`),
    "occupancy": {
      "@type": "QuantitativeValue",
      "value": room.capacity,
    },
    "bed": {
      "@type": "BedDetails",
      "typeOfBed": room.bedSetup,
    },
    "amenityFeature": room.amenitiesIncluded.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity,
      "value": true,
    })),
    "containedInPlace": {
      "@type": "LodgingBusiness",
      "@id": lodgingId,
      "name": "Pousada Aquino Mar",
      "url": siteUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Guapuruvu, 371",
        "addressLocality": "Paraty",
        "addressRegion": "RJ",
        "postalCode": "23970-000",
        "addressCountry": "BR",
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
    />
  )
}
