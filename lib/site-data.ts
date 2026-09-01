export const manufacturers = [
  { name: "Figure",            category: "Humanoid",           slug: "figure" },
  { name: "Agility Robotics",  category: "Humanoid",           slug: "agility-robotics" },
  { name: "Apptronik",         category: "Humanoid",           slug: "apptronik" },
  { name: "Boston Dynamics",   category: "Mobile / Humanoid",  slug: "boston-dynamics" },
  { name: "Unitree",           category: "Humanoid / Quadruped", slug: "unitree" },
  { name: "NEURA Robotics",    category: "Humanoid",           slug: "neura-robotics" },
  { name: "Sanctuary AI",      category: "Humanoid",           slug: "sanctuary-ai" },
  { name: "ABB",               category: "Industrial Arms",    slug: "abb" },
  { name: "FANUC",             category: "Industrial Arms",    slug: "fanuc" },
  { name: "KUKA",              category: "Industrial Arms",    slug: "kuka" },
  { name: "Universal Robots",  category: "Cobots",             slug: "universal-robots" },
  { name: "Locus Robotics",    category: "AMR",                slug: "locus-robotics" },
];

export const robotCategories = [
  {
    title: "Humanoid Robots",
    desc: "General-purpose robots capable of performing tasks originally designed for humans in unstructured environments.",
    uses: ["Material movement & tote handling", "Machine tending", "Picking & pallet movement", "Repetitive production tasks"],
  },
  {
    title: "Autonomous Mobile Robots",
    desc: "Self-navigating platforms for internal transportation, fulfillment, and inventory operations.",
    uses: ["Internal transportation", "Warehouse & fulfillment movement", "Inventory mobility", "Manufacturing logistics"],
  },
  {
    title: "Robotic Arms",
    desc: "Precision automation for pick and place, assembly, inspection, and machine tending applications.",
    uses: ["Pick and place", "Packaging & palletizing", "Assembly & machine tending", "Quality inspection"],
  },
  {
    title: "Vision Systems",
    desc: "Computer vision infrastructure for quality control, inventory, safety monitoring, and anomaly detection.",
    uses: ["Quality control & defect detection", "Inventory tracking", "Safety zone monitoring", "Anomaly & intrusion detection"],
  },
  {
    title: "Cobots",
    desc: "Collaborative robots that work alongside human operators with built-in safety for shared workspaces.",
    uses: ["Human-robot collaboration", "Light assembly", "Screwdriving & fastening", "Inspection assistance"],
  },
  {
    title: "Specialized Robotics",
    desc: "Purpose-built systems for cleaning, security, inspection, agriculture, hospitality, and construction.",
    uses: ["Facility cleaning & disinfection", "Security patrol", "Infrastructure inspection", "Hospitality & delivery"],
  },
];

export const industries = [
  { idx: "01", title: "Warehousing & Distribution", desc: "Material movement, picking, pallet handling, fulfillment, and sortation at scale.", slug: "warehousing" },
  { idx: "02", title: "Manufacturing",               desc: "Machine tending, assembly, inspection, and production support across discrete and process manufacturing.", slug: "manufacturing" },
  { idx: "03", title: "Logistics",                   desc: "Loading, unloading, sorting, yard operations, and internal transport for high-throughput facilities.", slug: "logistics" },
  { idx: "04", title: "Retail",                      desc: "Inventory auditing, stocking, fulfillment, and facility cleaning in retail environments.", slug: "retail" },
  { idx: "05", title: "Hospitality",                 desc: "Cleaning, delivery, food handling, and facilities support for hotels and commercial spaces.", slug: "hospitality" },
  { idx: "06", title: "Healthcare",                  desc: "Logistics, supplies, patient transport support, and facility cleaning in clinical environments.", slug: "healthcare" },
  { idx: "07", title: "Food & Beverage",             desc: "Packaging, palletizing, inspection, and sanitation in food production and processing.", slug: "food-beverage" },
  { idx: "08", title: "Construction",                desc: "Material movement, inspection, repetitive physical tasks, and site logistics.", slug: "construction" },
];

export const integrationRows = [
  {
    label: "ERP",
    items: ["SAP", "Oracle", "NetSuite", "Microsoft Dynamics", "Sage", "Odoo", "Infor"],
  },
  {
    label: "WMS / Warehouse",
    items: ["Manhattan Associates", "Blue Yonder", "Körber", "HighJump", "3PL Central", "Deposco"],
  },
  {
    label: "Cloud Platforms",
    items: ["AWS", "Microsoft Azure", "Google Cloud"],
  },
  {
    label: "CRM / Sales",
    items: ["Salesforce", "HubSpot", "Microsoft CRM"],
  },
  {
    label: "Industrial / IoT",
    items: ["OSIsoft PI", "Ignition SCADA", "Siemens MindSphere", "AWS IoT", "Azure IoT Hub"],
  },
  {
    label: "AI & Vision",
    items: ["OpenAI", "Anthropic", "NVIDIA Metropolis", "Roboflow", "Custom Models"],
  },
];

export const fleetRows = [
  { name: "Figure 03",   id: "RBT-0042", zone: "Zone A",   status: "task",   task: "Pallet Move · TSK-2481", battery: 74 },
  { name: "Digit V3",    id: "RBT-0031", zone: "Zone B",   status: "online", task: "Zone B Pick · TSK-2477", battery: 62 },
  { name: "UR20 Arm",    id: "RBT-0055", zone: "Line 4",   status: "task",   task: "Machine Tend · TSK-2483", battery: null },
  { name: "Spot",        id: "RBT-0018", zone: "Charging", status: "idle",   task: "—",                       battery: 98 },
  { name: "Apollo",      id: "RBT-0029", zone: "Zone C",   status: "task",   task: "Tote Stack · TSK-2479",   battery: 81 },
];

export const processSteps = [
  { label: "Assess",    desc: "We analyze your facilities, workflows, labor costs, and automation opportunities." },
  { label: "Select",    desc: "We identify the robots and manufacturers best suited to your task." },
  { label: "Integrate", desc: "Connect robotics with ERP, WMS, APIs, cameras, sensors, and operational systems." },
  { label: "Deploy",    desc: "Installation, configuration, testing, employee training, and workflow rollout." },
  { label: "Manage",    desc: "Fleet monitoring, maintenance, optimization, software updates, and support." },
];

export const footerCols = [
  {
    title: "Robots",
    links: [
      { label: "Humanoids",        href: "/robots/humanoid" },
      { label: "AMRs",             href: "/robots/amr" },
      { label: "Robotic Arms",     href: "/robots/robotic-arms" },
      { label: "Cobots",           href: "/robots/cobots" },
      { label: "Robot Marketplace", href: "/robots" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Manufacturing",  href: "/solutions/manufacturing" },
      { label: "Warehousing",    href: "/solutions/warehousing" },
      { label: "Logistics",      href: "/solutions/logistics" },
      { label: "Healthcare",     href: "/solutions/healthcare" },
      { label: "All Industries", href: "/solutions" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Assessment",       href: "/assessment" },
      { label: "Deployment",       href: "/services/deployment" },
      { label: "Integration",      href: "/services/integration" },
      { label: "RaaS",             href: "/raas" },
      { label: "Managed Robotics", href: "/services/managed" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About",    href: "/company/about" },
      { label: "Careers",  href: "/company/careers" },
      { label: "Partners", href: "/company/partners" },
      { label: "Newsroom", href: "/company/news" },
      { label: "Contact",  href: "/company/contact" },
    ],
  },
];
