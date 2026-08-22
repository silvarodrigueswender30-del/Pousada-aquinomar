import Link from "next/link"
import { BedDouble, Images, MapPin, Users, Wifi } from "lucide-react"
import { rooms } from "@/data/rooms"
import { RoomImageCarousel } from "@/components/ui/room-image-carousel"

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
              Opcoes de quarto
            </h2>
          </div>
          <p className="max-w-xl text-base font-medium leading-7 text-slate-600 md:justify-self-end md:text-lg">
            Confira as acomodacoes reais da Pousada Aquino Mar e fale com a equipe para consultar disponibilidade e valores.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full px-7 md:px-10">
        <div className="flex items-center justify-between border-b border-[#063A45]/10 py-4 text-sm font-medium text-slate-600">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-[#063A45]/10 px-3 py-1 text-[#063A45]">
              Nossas Categorias
            </span>
            <span className="rounded-full border border-[#063A45]/10 px-3 py-1">
              Casal
            </span>
            <span className="rounded-full border border-[#063A45]/10 px-3 py-1">
              Múltipla
            </span>
          </div>
          <span>Mostrando as {rooms.length} categorias (18 suítes no total)</span>
        </div>

        <div className="-mx-4 grid border-b border-[#063A45]/10 lg:grid-cols-2">
        {rooms.map((room) => (
          <article
            key={room.slug}
            className="group flex flex-col border-t border-[#063A45]/10 px-4 py-8 md:p-5 lg:border-r lg:border-[#063A45]/10 lg:[&:nth-child(2n)]:border-r-0"
          >
            <RoomImageCarousel
              images={room.images}
              slug={room.slug}
              name={room.name}
              photoCount={room.photoCount}
            />

            <div className="flex min-h-[18rem] flex-1 flex-col justify-between gap-8 rounded-b-lg border-x border-b border-[#063A45]/10 bg-white p-5">
              <div className="space-y-5">
                <h3 className="font-heading text-xl font-semibold leading-tight text-slate-950">
                  {room.name}
                </h3>

                <div className="space-y-2.5 text-sm font-medium leading-5 text-slate-600">
                  <div className="flex items-center justify-between gap-4">
                    <span>{room.roomCount} quarto</span>
                    <MapPin className="h-4 w-4 shrink-0 text-[#0C6478]/40" />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Acomoda {room.capacity}</span>
                    <Users className="h-4 w-4 shrink-0 text-[#0C6478]/40" />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>{room.bedSetup}</span>
                    <BedDouble className="h-4 w-4 shrink-0 text-[#0C6478]/40" />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Wi-Fi gratis</span>
                    <Wifi className="h-4 w-4 shrink-0 text-[#0C6478]/40" />
                  </div>
                </div>
              </div>

              <Link
                href={`/quartos/${room.slug}`}
                className="inline-flex w-full items-center justify-between rounded-full bg-[#094F5F] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0C6478] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB8D9] focus-visible:ring-offset-2"
              >
                Ver detalhes
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </Link>
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  )
}
