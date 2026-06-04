import { siteConfig, whatsAppUrl } from "@/lib/site";

export function Work() {
  const { work } = siteConfig;

  return (
    <section id="work">
      <div className="container">
        <p className="section-label fade-in">{work.label}</p>
        <h2 className="section-heading fade-in">{work.heading}</h2>
        <p className="section-sub fade-in">{work.subheading}</p>

        <div className="demo-grid">
          {work.projects.map((project) => (
            <a
              key={project.url}
              href={whatsAppUrl(project.whatsappMessage)}
              className={`demo-card fade-in${project.featured ? " featured" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="browser-bar">
                <span className="dot r" />
                <span className="dot y" />
                <span className="dot g" />
                <span className="browser-url">{project.url}</span>
              </div>
              <div className="demo-img-wrap">
                <img src={project.image} alt={project.imageAlt} />
                <div className="demo-overlay">
                  <span>
                    Request demo <i className="ti ti-arrow-right" />
                  </span>
                </div>
              </div>
              <div className="demo-meta">
                <div>
                  <p className="demo-name">
                    {project.name} · {project.location}
                  </p>
                  <p className="demo-tag">{project.tag}</p>
                </div>
                <span className="demo-link">
                  View live <i className="ti ti-arrow-right" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
