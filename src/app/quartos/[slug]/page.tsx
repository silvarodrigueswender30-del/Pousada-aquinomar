import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, Heart, MapPin, Star, Users, X } from "lucide-react"
import { BookingCard } from "@/components/ui/booking-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { rooms } from "@/data/rooms"

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }))
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const room = rooms.find((item) => item.slug === slug)

  if (!room) {
    notFound()
  }

  const suggestedRooms = rooms.filter((item) => item.slug !== room.slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-white pb-16 pt-20 md:pb-24">
      <section className="mx-auto w-full px-4 pt-8 md:px-10 md:pt-12">
        <Link href="/" className="text-sm font-medium text-[#0C6478] hover:text-[#063A45]">
          Voltar para o início
        </Link>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {room.images.slice(0, 2).map((image, index) => (
            <div key={`${image}-${index}`} className="aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 md:aspect-[16/11]">
              <img
                src={image}
                alt={`${room.name} - imagem ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 grid w-full gap-10 px-4 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,420px)] lg:items-start xl:gap-12">
        <div className="space-y-12">
          <header className="border-b border-slate-200 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[#0C6478]" />
                {room.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-4 w-4 text-[#0C6478]" />
                Ate {room.capacity} hospedes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-[#2FB8D9] text-[#2FB8D9]" />
                {room.rating.toFixed(1)} ({room.reviewCount} avaliacoes)
              </span>
            </div>
            <h1 className="mt-4 font-heading text-4xl font-light leading-tight text-slate-950 md:text-6xl">
              {room.name}
            </h1>
            <p className="mt-4 text-base font-medium text-slate-600">
              {room.roomCount} quarto - {room.bedSetup} - Wi-Fi gratis
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-[#063A45]">Sobre o Quarto</h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              {room.description}
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-heading text-2xl font-semibold text-[#063A45]">O que esta incluido</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {room.amenitiesIncluded.map((amenity) => (
                <div key={amenity} className="flex items-center gap-3 rounded-lg bg-[#E4F6FA] p-4 text-slate-700">
                  <Check className="h-5 w-5 shrink-0 text-[#0C6478]" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-heading text-2xl font-semibold text-[#063A45]">O que NAO esta incluido</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {room.amenitiesNotIncluded.map((amenity) => (
                <div key={amenity} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-slate-600">
                  <X className="h-5 w-5 shrink-0 text-slate-400" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-heading text-2xl font-semibold text-[#063A45]">Destaques</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {room.highlights.map((highlight) => (
                <Card key={highlight} className="border-[#063A45]/10 bg-white p-5 shadow-sm">
                  <Heart className="h-5 w-5 text-[#2FB8D9]" />
                  <p className="mt-4 leading-7 text-slate-700">{highlight}</p>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-heading text-2xl font-semibold text-[#063A45]">Localizacao</h2>
            <div className="flex min-h-72 items-center justify-center rounded-lg border border-[#063A45]/10 bg-[linear-gradient(135deg,#E4F6FA_0%,#FFFFFF_55%,#D9F2F7_100%)] p-6 text-center">
              <div>
                <MapPin className="mx-auto h-10 w-10 text-[#0C6478]" />
                <p className="mt-4 font-heading text-xl font-semibold text-[#063A45]">{room.location}</p>
                <p className="mt-2 text-sm text-slate-600">Mapa interativo sera inserido aqui.</p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-heading text-2xl font-semibold text-[#063A45]">Voce tambem pode gostar</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {suggestedRooms.map((suggestedRoom) => (
                <Card key={suggestedRoom.slug} className="overflow-hidden border-[#063A45]/10 bg-white shadow-sm">
                  <Link href={`/quartos/${suggestedRoom.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB8D9]">
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={suggestedRoom.images[0]}
                        alt={suggestedRoom.name}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="space-y-3 p-4">
                    <h3 className="font-heading text-lg font-semibold text-slate-950">{suggestedRoom.name}</h3>
                    <p className="text-sm text-slate-600">
                      Acomoda {suggestedRoom.capacity} - {suggestedRoom.bedSetup}
                    </p>
                    <Button asChild className="w-full rounded-full bg-[#094F5F] text-white hover:bg-[#0C6478]">
                      <Link href={`/quartos/${suggestedRoom.slug}`}>Ver Quarto</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:pt-1">
          <BookingCard room={room} />
        </aside>
      </section>
    </main>
  )
}

