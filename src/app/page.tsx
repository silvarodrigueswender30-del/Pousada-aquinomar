import { AboutSection } from "@/components/sections/about-section"
import { AmenitiesSection } from "@/components/sections/amenities-section"
import { BreakfastSection } from "@/components/sections/breakfast-section"
import { FaqSection } from "@/components/sections/faq-section"
import { HeroSection } from "@/components/sections/hero-section"
import { HighlightsSection } from "@/components/sections/highlights-section"
import { LocationSection } from "@/components/sections/location-section"
import { LogoMarquee } from "@/components/sections/logo-marquee"
import { RoomsGridSection } from "@/components/sections/rooms-grid-section"
import { StatsBar } from "@/components/sections/stats-bar"
import { TestimonialsSection } from "@/components/sections/testimonials-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#E4F6FA_52%,#FFFFFF_100%)]">
      <HeroSection />
      <LogoMarquee />
      <StatsBar />
      <AboutSection />
      <HighlightsSection />
      <BreakfastSection />
      <AmenitiesSection />
      <RoomsGridSection />
      <LocationSection />
      <FaqSection />
      <TestimonialsSection />
    </main>
  )
}
