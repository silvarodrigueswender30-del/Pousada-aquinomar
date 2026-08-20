"use client"

import * as React from "react"
import { Calendar, MapPin, Star, Users } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Room } from "@/data/rooms"

interface BookingCardProps {
  room: Room
  className?: string
}

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
})

export function BookingCard({ room, className }: BookingCardProps) {
  const [checkIn, setCheckIn] = React.useState("")
  const [checkOut, setCheckOut] = React.useState("")
  const [guests, setGuests] = React.useState(1)

  const whatsappText = [
    `Olá! Vim pelo site e gostaria de reservar o quarto ${room.name} na Pousada Aquino Mar.`,
    `Check-in: ${checkIn || "a definir"}`,
    `Check-out: ${checkOut || "a definir"}`,
    `Hospedes: ${guests}`,
  ].join("\n")

  const whatsappUrl = `https://wa.me/5524998280363?text=${encodeURIComponent(whatsappText)}`

  return (
    <Card
      className={cn(
        "sticky top-24 overflow-hidden border-[#063A45]/10 bg-white p-5 shadow-xl shadow-[#063A45]/10 md:p-6",
        className,
      )}
    >
      <div className="space-y-6">
        <div>
          <p className="font-heading text-sm font-medium uppercase tracking-wide text-[#0C6478]">
            a partir de
          </p>
          <p className="mt-1 font-heading text-3xl font-semibold text-[#063A45] md:text-4xl">
            {currencyFormatter.format(room.pricePerNight)}
          </p>
          <p className="mt-1 text-sm text-slate-500">por noite</p>
        </div>

        <div className="space-y-4 text-sm text-slate-700">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#0C6478]" />
            <span>{room.location}</span>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="mt-2 h-5 w-5 shrink-0 text-[#0C6478]" />
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <label className="space-y-1">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Check-in
                </span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(event) => setCheckIn(event.target.value)}
                  className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-[#2FB8D9] focus:ring-2 focus:ring-[#2FB8D9]/20"
                />
              </label>
              <label className="space-y-1">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Check-out
                </span>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(event) => setCheckOut(event.target.value)}
                  className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-[#2FB8D9] focus:ring-2 focus:ring-[#2FB8D9]/20"
                />
              </label>
            </div>
          </div>

          <label className="flex items-center gap-3">
            <Users className="h-5 w-5 shrink-0 text-[#0C6478]" />
            <span className="sr-only">Numero de hospedes</span>
            <input
              type="number"
              min={1}
              max={room.capacity}
              value={guests}
              onChange={(event) => {
                const nextGuests = Number(event.target.value)
                setGuests(Math.min(Math.max(nextGuests || 1, 1), room.capacity))
              }}
              className="h-11 w-24 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-[#2FB8D9] focus:ring-2 focus:ring-[#2FB8D9]/20"
            />
            <span className="text-slate-600">ate {room.capacity} hospedes</span>
          </label>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-[#E4F6FA] p-4 text-sm text-[#063A45]">
          <div className="flex shrink-0 gap-0.5 pt-0.5" aria-label={`${room.rating} de 5 estrelas`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-[#2FB8D9] text-[#2FB8D9]" />
            ))}
          </div>
          <span className="font-medium">
            Com a confianca de mais de {room.reviewCount} hospedes
          </span>
        </div>

        <CTAButton href={whatsappUrl} className="w-full justify-center" variant="on-light">
          Reservar Agora
        </CTAButton>
      </div>
    </Card>
  )
}
