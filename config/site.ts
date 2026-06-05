/**
 * Site content configuration — edit this file to update copy, pricing,
 * contact details, social links, industries, and more without touching components.
 */

export type NavLink = { label: string; href: string };

export type SocialLink = {
  platform: "instagram" | "facebook" | "linkedin" | "twitter" | "youtube" | "tiktok";
  url: string;
  handle: string;
  icon: string;
};

export type Phone = { label?: string; number: string; tel: string };

export type PricingPlan = {
  id: string;
  name: string;
  setupPrice: string;
  monthlyPrice: string;
  monthlyNote?: string;
  description: string;
  features: string[];
  featured?: boolean;
  enterprise?: boolean;
  popularBadge?: string;
  ctaLabel: string;
  whatsappMessage: string;
  secondaryLink?: { label: string; href: string };
};

export type WorkProject = {
  name: string;
  location: string;
  tag: string;
  url: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  featured?: boolean;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export type IndustryFeatured = {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
};

export type IndustryScroll = {
  label: string;
  image: string;
  imageAlt: string;
};

export type FilmstripImage = { src: string; alt: string };

export type MarqueeItem = { icon: string; label: string };

export const siteConfig = {
  brand: {
    name: "Simfah Global",
    tagline: "Ignite. Innovate. Dominate.",
    logoUrl: "/simfah-logo.png",
    /** Main enterprise product (AI, apps, ERP) — separate from this web-design landing */
    enterpriseUrl: "https://enterprise.simfahglobal.com",
    websiteUrl: "https://enterprise.simfahglobal.com",
    about:
      "Fast, beautiful websites for local businesses — restaurants, salons, clinics, gyms, and more. Built in days, not months.",
    copyrightYear: 2026,
  },

  meta: {
    title: "Simfah Global — Web Design for Local Businesses",
    description:
      "Fast, beautiful websites for restaurants, salons, clinics, gyms and any local business. Done in days. From $399.",
    keywords: [
      "web design",
      "local business website",
      "restaurant website",
      "salon website",
      "small business",
      "Simfah Global",
      "Sri Lanka",
      "website mockup",
    ],
  },

  contact: {
    phones: [
      { number: "+94 777 154 524", tel: "+94777154524" },
      { number: "+94 716 539 471", tel: "+94716539471" },
    ] as Phone[],
    email: "connect@simfahglobal.com",
    location: "Kandy, Sri Lanka · Global Reach",
    locationLines: ["Kandy, Sri Lanka", "Global Reach"],
    calendlyUrl: "https://calendly.com/simfahglobal",
  },

  whatsapp: {
    number: "94777154524",
    defaultMessage:
      "Hi Simfah Global, I am interested in your web design services!",
    floatEnabled: true,
  },

  social: [
    {
      platform: "instagram",
      url: "https://www.instagram.com/simfahglobal",
      handle: "simfahglobal",
      icon: "ti-brand-instagram",
    },
    {
      platform: "facebook",
      url: "https://www.facebook.com/simfahglobal",
      handle: "simfahglobal",
      icon: "ti-brand-facebook",
    },
  ] as SocialLink[],

  nav: {
    links: [
      { label: "Our Work", href: "#work" },
      { label: "How It Works", href: "#process" },
      { label: "Plans", href: "#pricing" },
      { label: "Industries", href: "#industries" },
      { label: "Get Started", href: "#contact" },
    ] as NavLink[],
    ctaLabel: "Get a free mockup",
  },

  hero: {
    badge: "Web design for local businesses",
    title: "Your business deserves a website that",
    titleHighlight: "actually works",
    titleSuffix: "for you.",
    subtitle:
      "We build fast, beautiful websites for restaurants, salons, clinics, gyms, hotels — any local business ready to look professional online. Done in days, not months.",
    primaryCta: "WhatsApp us",
    secondaryCta: "See our work ↓",
    secondaryHref: "#work",
    trustLine: "Response within hours · No contracts · We work across time zones",
    videoBadge: "Websites built in days",
    fallbackImage: "/images/hero.jpg",
    fallbackAlt: "Creative team planning a business website",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-typing-on-a-laptop-4915-large.mp4",
  },

  marquee: [
    { icon: "ti-tools-kitchen-2", label: "Restaurants" },
    { icon: "ti-scissors", label: "Salons & Barbers" },
    { icon: "ti-stethoscope", label: "Clinics & Dental" },
    { icon: "ti-barbell", label: "Gyms & Fitness" },
    { icon: "ti-building-store", label: "Retail & Fashion" },
    { icon: "ti-bed", label: "Hotels & Tourism" },
    { icon: "ti-briefcase", label: "Law & Real Estate" },
    { icon: "ti-coffee", label: "Cafés & Bakeries" },
  ] as MarqueeItem[],

  work: {
    label: "Our Work",
    heading: "See what we've built.",
    subheading: "Real designs for real businesses — crafted to convert visitors into customers.",
    projects: [
      {
        name: "Zara Kitchen",
        location: "Dubai",
        tag: "Restaurant",
        url: "zarakitchen.ae",
        image: "/images/work-zara.jpg",
        imageAlt: "Zara Kitchen restaurant website",
        whatsappMessage: "Hi Simfah Global, I want to see the Zara Kitchen demo",
        featured: true,
      },
      {
        name: "Lumière Salon",
        location: "Manchester",
        tag: "Hair & Beauty",
        url: "lumieresalon.co.uk",
        image: "/images/work-lumiere.jpg",
        imageAlt: "Lumière Salon website",
        whatsappMessage: "Hi Simfah Global, I want to see the Lumière Salon demo",
      },
      {
        name: "Vitale Clinic",
        location: "London",
        tag: "Wellness & Clinic",
        url: "vitaleclinic.com",
        image: "/images/work-vitale.jpg",
        imageAlt: "Vitale Clinic website",
        whatsappMessage: "Hi Simfah Global, I want to see the Vitale Clinic demo",
      },
    ] as WorkProject[],
  },

  process: {
    label: "How It Works",
    heading: "From hello to live site in days.",
    subheading: "A simple, stress-free process built for busy business owners.",
    steps: [
      {
        number: "01",
        title: "Tell us about your business",
        description:
          "Quick WhatsApp chat or call. We learn your brand, goals, and what your customers need.",
        image: "/images/step-consult.jpg",
        imageAlt: "Consultation call",
      },
      {
        number: "02",
        title: "Free mockup in 48 hours",
        description:
          "We send a custom design preview. You approve, tweak, or pivot — zero commitment until you're happy.",
        image: "/images/step-mockup.jpg",
        imageAlt: "Design mockup",
      },
      {
        number: "03",
        title: "Launch & grow",
        description:
          "Your site goes live fast. We handle launch, SEO basics, and ongoing care so you stay focused on business.",
        image: "/images/step-launch.jpg",
        imageAlt: "Website launch",
      },
    ] as ProcessStep[],
  },

  features: {
    label: "What You Get",
    heading: "Everything your business needs. Nothing you don't.",
    items: [
      { icon: "ti-device-mobile", title: "Mobile-first design", description: "Looks perfect on every phone, tablet, and screen size." },
      { icon: "ti-search", title: "Found on Google", description: "We set up your site so local customers can find you." },
      { icon: "ti-message", title: "Booking & contact", description: "A WhatsApp button or form so customers reach you directly." },
      { icon: "ti-refresh", title: "Always up to date", description: "We keep your site fast, secure, and current — ongoing." },
      { icon: "ti-world", title: "Your industry, done right", description: "Built for 25+ business types. We know what works." },
      { icon: "ti-headset", title: "We're one message away", description: "Real support. Real humans. No tickets, no bots." },
    ] as Feature[],
  },

  pricing: {
    label: "Pricing",
    heading: "Simple pricing. No surprises.",
    intro:
      "One-time setup to build your site, then a monthly care plan at",
    introHighlight: "10% of your setup fee",
    carePlanNote: "(10% of setup)",
    noteText: "Not sure which plan fits?",
    noteLinkLabel: "WhatsApp us →",
    plans: [
      {
        id: "starter",
        name: "Starter",
        setupPrice: "$399",
        monthlyPrice: "+ $40/mo care plan",
        description: "Perfect for new local businesses going online for the first time.",
        features: [
          "Up to 5 sections",
          "Essential layout — clean, focused & easy to browse",
          "Mobile-first layout",
          "Contact form & WhatsApp",
          "Google Business setup",
          "Social links & hours",
          "2 revision rounds",
          "Ongoing site care included",
        ],
        ctaLabel: "Get started",
        whatsappMessage: "Hi Simfah Global, I am interested in the $399 Starter website plan",
      },
      {
        id: "growth",
        name: "Growth",
        setupPrice: "$799",
        monthlyPrice: "+ $80/mo care plan",
        description: "For businesses ready to take bookings and look premium.",
        features: [
          "Everything in Starter",
          "Up to 10 sections",
          "Enhanced layout — polished visuals & stronger branding",
          "Booking / reservations",
          "Photo gallery & testimonials",
          "Blog or news section",
          "Priority support",
          "Ongoing site care with priority help",
        ],
        ctaLabel: "Get started",
        whatsappMessage: "Hi Simfah Global, I am interested in the $799 Growth website plan",
      },
      {
        id: "premium",
        name: "Premium",
        setupPrice: "$1,099",
        monthlyPrice: "+ $110/mo care plan",
        description: "Full-featured sites for busy brands that need to convert.",
        featured: true,
        popularBadge: "Most popular",
        features: [
          "Everything in Growth",
          "Unlimited sections (fair use)",
          "Signature experience — custom styling & smooth animations",
          "Multi-language ready",
          "Advanced SEO setup",
          "Unlimited revisions (month 1)",
          "Ongoing site care with VIP help",
        ],
        ctaLabel: "Get started",
        whatsappMessage: "Hi Simfah Global, I am interested in the $1099 Premium website plan",
      },
      {
        id: "enterprise",
        name: "Enterprise · Custom",
        setupPrice: "Custom",
        monthlyPrice: "Scoped to your project",
        description: "Full Simfah Global capabilities — same services as our main site.",
        enterprise: true,
        features: [
          "AI & machine learning solutions",
          "Web & mobile applications",
          "ERP, CRM & management systems",
          "Enterprise digital transformation",
          "Data intelligence & analytics",
          "Fintech, real estate & tourism platforms",
          "Cloud & on-premise deployment",
        ],
        ctaLabel: "Request a quote",
        whatsappMessage:
          "Hi Simfah Global, I need a custom enterprise quote for web, mobile, AI or management systems",
        secondaryLink: { label: "View all enterprise services →", href: "https://enterprise.simfahglobal.com/" },
      },
    ] as PricingPlan[],
    formPlanOptions: [
      "Starter — $399 setup + $40/mo",
      "Growth — $799 setup + $80/mo",
      "Premium — $1,099 setup + $110/mo",
      "Enterprise — Custom",
      "Not sure yet",
    ],
  },

  industries: {
    label: "Who we build for",
    heading: "Your type of business is probably here",
    subheading: "We adjust layout and content for how customers actually book or visit you.",
    mockupCta: "Ask for a free mockup",
    scrollHint: "More trades below",
    featured: [
      {
        id: "restaurant",
        title: "Restaurants & Cafés",
        description: "Menu, photos, hours, and a clear way to book a table or order.",
        icon: "ti-tools-kitchen-2",
        image: "/images/ind-restaurant.jpg",
        imageAlt: "Restaurant",
      },
      {
        id: "salon",
        title: "Salons & Barbers",
        description: "Booking flows, service menus, and portfolios that showcase your craft.",
        icon: "ti-scissors",
        image: "/images/ind-salon.jpg",
        imageAlt: "Salon",
      },
      {
        id: "clinic",
        title: "Clinics & Dental",
        description: "Trust-building design with clear services, hours, and easy appointment contact.",
        icon: "ti-stethoscope",
        image: "/images/ind-clinic.jpg",
        imageAlt: "Clinic",
      },
      {
        id: "gym",
        title: "Gyms & Fitness",
        description: "Timetables, membership info, and photos that fit how energetic your gym feels.",
        icon: "ti-barbell",
        image: "/images/ind-gym.jpg",
        imageAlt: "Gym",
      },
      {
        id: "hotel",
        title: "Hotels & Tourism",
        description: "Stunning imagery, room showcases, and booking paths for travelers worldwide.",
        icon: "ti-bed",
        image: "/images/ind-hotel.jpg",
        imageAlt: "Hotel",
      },
      {
        id: "retail",
        title: "Retail & Fashion",
        description: "Product highlights, lookbooks, and storefront vibes that drive foot traffic and sales.",
        icon: "ti-building-store",
        image: "/images/ind-retail.jpg",
        imageAlt: "Retail",
      },
    ] as IndustryFeatured[],
    scroll: [
      { label: "Café", image: "/images/scroll-cafe.jpg", imageAlt: "Café interior" },
      { label: "Barber", image: "/images/scroll-barber.jpg", imageAlt: "Barber shop" },
      { label: "Law Firm", image: "/images/scroll-law.jpg", imageAlt: "Law firm office" },
      { label: "Bakery", image: "/images/scroll-bakery.jpg", imageAlt: "Bakery pastries" },
      { label: "Auto & Detailing", image: "/images/scroll-auto.jpg", imageAlt: "Mechanic working in an auto repair workshop" },
      { label: "Car Wash", image: "/images/scroll-carwash.jpg", imageAlt: "Car being rinsed with a power sprayer at a wash bay" },
      { label: "Events", image: "/images/scroll-events.jpg", imageAlt: "Events venue" },
      { label: "Pet Grooming", image: "/images/scroll-pet.jpg", imageAlt: "Pet grooming" },
      { label: "Creative Agency", image: "/images/scroll-agency.jpg", imageAlt: "Creative agency team" },
      { label: "Wine Bar", image: "/images/scroll-wine.jpg", imageAlt: "Wine bar" },
      { label: "Juice Bar", image: "/images/scroll-juice.jpg", imageAlt: "Juice bar" },
      { label: "Real Estate", image: "/images/scroll-realestate.jpg", imageAlt: "Real estate property" },
      { label: "Food Truck", image: "/images/scroll-foodtruck.jpg", imageAlt: "Food truck" },
      { label: "Dental", image: "/images/scroll-dental.jpg", imageAlt: "Dental clinic" },
      { label: "Photography", image: "/images/scroll-photography.jpg", imageAlt: "Photography studio" },
      { label: "Tourism", image: "/images/scroll-tourism.jpg", imageAlt: "Tourism travel" },
      { label: "Dessert Shop", image: "/images/scroll-dessert.jpg", imageAlt: "Dessert shop" },
      { label: "Spa & Wellness", image: "/images/scroll-spa.jpg", imageAlt: "Spa wellness" },
      { label: "Fitness Studio", image: "/images/scroll-fitness.jpg", imageAlt: "Fitness studio workout" },
    ] as IndustryScroll[],
  },

  /** Hero filmstrip — local-business industries only; each image appears once per row (no cross-row repeats). */
  filmstrip: {
    ltr: [
      { src: "/images/ind-restaurant.jpg", alt: "Restaurant" },
      { src: "/images/scroll-cafe.jpg", alt: "Café" },
      { src: "/images/scroll-bakery.jpg", alt: "Bakery" },
      { src: "/images/ind-hotel.jpg", alt: "Hotel" },
      { src: "/images/ind-retail.jpg", alt: "Retail & fashion" },
      { src: "/images/strip-rtl-fine-dining.jpg", alt: "Fine dining" },
      { src: "/images/scroll-foodtruck.jpg", alt: "Food truck" },
      { src: "/images/scroll-juice.jpg", alt: "Juice bar" },
      { src: "/images/scroll-wine.jpg", alt: "Wine bar" },
      { src: "/images/scroll-events.jpg", alt: "Events venue" },
      { src: "/images/scroll-dessert.jpg", alt: "Dessert shop" },
      { src: "/images/strip-ltr-catering.jpg", alt: "Catering" },
    ] as FilmstripImage[],
    rtl: [
      { src: "/images/ind-salon.jpg", alt: "Salon" },
      { src: "/images/scroll-barber.jpg", alt: "Barber" },
      { src: "/images/ind-gym.jpg", alt: "Gym" },
      { src: "/images/scroll-fitness.jpg", alt: "Fitness studio" },
      { src: "/images/ind-clinic.jpg", alt: "Clinic" },
      { src: "/images/scroll-dental.jpg", alt: "Dental" },
      { src: "/images/scroll-spa.jpg", alt: "Spa & wellness" },
      { src: "/images/scroll-pet.jpg", alt: "Pet grooming" },
      { src: "/images/scroll-law.jpg", alt: "Law firm" },
      { src: "/images/scroll-tourism.jpg", alt: "Tourism" },
      { src: "/images/scroll-photography.jpg", alt: "Photography" },
      { src: "/images/scroll-realestate.jpg", alt: "Real estate" },
    ] as FilmstripImage[],
  },

  contactSection: {
    label: "Get In Touch",
    heading: "Let's build",
    headingHighlight: "together",
    subheading:
      "Fill in the form and we'll send your free website mockup within 48 hours — no sales pressure, just a real conversation about your business.",
    formTitle: "Send a message",
    formSubtitle: "Tell us about your business and which plan you're considering.",
    trustBadges: [
      { icon: "ti-clock", label: "48-hour mockup" },
      { icon: "ti-shield-check", label: "No contracts" },
    ],
    quickActions: [
      { label: "WhatsApp", icon: "ti-brand-whatsapp", type: "whatsapp" as const },
      { label: "Book a call", icon: "ti-calendar", type: "calendly" as const },
    ],
  },

  form: {
    subject: "Web Design Landing Enquiry",
    successMessage: "Message sent — we'll reply within 24 hours.",
    errorMessage: "Could not send your message. Please try again or WhatsApp us.",
    networkErrorMessage:
      "Could not reach the server. Check your connection and try again, or message us on WhatsApp.",
  },

  footer: {
    services: [
      { label: "Starter — essential layout, 5 sections", href: "#pricing" },
      { label: "Growth — enhanced layout, 10 sections", href: "#pricing" },
      { label: "Premium — signature experience, unlimited sections", href: "#pricing" },
      { label: "Enterprise · custom builds", href: "#pricing" },
      { label: "Mobile-first & SEO setup", href: "#features" },
      { label: "Free mockup in 48 hours", href: "#process" },
      {
        label: "AI, apps & enterprise →",
        href: "https://enterprise.simfahglobal.com",
        external: true,
      },
    ],
    links: [
      { label: "Our work", href: "#work" },
      { label: "How it works", href: "#process" },
      { label: "What you get", href: "#features" },
      { label: "Plans", href: "#pricing" },
      { label: "Industries", href: "#industries" },
      { label: "Get started", href: "#contact" },
      {
        label: "enterprise.simfahglobal.com",
        href: "https://enterprise.simfahglobal.com",
        external: true,
      },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
