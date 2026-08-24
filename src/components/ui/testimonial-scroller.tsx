"use client"

import * as React from "react"
import { useReducedMotion } from "framer-motion"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TestimonialItem {
  id: string
  author: string
  text: string
  source?: string
}

export const TestimonialCard = ({ author, text, source }: TestimonialItem) => {
  return (
    <div className="flex w-80 flex-shrink-0 flex-col items-start gap-4 rounded-xl border border-brand-gold/25 bg-brand-surface-alt p-6 shadow-sm shadow-brand-primary/5 sm:w-96">
      <span className="font-heading text-4xl leading-none text-brand-gold/30" aria-hidden="true">
        “
      </span>
      <div className="flex items-center gap-1 text-brand-gold" aria-label="5 estrelas">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4" fill="currentColor" strokeWidth={1.5} />
        ))}
      </div>
      <p className="text-base leading-relaxed text-brand-text/82">{text}</p>
      <div className="mt-auto flex flex-col">
        <span className="font-heading font-normal text-brand-primary">{author}</span>
        {source && <span className="text-sm text-brand-text/60">{source}</span>}
      </div>
    </div>
  )
}

export const HorizontalScroller = ({
  children,
  speed = "40s",
  direction = "left",
}: {
  children: React.ReactNode
  speed?: string
  direction?: "left" | "right"
}) => {
  const shouldReduceMotion = useReducedMotion()
  const animationClass =
    shouldReduceMotion
      ? ""
      : direction === "right" ? "animate-scroll-horizontal-reverse" : "animate-scroll-horizontal"
  const style = { "--scroll-duration": speed } as React.CSSProperties

  return (
    <div className="group relative w-full overflow-hidden before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-[linear-gradient(to_right,var(--color-surface)_0%,transparent_100%)] after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-[linear-gradient(to_left,var(--color-surface)_0%,transparent_100%)] md:before:w-28 md:after:w-28">
      <div className={cn("flex", animationClass)} style={style}>
        <div className="flex flex-shrink-0 items-stretch justify-center gap-6 px-3 sm:px-4">
          {children}
        </div>
        <div
          className="flex flex-shrink-0 items-stretch justify-center gap-6 px-3 sm:px-4"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  )
}
