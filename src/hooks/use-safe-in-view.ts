import { useEffect, useRef, useState } from "react";

export function useSafeInView(fallbackDelayMs = 600) {
  const ref = useRef<any>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    let triggered = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          setIsInView(true);
        }
      },
      { threshold: 0, rootMargin: "200px 0px 200px 0px" }
    );

    observer.observe(ref.current);

    // Fallback: se o elemento já estiver visível ou o observer falhar 
    // silenciosamente, força a exibição depois de um tempo mínimo
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsInView(true);
      triggered = true;
    }

    const timeout = setTimeout(() => {
      if (!triggered) setIsInView(true);
    }, fallbackDelayMs);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [fallbackDelayMs]);

  return { ref, isInView };
}
