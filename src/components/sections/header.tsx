"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "A Pousada", href: "/#sobre" },
  { label: "Acomodações", href: "/#quartos" },
  { label: "Localização", href: "/#localizacao" },
  { label: "Depoimentos", href: "/#depoimentos" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isHomeTop = pathname === "/" && !isScrolled && !isMenuOpen
  const ctaVariant = isHomeTop ? "brand" : "on-light"

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isHomeTop
          ? "bg-transparent text-white"
          : "border-b border-brand-gold/10 bg-brand-surface-alt/95 text-brand-primary shadow-sm shadow-brand-primary/10 backdrop-blur-md saturate-150",
      )}
    >
      <div className="mx-auto flex h-20 w-full items-center justify-between px-5 md:px-10">
        <Link
          href="/#inicio"
          className="relative flex items-center justify-center transition-opacity duration-300 hover:opacity-80"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Início - Pousada Aquino Mar"
        >
          <div className="relative h-8 w-[91px] md:h-10 md:w-[114px]">
            <Image
              src="/logo-pousada1.png"
              alt="Pousada Aquino Mar"
              fill
              priority
              className={cn(
                "object-contain transition-all duration-300",
                isHomeTop ? "brightness-0 invert" : ""
              )}
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors duration-200 active:opacity-70",
                isHomeTop
                  ? "border-b border-transparent text-white/82 hover:border-brand-gold hover:text-white"
                  : "border-b border-transparent text-brand-text/80 hover:border-brand-gold hover:text-brand-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton
            href="/#quartos"
            target="_self"
            variant={ctaVariant}
            className="[&>*]:bg-brand-cta [&_*]:text-white hover:[&>*]:brightness-90 hover:[&>*]:shadow-lg hover:[&>*]:shadow-brand-primary/20 focus-visible:ring-brand-cta-light"
          >
            Reservar Estadia
          </CTAButton>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 active:scale-[0.97] active:transition-transform active:duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light focus-visible:ring-offset-2 lg:hidden",
            isHomeTop
              ? "border-white/25 bg-white/10 text-white"
              : "border-brand-primary/10 bg-brand-surface-alt text-brand-primary shadow-sm",
          )}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-brand-primary/10 bg-brand-surface-alt text-brand-primary shadow-lg shadow-brand-primary/10 transition-all duration-300 lg:hidden",
          isMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-5 py-4" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-brand-primary/10 py-4 font-heading text-lg font-medium text-brand-primary transition-colors hover:border-brand-gold hover:text-brand-primary active:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <CTAButton
            href="/#quartos"
            target="_self"
            variant="on-light"
            className="mt-5 [&>*]:bg-brand-cta [&_*]:text-white hover:[&>*]:brightness-90 hover:[&>*]:shadow-lg hover:[&>*]:shadow-brand-primary/20 focus-visible:ring-brand-cta-light"
          >
            Reservar Estadia
          </CTAButton>
        </nav>
      </div>
    </header>
  )
}
