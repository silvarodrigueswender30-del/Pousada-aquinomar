"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const pointsOfInterest = [
  "Praia de São Gonçalo",
  "Ilha do Pelado",
  "Praia da Trindade",
  "Passeio de Escuna",
  "Passeio de Jeep",
  "Igreja de Santa Rita",
];

export function LogoMarquee() {
  return (
    // TODO: substituir gradiente por imagem real do mar/praia quando disponivel
    <section id="pontos-de-interesse" className="flex w-full scroll-mt-24 items-center bg-gradient-to-r from-brand-primary via-brand-primary-dark to-brand-primary px-5 py-5 sm:px-8 md:px-12">
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
              <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-gold-light" />
              {point}
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand-gold-light/70" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
