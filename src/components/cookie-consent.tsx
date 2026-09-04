"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import { Cookie, Settings2, X } from "lucide-react"
import {
  COOKIE_PREFERENCES_EVENT,
  createCookieConsentPreferences,
  readCookieConsent,
  saveCookieConsent,
  type CookieConsentPreferences,
} from "@/lib/cookie-consent"

type PreferencesDraft = Pick<CookieConsentPreferences, "analytics" | "marketing">

const defaultDraft: PreferencesDraft = {
  analytics: false,
  marketing: false,
}

export function CookieConsent() {
  const titleId = useId()
  const [isReady, setIsReady] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [draft, setDraft] = useState<PreferencesDraft>(defaultDraft)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const storedConsent = readCookieConsent()

      if (storedConsent) {
        setDraft({
          analytics: storedConsent.analytics,
          marketing: storedConsent.marketing,
        })
        setShowBanner(false)
      } else {
        setShowBanner(true)
      }

      setIsReady(true)
    }, 0)

    return () => window.clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    function openPreferences() {
      const storedConsent = readCookieConsent()
      setDraft(
        storedConsent
          ? {
              analytics: storedConsent.analytics,
              marketing: storedConsent.marketing,
            }
          : defaultDraft,
      )
      setShowBanner(false)
      setShowPreferences(true)
    }

    window.addEventListener(COOKIE_PREFERENCES_EVENT, openPreferences)
    return () => window.removeEventListener(COOKIE_PREFERENCES_EVENT, openPreferences)
  }, [])

  useEffect(() => {
    if (!showPreferences) return

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setShowPreferences(false)
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [showPreferences])

  function persistConsent(preferences: PreferencesDraft) {
    const consent = createCookieConsentPreferences(preferences)
    saveCookieConsent(consent)
    setDraft(preferences)
    setShowBanner(false)
    setShowPreferences(false)
  }

  if (!isReady) return null

  return (
    <>
      {showBanner ? (
        <section
          aria-label="Aviso de cookies"
          className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 rounded-2xl border border-brand-gold/25 bg-brand-surface-alt/95 p-5 text-brand-primary shadow-2xl shadow-brand-primary/15 backdrop-blur-md md:flex-row md:items-end md:justify-between md:p-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
                <Cookie className="h-4 w-4" aria-hidden="true" />
                Cookies
              </div>
              <p className="mt-3 text-sm leading-6 text-brand-text md:text-base">
                Utilizamos cookies para melhorar sua experiência, analisar o uso do site e, quando autorizado,
                personalizar conteúdos. Você pode aceitar todos, recusar os não essenciais ou ajustar suas
                preferências.
              </p>
              <Link
                href="/politica-de-privacidade-e-cookies"
                className="mt-3 inline-flex text-sm font-semibold text-brand-cta underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light"
              >
                Política de Privacidade e Cookies
              </Link>
            </div>

            <div className="grid gap-2 sm:grid-cols-3 md:min-w-[31rem]">
              <button
                type="button"
                onClick={() => persistConsent({ analytics: true, marketing: true })}
                className="rounded-full bg-brand-cta px-5 py-3 text-sm font-semibold text-white transition hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface-alt"
              >
                Aceitar todos
              </button>
              <button
                type="button"
                onClick={() => persistConsent({ analytics: false, marketing: false })}
                className="rounded-full border border-brand-primary/15 bg-white px-5 py-3 text-sm font-semibold text-brand-primary transition hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface-alt"
              >
                Recusar não essenciais
              </button>
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-primary/15 bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface-alt"
              >
                <Settings2 className="h-4 w-4" aria-hidden="true" />
                Configurar
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {showPreferences ? (
        <div
          aria-labelledby={titleId}
          aria-modal="true"
          className="fixed inset-0 z-[80] flex items-end justify-center bg-brand-primary-dark/62 px-4 py-5 backdrop-blur-sm sm:items-center"
          role="dialog"
        >
          <div className="w-full max-w-xl rounded-2xl border border-brand-gold/25 bg-brand-surface-alt p-5 text-brand-primary shadow-2xl shadow-brand-primary/25 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">Preferências</p>
                <h2 id={titleId} className="mt-2 font-heading text-2xl font-normal text-brand-primary">
                  Configurar cookies
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/10 bg-white text-brand-primary transition hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light"
                aria-label="Fechar preferências de cookies"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 divide-y divide-brand-primary/10 rounded-xl border border-brand-primary/10 bg-white">
              <CookiePreferenceRow
                title="Necessários"
                description="Essenciais para segurança, funcionamento do site e preferências básicas."
                checked
                disabled
              />
              <CookiePreferenceRow
                title="Analytics"
                description="Ajudam a entender visitas e melhorar o conteúdo quando autorizados."
                checked={draft.analytics}
                onChange={(checked) => setDraft((current) => ({ ...current, analytics: checked }))}
              />
              <CookiePreferenceRow
                title="Marketing"
                description="Podem personalizar conteúdos e campanhas quando autorizados."
                checked={draft.marketing}
                onChange={(checked) => setDraft((current) => ({ ...current, marketing: checked }))}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={() => persistConsent({ analytics: false, marketing: false })}
                className="rounded-full border border-brand-primary/15 bg-white px-5 py-3 text-sm font-semibold text-brand-primary transition hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light"
              >
                Recusar não essenciais
              </button>
              <button
                type="button"
                onClick={() => persistConsent(draft)}
                className="rounded-full bg-brand-cta px-5 py-3 text-sm font-semibold text-white transition hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface-alt"
              >
                Salvar preferências
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

function CookiePreferenceRow({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}) {
  return (
    <label className="flex items-center justify-between gap-4 p-4">
      <span>
        <span className="block text-sm font-semibold text-brand-primary">{title}</span>
        <span className="mt-1 block text-sm leading-5 text-brand-text/72">{description}</span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        className="h-5 w-5 shrink-0 accent-brand-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta-light"
        aria-label={`Cookies ${title}`}
      />
    </label>
  )
}
