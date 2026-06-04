"use client";

import { siteConfig, whatsAppUrl } from "@/lib/site";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="hero">
      <div className="hero-grid">
        <div className="hero-content" id="heroContent">
          <div className="hero-badge">
            <span className="badge-dot" />
            {hero.badge}
          </div>
          <h1 className="hero-title">
            {hero.title} <span className="text-gradient">{hero.titleHighlight}</span>{" "}
            {hero.titleSuffix}
          </h1>
          <p className="hero-sub">{hero.subtitle}</p>
          <div className="btn-row hero-cta">
            <a
              href={whatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <i className="ti ti-brand-whatsapp" /> {hero.primaryCta}
            </a>
            <a href={hero.secondaryHref} className="btn btn-outline btn-lg">
              {hero.secondaryCta}
            </a>
          </div>
          <p className="trust-line">{hero.trustLine}</p>
        </div>
        <div className="hero-media" id="heroMedia">
          <div className="hero-video-wrap" id="heroVideoWrap">
            <img
              className="hero-fallback-img"
              id="heroFallbackImg"
              src={hero.fallbackImage}
              alt={hero.fallbackAlt}
              width={900}
              height={620}
            />
            <video autoPlay muted loop playsInline id="heroVideo" poster={hero.fallbackImage}>
              <source src={hero.videoUrl} type="video/mp4" />
            </video>
            <div className="hero-video-overlay" />
            <div className="hero-video-badge">
              <span className="live-dot" />
              {hero.videoBadge}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-filmstrip" id="heroFilmstrip" aria-hidden="true">
        <FilmstripRow id="filmLtr" direction="ltr" images={siteConfig.filmstrip.ltr} />
        <FilmstripRow id="filmRtl" direction="rtl" images={siteConfig.filmstrip.rtl} />
      </div>
    </section>
  );
}

function FilmstripRow({
  id,
  direction,
  images,
}: {
  id: string;
  direction: "ltr" | "rtl";
  images: { src: string; alt: string }[];
}) {
  return (
    <div className={`filmstrip-row filmstrip-${direction}`} id={id}>
      <div className="filmstrip-set">
        {images.map((img) => (
          <img key={img.src} src={img.src} alt="" />
        ))}
      </div>
      <div className="filmstrip-set" aria-hidden="true">
        {images.map((img) => (
          <img key={`clone-${img.src}`} src={img.src} alt="" />
        ))}
      </div>
    </div>
  );
}
