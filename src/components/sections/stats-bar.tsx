import { CountingNumber } from "@/components/ui/counting-number"

export function StatsBar() {
  return (
    <section id="avaliacoes" className="w-full scroll-mt-24 bg-white py-10 shadow-sm shadow-[#063A45]/5">
      <div className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-8 px-4 text-center">
        <div>
          <p className="font-heading text-4xl font-bold text-[#063A45] md:text-5xl">
            <CountingNumber target={5} />.0
          </p>
          <p className="mt-2 text-sm text-muted-foreground text-slate-600">
            Nota no Google
          </p>
        </div>
        <div>
          <p className="font-heading text-4xl font-bold text-[#063A45] md:text-5xl">
            <CountingNumber target={411} />+
          </p>
          <p className="mt-2 text-sm text-muted-foreground text-slate-600">
            Avaliações de hóspedes
          </p>
        </div>
      </div>
    </section>
  )
}
