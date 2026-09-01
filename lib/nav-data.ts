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
          { label: "Humanoid Robots",           href: "/robots/humanoid" },
          { label: "Autonomous Mobile Robots",   href: "/robots/amr" },
          { label: "Robotic Arms",               href: "/robots/robotic-arms" },
          { label: "Cobots",                     href: "/robots/cobots" },
          { label: "Warehouse Robots",           href: "/robots/warehouse" },
          { label: "Inspection Robots",          href: "/robots/inspection" },
          { label: "Cleaning Robots",            href: "/robots/cleaning" },
          { label: "Security Robots",            href: "/robots/security" },
          { label: "Specialized Robots",         href: "/robots/specialized" },
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
          { label: "View All Manufacturers →", href: "/manufacturers", more: true },
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
    columns: "1fr 1fr 1fr 1.3fr",
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
        label: "By Workflow",
        links: [
          { label: "Material Handling",      href: "/solutions/material-handling" },
          { label: "Picking & Packing",      href: "/solutions/picking-packing" },
          { label: "Palletizing",            href: "/solutions/palletizing" },
          { label: "Machine Tending",        href: "/solutions/machine-tending" },
          { label: "Inspection",             href: "/solutions/inspection" },
          { label: "Inventory",              href: "/solutions/inventory" },
          { label: "Loading & Unloading",    href: "/solutions/loading-unloading" },
          { label: "Assembly",               href: "/solutions/assembly" },
        ],
      },
      {
        type: "links",
        label: "By Objective",
        links: [
          { label: "Reduce Labor Costs",       href: "/solutions/reduce-labor" },
          { label: "Increase Throughput",      href: "/solutions/throughput" },
          { label: "Fill Labor Shortages",     href: "/solutions/labor-shortage" },
          { label: "Improve Safety",           href: "/solutions/safety" },
          { label: "Automate Night Shifts",    href: "/solutions/night-shift" },
          { label: "Increase Utilization",     href: "/solutions/utilization" },
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
    columns: "1fr 1fr 1fr 1.3fr",
    cols: [
      {
        type: "links",
        label: "RBOT Platform",
        links: [
          { label: "Fleet Management",    href: "/platform/fleet" },
          { label: "Robot Monitoring",    href: "/platform/monitoring" },
          { label: "Task Orchestration",  href: "/platform/tasks" },
          { label: "Analytics",           href: "/platform/analytics" },
          { label: "Integrations",        href: "/platform/integrations" },
          { label: "Maintenance",         href: "/platform/maintenance" },
          { label: "API",                 href: "/platform/api" },
        ],
      },
      {
        type: "links",
        label: "Intelligence",
        links: [
          { label: "Physical AI",          href: "/platform/physical-ai" },
          { label: "Computer Vision",      href: "/platform/vision" },
          { label: "AI Agents",            href: "/platform/ai-agents" },
          { label: "Workflow Automation",  href: "/platform/workflows" },
          { label: "Digital Twins",        href: "/platform/digital-twins" },
        ],
      },
      {
        type: "links",
        label: "Integrations",
        links: [
          { label: "ERP Systems",       href: "/platform/integrations/erp" },
          { label: "WMS",               href: "/platform/integrations/wms" },
          { label: "MES",               href: "/platform/integrations/mes" },
          { label: "IoT & Sensors",     href: "/platform/integrations/iot" },
          { label: "Cloud Platforms",   href: "/platform/integrations/cloud" },
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
    columns: "1fr 1fr 1fr 1fr 1.3fr",
    cols: [
      {
        type: "links",
        label: "Deployment",
        links: [
          { label: "Robotics Assessment",  href: "/services/assessment" },
          { label: "Robot Selection",      href: "/services/selection" },
          { label: "Site Preparation",     href: "/services/site-prep" },
          { label: "Installation",         href: "/services/installation" },
          { label: "Testing & Training",   href: "/services/training" },
        ],
      },
      {
        type: "links",
        label: "Integration",
        links: [
          { label: "ERP Integration",      href: "/services/erp-integration" },
          { label: "WMS Integration",      href: "/services/wms-integration" },
          { label: "Custom APIs",          href: "/services/custom-api" },
          { label: "Computer Vision",      href: "/services/vision" },
          { label: "Workflow Engineering", href: "/services/workflows" },
        ],
      },
      {
        type: "links",
        label: "Operations",
        links: [
          { label: "Fleet Management",   href: "/services/fleet" },
          { label: "Maintenance",        href: "/services/maintenance" },
          { label: "Remote Monitoring",  href: "/services/monitoring" },
          { label: "Field Service",      href: "/services/field-service" },
          { label: "Optimization",       href: "/services/optimization" },
        ],
      },
      {
        type: "links",
        label: "Commercial",
        links: [
          { label: "Robot Procurement",     href: "/services/procurement" },
          { label: "Robot Leasing",         href: "/services/leasing" },
          { label: "Robotics-as-a-Service", href: "/raas" },
          { label: "Robot Financing",       href: "/services/financing" },
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
          { label: "Robotics Guide",          href: "/resources/guide" },
          { label: "Robot Directory",          href: "/robots" },
          { label: "Manufacturer Directory",   href: "/manufacturers" },
          { label: "Robot Comparison",         href: "/compare" },
          { label: "ROI Calculator",           href: "/#roi" },
          { label: "Case Studies",             href: "/resources/case-studies" },
          { label: "Physical AI Blog",         href: "/blog" },
          { label: "Research",                 href: "/resources/research" },
          { label: "Glossary",                 href: "/resources/glossary" },
        ],
      },
      {
        type: "featured",
        eyebrow: "Annual Report",
        title: "The State of Physical AI",
        desc: "RBOT's annual industry report covering deployment trends, manufacturer trajectories, ROI benchmarks, and the sectors leading adoption.",
        href: "/resources/state-of-physical-ai",
        cta: "Download Report",
      },
    ],
  },

  company: {
    label: "Company",
    columns: "repeat(4, 1fr)",
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
          { label: "Manufacturers",        href: "/company/manufacturers" },
          { label: "Deployment Network",   href: "/company/network" },
          { label: "System Integrators",   href: "/company/integrators" },
          { label: "Join RBOT Network",    href: "/company/join" },
        ],
      },
      {
        type: "links",
        label: "Portals",
        links: [
          { label: "Customer Portal",     href: "https://app.rbot.co" },
          { label: "Manufacturer Portal", href: "https://partners.rbot.co" },
          { label: "Partner Portal",      href: "https://partners.rbot.co" },
        ],
      },
      {
        type: "links",
        label: "Legal",
        links: [
          { label: "Privacy Policy",  href: "/legal/privacy" },
          { label: "Terms of Service", href: "/legal/terms" },
          { label: "Security",        href: "/legal/security" },
        ],
      },
    ],
  },
};
