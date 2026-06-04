import { siteConfig } from "@/lib/site";

export function Marquee() {
  const items = [...siteConfig.marquee, ...siteConfig.marquee];

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={`${item.label}-${i}`} className="marquee-item">
            <i className={`ti ${item.icon}`} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
