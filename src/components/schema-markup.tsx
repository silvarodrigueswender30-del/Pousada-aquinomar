export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Pousada Aquino Mar",
    "description": "Pousada familiar em Cabor�, a poucos minutos do Centro Hist�rico de Paraty. Caf� da manh� incluso, piscina, Wi-Fi e estacionamento gratuito.",
    "url": "https://pousada-aquinomar.vercel.app",
    "telephone": "+55-24-99828-0363",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Guapuruvu, 371 - Cabor�",
      "addressLocality": "Paraty",
      "addressRegion": "RJ",
      "postalCode": "23970-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.2120025,
      "longitude": -44.7176435
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Caf� da manh� inclu�do", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Piscina", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Wi-Fi gratuito", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Estacionamento gratuito", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Ar-condicionado", "value": true }
    ],
    "priceRange": "",
    "checkinTime": "14:00",
    "checkoutTime": "12:00"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Onde a pousada est� localizada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Pousada Aquino Mar fica no Cabor�, em uma rua residencial e tranquila. O trajeto at� o Centro Hist�rico leva em m�dia de 12 a 20 minutos a p�."
        }
      },
      {
        "@type": "Question",
        "name": "O que est� incluso na di�ria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nossas di�rias incluem um delicioso caf� da manh� caseiro, acesso � piscina, Wi-Fi nas �reas comuns e nos quartos, e estacionamento rotativo gratuito."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}


export function HotelRoomSchema({ room }: { room: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "name": room.name + " na Pousada Aquino Mar em Paraty",
    "description": room.description,
    "image": room.images,
    "occupancy": {
      "@type": "QuantitativeValue",
      "value": room.capacity
    },
    "bed": {
      "@type": "BedDetails",
      "typeOfBed": room.bedSetup
    },
    "containedInPlace": {
      "@type": "LodgingBusiness",
      "name": "Pousada Aquino Mar",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paraty",
        "addressRegion": "RJ",
        "addressCountry": "BR"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
