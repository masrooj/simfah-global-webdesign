import { siteConfig, whatsAppUrl } from "@/lib/site";

export function Pricing() {
  const { pricing } = siteConfig;

  return (
    <section id="pricing">
      <div className="container">
        <p className="section-label fade-in">{pricing.label}</p>
        <h2 className="section-heading fade-in">{pricing.heading}</h2>
        <p
          className="section-sub fade-in"
          style={{ marginInline: "auto", textAlign: "center", maxWidth: 640 }}
        >
          {pricing.intro}{" "}
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>
            {pricing.introHighlight}
          </strong>
          .
        </p>
        <div className="pricing-cards">
          {pricing.plans.map((plan) => (
            <div
              key={plan.id}
              className={[
                "pricing-card fade-in",
                plan.featured ? "featured" : "",
                plan.enterprise ? "enterprise" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {plan.popularBadge && <div className="popular-badge">{plan.popularBadge}</div>}
              <p className="plan-name">{plan.name}</p>
              <p className="plan-price">
                {plan.setupPrice}
                {plan.setupPrice !== "Custom" && <span> setup</span>}
              </p>
              <p className="plan-monthly">
                {plan.monthlyPrice}{" "}
                {plan.setupPrice !== "Custom" && (
                  <span style={{ fontSize: 12, color: "var(--subtle)" }}>
                    {pricing.carePlanNote}
                  </span>
                )}
              </p>
              <p className="plan-desc">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <i className="ti ti-check" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={whatsAppUrl(plan.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${plan.featured ? "btn-primary" : "btn-outline"}`}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {plan.ctaLabel}
              </a>
              {plan.secondaryLink && (
                <a
                  href={plan.secondaryLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    textAlign: "center",
                    marginTop: 12,
                    fontSize: 13,
                    color: "var(--gold)",
                  }}
                >
                  {plan.secondaryLink.label}
                </a>
              )}
            </div>
          ))}
        </div>
        <p className="pricing-note fade-in">
          {pricing.noteText}{" "}
          <a href={whatsAppUrl()} target="_blank" rel="noopener noreferrer">
            {pricing.noteLinkLabel}
          </a>
        </p>
      </div>
    </section>
  );
}
