"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Heart } from "lucide-react"

import { useSafeInView } from "@/hooks/use-safe-in-view"

export function AboutSection() {
  const { ref, isInView } = useSafeInView()
  const shouldReduceMotion = useReducedMotion()
  const imageX = shouldReduceMotion ? 0 : -32
  const imageY = shouldReduceMotion ? 0 : 24
  const textY = shouldReduceMotion ? 0 : 28
  const transition = shouldReduceMotion
    ? { duration: 0.2 }
    : { type: "spring" as const, bounce: 0, duration: 0.65 }

  return (
    <section
      id="sobre"
      ref={ref}
      className="w-full scroll-mt-24 overflow-hidden bg-brand-surface py-16 text-brand-text md:py-24 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 md:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] md:gap-16 md:px-10 lg:gap-24">
        <motion.figure
          initial={{ opacity: 0, x: imageX }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imageX }}
          transition={transition}
          className="relative pb-12 sm:pb-14 md:pb-10"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-brand-surface-alt shadow-2xl shadow-brand-primary/10">
            <Image
              src="/images/hero/hero01.avif"
              alt="Piscina da Pousada Aquino Mar com espreguiçadeiras e logo ao fundo"
              fill
              sizes="(min-width: 1024px) 47vw, (min-width: 768px) 48vw, calc(100vw - 40px)"
              className="object-cover object-center"
              quality={82}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: imageY }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: imageY }}
            transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.16 }}
            className="absolute bottom-0 right-0 w-[36%] overflow-hidden rounded-xl border-4 border-brand-surface-alt bg-brand-surface-alt shadow-xl shadow-brand-primary/20 sm:w-[34%] md:right-0 md:w-[38%] lg:-right-5"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/cafe-02.avif"
                alt="Café da manhã da Pousada Aquino Mar com bolo, frutas e café"
                fill
                sizes="(min-width: 1024px) 18vw, (min-width: 768px) 20vw, 34vw"
                className="object-cover object-center"
                quality={82}
              />
            </div>
          </motion.div>
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: textY }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: textY }}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="max-w-xl md:justify-self-end"
        >
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">
            SOBRE NÓS
          </p>

          <h2 className="mt-5 max-w-2xl font-heading text-[2.35rem] font-light leading-[1.04] tracking-tight text-brand-primary md:text-5xl lg:text-6xl">
            <span className="block">Mais que hospedagem,</span>
            <span className="block">
              um <span className="text-brand-gold">acolhimento de família</span>
            </span>
          </h2>

          <span aria-hidden="true" className="mt-7 block h-px w-20 bg-brand-gold/70" />

          <div className="mt-8 space-y-5 text-base leading-7 text-brand-text/85 md:text-lg md:leading-8">
            <p>
              Na Pousada Aquino Mar, a hospitalidade nasce do cuidado de uma família que
              recebe cada visitante com atenção, proximidade e carinho.
            </p>
            <p>
              Em um ambiente tranquilo e acolhedor, cada detalhe é pensado para que sua
              estadia em Paraty seja leve, confortável e especial.
            </p>
          </div>

          <p className="mt-9 max-w-lg font-heading text-2xl italic leading-snug text-brand-primary md:text-3xl">
            Aqui, cada hóspede é recebido como parte da família.
          </p>

          <p className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-text/75">
            <Heart
              className="h-4 w-4 fill-brand-gold/20 text-brand-gold"
              aria-hidden="true"
            />
            Hospitalidade familiar em Paraty
          </p>
        </motion.div>
      </div>
    </section>
  )
}
