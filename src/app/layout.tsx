import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import "./globals.css";
import { FloatingWhatsappButton } from "@/components/ui/floating-whatsapp-button";

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

const siteDescription =
  "Pousada familiar em Cabore, a poucos minutos do Centro Histórico de Paraty. Piscina, café da manhã incluso e acolhimento de quem trata cada hóspede como família."

export const metadata: Metadata = {
  metadataBase: new URL("https://pousada-aquino-mar.vercel.app"),
  title: "Pousada Aquino Mar | Cabore, Paraty - RJ",
  description: siteDescription,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pousada-aquino-mar.vercel.app",
  },
  openGraph: {
    title: "Pousada Aquino Mar | Cabore, Paraty - RJ",
    description: siteDescription,
    url: "https://pousada-aquino-mar.vercel.app",
    siteName: "Pousada Aquino Mar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pousada Aquino Mar em Cabore, Paraty - RJ",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pousada Aquino Mar | Cabore, Paraty - RJ",
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <FloatingWhatsappButton />
      </body>
    </html>
  );
}
