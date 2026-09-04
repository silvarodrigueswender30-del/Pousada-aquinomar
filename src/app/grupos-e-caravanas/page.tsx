import type { Metadata } from "next"
import { FooterSection } from "@/components/sections/footer-section"
import { GroupsAccommodationSection, GroupsStructureSection } from "@/components/sections/groups/groups-structure-accommodation-section"
import { GroupsAmenitiesSection, GroupsBreakfastSection, GroupsProfilesSection } from "@/components/sections/groups/groups-profiles-breakfast-amenities-section"
import { GroupsFaqSection, GroupsFinalCtaSection } from "@/components/sections/groups/groups-faq-final-section"
import { GroupsHeroSection } from "@/components/sections/groups/groups-hero-section"
import { GroupsLocationSection, GroupsParatySection } from "@/components/sections/groups/groups-location-paraty-section"
import { GroupsMomentsSection, GroupsPartnershipSection, GroupsTestimonialsSection } from "@/components/sections/groups/groups-partnership-social-section"
import { GroupsProcessSection, GroupsProofSection } from "@/components/sections/groups/groups-proof-process-section"
import { GroupsSchema } from "@/components/sections/groups/groups-schema"

const title = "Pousada para Grupos e Caravanas em Paraty | Aquino Mar"
const description =
  "Hospedagem para grupos, excursões e caravanas em Paraty com atendimento direto da Pousada Aquino Mar. Consulte disponibilidade para sua viagem."
const siteUrl = "https://pousadaaquinomarparaty.com.br"
const socialImageUrl = `${siteUrl}/og/aquinomar-share.jpg`

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "pousada para grupos em Paraty",
    "hospedagem para grupos em Paraty",
    "pousada para caravanas em Paraty",
    "hospedagem para caravanas em Paraty",
    "pousada para excursões em Paraty",
    "hospedagem para agências de turismo em Paraty",
    "pousada Caboré Paraty grupos",
  ],
  alternates: {
    canonical: `${siteUrl}/grupos-e-caravanas`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/grupos-e-caravanas`,
    siteName: "Pousada Aquino Mar",
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Logo da Pousada Aquino Mar",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImageUrl],
  },
}

export default function GroupsAndCaravansPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#E4F6FA_52%,#FFFFFF_100%)]">
      <GroupsSchema />
      <GroupsHeroSection />
      <GroupsProofSection />
      <GroupsProcessSection />
      <GroupsStructureSection />
      <GroupsAccommodationSection />
      <GroupsProfilesSection />
      <GroupsBreakfastSection />
      <GroupsAmenitiesSection />
      <GroupsLocationSection />
      <GroupsParatySection />
      <GroupsPartnershipSection />
      <GroupsMomentsSection />
      <GroupsTestimonialsSection />
      <GroupsFaqSection />
      <GroupsFinalCtaSection />
      <FooterSection />
    </main>
  )
}
