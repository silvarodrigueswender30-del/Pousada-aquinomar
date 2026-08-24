import { CountingNumber } from "@/components/ui/counting-number"
import type { SVGProps } from "react"

function OrnamentalStarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 3.5l3.1 10 8.9-5.5-5.5 8.9 10 3.1-10 3.1 5.5 8.9-8.9-5.5-3.1 10-3.1-10-8.9 5.5 5.5-8.9-10-3.1 10-3.1-5.5-8.9 8.9 5.5L20 3.5Z" />
      <circle cx="20" cy="20" r="6.5" />
      <circle cx="20" cy="20" r="2" />
    </svg>
  )
}

function LaurelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 31.5c-5.5-4.1-7.4-11.7-4.3-18" />
      <path d="M27 31.5c5.5-4.1 7.4-11.7 4.3-18" />
      <path d="M8.6 15.2c-1.8-.5-3.1-1.8-3.8-3.7 2-.2 3.6.5 4.8 2" />
      <path d="M8.2 20.2c-1.9.1-3.5-.8-4.7-2.4 1.8-.8 3.6-.6 5.1.6" />
      <path d="M9.8 25c-1.8.7-3.6.3-5.1-.9 1.5-1.3 3.3-1.6 5.1-.9" />
      <path d="M12.8 28.9c-1.4 1.2-3.2 1.5-5.1.9 1.1-1.7 2.7-2.5 4.6-2.4" />
      <path d="M31.4 15.2c1.8-.5 3.1-1.8 3.8-3.7-2-.2-3.6.5-4.8 2" />
      <path d="M31.8 20.2c1.9.1 3.5-.8 4.7-2.4-1.8-.8-3.6-.6-5.1.6" />
      <path d="M30.2 25c1.8.7 3.6.3 5.1-.9-1.5-1.3-3.3-1.6-5.1-.9" />
      <path d="M27.2 28.9c1.4 1.2 3.2 1.5 5.1.9-1.1-1.7-2.7-2.5-4.6-2.4" />
      <circle cx="16.5" cy="17" r="3" />
      <circle cx="23.5" cy="17" r="3" />
      <path d="M10.8 27.5c1.3-3.8 4-5.9 7.2-5.9 1.1 0 1.9.3 2 .4.1-.1.9-.4 2-.4 3.2 0 5.9 2.1 7.2 5.9" />
    </svg>
  )
}

function MedalRibbonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="20" cy="15.5" r="8.5" />
      <circle cx="20" cy="15.5" r="4.2" />
      <path d="M15.4 22.7 12.2 35l7.8-4 7.8 4-3.2-12.3" />
      <path d="M16.2 29.1 20 27.2l3.8 1.9" />
      <path d="M17.1 7.8 20 4.8l2.9 3" />
    </svg>
  )
}

export function StatsBar() {
  return (
    <section id="avaliacoes" className="w-full scroll-mt-24 bg-brand-surface py-16 shadow-sm shadow-[#063A45]/5 md:py-20">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-3 gap-8 px-4 text-center">
        <div className="flex flex-col items-center md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-brand-gold/30">
          <OrnamentalStarIcon className="h-9 w-9 text-brand-gold" />
          <p className="mt-5 font-heading text-4xl font-light tracking-tight text-brand-primary md:text-5xl">
            <CountingNumber target={5} />.0
          </p>
          <span aria-hidden="true" className="mt-4 w-16 border-b border-brand-gold" />
          <p className="mt-3 text-xs font-medium uppercase tracking-widest text-brand-text/60">
            Nota no Google
          </p>
        </div>
        <div className="flex flex-col items-center md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-brand-gold/30">
          <LaurelIcon className="h-9 w-9 text-brand-gold" />
          <p className="mt-5 font-heading text-4xl font-light tracking-tight text-brand-primary md:text-5xl">
            <CountingNumber target={411} />+
          </p>
          <span aria-hidden="true" className="mt-4 w-16 border-b border-brand-gold" />
          <p className="mt-3 text-xs font-medium uppercase tracking-widest text-brand-text/60">
            Avaliações de Hóspedes
          </p>
        </div>
        <div className="flex flex-col items-center md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-brand-gold/30">
          <MedalRibbonIcon className="h-9 w-9 text-brand-gold" />
          <p className="mt-5 font-heading text-4xl font-light tracking-tight text-brand-primary md:text-5xl">
            {/* TODO: confirmar se 98% é dado real ou substituir por outra métrica (ex: anos de tradição, nota 9.8/10) */}
            <CountingNumber target={98} />%
          </p>
          <span aria-hidden="true" className="mt-4 w-16 border-b border-brand-gold" />
          <p className="mt-3 text-xs font-medium uppercase tracking-widest text-brand-text/60">
            Satisfação do Cliente
          </p>
        </div>
      </div>
    </section>
  )
}
