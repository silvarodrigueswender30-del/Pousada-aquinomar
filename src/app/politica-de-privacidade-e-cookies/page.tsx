import type { ReactNode } from "react"
import { FooterSection } from "@/components/sections/footer-section"

export default function PrivacyAndCookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#E4F6FA_52%,#FFFFFF_100%)] pt-28">
      <section className="mx-auto w-full max-w-4xl px-5 pb-20 md:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-gold">Privacidade</p>
        <h1 className="mt-5 font-heading text-4xl font-light leading-tight text-brand-primary md:text-6xl">
          Política de Privacidade e Cookies
        </h1>
        <p className="mt-6 text-base leading-8 text-brand-text md:text-lg">
          Esta política explica, de forma simples, como a Pousada Aquino Mar pode tratar dados pessoais e utilizar
          cookies em seu site.
        </p>

        <div className="mt-12 space-y-10 text-brand-text">
          <PolicySection title="Dados que você fornece">
            Ao entrar em contato por WhatsApp, telefone, e-mail ou formulário externo, você pode compartilhar dados como
            nome, telefone, datas de estadia, quantidade de hóspedes e informações necessárias para atendimento da sua
            solicitação.
          </PolicySection>

          <PolicySection title="Como usamos esses dados">
            Usamos as informações para responder pedidos de reserva, tirar dúvidas, organizar atendimento e melhorar a
            experiência de hospedagem. Não vendemos dados pessoais.
          </PolicySection>

          <PolicySection title="Cookies necessários">
            Cookies necessários e armazenamentos locais essenciais podem ser usados para manter o funcionamento do site,
            preservar preferências e garantir recursos básicos de navegação. Eles permanecem sempre ativos.
          </PolicySection>

          <PolicySection title="Analytics e marketing">
            No momento, o site não carrega Google Analytics, Google Tag Manager, Meta Pixel, Hotjar ou ferramentas
            semelhantes de rastreamento. A estrutura de consentimento está preparada para bloquear esses recursos antes
            da autorização, caso sejam adicionados futuramente.
          </PolicySection>

          <PolicySection title="Serviços de terceiros">
            O site pode incorporar recursos externos, como mapas, vídeos hospedados e links para WhatsApp. Esses
            serviços podem aplicar suas próprias políticas de privacidade quando acessados ou carregados.
          </PolicySection>

          <PolicySection title="Gerenciar preferências">
            Você pode alterar suas preferências pelo link &quot;Preferências de cookies&quot; no rodapé do site. A
            escolha é salva localmente no navegador e pode ser redefinida ao limpar os dados do site.
          </PolicySection>

          <PolicySection title="Contato">
            Para dúvidas sobre privacidade e cookies, fale com a Pousada Aquino Mar pelos canais de contato informados
            no site.
          </PolicySection>
        </div>
      </section>
      <FooterSection />
    </main>
  )
}

function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-brand-gold/30 pt-6">
      <h2 className="font-heading text-2xl font-normal text-brand-primary">{title}</h2>
      <p className="mt-3 text-base leading-7 text-brand-text/78">{children}</p>
    </section>
  )
}
