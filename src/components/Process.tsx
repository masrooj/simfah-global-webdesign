import { siteConfig } from "@/lib/site";

export function Process() {
  const { process } = siteConfig;

  return (
    <section id="process">
      <div className="container">
        <p className="section-label fade-in">{process.label}</p>
        <h2 className="section-heading fade-in">{process.heading}</h2>
        <p className="section-sub fade-in">{process.subheading}</p>
        <div className="process-grid">
          {process.steps.map((step) => (
            <div key={step.number} className="process-step fade-in">
              <div className="process-img">
                <img src={step.image} alt={step.imageAlt} />
              </div>
              <div className="process-body">
                <p className="process-num">{step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
