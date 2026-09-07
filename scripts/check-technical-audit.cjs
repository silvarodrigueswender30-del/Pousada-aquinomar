const assert = require("node:assert/strict")
const { chromium } = require("playwright")

const baseUrl = process.env.AUDIT_BASE_URL || "http://localhost:3001"

const homeFaqChecks = [
  "O café da manhã está incluído na diária?",
  "Temos estacionamento privativo gratuito para hóspedes.",
  "A pousada é indicada para famílias?",
]

const groupFaqChecks = [
  "Vocês recebem grupos e caravanas?",
  "Como alinhar necessidades específicas da excursão?",
  "Use o WhatsApp da Pousada Aquino Mar para conversar com a equipe",
]

async function checkPage(page, route) {
  await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" })
  const html = await page.content()
  const faqChecks = route === "/" ? homeFaqChecks : groupFaqChecks

  for (const text of faqChecks) {
    assert.ok(html.includes(text), `${route} missing initial FAQ HTML: ${text}`)
  }

  const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents()
  assert.ok(jsonLd.some((schema) => schema.includes("FAQPage")), `${route} missing FAQPage schema`)

  if (route === "/") {
    const lodgingSchema = jsonLd.find((schema) => schema.includes("LodgingBusiness"))
    assert.ok(lodgingSchema, "Home missing LodgingBusiness schema")
    assert.ok(lodgingSchema.includes("aggregateRating"), "Home LodgingBusiness missing aggregateRating")
    assert.ok(lodgingSchema.includes("411"), "Home LodgingBusiness missing review count")
    assert.ok(html.includes('href="/grupos-e-caravanas"'), "Home missing contextual groups link")
  }

  if (route === "/grupos-e-caravanas") {
    assert.ok(
      jsonLd.some((schema) => schema.includes("BreadcrumbList") && schema.includes("Grupos & Caravanas")),
      "Groups page missing BreadcrumbList schema",
    )
  }
}

async function checkViewport(browser, viewport) {
  for (const route of ["/", "/grupos-e-caravanas"]) {
    const page = await browser.newPage({ viewport })
    await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" })
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
      false,
      `${route} has horizontal overflow at ${viewport.width}px`,
    )
    await page.close()
  }
}

async function checkDuplicatedAccessibleContent(browser) {
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } })
  await page.goto(`${baseUrl}/grupos-e-caravanas`, { waitUntil: "networkidle" })

  const routeDuplication = await page.evaluate(() => {
    const headingText = "Paraty oferece roteiro para todos os tipos de grupo."
    const captionText = "Roteiros históricos pelo Centro de Paraty para caravanas."
    const headings = [...document.querySelectorAll("h2")].filter((node) =>
      node.textContent.includes(headingText),
    )
    const captions = [...document.querySelectorAll("*")].filter((node) =>
      [...node.childNodes].some(
        (child) => child.nodeType === Node.TEXT_NODE && child.textContent.includes(captionText),
      ),
    )

    return {
      headingCount: headings.length,
      captionCopies: captions.map((node) => ({
        hidden: Boolean(node.closest('[aria-hidden="true"]')),
      })),
    }
  })
  assert.equal(routeDuplication.headingCount, 1, "Groups route section heading is duplicated")
  assert.ok(routeDuplication.captionCopies.length >= 1, "Groups route captions were not found")
  assert.ok(
    routeDuplication.captionCopies.slice(1).every((copy) => copy.hidden),
    "Duplicated groups route captions are not aria-hidden",
  )

  const duplicatedTestimonialCopies = await page.locator('[aria-hidden="true"] >> text=Roseli Ferreira').count()
  const totalTestimonialCopies = await page.locator("text=Roseli Ferreira").count()
  assert.ok(totalTestimonialCopies >= 2, "Expected marquee testimonial duplicate copies")
  assert.ok(duplicatedTestimonialCopies >= 1, "Duplicated testimonial copy is not aria-hidden")

  await page.close()
}

(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true })
  try {
    const page = await browser.newPage({ viewport: { width: 1366, height: 900 } })
    await checkPage(page, "/")
    await checkPage(page, "/grupos-e-caravanas")
    await page.close()

    await checkViewport(browser, { width: 1366, height: 900 })
    await checkViewport(browser, { width: 390, height: 844 })
    await checkDuplicatedAccessibleContent(browser)

    console.log("PASS technical audit")
  } finally {
    await browser.close()
  }
})().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
