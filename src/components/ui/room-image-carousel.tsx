"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface RoomImageCarouselProps {
  images: string[]
  slug: string
  name: string
  photoCount: number
  label: string
}

export function RoomImageCarousel({
  images,
  slug,
  name,
  photoCount,
  label,
}: RoomImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const progress = `${((currentIndex + 1) / images.length) * 100}%`

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const goToPrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="group/carousel relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-brand-surface-alt">
      <Link
        href={`/quartos/${slug}`}
        className="relative block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light"
      >
        <Image
          src={images[currentIndex]}
          alt={`${name} - foto ${currentIndex + 1}`}
          fill
          sizes="(max-width: 1023px) calc(100vw - 40px), 44vw"
          className="object-cover transition-transform duration-500 motion-safe:group-hover/carousel:scale-[1.015]"
          quality={82}
        />
      </Link>

      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-brand-primary/85 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white">
        {label}
      </div>
      
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-brand-primary/70 text-white backdrop-blur-sm transition hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-brand-primary/70 text-white backdrop-blur-sm transition hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </>
      )}

      <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center rounded-full bg-brand-primary/85 px-3 py-1.5 text-xs font-semibold text-white">
        {String(currentIndex + 1).padStart(2, "0")} / {String(photoCount).padStart(2, "0")}
      </span>
      
      {images.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-white/35">
          <div
            className="h-full bg-brand-gold transition-[width] duration-300"
            style={{ width: progress }}
          />
        </div>
      )}
    </div>
  )
}
