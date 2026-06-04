/** Runtime env helpers — set values in `.env.local` (see `.env.example`). */

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export function getWhatsAppNumber(): string {
  return (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ||
    "94777154524"
  );
}

/** Contact form POST target — same-origin path by default (avoids CORS to simfahglobal.com). */
export function getContactApiUrl(): string {
  const path = process.env.NEXT_PUBLIC_CONTACT_API_URL || "/api/contact";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return path.startsWith("/") ? path : `/${path}`;
}
