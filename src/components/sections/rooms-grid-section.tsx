import Link from "next/link"
import { BedDouble, MapPin, Users } from "lucide-react"
import { rooms } from "@/data/rooms"
import { RoomImageCarousel } from "@/components/ui/room-image-carousel"

const roomLabels = ["CASAL", "FAMÍLIA"]
const whatsappNumber = "5524998280363"

export function RoomsGridSection() {
  return (
    <section
      id="quartos"
      className="w-full scroll-mt-24 overflow-hidden bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--color-surface)_36%,white)_0%,color-mix(in_oklab,var(--color-cta)_10%,white)_18%,color-mix(in_oklab,var(--color-cta)_10%,white)_100%)] py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.58fr)_minmax(18rem,0.42fr)] md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">
              ACOMODAÇÕES
            </p>
            <h2 className="mt-5 max-w-4xl font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
              Quartos para{" "}
              <span className="text-brand-gold">descansar em Paraty</span>
            </h2>
          </div>

          <div className="max-w-md md:justify-self-end">
            <p className="text-base leading-7 text-brand-text/75">
              Ambientes acolhedores, preparados para noites tranquilas e manhãs
              leves perto de tudo o que Paraty oferece.
            </p>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.24em] text-brand-primary">
              {String(rooms.length).padStart(2, "0")} acomodações
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-7 overflow-x-auto border-y border-brand-primary/10 py-5 text-sm font-medium text-brand-text/65 scrollbar-hide">
          <a
            href="#quartos"
            className="shrink-0 border-b border-brand-gold pb-1 text-brand-primary"
          >
            Todas
          </a>
          {rooms.map((room) => (
            <a
              key={room.slug}
              href={`#${room.slug}`}
              className="shrink-0 pb-1 transition hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light"
            >
              {room.name.replace("Suíte ", "")}
            </a>
          ))}
        </div>

        <div className="grid border-b border-brand-gold/30 lg:grid-cols-2 lg:divide-x lg:divide-brand-gold/30">
          {rooms.map((room, index) => {
            const whatsappText = `Olá! Gostaria de consultar disponibilidade e valores para a ${room.name} da Pousada Aquino Mar.`
            const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`

            return (
              <article
                id={room.slug}
                key={room.slug}
                className="flex scroll-mt-28 flex-col gap-8 border-t border-brand-gold/30 py-10 lg:px-10 lg:py-12 first:lg:pl-0 last:lg:pr-0"
              >
                <RoomImageCarousel
                  images={room.images}
                  slug={room.slug}
                  name={room.name}
                  photoCount={room.photoCount}
                  label={`${String(index + 1).padStart(2, "0")} — ${roomLabels[index] ?? room.name.toUpperCase()}`}
                />

                <div className="flex flex-1 flex-col gap-8">
                  <div>
                    <div className="flex items-start justify-between gap-6 border-b border-brand-gold/30 pb-5">
                      <h3 className="font-heading text-3xl font-normal leading-tight text-brand-primary">
                        {room.name}
                      </h3>
                      <p className="shrink-0 pt-1 text-right text-xs font-medium uppercase tracking-[0.18em] text-brand-text/55">
                        {room.roomCount} unidades
                      </p>
                    </div>

                    <p className="mt-6 text-base leading-7 text-brand-text/75">
                      {room.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-brand-gold/30 py-5 text-sm font-medium text-brand-text/75">
                    <span className="inline-flex items-center gap-2">
                      <Users className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                      Acomoda {room.capacity}
                    </span>
                    <span className="hidden h-1 w-1 rounded-full bg-brand-gold/60 sm:block" />
                    <span className="inline-flex items-center gap-2">
                      <BedDouble className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                      {room.bedSetup}
                    </span>
                    <span className="hidden h-1 w-1 rounded-full bg-brand-gold/60 sm:block" />
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                      {room.location}
                    </span>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light focus-visible:ring-offset-2"
                    >
                      Reservar esta suíte
                    </a>
                    <Link
                      href={`/quartos/${room.slug}`}
                      className="inline-flex items-center justify-center rounded-full border border-brand-primary/20 px-6 py-3.5 text-sm font-semibold text-brand-primary transition hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light focus-visible:ring-offset-2"
                    >
                      Ver detalhes →
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
