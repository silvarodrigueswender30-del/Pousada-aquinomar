import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { FloatingWhatsappButton } from "@/components/ui/floating-whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <FloatingWhatsappButton />
      </body>
    </html>
  );
}
