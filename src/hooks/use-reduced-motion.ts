"use client"

import { useState, useEffect } from "react"

export function useReducedMotion() {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const timeoutId = window.setTimeout(() => setMatches(mediaQuery.matches), 0)
    
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches)
    mediaQuery.addEventListener("change", handler)
    return () => {
      window.clearTimeout(timeoutId)
      mediaQuery.removeEventListener("change", handler)
    }
  }, [])

  return matches
}
