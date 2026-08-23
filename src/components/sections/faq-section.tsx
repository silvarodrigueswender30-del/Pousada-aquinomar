"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { useSafeInView } from "@/hooks/use-safe-in-view";

const faqs = [
  {
    question: "O café da manhã está incluído na diária?",
    answer:
      "Sim. O café da manhã está incluído e é servido das 8h às 10h, com mesa preparada pela família da pousada, opções frescas e aquele cuidado de casa que os hóspedes sempre elogiam.",
  },
  {
    question: "A pousada tem estacionamento?",
    answer:
      "Temos estacionamento privativo gratuito para hóspedes. É um diferencial importante para quem quer ficar em um bairro tranquilo de Paraty sem depender de vagas disputadas no Centro Histórico.",
  },
  {
    question: "Qual é a distância até o Centro Histórico de Paraty?",
    answer:
      "A Pousada Aquino Mar fica no Caboré, em uma rua residencial e tranquila. O trajeto até o Centro Histórico leva em média de 12 a 20 minutos a pé, em ritmo tranquilo.",
  },
  {
    question: "Os quartos têm ar-condicionado e Wi-Fi?",
    answer:
      "Sim. As acomodações contam com ar-condicionado e Wi-Fi, além de enxoval de qualidade e limpeza diária para deixar a estadia mais confortável.",
  },
  {
    question: "A pousada tem piscina e áreas comuns?",
    answer:
      "Sim. A pousada oferece piscina, jardim e áreas de convivência pensadas para uma experiência leve, familiar e acolhedora depois dos passeios por Paraty.",
  },
  {
    question: "Como faço para consultar disponibilidade ou reservar?",
    answer:
      "Você pode falar direto pelo WhatsApp da Pousada Aquino Mar. A equipe confirma disponibilidade, valores atualizados e ajuda a escolher o quarto mais adequado para sua viagem.",
  },
  {
    question: "A pousada é indicada para famílias?",
    answer:
      "Sim. O atendimento familiar é um dos pontos mais fortes da pousada, com acolhimento próximo, quartos confortáveis e uma rotina pensada para quem busca hospitalidade de verdade em Paraty.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const { ref, isInView } = useSafeInView();
  const shouldReduceMotion = useReducedMotion();
  const revealY = shouldReduceMotion ? 0 : 16;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: revealY }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: revealY }}
      transition={
        shouldReduceMotion
          ? { duration: 0.2, delay: index * 0.03 }
          : { type: "spring", bounce: 0, duration: 0.4, delay: index * 0.07 }
      }
      className="border-b border-brand-gold/20"
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-4 rounded-sm py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light focus-visible:ring-offset-2 md:py-7"
        aria-expanded={isOpen}
      >
        <span className="flex min-w-0 flex-1 items-start gap-4 md:gap-6">
          <span className="pt-1 font-heading text-2xl font-semibold leading-none text-brand-gold md:text-3xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-heading text-lg font-medium leading-tight text-brand-primary transition-colors duration-200 group-hover:text-brand-primary md:text-xl">
            {question}
          </span>
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-gold/20 bg-white text-brand-gold shadow-sm transition-colors duration-200 group-hover:border-brand-gold">
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            strokeWidth={2.5}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-14 pt-1 text-base font-medium leading-7 text-brand-text md:pb-7 md:pl-[4.5rem] md:text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isInView } = useSafeInView();
  const shouldReduceMotion = useReducedMotion();
  const revealY = shouldReduceMotion ? 0 : 24;

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full scroll-mt-24 bg-brand-surface py-16 md:py-24"
    >
      <div className="mx-auto w-full px-7 md:px-10">
        <div className="grid gap-12 md:grid-cols-[2fr_3fr] md:gap-16 lg:gap-24">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: revealY }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={
              shouldReduceMotion
                ? { duration: 0.2 }
                : { type: "spring", bounce: 0, duration: 0.4 }
            }
            className="md:sticky md:top-28 md:self-start"
          >
            <p className="font-heading text-sm font-medium uppercase tracking-wide text-brand-gold">
              Perguntas frequentes
            </p>
            <h2 className="mt-4 font-heading text-4xl font-light leading-[0.98] tracking-tight text-brand-primary md:text-6xl">
              Tire suas dúvidas
            </h2>
            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-brand-text md:text-lg">
              Tudo o que você precisa saber antes de se hospedar com a gente em Paraty.
            </p>

            <div className="mt-10 rounded-2xl border border-brand-gold/20 bg-brand-surface p-6 shadow-[0_18px_45px_color-mix(in_oklab,var(--color-primary)_10%,transparent)] md:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-gold">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold leading-tight text-brand-primary">
                    Não encontrou sua resposta?
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-brand-text">
                    Fale diretamente com a equipe da pousada para consultar disponibilidade e detalhes da estadia.
                  </p>
                </div>
              </div>

              <CTAButton
                href="https://wa.me/5524998280363?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20a%20Pousada%20Aquino%20Mar."
                variant="on-light"
                className="mt-6 [&>*]:bg-brand-cta [&_*]:text-white hover:[&>*]:brightness-90 focus-visible:ring-brand-cta-light"
              >
                Fale com a gente
              </CTAButton>
            </div>
          </motion.div>

          <div className="border-t border-brand-gold/20">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
