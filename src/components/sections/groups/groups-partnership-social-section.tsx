"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import {
  HorizontalScroller,
  TestimonialCard,
  type TestimonialItem,
} from "@/components/ui/testimonial-scroller"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { partnershipBenefits } from "./groups-data"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules"

const groupMomentImages = [
  { src: "/images/galeria/clientes/cliente-1.avif", alt: "Família hospedada vivendo momentos especiais na Pousada Aquino Mar" },
  { src: "/images/galeria/clientes/cliente-4.avif", alt: "Grupo reunido em uma viagem para Paraty" },
  { src: "/images/cafe-aquino.avif", alt: "Hóspedes tomando café da manhã na Pousada Aquino Mar" },
  { src: "/images/sobre/foto-pousada01.avif", alt: "Piscina da Pousada Aquino Mar" },
  { src: "/images/galeria/clientes/cliente-6.avif", alt: "Família explorando a região de Paraty" },
  { src: "/images/galeria/clientes/cliente-12.avif", alt: "Sorrisos de hóspedes na pousada" },
  { src: "/images/galeria/clientes/cliente-8.avif", alt: "Momentos especiais vividos por hóspedes da pousada" },
  { src: "/images/galeria/clientes/cliente-10.avif", alt: "Mais momentos de alegria de hóspedes em Paraty" },
  { src: "/images/cafe-03.avif", alt: "Café da manhã da Pousada Aquino Mar preparado para hóspedes" },
  { src: "/images/location/foto-pousada-03.avif", alt: "Área externa da Pousada Aquino Mar em Paraty" },
]

const testimonials: TestimonialItem[] = [
  {
    id: "roseli-ferreira",
    author: "Roseli Ferreira",
    source: "Google",
    text: "Pousada maravilhosa! Quartos grandes, tudo limpinho, café da manhã com tudo fresquinho. O atendimento da família que é proprietária foi show! Sempre prontos a ajudar.",
  },
  {
    id: "idalete-pacheco",
    author: "Idalete Pacheco",
    source: "Google",
    text: "Café da manhã da pousada excelente, com grande variedade de bolos, frios, frutas e sucos naturais. A limpeza dos quartos e das áreas comuns é impecável.",
  },
  {
    id: "danilo-romeu",
    author: "Danilo Romeu",
    source: "Google",
    text: "Quarto novo, impecável, cama grande, ar condicionado muito bom. Sem contar o café da manhã excelente e o serviço de atendimento muito bom.",
  },
  {
    id: "jose-orlando-albiero",
    author: "José Orlando Albiero",
    source: "Google",
    text: "Profissionais super capacitados, atendimento de primeira classe. Gratidão ao senhor Tiago e sua família pelo acolhimento maravilhoso.",
  },
]

export function GroupsPartnershipSection() {
  return (
    <section className="w-full overflow-hidden bg-brand-surface py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">
              PARCERIA COM ORGANIZADORES
            </p>
            <h2 className="mt-5 max-w-3xl font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
              Uma parceria para quem traz grupos a Paraty.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-brand-text/75 md:text-lg">
              Cada viagem tem uma configuração diferente. Por isso, nosso atendimento para grupos começa pela conversa direta com quem está organizando a experiência.
            </p>
          </div>

          <div className="grid border-y border-brand-gold/35 sm:grid-cols-2 sm:border-x">
            {partnershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <article key={benefit.title} className="border-b border-brand-gold/35 p-6 last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(3)]:border-b-0">
                  <span className="text-xs font-medium tracking-[0.18em] text-brand-gold/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="mt-6 h-9 w-9 text-brand-gold" strokeWidth={1.25} aria-hidden="true" />
                  <h3 className="mt-5 font-heading text-2xl font-normal leading-tight text-brand-primary">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-brand-text/72 sm:text-base">
                    {benefit.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function GroupsMomentsSection() {
  const shouldReduceMotion = useReducedMotion()

  const css = `
  .pam-groups-moments-swiper {
    width: 100%;
    overflow: hidden;
    padding-bottom: 64px;
    padding-top: 18px;
  }

  .pam-groups-moments-swiper .swiper-slide {
    position: relative;
    height: clamp(390px, 32vw, 460px);
    border-radius: 16px;
    overflow: hidden;
  }

  .pam-groups-moments-swiper .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .pam-groups-moments-swiper .swiper-pagination-bullet {
    background-color: color-mix(in oklab, var(--color-primary) 18%, transparent);
    opacity: 1;
    width: 20px;
    height: 2px;
    border-radius: 999px;
    transition: all 0.3s ease;
    margin: 0 4px !important;
  }
  .pam-groups-moments-swiper .swiper-pagination-bullet-active {
    background-color: var(--color-accent-gold);
    width: 40px;
    border-radius: 999px;
  }

  .pam-groups-moments-swiper .swiper-button-prev,
  .pam-groups-moments-swiper .swiper-button-next {
    color: var(--color-primary);
    width: 42px;
    height: 42px;
    border: 1px solid color-mix(in oklab, var(--color-accent-gold) 34%, transparent);
    border-radius: 999px;
    background: color-mix(in oklab, white 78%, transparent);
    backdrop-filter: blur(10px);
  }

  .pam-groups-moments-swiper .swiper-button-prev::after,
  .pam-groups-moments-swiper .swiper-button-next::after {
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 639px) {
    .pam-groups-moments-swiper .swiper-slide {
      height: min(104vw, 410px);
    }
    .pam-groups-moments-swiper .swiper-pagination-bullet {
      width: 16px;
      height: 2px;
      margin: 0 3px !important;
    }
    .pam-groups-moments-swiper .swiper-pagination-bullet-active {
      width: 32px;
    }
    .pam-groups-moments-swiper {
      padding-bottom: 48px;
    }
    .pam-groups-moments-swiper .swiper-button-prev,
    .pam-groups-moments-swiper .swiper-button-next {
      display: none;
    }
  }
  `

  return (
    <section className="relative w-full scroll-mt-24 overflow-hidden bg-brand-surface-alt pb-12 pt-16 md:pb-16 md:pt-24">
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-32 md:h-48"
        style={{
          background: "linear-gradient(to bottom, var(--color-surface-alt) 0%, transparent 100%)",
        }}
      />
      <style>{css}</style>

      <div className="relative z-10 mx-auto mb-8 w-full max-w-7xl px-5 md:mb-12 md:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">
          MOMENTOS REAIS
        </p>
        <h2 className="mt-5 max-w-4xl font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
          Uma pousada feita de momentos reais.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-brand-text/75 md:text-lg">
          Imagens reais da pousada, dos hóspedes e dos espaços que compõem a experiência em Paraty.
        </p>
      </div>

      <Swiper
        className="pam-groups-moments-swiper"
        modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={2}
        loopPreventsSliding={false}
        watchSlidesProgress={true}
        slidesPerView={1.18}
        spaceBetween={16}
        breakpoints={{
          480: {
            slidesPerView: 1.55,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 2.4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.4,
            spaceBetween: 22,
          },
          1440: {
            slidesPerView: 4.2,
            spaceBetween: 24,
          },
        }}
        coverflowEffect={{
          rotate: 7,
          stretch: 0,
          depth: 75,
          modifier: 1,
          scale: 0.94,
          slideShadows: false,
        }}
        autoplay={
          shouldReduceMotion
            ? false
            : {
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        {groupMomentImages.map((image, index) => (
          <SwiperSlide key={`${image.src}-${index}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 479px) 88vw, (max-width: 767px) 66vw, (max-width: 1023px) 30vw, (max-width: 1439px) 30vw, 24vw"
              className="object-cover"
              quality={82}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export function GroupsTestimonialsSection() {
  return (
    <section className="w-full overflow-hidden bg-brand-surface py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.58fr)_minmax(18rem,0.42fr)] md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">
              PROVA SOCIAL
            </p>
            <h2 className="mt-5 max-w-4xl font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
              O que nossos hóspedes dizem.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-brand-text/75 md:justify-self-end">
            Experiências compartilhadas por quem já se hospedou na Aquino Mar.
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <HorizontalScroller speed="72s" direction="left">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </HorizontalScroller>
      </div>
    </section>
  )
}
