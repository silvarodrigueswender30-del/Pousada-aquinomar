"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/cta-button";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
      className="border-b border-[#DDE3EC]"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-7 md:py-8 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 rounded-sm"
        aria-expanded={isOpen}
      >
        <span className="font-mono text-xs text-sky-500 tracking-widest mr-4 md:mr-6 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-heading font-semibold text-base md:text-lg leading-snug text-[#0B1D2E] group-hover:text-[#1F6FA3] transition-colors duration-200">
          {question}
        </span>
        <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full border border-[#DDE3EC] text-[#1F6FA3] group-hover:bg-[#1F6FA3] group-hover:border-[#1F6FA3] group-hover:text-white transition-all duration-200">
          {isOpen ? <X size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
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
            <p className="font-sans text-[#5C6672] leading-relaxed pb-7 md:pb-8 text-sm md:text-base">
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
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-10%" });

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full bg-white pt-8 pb-20 md:pt-12 md:pb-32 scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <Badge variant="outline" className="font-sans mb-5">
            Dúvidas Comuns
          </Badge>
          <h2 className="font-heading font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#0B1D2E] max-w-2xl">
            Perguntas Frequentes
          </h2>
          <p className="font-sans font-light text-base md:text-xl leading-relaxed text-[#5C6672] mt-4 max-w-xl">
            Tudo o que você precisa saber antes de se hospedar com a gente em Paraty.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="border-t border-[#DDE3EC]">
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center gap-5 mt-12 md:mt-16"
          >
            <p className="font-sans text-[#5C6672] text-sm md:text-base text-center">
              Ainda tem dúvidas? Fale diretamente com nossa equipe.
            </p>
            <CTAButton
              href="https://wa.me/5524998280363?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20a%20Pousada%20Aquino%20Mar."
              variant="on-light"
            >
              Tirar dúvidas no WhatsApp
            </CTAButton>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
