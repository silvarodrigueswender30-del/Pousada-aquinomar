"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Info, Mail, MapPin, MessageCircle, Navigation } from "lucide-react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { useSafeInView } from "@/hooks/use-safe-in-view"

const navigationLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre nós", href: "/#sobre" },
  { label: "Quartos", href: "/#quartos" },
  { label: "Localização", href: "/#localizacao" },
  { label: "Depoimentos", href: "/#depoimentos" },
]

const whatsappMessage =
  "Olá! Vim pelo site e gostaria de saber mais sobre a Pousada Aquino Mar."
const whatsappHref = `https://wa.me/5524998280363?text=${encodeURIComponent(whatsappMessage)}`

export function Footer() {
  const { ref, isInView } = useSafeInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  }

  const topFadeMask = [
    "linear-gradient(",
    "to bottom,",
    "transparent 0%,",
    "rgba(0,0,0,0.2) 10%,",
    "rgba(0,0,0,0.55) 22%,",
    "rgba(0,0,0,0.85) 34%,",
    "black 42%,",
    "black 100%",
    ")",
  ].join(" ")

  return (
    <footer id="contato" className="relative w-full scroll-mt-24 overflow-hidden bg-transparent text-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          WebkitMaskImage: topFadeMask,
          maskImage: topFadeMask,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <Image
          src="/images/hero-2.avif"
          alt=""
          fill
          className="object-cover object-center"
          quality={80}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--color-primary)_62%,transparent)_0%,color-mix(in_oklab,var(--color-primary)_82%,transparent)_42%,color-mix(in_oklab,var(--color-primary-dark)_96%,transparent)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 pt-24 md:px-12 lg:px-16">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-12 md:gap-16"
        >
          <motion.div
            variants={itemVariants}
            className="w-full border-b border-brand-gold/20 pb-12 text-center md:text-left"
          >
            <h2 className="font-heading text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
              Pousada Aquino Mar
            </h2>
            <p className="mt-3 text-lg font-light text-white/70 sm:text-xl">
              Acolhimento familiar em Caboré, Paraty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-16">
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <h3 className="flex items-center gap-2 font-heading text-xl text-brand-gold-light">
                <Navigation size={20} />
                Navegação
              </h3>
              <ul className="space-y-3 text-sm text-white/70 sm:text-base">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition-colors duration-200 hover:text-brand-gold-light">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium transition-colors duration-200 hover:text-brand-gold-light"
                  >
                    Reservar no WhatsApp
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <h3 className="flex items-center gap-2 font-heading text-xl text-brand-gold-light">
                <Info size={20} />
                Contato
              </h3>
              <div className="space-y-4 text-sm text-white/70 sm:text-base">
                <p className="flex items-start gap-2 leading-relaxed">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand-gold-light" />
                  <span>R. Guapuruvu, 371 - Cabore, Paraty/RJ, CEP 23970-000</span>
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle size={18} className="shrink-0 text-brand-gold-light" />
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-brand-gold-light">
                    (24) 99828-0363
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={18} className="shrink-0 text-brand-gold-light" />
                  {/* TODO: confirmar e-mail oficial com a proprietária */}
                  <a href="mailto:contato@pousadaaquinomar.com.br" className="transition-colors duration-200 hover:text-brand-gold-light">
                    contato@pousadaaquinomar.com.br
                  </a>
                </p>
                <div className="flex items-center gap-4 pt-1">
                  {/* TODO: adicionar links reais das redes sociais quando fornecidos */}
                  <span aria-label="Instagram da Pousada Aquino Mar" className="text-brand-gold-light">
                    <FaInstagram size={20} />
                  </span>
                  {/* TODO: adicionar links reais das redes sociais quando fornecidos */}
                  <span aria-label="Facebook da Pousada Aquino Mar" className="text-brand-gold-light">
                    <FaFacebookF size={18} />
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="col-span-1 flex h-full w-full flex-col sm:col-span-2">
              <h3 className="mb-4 flex items-center gap-2 font-heading text-xl text-white">
                <MapPin size={20} className="shrink-0 text-brand-gold-light" />
                Onde estamos
              </h3>
              <div className="aspect-video w-full rounded-2xl border border-brand-gold/20 bg-brand-primary-dark/80 p-2 shadow-xl shadow-brand-primary/10 backdrop-blur-md saturate-150">
                <iframe
                  src="https://maps.google.com/maps?q=R.%20Guapuruvu%2C%20371%20-%20Cabore%2C%20Paraty%20-%20RJ%2C%2023970-000&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(15%) brightness(0.95)", borderRadius: "12px" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Pousada Aquino Mar - Caboré, Paraty"
                  className="h-full w-full"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-brand-gold/20 pt-8 text-xs text-white/50 md:flex-row"
          >
            <p className="w-full text-center leading-relaxed md:w-auto md:text-left">
              © {new Date().getFullYear()} Pousada Aquino Mar. Todos os direitos reservados.
            </p>
            <span className="shrink-0 text-xs opacity-60">
              Desenvolvido por{" "}
              <a
                href="https://www.offdata.digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-gold-light hover:underline"
              >
                Off-Data
              </a>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
