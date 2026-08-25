"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"
import Image from "next/image"
import { CTAButton } from "@/components/ui/cta-button"
import { CountingNumber } from "@/components/ui/counting-number"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Forçar autoplay no navegador via JS caso a tag HTML nativa seja bloqueada
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.warn("Autoplay bloqueado pelo navegador:", e));
    }
  }, [])

  return (
    <section id="inicio" className="relative flex min-h-screen w-full scroll-mt-24 items-center overflow-hidden bg-brand-primary">
      
      <Image
        src="/images/hero/hero01.avif"
        alt="Pousada Aquino Mar em Paraty"
        fill
        priority
        className="absolute inset-0 z-0 object-cover object-[center_30%]"
        sizes="(max-width: 768px) 100vw, 100vw"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover object-[center_30%]"
      >
        {/* MOBILE (Versão leve recortada na vertical) */}
        <source src="https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/Pousada-Aquinomar/video-home_mobile_vertical.mp4" media="(max-width: 767px)" type="video/mp4" />
        
        {/* DESKTOP 1080p (Padrão) */}
        <source src="https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/Pousada-Aquinomar/Woman_walking_by_pool_1080p_202608251121.mp4" media="(max-width: 1919px)" type="video/mp4" />
        
        {/* TELAS GRANDES / 4K (Substitua a URL abaixo pela versão 4K/1440p) */}
        <source src="https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/Pousada-Aquinomar/Woman_walking_by_pool_1080p_202608251121.mp4" media="(min-width: 1920px)" type="video/mp4" />
      </video>

      {/* Overlay com contraste otimizado para o movimento (stops ajustados para 60% e 25%) */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--color-primary-dark)_88%,transparent)_0%,color-mix(in_oklab,var(--color-primary-dark)_60%,transparent)_45%,color-mix(in_oklab,var(--color-primary-dark)_25%,transparent)_100%)]" />
      
      <div className="absolute right-4 top-24 z-20 rounded-full border border-brand-gold/20 bg-brand-primary-dark/60 px-5 py-2.5 shadow-xl shadow-brand-primary/20 backdrop-blur-md saturate-150 md:right-10 md:top-24">
        <p className="flex items-center gap-1.5 text-sm font-medium text-white">
          <span className="flex items-baseline gap-0"><CountingNumber target={5} />.0</span>
          <Star className="h-4 w-4 fill-brand-gold-light text-brand-gold-light" aria-hidden="true" />
          <span className="text-white/70">·</span>
          <span className="flex items-baseline gap-0"><CountingNumber target={411} />+</span>
          avaliações
        </p>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-28 text-white md:py-36">
        <div className="max-w-3xl">
          <p className="font-heading text-sm font-medium uppercase tracking-wide text-brand-gold-light">
            Pousada Aquino Mar
          </p>
          <h1 className="mt-5 max-w-2xl font-heading text-5xl font-light leading-tight tracking-tight md:text-6xl">
            Um refúgio em família à beira do mar em Paraty
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
            Pousada Aquino Mar — hospitalidade genuína em Caborê, a poucos minutos
            do Centro Histórico.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTAButton
              href="#quartos"
              target="_self"
              variant="brand"
              className="focus-visible:ring-brand-cta-light"
            >
              Ver Quartos
            </CTAButton>
            <CTAButton
              href="#quartos"
              target="_self"
              variant="secondary-dark"
              className="focus-visible:ring-brand-gold-light [&>div]:border [&>div]:border-brand-gold/60 [&>div]:bg-transparent [&>div]:text-brand-gold-light hover:[&>div]:bg-brand-gold/10 [&>span]:border [&>span]:border-brand-gold/60 [&>span]:bg-transparent [&>span]:text-brand-gold-light hover:[&>span]:bg-brand-gold/10"
            >
              Reservar Agora
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

