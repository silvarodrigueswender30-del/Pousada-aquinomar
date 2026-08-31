import type { Metadata } from "next"
import { FooterSection } from "@/components/sections/footer-section"
import { GroupsAccommodationSection, GroupsStructureSection } from "@/components/sections/groups/groups-structure-accommodation-section"
import { GroupsAmenitiesSection, GroupsBreakfastSection, GroupsProfilesSection } from "@/components/sections/groups/groups-profiles-breakfast-amenities-section"
import { GroupsFaqSection, GroupsFinalCtaSection } from "@/components/sections/groups/groups-faq-final-section"
import { GroupsHeroSection } from "@/components/sections/groups/groups-hero-section"
import { GroupsLocationSection, GroupsParatySection } from "@/components/sections/groups/groups-location-paraty-section"
import { GroupsMomentsSection, GroupsPartnershipSection, GroupsTestimonialsSection } from "@/components/sections/groups/groups-partnership-social-section"
import { GroupsProcessSection, GroupsProofSection } from "@/components/sections/groups/groups-proof-process-section"

const title = "Pousada para Grupos e Caravanas em Paraty | Aquino Mar"
const description =
  "Organize a hospedagem do seu grupo, excursão ou caravana em Paraty com atendimento direto da Pousada Aquino Mar. Consulte disponibilidade e condições para sua viagem."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://pousada-aquinomar.vercel.app/grupos-e-caravanas",
  },
  openGraph: {
    title,
    description,
    url: "https://pousada-aquinomar.vercel.app/grupos-e-caravanas",
    siteName: "Pousada Aquino Mar",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Pousada Aquino Mar em Caboré, Paraty - RJ",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.webp"],
  },
}

export default function GroupsAndCaravansPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#E4F6FA_52%,#FFFFFF_100%)]">
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
