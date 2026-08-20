"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";

const pointsOfInterest = [
  "Praia do Jabaquara",
  "Praia do Cais",
  "Praia do Pontal",
  "Cachoeira do Tobogã",
  "Igreja de Santa Rita",
  "Centro Histórico de Paraty",
];

export function LogoMarquee() {
  return (
    // TODO: substituir gradiente por imagem real do mar/praia quando disponivel
    <section className="flex w-full items-center bg-gradient-to-r from-[#063A45] via-[#0C6478] to-[#063A45] px-5 py-5 sm:px-8 md:px-12">
      <div className="mr-5 shrink-0 border-r border-white/25 pr-5 max-sm:mr-4 max-sm:pr-4">
        <p className="max-w-[8.5rem] whitespace-normal text-[0.6875rem] font-semibold uppercase leading-tight tracking-[0.18em] text-white/75 sm:max-w-none sm:whitespace-nowrap sm:text-xs">
          Pontos de interesse
        </p>
      </div>
      <div className="flex-1 min-w-0">
        <Marquee className="[--gap:2.25rem]" duration={28} fade={true} fadeAmount={10}>
          {pointsOfInterest.map((point) => (
            <span
              key={point}
              className="inline-flex items-center gap-9 whitespace-nowrap font-heading text-xl font-light leading-none text-white/70 transition-colors hover:text-white sm:text-2xl"
            >
              {point}
              <span aria-hidden="true" className="h-7 w-px bg-white/35" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
