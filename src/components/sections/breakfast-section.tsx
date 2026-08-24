import Image from "next/image"
import { Sparkles } from "lucide-react"

const breakfastImages = {
  main: {
    src: "/images/cafe-03.avif",
    alt: "Buffet de café da manhã da Pousada Aquino Mar com frutas, pães e bolos em uma mesa ampla",
  },
  family: {
    src: "/images/cafe-aquino.avif",
    alt: "Hóspedes tomando café da manhã em família no salão da Pousada Aquino Mar",
  },
  detail: {
    src: "/images/cafe-02.avif",
    alt: "Mesa de café da manhã com bolo, frutas, pão de queijo e café na Pousada Aquino Mar",
  },
}

const breakfastHighlights = [
  {
    title: "Preparado com carinho",
    description:
      "Uma seleção pensada para começar o dia com sabor e tranquilidade.",
  },
  {
    title: "Sabores frescos",
    description:
      "Frutas, pães, bolos e bebidas servidos em uma mesa acolhedora.",
  },
  {
    title: "Tempo à mesa",
    description:
      "Um momento leve para aproveitar a manhã antes de descobrir Paraty.",
  },
]

export function BreakfastSection() {
  return (
    <section
      id="cafe-da-manha"
      className="w-full scroll-mt-24 overflow-hidden bg-white py-16 md:py-24"
    >
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
              O café da manhã que faz o dia{" "}
              <span className="text-brand-gold">começar em família</span>
            </h2>
          </div>

          <div className="max-w-sm lg:justify-self-end">
            <p className="text-base leading-7 text-brand-text/75">
              Sabores preparados com cuidado, ingredientes frescos e o
              acolhimento de uma mesa feita para receber.
            </p>
            <span
              aria-hidden="true"
              className="mt-5 block h-px w-16 bg-brand-gold/60"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1.9fr)_minmax(18rem,0.72fr)]">
          <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-surface shadow-sm shadow-brand-primary/10 lg:aspect-auto lg:min-h-[34rem]">
            <Image
              src={breakfastImages.main.src}
              alt={breakfastImages.main.alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 65vw"
              className="object-cover object-[62%_58%] transition-transform duration-700 motion-safe:group-hover:scale-[1.02]"
              quality={82}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--color-primary-dark)_74%,transparent)_0%,color-mix(in_oklab,var(--color-primary-dark)_42%,transparent)_48%,transparent_100%)]"
            />
            <figcaption className="absolute bottom-5 left-5 max-w-sm pr-5 md:bottom-7 md:left-7">
              <h3 className="font-heading text-2xl font-normal text-white md:text-3xl">
                Manhãs feitas com cuidado
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Café fresco · Sabores artesanais · Hospitalidade familiar
              </p>
            </figcaption>
          </figure>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1 lg:grid-rows-2">
            <figure className="group relative aspect-square overflow-hidden rounded-xl bg-brand-surface sm:aspect-[4/3] lg:aspect-auto">
              <Image
                src={breakfastImages.family.src}
                alt={breakfastImages.family.alt}
                fill
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 50vw, 30vw"
                className="object-cover object-center transition-transform duration-700 motion-safe:group-hover:scale-[1.02]"
                quality={80}
              />
            </figure>

            <figure className="group relative aspect-square overflow-hidden rounded-xl bg-brand-surface sm:aspect-[4/3] lg:aspect-auto">
              <Image
                src={breakfastImages.detail.src}
                alt={breakfastImages.detail.alt}
                fill
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 50vw, 30vw"
                className="object-cover object-center transition-transform duration-700 motion-safe:group-hover:scale-[1.02]"
                quality={80}
              />
            </figure>
          </div>
        </div>

        <div className="mt-12 grid border-brand-gold/35 md:grid-cols-3 md:divide-x md:divide-brand-gold/35">
          {breakfastHighlights.map((item) => (
            <article
              key={item.title}
              className="border-t border-brand-gold/35 py-6 md:border-t-0 md:px-8 md:py-0 md:text-center first:pt-0 md:first:pl-0 md:last:pr-0"
            >
              <h3 className="font-heading text-xl font-normal text-brand-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-brand-text/70 md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
