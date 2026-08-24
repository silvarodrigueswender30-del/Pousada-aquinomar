const locationSteps = [
  {
    number: "01",
    label: "Endereço",
    title: "Rua Guapuruvu, 371",
    description: "Caboré, Paraty - RJ, CEP 23970-000.",
  },
  {
    number: "02",
    label: "Centro",
    title: "12-20 min a pé",
    description: "Caminho prático até o Centro Histórico, em ritmo tranquilo.",
  },
  {
    number: "03",
    label: "Bairro",
    title: "Caboré residencial",
    description: "Mais silêncio para descansar, sem perder acesso ao movimento de Paraty.",
  },
  {
    number: "04",
    label: "Chegada",
    title: "Estacione sem custo",
    description: "Estacionamento privativo gratuito para chegar de carro com tranquilidade.",
  },
]

export function LocationSection() {
  return (
    <section id="localizacao" className="w-full scroll-mt-24 bg-white">
      <div className="relative overflow-hidden bg-brand-primary md:aspect-[1440/863] md:min-h-[43rem]">
        <img
          src="/images/location/rf-location-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover max-md:object-[48%_top]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-primary)_50%,transparent)_0%,color-mix(in_oklab,var(--color-primary)_24%,transparent)_42%,color-mix(in_oklab,var(--color-primary-dark)_92%,transparent)_100%)]" />

        <div
          className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-[50%]"
          style={{
            backgroundImage: `linear-gradient(to bottom, 
              #FFFFFF 0%, 
              rgba(255,255,255,0.92) 12%,
              rgba(255,255,255,0.35) 55%, 
              transparent 100%)`,
          }}
        />

        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-[30%]"
          style={{
            backgroundImage: `linear-gradient(to top, 
              var(--color-surface) 0%, 
              color-mix(in oklab, var(--color-surface) 72%, transparent) 22%, 
              color-mix(in oklab, var(--color-surface) 28%, transparent) 62%, 
              transparent 100%)`,
          }}
        />

        <div className="relative z-20 px-7 pb-28 pt-14 text-white md:px-10 md:pb-0 md:pt-20">
          <h2 className="max-w-4xl font-heading text-5xl font-light leading-[0.98] tracking-tight md:text-7xl">
            Localização e como chegar
          </h2>

          <div className="mt-8 flex flex-col gap-1 font-heading text-3xl font-semibold leading-none md:text-5xl">
            <p><span className="text-brand-gold-light">+</span> Endereço completo</p>
            <p><span className="text-brand-gold-light">+</span> Mapa incorporado</p>
            <p><span className="text-brand-gold-light">+</span> 12-20 min do Centro</p>
          </div>
        </div>

        <div className="relative z-20 grid border border-brand-gold/20 bg-brand-primary-dark/72 text-white shadow-xl shadow-brand-primary/10 backdrop-blur-md saturate-150 md:absolute md:inset-x-0 md:bottom-0 md:grid-cols-6">
          <div className="border-b border-white/15 p-7 md:col-span-2 md:border-b-0 md:border-r md:p-10">
            <p className="max-w-sm text-base font-semibold leading-tight md:text-lg">
              No Caboré, a pousada fica em uma rua residencial e tranquila, com acesso fácil ao Centro Histórico e aos principais passeios de Paraty.
            </p>

            <div className="mt-6 overflow-hidden rounded-lg border border-white/20 bg-white/10">
              <iframe
                title="Mapa da Pousada Aquino Mar"
                src="https://www.google.com/maps?q=R.+Guapuruvu,+371+-+Cabor%C3%AA,+Paraty+-+RJ,+23970-000&output=embed"
                className="h-44 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {locationSteps.map((step) => (
            <article
              key={step.number}
              className="flex min-h-[14rem] flex-col justify-between border-b border-white/15 p-7 last:border-b-0 md:border-b-0 md:border-r md:p-10 md:last:border-r-0"
            >
              <div className="flex items-start gap-2">
                <p className="font-heading text-4xl font-semibold leading-none md:text-5xl">
                  {step.number}
                </p>
                <p className="pt-2 text-xs font-medium text-white/55">
                  {step.label}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-lg font-semibold leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm font-medium leading-5 text-white/70">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
