import { CTAButton } from "@/components/ui/cta-button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-gradient-to-br from-[#063A45] via-[#094F5F] to-[#0C6478]">
      {/* TODO: substituir por <video> ou <Image> real quando disponível */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,184,217,0.28),transparent_32%),linear-gradient(90deg,rgba(6,58,69,0.94),rgba(6,58,69,0.56))]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-28 text-white md:py-36">
        <div className="max-w-3xl">
          <p className="font-heading text-sm font-medium uppercase tracking-wide text-[#9FE8F7]">
            Pousada Aquino Mar
          </p>
          <h1 className="mt-5 font-heading text-5xl font-bold leading-tight md:text-7xl">
            Um refúgio em família à beira do mar em Paraty
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
            Pousada Aquino Mar — hospitalidade genuína em Cabore, a poucos minutos
            do Centro Histórico.
          </p>
          <div className="mt-10">
            <CTAButton href="#quartos" target="_self" variant="on-dark">
              Ver Quartos
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
