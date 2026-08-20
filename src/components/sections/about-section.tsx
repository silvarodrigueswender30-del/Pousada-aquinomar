import { Heart, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const trustBadges = ["Google", "Booking", "Hotels.com"]

export function AboutSection() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#E4F6FA_0%,#F8FAFC_52%,#CFF0F7_100%)]" />
          <div className="absolute inset-x-8 bottom-8 rounded-2xl bg-white/75 p-5 shadow-lg shadow-[#063A45]/10 backdrop-blur-sm">
            <p className="font-heading text-lg font-semibold text-[#063A45]">
              Pousada Aquino Mar
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Um refúgio tranquilo em Cabore, Paraty.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 font-heading text-sm font-medium uppercase tracking-wide text-[#0C6478]">
              <Heart className="h-4 w-4 fill-[#2FB8D9]/20 text-[#0C6478]" />
              <span>Sobre nós</span>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
              Mais que hospedagem,
              <br />
              um acolhimento de família
            </h2>
            <p className="text-base leading-8 text-muted-foreground text-slate-600 md:text-lg">
              A Pousada Aquino Mar é tocada pela Rose, seu esposo e sua filha — uma gestão
              genuinamente familiar que se reflete em cada detalhe do atendimento. Em Cabore,
              a poucos minutos do Centro Histórico de Paraty, oferecemos um refúgio tranquilo
              com o cuidado de quem trata cada hóspede como parte da família.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <Card className="border-[#063A45]/10 bg-white p-5 shadow-sm shadow-[#063A45]/5">
              <p className="font-heading text-4xl font-bold text-[#063A45]">5.0</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground text-slate-600">
                Nota no Google (411 avaliações)
              </p>
            </Card>
            <Card className="border-[#063A45]/10 bg-white p-5 shadow-sm shadow-[#063A45]/5">
              <p className="font-heading text-4xl font-bold text-[#063A45]">9.8/10</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground text-slate-600">
                Nota no Hotels.com
              </p>
            </Card>
          </div>

          <p className="text-sm leading-6 text-muted-foreground text-slate-600">
            A escolha de quem busca hospitalidade de verdade, não apenas hospedagem.
          </p>

          <div className="flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-[#2FB8D9]/25 bg-white px-4 py-2",
                  "text-sm font-semibold text-[#063A45] shadow-sm shadow-[#063A45]/5",
                )}
              >
                <Star className="h-4 w-4 fill-[#2FB8D9] text-[#2FB8D9]" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
