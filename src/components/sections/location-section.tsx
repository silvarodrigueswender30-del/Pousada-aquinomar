import Image from "next/image"

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
      <div className="relative overflow-hidden bg-brand-primary md:min-h-[48rem]">
        <Image
          src="/images/location/rf-location-bg.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover max-md:object-[48%_top]"
          quality={82}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-primary-dark)_24%,transparent)_0%,color-mix(in_oklab,var(--color-primary)_8%,transparent)_44%,color-mix(in_oklab,var(--color-primary-dark)_74%,transparent)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[48rem] w-full max-w-7xl flex-col justify-between px-5 py-16 text-white md:px-10 md:py-20">
          <div className="max-w-4xl rounded-2xl bg-brand-primary-dark/72 p-6 backdrop-blur-sm md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold-light">
              LOCALIZAÇÃO
            </p>
            <h2 className="mt-5 font-heading text-[2.65rem] font-light leading-[1.02] tracking-tight md:text-6xl">
              Localização e como chegar
            </h2>
            <div className="mt-7 grid gap-3 text-sm font-medium text-white/82 sm:grid-cols-3">
              <p><span className="text-brand-gold-light">+</span> Endereço completo</p>
              <p><span className="text-brand-gold-light">+</span> Mapa incorporado</p>
              <p><span className="text-brand-gold-light">+</span> 12-20 min do Centro</p>
            </div>
          </div>

          <div className="mt-12 grid overflow-hidden border-t border-brand-gold/60 bg-brand-primary-dark/78 text-white shadow-xl shadow-brand-primary/10 backdrop-blur-md saturate-150 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="border-b border-white/15 p-4 lg:border-b-0 lg:border-r lg:border-white/15">
              <iframe
                title="Mapa da Pousada Aquino Mar"
                src="https://www.google.com/maps?q=R.+Guapuruvu,+371+-+Cabor%C3%AA,+Paraty+-+RJ,+23970-000&output=embed"
                className="h-72 w-full md:h-[24rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-6 md:p-8 lg:p-10">
              <p className="max-w-xl text-base leading-7 text-white/78">
                No Caboré, a pousada fica em uma rua residencial e tranquila, com acesso fácil ao Centro Histórico e aos principais passeios de Paraty.
              </p>

              <div className="mt-8 space-y-0">
                {locationSteps.map((step, index) => (
                  <article
                    key={step.number}
                    className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-t border-white/12 py-6 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    {index < locationSteps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-6 top-14 h-[calc(100%-2rem)] w-px bg-brand-gold/45"
                      />
                    )}
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/45 bg-brand-primary-dark text-xs font-medium tracking-[0.18em] text-brand-gold-light">
                      {step.number}
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                        {step.label}
                      </p>
                      <h3 className="mt-2 font-heading text-xl font-normal leading-tight text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/68">
                        {step.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
