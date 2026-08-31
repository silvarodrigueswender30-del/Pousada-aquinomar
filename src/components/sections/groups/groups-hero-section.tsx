import Image from "next/image"
import { Star } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"
import { groupsWhatsappHeroSecondaryHref, groupsWhatsappHref } from "./groups-data"

export function GroupsHeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-brand-primary">
      <Image
        src="/images/historia/foto-pousada04.avif"
        alt="Área da piscina da Pousada Aquino Mar em Paraty - Hospedagem para grupos"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-center"
        quality={86}
      />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--color-primary-dark)_92%,transparent)_0%,color-mix(in_oklab,var(--color-primary-dark)_66%,transparent)_48%,color-mix(in_oklab,var(--color-primary-dark)_30%,transparent)_100%)]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_22%_20%,color-mix(in_oklab,var(--color-accent-gold)_22%,transparent),transparent_32%)]" />

      <div className="absolute right-4 top-24 z-20 rounded-full border border-brand-gold/20 bg-brand-primary-dark/64 px-4 py-2 shadow-xl shadow-brand-primary/20 backdrop-blur-md md:right-10 md:px-5 md:py-2.5">
        <p className="flex items-center gap-1.5 text-xs font-medium text-white md:text-sm">
          <span>Atendimento direto</span>
          <Star className="h-3.5 w-3.5 fill-brand-gold-light text-brand-gold-light md:h-4 md:w-4" aria-hidden="true" />
          <span>para grupos</span>
        </p>
      </div>

      <div className="container relative z-20 mx-auto px-5 md:px-10">
        <div className="mt-24 max-w-3xl md:mt-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
            </span>
            GRUPOS & CARAVANAS
          </div>

          <h1 className="max-w-3xl font-serif text-[2.9rem] font-medium leading-[1.04] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Seu grupo em Paraty.
            <span className="block text-brand-gold-light">
              A hospedagem fica com a gente.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-white/90 md:text-xl">
            Recebemos grupos, excursões e caravanas em Paraty com atendimento direto para organizadores, agências e empresas de turismo.
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <CTAButton
              href={groupsWhatsappHref}
              variant="brand"
              className="flex w-full items-center justify-center px-8 py-6 text-lg sm:w-auto"
            >
              Solicitar cotação para meu grupo
            </CTAButton>
            <CTAButton
              href={groupsWhatsappHeroSecondaryHref}
              variant="on-dark"
              className="flex w-full items-center justify-center px-8 py-6 text-lg sm:w-auto"
            >
              Falar com a Aquino Mar
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
