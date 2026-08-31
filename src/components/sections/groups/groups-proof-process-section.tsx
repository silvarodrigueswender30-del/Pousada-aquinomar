import { proofItems, processSteps } from "./groups-data"

export function GroupsProofSection() {
  return (
    <section className="w-full bg-brand-surface py-16 shadow-sm shadow-[#063A45]/5 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">
              HOSPEDAGEM B2B EM PARATY
            </p>
            <h2 className="mt-5 max-w-2xl font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
              Sim. A Aquino Mar recebe grupos em Paraty.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-brand-text/75 md:text-lg">
              Se você organiza excursões, viagens em grupo ou caravanas, nossa equipe pode ajudar a montar a hospedagem de acordo com a composição da viagem, disponibilidade e período.
            </p>
          </div>

          <div className="grid gap-0 border-y border-brand-gold/30 sm:grid-cols-2 sm:border-x">
            {proofItems.map((item, index) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="border-b border-brand-gold/30 px-6 py-7 last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(3)]:border-b-0"
                >
                  <span className="text-xs font-medium tracking-[0.18em] text-brand-gold/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="mt-6 h-9 w-9 text-brand-gold" strokeWidth={1.35} aria-hidden="true" />
                  <h3 className="mt-5 font-heading text-2xl font-normal leading-tight text-brand-primary">
                    {item.title}
                  </h3>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function GroupsProcessSection() {
  return (
    <section className="w-full overflow-hidden bg-brand-surface-alt py-16 text-brand-text md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.5fr)_minmax(18rem,0.5fr)] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">
              COMO FUNCIONA
            </p>
            <h2 className="mt-5 max-w-4xl font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
              Você organiza a viagem.
              <span className="block text-brand-gold">
                Nós organizamos a estadia.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-brand-text/75 lg:justify-self-end">
            Um processo simples, direto e pensado para quem precisa centralizar informações antes da chegada do grupo.
          </p>
        </div>

        <div className="mt-12 grid border-y border-brand-gold/30 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <article
                key={step.title}
                className="relative border-b border-brand-gold/30 py-8 last:border-b-0 md:px-7 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-brand-gold/30 xl:border-b-0 xl:[&:nth-child(2)]:border-r xl:[&:nth-child(2)]:border-brand-gold/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-heading text-6xl font-light text-brand-primary/16">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-8 w-8 text-brand-gold" strokeWidth={1.25} aria-hidden="true" />
                </div>
                <span aria-hidden="true" className="mt-5 block h-px w-16 bg-brand-gold/70" />
                <h3 className="mt-6 font-heading text-2xl font-normal leading-tight text-brand-primary">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-brand-text/72 sm:text-base">
                  {step.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
