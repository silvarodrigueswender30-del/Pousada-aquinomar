export const COOKIE_CONSENT_STORAGE_KEY = "pousada-aquinomar-cookie-consent"
export const COOKIE_PREFERENCES_EVENT = "pousada-aquinomar:open-cookie-preferences"
export const COOKIE_CONSENT_CHANGED_EVENT = "pousada-aquinomar:cookie-consent-changed"

export type CookieConsentPreferences = {
  necessary: true
  analytics: boolean
  marketing: boolean
  updatedAt: string
}

export function createCookieConsentPreferences(
  preferences: Pick<CookieConsentPreferences, "analytics" | "marketing">,
): CookieConsentPreferences {
  return {
    necessary: true,
    analytics: preferences.analytics,
    marketing: preferences.marketing,
    updatedAt: new Date().toISOString(),
  }
}

export function readCookieConsent(): CookieConsentPreferences | null {
  if (typeof window === "undefined") return null

  try {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    if (!stored) return null

    const parsed = JSON.parse(stored) as Partial<CookieConsentPreferences>
    if (typeof parsed.analytics !== "boolean" || typeof parsed.marketing !== "boolean") {
      return null
    }

    return {
      necessary: true,
      analytics: parsed.analytics,
      marketing: parsed.marketing,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date().toISOString(),
    }
  } catch {
    return null
  }
}

export function saveCookieConsent(preferences: CookieConsentPreferences) {
  if (typeof window === "undefined") return
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(preferences))
  window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGED_EVENT))
}
