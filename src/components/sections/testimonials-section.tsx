import {
  HorizontalScroller,
  TestimonialCard,
  type TestimonialItem,
} from "@/components/ui/testimonial-scroller"

const firstRowTestimonials: TestimonialItem[] = [
  {
    id: "idalete-pacheco",
    author: "Idalete Pacheco",
    source: "Google",
    text: "Café da manhã da pousada excelente, com grande variedade de bolos, frios, frutas e sucos naturais. A limpeza dos quartos e das áreas comuns é impecável, e as toalhas são de ótima qualidade.",
  },
  {
    id: "roseli-ferreira",
    author: "Roseli Ferreira",
    source: "Google",
    text: "Pousada maravilhosa! Quartos grandes, tudo limpinho, café da manhã com tudo fresquinho. O atendimento da família que é proprietária foi show! Sempre prontos a ajudar.",
  },
  {
    id: "thais-alves",
    author: "Thais Alves",
    source: "Google",
    text: "Rose é uma anfitriã maravilhosa, super atenciosa, prestativa, educada, dedicada, faltam elogios! Nos auxiliou na indicação de passeios.",
  },
  {
    id: "danilo-romeu",
    author: "Danilo Romeu",
    source: "Google",
    text: "Quarto novo, impecável, cama grande, ar condicionado muito bom. Sem contar o café da manhã excelente e o serviço de atendimento muito bom.",
  },
]

const secondRowTestimonials: TestimonialItem[] = [
  {
    id: "nedi-ropke",
    author: "Nedi Ropke",
    source: "Google",
    text: "Lugar maravilhoso! Café da manhã variado, caprichado e feito com amor. Thiago e Rose são pessoas muito queridas e atenciosas. Recomendo fortemente!",
  },
  {
    id: "marcia-seefeldt",
    author: "Marcia Seefeldt",
    source: "Google",
    text: "As toalhas de banho impecáveis e cheirosas. Roupas de cama, quarto, banheiro. Café da manhã uma delícia. Foi uma estadia perfeita.",
  },
  {
    id: "camila-lazaro",
    author: "Camila Lazaro",
    source: "Google",
    text: "Quartos limpos, amplos com ar condicionado. Café da manhã excepcional! Tudo limpinho e bem organizado.",
  },
  {
    id: "jose-orlando-albiero",
    author: "José Orlando Albiero",
    source: "Google",
    text: "Profissionais super capacitados, atendimento de primeira classe. Gratidão ao senhor Tiago e sua família pelo acolhimento maravilhoso.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="w-full scroll-mt-24 overflow-hidden bg-brand-surface py-16 md:py-24">
      <div className="mx-auto w-full px-7 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-medium uppercase tracking-wide text-brand-gold">
            Depoimentos
          </p>
          <h2 className="mt-4 font-heading text-4xl font-light leading-[0.98] tracking-tight text-brand-primary md:text-6xl">
            O que nossos hóspedes dizem
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-7 text-brand-text md:text-lg">
            Nota 5.0 no Google, com mais de 411 avaliações de hóspedes reais.
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-6 md:mt-16">
        <HorizontalScroller speed="50s" direction="left">
          {firstRowTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </HorizontalScroller>

        <HorizontalScroller speed="65s" direction="right">
          {secondRowTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </HorizontalScroller>
      </div>
    </section>
  )
}
