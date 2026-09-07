import { homeFaqs } from "@/data/home-faqs"

const siteUrl = "https://pousadaaquinomarparaty.com.br"
const lodgingId = `${siteUrl}/#lodging`
const websiteId = `${siteUrl}/#website`
const imageUrl = `${siteUrl}/og/aquinomar-share.jpg`
const logoUrl = `${siteUrl}/logo-pousada1.webp`
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
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": 411,
          "bestRating": "5",
          "worstRating": "1",
        },
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
    "mainEntity": homeFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
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
