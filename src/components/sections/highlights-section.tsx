"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useState } from "react";

import {
  ExpandingCards,
  type CardItem,
} from "@/components/ui/expanding-cards";

const paratyHighlights: CardItem[] = [
  {
    id: "praia-de-sao-goncalo",
    index: "01",
    title: "Praia de São Gonçalo",
    category: "Praias",
    image: "/images/passeio/praia-de-sao-goncalo.avif",
    alt: "Praia de São Gonçalo em Paraty com faixa de areia clara e mar tranquilo",
    metadata: "Mar calmo · Boa para famílias",
    actionLabel: "Descobrir o lugar →",
  },
  {
    id: "passeio-de-escuna",
    index: "02",
    title: "Passeio de Escuna",
    category: "Serviço Aquinomar",
    image: "/images/passeio/passeio-de-escuna.avif",
    alt: "Passeio de escuna em Paraty navegando por praias de mar azul",
    metadata: "Praias de Paraty · Serviço Aquinomar",
    actionLabel: "Descobrir o lugar →",
  },
  {
    id: "passeio-de-jeep",
    index: "03",
    title: "Passeio de Jeep",
    category: "Serviço Aquinomar",
    image: "/images/passeio/passeio-de-jeep.avif",
    alt: "Passeio de jeep em Paraty por roteiro de natureza e aventura",
    metadata: "Roteiro de aventura · Serviço Aquinomar",
    actionLabel: "Descobrir o lugar →",
  },
  {
    id: "ilha-do-pelado",
    index: "04",
    title: "Ilha do Pelado",
    category: "Ilhas",
    image: "/images/passeio/ilha-do-pelado.avif",
    alt: "Ilha do Pelado em Paraty com mar transparente e vegetação costeira",
    metadata: "Travessia curta · Mar cristalino",
    actionLabel: "Descobrir o lugar →",
  },
  {
    id: "praia-da-trindade",
    index: "05",
    title: "Praia da Trindade",
    category: "Praias",
    image: "/images/passeio/praia-da-trindade.avif",
    alt: "Praia da Trindade em Paraty com mar azul e paisagem preservada",
    metadata: "Vila caiçara · Natureza preservada",
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
      className="relative w-full scroll-mt-24 overflow-hidden bg-brand-surface-alt pb-0 pt-6 md:pt-8 lg:pt-10"
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

      <div className="relative mt-10 overflow-hidden pb-24 pt-10 md:mt-12 md:pb-32 md:pt-14 lg:pb-40 lg:pt-16">
        <div aria-hidden="true" className="absolute inset-0 z-0">
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
                className="scale-[1.03] object-cover"
                quality={70}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-brand-primary-dark/56" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--color-surface-alt)_0%,color-mix(in_oklab,var(--color-surface-alt)_72%,transparent)_9%,transparent_30%,transparent_70%,color-mix(in_oklab,var(--color-surface-alt)_52%,transparent)_88%,var(--color-surface-alt)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_12%,color-mix(in_oklab,var(--color-accent-gold)_18%,transparent),transparent_34%),linear-gradient(90deg,color-mix(in_oklab,var(--color-primary-dark)_58%,transparent)_0%,transparent_50%,color-mix(in_oklab,var(--color-primary)_34%,transparent)_100%)]" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-[linear-gradient(to_bottom,var(--color-surface-alt)_0%,color-mix(in_oklab,var(--color-surface-alt)_88%,transparent)_18%,color-mix(in_oklab,var(--color-surface-alt)_52%,transparent)_48%,color-mix(in_oklab,var(--color-surface-alt)_18%,transparent)_76%,transparent_100%)] sm:h-28 md:h-36"
        />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-5 md:px-10">
          <ExpandingCards
            items={paratyHighlights}
            activeIndex={activeIndex}
            onActiveChange={setActiveIndex}
            defaultActiveIndex={0}
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-[linear-gradient(to_bottom,transparent_0%,color-mix(in_oklab,var(--color-surface-alt)_30%,transparent)_35%,color-mix(in_oklab,var(--color-surface-alt)_76%,transparent)_70%,var(--color-surface-alt)_100%)] sm:h-36 md:h-44"
        />
      </div>
    </section>
  );
}


