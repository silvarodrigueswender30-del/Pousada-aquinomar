import { Heart, Star } from "lucide-react"

const trustBadges = ["Google", "Booking", "Hotels.com"]

export function AboutSection() {
  return (
    <section className="w-full bg-white py-20 text-slate-950 max-[479px]:pb-8 max-[479px]:pt-16">
      <div className="box-border w-full max-w-full px-10 max-[479px]:px-5">
        <div className="mb-16 max-[479px]:mb-8">
          <div className="-mx-4 flex max-[479px]:flex-col">
            <div className="w-[22.5%] px-4 max-[479px]:w-full">
              <div className="mb-0 flex items-center gap-2 font-heading text-base font-medium leading-[130%] text-[#0C6478] max-[479px]:mb-6 max-[479px]:text-sm max-[479px]:font-normal">
                <Heart className="h-[1.125rem] w-[1.125rem] fill-[#2FB8D9]/20 text-[#0C6478]" />
                <span>Sobre nós</span>
              </div>
            </div>
            <div className="w-3/4 px-4 max-[479px]:w-full">
              <div className="flex flex-col gap-10 max-[479px]:gap-8">
                <h2 className="font-heading text-[3.75rem] font-light leading-[110%] text-slate-950 max-[479px]:text-4xl max-[479px]:leading-[120%]">
                  Mais que hospedagem,
                  <br />
                  um acolhimento de família
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 max-[479px]:flex max-[479px]:flex-col max-[479px]:gap-8">
          <div className="aspect-[1336/1088] overflow-hidden bg-[linear-gradient(135deg,#E4F6FA_0%,#F8FAFC_52%,#CFF0F7_100%)] max-[479px]:aspect-[335/366]" />

          <div className="flex flex-col gap-10 max-[479px]:gap-8">
            <div>
              <p className="text-[1.375rem] font-medium leading-[120%] text-slate-600 max-[479px]:text-[1.375rem] max-[479px]:leading-[120%]">
                A Pousada Aquino Mar é tocada pela Rose, seu esposo e sua filha — uma gestão
                genuinamente familiar que se reflete em cada detalhe do atendimento. Em Cabore,
                a poucos minutos do Centro Histórico de Paraty, oferecemos um refúgio tranquilo
                com o cuidado de quem trata cada hóspede como parte da família.
              </p>
            </div>

            <div className="grid w-full max-w-full flex-1 grid-cols-2 gap-6">
              <div className="flex flex-col justify-between gap-8 pb-[1.875rem] max-[479px]:gap-[8.75rem]">
                <div className="flex flex-col gap-5 max-[479px]:gap-2">
                  <p className="font-heading text-[2.8125rem] font-semibold leading-none text-[#063A45]">
                    5.0
                  </p>
                  <p className="text-[1.125rem] font-medium leading-[130%] text-slate-600">
                    Nota no Google
                    <br />
                    (411 avaliações)
                  </p>
                </div>
                <p className="text-base font-medium leading-[130%] text-slate-500">
                  A escolha de quem busca hospitalidade de verdade, não apenas hospedagem.
                </p>
              </div>

              <div className="flex flex-col justify-between gap-8 pb-[1.875rem] max-[479px]:gap-[8.75rem]">
                <div className="flex flex-col gap-5 max-[479px]:gap-2">
                  <p className="font-heading text-[2.8125rem] font-semibold leading-none text-[#063A45]">
                    9.8/10
                  </p>
                  <p className="text-[1.125rem] font-medium leading-[130%] text-slate-600">
                    Nota no
                    <br />
                    Hotels.com
                  </p>
                </div>
                <div className="flex justify-between gap-4 max-[479px]:grid max-[479px]:grid-cols-2 max-[479px]:gap-4">
                  {trustBadges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-2 text-sm font-medium leading-[130%] text-slate-500"
                    >
                      <Star className="h-3.5 w-3.5 fill-[#0C6478]/20 text-[#0C6478]" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
