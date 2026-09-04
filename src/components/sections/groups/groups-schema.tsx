import { groupFaqs } from "./groups-data"

const siteUrl = "https://pousadaaquinomarparaty.com.br"
const lodgingId = `${siteUrl}/#lodging`
const groupsUrl = `${siteUrl}/grupos-e-caravanas`

function jsonLd(schema: unknown) {
  return JSON.stringify(schema).replace(/</g, "\\u003c")
}

export function GroupsSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${groupsUrl}#faq`,
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
        "item": siteUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Grupos & Caravanas",
        "item": groupsUrl,
      },
    ],
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pousada para Grupos e Caravanas em Paraty | Aquino Mar",
    "description":
      "Hospedagem para grupos, excursões e caravanas em Paraty com atendimento direto da Pousada Aquino Mar. Consulte disponibilidade para sua viagem.",
    "url": groupsUrl,
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "name": "Pousada Aquino Mar",
      "url": siteUrl,
    },
    "about": {
      "@type": "LodgingBusiness",
      "@id": lodgingId,
      "name": "Pousada Aquino Mar",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webPageSchema) }}
      />
    </>
  )
}
