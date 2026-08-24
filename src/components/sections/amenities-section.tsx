import { Car, Leaf, Sparkles, Waves, Wifi } from "lucide-react"

const amenities = [
  {
    title: "Piscina e jardim",
    description: "Áreas externas para descansar entre um passeio e outro, com clima tranquilo de pousada familiar.",
    icon: Waves,
  },
  {
    title: "Wi-Fi e ar-condicionado",
    description: "Conforto essencial nos quartos para relaxar, trabalhar ou planejar o próximo dia em Paraty.",
    icon: Wifi,
  },
  {
    title: "Estacionamento gratuito",
    description: "Vaga privativa sem custo, um diferencial para quem quer evitar a disputa por espaço no centro.",
    icon: Car,
  },
  {
    title: "Limpeza e enxoval",
    description: "Limpeza diária e enxoval de qualidade para a estadia manter sempre a sensação de cuidado.",
    icon: Sparkles,
  },
]

export function AmenitiesSection() {
  return (
    <section id="comodidades" className="w-full scroll-mt-24 overflow-hidden">
      <div className="grid min-h-0 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]">
        <div className="relative isolate overflow-hidden bg-[linear-gradient(145deg,var(--color-primary)_0%,var(--color-primary-dark)_100%)] px-5 py-16 text-white sm:px-8 md:px-10 lg:flex lg:items-center lg:px-14 lg:py-20 xl:px-16">
          <Leaf
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-16 z-0 h-72 w-72 rotate-[-18deg] text-white/[0.04]"
            strokeWidth={0.5}
          />
          <Leaf
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 z-0 h-60 w-60 rotate-[22deg] text-white/[0.035]"
            strokeWidth={0.5}
          />

          <div className="relative z-10 max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold-light">
              CONFORTO & CUIDADO
            </p>
            <h2 className="mt-6 max-w-xl font-heading text-[2.6rem] font-light leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
              Estrutura e comodidades para uma estadia{" "}
              <span className="text-brand-gold-light">sem preocupação</span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-7 text-white/80">
              Da chegada com estacionamento privativo ao cuidado diário com o
              quarto, tudo foi pensado para você aproveitar Paraty com conforto,
              tranquilidade e liberdade.
            </p>
            <span
              aria-hidden="true"
              className="mt-8 block h-px w-full max-w-sm bg-brand-gold-light/45"
            />
            <p className="mt-8 max-w-md font-heading text-2xl italic leading-snug text-white sm:text-3xl">
              Cuidamos dos detalhes. Você aproveita a estadia.
            </p>
          </div>
        </div>

        <div className="bg-brand-surface px-5 py-12 sm:px-8 md:px-10 lg:px-12 lg:py-16 xl:px-16">
          <ul className="grid lg:h-full lg:grid-cols-2 lg:grid-rows-2">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            const borderClass = [
              "border-b lg:border-b lg:border-r",
              "border-b lg:border-b",
              "border-b lg:border-b-0 lg:border-r",
              "border-b-0",
            ][index]

            return (
              <li
                key={amenity.title}
                className={`${borderClass} border-brand-gold/30 py-8 lg:flex lg:flex-col lg:justify-center lg:px-10 lg:py-12 xl:px-12`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium tracking-[0.18em] text-brand-gold/65">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-5 bg-brand-gold/45"
                  />
                </div>

                <Icon
                  className="mt-7 h-10 w-10 text-brand-gold"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />

                <h3 className="mt-5 max-w-xs font-heading text-2xl font-normal leading-tight text-brand-primary">
                  {amenity.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-brand-text/75 sm:text-base">
                  {amenity.description}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-6 block h-px w-7 bg-brand-gold/50"
                />
              </li>
            )
          })}
          </ul>
        </div>
      </div>
    </section>
  )
}
