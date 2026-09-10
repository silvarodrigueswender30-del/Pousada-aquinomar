"use client"

type GtagEventParams = Record<string, string | number | boolean | undefined>
type TrackGtagEventOptions = {
  useBeacon?: boolean
}

const GA_MEASUREMENT_ID = "G-4QF4XRRWGW"

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: GtagEventParams & { transport_type?: "beacon" },
    ) => void
  }
}

function getGaClientId() {
  const match = document.cookie.match(/(?:^|;\s*)_ga=GA\d+\.\d+\.(\d+\.\d+)/)
  return match?.[1]
}

function sendBeaconEvent(eventName: string, params?: GtagEventParams) {
  if (typeof navigator.sendBeacon !== "function") return

  const clientId = getGaClientId()
  if (!clientId) return

  const searchParams = new URLSearchParams({
    v: "2",
    tid: GA_MEASUREMENT_ID,
    cid: clientId,
    en: eventName,
  })

  Object.entries(params ?? {}).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.set(`ep.${key}`, String(value))
    }
  })

  navigator.sendBeacon(`https://www.google-analytics.com/g/collect?${searchParams.toString()}`)
}

export function trackGtagEvent(
  eventName: string,
  params?: GtagEventParams,
  options?: TrackGtagEventOptions,
) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      ...params,
      ...(options?.useBeacon ? { transport_type: "beacon" as const } : {}),
    })
  }

  if (options?.useBeacon) {
    sendBeaconEvent(eventName, params)
  }
}
