import { siteConfig, whatsAppUrl } from "@/lib/site";

export function Industries() {
  const { industries } = siteConfig;

  return (
    <section id="industries">
      <div className="container">
        <div className="section-header">
          <p className="section-label fade-in">{industries.label}</p>
          <h2 className="section-heading fade-in">{industries.heading}</h2>
          <p className="section-sub fade-in">{industries.subheading}</p>
        </div>

        <div className="industry-gallery">
          {industries.featured.map((industry) => (
            <article key={industry.id} className="industry-card" data-scroll-card>
              <div className="industry-img">
                <img src={industry.image} alt={industry.imageAlt} />
              </div>
              <div className="industry-info">
                <div className="ind-icon">
                  <i className={`ti ${industry.icon}`} />
                </div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
                <a
                  href={whatsAppUrl()}
                  className="industry-more"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {industries.mockupCta} <i className="ti ti-arrow-right" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="industry-scroll-wrap fade-in">
          <p>{industries.scrollHint}</p>
          <div className="industry-scroll" id="industryScroll">
            {industries.scroll.map((item) => (
              <div key={item.label} className="ind-scroll-card">
                <img src={item.image} alt={item.imageAlt} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
