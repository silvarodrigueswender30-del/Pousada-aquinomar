"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { useSafeInView } from "@/hooks/use-safe-in-view";

interface CountingNumberProps {
  target: number;
  decimals?: number;
  formatLocale?: boolean;
}

export function CountingNumber({ target, decimals = 0, formatLocale = true }: CountingNumberProps) {
  const { ref, isInView } = useSafeInView(400);
  const [displayValue, setDisplayValue] = useState(target);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 70, // Mais lento e suave conforme solicitado (não muito rápido)
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [motionValue, isInView, target]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      motionValue.set(target);
      setDisplayValue(target);
    }, 1200);

    return () => window.clearTimeout(timeout);
  }, [motionValue, target]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [springValue]);

  const formatValue = (value: number) => formatLocale
    ? Math.floor(value).toLocaleString('pt-BR')
    : value.toFixed(decimals).replace('.', ',');

  // Keep the final value available without JavaScript and outside the animation.
  return (
    <span ref={ref}>
      <span className="sr-only">{formatValue(target)}</span>
      <span aria-hidden="true">{formatValue(displayValue)}</span>
    </span>
  );
}
