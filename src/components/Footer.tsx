import { siteConfig, whatsAppUrl } from "@/lib/site";

export function Footer() {
  const { brand, contact, social, footer } = siteConfig;

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-col footer-company">
          <img src={brand.logoUrl} alt={brand.name} style={{ height: 44 }} />
          <p className="footer-tagline">{brand.tagline}</p>
          <p className="footer-about">{brand.about}</p>
          <p className="footer-social-label">Follow us</p>
          <div className="footer-socials">
            {social.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
              >
                <i className={`ti ${link.icon}`} /> {link.handle}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-list">
            {footer.services.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...("external" in item && item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Links</h4>
          <ul className="footer-list">
            {footer.links.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...("external" in item && item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-contact">
            <p>
              <i className="ti ti-mail" />
              <span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </span>
            </p>
            <p>
              <i className="ti ti-phone" />
              <span>
                {contact.phones.map((phone, i) => (
                  <span key={phone.tel}>
                    {i > 0 && <br />}
                    <a href={`tel:${phone.tel}`}>{phone.number}</a>
                  </span>
                ))}
              </span>
            </p>
            <p>
              <i className="ti ti-map-pin" />
              <span>
                {contact.locationLines.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <p>
              <i className="ti ti-brand-whatsapp" />
              <span>
                <a href={whatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </span>
            </p>
            <p>
              <i className="ti ti-calendar" />
              <span>
                <a href={contact.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Book a strategy call
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {brand.copyrightYear} {brand.name}. All rights reserved.
        </p>
        <a
          href={brand.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--subtle)" }}
        >
          simfahglobal.com
        </a>
      </div>
    </footer>
  );
}
