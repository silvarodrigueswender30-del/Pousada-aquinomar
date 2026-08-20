import { Heart, Star } from "lucide-react"

const trustBadges = ["Google", "Booking", "Hotels.com"]

export function AboutSection() {
  return (
    <section className="w-full bg-[#071923] py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#0B2E3A_0%,#123C48_48%,#1A5261_100%)]" />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 font-heading text-xs font-medium uppercase tracking-wide text-gray-300 md:text-sm">
              <Heart className="h-4 w-4 fill-white/10 text-gray-300" />
              <span>Sobre nós</span>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
              Mais que hospedagem,
              <br />
              um acolhimento de família
            </h2>
            <p className="text-base leading-8 text-gray-300 md:text-lg">
              A Pousada Aquino Mar é tocada pela Rose, seu esposo e sua filha — uma gestão
              genuinamente familiar que se reflete em cada detalhe do atendimento. Em Cabore,
              a poucos minutos do Centro Histórico de Paraty, oferecemos um refúgio tranquilo
              com o cuidado de quem trata cada hóspede como parte da família.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="font-heading text-4xl font-bold text-white md:text-5xl">5.0</p>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Nota no Google
                <br />
                (411 avaliações)
              </p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white md:text-5xl">9.8/10</p>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Nota no Hotels.com
              </p>
            </div>
          </div>

          <p className="text-sm leading-6 text-gray-400">
            A escolha de quem busca hospitalidade de verdade, não apenas hospedagem.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-300"
              >
                <Star className="h-3.5 w-3.5 fill-gray-300 text-gray-300" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
