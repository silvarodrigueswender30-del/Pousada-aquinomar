"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface RoomDetailCarouselProps {
  images: string[]
  name: string
}

export function RoomDetailCarousel({ images, name }: RoomDetailCarouselProps) {
  const [current, setCurrent] = React.useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))

  const touchStartX = React.useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    touchStartX.current = null
  }

  const progress = `${((current + 1) / images.length) * 100}%`

  return (
    <div className="mt-6 space-y-3">
      {/* Main slide */}
      <div
        className="relative w-full overflow-hidden rounded-xl bg-slate-100"
        style={{ aspectRatio: "16/9" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Image
          key={current}
          src={images[current]}
          alt={`${name} na Pousada Aquino Mar em Paraty - foto ${current + 1}`}
          fill
          priority={current === 0}
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) calc(100vw - 80px), 1100px"
          className="object-cover transition-opacity duration-300"
          quality={88}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light"
              aria-label="Proxima imagem"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
          {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>

        {images.length > 1 && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-white/25">
            <div
              className="h-full bg-brand-gold transition-[width] duration-300"
              style={{ width: progress }}
            />
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setCurrent(i)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light sm:h-20 sm:w-32 ${
                i === current
                  ? "border-brand-gold opacity-100"
                  : "border-transparent opacity-60 hover:opacity-90"
              }`}
              aria-label={`Ver foto ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${name} na Pousada Aquino Mar em Paraty - miniatura ${i + 1}`}
                fill
                sizes="128px"
                className="object-cover"
                quality={60}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

