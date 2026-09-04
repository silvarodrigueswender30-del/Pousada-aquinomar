"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { X } from "lucide-react"
import { COOKIE_CONSENT_CHANGED_EVENT, readCookieConsent } from "@/lib/cookie-consent"
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp"

const STORAGE_KEY = "aquino_exit_offer_seen"
const BLOCK_DURATION_MS = 7 * 24 * 60 * 60 * 1000
const DESKTOP_ARM_DELAY_MS = 8 * 1000
const MOBILE_DELAY_MS = 20 * 1000
const MOBILE_SCROLL_THRESHOLD = 0.6
const WHATSAPP_URL = buildWhatsAppUrl(whatsappMessages.popup)

type OfferAction = "shown" | "closed" | "clicked"

type StoredOffer = {
  lastShown: number
  action: OfferAction
}

function readStoredOffer(): StoredOffer | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return null

    const parsed = JSON.parse(stored) as Partial<StoredOffer>
    if (typeof parsed.lastShown !== "number" || typeof parsed.action !== "string") return null

    return {
      lastShown: parsed.lastShown,
      action: parsed.action === "closed" || parsed.action === "clicked" ? parsed.action : "shown",
    }
  } catch {
    return null
  }
}

function canShowOffer() {
  const storedOffer = readStoredOffer()
  if (!storedOffer) return true

  return Date.now() - storedOffer.lastShown > BLOCK_DURATION_MS
}

function saveOfferAction(action: OfferAction) {
  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      lastShown: Date.now(),
      action,
    } satisfies StoredOffer),
  )
}

export function ExitDiscountPopup() {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const shownThisSessionRef = useRef(false)
  const prefersReducedMotion = useReducedMotion()
  const [isConsentResolved, setIsConsentResolved] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const refreshConsentState = () => {
      setIsConsentResolved(readCookieConsent() !== null)
    }

    const timeoutId = window.setTimeout(refreshConsentState, 0)
    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, refreshConsentState)

    return () => {
      window.clearTimeout(timeoutId)
      window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, refreshConsentState)
    }
  }, [])

  useEffect(() => {
    if (!isConsentResolved || !canShowOffer()) return

    let desktopIsArmed = false
    let mobileTimeoutId: number | undefined
    let desktopTimeoutId: number | undefined
    const mediaQuery = window.matchMedia("(min-width: 768px)")

    const openOffer = () => {
      if (shownThisSessionRef.current || !canShowOffer()) return

      shownThisSessionRef.current = true
      previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
      saveOfferAction("shown")
      setIsOpen(true)
    }

    const handleExitIntent = (event: MouseEvent) => {
      if (!desktopIsArmed || !mediaQuery.matches) return

      const isLeavingTop = event.clientY <= 10
      const hasRelatedTarget = event.relatedTarget !== null
      if (isLeavingTop && !hasRelatedTarget) openOffer()
    }

    const handleScroll = () => {
      if (mediaQuery.matches) return

      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable <= 0) return

      const progress = window.scrollY / scrollable
      if (progress >= MOBILE_SCROLL_THRESHOLD) openOffer()
    }

    if (mediaQuery.matches) {
      desktopTimeoutId = window.setTimeout(() => {
        desktopIsArmed = true
      }, DESKTOP_ARM_DELAY_MS)
      document.addEventListener("mouseout", handleExitIntent)
    } else {
      mobileTimeoutId = window.setTimeout(openOffer, MOBILE_DELAY_MS)
      window.addEventListener("scroll", handleScroll, { passive: true })
    }

    return () => {
      if (desktopTimeoutId) window.clearTimeout(desktopTimeoutId)
      if (mobileTimeoutId) window.clearTimeout(mobileTimeoutId)
      document.removeEventListener("mouseout", handleExitIntent)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isConsentResolved])

  useEffect(() => {
    if (!isOpen) return

    closeButtonRef.current?.focus()

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeOffer("closed")
    }

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return

      const dialog = closeButtonRef.current?.closest('[role="dialog"]')
      if (!dialog) return

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ),
      )

      if (focusable.length === 0) return

      const firstElement = focusable[0]
      const lastElement = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener("keydown", closeOnEscape)
    document.addEventListener("keydown", trapFocus)

    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      document.removeEventListener("keydown", trapFocus)
    }
  }, [isOpen])

  function closeOffer(action: OfferAction) {
    saveOfferAction(action)
    setIsOpen(false)
    window.setTimeout(() => previousFocusRef.current?.focus(), 0)
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          aria-label="Oferta de 5% OFF na primeira reserva"
          aria-modal="true"
          className="fixed inset-0 z-[120] flex items-center justify-center bg-brand-primary-dark/70 px-4 py-5 backdrop-blur-sm"
          role="dialog"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeOffer("closed")
          }}
        >
          <motion.div
            className="relative w-[92vw] max-w-[1040px] overflow-hidden rounded-[1.75rem] shadow-2xl shadow-brand-primary-dark/35 outline-none md:w-[90vw]"
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <picture>
              <source media="(min-width: 768px)" srcSet="/images/popup/popup-desktop.webp" />
              <img
                src="/images/popup/popup-mobile.webp"
                alt="Antes de sair, garanta 5% OFF na sua primeira reserva falando com a equipe da Pousada Aquino Mar pelo WhatsApp."
                className="block h-auto max-h-[90vh] w-full object-contain"
                draggable={false}
              />
            </picture>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp para aproveitar 5% OFF na primeira reserva"
              className="absolute left-[18.3%] top-[58%] h-[6.5%] w-[63.6%] rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-cta-light md:left-[8.4%] md:top-[73.8%] md:h-[12.2%] md:w-[44.4%]"
              onClick={() => closeOffer("clicked")}
            >
              <span className="sr-only">Quero meu desconto pelo WhatsApp</span>
            </a>

            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Fechar oferta"
              className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-surface-alt text-brand-primary shadow-lg shadow-brand-primary/20 transition hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-cta-light md:right-[2.1%] md:top-[2.3%] md:h-12 md:w-12"
              onClick={() => closeOffer("closed")}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
