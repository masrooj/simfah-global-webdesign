import { siteConfig } from "@/lib/site";

export function Features() {
  const { features } = siteConfig;

  return (
    <section id="features">
      <div className="container">
        <p className="section-label fade-in">{features.label}</p>
        <h2 className="section-heading fade-in">{features.heading}</h2>
        <div className="features-grid">
          {features.items.map((item) => (
            <div key={item.title} className="feature-card fade-in">
              <div className="feature-icon">
                <i className={`ti ${item.icon}`} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
