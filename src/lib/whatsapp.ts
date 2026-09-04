export const WHATSAPP_NUMBER = "5524998280363"

export const whatsappMessages = {
  home:
    "Olá! Vim pelo site oficial da Pousada Aquino Mar e gostaria de consultar disponibilidade e valores para hospedagem em Paraty.",
  rooms:
    "Olá! Vim pelo site oficial da Pousada Aquino Mar e gostaria de consultar disponibilidade e valores para uma acomodação.",
  groups:
    "Olá! Vim pelo site oficial da Pousada Aquino Mar e gostaria de solicitar uma cotação para grupo, excursão ou caravana em Paraty.",
  popup:
    "Olá! Vim pelo site oficial da Pousada Aquino Mar e vi a oferta de 5% OFF na primeira reserva. Gostaria de aproveitar o desconto.",
} as const

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
