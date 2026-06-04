"use client";

import { siteConfig, whatsAppUrl } from "@/lib/site";

export function Nav() {
  return (
    <nav id="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <img src={siteConfig.brand.logoUrl} alt={siteConfig.brand.name} />
        </a>
        <ul className="nav-links">
          {siteConfig.nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a
          href={whatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav-cta"
        >
          {siteConfig.nav.ctaLabel}
        </a>
        <button type="button" className="nav-toggle" aria-label="Menu">
          <i className="ti ti-menu-2" />
        </button>
      </div>
      <div className="nav-mobile">
        {siteConfig.nav.links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
