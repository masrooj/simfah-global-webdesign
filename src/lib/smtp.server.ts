import "server-only";
import fs from "fs";
import path from "path";

const isVercel = Boolean(process.env.VERCEL);

/** Parse .env.local when Next.js drops SMTP_PASS (passwords starting with $). */
function readEnvLocalFile(): Record<string, string> {
  if (isVercel) return {};

  const out: Record<string, string> = {};

  for (const file of [".env.local", ".env"]) {
    const envPath = path.join(/* turbopackIgnore: true */ process.cwd(), file);
    if (!fs.existsSync(envPath)) continue;

    const content = fs.readFileSync(envPath, "utf8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;

      const key = trimmed.slice(0, eq).trim();
      let val = trimmed.slice(eq + 1).trim();

      if (
        (val.startsWith("'") && val.endsWith("'")) ||
        (val.startsWith('"') && val.endsWith('"'))
      ) {
        val = val.slice(1, -1);
      }
      val = val.replace(/\\\$/g, "$");

      if (!(key in out)) out[key] = val;
    }
  }

  return out;
}

let cachedFileEnv: Record<string, string> | null = null;

function fileEnv(name: string): string | undefined {
  if (isVercel) return undefined;
  if (!cachedFileEnv) cachedFileEnv = readEnvLocalFile();
  return cachedFileEnv[name];
}

function env(name: string): string | undefined {
  let value = process.env[name]?.trim();
  if (!value) value = fileEnv(name);
  if (!value) return undefined;

  if (
    (value.startsWith("'") && value.endsWith("'")) ||
    (value.startsWith('"') && value.endsWith('"'))
  ) {
    value = value.slice(1, -1);
  }
  return value.replace(/\\\$/g, "$");
}

export function getSmtpConfig() {
  const host = env("SMTP_HOST");
  const port = env("SMTP_PORT");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  const from = env("SMTP_FROM");

  if (!host || !port || !user || !pass || !from) {
    return null;
  }

  let secure = env("SMTP_SECURE") === "true";
  const encryption = env("SMTP_ENCRYPTION");
  if (encryption) {
    const enc = encryption.toLowerCase();
    if (enc === "ssl" || enc === "tls") secure = true;
    else if (enc === "none" || enc === "false") secure = false;
  }

  return {
    host,
    port: Number(port),
    secure,
    auth: { user, pass },
    from,
  };
}

export function isSmtpConfigured(): boolean {
  return getSmtpConfig() !== null;
}

const SMTP_REQUIRED_KEYS = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "SMTP_FROM",
] as const;

/** Names of SMTP env vars that are missing or empty (for /api/contact health checks). */
export function getMissingSmtpEnvKeys(): string[] {
  return SMTP_REQUIRED_KEYS.filter((key) => !env(key));
}

export function getSmtpSetupHint(): string {
  if (isVercel) {
    return (
      "Email is not configured on Vercel. In your project go to Settings → Environment Variables " +
      "and add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM (plus SMTP_SECURE=true and " +
      "SMTP_ENCRYPTION=SSL). Apply to Production, then Redeploy. " +
      "Use the plain SMTP password (no backslash before $)."
    );
  }

  return (
    "Email is not configured. Add SMTP_* variables to .env.local (see .env.example), " +
    "then restart npm run dev. If SMTP_PASS starts with $, use SMTP_PASS=\\$YourPassword in .env.local."
  );
}
