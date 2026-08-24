import { Landmark, MapPin, Mountain, Umbrella, Waves } from "lucide-react";
import {
  ExpandingCards,
  type CardItem,
} from "@/components/ui/expanding-cards";

const paratyHighlights: CardItem[] = [
  {
    id: "jabaquara",
    title: "Praia do Jabaquara",
    description:
      "A cerca de 1,3 km da pousada, uma das praias mais próximas e tranquilas de Paraty.",
    imgSrc:
      "/images/passeio/praia-do-jabaquara.avif",
    icon: <MapPin size={24} />,
  },
  {
    id: "centro-historico",
    title: "Centro Histórico de Paraty",
    description:
      "Ruas de pedra colonial, igrejas históricas e a Praça da Matriz, a poucos minutos da pousada.",
    imgSrc:
      "/images/passeio/centro-historico.avif",
    icon: <Landmark size={24} />,
  },
  {
    id: "cachoeira-tobo",
    title: "Cachoeira do Tobogã",
    description:
      "Um escorregador natural de pedra, ideal para um passeio refrescante em família.",
    imgSrc:
      "/images/passeio/cachoeira-toboga.avif",
    icon: <Mountain size={24} />,
  },
  {
    id: "praia-cais",
    title: "Praia do Cais",
    description: "A cerca de 1,9 km, uma praia charmosa junto ao centro histórico.",
    imgSrc:
      "/images/passeio/praia-do-cais.avif",
    icon: <Waves size={24} />,
  },
  {
    id: "praia-pontal",
    title: "Praia do Pontal",
    description:
      "A cerca de 2 km da pousada, com boa estrutura de bares e restaurantes.",
    imgSrc:
      "/images/passeio/praia-do-pontal.avif",
    icon: <Umbrella size={24} />,
  },
];

export function HighlightsSection() {
  return (
    <section id="destaques" className="relative w-full scroll-mt-24 overflow-hidden bg-white pt-16 md:pt-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="font-heading text-sm font-medium uppercase tracking-wide text-[#0C6478]">
            Região
          </p>
          <h2 className="mt-3 font-heading text-4xl font-light text-slate-950 md:text-6xl">
            O que explorar perto da pousada
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Praias, cachoeiras e ruas históricas para aproveitar Paraty com calma,
            partindo de um refúgio familiar em Caborê.
          </p>
        </div>
      </div>

      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#E4F6FA_0%,#F8FAFC_52%,#CFF0F7_100%)]" />
          <img
            src="/images/passeio/praia-do-cais.avif"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </div>

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
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[30%]"
          style={{
            backgroundImage: `linear-gradient(to top, 
              #FFFFFF 0%, 
              rgba(255,255,255,0.72) 22%, 
              rgba(255,255,255,0.28) 62%, 
              transparent 100%)`,
          }}
        />

        <div className="relative z-20 flex justify-center px-4 md:px-6">
          <ExpandingCards items={paratyHighlights} defaultActiveIndex={0} />
        </div>
      </div>
    </section>
  );
}
