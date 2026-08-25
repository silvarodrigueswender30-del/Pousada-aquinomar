export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Pousada Aquino Mar",
    "description": "Pousada familiar em Caborê, a poucos minutos do Centro Histórico de Paraty. Café da manhã incluso, piscina, Wi-Fi e estacionamento gratuito.",
    "url": "https://pousada-aquinomar.vercel.app",
    "telephone": "+55-24-99828-0363",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Guapuruvu, 371 - Caborê",
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
      { "@type": "LocationFeatureSpecification", "name": "Café da manhã incluído", "value": true },
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
        "name": "Onde a pousada está localizada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Pousada Aquino Mar fica no Caborê, em uma rua residencial e tranquila. O trajeto até o Centro Histórico leva em média de 12 a 20 minutos a pé."
        }
      },
      {
        "@type": "Question",
        "name": "O que está incluso na diária?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nossas diárias incluem um delicioso café da manhã caseiro, acesso à piscina, Wi-Fi nas áreas comuns e nos quartos, e estacionamento rotativo gratuito."
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
