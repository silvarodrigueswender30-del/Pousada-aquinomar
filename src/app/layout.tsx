import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";
import { ExitDiscountPopup } from "@/components/exit-discount-popup";
import { FloatingWhatsappButton } from "@/components/ui/floating-whatsapp-button";
import { Header } from "@/components/sections/header";

const inter = localFont({
  src: [
    {
      path: "./fonts/inter/Inter-Regular.woff2",
      weight: "300 500",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const siteTitle = "Pousada em Paraty com Café da Manhã | Aquino Mar — Caborê, RJ"

const siteDescription =
  "Pousada familiar em Caborê, a poucos minutos do Centro Histórico de Paraty. Café da manhã incluso, piscina, Wi-Fi, ar-condicionado e estacionamento gratuito. Reserve pelo WhatsApp!"

const siteUrl = "https://pousadaaquinomarparaty.com.br"
const socialImageUrl = `${siteUrl}/og/aquinomar-share.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "pousada em Paraty",
    "hospedagem em Paraty",
    "onde ficar em Paraty",
    "pousada familiar Paraty",
    "pousada com café da manhã Paraty",
    "pousada Caborê Paraty",
    "pousada romântica Paraty",
    "hotel Paraty RJ",
    "Pousada Aquino Mar",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Pousada Aquino Mar",
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Logo da Pousada Aquino Mar",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImageUrl],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://jszueizwowynhekpsfii.supabase.co" />
        <link rel="dns-prefetch" href="https://jszueizwowynhekpsfii.supabase.co" />
        <link rel="describedby" href={`${siteUrl}/llms.txt`} type="text/markdown" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Header />
        {children}
        <FloatingWhatsappButton />
        <CookieConsent />
        <ExitDiscountPopup />
      </body>
    </html>
  );
}



