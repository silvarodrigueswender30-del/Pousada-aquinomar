import Link from "next/link"
import { BedDouble, MapPin, Star, Users } from "lucide-react"
import { rooms } from "@/data/rooms"

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
})

export function RoomsGridSection() {
  return (
    <section id="quartos" className="w-full scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto w-full px-7 md:px-10">
        <div className="grid gap-6 border-y border-[#063A45]/10 py-10 md:grid-cols-2 md:items-end md:py-14">
          <div>
            <p className="font-heading text-sm font-medium uppercase tracking-wide text-[#0C6478]">
              Acomodacoes
            </p>
            <h2 className="mt-4 font-heading text-4xl font-light leading-[0.98] text-slate-950 md:text-6xl">
              Quartos para descansar em Ubatuba
            </h2>
          </div>
          <p className="max-w-xl text-base font-medium leading-7 text-slate-600 md:justify-self-end md:text-lg">
            Escolha uma acomodacao da pousada e fale com a equipe para consultar disponibilidade.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full px-7 md:px-10">
        <div className="-mx-4 grid border-b border-[#063A45]/10 md:grid-cols-2">
        {rooms.map((room) => (
          <article
            key={room.slug}
            className="group grid gap-6 border-t border-[#063A45]/10 px-4 py-8 md:grid-cols-[minmax(0,1fr)_18.75rem] md:gap-10 md:p-10 md:odd:border-r md:odd:border-[#063A45]/10"
          >
            <div className="flex min-h-[20.125rem] flex-col justify-between gap-8">
              <div className="space-y-5">
                <div className="space-y-3">
                  <h3 className="max-w-[19rem] font-heading text-3xl font-semibold leading-[1.05] text-slate-950">
                    {room.name}
                  </h3>
                  <div className="flex items-center gap-2 font-heading text-xl font-semibold text-[#063A45]">
                    <span className="text-sm font-medium text-slate-500">a partir de</span>
                    {currencyFormatter.format(room.pricePerNight)}
                  </div>
                </div>

                <div className="space-y-2.5 text-sm font-medium leading-5 text-slate-600">
                  <div className="flex items-center justify-between gap-4">
                    <span>{room.location}</span>
                    <MapPin className="h-4 w-4 shrink-0 text-[#0C6478]/40" />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Ate {room.capacity} hospedes</span>
                    <Users className="h-4 w-4 shrink-0 text-[#0C6478]/40" />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Pousada Aquino Mar</span>
                    <BedDouble className="h-4 w-4 shrink-0 text-[#0C6478]/40" />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>
                      Com a confianca de mais de {room.reviewCount} hospedes
                    </span>
                    <span className="flex shrink-0 items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="h-3.5 w-3.5 fill-[#0C6478] text-[#0C6478]"
                        />
                      ))}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href={`/quartos/${room.slug}`}
                className="inline-flex w-full items-center justify-between rounded-full bg-[#094F5F] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0C6478] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB8D9] focus-visible:ring-offset-2"
              >
                Ver Quarto
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </Link>
            </div>

            <Link
              href={`/quartos/${room.slug}`}
              className="relative order-first block aspect-[335/322] overflow-hidden bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB8D9] md:order-none md:h-[20.125rem] md:w-[18.75rem] md:aspect-auto"
            >
              <img
                src={room.images[0]}
                alt={room.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </Link>
          </article>
        ))}
        </div>
      </div>
    </section>
  )
}
