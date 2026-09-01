export type SvgType = "humanoid" | "arm" | "amr" | "quadruped";

export interface Robot {
  name: string;
  desc: string;
}

export interface Spec {
  label: string;
  value: string;
  note?: string;
}

export interface Manufacturer {
  name: string;
  slug: string;
  category: string;
  founded: number;
  headquarters: string;
  parentCompany: string | null;
  overview: string[];       // 3 paragraphs
  robots: Robot[];          // 2–5 key robots
  technology: string[];     // 2 paragraphs
  deployment: string;       // 1 paragraph
  industries: string[];
  rbotNote: string;         // 1 paragraph
  specs: Spec[];            // 5–6 rows for the specs table
  svgType: SvgType;
}

export const manufacturerData: Manufacturer[] = [
  // ─── HUMANOIDS ────────────────────────────────────────────────

  {
    name: "Figure",
    slug: "figure",
    category: "Humanoid",
    founded: 2022,
    headquarters: "San Jose, CA",
    parentCompany: null,
    overview: [
      "Figure AI was founded in 2022 by serial entrepreneur Brett Adcock, who previously founded Archer Aviation and talent marketplace Vettery. The company set out with a singular commercial objective: build a general-purpose humanoid robot that can be deployed at scale in human-designed workplaces to address structural labor shortages. In early 2024, Figure closed a landmark $675 million funding round backed by Microsoft, OpenAI, Nvidia, Jeff Bezos's family fund, and Intel Capital — one of the largest early-stage robotics raises in history. That investor consortium reflected not just confidence in Figure specifically, but in the broader thesis that physical AI is approaching a commercial inflection point.",
      "The Figure 01 was the company's first-generation prototype, achieving public recognition in a widely shared video demonstrating autonomous kitchen tasks and verbal reasoning. Figure moved quickly into commercial deployment, placing Figure 01 units on the floor of BMW Group's Spartanburg, South Carolina manufacturing facility — marking one of the first humanoid robots to be deployed in an active automotive assembly environment. That partnership gave Figure a rigorous proving ground, real task feedback loops, and a credibility signal that accelerated enterprise conversations across automotive, electronics, and logistics sectors.",
      "The Figure 02 succeeded the 01 with substantially improved hardware: redesigned hands offering 16 degrees of freedom for dexterous object manipulation, improved joint torque density, and a significantly upgraded onboard compute stack. Figure's AI approach is built around a vision-language-action (VLA) model developed in collaboration with OpenAI — a neural architecture trained on human video demonstrations that enables the robot to generalize across novel objects and task configurations without per-task reprogramming. The Figure 03, currently in development, is the company's commercial-intent platform targeting high-volume deployments with improved reliability, reduced unit cost, and faster task onboarding.",
    ],
    robots: [
      { name: "Figure 01", desc: "First-generation prototype deployed at BMW Spartanburg. Demonstrated autonomous kitchen reasoning and pallet handling in an active automotive manufacturing environment, proving humanoid viability in real industrial settings." },
      { name: "Figure 02", desc: "Second-generation platform featuring 16-DOF dexterous hands, improved whole-body torque, and a VLA neural network trained with OpenAI. Designed for repeatable warehouse and manufacturing workflows with reduced operator intervention." },
      { name: "Figure 03", desc: "Commercial-intent platform in development targeting high-volume factory and logistics deployments. Focuses on manufacturing reliability, reduced cost of goods, and faster task onboarding through improved training pipelines." },
    ],
    technology: [
      "Figure's core technical differentiator is its end-to-end neural control architecture. Rather than scripting joint trajectories for specific motions, Figure trains its system on large datasets of human demonstration video using a vision-language-action model jointly developed with OpenAI. This allows the robot to receive natural-language task instructions, reason about the scene through onboard cameras, and translate high-level intent into real-time physical action without predefined motion libraries. The onboard inference stack runs locally, enabling sub-second response cycles without cloud latency.",
      "The Figure 02's hands incorporate tactile sensing and 16 degrees of freedom — enough to grasp irregular objects, manage soft goods, and manipulate fasteners without specialized end effectors. Whole-body balance and locomotion are handled by a separate lower-level control layer that manages dynamic stability during walking, reaching, and load-bearing. Figure's simulation-to-reality transfer pipeline allows task policies trained in simulation to be deployed on physical hardware with minimal gap, reducing the time from task specification to deployment-ready behavior.",
    ],
    deployment: "Figure is currently in limited commercial deployment through direct partnership agreements, with BMW as its anchor customer. Broad commercial availability has not been announced; access is through enterprise partnership discussions. Target customers are large manufacturers and logistics operators with the infrastructure to support on-site integration and iterative task training. Estimated hardware cost per unit is in the $50,000–$100,000 range at initial commercial volumes, with pricing expected to decline as production scales.",
    industries: ["Automotive Manufacturing", "Electronics Assembly", "Warehousing", "Logistics", "General Manufacturing"],
    rbotNote: "RBOT engages with Figure through its partnership program, identifying large-scale manufacturing clients ready to pioneer humanoid deployment. Our integration team handles site assessment, safety system design, and the workflow documentation needed to optimize Figure's AI training pipeline for customer-specific tasks. We manage the full deployment lifecycle — from initial facility readiness audits and safety sensor integration through ongoing fleet telemetry, retraining cycles, and performance benchmarking against labor cost baselines.",
    specs: [
      { label: "Height", value: "1.68 m (5′6″)", note: "Figure 02" },
      { label: "Weight", value: "~70 kg" },
      { label: "Arm Payload", value: "20 kg combined" },
      { label: "Battery Life", value: "5+ hours" },
      { label: "Max Speed", value: "1.2 m/s" },
      { label: "Degrees of Freedom", value: "44 total" },
    ],
    svgType: "humanoid",
  },

  {
    name: "Agility Robotics",
    slug: "agility-robotics",
    category: "Humanoid",
    founded: 2015,
    headquarters: "Corvallis, OR",
    parentCompany: null,
    overview: [
      "Agility Robotics, founded in 2015 as a spinout from Oregon State University's Dynamic Robotics Laboratory, is one of the earliest companies to achieve real commercial deployments of a humanoid robot. The company's decade-long academic foundation gave it a deep base in bipedal locomotion research — an advantage that still shows in Digit's remarkably natural and efficient gait. Amazon made a significant strategic investment in Agility in 2023, followed by full acquisition discussions, and Digit began operating inside Amazon fulfillment centers — the first humanoid robot to work in a major logistics network at operational scale.",
      "Digit is Agility's commercial humanoid platform. Standing 1.75 meters tall and weighing 65 kilograms, Digit is built around the specific ergonomics of warehouse tote handling — the task of lifting, carrying, and placing plastic totes between conveyor systems and storage racks. The robot's design is explicitly optimized for this workflow: backward-bending knees reduce squat depth requirements, the arm reach envelope covers standard warehouse rack heights, and the grasping system is tuned for the standardized geometries of tote handles. This task-specific design philosophy trades some general-purpose flexibility for immediate production reliability.",
      "Agility is unusual among humanoid companies in that it has publicly disclosed real operational deployment metrics from its Amazon pilot. Digit units have been observed running continuous multi-hour shifts within the fulfillment center environment, handling totes alongside human workers. The company operates a manufacturing facility it calls RoboFab in Salem, Oregon, with stated capacity to produce 10,000 Digit units per year — a production ambition that is larger than most of the humanoid sector combined. Agility is positioning Digit as the first humanoid to achieve supply chain scale rather than remaining a pilot-scale prototype.",
    ],
    robots: [
      { name: "Digit (Gen 4)", desc: "Current commercial humanoid platform deployed in Amazon fulfillment centers. Optimized for tote handling, featuring backward-bending knees, a 16 kg per arm payload, and a navigation stack tuned for dynamic warehouse environments with human co-workers." },
      { name: "Cassie", desc: "Bipedal research platform and precursor to Digit. Cassie demonstrated highly efficient dynamic walking and remains one of the most-studied bipedal systems in academic robotics. It established the locomotion foundation on which Digit's legs are built." },
    ],
    technology: [
      "Digit's locomotion system is built on passive dynamic walking principles developed at Oregon State — a control paradigm that uses the natural physical dynamics of the robot's legs to produce efficient gaits rather than fighting them with brute actuation. This yields energy efficiency substantially better than fully actuated alternatives, which is critical for battery-powered mobile robots working long shifts. The navigation stack uses a combination of lidar, stereo cameras, and IMUs to build real-time occupancy maps and handle the unstructured clutter of active fulfillment centers, including moving forklifts and human workers.",
      "The arm and manipulation system uses learned grasping policies trained on the specific geometry of tote handles, with force-torque sensing at the wrists for compliant placement onto conveyors. Agility has been building out a simulation environment called Agility Arc that allows customers to model their specific facility layout and validate task configurations before physical deployment. The company's AI stack is being developed in parallel with hardware, with the goal of expanding Digit's task library beyond tote handling into adjacent warehouse workflows such as case picking and pallet building.",
    ],
    deployment: "Digit is commercially available through direct partnership agreements, with Amazon as the primary anchor deployment partner. Agility is targeting logistics and e-commerce fulfillment customers who operate standardized tote-based storage systems. The company's RoboFab production facility in Salem, Oregon is operational, and Agility has announced plans to produce thousands of units annually. Pricing is enterprise-negotiated; Agility has not published public list prices.",
    industries: ["E-Commerce Fulfillment", "Warehousing", "Logistics", "Retail Distribution", "3PL Operations"],
    rbotNote: "RBOT positions Agility Digit deployments for logistics and fulfillment operators running standardized tote-based systems. We manage the integration between Digit's navigation stack and customer WMS platforms, configure zone-based safety fencing and human co-worker protocols, and establish the task libraries needed for tote-handling workflows. Our team supports shift scheduling, performance monitoring, and the incremental task expansion that moves deployments from pilot to production scale.",
    specs: [
      { label: "Height", value: "1.75 m (5′9″)", note: "Digit Gen 4" },
      { label: "Weight", value: "65 kg" },
      { label: "Arm Payload", value: "16 kg per arm" },
      { label: "Battery Life", value: "4 hours (active)" },
      { label: "Max Speed", value: "1.5 m/s" },
      { label: "Degrees of Freedom", value: "30+" },
    ],
    svgType: "humanoid",
  },

  {
    name: "Apptronik",
    slug: "apptronik",
    category: "Humanoid",
    founded: 2016,
    headquarters: "Austin, TX",
    parentCompany: null,
    overview: [
      "Apptronik was founded in 2016 as a spinout from the Human Centered Robotics Lab at the University of Texas at Austin, where its founding team had previously built humanoid robot systems for NASA's Johnson Space Center. That NASA heritage gives Apptronik a distinctly engineering-rigorous culture — the company approaches hardware reliability with the same philosophy as aerospace: systems must work correctly the first time, in conditions that can't always be anticipated. This background directly shaped the design philosophy behind Apollo, Apptronik's commercial humanoid platform, which is built around field serviceability and long-term operational durability rather than benchmark performance metrics.",
      "Apollo stands 1.73 meters tall, weighs 73 kilograms, and is designed to carry up to 25 kilograms — one of the highest payload ratings among commercially positioned humanoids. The robot was designed from the outset with industrial ergonomics in mind: the arm geometry matches the reach envelope needed for warehouse rack operations, the joint torque is scaled to handle material weight at pace, and the safety systems are designed for co-bot-style operation alongside human workers without hard barriers. GXO Logistics became Apollo's first commercial deployment partner in 2023, operating Apollo in real fulfillment facilities and providing real-world task feedback that feeds directly into Apptronik's software development cycle.",
      "Beyond logistics, Apptronik has an active collaboration with NASA for applications in space exploration — a partnership that funds research into extreme-environment reliability, radiation tolerance, and autonomous decision-making under communication delay. The company is also partnered with Mercedes-Benz for manufacturing applications, building an automotive assembly workflow library tuned for the specific tasks that arise in vehicle production: part handling, fastening, quality inspection, and component movement between workstations. These two partnerships — logistics and automotive — bracket the broadest commercial opportunity for general-purpose humanoids.",
    ],
    robots: [
      { name: "Apollo", desc: "Commercial humanoid platform standing 1.73m and carrying up to 25kg. Designed for warehouse fulfillment and light manufacturing with a field-serviceable modular design, onboard compute, and a safety system supporting human co-work without hard barriers." },
      { name: "Astra", desc: "Earlier research and development platform used to validate Apptronik's core actuation and control technologies. Astra's hardware lessons directly informed the Apollo design, particularly in joint reliability and thermal management." },
    ],
    technology: [
      "Apollo's actuation system is built around Apptronik's proprietary Series Elastic Actuators (SEAs), which place a compliant spring element between the motor gearbox and the joint output. This architecture provides passive compliance that protects the mechanism from impact loads, reduces peak motor torque requirements, and enables accurate force control — critical for tasks like placing objects gently onto conveyors or pressing components into assembly fixtures. SEAs also provide a natural safety mechanism: in the event of an unexpected collision, the spring element absorbs energy before it reaches the robot or the human nearby.",
      "Apollo's perception stack uses a combination of stereo RGB cameras, depth sensors, and lidar to build a real-time 3D understanding of its environment. The AI stack uses a learned task policy framework that allows new workflows to be specified through teleoperation demonstrations rather than hand-coded motion programs. Apptronik's simulation-to-real pipeline uses domain randomization to train policies that transfer reliably to physical hardware across varying lighting, clutter, and object geometry. The company is building a cloud-based fleet management tool that lets operators monitor multi-unit deployments, track task performance, and push software updates remotely.",
    ],
    deployment: "Apollo is in commercial deployment with GXO Logistics and Mercedes-Benz, and Apptronik is actively seeking additional enterprise deployment partners in warehousing, automotive manufacturing, and general manufacturing. The company is not offering direct hardware sales at this stage; deployments are structured as partnerships with a managed service component. Apptronik's Austin, Texas facility handles final assembly and testing. List pricing has not been publicly disclosed.",
    industries: ["Logistics & Fulfillment", "Automotive Manufacturing", "General Manufacturing", "Aerospace", "Healthcare Logistics"],
    rbotNote: "RBOT works with Apptronik's partner ecosystem to deploy Apollo in warehouse and light manufacturing environments where its high payload rating and force-controlled manipulation are particularly valuable. We handle site ergonomic analysis, task demonstration collection for policy training, and the WMS/ERP integration needed to assign Apollo to specific pick or material movement workflows. RBOT's managed service layer covers ongoing task library expansion, performance benchmarking, and preventive maintenance coordination with Apptronik's field service team.",
    specs: [
      { label: "Height", value: "1.73 m (5′8″)" },
      { label: "Weight", value: "73 kg" },
      { label: "Arm Payload", value: "25 kg" },
      { label: "Battery Life", value: "4 hours" },
      { label: "Max Speed", value: "1.1 m/s" },
      { label: "Degrees of Freedom", value: "34" },
    ],
    svgType: "humanoid",
  },

  {
    name: "Boston Dynamics",
    slug: "boston-dynamics",
    category: "Mobile / Humanoid",
    founded: 1992,
    headquarters: "Waltham, MA",
    parentCompany: "Hyundai Motor Group",
    overview: [
      "Boston Dynamics was founded in 1992 as a spinout from MIT, initially focused on physics-based simulation and animation tools. The company pivoted to physical robotics through DARPA contracts in the 2000s, producing BigDog, LS3, and other legged robots that became famous for their uncanny dynamic stability. Acquired by Google in 2013, then SoftBank in 2017, and finally Hyundai Motor Group in 2021, Boston Dynamics has undergone multiple ownership transitions while maintaining its position as the world's most-recognized robotics brand. Today, with Hyundai's manufacturing infrastructure behind it, the company is shifting from R&D showcase to commercial scale.",
      "Spot, the quadruped inspection robot, is Boston Dynamics' first commercially proven product. Spot has been deployed in oil & gas facilities for methane leak detection, in construction for progress monitoring, in mining for autonomous site inspection, in utilities for substation patrol, and in emergency response as a remote sensing platform. The robot's ability to navigate stairs, rough terrain, and confined spaces that wheeled AMRs cannot access makes it uniquely valuable for inspection workflows. Spot carries a configurable payload system — cameras, gas sensors, thermal imagers, acoustic sensors — that allows the same base platform to serve dozens of inspection use cases.",
      "Stretch, Boston Dynamics' warehouse-focused AMR, addresses the unloading of shipping containers and truck trailers — one of the most physically demanding and injury-prone tasks in logistics. Stretch uses a mobile base with a high-reach robotic arm to unload mixed-SKU boxes from trailers without human labor. DHL and other major logistics operators have deployed Stretch in pilot programs. Atlas, Boston Dynamics' humanoid research platform, remains the company's most visible R&D asset — regularly demonstrating dynamic gymnastics and construction tasks — but is not yet a commercial product, serving instead as a proving ground for next-generation actuation and AI control technologies.",
    ],
    robots: [
      { name: "Spot", desc: "Quadruped inspection robot with configurable payload bay. Deployed globally for methane detection, construction progress monitoring, substation patrol, and confined space inspection. Navigates stairs, rough terrain, and environments inaccessible to wheeled platforms." },
      { name: "Stretch", desc: "Warehouse AMR with a 7-DOF mobile arm designed to unload mixed-SKU boxes from shipping containers and truck trailers. Reaches the full depth of a 53-foot trailer and handles boxes up to 23 kg. Deployed with DHL and other major 3PL operators." },
      { name: "Atlas (R&D)", desc: "Humanoid research platform used internally to develop next-generation dynamic actuation, AI control, and dexterous manipulation. Atlas is not currently available for commercial purchase; it represents Boston Dynamics' technical roadmap for future commercial humanoids." },
    ],
    technology: [
      "Boston Dynamics' core technical identity is dynamic locomotion — the ability to move robustly through unpredictable, unstructured environments using real-time physics-based control rather than pre-planned motion sequences. Spot's locomotion system uses a combination of perception (stereo cameras, lidar, IMUs) and a model-predictive control (MPC) framework that plans contact forces and body poses over a short future horizon, enabling the robot to recover from slips, navigate unexpected terrain, and handle payload shifts dynamically. This approach, refined over decades of research, is meaningfully ahead of most competitors in terrain handling.",
      "Stretch's arm uses a vision system trained on warehouse environments to recognize and localize boxes regardless of orientation, labeling, or stacking pattern. The grasp planning system generates approach trajectories in real time based on box geometry detected from RGBD cameras, using a vacuum-cup end effector for reliable contact on cardboard surfaces. Boston Dynamics is investing heavily in AI stack modernization: the newest Atlas demonstrations use learned neural policies rather than hand-coded controllers for manipulation, suggesting the company's next commercial platform will inherit a significantly more capable AI backbone.",
    ],
    deployment: "Spot is commercially available with pricing starting around $75,000 per unit for the base platform, with payload modules adding $5,000–$30,000 depending on sensor configuration. Stretch is available through enterprise partnership programs, with pricing negotiated based on fleet size and deployment scope. Both platforms are supported globally through Boston Dynamics' certified partner network. Hyundai's manufacturing capabilities are expected to support significant production scale increases for Spot, and potentially future commercial humanoid platforms.",
    industries: ["Oil & Gas Inspection", "Construction", "Utilities & Power", "Mining", "Warehousing & Logistics", "Public Safety", "Manufacturing"],
    rbotNote: "RBOT deploys Spot for industrial inspection programs across oil & gas, utilities, and construction — handling sensor payload selection, autonomous inspection route programming, and integration with facility SCADA or ERP systems for automated report generation. For Stretch, RBOT manages the logistics integration layer connecting unloading throughput data to WMS inbound receiving workflows. Our team handles site certification, safety zone configuration, and ongoing payload calibration for both platforms.",
    specs: [
      { label: "Platform", value: "Spot quadruped" },
      { label: "Weight (Spot)", value: "32 kg" },
      { label: "Payload Capacity", value: "14 kg" },
      { label: "Max Speed", value: "1.6 m/s" },
      { label: "Battery Life", value: "90 minutes" },
      { label: "Ingress Protection", value: "IP54" },
    ],
    svgType: "quadruped",
  },

  {
    name: "Unitree",
    slug: "unitree",
    category: "Humanoid / Quadruped",
    founded: 2016,
    headquarters: "Hangzhou, China",
    parentCompany: null,
    overview: [
      "Unitree Robotics was founded in 2016 in Hangzhou, China, and has grown into one of the most cost-competitive robotics manufacturers in the world across both quadruped and humanoid form factors. Where most Western humanoid companies are raising hundreds of millions to fund multi-year R&D programs, Unitree is already shipping hardware at prices an order of magnitude below competitors — the Go2 quadruped retails around $2,700, and the H1 humanoid was made available at approximately $90,000, shattering the price expectations the industry had set. This aggressive pricing strategy has made Unitree hardware the dominant platform in academic robotics research globally.",
      "Unitree's product line spans two major form factors. The quadruped family — including the Go2 (consumer/education), B2 (industrial), and B2-W (wheeled-legged hybrid) — covers a wide range of inspection, patrol, and material movement applications. The humanoid family — including the H1 and more recent G1 — has generated significant commercial interest due to its combination of capable hardware, open development ecosystem, and sub-$100,000 pricing. The H1 can walk at up to 3.3 meters per second, making it one of the fastest bipedal robots ever demonstrated, though its manipulation capabilities are currently limited compared to humanoids purpose-built for dexterous tasks.",
      "Unitree's approach to robotics development is notably open: the company publishes control code, supports ROS2 integration out of the box, and provides an SDK that allows customers and researchers to build custom applications on top of its hardware. This openness has created a large community of developers building motion policies, task libraries, and integration tools for Unitree platforms — effectively crowdsourcing capability development. For enterprise customers, this means a more mature application ecosystem than the hardware's age alone would suggest. Unitree is actively expanding its enterprise sales channels outside China, and RBOT is engaged as a deployment partner for North American customers.",
    ],
    robots: [
      { name: "H1", desc: "Full-size humanoid standing 1.8m and weighing 47kg. Notable for its 3.3 m/s walking speed and open SDK. Targeted at manufacturing and logistics workflows with a growing library of community-developed manipulation policies." },
      { name: "G1", desc: "Compact humanoid platform at 1.27m and 35kg, designed for environments with tighter spatial constraints. Lower cost than H1 and intended for lighter-duty manipulation and collaborative inspection tasks." },
      { name: "B2", desc: "Industrial quadruped for outdoor and rough terrain inspection, security patrol, and payload transport. IP67-rated and capable of carrying up to 40kg of payload across uneven surfaces, slopes, and stairs." },
      { name: "Go2", desc: "Consumer and research quadruped with a low entry price and full ROS2 support. Widely used in academic labs for locomotion research, multi-robot coordination experiments, and indoor inspection pilots." },
    ],
    technology: [
      "Unitree's core mechanical engineering advantage is its proprietary joint actuator modules, which pack a brushless motor, planetary gearbox, encoder, and driver electronics into a compact, torque-dense package. This modular actuator design means the same component family can be reconfigured across different robot form factors — reducing tooling cost, simplifying maintenance, and enabling rapid hardware iteration. The company manufactures these actuators in-house, giving it control over cost and quality that companies relying on third-party suppliers lack.",
      "The software stack runs on a Linux-based control system with hardware abstraction layers that expose joint control, sensor data, and navigation APIs through ROS2. Unitree's motion control uses a combination of model-predictive control for locomotion and reinforcement learning policies trained in simulation for specific gait and task behaviors. The company's reinforcement learning pipeline, partially open-sourced, has become a reference implementation for the academic community and is enabling a growing library of learned behaviors across both quadruped and humanoid platforms.",
    ],
    deployment: "Unitree hardware ships globally and is available for direct purchase through Unitree's website and authorized distributors. The Go2 starts at approximately $2,700; the B2 industrial quadruped is priced around $30,000; the H1 humanoid is available at approximately $90,000 and the G1 at $16,000. Enterprise support, custom integration, and deployment services are available through authorized partners including RBOT. Lead times for production units are typically 4–12 weeks depending on configuration.",
    industries: ["Academic Research", "Inspection & Patrol", "Warehousing", "Manufacturing", "Security", "Defense & Public Safety"],
    rbotNote: "RBOT sources Unitree hardware for North American enterprise customers who need capable robotics at a price point that makes large fleet deployments economically viable. We handle customs, import compliance, warranty management, and the enterprise-grade integration that Unitree's direct channel doesn't provide — including WMS connectivity, fleet monitoring dashboards, and custom task policy development on top of Unitree's open SDK. Our team also provides training for customer engineering staff who want to develop their own capabilities on the platform.",
    specs: [
      { label: "Height (H1)", value: "1.80 m" },
      { label: "Weight (H1)", value: "47 kg" },
      { label: "Max Speed (H1)", value: "3.3 m/s" },
      { label: "Battery Life (H1)", value: "2 hours" },
      { label: "B2 Payload", value: "40 kg" },
      { label: "B2 IP Rating", value: "IP67" },
    ],
    svgType: "humanoid",
  },

  {
    name: "NEURA Robotics",
    slug: "neura-robotics",
    category: "Humanoid",
    founded: 2019,
    headquarters: "Metzingen, Germany",
    parentCompany: null,
    overview: [
      "NEURA Robotics was founded in 2019 in Metzingen, Germany by David Reger, a serial entrepreneur with a background in automotive engineering and industrial automation. The company is widely regarded as Europe's leading humanoid robotics company and has raised significant funding from strategic investors including Volvo Cars, Schunk, and Caterpillar — a cross-industry investor group that reflects the breadth of applications NEURA is pursuing. NEURA's positioning is explicitly commercial: the company intends to be the humanoid supplier to Europe's industrial sector in the same way that ABB and KUKA have been the industrial arm suppliers.",
      "The 4NE-1 is NEURA's commercial humanoid platform, designed to address light manufacturing, logistics, and service tasks in human-centered environments. At approximately 1.78 meters tall and 85 kilograms, the 4NE-1 is built around the ergonomics of European industrial facilities — workstation heights, aisle widths, and load specifications that appear in automotive, electronics, and consumer goods manufacturing. NEURA has also announced a larger platform called MAIA (Multi-purpose Autonomous Intelligence Architecture) that is intended for heavier-duty industrial applications with higher payload requirements.",
      "NEURA's strategic partnership network is one of its most distinctive assets. The company has formal technology and deployment partnerships with Caterpillar for construction and mining applications, Volvo Cars for automotive manufacturing, and Schunk — the world's leading gripper and clamping manufacturer — for end effector integration. The Schunk partnership in particular is significant: it gives NEURA's humanoids access to the most comprehensive gripping technology catalog in the industry, enabling rapid configuration for specialized grasping tasks without developing custom tooling. This partner-first approach to capability development allows NEURA to move faster than it could building every component in-house.",
    ],
    robots: [
      { name: "4NE-1", desc: "NEURA's commercial humanoid platform at 1.78m, designed for light manufacturing, logistics, and service applications. Features cognitive AI for scene understanding and manipulation, with a focus on European industrial ergonomic standards." },
      { name: "MAIA", desc: "Next-generation humanoid platform announced for heavier-duty industrial applications with higher payload ratings and enhanced durability for demanding manufacturing environments including automotive and heavy equipment production." },
    ],
    technology: [
      "NEURA's technical approach combines a proprietary cognitive AI layer called Cognitive AI with a hardware platform designed around high-torque joint actuators adapted from automotive robotics. The Cognitive AI system is designed to enable the robot to understand natural language task instructions, recognize and categorize objects in the environment, and plan manipulation sequences without task-specific programming. NEURA emphasizes semantic understanding — the robot needs to know what a screwdriver is, what tightening means, and how to generalize the skill to different sizes and orientations of fasteners.",
      "The 4NE-1's sensing suite includes stereo RGB cameras, depth sensors, and tactile feedback in the hands. NEURA's simulation environment allows customers to model their specific production tasks and validate robot behavior before physical deployment — a critical feature for industrial customers who cannot afford production downtime during commissioning. The company's EU regulatory approach is also notable: NEURA is actively working with European safety certification bodies to develop the first CE-marked humanoid robot, a prerequisite for deployment in many regulated European industrial environments.",
    ],
    deployment: "The 4NE-1 is in pilot deployment with strategic partners and early adopter industrial customers in Germany, with expansion planned across the EU. NEURA is not offering open commercial sales at this stage; deployments are structured through partnership programs with industrial integrators. RBOT is an authorized deployment partner for North American customers who want access to NEURA's platform in the context of a US or Canada-based operation. Full commercial availability for broader customer acquisition is anticipated in 2025-2026.",
    industries: ["Automotive Manufacturing", "Construction Equipment", "Electronics Assembly", "Logistics", "Consumer Goods Manufacturing"],
    rbotNote: "RBOT engages with NEURA through its European partner network to bring the 4NE-1 platform to North American manufacturing customers. We manage the transatlantic logistics, US safety certification, and system integration required to deploy European-origin humanoids in North American facilities. Our team coordinates with NEURA's engineering team on task configuration and provides the ongoing managed service layer — fleet monitoring, task library management, and preventive maintenance — that enterprise customers need for continuous operation.",
    specs: [
      { label: "Height", value: "~1.78 m", note: "4NE-1" },
      { label: "Weight", value: "~85 kg" },
      { label: "Arm Payload", value: "10 kg per arm" },
      { label: "Battery Life", value: "8 hours" },
      { label: "Max Speed", value: "0.8 m/s" },
      { label: "Cognitive AI", value: "Onboard (NEURA proprietary)" },
    ],
    svgType: "humanoid",
  },

  {
    name: "Sanctuary AI",
    slug: "sanctuary-ai",
    category: "Humanoid",
    founded: 2018,
    headquarters: "Vancouver, BC, Canada",
    parentCompany: null,
    overview: [
      "Sanctuary AI was founded in 2018 in Vancouver, British Columbia with a founding thesis that distinguishes it from most humanoid companies: rather than starting with hardware and adding AI, Sanctuary started with the AI and built hardware to embody it. The company's long-term objective is artificial general intelligence — specifically, intelligence that can be expressed through physical action in the real world. This philosophical approach, influenced by cognitive science and philosophy of mind, shapes every design decision at Sanctuary, from how Phoenix's hands are designed to how its AI is trained. CEO Geordie Rose, who co-founded D-Wave Systems, has articulated a vision of robots that don't just execute tasks but understand them.",
      "Phoenix is Sanctuary's commercial humanoid platform. Standing 1.7 meters tall and weighing approximately 70 kilograms, Phoenix is designed for the full range of manual labor tasks performed in retail and industrial environments. Sanctuary's first commercial deployment was with Mark's (a Canadian Tire subsidiary), where Phoenix was deployed in a retail distribution center performing inventory and material handling tasks. This deployment was notable for its breadth: Phoenix was asked to perform over 110 distinct task types in a single deployment, demonstrating the generalization capability that differentiates Sanctuary from task-specific automation.",
      "The AI that drives Phoenix is called Carbon. Carbon is a general-purpose embodied intelligence system that Sanctuary argues is architecturally different from other robot AI systems — built around a unified world model rather than separate perception, planning, and control modules. This unified architecture, Sanctuary claims, is what allows Phoenix to rapidly generalize to new tasks without requiring per-task training data. The company has published research suggesting that Carbon can learn new manipulation tasks from as few as a single human demonstration, which would represent a significant reduction in the data and time cost of task onboarding.",
    ],
    robots: [
      { name: "Phoenix Gen 7", desc: "Current commercial humanoid platform deployed in retail distribution and light manufacturing. Stands 1.7m, performs over 100 distinct task types including picking, packing, counting, and material movement, driven by Carbon general-purpose AI." },
    ],
    technology: [
      "Sanctuary's Carbon AI is the company's core differentiator. Unlike systems that train separate models for perception, planning, and motor control, Carbon uses a unified architecture where a single model processes sensory input and outputs motor commands. This is trained using a combination of teleoperation demonstrations, simulation, and real-world experience across diverse task environments. The architecture is influenced by theories of embodied cognition — the idea that intelligence is inseparable from physical interaction with the world. Carbon's generalization capability means Phoenix can approach an unfamiliar object or task and reason about how to handle it based on first principles rather than requiring a specific training example.",
      "Phoenix's hands are among the most dexterous in the commercial humanoid field, designed with 20 degrees of freedom and tactile sensors across the fingertips. This dexterity enables the same hardware to handle a broad range of object sizes, shapes, and materials without tooling changes — a critical requirement for retail and mixed-SKU logistics environments where object variety is extreme. The robot's perception system uses multiple camera modalities and depth sensing to build detailed 3D scene representations, feeding the Carbon model with the environmental context it needs for task reasoning.",
    ],
    deployment: "Phoenix is in limited commercial deployment in Canada, with Sanctuary actively expanding its customer base. The company is structured around managed deployments with a service component rather than hardware sales. Sanctuary has announced plans to expand to US markets and is seeking additional retail, logistics, and light manufacturing deployment partners. RBOT is engaged as a North American deployment partner for customers seeking Sanctuary's general-purpose task flexibility.",
    industries: ["Retail Distribution", "Light Manufacturing", "Warehousing", "Consumer Packaged Goods", "Food & Beverage"],
    rbotNote: "RBOT deploys Sanctuary Phoenix for customers whose operations involve high task variety — environments where a specialized single-task robot would require dozens of different systems to cover the full workflow. We handle the facility site preparation, teleoperation demonstration collection for Carbon task training, safety system integration, and the operational monitoring needed to track Phoenix across its full task portfolio. Our team works with Sanctuary's AI team to expand task libraries as customer operations evolve.",
    specs: [
      { label: "Height", value: "1.70 m (5′7″)" },
      { label: "Weight", value: "~70 kg" },
      { label: "Hand DOF", value: "20 per hand" },
      { label: "Task Types", value: "110+ demonstrated" },
      { label: "AI System", value: "Carbon (unified model)" },
      { label: "Training Method", value: "Single-shot imitation" },
    ],
    svgType: "humanoid",
  },

  // ─── INDUSTRIAL ARMS ─────────────────────────────────────────

  {
    name: "ABB",
    slug: "abb",
    category: "Industrial Arms",
    founded: 1988,
    headquarters: "Zurich, Switzerland",
    parentCompany: null,
    overview: [
      "ABB was formed in 1988 through the merger of Swedish company ASEA and Swiss company Brown Boveri, creating a global engineering conglomerate with roots tracing to the 19th century. Today ABB Robotics is one of the world's four largest industrial robot manufacturers, with over 500,000 robots installed across more than 100 countries. ABB's robotics portfolio spans from sub-kilogram precision cobots used in electronics assembly to 1,000-kilogram payload giants used in automotive stamping and casting. This breadth — both in scale and in market presence — means that wherever you find industrial automation, you almost certainly find ABB hardware.",
      "ABB's product philosophy centers on application flexibility rather than purpose-built specialization. The IRB series of industrial articulated arms covers payloads from 2 to 800 kilograms and reaches from 0.5 to 4.2 meters, configurable with hundreds of end-of-arm tooling options. YuMi, ABB's signature collaborative robot, introduced the dual-arm small-parts assembly category when it launched in 2015 — it remains the world's most-deployed robot in electronics assembly and watch manufacturing. The GoFa and SWIFTI cobot lines extend ABB's collaborative offering to higher payloads and faster speeds, bridging the gap between traditional industrial arms and human-facing collaborative platforms.",
      "ABB's competitive moat is not just hardware — it is the OmniCore controller platform, which provides a unified programming environment, motion control kernel, and connectivity layer across all ABB robot families. OmniCore supports ABB's RAPID programming language (one of the oldest and most battle-tested robot programming languages in the industry), a graphical task-programming interface, and direct integration with ABB's robot simulation and offline programming tool, RobotStudio. This software ecosystem, combined with ABB's global service network and spare parts availability, makes ABB the lowest-risk choice for many enterprise automation buyers.",
    ],
    robots: [
      { name: "YuMi (IRB 14000)", desc: "Dual-arm collaborative robot designed for small-parts assembly in electronics, watchmaking, and pharmaceuticals. Each arm carries 0.5 kg with ±0.02mm repeatability. One of the world's most-deployed robots in precision assembly applications." },
      { name: "GoFa (CRB 15000)", desc: "5-axis collaborative robot with a 5 kg payload and 950mm reach, designed for human-robot collaboration in assembly, machine tending, and inspection. Features speed and force monitoring for safe co-worker operation without hard guarding." },
      { name: "IRB 6700", desc: "Heavy-duty industrial arm with payloads from 150 to 300 kg and reaches up to 3.2m. Widely deployed in automotive body shop, foundry, and heavy material handling applications requiring high cycle rates and extreme reliability." },
      { name: "IRB 1200", desc: "Compact industrial arm for machine tending and light assembly with a 7 kg payload, 703mm reach, and ±0.01mm repeatability. Designed for high-density cell layouts and clean room applications in electronics and medical device manufacturing." },
    ],
    technology: [
      "ABB's OmniCore controller is the technical foundation that unifies its robot product line. OmniCore handles real-time motion control at 4kHz cycle rates, manages integrated safety (functional safety up to PLe/Cat.4), runs the RAPID programming environment, and provides OPC UA, EtherNet/IP, PROFINET, and other industrial fieldbus connectivity. The controller's motion algorithms include ABB's QuickMove and TrueMove technologies, which optimize path accuracy and cycle time simultaneously — a combination that is particularly valuable in arc welding and precision assembly applications where both speed and path fidelity matter.",
      "ABB's AI and computer vision portfolio includes the Cognex partnership for integrated vision-guided robotics, ABB's own AbilityTM connected services platform for predictive maintenance and fleet monitoring, and integration with external machine vision systems. ABB has been investing in physical AI capabilities through its partnerships with AI software companies, enabling learning-based grasping and inspection in addition to traditional programmed motions. The company's simulation tool, RobotStudio, is used by over 1.4 million users worldwide for offline programming, cell design, and reachability analysis — a testament to its completeness as an engineering tool.",
    ],
    deployment: "ABB industrial robots are commercially available globally through ABB's direct sales force, authorized system integrators, and resellers. Lead times vary from 6 to 20 weeks depending on model and configuration. Pricing ranges from approximately $30,000 for small cobots to over $200,000 for large heavy-payload systems. ABB offers comprehensive support through its global network of service centers, with spare parts typically available within 24 hours in major industrial regions. Software licenses for OmniCore and RobotStudio are separate.",
    industries: ["Automotive", "Electronics Manufacturing", "Pharmaceuticals & Medical Devices", "Food & Beverage", "Metal Fabrication", "Plastics & Rubber"],
    rbotNote: "RBOT deploys ABB systems for customers requiring the broadest application coverage and the lowest integration risk. ABB's global service network and spare parts availability make it the preferred choice for multi-site enterprise deployments where uptime guarantees are contractually required. Our team handles ABB system selection, cell design in RobotStudio, end-of-arm tooling specification, safety system engineering, and the OPC UA or EtherNet/IP integration needed to connect ABB controllers to customer ERP and MES systems.",
    specs: [
      { label: "Payload Range", value: "0.5 – 1,000 kg" },
      { label: "Reach Range", value: "0.5 – 4.2 m" },
      { label: "Repeatability", value: "±0.01 – 0.15 mm" },
      { label: "Controller", value: "OmniCore" },
      { label: "Programming", value: "RAPID / Graphical" },
      { label: "Installed Base", value: "500,000+ robots" },
    ],
    svgType: "arm",
  },

  {
    name: "FANUC",
    slug: "fanuc",
    category: "Industrial Arms",
    founded: 1956,
    headquarters: "Oshino, Yamanashi, Japan",
    parentCompany: null,
    overview: [
      "FANUC Corporation was founded in 1956 as an internal division of Fujitsu, initially developing numerical control (NC) systems for machine tools. The company spun out independently in 1972 and pivoted to industrial robotics in 1974 — making it one of the oldest robot manufacturers in the world by any measure. Today, FANUC is the largest robot manufacturer globally by installed units, with over 750,000 robots operating in factories worldwide. The company's distinctive yellow paint is immediately recognizable in any industrial facility, and FANUC's products are present in virtually every automotive assembly plant on earth.",
      "FANUC's product range is extraordinarily broad. The LR Mate series covers small-workspace applications in electronics and medical devices; the M-10iA and M-20iA cover medium-payload manufacturing cells; the M-710iC and M-900iA cover heavy automotive and casting applications; the M-2000iA can handle payloads up to 2,300 kilograms — the heaviest commercially available robot arm in the world. FANUC's CRX series of collaborative robots, launched in 2019, brings the company's legendary mechanical reliability to human-facing applications in assembly and machine tending, with hand-guiding and easy programming features designed for operators without robot programming backgrounds.",
      "FANUC's most distinctive competitive attribute is reliability — the company has publicly claimed mean time between failures (MTBF) of up to 100,000 hours for its robots, and backs this with an 8-year parts availability guarantee. This reliability obsession permeates the company's culture: FANUC runs its own robot factories using its own robots, iterating hardware designs with immediate production feedback. The company is famously conservative about marketing and PR but relentlessly progressive about manufacturing quality. For customers where a single hour of downtime costs more than a robot costs per year, FANUC's reliability reputation is the decisive factor.",
    ],
    robots: [
      { name: "CRX-10iA", desc: "Collaborative robot with a 10 kg payload and 1249mm reach. Hand-guiding, drag-and-drop tablet programming, and integrated force sensing for safe co-worker operation. Designed for machine tending, assembly, and light material handling." },
      { name: "LR Mate 200iD", desc: "Compact 6-axis arm for small-part assembly, inspection, and pick-and-place in tight cell layouts. 7 kg payload, 717mm reach, and ±0.01mm repeatability. Widely used in electronics and medical device manufacturing." },
      { name: "M-710iC/50", desc: "Mid-range industrial arm with a 50 kg payload and 2050mm reach. Commonly deployed in automotive sub-assembly, spot welding, and material transfer applications where both speed and reach are required." },
      { name: "M-2000iA/2300", desc: "The world's highest-payload commercially available robot arm at 2,300 kg. Used in heavy casting, press tending, and powertrain assembly applications where no other automation technology can substitute for the task." },
    ],
    technology: [
      "FANUC's controller technology, the R-30iB Plus and R-30iB Mate Plus platforms, run FANUC's proprietary servo control algorithms at nanosecond cycle rates — the same core technology the company developed for CNC machine tools. The motion control performance on FANUC arms, particularly path accuracy at speed, is consistently cited by independent testing as the benchmark against which other manufacturers are measured. FANUC's integrated vision system, iRVision, is a 2D/3D machine vision platform built directly into the robot controller — eliminating the external PC and communication overhead that plagues third-party vision integrations.",
      "FANUC's AI capabilities, marketed under the FANUC AI brand, include learning vibration control (which learns and compensates for specific resonance patterns in the robot's mechanical structure over time), thermal compensation (which maintains accuracy as the robot heats up during operation), and deep learning-based bin picking. The DCS (Dual Check Safety) system provides certified hardware-level safety monitoring of speed, position, and force without requiring an external safety PLC. FANUC is also one of the leading industrial robot companies in direct integration with production data systems, with deep FANUC FIELD system connectivity to MES and ERP platforms.",
    ],
    deployment: "FANUC robots are sold globally through a network of authorized system integrators and FANUC's direct sales team. Lead times are typically 8–16 weeks for standard configurations. Pricing ranges from approximately $35,000 for LR Mate cobots to over $500,000 for large M-2000iA heavy payload systems. FANUC's 8-year parts availability guarantee, combined with over 240 service centers globally, makes it one of the easiest manufacturers to support over a 15–20 year equipment lifecycle. Service contracts and FANUC ZDT (Zero Down Time) predictive maintenance subscriptions are available.",
    industries: ["Automotive", "Electronics & Semiconductor", "Aerospace", "Medical Devices", "Food & Beverage Packaging", "Foundry & Casting"],
    rbotNote: "RBOT deploys FANUC systems for customers where process reliability and long lifecycle cost are the primary decision criteria. FANUC's 8-year parts guarantee and 100,000-hour MTBF claims make it the right choice for operations where planned maintenance windows are measured in hours per year. Our team handles FANUC cell design, iRVision integration for vision-guided applications, FIELD system connectivity to customer MES, and the end-of-arm tooling engineering needed to configure FANUC arms for specific process requirements.",
    specs: [
      { label: "Payload Range", value: "0.5 – 2,300 kg" },
      { label: "Reach Range", value: "0.4 – 4.7 m" },
      { label: "Repeatability", value: "±0.01 – 0.5 mm" },
      { label: "MTBF", value: "~100,000 hours" },
      { label: "Controller", value: "R-30iB Plus" },
      { label: "Installed Base", value: "750,000+ robots" },
    ],
    svgType: "arm",
  },

  {
    name: "KUKA",
    slug: "kuka",
    category: "Industrial Arms",
    founded: 1898,
    headquarters: "Augsburg, Germany",
    parentCompany: "Midea Group",
    overview: [
      "KUKA was founded in 1898 in Augsburg, Germany — originally as a supplier of acetylene gas and later welding equipment. The company entered robotics in 1973 with FAMULUS, one of the world's first electromechanically driven industrial robots. Over the following five decades KUKA became one of the defining companies of industrial automation, supplying the orange-painted arms that are ubiquitous in European automotive manufacturing. In 2016, KUKA was acquired by Chinese appliance manufacturer Midea Group for approximately €4.5 billion in a deal that gave Midea access to KUKA's automation technology for its own manufacturing operations while KUKA continued to operate as an independent business unit.",
      "KUKA's robot portfolio spans multiple market segments. The KR AGILUS series covers high-speed small-part applications in electronics and pharmaceuticals, with cycle times measured in fractions of a second. The KR CYBERTECH series covers mid-range general manufacturing. The KR QUANTEC series covers large-payload automotive applications including body shop, press tending, and powertrain assembly. The LBR iiwa (intelligent industrial work assistant) is KUKA's collaborative robot platform — a 7-axis redundant arm with integrated joint torque sensing that enables compliance, force-controlled assembly, and safe human-robot contact without external force sensors.",
      "KUKA's go-to-market advantage has historically been its software ecosystem. The KUKA.Sunrise and KUKA.System Software platforms provide a Java-based programming environment (unique in the industrial robot world, which is dominated by proprietary languages) for the LBR iiwa, and WorkVisual provides an integrated configuration and diagnostics environment for KUKA's full product line. KUKA's KUKA Connect cloud platform enables remote monitoring, performance analytics, and predictive maintenance across fleets. The company has a strong position in automotive, where its installed base in European OEM body shops is enormous, and is actively expanding into electronics, logistics, and food & beverage.",
    ],
    robots: [
      { name: "LBR iiwa", desc: "7-axis collaborative robot with integrated joint torque sensing across all axes. Available in 7kg and 14kg payload variants. Used for force-controlled assembly, human-robot collaboration, and tasks requiring compliant contact without rigid fixturing." },
      { name: "KR AGILUS", desc: "High-speed small-part robot for electronics, pharmaceuticals, and precision assembly. 6 kg payload, 706mm reach, ±0.03mm repeatability. Designed for maximum cycle frequency in tight cell layouts." },
      { name: "KR QUANTEC", desc: "Heavy-payload series covering 120–270kg and reaches up to 3.9m. Standard platform for automotive body shop, press lines, and general heavy manufacturing requiring long reach and high payload capacity." },
      { name: "KR CYBERTECH", desc: "Versatile mid-range family covering 6–22kg payloads for arc welding, machine tending, and assembly. The most widely deployed KUKA platform outside the automotive sector." },
    ],
    technology: [
      "KUKA's LBR iiwa is built around its most distinctive technical innovation: 7-axis joint torque sensing at every joint, enabling the robot to sense contact forces directly from the joint motors rather than requiring wrist-mounted force-torque sensors. This architecture enables compliant insertion tasks, safe operation without hard guarding when configured correctly, and hand-guided programming — an operator can physically push the arm through the desired motion path and the robot records the trajectory. The 7th axis (redundancy) allows the arm to navigate around obstacles while keeping the end effector on path, a capability useful in crowded assembly cells.",
      "KUKA's KUKA.Sim simulation software provides digital twin capability for cell layout, reachability analysis, cycle time simulation, and offline programming — all linked to the real controller so that validated simulation programs transfer directly to production without manual reprogramming. The KUKA.RobotSensorInterface allows integration with external sensors, vision systems, and force-torque controllers. KUKA is actively developing machine learning capabilities within its controller ecosystem, including adaptive motion planning that adjusts joint trajectories in response to detected force feedback during assembly operations.",
    ],
    deployment: "KUKA robots are available through KUKA's direct sales organization, authorized system integrators, and the KUKA value partner network. Standard delivery times range from 10–20 weeks. Pricing spans from approximately $40,000 for AGILUS cobots to over $300,000 for large QUANTEC systems. KUKA's service network covers 75+ countries with local spare parts depots and field service engineers. The Midea Group ownership has expanded KUKA's manufacturing capacity and supply chain reach, improving lead time performance in recent years.",
    industries: ["Automotive", "Electronics & Semiconductor", "Aerospace", "Food & Beverage", "Plastics", "Healthcare & Pharma"],
    rbotNote: "RBOT deploys KUKA systems for customers requiring sophisticated force-controlled assembly or collaborative work cell design. The LBR iiwa is our recommended platform for precision assembly tasks — electronics insertion, medical device assembly, or consumer goods assembly — where compliant contact and torque transparency are critical process requirements. Our team handles KUKA.Sunrise programming, WorkVisual cell configuration, KUKA.Sim digital twin development, and ERP/MES integration via KUKA Connect.",
    specs: [
      { label: "Payload Range", value: "3 – 1,300 kg" },
      { label: "Reach Range", value: "0.6 – 3.9 m" },
      { label: "Repeatability", value: "±0.02 – 0.06 mm" },
      { label: "LBR iiwa Axes", value: "7 (redundant)" },
      { label: "Controller", value: "KR C5 / Sunrise" },
      { label: "Founded", value: "1898" },
    ],
    svgType: "arm",
  },

  {
    name: "Universal Robots",
    slug: "universal-robots",
    category: "Cobots",
    founded: 2005,
    headquarters: "Odense, Denmark",
    parentCompany: "Teradyne",
    overview: [
      "Universal Robots was founded in 2005 at the University of Southern Denmark with a thesis that was radical at the time: that robotic automation should be accessible to manufacturers of any size, not just automotive OEMs with dedicated robot engineering teams. The UR5, launched in 2008, was the world's first commercially successful collaborative robot — a lightweight, easily deployed arm that could be installed and programmed by a production technician in hours rather than weeks. Teradyne acquired Universal Robots in 2015 for $285 million, and the company has grown from that acquisition point to over 75,000 cobots deployed globally — more than any other manufacturer in the collaborative segment.",
      "Universal Robots' product line today covers a wide range of payloads through the e-Series: the UR3e (3 kg), UR5e (5 kg), UR10e (10 kg), UR16e (16 kg), and UR20 (20 kg). All share the same URSoft programming environment, the same modular accessories ecosystem, and the same mounting interface — meaning that engineers who know one UR cobot know them all, and that end-of-arm tooling developed for a UR5e transfers directly to a UR20. This standardization across the product line is a significant advantage for multi-site enterprise customers managing large fleets across different production tasks.",
      "The UR+ ecosystem is one of Universal Robots' most powerful competitive assets. UR+ is a certified third-party accessories marketplace — grippers, sensors, vision systems, software, and application-specific kits — with over 300 certified products from ecosystem partners. This means a customer deploying a UR cobot for, say, palletizing can find a certified plug-and-play palletizing software package from a UR+ partner and configure the application without custom programming. The ecosystem effectively crowdsources application development, giving UR cobots a time-to-productivity advantage that purpose-built systems can rarely match.",
    ],
    robots: [
      { name: "UR5e", desc: "The world's most deployed collaborative robot. 5 kg payload, 850mm reach, ±0.03mm repeatability. Used in light assembly, machine tending, quality inspection, and electronics manufacturing. Baseline platform for most UR cobot integrations." },
      { name: "UR10e", desc: "Mid-range cobot with 10 kg payload and 1300mm reach. Common in packaging, palletizing, and machine tending where a slightly larger workspace is needed. Shares tooling and programming environment with UR5e." },
      { name: "UR20", desc: "High-payload cobot at 20 kg with a 1750mm reach — closing the gap between cobots and traditional industrial arms. Designed for palletizing, heavy machine tending, and tasks where payload previously required a caged industrial robot." },
      { name: "UR3e", desc: "Compact 3 kg payload cobot for small-part assembly, screwdriving, and benchtop applications in electronics and medical device manufacturing. At 11.2 kg total weight, it can be repositioned by a single operator in minutes." },
    ],
    technology: [
      "UR cobots run on URSoft, the company's graphical programming environment accessible through the PolyScope interface on an integrated tablet. PolyScope uses a waypoint-and-move-type paradigm: operators define robot positions by jogging the arm to the desired location and recording the waypoint, then select motion types (linear, joint, circular) between waypoints. For more complex logic, URScript provides a Python-like scripting language. Both interfaces run on the same controller hardware and can be combined — graphical programs can call URScript functions and vice versa. This layered approach gives novice users immediate productivity while giving advanced users full programmability.",
      "Force control and contact sensitivity are built into every UR cobot through the e-Series controller's integrated 6-axis force-torque sensing at the wrist. This enables force-guided assembly (inserting pegs, pressing components to seats, thread-starting fasteners), compliant surface following for sanding and polishing, and safe stop when the robot contacts a human. UR's safety system provides 15 configurable safety parameters including speed limits, force limits, and power limits that can be adjusted for different operational zones without external safety PLCs. The cobots are CE, UL, and CSA certified for collaborative operation when configured within defined safety parameters.",
    ],
    deployment: "UR cobots are available globally through Universal Robots' network of over 1,000 authorized distributors and system integrators. The UR3e starts at approximately $35,000; the UR5e at around $45,000; the UR10e at $52,000; the UR16e at $57,000; and the UR20 at $65,000 for the base robot. End-of-arm tooling, controller, and application software add to total system cost. Lead times are typically 4–8 weeks from stock at distributor level. Universal Robots provides UR Academy free online training, and most customers deploy their first UR cobot without a system integrator.",
    industries: ["Electronics Assembly", "Machine Tending", "Packaging & Palletizing", "Quality Inspection", "Food & Beverage", "Metal Fabrication", "Medical Devices"],
    rbotNote: "RBOT deploys UR cobots as the default entry point for manufacturers taking their first step into robotic automation — particularly SMBs and mid-market manufacturers who lack dedicated robotics engineering staff. We handle application selection from the UR+ ecosystem, end-of-arm tooling specification, cell design, safety parameter configuration, and the operator training needed to get production staff comfortable programming and redeploying the arm independently. For enterprise fleet deployments, RBOT provides centralized fleet monitoring and software version management across all customer UR cobots.",
    specs: [
      { label: "Payload Range", value: "3 – 20 kg" },
      { label: "Reach Range", value: "500 – 1750 mm" },
      { label: "Repeatability", value: "±0.03 mm" },
      { label: "UR+ Partners", value: "300+ certified" },
      { label: "Programming", value: "PolyScope / URScript" },
      { label: "Deployed Units", value: "75,000+" },
    ],
    svgType: "arm",
  },

  // ─── AMR ─────────────────────────────────────────────────────

  {
    name: "Locus Robotics",
    slug: "locus-robotics",
    category: "AMR",
    founded: 2014,
    headquarters: "Wilmington, MA",
    parentCompany: null,
    overview: [
      "Locus Robotics was founded in 2014 in Wilmington, Massachusetts by Bruce Welty, who had previously founded and sold warehouse automation company Quiet Logistics. Unlike many robotics companies founded by engineers or researchers, Locus was founded by a logistics operator — and that domain expertise is reflected in every aspect of the product. Locus built LocusBot specifically to solve the problem that Welty had experienced firsthand: the physical movement of human pickers through large warehouses during order fulfillment is the single largest labor cost in e-commerce logistics, and it grows proportionally with pick volume. LocusBot is designed to eliminate that walking labor.",
      "The LocusBot system works by pairing each human picker with one or more robots. The human stays stationary or moves minimally while the robot brings work to them — navigating to the correct pick location, presenting a tote, and then carrying the filled tote to the next processing step autonomously. This human-robot collaboration model, sometimes called goods-to-person or bot-to-picker, preserves human judgment and dexterity for the actual picking action while automating the walking and transport. Locus customers typically report labor productivity improvements of 2x–3x — the same pick throughput with half the workers, or twice the throughput with the same headcount.",
      "Locus has deployed at scale with major third-party logistics providers including DHL, CEVA, Quiet Logistics, and American Eagle Outfitters, accumulating millions of pick miles across dozens of facilities worldwide. The company's Locus Origin and newer Vector platforms have been deployed in facilities ranging from 50,000 to 1,000,000+ square feet, serving e-commerce, apparel, healthcare, and consumer goods verticals. Locus's fleet management software, LocusOS, coordinates hundreds of robots simultaneously — managing charging cycles, prioritizing orders, assigning bots to pickers, and providing real-time performance dashboards for operations managers.",
    ],
    robots: [
      { name: "LocusBot Origin", desc: "Core warehouse pick AMR designed for goods-to-picker collaboration. Navigates autonomously to pick locations, presents totes to human pickers, and transports filled orders to pack stations. Carries up to 68 kg payload at up to 1.5 m/s." },
      { name: "Locus Vector", desc: "High-speed, high-throughput AMR designed for dense fulfillment operations with faster movement and improved battery management. Optimized for facilities processing 10,000+ units per day with compressed pick windows." },
      { name: "LocusBuddy", desc: "Smaller collaborative AMR for human-robot co-working in tight aisles and multi-floor facilities. Designed for facilities where Origin is too large, including specialty retail distribution and healthcare supply chain environments." },
    ],
    technology: [
      "LocusBot uses SLAM (Simultaneous Localization and Mapping) for autonomous navigation — building and maintaining a real-time map of the facility using onboard lidar and camera sensors, without requiring floor tape, QR codes, or facility modifications. The navigation system handles dynamic environments: moving humans, forklifts, product on the floor, and temporary obstructions. The fleet coordination algorithm, running in LocusOS, solves a continuous multi-robot routing optimization problem — assigning the right robot to the right task, coordinating traffic in shared aisles, and scheduling charging cycles to maintain fleet availability above 95% during peak shifts.",
      "LocusOS integrates natively with major warehouse management systems including Manhattan Associates, Blue Yonder, SAP EWM, and Oracle WMS through standard order interfaces. The integration allows LocusOS to receive order releases directly from the WMS, sequence pick tasks across the robot fleet, and send completion confirmations back — creating a closed-loop workflow without manual intervention. Locus's analytics layer provides real-time and historical performance data including picks per hour, robot utilization, charging efficiency, aisle congestion patterns, and labor productivity metrics that operations managers can use for continuous improvement.",
    ],
    deployment: "Locus Robotics deploys through a Robotics-as-a-Service model — customers pay a monthly fee based on fleet size and pick volume rather than purchasing robots outright. This model includes hardware, software, deployment, integration, maintenance, and support. Typical deployments start with 20–50 robots for a mid-size facility and scale to 200+ robots for large operations. Onsite installation and integration typically takes 4–8 weeks from project kickoff to go-live. Locus has a global deployment and support capability with active operations across North America and Europe.",
    industries: ["E-Commerce Fulfillment", "Retail Distribution", "3PL / 4PL", "Healthcare Supply Chain", "Consumer Goods", "Apparel & Fashion Logistics"],
    rbotNote: "RBOT deploys Locus Robotics systems for fulfillment operators who need proven, large-scale AMR infrastructure with WMS integration and a RaaS cost model. We manage the WMS integration layer, negotiate fleet size with Locus based on customer pick volume and shift patterns, and handle the facility network infrastructure (WiFi coverage, battery charging station placement, staging area design) needed for reliable fleet operation. RBOT's managed service covers performance monitoring, SLA reporting, and the operational coaching needed to get pick teams productive in robot-assisted workflows.",
    specs: [
      { label: "Payload Capacity", value: "68 kg" },
      { label: "Max Speed", value: "1.5 m/s" },
      { label: "Battery Life", value: "9 hours" },
      { label: "Navigation", value: "SLAM (lidar + camera)" },
      { label: "Fleet Size (typical)", value: "20–200+ per facility" },
      { label: "Deployment Model", value: "Robotics-as-a-Service" },
    ],
    svgType: "amr",
  },
];

/** Quick lookup map by slug */
export const manufacturerBySlug = Object.fromEntries(
  manufacturerData.map((m) => [m.slug, m])
);
