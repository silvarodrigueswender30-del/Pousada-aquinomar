import { useEffect, useRef, useState } from "react";

export function useSafeInView(fallbackDelayMs = 600) {
  const ref = useRef<any>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    let triggered = false;
    const element = ref.current;

    const markInView = () => {
      if (triggered) return;
      triggered = true;
      setIsInView(true);
    };

    const checkCurrentVisibility = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < viewportHeight + 200 && rect.bottom > -200;
    };

    const frameId = window.requestAnimationFrame(() => {
      if (checkCurrentVisibility()) {
        markInView();
      }
    });

    const timeout = setTimeout(() => {
      if (!triggered && document.body.contains(element)) {
        markInView();
      }
    }, fallbackDelayMs);

    let observer: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      try {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              markInView();
            }
          },
          { threshold: 0.01, rootMargin: "200px 0px 200px 0px" }
        );

        observer.observe(element);
      } catch {
        markInView();
      }
    } else {
      markInView();
    }

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frameId);
      clearTimeout(timeout);
    };
  }, [fallbackDelayMs]);

  return { ref, isInView };
}
