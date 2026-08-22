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
  const [displayValue, setDisplayValue] = useState(0);

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
    return springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [springValue]);

  const formatted = formatLocale 
    ? Math.floor(displayValue).toLocaleString('pt-BR') 
    : displayValue.toFixed(decimals).replace('.', ',');

  return <span ref={ref}>{formatted}</span>;
}
