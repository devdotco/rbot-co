export interface NavLink {
  label: string;
  href: string;
  more?: boolean;
}

export interface NavCol {
  type: "links";
  label: string;
  links: NavLink[];
}

export interface NavFeat {
  type: "featured";
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
}

export type MegaCol = NavCol | NavFeat;

export interface MegaMenu {
  label: string;
  columns: string;
  cols: MegaCol[];
}

export const megaMenus: Record<string, MegaMenu> = {
  robots: {
    label: "Robots",
    columns: "1.1fr 1fr 0.85fr 1.25fr",
    cols: [
      {
        type: "links",
        label: "By Robot Type",
        links: [
          { label: "Humanoid Robots",          href: "/robots/humanoid" },
          { label: "Autonomous Mobile Robots",  href: "/robots/amr" },
          { label: "Robotic Arms",              href: "/robots/robotic-arms" },
          { label: "Cobots",                    href: "/robots/cobots" },
          { label: "Warehouse Robots",          href: "/robots/warehouse" },
          { label: "Inspection Robots",         href: "/robots/inspection" },
          { label: "Cleaning Robots",           href: "/robots/cleaning" },
          { label: "Security Robots",           href: "/robots/security" },
          { label: "Specialized Robots",        href: "/robots/specialized" },
        ],
      },
      {
        type: "links",
        label: "Manufacturers",
        links: [
          { label: "Figure",            href: "/manufacturers/figure" },
          { label: "Agility Robotics",  href: "/manufacturers/agility-robotics" },
          { label: "Apptronik",         href: "/manufacturers/apptronik" },
          { label: "Boston Dynamics",   href: "/manufacturers/boston-dynamics" },
          { label: "Unitree",           href: "/manufacturers/unitree" },
          { label: "NEURA Robotics",    href: "/manufacturers/neura-robotics" },
          { label: "ABB",               href: "/manufacturers/abb" },
          { label: "FANUC",             href: "/manufacturers/fanuc" },
          { label: "Universal Robots",  href: "/manufacturers/universal-robots" },
          { label: "View All →",        href: "/manufacturers", more: true },
        ],
      },
      {
        type: "links",
        label: "Tools",
        links: [
          { label: "Compare Robots",    href: "/compare" },
          { label: "Robot Finder",      href: "/robot-finder" },
          { label: "ROI Calculator",    href: "/#roi" },
          { label: "Robot Marketplace", href: "/robots" },
        ],
      },
      {
        type: "featured",
        eyebrow: "Robot Finder",
        title: "Not sure what robot you need?",
        desc: "Answer a few questions about your workflow and RBOT will identify potential solutions matched to your operation.",
        href: "/robot-finder",
        cta: "Find My Robot",
      },
    ],
  },

  solutions: {
    label: "Solutions",
    columns: "1fr 1fr 1.3fr",
    cols: [
      {
        type: "links",
        label: "By Industry",
        links: [
          { label: "Manufacturing",   href: "/solutions/manufacturing" },
          { label: "Warehousing",     href: "/solutions/warehousing" },
          { label: "Distribution",    href: "/solutions/distribution" },
          { label: "Logistics",       href: "/solutions/logistics" },
          { label: "Retail",          href: "/solutions/retail" },
          { label: "Healthcare",      href: "/solutions/healthcare" },
          { label: "Hospitality",     href: "/solutions/hospitality" },
          { label: "Construction",    href: "/solutions/construction" },
          { label: "Food & Beverage", href: "/solutions/food-beverage" },
        ],
      },
      {
        type: "links",
        label: "By Goal",
        links: [
          { label: "Reduce Labor Costs",    href: "/assessment" },
          { label: "Increase Throughput",   href: "/assessment" },
          { label: "Fill Labor Shortages",  href: "/assessment" },
          { label: "Improve Safety",        href: "/assessment" },
          { label: "Automate Night Shifts", href: "/assessment" },
          { label: "ROI Calculator",        href: "/#roi" },
          { label: "Case Studies",          href: "/resources/case-studies" },
        ],
      },
      {
        type: "featured",
        eyebrow: "Automation Assessment",
        title: "Identify the highest-ROI robotics opportunities in your facility.",
        desc: "A structured analysis of your workflows, labor costs, and automation candidates — delivered in 5 business days.",
        href: "/assessment",
        cta: "Request Assessment",
      },
    ],
  },

  platform: {
    label: "Platform",
    columns: "1fr 1fr 1.3fr",
    cols: [
      {
        type: "links",
        label: "RBOT Platform",
        links: [
          { label: "Platform Overview",  href: "/platform" },
          { label: "Fleet Management",   href: "/platform/fleet" },
          { label: "Analytics",          href: "/platform/analytics" },
          { label: "Integrations",       href: "/platform/integrations" },
          { label: "API",                href: "/platform/api" },
        ],
      },
      {
        type: "links",
        label: "Resources",
        links: [
          { label: "ROI Calculator",     href: "/#roi" },
          { label: "Robotics Guide",     href: "/resources/guide" },
          { label: "Compare Platforms",  href: "/compare" },
          { label: "Case Studies",       href: "/resources/case-studies" },
        ],
      },
      {
        type: "featured",
        eyebrow: "RBOT Platform",
        title: "Manage every robot from one place.",
        desc: "One control plane for your entire robotic workforce — monitoring, tasks, analytics, and integrations unified.",
        href: "/platform",
        cta: "Explore Platform",
      },
    ],
  },

  services: {
    label: "Services",
    columns: "1fr 1fr 1fr 1.3fr",
    cols: [
      {
        type: "links",
        label: "Deployment",
        links: [
          { label: "Robotics Assessment",  href: "/assessment" },
          { label: "Site Deployment",      href: "/services/deployment" },
          { label: "Services Overview",    href: "/services" },
        ],
      },
      {
        type: "links",
        label: "Integration",
        links: [
          { label: "Systems Integration",  href: "/services/integration" },
          { label: "Platform Integrations", href: "/platform/integrations" },
          { label: "API",                  href: "/platform/api" },
        ],
      },
      {
        type: "links",
        label: "Operations",
        links: [
          { label: "Managed Operations",  href: "/services/managed" },
          { label: "Field Service",       href: "/services/field-service" },
          { label: "Fleet Management",    href: "/platform/fleet" },
          { label: "RaaS Pricing",        href: "/raas" },
        ],
      },
      {
        type: "featured",
        eyebrow: "Managed Robotics",
        title: "We deploy and operate robotic systems for you.",
        desc: "RBOT handles sourcing, integration, deployment, monitoring, and maintenance end to end.",
        href: "/services/managed",
        cta: "Learn More",
      },
    ],
  },

  resources: {
    label: "Resources",
    columns: "1fr 1.4fr",
    cols: [
      {
        type: "links",
        label: "Resources",
        links: [
          { label: "Robotics Guide",         href: "/resources/guide" },
          { label: "Case Studies",           href: "/resources/case-studies" },
          { label: "ROI Calculator",         href: "/resources/roi-calculator" },
          { label: "Physical AI Blog",       href: "/blog" },
          { label: "Robot Directory",        href: "/robots" },
          { label: "Manufacturer Directory", href: "/manufacturers" },
          { label: "Compare Robots",         href: "/compare" },
        ],
      },
      {
        type: "featured",
        eyebrow: "Free Guide",
        title: "The Complete Guide to Enterprise Robotics Deployment",
        desc: "Eight chapters covering assessment, vendor selection, integration, and measuring ROI. Used by 3,200+ operations leaders.",
        href: "/resources/guide",
        cta: "Download Free",
      },
    ],
  },

  company: {
    label: "Company",
    columns: "1fr 1fr 1fr",
    cols: [
      {
        type: "links",
        label: "Company",
        links: [
          { label: "About RBOT", href: "/company/about" },
          { label: "Careers",    href: "/company/careers" },
          { label: "Newsroom",   href: "/company/news" },
          { label: "Contact",    href: "/company/contact" },
        ],
      },
      {
        type: "links",
        label: "Partners",
        links: [
          { label: "Manufacturer Directory", href: "/manufacturers" },
          { label: "Work With Us",           href: "/assessment" },
        ],
      },
      {
        type: "featured",
        eyebrow: "Get Started",
        title: "Talk to a robotics specialist.",
        desc: "RBOT's team helps operations leaders find and deploy the right robots for their specific workflow.",
        href: "/assessment",
        cta: "Request Assessment",
      },
    ],
  },
};
