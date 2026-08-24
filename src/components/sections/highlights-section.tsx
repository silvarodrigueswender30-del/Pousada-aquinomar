"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import {
  ExpandingCards,
  type CardItem,
} from "@/components/ui/expanding-cards";

const paratyHighlights: CardItem[] = [
  {
    id: "praia-do-jabaquara",
    index: "01",
    title: "Praia do Jabaquara",
    category: "Praias",
    image: "/images/passeio/praia-do-jabaquara.avif",
    alt: "Praia do Jabaquara em Paraty com mar calmo e barcos próximos à areia",
    metadata: "Mar tranquilo · Próxima à pousada",
    actionLabel: "Descobrir o lugar →",
  },
  {
    id: "centro-historico",
    index: "02",
    title: "Centro Histórico",
    category: "História",
    image: "/images/passeio/centro-historico.avif",
    alt: "Rua de pedra com casarões coloniais no Centro Histórico de Paraty",
    metadata: "Ruas de pedra · Arquitetura colonial",
    actionLabel: "Descobrir o lugar →",
  },
  {
    id: "cachoeira-toboga",
    index: "03",
    title: "Cachoeira do Tobogã",
    category: "Natureza",
    image: "/images/passeio/cachoeira-toboga.avif",
    alt: "Cachoeira do Tobogã cercada por mata e pedras em Paraty",
    metadata: "Água doce · Passeio em meio à mata",
    actionLabel: "Descobrir o lugar →",
  },
  {
    id: "praia-do-pontal",
    index: "04",
    title: "Praia do Pontal",
    category: "Praias",
    image: "/images/passeio/praia-do-pontal.avif",
    alt: "Praia do Pontal em Paraty com barcos e montanhas ao fundo",
    metadata: "Orla tranquila · Cenário de Paraty",
    actionLabel: "Descobrir o lugar →",
  },
  {
    id: "praia-do-cais",
    index: "05",
    title: "Praia do Cais",
    category: "Passeios",
    image: "/images/passeio/praia-do-cais.avif",
    alt: "Barcos coloridos na Praia do Cais em Paraty",
    metadata: "Barcos coloridos · Ponto de partida",
    actionLabel: "Descobrir o lugar →",
  },
];

export function HighlightsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeItem = paratyHighlights[activeIndex] ?? paratyHighlights[0];
  const total = String(paratyHighlights.length).padStart(2, "0");

  return (
    <section
      id="destaques"
      className="relative w-full scroll-mt-24 overflow-hidden bg-brand-surface-alt py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.34fr)] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">
              CURADORIA LOCAL
            </p>
            <h2 className="mt-4 max-w-4xl font-heading text-4xl font-light leading-[1.02] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
              O que explorar perto da pousada
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-brand-text/70">
              Lugares especiais de Paraty, escolhidos por quem conhece cada caminho.
            </p>
          </div>

          <div className="flex items-center gap-4 lg:justify-end">
            <span className="font-heading text-5xl font-light text-brand-primary">
              {activeItem.index}
            </span>
            <span className="text-brand-gold" aria-hidden="true">
              /
            </span>
            <span className="font-heading text-2xl text-brand-text/40">
              {total}
            </span>
            <span
              aria-hidden="true"
              className="h-px min-w-16 flex-1 bg-brand-gold/50 lg:max-w-28"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden py-10 md:mt-16 md:py-14 lg:py-16">
        <div aria-hidden="true" className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
              className="absolute inset-0"
            >
              <Image
                src={activeItem.image}
                alt=""
                fill
                sizes="100vw"
                className="scale-105 object-cover blur-[2px]"
                quality={70}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-brand-primary-dark/72" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--color-surface-alt)_0%,color-mix(in_oklab,var(--color-surface-alt)_86%,transparent)_10%,transparent_32%,transparent_68%,color-mix(in_oklab,var(--color-surface-alt)_88%,transparent)_94%,var(--color-surface-alt)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_12%,color-mix(in_oklab,var(--color-accent-gold)_22%,transparent),transparent_34%),linear-gradient(90deg,color-mix(in_oklab,var(--color-primary-dark)_74%,transparent)_0%,transparent_48%,color-mix(in_oklab,var(--color-primary)_46%,transparent)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-10">
          <ExpandingCards
            items={paratyHighlights}
            activeIndex={activeIndex}
            onActiveChange={setActiveIndex}
            defaultActiveIndex={0}
          />
        </div>
      </div>
    </section>
  );
}
