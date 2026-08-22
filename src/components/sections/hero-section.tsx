import Image from "next/image"
import { CTAButton } from "@/components/ui/cta-button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-screen w-full scroll-mt-24 items-center overflow-hidden bg-brand-primary">
      <Image
        src="/images/hero/hero01.avif"
        alt="Piscina da Pousada Aquino Mar ao entardecer"
        fill
        priority
        className="object-cover"
        quality={80}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-28 text-white md:py-36">
        <div className="max-w-3xl">
          <p className="font-heading text-sm font-medium uppercase tracking-wide text-brand-gold-light">
            Pousada Aquino Mar
          </p>
          <h1 className="mt-5 font-heading text-5xl font-light leading-tight md:text-7xl">
            Um refúgio em família à beira do mar em Paraty
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
            Pousada Aquino Mar — hospitalidade genuína em Cabore, a poucos minutos
            do Centro Histórico.
          </p>
          <div className="mt-10">
            <CTAButton
              href="#quartos"
              target="_self"
              variant="on-dark"
              className="[&>*]:bg-brand-cta [&_*]:text-white hover:[&>*]:brightness-90 hover:[&>*]:shadow-lg hover:[&>*]:shadow-brand-primary/20 focus-visible:ring-brand-cta-light"
            >
              Ver Quartos
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

