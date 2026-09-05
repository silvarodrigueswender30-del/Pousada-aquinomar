import { Leaf, MessageCircle } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp"

const whatsappHref = buildWhatsAppUrl(whatsappMessages.home)

export function FinalCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-primary-dark py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_16%,color-mix(in_oklab,var(--color-cta)_18%,transparent),transparent_34%),linear-gradient(135deg,var(--color-primary)_0%,var(--color-primary-dark)_78%)]" />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-8 h-72 w-72 rotate-[-18deg] text-white/[0.035]"
        strokeWidth={0.5}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-7 text-center text-white md:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold-light">
          RESERVA DIRETA
        </p>

        <h2 className="mt-5 font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl">
          Pronta para sua próxima estadia em Paraty?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/78 md:text-lg">
          Fale direto com a gente pelo WhatsApp e garanta sua reserva na Pousada Aquino Mar, sem intermediários.
        </p>

        <div className="mt-9">
          <CTAButton href={whatsappHref} variant="brand">
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Fale pelo WhatsApp
            </span>
          </CTAButton>
        </div>

        <p className="mt-6 text-sm font-medium text-white/62">
          Nota 5.0 no Google · 411+ avaliações
        </p>
      </div>
    </section>
  )
}
