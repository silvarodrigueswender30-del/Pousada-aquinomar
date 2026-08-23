import { MessageCircle } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"

const whatsappMessage =
  "Olá! Vim pelo site e gostaria de saber mais sobre a Pousada Aquino Mar."

const whatsappHref = `https://wa.me/5524998280363?text=${encodeURIComponent(whatsappMessage)}`

export function FinalCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-primary-dark py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--color-cta)_24%,transparent),transparent_32%),linear-gradient(90deg,color-mix(in_oklab,var(--color-primary-dark)_94%,transparent),color-mix(in_oklab,var(--color-primary)_56%,transparent))]" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-7 text-center text-white md:px-10">
        <p className="font-heading text-sm font-medium uppercase tracking-wide text-white/70">
          Reserva direta
        </p>

        <h2 className="mt-4 font-heading text-4xl font-light leading-[0.98] tracking-tight text-white md:text-6xl">
          Pronta para sua próxima estadia?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-7 text-white/80 md:text-lg">
          Fale direto com a gente pelo WhatsApp e garanta sua reserva na Pousada Aquino Mar, sem intermediários.
        </p>

        <div className="mt-9">
          <CTAButton href={whatsappHref} variant="on-dark">
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Fale pelo WhatsApp
            </span>
          </CTAButton>
        </div>

        <p className="mt-6 text-sm font-medium text-white/60">
          Nota 5.0 no Google · 411+ avaliações
        </p>
      </div>
    </section>
  )
}
