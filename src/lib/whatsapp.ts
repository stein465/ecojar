import { WHATSAPP_DEFAULT_MESSAGE } from "@/lib/site-config";

type BuildWhatsappUrlArgs = {
  phone: string;
  message: string;
};

// Monta o link wa.me com a mensagem já codificada para a URL.
export function buildWhatsappUrl({ phone, message }: BuildWhatsappUrlArgs): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Mensagem de interesse: específica quando há produto, padrão caso contrário.
export function productInquiryMessage(productName?: string): string {
  if (productName) {
    return `Oi! Tenho interesse no ${productName}.`;
  }
  return WHATSAPP_DEFAULT_MESSAGE;
}
