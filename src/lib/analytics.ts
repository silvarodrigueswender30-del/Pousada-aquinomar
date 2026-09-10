"use client"

type GtagEventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: GtagEventParams) => void
  }
}

export function trackGtagEvent(eventName: string, params?: GtagEventParams) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params)
  }
}
