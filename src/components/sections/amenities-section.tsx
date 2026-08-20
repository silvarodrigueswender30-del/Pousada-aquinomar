import { Car, Sparkles, Waves, Wifi } from "lucide-react"

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
    <section className="w-full bg-[#E4F6FA] py-16 md:py-24">
      <div className="mx-auto w-full px-7 md:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="font-heading text-4xl font-light leading-[0.98] text-slate-950 md:text-6xl">
            Estrutura e comodidades para uma estadia sem preocupação
          </h2>

          <p className="max-w-xl text-base font-medium leading-7 text-slate-600 md:justify-self-end md:text-lg">
            Da chegada com estacionamento privativo ao cuidado diário com o quarto, tudo foi pensado para você aproveitar Paraty com mais leveza.
          </p>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-12 md:mt-20 md:grid-cols-4">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon

            return (
              <article
                key={amenity.title}
                className="flex min-h-[15rem] flex-col justify-between gap-16 border-t border-[#063A45]/10 pt-7 md:min-h-[18rem]"
              >
                <div className="flex items-start gap-3">
                  <Icon className="h-12 w-12 text-[#063A45]" strokeWidth={1.6} aria-hidden="true" />
                  <span className="font-heading text-[0.625rem] font-semibold leading-3 text-[#0C6478]/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading text-base font-semibold leading-tight text-slate-950">
                    {amenity.title}
                  </h3>
                  <p className="text-base font-medium leading-[1.3] text-slate-600">
                    {amenity.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
