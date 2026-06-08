import type { ReactNode } from "react";
import { Button, type ButtonSize, type ButtonVariant } from "@/components/ui/Button";
import { WHATSAPP_PHONE } from "@/lib/site-config";
import { buildWhatsappUrl, productInquiryMessage } from "@/lib/whatsapp";

type WhatsAppCTAProps = {
  product?: string;
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

// Compõe Button (como <a>) + link wa.me + mensagem de interesse.
export function WhatsAppCTA({
  product,
  children = "Falar no WhatsApp",
  variant = "primary",
  size = "md",
  className,
}: WhatsAppCTAProps) {
  const href = buildWhatsappUrl({
    phone: WHATSAPP_PHONE,
    message: productInquiryMessage(product),
  });

  return (
    <Button
      href={href}
      variant={variant}
      size={size}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Button>
  );
}
