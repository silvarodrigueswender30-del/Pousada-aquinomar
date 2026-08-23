"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { useReducedMotion } from "framer-motion"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules"

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
]

const clientImages = [...baseImages, ...baseImages, ...baseImages]

export function ClientMomentsSection() {
  const shouldReduceMotion = useReducedMotion()
  const css = `
  .pam-moments-swiper {
    width: 100%;
    padding-bottom: 56px;
    padding-top: 12px;
  }

  .pam-moments-swiper .swiper-slide {
    background-position: center;
    background-size: cover;
    width: clamp(220px, 26vw, 320px);
    height: clamp(290px, 34vw, 420px);
    border-radius: 20px;
    overflow: hidden;
  }

  .pam-moments-swiper .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .pam-moments-swiper .swiper-pagination-bullet {
    background-color: rgba(18, 42, 69, 0.20);
    opacity: 1;
    width: 8px;
    height: 8px;
    border-radius: 999px;
    transition: all 0.3s ease;
    margin: 0 4px !important;
  }
  .pam-moments-swiper .swiper-pagination-bullet-active {
    background-color: var(--color-cta);
    width: 28px;
    border-radius: 999px;
  }

  @media (max-width: 639px) {
    .pam-moments-swiper .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
      margin: 0 3px !important;
    }
    .pam-moments-swiper .swiper-pagination-bullet-active {
      width: 22px;
    }
    .pam-moments-swiper {
      padding-bottom: 40px;
    }
  }
  `

  return (
    <section id="momentos" className="relative w-full scroll-mt-24 overflow-hidden bg-brand-surface pb-10 pt-16 md:pb-12 md:pt-24">
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-32 md:h-48"
        style={{
          background: "linear-gradient(to bottom, var(--color-surface) 0%, transparent 100%)",
        }}
      />
      <style>{css}</style>

      <div className="relative z-10 mx-auto mb-8 w-full px-7 text-center md:mb-12 md:px-10">
        <p className="font-heading text-sm font-medium uppercase tracking-wide text-brand-gold">
          Momentos reais
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl font-heading text-4xl font-light leading-[0.98] tracking-tight text-slate-950 md:text-6xl">
          Momentos que Nossos Hóspedes Viveram na Pousada
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-7 text-slate-600 md:text-lg">
          Cada foto aqui é de uma família que se hospedou na Pousada Aquino Mar —{" "}
          <span className="text-brand-gold">momentos reais</span>, sorrisos reais.
        </p>
      </div>

      <Swiper
        className="pam-moments-swiper"
        modules={[EffectCoverflow, Autoplay, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={9}
        slidesPerView="auto"
        spaceBetween={20}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 120,
          modifier: 1.5,
          slideShadows: false,
        }}
        autoplay={shouldReduceMotion ? false : {
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        {clientImages.map((image, index) => (
          <SwiperSlide key={`${image.src}-${index}`}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
