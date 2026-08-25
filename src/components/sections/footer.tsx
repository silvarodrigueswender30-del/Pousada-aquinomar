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
          src="/images/footer/footer-desktop.avif"
          alt=""
          fill
          className="object-cover object-center max-md:hidden"
          quality={80}
          aria-hidden="true"
        />
        <Image
          src="/images/footer/footer-mobile.avif"
          alt=""
          fill
          className="object-cover object-center md:hidden"
          quality={80}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--color-primary)_62%,transparent)_0%,color-mix(in_oklab,var(--color-primary)_82%,transparent)_42%,color-mix(in_oklab,var(--color-primary-dark)_96%,transparent)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-8 pt-24 md:px-10 lg:pt-32">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-12 md:gap-16"
        >
          <div className="grid gap-12 border-y border-brand-gold/25 py-12 lg:grid-cols-[minmax(0,0.56fr)_minmax(22rem,0.44fr)] lg:gap-14">
            <motion.div variants={itemVariants} className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(12rem,0.9fr)]">
              <div>
                <Image
                  src="/logo-pousada1.png"
                  alt="Pousada Aquino Mar"
                  width={190}
                  height={86}
                  className="h-auto w-40 brightness-0 invert sm:w-48"
                />
                <p className="mt-6 max-w-md text-base leading-7 text-white/72">
                  Acolhimento familiar em Caboré, Paraty, com localização tranquila, café da manhã e contato direto com a pousada.
                </p>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-cta px-6 py-3 text-sm font-semibold text-white transition hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary-dark"
                >
                  Reservar no WhatsApp
                </a>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1">
                <div>
                  <h3 className="flex items-center gap-2 font-heading text-xl font-normal text-brand-gold-light">
                    <Navigation size={18} aria-hidden="true" />
                    Navegação
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm text-white/70">
                    {navigationLinks.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className="transition-colors duration-200 hover:text-brand-gold-light">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 font-heading text-xl font-normal text-brand-gold-light">
                    <Info size={18} aria-hidden="true" />
                    Contato
                  </h3>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/70">
                    <p className="flex items-start gap-2">
                      <MapPin size={17} className="mt-0.5 shrink-0 text-brand-gold-light" aria-hidden="true" />
                      <span>R. Guapuruvu, 371 - Caborê, Paraty - RJ, 23970-000</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <MessageCircle size={17} className="shrink-0 text-brand-gold-light" aria-hidden="true" />
                      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-brand-gold-light">
                        (24) 99828-0363
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={17} className="shrink-0 text-brand-gold-light" aria-hidden="true" />
                      <a href="mailto:contato@pousadaaquinomar.com.br" className="transition-colors duration-200 hover:text-brand-gold-light">
                        contato@pousadaaquinomar.com.br
                      </a>
                    </p>
                    <div className="flex items-center gap-4 pt-1">
                      <span aria-label="Instagram da Pousada Aquino Mar" className="text-brand-gold-light">
                        <FaInstagram size={20} />
                      </span>
                      <span aria-label="Facebook da Pousada Aquino Mar" className="text-brand-gold-light">
                        <FaFacebookF size={18} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex h-full w-full flex-col">
              <h3 className="mb-4 flex items-center gap-2 font-heading text-xl font-normal text-white">
                <MapPin size={20} className="shrink-0 text-brand-gold-light" />
                Onde estamos
              </h3>
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-brand-gold/25 bg-brand-primary-dark/80">
                <iframe
                  src="https://www.google.com/maps?q=R.+Guapuruvu,+371+-+Cabor%C3%AA,+Paraty+-+RJ,+23970-000&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(10%) brightness(0.96)" }}
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
            className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 md:flex-row"
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
