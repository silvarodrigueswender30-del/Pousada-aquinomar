import Image from "next/image"
import { Sparkles } from "lucide-react"
import { groupAmenities, profileTags } from "./groups-data"

export function GroupsProfilesSection() {
  return (
    <section className="w-full overflow-hidden bg-brand-surface-alt py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">
            DIFERENTES PERFIS
          </p>
          <h2 className="mt-5 max-w-3xl font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
            Cada grupo é diferente.
            <span className="block text-brand-gold">
              A hospedagem também pode ser.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-brand-text/75 md:text-lg">
            Casais, famílias, amigos, guias e diferentes perfis de viajantes podem exigir configurações distintas. Nossa equipe avalia as opções disponíveis e orienta o organizador sobre a melhor distribuição das acomodações.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {profileTags.map((tag, index) => (
            <div key={tag} className="border-t border-brand-gold/35 py-5">
              <span className="text-xs font-medium tracking-[0.18em] text-brand-gold/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-heading text-2xl font-normal text-brand-primary">
                {tag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GroupsBreakfastSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(20rem,0.4fr)] lg:items-end">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-gold" aria-hidden="true" />
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-gold">
                CAFÉ DA MANHÃ
              </p>
            </div>
            <h2 className="mt-5 max-w-4xl font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
              O grupo começa o dia{" "}
              <span className="text-brand-gold">junto.</span>
            </h2>
          </div>
          <div className="max-w-sm lg:justify-self-end">
            <p className="text-base leading-7 text-brand-text/75">
              Começar o dia na própria pousada traz mais praticidade para o grupo antes de sair para conhecer Paraty.
            </p>
            <p className="mt-5 text-sm leading-6 text-brand-text/65">
              Consulte nossa equipe sobre horários e organização conforme o período da sua viagem.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1.9fr)_minmax(18rem,0.72fr)]">
          <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-surface shadow-sm shadow-brand-primary/10 lg:aspect-auto lg:min-h-[34rem]">
            <Image
              src="/images/cafe-03.avif"
              alt="Buffet de café da manhã da Pousada Aquino Mar com frutas, pães e bolos"
              fill
              sizes="(max-width: 1023px) 100vw, 65vw"
              className="object-cover object-[62%_58%] transition-transform duration-700 motion-safe:group-hover:scale-[1.02]"
              quality={82}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--color-primary-dark)_74%,transparent)_0%,color-mix(in_oklab,var(--color-primary-dark)_42%,transparent)_48%,transparent_100%)]" />
            <figcaption className="absolute bottom-5 left-5 max-w-sm pr-5 md:bottom-7 md:left-7">
              <h3 className="font-heading text-2xl font-normal text-white md:text-3xl">
                Mais praticidade antes do roteiro
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Café fresco · grupo reunido · saída mais tranquila
              </p>
            </figcaption>
          </figure>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1 lg:grid-rows-2">
            {[
              {
                src: "/images/cafe-aquino.avif",
                alt: "Hóspedes tomando café da manhã em família no salão da Pousada Aquino Mar",
              },
              {
                src: "/images/cafe-02.avif",
                alt: "Mesa de café da manhã com bolo, frutas, pão de queijo e café",
              },
            ].map((image) => (
              <figure key={image.src} className="group relative aspect-square overflow-hidden rounded-xl bg-brand-surface sm:aspect-[4/3] lg:aspect-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 767px) 50vw, (max-width: 1023px) 50vw, 30vw"
                  className="object-cover object-center transition-transform duration-700 motion-safe:group-hover:scale-[1.02]"
                  quality={80}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function GroupsAmenitiesSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="grid min-h-0 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]">
        <div className="relative isolate overflow-hidden bg-[linear-gradient(145deg,var(--color-primary)_0%,var(--color-primary-dark)_100%)] px-5 py-16 text-white sm:px-8 md:px-10 lg:flex lg:items-center lg:px-14 lg:py-20 xl:px-16">
          <div className="relative z-10 max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold-light">
              COMODIDADES
            </p>
            <h2 className="mt-6 max-w-xl font-heading text-[2.6rem] font-light leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
              Benefícios que ajudam na logística{" "}
              <span className="text-brand-gold-light">do grupo.</span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-7 text-white/80">
              Estrutura e atendimento direto para deixar a hospedagem mais simples para quem organiza a viagem.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface px-5 py-12 sm:px-8 md:px-10 lg:px-12 lg:py-16 xl:px-16">
          <ul className="grid lg:h-full lg:grid-cols-2 lg:grid-rows-2">
            {groupAmenities.map((amenity, index) => {
              const Icon = amenity.icon
              const borderClass = [
                "border-b lg:border-b lg:border-r",
                "border-b lg:border-b",
                "border-b lg:border-b-0 lg:border-r",
                "border-b-0",
              ][index]

              return (
                <li key={amenity.title} className={`${borderClass} border-brand-gold/30 py-8 lg:flex lg:flex-col lg:justify-center lg:px-10 lg:py-12 xl:px-12`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium tracking-[0.18em] text-brand-gold/65">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true" className="h-px w-5 bg-brand-gold/45" />
                  </div>
                  <Icon className="mt-7 h-10 w-10 text-brand-gold" strokeWidth={1.25} aria-hidden="true" />
                  <h3 className="mt-5 max-w-xs font-heading text-2xl font-normal leading-tight text-brand-primary">
                    {amenity.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-brand-text/75 sm:text-base">
                    {amenity.description}
                  </p>
                  <span aria-hidden="true" className="mt-6 block h-px w-7 bg-brand-gold/50" />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
