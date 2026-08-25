"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import {  } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules"

const baseImages = [
  { src: "/images/galeria/clientes/cliente-1.avif", alt: "Família hospedada vivendo momentos especiais na Pousada Aquino Mar" },
  { src: "/images/galeria/clientes/cliente-2.avif", alt: "Casal sorrindo durante estadia em Paraty" },
  { src: "/images/galeria/clientes/cliente-3.avif", alt: "Hóspedes aproveitando dias tranquilos perto do mar" },
  { src: "/images/galeria/clientes/cliente-4.avif", alt: "Grupo reunido em uma viagem para Paraty" },
  { src: "/images/galeria/clientes/cliente-5.avif", alt: "Hóspedes relaxando durante a estadia" },
  { src: "/images/galeria/clientes/cliente-6.avif", alt: "Família explorando a região de Paraty" },
  { src: "/images/galeria/clientes/cliente-7.avif", alt: "Vista de viagem registrada por hóspedes" },
  { src: "/images/galeria/clientes/cliente-8.avif", alt: "Momentos especiais vividos por hóspedes da pousada" },
  { src: "/images/galeria/clientes/cliente-9.avif", alt: "Fim de tarde durante viagem em família" },
  { src: "/images/galeria/clientes/cliente-10.avif", alt: "Mais momentos de alegria de nossos hóspedes" },
  { src: "/images/galeria/clientes/cliente-11.avif", alt: "Aproveitando a vida em Paraty" },
  { src: "/images/galeria/clientes/cliente-12.avif", alt: "Sorrisos de nossos hóspedes na pousada" },
]

export function ClientMomentsSection() {
  const shouldReduceMotion = useReducedMotion()

  const css = `
  .pam-moments-swiper {
    width: 100%;
    overflow: hidden;
    padding-bottom: 64px;
    padding-top: 18px;
  }

  .pam-moments-swiper .swiper-slide {
    position: relative;
    height: clamp(390px, 32vw, 460px);
    border-radius: 16px;
    overflow: hidden;
  }

  .pam-moments-swiper .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .pam-moments-swiper .swiper-pagination-bullet {
    background-color: color-mix(in oklab, var(--color-primary) 18%, transparent);
    opacity: 1;
    width: 20px;
    height: 2px;
    border-radius: 999px;
    transition: all 0.3s ease;
    margin: 0 4px !important;
  }
  .pam-moments-swiper .swiper-pagination-bullet-active {
    background-color: var(--color-accent-gold);
    width: 40px;
    border-radius: 999px;
  }

  .pam-moments-swiper .swiper-button-prev,
  .pam-moments-swiper .swiper-button-next {
    color: var(--color-primary);
    width: 42px;
    height: 42px;
    border: 1px solid color-mix(in oklab, var(--color-accent-gold) 34%, transparent);
    border-radius: 999px;
    background: color-mix(in oklab, white 78%, transparent);
    backdrop-filter: blur(10px);
  }

  .pam-moments-swiper .swiper-button-prev::after,
  .pam-moments-swiper .swiper-button-next::after {
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 639px) {
    .pam-moments-swiper .swiper-slide {
      height: min(104vw, 410px);
    }
    .pam-moments-swiper .swiper-pagination-bullet {
      width: 16px;
      height: 2px;
      margin: 0 3px !important;
    }
    .pam-moments-swiper .swiper-pagination-bullet-active {
      width: 32px;
    }
    .pam-moments-swiper {
      padding-bottom: 48px;
    }
    .pam-moments-swiper .swiper-button-prev,
    .pam-moments-swiper .swiper-button-next {
      display: none;
    }
  }
  `

  return (
    <section id="momentos" className="relative w-full scroll-mt-24 overflow-hidden bg-brand-surface pb-12 pt-16 md:pb-16 md:pt-24">
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-32 md:h-48"
        style={{
          background: "linear-gradient(to bottom, var(--color-surface) 0%, transparent 100%)",
        }}
      />
      <style>{css}</style>

      <div className="relative z-10 mx-auto mb-8 w-full max-w-7xl px-5 md:mb-12 md:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">
          MEMÓRIAS DA POUSADA
        </p>
        <h2 className="mt-5 max-w-4xl font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
          Momentos que nossos hóspedes viveram na pousada
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-brand-text/75 md:text-lg">
          Cada foto aqui é de uma família que se hospedou na Pousada Aquino Mar,{" "}
          <span className="text-brand-gold">momentos reais</span>, sorrisos reais.
        </p>
      </div>

      <Swiper
        className="pam-moments-swiper"
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
        {baseImages.map((image, index) => (
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


