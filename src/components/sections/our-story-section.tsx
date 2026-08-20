"use client"

import { motion } from "framer-motion"
import { HeartHandshake } from "lucide-react"

const power3Out = [0.22, 1, 0.36, 1] as const
const viewport = { once: true, amount: 0.3 } as const

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: power3Out },
  },
}

const imageReveal = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: power3Out, delay: 0.2 },
  },
}

export function OurStorySection() {
  return (
    <section id="nossa-historia" className="w-full scroll-mt-24 bg-white py-16 md:py-24">
      <div className="mx-auto w-full px-7 md:px-10">
        <div className="grid gap-12 border-y border-[#063A45]/10 py-10 md:grid-cols-[1.35fr_0.9fr] md:items-center md:gap-16 md:py-14 lg:gap-24">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="flex items-center gap-2"
            >
              <HeartHandshake className="h-4 w-4 text-[#0C6478]" aria-hidden="true" />
              <p className="font-heading text-sm font-medium uppercase tracking-wide text-[#0C6478]">
                Nossa história
              </p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.8, ease: power3Out, delay: 0.1 }}
              className="mt-4 max-w-4xl font-heading text-4xl font-light leading-[0.98] text-slate-950 md:text-6xl"
            >
              Um sobrenome, uma família, uma pousada
            </motion.h2>

            <div className="mt-8 max-w-3xl space-y-6">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.8, ease: power3Out, delay: 0.2 }}
                className="text-lg font-medium leading-8 text-slate-600"
              >
                O nome Aquino Mar carrega o sobrenome da família que também está por trás da Aquinotour, agência de passeios náuticos da região. Não é uma rede, não é um grupo hoteleiro — é a Rose, o esposo e a filha, tocando o negócio com as próprias mãos e recebendo cada hóspede como se fosse visita de casa.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.8, ease: power3Out, delay: 0.3 }}
                className="text-lg font-medium leading-8 text-slate-600"
              >
                Essa proximidade aparece em cada detalhe: no café da manhã feito com carinho e servido todos os dias, na atenção redobrada na limpeza dos quartos, na disposição de indicar o melhor passeio ou a praia mais tranquila para quem está de passagem por Paraty.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.8, ease: power3Out, delay: 0.4 }}
                className="text-lg font-medium leading-8 text-slate-600"
              >
                O resultado está nas mais de 400 avaliações cinco estrelas deixadas por quem já passou por aqui — e na vontade repetida de voltar.
              </motion.p>
            </div>

            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.8, ease: power3Out, delay: 0.5 }}
              className="mt-10 border-l-4 border-[#0C6478] bg-[#F4FAFB] px-6 py-5 shadow-sm shadow-[#063A45]/5"
            >
              <p className="font-heading text-2xl font-light italic leading-tight text-[#063A45]">
                “Simplicidade luxuosa.”
              </p>
              <footer className="mt-3 text-sm font-medium text-slate-500">
                — Hóspede, avaliação no Google
              </footer>
            </motion.blockquote>
          </div>

          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative order-first aspect-[335/366] overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#E4F6FA_0%,#F8FAFC_52%,#CFF0F7_100%)] md:order-none md:aspect-[4/5]"
          >
            {/* TODO: substituir por foto real da família/fachada da pousada quando disponível */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(47,184,217,0.36),transparent_34%),radial-gradient(circle_at_75%_74%,rgba(6,58,69,0.18),transparent_42%)]" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/55 bg-white/82 p-5 shadow-xl shadow-[#063A45]/10 backdrop-blur-md">
              <p className="font-heading text-xl font-semibold leading-tight text-[#063A45]">
                Rose, esposo e filha
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">
                gestão familiar
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
