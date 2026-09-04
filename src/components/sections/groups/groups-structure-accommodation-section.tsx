import Image from "next/image"
import Link from "next/link"
import { Check, Users } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"
import { groupAccommodationFeatures, groupsWhatsappAccommodationHref } from "./groups-data"

export function GroupsStructureSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.58fr)_minmax(18rem,0.42fr)] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">
              ESTRUTURA
            </p>
            <h2 className="mt-5 max-w-4xl font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
              Uma estrutura pensada para{" "}
              <span className="text-brand-gold">receber bem.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-brand-text/75 lg:justify-self-end">
            Ambientes de descanso, áreas de convivência, café da manhã e localização estratégica para completar a experiência do grupo em Paraty.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1.7fr)_minmax(18rem,0.8fr)]">
          <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-surface shadow-sm shadow-brand-primary/10 lg:aspect-auto lg:min-h-[34rem]">
            <Image
              src="/images/sobre/foto-pousada01.avif"
              alt="Piscina e áreas sociais da Pousada Aquino Mar em Paraty para recepção de grupos"
              fill
              sizes="(max-width: 1023px) 100vw, 64vw"
              className="object-cover object-center transition-transform duration-700 motion-safe:group-hover:scale-[1.02]"
              quality={84}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--color-primary-dark)_76%,transparent)_0%,color-mix(in_oklab,var(--color-primary-dark)_40%,transparent)_48%,transparent_100%)]" />
            <figcaption className="absolute bottom-5 left-5 max-w-sm pr-5 md:bottom-7 md:left-7">
              <h3 className="font-heading text-2xl font-normal text-white md:text-3xl">
                Áreas para pausa e convivência
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Piscina · descanso · acolhimento familiar
              </p>
            </figcaption>
          </figure>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1 lg:grid-rows-3">
            {[
              {
                src: "/images/cafe-03.avif",
                alt: "Buffet de café da manhã da Pousada Aquino Mar em Paraty",
              },
              {
                src: "/images/quarto-triplo/quarto-triplo-2.avif",
                alt: "Acomodação confortável da Pousada Aquino Mar para grupos e excursões",
              },
              {
                src: "/images/location/foto-pousada-03.avif",
                alt: "Área externa e jardim da Pousada Aquino Mar no Caboré, Paraty",
              },
            ].map((image) => (
              <figure key={image.src} className="group relative aspect-square overflow-hidden rounded-xl bg-brand-surface last:col-span-2 last:aspect-[2.2/1] sm:aspect-[4/3] sm:last:col-span-1 sm:last:aspect-[4/3] lg:aspect-auto lg:last:aspect-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 28vw"
                  className="object-cover object-center transition-transform duration-700 motion-safe:group-hover:scale-[1.02]"
                  quality={82}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function GroupsAccommodationSection() {
  return (
    <section className="w-full overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--color-surface)_36%,white)_0%,color-mix(in_oklab,var(--color-cta)_10%,white)_100%)] py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-surface-alt shadow-2xl shadow-brand-primary/10">
          <Image
            src="/images/quarto-triplo/quarto-triplo-1.avif"
            alt="Quarto triplo e suítes da Pousada Aquino Mar para grupos e famílias em Paraty"
            fill
            sizes="(max-width: 1023px) 100vw, 46vw"
            className="object-cover object-center"
            quality={86}
          />
          <div className="absolute left-4 top-4 rounded-full bg-brand-primary/85 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white">
            Solução para grupos
          </div>
        </div>

        <article className="border-y border-brand-gold/35 py-8 lg:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">
            HOSPEDAGEM PARA GRUPOS
          </p>
          <h2 className="mt-5 font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
            Uma hospedagem que se adapta ao seu grupo.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-brand-text/75 md:text-lg">
            Organizamos a combinação de acomodações de acordo com a composição da viagem, o período e a disponibilidade.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {groupAccommodationFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-lg bg-white/72 p-4 text-sm font-medium text-brand-text shadow-sm shadow-brand-primary/5">
                <Check className="h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <CTAButton href={groupsWhatsappAccommodationHref} variant="brand">
                Consultar meu grupo
              </CTAButton>
              <Link
                href="/#quartos"
                className="inline-flex items-center gap-1 text-xs font-medium tracking-wide text-brand-primary/80 transition-colors hover:text-brand-gold hover:underline"
              >
                Conhecer nossas suítes →
              </Link>
            </div>
            <p className="flex items-center gap-2 text-xs font-medium text-brand-text/65">
              <Users className="h-4 w-4 text-brand-gold shrink-0" aria-hidden="true" />
              <span>Cotação direta sem intermediários</span>
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
