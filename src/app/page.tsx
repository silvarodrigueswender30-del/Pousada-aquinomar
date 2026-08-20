import { AboutSection } from "@/components/sections/about-section"
import { HeroSection } from "@/components/sections/hero-section"
import { RoomsGridSection } from "@/components/sections/rooms-grid-section"
import { StatsBar } from "@/components/sections/stats-bar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#E4F6FA_52%,#FFFFFF_100%)]">
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <RoomsGridSection />
    </main>
  )
}
