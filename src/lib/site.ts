import { siteConfig } from "@config/site";
import { getContactApiUrl, getWhatsAppNumber } from "@/lib/env";

export { siteConfig };

export function whatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${getWhatsAppNumber()}?text=${text}`;
}

/** Full https URL for portfolio demo links (config may store host or full URL). */
export function projectLiveUrl(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
}

export function projectDisplayUrl(url: string): string {
  return url.replace(/^https?:\/\//, "");
}

export { getContactApiUrl };
