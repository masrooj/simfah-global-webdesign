"use client";

import { FormEvent, useState } from "react";
import { getContactApiUrl, siteConfig, whatsAppUrl } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<{ text: string; ok: boolean } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { contact, contactSection, form, pricing } = siteConfig;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const company = String(data.get("business") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const service = String(data.get("plan") ?? "");
    const brief = String(data.get("message") ?? "").trim();

    if (!firstName || !email || !brief) {
      setStatus({ text: "Please fill in first name, email, and project brief.", ok: false });
      return;
    }

    const payload = {
      firstName,
      lastName,
      company,
      email,
      service,
      brief,
      subject: form.subject,
    };

    setSubmitting(true);
    setStatus(null);

    const apiUrl = getContactApiUrl();
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 120000);

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
        cache: "no-store",
      });

      window.clearTimeout(timeoutId);

      if (res.ok) {
        setStatus({ text: form.successMessage, ok: true });
        formEl.reset();
        setSubmitting(false);
        return;
      }

      let errText = form.errorMessage;
      try {
        const errBody = await res.json();
        if (errBody?.error) {
          errText = errBody.error;
          if (res.status === 503) {
            errText +=
              " Restart `npm run dev` after saving `.env.local` (SMTP_PASS=\\$… if the password starts with $).";
          } else if (errBody.details) {
            errText += ` (${errBody.details})`;
          }
        }
      } catch {
        /* ignore */
      }
      setStatus({ text: errText, ok: false });
      setSubmitting(false);
      return;
    } catch (err) {
      window.clearTimeout(timeoutId);
      const message =
        err instanceof Error && err.name === "AbortError"
          ? "Sending took too long. Please try again or WhatsApp us."
          : form.networkErrorMessage;
      setStatus({ text: message, ok: false });
      setSubmitting(false);
    }
  }

  return (
    <div className="contact-form-card fade-in">
      <h3>{contactSection.formTitle}</h3>
      <p>{contactSection.formSubtitle}</p>
      {status && (
        <div className={`form-msg show ${status.ok ? "ok" : "err"}`} role="status">
          {status.text}
        </div>
      )}
      <form id="contactForm" noValidate onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              required
              autoComplete="given-name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Smith"
              autoComplete="family-name"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="business">Business name</label>
          <input
            type="text"
            id="business"
            name="business"
            placeholder="Your business"
            autoComplete="organization"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@business.com"
            required
            autoComplete="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="plan">Plan interest</label>
          <select id="plan" name="plan" defaultValue={pricing.formPlanOptions[0]}>
            {pricing.formPlanOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Project brief *</label>
          <textarea
            id="message"
            name="message"
            placeholder="What does your business do? What should the website achieve?"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" id="formSubmitBtn" disabled={submitting}>
          <i className={`ti ${submitting ? "ti-loader" : "ti-send"}`} />{" "}
          {submitting ? "Sending…" : "Send message"}
        </button>
      </form>
      <div className="contact-quick">
        <a
          href={whatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <i className="ti ti-brand-whatsapp" /> WhatsApp
        </a>
        <a
          href={contact.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <i className="ti ti-calendar" /> Book a call
        </a>
      </div>
    </div>
  );
}
