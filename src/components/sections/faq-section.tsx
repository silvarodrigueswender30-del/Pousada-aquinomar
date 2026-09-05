"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { MessageCircle, Minus, Plus } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { useSafeInView } from "@/hooks/use-safe-in-view";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

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
      className="border-b border-brand-gold/30"
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-4 rounded-sm py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light focus-visible:ring-offset-2 md:py-7"
        aria-expanded={isOpen}
      >
        <span className="flex min-w-0 flex-1 items-start gap-4 md:gap-6">
          <span className="pt-1 text-xs font-medium tracking-[0.18em] text-brand-gold/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-heading text-lg font-normal leading-tight text-brand-primary transition-colors duration-200 group-hover:text-brand-gold md:text-xl">
            {question}
          </span>
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-gold/30 bg-transparent text-brand-gold transition-colors duration-200 group-hover:border-brand-gold">
          {isOpen ? (
            <Minus className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
          ) : (
            <Plus className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
          )}
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
            <p className="pb-6 pl-14 pt-1 text-base leading-7 text-brand-text/75 md:pb-7 md:pl-[4.5rem]">
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
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid overflow-hidden lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)]">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: revealY }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={
              shouldReduceMotion
                ? { duration: 0.2 }
                : { type: "spring", bounce: 0, duration: 0.4 }
            }
            className="bg-brand-primary-dark px-6 py-12 text-white md:px-8 lg:px-10 lg:py-14"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold-light">
              PERGUNTAS FREQUENTES
            </p>
            <h2 className="mt-5 font-heading text-[2.45rem] font-light leading-[1.04] tracking-tight text-white md:text-5xl">
              Tire suas dúvidas sobre a pousada
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/76">
              Tudo o que você precisa saber antes de se hospedar com a gente em Paraty.
              {" "}Para quem procura um hotel em Parati, nossa pousada oferece o aconchego de uma casa de família.
            </p>

            <div className="mt-10 border-t border-brand-gold/45 pt-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-gold/35 text-brand-gold-light">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-normal leading-tight text-white">
                    Não encontrou sua resposta?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">
                    Fale diretamente com a equipe da pousada para consultar disponibilidade e detalhes da estadia.
                  </p>
                </div>
              </div>

              <CTAButton
                href={buildWhatsAppUrl(whatsappMessages.home)}
                variant="brand"
                className="mt-6 focus-visible:ring-brand-cta-light"
              >
                Fale com a gente
              </CTAButton>
            </div>
          </motion.div>

          <div className="bg-brand-surface-alt px-6 py-6 md:px-8 lg:px-12 lg:py-10">
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


