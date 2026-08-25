"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Heart } from "lucide-react"

import { useSafeInView } from "@/hooks/use-safe-in-view"

const motionEase = [0.25, 0.1, 0.25, 1] as const

export function OurStorySection() {
  const { ref, isInView } = useSafeInView()
  const shouldReduceMotion = useReducedMotion()
  const textY = shouldReduceMotion ? 0 : 24
  const imageX = shouldReduceMotion ? 0 : 30
  const imageScale = shouldReduceMotion ? 1 : 0.96
  const baseTransition = shouldReduceMotion
    ? { duration: 0.2 }
    : { duration: 0.62, ease: motionEase }

  return (
    <section
      id="nossa-historia"
      ref={ref}
      className="w-full scroll-mt-24 overflow-hidden bg-brand-surface-alt pb-8 pt-16 text-brand-text md:pb-10 md:pt-24 lg:pb-12 lg:pt-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-14 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: textY }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: textY }}
            transition={baseTransition}
            className="max-w-xl"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">
              NOSSA HISTÓRIA
            </p>

            <h2 className="mt-5 max-w-xl font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
              <span className="block">Um sobrenome,</span>
              <span className="block">
                uma <span className="text-brand-gold">família</span>,
              </span>
              <span className="block">uma pousada</span>
            </h2>

            <div aria-hidden="true" className="mt-7 h-px w-20 bg-brand-gold/70" />

            <p className="mt-8 max-w-xl text-base leading-7 text-brand-text/80">
              O nome Aquino Mar carrega o sobrenome da família que também está por trás
              da Aquinotour, agência de passeios náuticos da região. É a Rose, o esposo
              e a filha tocando o negócio com as próprias mãos e recebendo cada hóspede
              como visita de casa.
            </p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, x: imageX }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imageX }}
            transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="relative md:pl-4"
          >
            <div
              aria-hidden="true"
              className="absolute -left-4 top-8 hidden h-[calc(100%-4rem)] w-px bg-brand-gold/35 md:block"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-brand-surface">
              <Image
                src="/images/historia/foto-pousada04.avif"
                alt="Área da piscina da Pousada Aquino Mar na propriedade"
                fill
                sizes="(max-width: 767px) 100vw, 48vw"
                className="object-cover object-center"
                quality={82}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: imageScale }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: imageScale }
              }
              transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.24 }}
              className="absolute bottom-5 right-4 w-[30%] rotate-[0.75deg] overflow-hidden rounded-xl border-4 border-brand-surface-alt bg-brand-surface-alt shadow-lg shadow-brand-primary/15 sm:bottom-7 sm:right-6 sm:w-[31%] md:bottom-8 md:-right-4 md:w-[30%]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/historia/foto-pousada05.avif"
                  alt="Café da manhã preparado com bolo, frutas, pão de queijo e café"
                  fill
                  sizes="(max-width: 767px) 34vw, 16vw"
                  className="object-cover object-center"
                  quality={82}
                />
              </div>
            </motion.div>
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: textY }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: textY }}
            transition={{ ...baseTransition, delay: shouldReduceMotion ? 0 : 0.18 }}
            className="max-w-xl md:col-start-1 md:row-start-2"
          >
            <p className="text-base leading-7 text-brand-text/80">
              Essa proximidade aparece em cada detalhe: no café da manhã feito com
              carinho, na atenção redobrada à limpeza dos quartos e na disposição de
              indicar o melhor passeio ou a praia mais tranquila para quem está de
              passagem por Paraty.
            </p>

            <p className="mt-9 font-heading text-2xl italic leading-snug text-brand-primary md:text-3xl">
              Cada detalhe carrega um pouco da nossa história.
            </p>

            <p className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-text/75">
              <Heart
                className="h-4 w-4 fill-brand-gold/25 text-brand-gold"
                aria-hidden="true"
              />
              Família Aquino
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
