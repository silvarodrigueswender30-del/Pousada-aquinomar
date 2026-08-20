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
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200",
    icon: <MapPin size={24} />,
    linkHref: "#",
  },
  {
    id: "centro-historico",
    title: "Centro Histórico de Paraty",
    description:
      "Ruas de pedra colonial, igrejas históricas e a Praça da Matriz, a poucos minutos da pousada.",
    imgSrc:
      "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=1200",
    icon: <Landmark size={24} />,
    linkHref: "#",
  },
  {
    id: "cachoeira-tobo",
    title: "Cachoeira do Tobogã",
    description:
      "Um escorregador natural de pedra, ideal para um passeio refrescante em família.",
    imgSrc:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200",
    icon: <Mountain size={24} />,
    linkHref: "#",
  },
  {
    id: "praia-cais",
    title: "Praia do Cais",
    description: "A cerca de 1,9 km, uma praia charmosa junto ao centro histórico.",
    imgSrc:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200",
    icon: <Waves size={24} />,
    linkHref: "#",
  },
  {
    id: "praia-pontal",
    title: "Praia do Pontal",
    description:
      "A cerca de 2 km da pousada, com boa estrutura de bares e restaurantes.",
    imgSrc:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200",
    icon: <Umbrella size={24} />,
    linkHref: "#",
  },
];

export function HighlightsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#E4F6FA_0%,#F8FAFC_52%,#CFF0F7_100%)]" />
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-[40%]"
        style={{
          backgroundImage: `linear-gradient(to bottom, 
            #FFFFFF 0%, 
            #FFFFFF 20%,
            rgba(255,255,255,0.8) 45%, 
            transparent 100%)`,
        }}
      />

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[22%]"
        style={{
          backgroundImage: `linear-gradient(to top, 
            #FFFFFF 0%, 
            rgba(255,255,255,0.6) 45%, 
            transparent 100%)`,
        }}
      />

      <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="font-heading text-sm font-medium uppercase tracking-wide text-[#0C6478]">
            Região
          </p>
          <h2 className="mt-3 font-heading text-4xl font-light text-slate-950 md:text-6xl">
            O que explorar perto da pousada
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Praias, cachoeiras e ruas históricas para aproveitar Paraty com calma,
            partindo de um refúgio familiar em Cabore.
          </p>
        </div>
      </div>

      <div className="relative z-20 flex w-full justify-center px-4 md:px-6">
        <ExpandingCards items={paratyHighlights} defaultActiveIndex={0} />
      </div>
    </section>
  );
}
