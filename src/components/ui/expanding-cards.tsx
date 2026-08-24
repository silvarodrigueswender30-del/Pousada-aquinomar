"use client";

import Image from "next/image";
import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export interface CardItem {
  id: string | number;
  index: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  metadata: string;
  actionLabel?: string;
  description?: string;
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  activeIndex?: number;
  defaultActiveIndex?: number;
  onActiveChange?: (index: number) => void;
}

export const ExpandingCards = React.forwardRef<
  HTMLUListElement,
  ExpandingCardsProps
>(
  (
    {
      className,
      items,
      activeIndex: controlledActiveIndex,
      defaultActiveIndex = 0,
      onActiveChange,
      ...props
    },
    ref,
  ) => {
    const shouldReduceMotion = useReducedMotion();
    const [internalActiveIndex, setInternalActiveIndex] =
      React.useState(defaultActiveIndex);
    const [isDesktop, setIsDesktop] = React.useState(false);
    const itemRefs = React.useRef<Array<HTMLLIElement | null>>([]);
    const activeIndex = controlledActiveIndex ?? internalActiveIndex;

    React.useEffect(() => {
      const mediaQuery = window.matchMedia("(min-width: 1024px)");
      const handleChange = () => setIsDesktop(mediaQuery.matches);

      handleChange();
      mediaQuery.addEventListener("change", handleChange);

      return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const setActiveItem = React.useCallback(
      (index: number, shouldScroll = false) => {
        if (index === activeIndex) return;

        if (controlledActiveIndex === undefined) {
          setInternalActiveIndex(index);
        }

        onActiveChange?.(index);

        if (shouldScroll && !isDesktop) {
          window.requestAnimationFrame(() => {
            itemRefs.current[index]?.scrollIntoView({
              behavior: shouldReduceMotion ? "auto" : "smooth",
              block: "nearest",
            });
          });
        }
      },
      [
        activeIndex,
        controlledActiveIndex,
        isDesktop,
        onActiveChange,
        shouldReduceMotion,
      ],
    );

    const spring = shouldReduceMotion
      ? { duration: 0 }
      : { type: "spring" as const, stiffness: 160, damping: 24, mass: 0.8 };

    return (
      <ul
        className={cn(
          "flex w-full max-w-7xl flex-col gap-3 lg:h-[560px] lg:flex-row xl:h-[600px]",
          className,
        )}
        ref={ref}
        {...props}
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const panelId = `destination-panel-${item.id}`;
          const triggerId = `destination-trigger-${item.id}`;

          return (
            <motion.li
              key={item.id}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              animate={
                isDesktop
                  ? { flex: isActive ? 5.4 : 1 }
                  : { height: isActive ? 460 : 86 }
              }
              transition={spring}
              className={cn(
                "group relative min-h-0 min-w-0 overflow-hidden rounded-xl bg-brand-primary-dark shadow-lg shadow-brand-primary/15",
                "focus-within:ring-2 focus-within:ring-brand-gold focus-within:ring-offset-2 focus-within:ring-offset-brand-surface",
                "lg:h-full",
              )}
              data-active={isActive}
              data-index={item.index}
            >
              <button
                id={triggerId}
                type="button"
                aria-expanded={isActive}
                aria-controls={panelId}
                className="relative block h-full w-full overflow-hidden text-left outline-none"
                onClick={() => setActiveItem(index, true)}
                onFocus={() => setActiveItem(index)}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes={
                    isActive
                      ? "(min-width: 1024px) 56vw, 100vw"
                      : "(min-width: 1024px) 12vw, 100vw"
                  }
                  className={cn(
                    "object-cover transition duration-500",
                    shouldReduceMotion
                      ? ""
                      : "scale-[1.04] group-data-[active=true]:scale-100",
                    isActive
                      ? "brightness-100"
                      : "brightness-75 group-hover:brightness-90",
                  )}
                  quality={82}
                />

                <div className="absolute inset-0 bg-brand-primary-dark/25 transition duration-500 group-data-[active=true]:bg-brand-primary-dark/10" />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-primary-dark/95 via-brand-primary-dark/58 to-transparent" />
                <div className="absolute left-0 top-0 hidden h-full w-2/3 bg-gradient-to-r from-brand-primary-dark/62 to-transparent lg:block" />

                <div className="absolute inset-0 flex h-full flex-col justify-between p-5 text-white lg:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "text-xs font-medium uppercase tracking-[0.24em] text-brand-gold-light transition duration-300",
                        isActive ? "opacity-100" : "opacity-90",
                      )}
                    >
                      {isActive ? `${item.index} / ${item.category}` : item.index}
                    </span>

                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-brand-gold-light transition duration-300 lg:hidden",
                        isActive ? "rotate-180" : "rotate-0",
                      )}
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="relative z-10"
                  >
                    <div className="lg:hidden">
                      {isActive ? (
                        <ActiveCardContent item={item} />
                      ) : (
                        <CollapsedMobileContent item={item} />
                      )}
                    </div>

                    <div className="hidden lg:block">
                      {isActive ? (
                        <ActiveCardContent item={item} />
                      ) : (
                        <CollapsedDesktopContent item={item} />
                      )}
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute bottom-0 left-0 h-1 bg-brand-gold-light transition-all duration-500",
                      isActive ? "w-full" : "w-10",
                    )}
                  />
                </div>
              </button>
            </motion.li>
          );
        })}
      </ul>
    );
  },
);

function ActiveCardContent({ item }: { item: CardItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="max-w-lg"
    >
      <h3 className="font-heading text-3xl font-light leading-tight text-white md:text-4xl">
        {item.title}
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-6 text-white/78">
        {item.metadata}
      </p>
      {item.actionLabel ? (
        <span className="mt-5 inline-flex text-sm font-medium text-brand-gold-light">
          {item.actionLabel}
        </span>
      ) : null}
    </motion.div>
  );
}

function CollapsedMobileContent({ item }: { item: CardItem }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="min-w-0">
        <p className="truncate font-heading text-lg font-light leading-tight text-white">
          {item.title}
        </p>
        <span className="mt-2 block h-1 w-1 rounded-full bg-brand-gold-light" />
      </div>
    </div>
  );
}

function CollapsedDesktopContent({ item }: { item: CardItem }) {
  return (
    <div className="flex h-full min-h-[360px] items-end justify-center">
      <h3 className="origin-bottom-left -rotate-90 whitespace-nowrap font-heading text-xl font-light text-white/88">
        {item.title}
      </h3>
    </div>
  );
}

ExpandingCards.displayName = "ExpandingCards";
