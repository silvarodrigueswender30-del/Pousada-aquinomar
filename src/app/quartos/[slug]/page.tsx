import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, Heart, MapPin, Star, Users, X } from "lucide-react"
import { BookingCard } from "@/components/ui/booking-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { rooms } from "@/data/rooms"
import { RoomDetailCarousel } from "@/components/ui/room-detail-carousel"
import { HotelRoomSchema } from "@/components/schema-markup"

import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);
  if (!room) return { title: "Quarto não encontrado | Pousada Aquino Mar" };
  return {
    title: ${room.name} em Paraty | Pousada Aquino Mar — Caborê, RJ,
    description: room.description.substring(0, 160),
    alternates: { canonical: 'https://pousada-aquinomar.vercel.app/quartos/' + slug }
  };
}

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
      <HotelRoomSchema room={room} />
      <section className="mx-auto w-full px-4 pt-8 md:px-10 md:pt-12">
        <Link href="/" className="text-sm font-medium text-brand-cta hover:text-brand-primary">
          Voltar para o inÃ­cio
        </Link>

        <RoomDetailCarousel images={room.images} name={room.name} />
      </section>

      <section className="mx-auto mt-10 grid w-full gap-10 px-4 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,420px)] lg:items-start xl:gap-12">
        <div className="space-y-12">
          <header className="border-b border-brand-primary/10 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-brand-text">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-brand-gold" />
                {room.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-4 w-4 text-brand-gold" />
                Ate {room.capacity} hospedes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                {room.rating.toFixed(1)} ({room.reviewCount} avaliacoes)
              </span>
            </div>
            <h1 className="mt-4 font-heading text-4xl font-light leading-tight text-brand-primary md:text-6xl">
              {room.name}
            </h1>
            <p className="mt-4 text-base font-medium text-brand-text">
              {room.roomCount} quarto - {room.bedSetup} - Wi-Fi gratis
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-brand-primary">Sobre o Quarto</h2>
            <p className="max-w-3xl text-base leading-8 text-brand-text md:text-lg">
              {room.description}
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-heading text-2xl font-semibold text-brand-primary">O que esta incluido</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {room.amenitiesIncluded.map((amenity) => (
                <div key={amenity} className="flex items-center gap-3 rounded-lg bg-brand-surface p-4 text-brand-text">
                  <Check className="h-5 w-5 shrink-0 text-brand-gold" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-heading text-2xl font-semibold text-brand-primary">O que NAO esta incluido</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {room.amenitiesNotIncluded.map((amenity) => (
                <div key={amenity} className="flex items-center gap-3 rounded-lg border border-brand-primary/10 bg-white p-4 text-brand-text">
                  <X className="h-5 w-5 shrink-0 text-slate-400" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-heading text-2xl font-semibold text-brand-primary">Destaques</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {room.highlights.map((highlight) => (
                <Card key={highlight} className="border-brand-primary/10 bg-white p-5 shadow-sm">
                  <Heart className="h-5 w-5 text-brand-gold" />
                  <p className="mt-4 leading-7 text-brand-text">{highlight}</p>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-heading text-2xl font-semibold text-brand-primary">Localizacao</h2>
            <div className="flex min-h-72 items-center justify-center rounded-lg border border-brand-primary/10 bg-[linear-gradient(135deg,var(--color-surface)_0%,var(--color-surface-alt)_55%,var(--color-cta-light)_100%)] p-6 text-center">
              <div>
                <MapPin className="mx-auto h-10 w-10 text-brand-gold" />
                <p className="mt-4 font-heading text-xl font-semibold text-brand-primary">{room.location}</p>
                <p className="mt-2 text-sm text-brand-text">Mapa interativo sera inserido aqui.</p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-heading text-2xl font-semibold text-brand-primary">Voce tambem pode gostar</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {suggestedRooms.map((suggestedRoom) => (
                <Card key={suggestedRoom.slug} className="overflow-hidden border-brand-primary/10 bg-white shadow-sm">
                  <Link href={`/quartos/${suggestedRoom.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light">
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={suggestedRoom.images[0]}
                        alt={`${suggestedRoom.name} na Pousada Aquino Mar em Paraty`}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="space-y-3 p-4">
                    <h3 className="font-heading text-lg font-semibold text-brand-primary">{suggestedRoom.name}</h3>
                    <p className="text-sm text-brand-text">
                      Acomoda {suggestedRoom.capacity} - {suggestedRoom.bedSetup}
                    </p>
                    <Button asChild className="w-full rounded-full bg-brand-cta text-white hover:brightness-90">
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




