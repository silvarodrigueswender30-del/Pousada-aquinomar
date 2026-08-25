import dynamic from "next/dynamic"

import { HeroSection } from "@/components/sections/hero-section"
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
