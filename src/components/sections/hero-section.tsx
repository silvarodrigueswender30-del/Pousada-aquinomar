"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"
import Image from "next/image"
import { CTAButton } from "@/components/ui/cta-button"
import { CountingNumber } from "@/components/ui/counting-number"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const startVideo = () => {
      // Pequeno atraso garantido após o evento de load para não competir com LCP
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.defaultMuted = true;
          videoRef.current.muted = true;
          videoRef.current.play().catch(e => console.warn("Autoplay bloqueado pelo navegador:", e));
        }
      }, 500);
    };

    if (document.readyState === 'complete') {
      startVideo();
    } else {
      window.addEventListener('load', startVideo);
      return () => window.removeEventListener('load', startVideo);
    }
  }, []);

  return (
    <section id="inicio" className="relative flex min-h-screen w-full scroll-mt-24 items-center overflow-hidden bg-brand-primary">
      
      {/* IMAGEM LCP (Aparece imediatamente) */}
      <Image
        src="/images/hero/hero01.avif"
        alt="Pousada Aquino Mar em Paraty"
        fill
        priority
        className="absolute inset-0 z-0 object-cover object-[center_30%]"
        sizes="(max-width: 768px) 100vw, 100vw"
      />
      
      {/* VÍDEO (Carregamento adiado via JS, preload="none" para não atrapalhar o LCP da Imagem) */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover object-[center_30%]"
      >
        <source src="https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/Pousada-Aquinomar/video-home_mobile_vertical.mp4" media="(max-width: 767px)" type="video/mp4" />
        <source src="https://jszueizwowynhekpsfii.supabase.co/storage/v1/object/public/Pousada-Aquinomar/Woman_walking_by_pool_1080p_202608251121.mp4" media="(min-width: 768px)" type="video/mp4" />
      </video>

      {/* Overlay com contraste otimizado para o movimento */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--color-primary-dark)_88%,transparent)_0%,color-mix(in_oklab,var(--color-primary-dark)_60%,transparent)_45%,color-mix(in_oklab,var(--color-primary-dark)_25%,transparent)_100%)]" />
      
      <div className="absolute right-4 top-24 z-20 rounded-full border border-brand-gold/20 bg-brand-primary-dark/60 px-5 py-2.5 shadow-xl shadow-brand-primary/20 backdrop-blur-md saturate-150 md:right-10 md:top-24">
        <p className="flex items-center gap-1.5 text-sm font-medium text-white">
          <span className="flex items-baseline gap-0"><CountingNumber target={5} />.0</span>
          <Star className="h-4 w-4 fill-brand-gold-light text-brand-gold-light" aria-hidden="true" />
          <span>no Tripadvisor</span>
        </p>
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="max-w-3xl mt-24 md:mt-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold"></span>
            </span>
            A poucos minutos do Centro Histórico
          </div>
          
          <h1 className="mb-6 font-serif text-5xl font-medium leading-[1.1] text-white tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Sua <span className="italic text-brand-gold-light">casa em Paraty</span>, <br className="hidden sm:block" />
            <span className="opacity-90">na Pousada Aquino Mar.</span>
          </h1>
          
          <p className="mb-10 max-w-xl text-lg text-white/90 leading-relaxed md:text-xl font-light">
            Pousada Aquino Mar — hospedagem familiar em Caborê, a poucos minutos
            do charme das ruas de pedra do Centro Histórico de Paraty.
          </p>
          
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <CTAButton 
              href="#quartos"
              variant="brand"
              className="flex w-full items-center justify-center px-8 py-6 text-lg sm:w-auto"
            >
              Ver Nossas Suítes
            </CTAButton>
            <CTAButton 
              href="#contato"
              variant="on-dark"
              className="flex w-full items-center justify-center px-8 py-6 text-lg sm:w-auto"
            >
              Falar com a Recepção
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
