import Image from "next/image"
import { paratyGroupRoutes } from "./groups-data"

const locationPoints = [
  "Centro Histórico",
  "passeios",
  "praias",
  "restaurantes",
  "pontos turísticos",
]

export function GroupsLocationSection() {
  return (
    <section className="w-full bg-white">
      <div className="relative overflow-hidden bg-brand-primary md:min-h-[48rem]">
        <Image
          src="/images/location/foto-pousada-03.avif"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover max-md:object-[48%_top]"
          quality={82}
        />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-primary-dark)_24%,transparent)_0%,color-mix(in_oklab,var(--color-primary)_8%,transparent)_44%,color-mix(in_oklab,var(--color-primary-dark)_74%,transparent)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-[linear-gradient(to_bottom,var(--color-surface)_0%,color-mix(in_oklab,var(--color-surface)_55%,transparent)_48%,transparent_100%)] sm:h-28 md:h-36" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-[linear-gradient(to_bottom,transparent_0%,color-mix(in_oklab,var(--color-surface-alt)_55%,transparent)_52%,var(--color-surface-alt)_100%)] sm:h-28 md:h-36" />

        <div className="relative z-20 mx-auto flex min-h-[48rem] w-full max-w-7xl flex-col justify-between px-5 py-16 text-white md:px-10 md:py-20">
          <div className="max-w-4xl rounded-2xl bg-brand-primary-dark/72 p-6 backdrop-blur-sm md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold-light">
              LOCALIZAÇÃO E LOGÍSTICA
            </p>
            <h2 className="mt-5 font-heading text-[2.65rem] font-light leading-[1.02] tracking-tight md:text-6xl">
              Uma base estratégica para conhecer Paraty.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 md:text-lg">
              Para quem organiza uma viagem em grupo, a localização da hospedagem faz diferença na logística do roteiro.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-white/82">
              {locationPoints.map((point) => (
                <span key={point}>
                  <span className="text-brand-gold-light">+</span> {point}
                </span>
              ))}
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
                {[
                  ["01", "Endereço", "Rua Guapuruvu, 371", "Caboré, Paraty - RJ, CEP 23970-000."],
                  ["02", "Centro", "12-20 min a pé", "Caminho prático até o Centro Histórico, em ritmo tranquilo."],
                  ["03", "Bairro", "Caboré residencial", "Mais silêncio para descansar, sem perder acesso ao movimento de Paraty."],
                  ["04", "Chegada", "Estacione sem custo", "Estacionamento privativo gratuito para chegar de carro com tranquilidade."],
                ].map(([number, label, title, description], index, items) => (
                  <article key={number} className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-t border-white/12 py-6 first:border-t-0 first:pt-0 last:pb-0">
                    {index < items.length - 1 && (
                      <span aria-hidden="true" className="absolute left-6 top-14 h-[calc(100%-2rem)] w-px bg-brand-gold/45" />
                    )}
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/45 bg-brand-primary-dark text-xs font-medium tracking-[0.18em] text-brand-gold-light">
                      {number}
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                        {label}
                      </p>
                      <h3 className="mt-2 font-heading text-xl font-normal leading-tight text-white">
                        {title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/68">
                        {description}
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

export function GroupsParatySection() {
  return (
    <section className="w-full overflow-hidden bg-brand-surface-alt py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.58fr)_minmax(18rem,0.42fr)] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">
              PARATY PARA GRUPOS
            </p>
            <h2 className="mt-5 max-w-4xl font-heading text-[2.6rem] font-light leading-[1.02] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
              Paraty oferece roteiro para todos os tipos de grupo.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-brand-text/75 lg:justify-self-end">
            A Aquino Mar pode funcionar como base para diferentes experiências ao longo da viagem.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {paratyGroupRoutes.map((route, index) => (
            <article key={route.title} className="group overflow-hidden rounded-xl bg-brand-primary-dark shadow-lg shadow-brand-primary/10">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={route.image}
                  alt={route.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 20vw"
                  className="object-cover transition duration-700 motion-safe:group-hover:scale-[1.03]"
                  quality={82}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--color-primary-dark)_90%,transparent)_0%,transparent_72%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="text-xs font-medium tracking-[0.18em] text-brand-gold-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-light leading-tight">
                    {route.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/72">
                    {route.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
