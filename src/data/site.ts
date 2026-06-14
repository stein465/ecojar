// Dados de contato / CTA de WhatsApp.
// PLACEHOLDER: Igor — trocar pelo número real no formato internacional, só dígitos
// (DDI + DDD + número, ex.: "5514999998888").
export const WHATSAPP_NUMBER = "5500000000000";

// Monta o link wa.me com a mensagem já pré-preenchida (URL-encoded).
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
