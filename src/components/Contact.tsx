import { siteConfig } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { contact, contactSection, social } = siteConfig;

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrap">
          <div className="contact-info fade-in">
            <p className="section-label">{contactSection.label}</p>
            <h2 className="section-heading">
              {contactSection.heading}
              <br />
              <span className="text-gradient">{contactSection.headingHighlight}</span>
            </h2>
            <p className="section-sub">{contactSection.subheading}</p>

            <div className="contact-details">
              <div className="contact-item">
                <i className="ti ti-phone" />
                <div>
                  <strong>Phone</strong>
                  {contact.phones.map((phone, i) => (
                    <span key={phone.tel}>
                      {i > 0 && " · "}
                      <a href={`tel:${phone.tel}`}>{phone.number}</a>
                    </span>
                  ))}
                </div>
              </div>
              <div className="contact-item">
                <i className="ti ti-mail" />
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="ti ti-map-pin" />
                <div>
                  <strong>Headquarters</strong>
                  {contact.location}
                </div>
              </div>
            </div>

            <div className="social-block">
              <h3>Follow us</h3>
              <div className="social-icons">
                {social.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.platform} — ${link.handle}`}
                  >
                    <i className={`ti ${link.icon}`} />
                    <span className="user">{link.handle}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="trust-badges" style={{ marginTop: 28, justifyContent: "flex-start" }}>
              {contactSection.trustBadges.map((badge) => (
                <span key={badge.label}>
                  <i className={`ti ${badge.icon}`} /> {badge.label}
                </span>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
