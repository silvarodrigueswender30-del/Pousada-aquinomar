import { groupFaqs } from "./groups-data"

export function GroupsSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": groupFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Pousada Aquino Mar",
        "item": "https://pousada-aquinomar.vercel.app",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Grupos & Caravanas",
        "item": "https://pousada-aquinomar.vercel.app/grupos-e-caravanas",
      },
    ],
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pousada para Grupos e Caravanas em Paraty | Aquino Mar",
    "description":
      "Hospedagem para grupos, excursões e caravanas em Paraty com atendimento direto da Pousada Aquino Mar. Consulte disponibilidade para sua viagem.",
    "url": "https://pousada-aquinomar.vercel.app/grupos-e-caravanas",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Pousada Aquino Mar",
      "url": "https://pousada-aquinomar.vercel.app",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  )
}
