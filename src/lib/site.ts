import { siteConfig } from "@config/site";
import { getContactApiUrl, getWhatsAppNumber } from "@/lib/env";

export { siteConfig };

export function whatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${getWhatsAppNumber()}?text=${text}`;
}

export { getContactApiUrl };
