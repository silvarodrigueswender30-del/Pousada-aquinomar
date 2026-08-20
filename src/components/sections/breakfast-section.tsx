import { Sparkles } from "lucide-react"

const breakfastItems = [
  {
    title: "Buffet da manhã",
    meta: "/ servido das 8h às 10h",
    image: "/images/hero-carousel/slide-1.avif",
    alt: "Área da Pousada Aquino Mar usada como imagem temporária para a vitrine do café da manhã",
  },
  {
    title: "Sabores de casa",
    meta: "/ bolos, pães e frutas",
    image: "/images/hero-carousel/slide-2.avif",
    alt: "Foto da pousada usada como imagem temporária para representar o café da manhã artesanal",
  },
  {
    title: "Experiência em família",
    meta: "/ cuidado da Rose e equipe",
    image: "/images/hero-carousel/slide-4.avif",
    alt: "Foto da pousada usada como imagem temporária para representar o acolhimento familiar no café da manhã",
  },
]

export function BreakfastSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full px-7 md:px-10">
        <div className="grid gap-6 border-y border-[#063A45]/10 py-10 md:grid-cols-[22.5%_1fr] md:py-14">
          <div className="flex items-start gap-2">
            <Sparkles className="mt-0.5 h-4 w-4 text-[#0C6478]" aria-hidden="true" />
            <p className="font-heading text-sm font-medium uppercase tracking-wide text-[#0C6478]">
              Café da manhã
            </p>
          </div>

          <div className="max-w-4xl">
            <h2 className="font-heading text-4xl font-light leading-[0.98] text-slate-950 md:text-6xl">
              O café da manhã que faz a estadia começar em família
            </h2>
            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-slate-600 md:text-lg">
              Servido das 8h às 10h, com cuidado de casa, mesa farta e o acolhimento que os hóspedes citam nas avaliações da Pousada Aquino Mar.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full px-7 md:px-10">
        <div className="-mx-4 grid border-b border-[#063A45]/10 md:grid-cols-3">
          {breakfastItems.map((item) => (
            <article
              key={item.title}
              className="border-t border-[#063A45]/10 px-4 py-8 md:border-r md:border-[#063A45]/10 md:p-10 md:last:border-r-0"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="font-heading text-xl font-semibold leading-none text-slate-950">
                  {item.title}
                </h3>
                <p className="max-w-[9rem] text-right text-sm font-medium leading-tight text-slate-500">
                  {item.meta}
                </p>
              </div>

              <div className="aspect-[400/437] w-full overflow-hidden bg-[#E4F6FA]">
                {/* TODO: substituir por fotos reais em alta resolução do buffet de café da manhã quando disponíveis. */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
