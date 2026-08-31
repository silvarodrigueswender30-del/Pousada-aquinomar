"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle, Minus, Plus } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"
import { groupFaqs, groupsWhatsappHref } from "./groups-data"

export function GroupsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="w-full scroll-mt-24 bg-brand-surface py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid overflow-hidden lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)]">
          <div className="bg-brand-primary-dark px-6 py-12 text-white md:px-8 lg:px-10 lg:py-14">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold-light">
              FAQ PARA GRUPOS
            </p>
            <h2 className="mt-5 font-heading text-[2.45rem] font-light leading-[1.04] tracking-tight text-white md:text-5xl">
              Tire suas dúvidas antes da cotação.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/76">
              Respostas seguras para organizadores, agências e responsáveis por excursões.
            </p>
            <div className="mt-10 border-t border-brand-gold/45 pt-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-gold/35 text-brand-gold-light">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-normal leading-tight text-white">
                    Precisa alinhar um caso específico?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">
                    Fale diretamente com a equipe da pousada e informe o perfil do seu grupo.
                  </p>
                </div>
              </div>
              <CTAButton href={groupsWhatsappHref} variant="brand" className="mt-6 focus-visible:ring-brand-cta-light">
                Falar sobre meu grupo
              </CTAButton>
            </div>
          </div>

          <div className="bg-brand-surface-alt px-6 py-6 md:px-8 lg:px-12 lg:py-10">
            {groupFaqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div key={faq.question} className="border-b border-brand-gold/30">
                  <button
                    type="button"
                    onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                    className="group flex w-full items-center justify-between gap-4 rounded-sm py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light focus-visible:ring-offset-2 md:py-7"
                    aria-expanded={isOpen}
                  >
                    <span className="flex min-w-0 flex-1 items-start gap-4 md:gap-6">
                      <span className="pt-1 text-xs font-medium tracking-[0.18em] text-brand-gold/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-lg font-normal leading-tight text-brand-primary transition-colors duration-200 group-hover:text-brand-gold md:text-xl">
                        {faq.question}
                      </span>
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-gold/30 bg-transparent text-brand-gold transition-colors duration-200 group-hover:border-brand-gold">
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pl-14 pt-1 text-base leading-7 text-brand-text/75 md:pb-7 md:pl-[4.5rem]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function GroupsFinalCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-primary-dark py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_16%,color-mix(in_oklab,var(--color-cta)_18%,transparent),transparent_34%),linear-gradient(135deg,var(--color-primary)_0%,var(--color-primary-dark)_78%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-7 text-center text-white md:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold-light">
          COTAÇÃO PARA GRUPOS
        </p>
        <h2 className="mt-5 font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl">
          Está organizando uma viagem para Paraty?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/78 md:text-lg">
          Conte para a gente sobre seu grupo e consulte as possibilidades de hospedagem para a sua data.
        </p>
        <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <CTAButton href={groupsWhatsappHref} variant="brand" className="justify-center">
            Solicitar cotação para meu grupo
          </CTAButton>
          <CTAButton href={groupsWhatsappHref} variant="on-dark" className="justify-center">
            Falar pelo WhatsApp
          </CTAButton>
        </div>
        <p className="mt-6 text-sm font-medium text-white/62">
          Atendimento direto com a Pousada Aquino Mar.
        </p>
      </div>
    </section>
  )
}
