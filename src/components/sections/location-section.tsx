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
    <section className="w-full bg-white">
      <div className="relative overflow-hidden bg-[#063A45] md:aspect-[1440/863] md:min-h-[43rem]">
        <img
          src="/images/location/rf-location-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover max-md:object-[48%_top]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,58,69,0.50)_0%,rgba(6,58,69,0.24)_42%,rgba(6,58,69,0.92)_100%)]" />

        <div className="relative z-10 px-7 pb-28 pt-14 text-white md:px-10 md:pb-0 md:pt-20">
          <h2 className="max-w-4xl font-heading text-5xl font-light leading-[0.98] md:text-7xl">
            Localização e como chegar
          </h2>

          <div className="mt-8 flex flex-col gap-1 font-heading text-3xl font-semibold leading-none md:text-5xl">
            <p><span className="text-[#9FE8F7]">+</span> Endereço completo</p>
            <p><span className="text-[#9FE8F7]">+</span> Mapa incorporado</p>
            <p><span className="text-[#9FE8F7]">+</span> 12-20 min do Centro</p>
          </div>
        </div>

        <div className="relative z-20 grid border-t border-white/15 bg-[#052430]/72 text-white backdrop-blur-md md:absolute md:inset-x-0 md:bottom-0 md:grid-cols-6">
          <div className="border-b border-white/15 p-7 md:col-span-2 md:border-b-0 md:border-r md:p-10">
            <p className="max-w-sm text-base font-semibold leading-tight md:text-lg">
              No Caboré, a pousada fica em uma rua residencial e tranquila, com acesso fácil ao Centro Histórico e aos principais passeios de Paraty.
            </p>

            <div className="mt-6 overflow-hidden rounded-lg border border-white/20 bg-white/10">
              <iframe
                title="Mapa da Pousada Aquino Mar"
                src="https://www.google.com/maps?q=371%20Rua%20Guapuruvu%2C%20Cabor%C3%A9%2C%20Paraty%2C%20RJ%2C%2023970-000&output=embed"
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
