import dynamic from "next/dynamic"
import type { Metadata } from "next"

const homeTitle = "Pousada Aquino Mar em Paraty, RJ | Sinta-se em casa"
const homeDescription = "Sua hospedagem em Paraty, RJ, com acolhimento de família. Café da manhã incluso, piscina e estacionamento gratuito. Reserve na Pousada Aquino Mar."

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "https://pousadaaquinomarparaty.com.br",
    siteName: "Pousada Aquino Mar",
    images: [{ url: "/og/aquinomar-share.jpg", width: 1200, height: 630, alt: "Logo da Pousada Aquino Mar" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/og/aquinomar-share.jpg"],
  },
}

import { HeroSection } from "@/components/sections/hero-section"
import { LocalBusinessSchema, FaqSchema } from "@/components/schema-markup"
import { LogoMarquee } from "@/components/sections/logo-marquee"
import { StatsBar } from "@/components/sections/stats-bar"

// Lazy load below-the-fold components to improve LCP and split framer-motion bundle
const AboutSection = dynamic(() => import("@/components/sections/about-section").then((mod) => mod.AboutSection))
const OurStorySection = dynamic(() => import("@/components/sections/our-story-section").then((mod) => mod.OurStorySection))
const HighlightsSection = dynamic(() => import("@/components/sections/highlights-section").then((mod) => mod.HighlightsSection))
const BreakfastSection = dynamic(() => import("@/components/sections/breakfast-section").then((mod) => mod.BreakfastSection))
const AmenitiesSection = dynamic(() => import("@/components/sections/amenities-section").then((mod) => mod.AmenitiesSection))
const RoomsGridSection = dynamic(() => import("@/components/sections/rooms-grid-section").then((mod) => mod.RoomsGridSection))
const LocationSection = dynamic(() => import("@/components/sections/location-section").then((mod) => mod.LocationSection))
const ClientMomentsSection = dynamic(() => import("@/components/sections/client-moments-section").then((mod) => mod.ClientMomentsSection))
const FaqSection = dynamic(() => import("@/components/sections/faq-section").then((mod) => mod.FaqSection))
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section").then((mod) => mod.TestimonialsSection))
const FinalCtaSection = dynamic(() => import("@/components/sections/final-cta-section").then((mod) => mod.FinalCtaSection))
const FooterSection = dynamic(() => import("@/components/sections/footer-section").then((mod) => mod.FooterSection))

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#E4F6FA_52%,#FFFFFF_100%)]">
      <LocalBusinessSchema />
      <FaqSchema />
      <HeroSection />
      <LogoMarquee />
      <StatsBar />
      <AboutSection />
      <OurStorySection />
      <HighlightsSection />
      <BreakfastSection />
      <AmenitiesSection />
      <RoomsGridSection />
      <LocationSection />
      <ClientMomentsSection />
      <FaqSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  )
}

