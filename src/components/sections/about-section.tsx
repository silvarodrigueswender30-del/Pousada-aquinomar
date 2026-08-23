"use client"

import { motion } from "framer-motion"
import { Heart, Star } from "lucide-react"

const trustBadges = ["Google", "Booking", "Hotels.com"]
const power3Out = [0.22, 1, 0.36, 1] as const
const viewport = { once: true, margin: "0px 0px -20% 0px" } as const

const fadeUp40 = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: power3Out },
  },
}

const fadeUp30 = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: power3Out },
  },
}

const illustrationReveal = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: power3Out, delay: 0.25 },
  },
}

const statsGroup = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.65,
      staggerChildren: 0.3,
    },
  },
}

const statItemReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: power3Out },
  },
}

const logoGroup = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.12,
    },
  },
}

const logoReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: power3Out },
  },
}

import { useSafeInView } from "@/hooks/use-safe-in-view"

export function AboutSection() {
  const { ref, isInView } = useSafeInView();

  return (
    <section id="sobre" ref={ref} className="w-full scroll-mt-24 bg-white py-20 text-slate-950 max-[479px]:pb-8 max-[479px]:pt-16">
      <div className="box-border w-full max-w-full px-10 max-[479px]:px-5">
        <div className="mb-16 max-[479px]:mb-8">
          <div className="-mx-4 flex max-[479px]:flex-col">
            <div className="w-[22.5%] px-4 max-[479px]:w-full">
              <motion.div
                variants={fadeUp40}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mb-0 flex items-center gap-2 font-heading text-base font-medium leading-[130%] text-brand-gold max-[479px]:mb-6 max-[479px]:text-sm max-[479px]:font-normal"
              >
                <Heart className="h-[1.125rem] w-[1.125rem] fill-brand-cta/20 text-brand-gold" />
                <span>Sobre nós</span>
              </motion.div>
            </div>
            <div className="w-3/4 px-4 max-[479px]:w-full">
              <div className="flex flex-col gap-10 max-[479px]:gap-8">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, ease: power3Out, delay: 0.1 }}
                  className="font-heading text-[3.75rem] font-light leading-[110%] text-brand-primary max-[479px]:text-4xl max-[479px]:leading-[120%]"
                >
                  Mais que hospedagem,
                  <br />
                  um acolhimento de família
                </motion.h2>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 max-[479px]:flex max-[479px]:flex-col max-[479px]:gap-8">
          <motion.div
            variants={illustrationReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="aspect-[1336/1088] overflow-hidden bg-[linear-gradient(135deg,var(--color-surface)_0%,var(--color-surface)_52%,var(--color-surface)_100%)] max-[479px]:aspect-[335/366]"
            style={{ transform: "translateZ(0)" }}
          />

          <div className="flex flex-col gap-10 max-[479px]:gap-8">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: power3Out, delay: 0.45 }}
                className="text-[1.375rem] font-medium leading-[120%] text-brand-text max-[479px]:text-[1.375rem] max-[479px]:leading-[120%]"
              >
                A Pousada Aquino Mar é tocada pela Rose, seu esposo e sua filha — uma gestão
                genuinamente familiar que se reflete em cada detalhe do atendimento. Em Cabore,
                a poucos minutos do Centro Histórico de Paraty, oferecemos um refúgio tranquilo
                com o cuidado de quem trata cada hóspede como parte da família.
              </motion.p>
            </div>

            <motion.div
              variants={statsGroup}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid w-full max-w-full flex-1 grid-cols-2 gap-6"
            >
              <motion.div
                variants={statItemReveal}
                className="flex flex-col justify-between gap-8 pb-[1.875rem] max-[479px]:gap-[8.75rem]"
              >
                <div className="flex flex-col gap-5 max-[479px]:gap-2">
                  <p className="font-heading text-[2.8125rem] font-semibold leading-none text-brand-primary">
                    5.0
                  </p>
                  <p className="text-[1.125rem] font-medium leading-[130%] text-brand-text">
                    Nota no Google
                    <br />
                    (411 avaliações)
                  </p>
                </div>
                <p className="text-base font-medium leading-[130%] text-slate-500">
                  A escolha de quem busca hospitalidade de verdade, não apenas hospedagem.
                </p>
              </motion.div>

              <motion.div
                variants={statItemReveal}
                className="flex flex-col justify-between gap-8 pb-[1.875rem] max-[479px]:gap-[8.75rem]"
              >
                <div className="flex flex-col gap-5 max-[479px]:gap-2">
                  <p className="font-heading text-[2.8125rem] font-semibold leading-none text-brand-primary">
                    9.8/10
                  </p>
                  <p className="text-[1.125rem] font-medium leading-[130%] text-brand-text">
                    Nota no
                    <br />
                    Hotels.com
                  </p>
                </div>
                <motion.div
                  variants={logoGroup}
                  className="flex justify-between gap-4 max-[479px]:grid max-[479px]:grid-cols-2 max-[479px]:gap-4"
                >
                  {trustBadges.map((badge) => (
                    <motion.span
                      key={badge}
                      variants={logoReveal}
                      className="inline-flex items-center gap-2 text-sm font-medium leading-[130%] text-slate-500"
                    >
                      <Star className="h-3.5 w-3.5 fill-brand-gold/20 text-brand-gold" />
                      {badge}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
