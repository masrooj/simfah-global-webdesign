import { siteConfig, whatsAppUrl } from "@/lib/site";

export function WhatsAppFloat() {
  if (!siteConfig.whatsapp.floatEnabled) return null;

  return (
    <a
      href={whatsAppUrl()}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="ti ti-brand-whatsapp" />
    </a>
  );
}
