"use client"

import * as React from "react"
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
    <div className="flex w-80 flex-shrink-0 flex-col items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:w-96">
      <div className="flex items-center gap-1 text-[#0C6478]" aria-label="5 estrelas">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4" fill="currentColor" strokeWidth={1.5} />
        ))}
      </div>
      <p className="text-base leading-relaxed text-slate-600">{text}</p>
      <div className="mt-auto flex flex-col">
        <span className="font-heading font-medium text-slate-950">{author}</span>
        {source && <span className="text-sm text-slate-500">{source}</span>}
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
  const animationClass =
    direction === "right" ? "animate-scroll-horizontal-reverse" : "animate-scroll-horizontal"
  const style = { "--scroll-duration": speed } as React.CSSProperties

  return (
    <div className="group relative w-full overflow-hidden">
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
