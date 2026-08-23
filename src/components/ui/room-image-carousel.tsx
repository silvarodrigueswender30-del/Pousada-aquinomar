"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Images } from "lucide-react"

interface RoomImageCarouselProps {
  images: string[]
  slug: string
  name: string
  photoCount: number
}

export function RoomImageCarousel({ images, slug, name, photoCount }: RoomImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

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
    <div className="group/carousel relative aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-slate-100">
      <Link
        href={`/quartos/${slug}`}
        className="relative block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light"
      >
        <img
          src={images[currentIndex]}
          alt={`${name} - foto ${currentIndex + 1}`}
          className="h-full w-full object-cover transition-all duration-300"
        />
      </Link>
      
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-slate-800 opacity-0 shadow backdrop-blur transition-all hover:bg-white hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light group-hover/carousel:opacity-100"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-slate-800 opacity-0 shadow backdrop-blur transition-all hover:bg-white hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light group-hover/carousel:opacity-100"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-brand-primary/85 px-3 py-1.5 text-xs font-semibold text-white">
        <Images className="h-3.5 w-3.5" />
        {photoCount}
      </span>
      
      {images.length > 1 && (
        <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === currentIndex ? "w-3 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
