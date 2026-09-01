export interface RobotUseCase {
  title: string;
  desc: string;
}

export interface RobotSpec {
  label: string;
  value: string;
}

export interface RobotTypeData {
  title: string;
  slug: string;
  tagline: string;
  intro: string[];
  howItWorks: string[];
  useCases: RobotUseCase[];
  industries: string[];
  economics: string[];
  deploymentReqs: string;
  rbotApproach: string;
  specs: RobotSpec[];
  manufacturers: string[];
}

export const robotTypeData: Record<string, RobotTypeData> = {
  humanoid: {
    title: "Humanoid Robots",
    slug: "humanoid",
    tagline: "General-purpose bipedal robots that perform human-scale tasks in environments built for people.",
    intro: [
      "The commercial humanoid robot has crossed from science fiction into deployable industrial asset. Modern humanoids from manufacturers like Figure, Agility Robotics, and Apptronik stand 1.5 to 1.8 meters tall, weigh between 55 and 90 kilograms, and are purpose-built for the unstructured environments found in warehouses, manufacturing floors, and logistics operations. Unlike fixed automation that requires tasks to be engineered around the machine, a humanoid can walk through a standard doorway, operate a standard shelf, and be re-tasked across different workflows without facility modification.",
      "The commercial argument for humanoids is adaptability at human-scale. Traditional industrial automation forces facilities to redesign around the robot — conveyors at specific heights, arms bolted to precise floor positions. A humanoid, by contrast, can be re-deployed from pallet movement in the morning to kitting operations in the afternoon. Early deployments at BMW, Amazon, and GE Aerospace have validated that humanoids handle genuine production tasks with measurable throughput. Hardware costs are declining from over $200,000 toward the $70,000–$100,000 range per unit as the manufacturing ecosystem matures.",
      "RBOT's role in humanoid deployment is vendor-neutral coordination. We evaluate your facility layout, task catalog, labor economics, and integration requirements before recommending a platform. We handle the site preparation, software integration with your WMS and ERP, employee training, and ongoing fleet management — the operational layer that every enterprise customer needs but that humanoid manufacturers are still building out. Whether you are running a pilot with two units or scaling to a full fleet, RBOT manages the complexity from selection through steady-state operation.",
    ],
    howItWorks: [
      "Humanoid robots use an integrated sensor stack: stereo cameras and depth sensors map the environment in real time, IMUs track balance and orientation, and proprioceptive joint sensors monitor force and position across every degree of freedom. Onboard AI inference engines — typically NVIDIA Orin-class hardware running at 200–350 TOPS — execute vision models, whole-body control, and motion planning simultaneously. The locomotion stack maintains dynamic balance through feedback loops operating at 500–1,000Hz, enabling walking on uneven surfaces, stair climbing, and recovery from unexpected perturbation.",
      "Task execution relies on learned manipulation policies trained on large datasets of human demonstration, augmented with simulation-generated data at scale. The robot perceives an object, plans a grasp trajectory, moves its arm to the target, and applies controlled force using torque-sensing joints and fingertip tactile sensors. Upper-level task management connects to WMS or ERP systems to receive work orders, report completions, and escalate exceptions. Fleet software coordinates multiple units across a facility, handling charging schedules, task queuing, and operational handoffs automatically.",
    ],
    useCases: [
      {
        title: "Warehouse Tote and Pallet Movement",
        desc: "Humanoids move totes, cases, and pallets across warehouse floors without infrastructure changes. They navigate dynamic aisles, avoid personnel, and interface with existing racking — no conveyor modifications required. Throughput targets of 600–800 tote moves per shift are achievable on current-generation platforms.",
      },
      {
        title: "CNC and Manufacturing Machine Tending",
        desc: "Loading and unloading CNC machines, injection molds, and presses is a high-repetition, low-ergonomic task that humanoids handle effectively. The robot opens the machine door, extracts the finished part, loads the next blank, and closes the door — exactly as a human operator would. Cycle times align with machine rates of 60–300 seconds per part.",
      },
      {
        title: "Kitting and Assembly Support",
        desc: "Humanoids pick components from bins and organize them into kits for downstream assembly lines. The task requires grasping diverse part geometries from cluttered bins — a manipulation challenge that current-generation dexterous hands increasingly solve. Kitting robots work alongside human assemblers without requiring new workstation layouts.",
      },
      {
        title: "Retail Backroom Restocking",
        desc: "Backroom-to-floor restocking involves mixed-SKU cases, changing planograms, and narrow retail aisles — a task environment that suits humanoids better than fixed arms or AMRs with limited manipulation. A humanoid can retrieve a case from the backroom shelf, open the sales floor door, and place product on the shelf front without any infrastructure modification.",
      },
      {
        title: "Automotive Line Supply",
        desc: "Humanoids supply assembly lines with parts from lineside supermarkets, reducing the need for tugger operators. They navigate plant floors safely alongside workers, pick specific part numbers from racks, and deliver them to the point of use on the line. Integration with MES systems ensures part delivery is sequenced to production takt.",
      },
      {
        title: "Quality Inspection Walks",
        desc: "Equipped with vision AI, humanoids walk inspection routes, photographing assemblies, reading serial numbers, and flagging defects to quality management systems. The bipedal form factor allows inspection from multiple angles — reaching over equipment, crouching to check underside welds — without requiring dedicated inspection fixtures.",
      },
      {
        title: "Construction Material Handling",
        desc: "On construction sites, humanoids handle material movement tasks like moving bricks, lumber, and pipe to specific work areas. The ability to navigate unprepared ground, climb temporary stairs, and operate in the same space as human crews makes humanoids a candidate for repetitive site logistics tasks that are both dangerous and difficult to automate with conventional equipment.",
      },
    ],
    industries: [
      "Warehousing & Distribution",
      "Automotive Manufacturing",
      "E-Commerce Fulfillment",
      "General Manufacturing",
      "Retail",
      "Construction",
      "Food & Beverage",
      "Logistics",
    ],
    economics: [
      "The labor comparison is the primary financial driver for humanoid ROI. A warehouse associate handling pallet movement earns $38,000–$52,000 per year in fully loaded labor cost. A humanoid robot at $80,000 in hardware cost, $15,000–$20,000 per year in maintenance and platform fees, and financed over four years costs roughly $35,000–$40,000 per year to operate — already approaching labor cost parity with the ability to work three shifts without overtime. As hardware costs decline and operational maturity improves, the economics will strengthen considerably by 2027.",
      "Payback periods for humanoid pilots currently run 24–36 months for facilities with clear, high-repetition task profiles. The risk profile is different from traditional automation: humanoids are re-deployable if one task gets automated another way, which traditional fixed automation is not. RaaS structures from RBOT convert the capital expenditure into a predictable monthly operating cost of $6,000–$9,000 per robot per month, which typically achieves positive unit economics against a single displaced shift of labor within 12–18 months.",
    ],
    deploymentReqs:
      "Humanoid deployments require a minimum 2.0-meter ceiling clearance and standard concrete or sealed flooring. No infrastructure modifications are required, though a dedicated charging station footprint of approximately 1.5 m² per robot is needed. Wireless coverage — WiFi 6 with adequate AP density — must cover all operational zones. Initial deployment includes a site survey, task mapping, simulation validation, and a 4–6 week ramp period during which operational throughput increases as the robot's learned model of the specific environment improves.",
    rbotApproach:
      "RBOT begins every humanoid engagement with a task economics analysis — mapping your facility's repetitive, high-volume tasks against each platform's current capabilities and comparing the fully loaded cost against your actual labor costs. We are vendor-neutral across all major humanoid platforms, so our recommendation is always the best technical fit for your operation, not the platform we have a preferred margin on. We handle system integration with your WMS, ERP, and safety systems, manage the ramp period, and provide fleet monitoring and maintenance through steady-state operations.",
    specs: [
      { label: "Payload Capacity", value: "15–25 kg per arm" },
      { label: "Walking Speed", value: "1.4–2.0 m/s" },
      { label: "Battery Runtime", value: "4–8 hours active use" },
      { label: "Arm Degrees of Freedom", value: "6–7 per arm" },
      { label: "Height / Weight", value: "1.6–1.8 m / 55–90 kg" },
      { label: "Positioning Accuracy", value: "±2–5 mm (manipulation)" },
      { label: "Onboard AI Compute", value: "200–350 TOPS" },
      { label: "Charging Time", value: "45–90 min to full" },
    ],
    manufacturers: [
      "Figure",
      "Agility Robotics",
      "Apptronik",
      "Boston Dynamics",
      "Unitree",
      "NEURA Robotics",
      "Sanctuary AI",
      "1X Technologies",
      "Tesla (Optimus)",
      "Physical Intelligence",
    ],
  },

  amr: {
    title: "Autonomous Mobile Robots",
    slug: "amr",
    tagline: "Self-navigating mobile platforms that move materials, inventory, and payloads without fixed infrastructure.",
    intro: [
      "Autonomous Mobile Robots are the workhorses of modern logistics and warehouse operations. Unlike their predecessors — fixed-track AGVs that required floor tape or embedded magnets — AMRs navigate dynamically using onboard sensors, computer vision, and SLAM algorithms that build and update maps of their environment in real time. They can share space with human workers, reroute around obstacles, and adapt to changing facility layouts without reprogramming. This flexibility is why AMR adoption has grown faster than any other category of industrial robotics over the past five years.",
      "The commercial case for AMRs is well-established. A facility running 10 to 20 AMRs can eliminate 15 to 30 operator positions engaged in material movement — the walking, pushing, and driving that constitutes 30 to 60 percent of direct labor hours in a typical distribution center. AMR-equipped facilities consistently demonstrate pick rate improvements of 200 to 400 percent over manual operations, with order accuracy rates exceeding 99.9 percent. The technology is mature enough that many AMR platforms carry multiple-year track records at scale with thousands of units per facility.",
      "RBOT evaluates AMR deployments across payload, speed, navigation technology, and integration capability — not just list price. We source across all major AMR manufacturers, match the platform to your specific task profile and facility layout, and handle the WMS integration that determines whether the AMR fleet actually improves your operation or just moves the bottleneck. Our deployment process includes warehouse layout analysis, traffic simulation, and a phased rollout that validates economics before scaling.",
    ],
    howItWorks: [
      "AMRs navigate using a combination of 2D LiDAR, RGB-D depth cameras, and inertial measurement units. SLAM algorithms continuously build and update a map of the facility, locating the robot within centimeters using feature-matching against the known map. When a new task is assigned via the fleet management software, the AMR calculates the optimal path to the pickup location using a dynamic planner that accounts for other robots, pedestrians, and temporary obstacles. Safety systems — including laser scanners and proximity sensors — enforce safe approach speeds and emergency stops.",
      "AMR fleets operate under a central traffic management layer that prevents deadlocks, allocates charging, and sequences task assignments to maximize throughput. Integration with WMS systems happens via REST API or middleware, allowing the WMS to dispatch tasks directly to the AMR fleet and receive location and completion confirmations in real time. Advanced fleets incorporate AI-based demand prediction to pre-position robots near zones where order waves are about to begin, reducing empty travel time and improving overall throughput.",
    ],
    useCases: [
      {
        title: "Goods-to-Person Order Picking",
        desc: "AMRs bring shelving pods or totes to stationary pick stations, eliminating the walking that consumes 60–70 percent of a picker's shift time. Pickers work at ergonomic stations while AMRs cycle shelving units from storage to station and back. This approach consistently achieves pick rates of 400–600 units per hour versus 80–120 for walk-and-pick operations.",
      },
      {
        title: "Inter-Zone Material Transport",
        desc: "In manufacturing facilities, AMRs run continuous loops supplying production lines with raw materials and removing finished assemblies. The robot receives a transport request from the MES or ERP, picks up the cart or pallet, and delivers it to the designated station — eliminating the need for fork truck operators or tugger drivers on predictable routes.",
      },
      {
        title: "Hospital Supply Chain Logistics",
        desc: "Healthcare facilities use AMRs to transport medications, lab specimens, linens, and sterile supplies through corridors that are shared with patients and staff. Hospital AMRs integrate with elevator systems, automatic doors, and nurse call systems to navigate clinical environments autonomously, reducing delivery delays and freeing nursing staff from logistics tasks.",
      },
      {
        title: "Retail Backroom and Floor Operations",
        desc: "AMRs in retail environments restock shelves from backroom inventory, transport product to floor replenishment teams, and conduct inventory auditing runs using onboard barcode scanners. Night-cycle operations run completely autonomously, allowing stores to open with shelves fully stocked without overnight manual labor.",
      },
      {
        title: "E-Commerce Fulfillment Waves",
        desc: "High-velocity e-commerce fulfillment relies on AMR fleets that can process order waves of thousands of items per hour. Robots are dynamically allocated across zones as wave patterns shift throughout the day, with the fleet management software redistributing capacity based on real-time order queue depth and zone pick density.",
      },
      {
        title: "Airport Baggage and Cargo Logistics",
        desc: "AMRs move baggage and cargo across airport ground-level operations, reducing the motorized vehicle traffic that creates safety risks in congested terminals. Baggage AMRs integrate with airline check-in systems to confirm routing and track each bag's location through the sort process.",
      },
      {
        title: "Manufacturing Supermarket Replenishment",
        desc: "Lean manufacturing cells rely on precisely timed material replenishment from lineside supermarkets. AMRs automate this kanban pull signal to physical delivery loop, picking the right part number in the right quantity and delivering it to the point of use on the production line at the moment it is needed.",
      },
    ],
    industries: [
      "Warehousing & Distribution",
      "E-Commerce Fulfillment",
      "Manufacturing",
      "Healthcare",
      "Retail",
      "Automotive",
      "Logistics & 3PL",
      "Airports & Cargo",
    ],
    economics: [
      "AMR deployments achieve payback periods of 12 to 24 months in most warehouse and fulfillment environments — among the fastest of any robotics category. A fleet of 20 AMRs replacing 15 material handling positions at $45,000 fully loaded labor cost saves $675,000 per year in direct labor. Hardware cost for mid-range AMR platforms runs $25,000–$75,000 per unit, with annual maintenance and software fees of $4,000–$8,000 per unit. The combined capital and operating cost of a 20-unit fleet typically falls below the labor cost it displaces within 18 months.",
      "RaaS pricing for AMRs runs $2,500–$5,000 per robot per month for all-inclusive deployments, which often achieves positive unit economics against a single eliminated operator position. The key variable is utilization: AMRs add most value when they operate 20+ hours per day across multiple shifts. Facilities running single-shift operations should model carefully, as the economics favor AMRs most strongly in 2-shift and 3-shift environments where labor cost multiples are highest.",
    ],
    deploymentReqs:
      "AMR deployments require facility mapping (typically a 2–4 hour scan), WiFi 6 coverage with adequate AP density and a VLAN for robot traffic, and floor surfaces that are smooth, clean, and free of reflective pooling. Minimum aisle widths of 1.5 meters for single-direction traffic and 2.5 meters for bidirectional are standard. Charging infrastructure — 1 charger per 3–4 robots — should be placed near high-frequency pickup zones. WMS API integration or middleware is required to dispatch tasks; RBOT handles this integration as part of every deployment.",
    rbotApproach:
      "RBOT's AMR selection process starts with a facility throughput model: we map your task types, travel distances, floor layout, and peak demand patterns to identify the right payload class, navigation type, and fleet size. We are certified deployment partners for the leading AMR platforms and source independently — the fleet we recommend is the one that delivers the best ROI for your specific operation, not the one with the largest partner incentive. RBOT handles WMS integration, floor mapping, traffic management configuration, staff training, and fleet monitoring through steady-state operations.",
    specs: [
      { label: "Payload Capacity", value: "200 kg – 1,500 kg (varies by platform)" },
      { label: "Navigation Technology", value: "SLAM + LiDAR + Computer Vision" },
      { label: "Loaded Travel Speed", value: "1.5–2.0 m/s" },
      { label: "Battery Runtime", value: "8–12 hours, 30-min fast charge" },
      { label: "Obstacle Detection", value: "360° LiDAR + 2D safety bumpers" },
      { label: "Positioning Accuracy", value: "±5–10 mm" },
      { label: "Fleet Size (typical)", value: "5–500+ units per facility" },
      { label: "Connectivity", value: "WiFi 6, optional 5G" },
    ],
    manufacturers: [
      "Locus Robotics",
      "Fetch Robotics (Zebra)",
      "6 River Systems (Shopify)",
      "MiR (Mobile Industrial Robots)",
      "Geek+",
      "Hai Robotics",
      "Quicktron",
      "Seegrid",
      "AutoGuide",
      "Omron Mobile Robotics",
    ],
  },

  "robotic-arms": {
    title: "Robotic Arms",
    slug: "robotic-arms",
    tagline: "Precision articulated arms for high-speed, high-repeatability industrial automation at any scale.",
    intro: [
      "Industrial robotic arms are the most mature and widely deployed category of manufacturing automation, with over four million units installed globally. A 6-axis articulated arm can repeat a motion to within 0.01 millimeters indefinitely, operate at speeds no human could match, and work in environments — extreme heat, toxic fumes, heavy loads — that would be unsafe for personnel. They are the foundation of automotive, electronics, food processing, and aerospace manufacturing, and their capabilities have expanded dramatically with the integration of AI-based vision systems, force-torque sensing, and offline programming tools.",
      "Modern robotic arms are no longer only accessible to large manufacturers. Mid-size and smaller facilities now deploy arms routinely for tasks like case packing, palletizing, welding, and machine tending, with payback periods as short as 12 months in high-volume applications. The economics are driven by three factors: arms work 24 hours per day without fatigue, repeatability eliminates defects caused by process variation, and a single arm can cover tasks previously requiring 2 to 4 operators across multiple shifts.",
      "RBOT sources robotic arms from all major manufacturers — ABB, FANUC, KUKA, Yaskawa, and others — and matches the arm specification to the task: payload, reach, speed, accuracy, and environmental requirements. Our integration work covers end-of-arm tooling design, vision system integration, safety fencing and collaborative workspace design, and connection to your MES or ERP. We commission every installation with production rate validation before handoff to your operations team.",
    ],
    howItWorks: [
      "A 6-axis articulated arm achieves its working range through six rotational joints, each driven by a servo motor with integrated encoder feedback. The controller executes motion programs — either taught by operator jogging or generated by offline programming software — and sends position commands to each joint at update rates of 250Hz or faster. End-of-arm tooling (grippers, welding torches, dispensing heads, vision cameras) interfaces to the robot's tool flange and is typically controlled through I/O signals or a fieldbus connection to the robot controller.",
      "Modern arms integrate vision systems to handle variation in part position and orientation. A 2D or 3D camera identifies the workpiece, the vision system calculates its position and angle, and the robot controller adjusts the motion path accordingly. Force-torque sensors at the wrist allow the arm to apply precise force during insertion, polishing, or deburring operations, and to detect collisions and stop safely. OPC-UA and MQTT interfaces allow arms to report cycle counts, fault codes, and production rates to MES and analytics platforms in real time.",
    ],
    useCases: [
      {
        title: "High-Speed Pick and Place",
        desc: "Parallel or SCARA robots in packaging lines move components from infeed conveyors to trays or boxes at rates of 120–180 picks per minute — far beyond human capability. Vision-guided systems handle variable part presentation, adjusting pick coordinates for each cycle. This is among the highest-ROI applications for robotic arms in consumer goods and electronics.",
      },
      {
        title: "Arc and Spot Welding",
        desc: "Robotic welding systems produce consistent, repeatable weld quality at high duty cycles and in positions that would be ergonomically damaging for human welders. Automotive body shops run hundreds of robot welders per facility, and the technology is increasingly accessible for job shops and mid-size manufacturers through collaborative welding cells and offline programming that reduces changeover time.",
      },
      {
        title: "Palletizing and Depalletizing",
        desc: "End-of-line palletizers use large-payload arms (100–300 kg payload) to build mixed or uniform pallet loads from cases, bags, or bundles arriving from production lines. Vision-guided depalletizing handles mixed SKU pallets from suppliers, identifying each case and picking it for downstream sortation or putaway — a task that previously required manual labor due to the variety of inbound configurations.",
      },
      {
        title: "CNC Machine Tending",
        desc: "Robotic arms load raw materials into CNC machines, injection molds, or presses, and unload finished parts — running unattended through overnight and weekend shifts. A single arm can tend multiple machines if cycle times allow, and integration with the machine tool controller enables the robot to request the next part when the machine completes its cycle.",
      },
      {
        title: "Electronics Assembly and Screwdriving",
        desc: "In electronics manufacturing, precision arms insert components, apply adhesives, drive screws, and route cables with repeatability that eliminates the process variation inherent in manual assembly. Collaborative arm variants share workspace with operators for tasks that require a mix of human judgment and robotic precision — such as final assembly verification and selective insertion.",
      },
      {
        title: "Painting and Surface Treatment",
        desc: "Robotic spray painting systems apply consistent coating thickness across complex 3D surfaces, eliminating the overspray waste and exposure risks of manual painting. The robot follows a programmed path at a controlled speed and distance from the surface, with atomization and flow controlled precisely to specification. Automotive OEMs run painting cells 24 hours per day with minimal human intervention.",
      },
      {
        title: "Quality Inspection and Measurement",
        desc: "Arms equipped with laser measurement heads or structured-light sensors perform 100 percent dimensional inspection of parts, measuring hundreds of points per second and comparing results to CAD tolerances. This replaces sampling-based manual inspection, catching defects that manual processes miss and generating traceability data for quality management systems.",
      },
    ],
    industries: [
      "Automotive",
      "Electronics & Semiconductors",
      "Food & Beverage",
      "Aerospace & Defense",
      "Metal Fabrication",
      "Pharmaceuticals",
      "Consumer Goods",
      "Plastics & Rubber",
    ],
    economics: [
      "Industrial robotic arms deliver among the clearest and fastest ROI of any automation technology. A welding robot replacing two operators at $55,000 fully loaded labor cost each saves $110,000 per year. The arm, controller, and basic end-of-arm tooling typically cost $60,000–$180,000 depending on payload and brand, with integration and commissioning adding $30,000–$80,000. Total project costs of $100,000–$250,000 against $100,000+ annual labor savings produce payback periods of 12 to 24 months — a return profile that justifies most capital investment committees.",
      "For facilities that cannot justify the capital, RBOT's RaaS model converts the investment into a monthly operating cost of $3,500–$7,000 per arm including maintenance, software, and support. This is typically less than the hourly labor cost of two full-time operators when annualized, making the economics positive from day one on high-utilization applications. The hidden costs to model carefully are changeover time and tooling flexibility — high-mix, low-volume applications have longer payback periods due to programming and tooling costs per part number.",
    ],
    deploymentReqs:
      "Robotic arm installations require a dedicated, leveled concrete base with anchor bolt capability (ISO 9283 compliant), adequate ceiling clearance for the arm's working envelope at maximum reach, and a safety perimeter compliant with ISO 10218-2. 3-phase power is required for most industrial arm controllers. Environmental conditions (temperature, dust, humidity, and chemical exposure) determine whether a standard IP54 arm is adequate or whether food-grade or EX-rated variants are needed. Integration with upstream and downstream equipment — conveyors, machines, vision systems — should be scoped before installation and validated in simulation.",
    rbotApproach:
      "RBOT's robotic arm deployments begin with a task cycle time analysis — we model the arm's reach, speed, and payload against your part geometry, process steps, and production rate requirement to validate fit before any hardware is selected. We design end-of-arm tooling, specify the vision system, and program the robot using offline simulation before arriving on site, which minimizes installation time and production interruption. Our commissioning process validates production rate and quality metrics against your acceptance criteria, and we provide ongoing support through our remote monitoring platform.",
    specs: [
      { label: "Payload Range", value: "3 kg – 800 kg (varies by model)" },
      { label: "Reach", value: "500 mm – 3,500 mm" },
      { label: "Repeatability", value: "±0.01–0.05 mm" },
      { label: "Axes", value: "6 (standard), up to 8 with external axes" },
      { label: "TCP Speed", value: "Up to 10 m/s" },
      { label: "IP Rating", value: "IP54 standard, IP67 food/wash-down" },
      { label: "Controller Interface", value: "EtherNet/IP, PROFINET, OPC-UA" },
      { label: "Programming", value: "Offline simulation + teach pendant" },
    ],
    manufacturers: [
      "ABB",
      "FANUC",
      "KUKA",
      "Yaskawa",
      "Mitsubishi Electric",
      "Stäubli",
      "Kawasaki Robotics",
      "Denso Robotics",
      "OMRON",
      "Epson Robotics",
    ],
  },

  cobots: {
    title: "Collaborative Robots",
    slug: "cobots",
    tagline: "Safe, flexible robotic arms designed to work alongside human operators in shared workspaces.",
    intro: [
      "Collaborative robots — cobots — are articulated arms purpose-designed to operate safely in the same physical space as human workers without permanent safety guarding. Unlike traditional industrial arms, which require cages and light curtains to protect operators from injury, cobots use integrated force-torque sensing, speed and force limiting, and rounded joint geometries to detect contact with a human and stop immediately. This allows them to be deployed at workbenches, assembly stations, and inspection posts without the floor space and cost of a traditional robot safety enclosure.",
      "The cobot market has grown rapidly because cobots solve the automation problem for operations that traditional industrial robots cannot address: tasks that are mixed with human activity, require frequent re-tasking, or involve workspaces too small for a full safety perimeter. Universal Robots, the category pioneer, established a deployment model where a cobot could be unboxed, mounted, and running its first application in under an hour. That ease of deployment has been matched or exceeded by the current generation of cobots from ABB, FANUC, Techman, and Doosan.",
      "RBOT deploys cobots for human-robot collaboration applications where the task profile is highly variable, the workspace must remain shared with operators, or the ROI cannot justify the infrastructure cost of a traditional robot installation. We scope the risk assessment required by ISO/TS 15066, design the collaborative workspace, configure the cobot's speed and force limits for your specific task and operator proximity requirements, and integrate the cobot with your assembly or quality systems.",
    ],
    howItWorks: [
      "Cobots achieve collaborative safety through a combination of hardware and software. Integrated joint torque sensors monitor the force applied at every joint and trigger an immediate stop if the contact force or power exceeds the limits defined by the ISO/TS 15066 safety specification. The control system enforces TCP speed limits — typically 250 mm/s maximum in collaborative mode — and continuously monitors the robot's working envelope for human presence using external safety scanners or vision systems. This allows safe shared-space operation without guarding, provided the risk assessment confirms that the task and environment meet collaborative operation criteria.",
      "Cobots are programmed through a combination of direct teaching (physically moving the arm to record waypoints), graphical task programming on a tablet interface, and integration with CAD-based offline programming tools. Most modern cobots include built-in vision capabilities — either integrated camera systems or plug-and-play vision partner interfaces — that allow gripper-eye-hand coordination for variable part position and orientation. Force-guided assembly routines use wrist force-torque feedback to complete precision insertions, fastening, and polishing tasks that require tactile feedback to succeed.",
    ],
    useCases: [
      {
        title: "Screw Driving and Fastening",
        desc: "Cobots operate fastening tools at assembly stations, applying precise torque specifications while the human operator positions and aligns the assembly. The cobot handles the repetitive physical motion — driving hundreds of screws per shift at consistent torque — while the operator manages the high-judgment steps of part presentation and quality verification. This is one of the most common cobot applications in electronics and automotive component assembly.",
      },
      {
        title: "Light Assembly and Sub-Assembly",
        desc: "In mixed human-robot assembly cells, cobots handle the physical manipulation tasks — pressing components together, applying adhesives, inserting connectors — while operators perform tasks requiring dexterity and visual judgment. The cobot moves only when the operator's hands are clear of the workspace, creating a natural handoff rhythm that neither the human nor the robot can disrupt.",
      },
      {
        title: "Laboratory Automation",
        desc: "Pharmaceutical and life sciences labs use cobots for pipetting, sample preparation, plate handling, and reagent dispensing. The collaborative design allows scientists to work adjacent to the cobot without halting the process, and the cobot's precision eliminates the pipetting errors that occur with manual liquid handling over long shifts. Cobots in labs integrate with LIMS systems for sample tracking and process logging.",
      },
      {
        title: "Packaging and Case Packing",
        desc: "Cobots pack products into cases, trays, or bags at end-of-line packaging stations, handling the repetitive pick-and-place motions that cause musculoskeletal injuries in manual packers. The collaborative design means no guarding is required at the packing bench, keeping the station compact. Cobots can be re-tasked to a different product configuration in minutes by updating the program and swapping the gripper.",
      },
      {
        title: "Polishing and Surface Finishing",
        desc: "Force-controlled polishing with a cobot produces consistent surface finish quality without the variation inherent in manual polishing. The cobot maintains a constant contact force across the workpiece surface regardless of surface geometry, and applies consistent stroke patterns that a human operator cannot replicate shift after shift. This application is common in aerospace, automotive, and medical device manufacturing.",
      },
      {
        title: "Inspection and Measurement Assistance",
        desc: "Cobots hold parts, fixtures, or gauges in precise orientations while operators perform measurement or inspection tasks, or carry vision and measurement sensors through inspection routines autonomously. The ability to position a camera or probe at the exact same location every cycle eliminates operator-to-operator variation in inspection results.",
      },
    ],
    industries: [
      "Electronics Assembly",
      "Automotive Tier 1 Suppliers",
      "Life Sciences & Pharma",
      "Medical Devices",
      "Consumer Goods",
      "Food & Beverage",
      "Metal Fabrication",
      "Plastics & Rubber",
    ],
    economics: [
      "Cobots are among the most accessible automation investments in terms of upfront cost. Hardware prices range from $25,000 to $65,000 for most collaborative arm platforms, with integration and application engineering adding $15,000 to $40,000 depending on complexity. Total project costs of $40,000 to $100,000 against single-shift labor savings of $45,000 to $55,000 annually yield payback periods of 12 to 24 months. The flexible deployment model means a cobot that has paid off in one application can be redeployed to the next task — unlike fixed automation that becomes stranded if the product line changes.",
      "Cobots generate additional economic value beyond direct labor replacement: they eliminate repetitive strain injury claims (a single RSI case can cost $50,000+), run at consistent quality levels regardless of operator experience or fatigue, and free skilled workers for higher-value tasks. The economic model works best when cobots operate in 2 or 3 shifts — a cobot running 16 hours per day at a process that previously needed two operators generates twice the labor savings of a single-shift deployment against essentially the same fixed cost.",
    ],
    deploymentReqs:
      "Cobot deployments require an ISO/TS 15066-compliant risk assessment for each collaborative application — RBOT handles this as part of every project. The cobot must be mounted on a stable surface capable of handling the reaction forces during deceleration; standard workbench mounting is acceptable for most payload classes. Tool-side electrical and pneumatic connections are required for gripper and process tool power. If the risk assessment identifies scenarios that exceed collaborative safety limits, additional safeguards — speed-and-separation monitoring scanners, presence-sensing devices — are added to the installation.",
    rbotApproach:
      "RBOT's cobot deployments include the ISO/TS 15066 risk assessment as a standard deliverable — not an afterthought. We design the collaborative workspace, configure the safety parameters, select the right gripper or process tool, and program the application before installation day. Cobots are particularly well-suited to RBOT's phased deployment model, where we start with one or two units on a high-priority application, demonstrate ROI, and expand the fleet based on validated results. RBOT provides operator training, ongoing remote monitoring, and application support throughout the deployment lifecycle.",
    specs: [
      { label: "Payload Range", value: "3–30 kg" },
      { label: "Reach", value: "500–1,700 mm" },
      { label: "Repeatability", value: "±0.02–0.05 mm" },
      { label: "Safety Rating", value: "Category 3, PL d (ISO 13849)" },
      { label: "Collaborative Speed Limit", value: "≤250 mm/s TCP (ISO/TS 15066)" },
      { label: "Axes", value: "6" },
      { label: "Deployment Time", value: "30 min – 4 hours (task dependent)" },
      { label: "Weight", value: "18–70 kg (arm only)" },
    ],
    manufacturers: [
      "Universal Robots",
      "ABB (GoFa / YuMi)",
      "FANUC (CRX series)",
      "KUKA (LBR series)",
      "Techman Robot",
      "Aubo Robotics",
      "Doosan Robotics",
      "Kassow Robots",
      "Franka Robotics",
    ],
  },

  warehouse: {
    title: "Warehouse Robots",
    slug: "warehouse",
    tagline: "Specialized robotic systems purpose-built for storage, retrieval, sortation, and fulfillment at scale.",
    intro: [
      "Warehouse robotics is the broadest and fastest-growing segment of the physical automation market, encompassing goods-to-person systems, automated storage and retrieval systems (AS/RS), sortation conveyors, depalletizing cells, and goods-handling AMRs. Unlike generic mobile platforms, warehouse robots are purpose-designed for the specific tasks and throughput rates of modern fulfillment and distribution: handling hundreds of thousands of SKUs, processing order waves of tens of thousands of units per hour, and operating in the high-density storage environments that e-commerce demands.",
      "The driver behind warehouse robot investment is structural: e-commerce has compressed order fulfillment windows to same-day and next-day delivery expectations while simultaneously expanding SKU variety to hundreds of thousands of items per facility. No manual labor model can economically satisfy these constraints at scale. Warehouse automation systems from Symbotic, AutoStore, Geek+, and others have demonstrated storage density improvements of 3 to 6 times versus conventional racking, throughput rates of 500 to 1,000 orders per hour, and order accuracy rates of 99.9 percent or better.",
      "RBOT's warehouse robotics practice evaluates your facility against the full spectrum of available technologies — not just mobile AMRs or just AS/RS, but the right combination for your SKU profile, throughput requirement, building constraints, and budget. We have deployment experience across goods-to-person, automated storage, depalletizing, sortation, and last-mile prep applications, and we provide the integration work to connect these systems to your WMS and order management platform.",
    ],
    howItWorks: [
      "Automated warehouse systems operate on a task orchestration model: the WMS receives an order, decomposes it into pick tasks, and dispatches robots to retrieve the items from storage. In goods-to-person systems, storage robots retrieve the correct shelf pod or bin and deliver it to a stationary pick station. In AS/RS grid systems, shuttle robots operating on a 3D grid retrieve bins from deep within the storage cube and deliver them via lifts to workstations at the grid perimeter. Sortation systems use conveyor networks and robotic diverters to route single items to the correct shipping lane after picking.",
      "Fleet management software coordinates dozens to hundreds of robots simultaneously, preventing traffic conflicts, optimizing charging cycles, and maintaining throughput targets across the shift. Modern systems include AI-based demand forecasting that pre-positions high-velocity SKUs for faster retrieval and rebalances storage locations dynamically as order patterns shift. Integration with ERP and WMS provides real-time inventory visibility, replenishment triggers, and outbound order status — eliminating the disconnects between warehouse execution and enterprise planning that plague manual operations.",
    ],
    useCases: [
      {
        title: "Goods-to-Person Order Fulfillment",
        desc: "Mobile shelving robots bring inventory pods to stationary operator stations, eliminating the walking that consumes 60 percent of manual picking time. Operators scan, pick, and consolidate at ergonomic stations while robots handle all travel. Pick rates of 400–800 units per hour are standard, versus 60–120 for walk-and-pick operations. ROI is typically achieved within 18 to 24 months.",
      },
      {
        title: "Automated Storage and Retrieval (AS/RS)",
        desc: "Grid-based AS/RS systems like AutoStore pack bins 5 to 10 levels high in a dense cube, with robots operating on rails across the top surface. Storage density is 4 to 6 times greater than conventional shelving, making AS/RS ideal for facilities where square footage is constrained. Throughput of 600 to 1,000 lines per hour is achievable with appropriate port counts and robot density.",
      },
      {
        title: "Inbound Depalletizing and Receiving",
        desc: "AI-guided robotic depalletizing systems unload mixed inbound pallets from suppliers, using 3D vision to identify each case regardless of orientation or label condition. The robot picks each case and places it on a conveyor for scanning and putaway, eliminating the manual labor of inbound receiving while capturing case-level data that manual operations often miss.",
      },
      {
        title: "Sortation and Parcel Processing",
        desc: "Robotic sortation systems route parcels, totes, and cases to the correct outbound lane based on carrier, destination, and ship date. Modern systems combine robotic diverters with AI-based parcel identification, handling multi-carrier sorts at rates of 3,000 to 10,000 parcels per hour with accuracy exceeding 99.95 percent.",
      },
      {
        title: "Returns Processing",
        desc: "Returns handling is one of the most labor-intensive and error-prone tasks in e-commerce fulfillment. Robotic returns processing systems identify returned items using vision AI, assess condition, and route items to restock, liquidation, or disposition workflows automatically — dramatically reducing the cost and time to return saleable inventory to available stock.",
      },
      {
        title: "Inventory Replenishment and Slotting",
        desc: "Warehouse robots can autonomously handle inventory replenishment from bulk storage to active pick locations, and rebalance storage slot assignments based on velocity changes without human intervention. This eliminates the manual replenishment task that creates pick congestion during order waves and keeps high-velocity SKUs positioned for fast retrieval.",
      },
      {
        title: "Cold Chain and Freezer Operations",
        desc: "Freezer and cooler warehouses are among the most challenging labor environments — cold temperatures, condensation, and the ergonomic demands of heavy product in bulky clothing make these facilities ideal candidates for full automation. Warehouse robots designed for cold chain operation handle storage, picking, and transport in environments down to -30°C, where human labor is expensive and dangerous.",
      },
    ],
    industries: [
      "E-Commerce & Retail Fulfillment",
      "Grocery & Cold Chain",
      "3PL & Contract Logistics",
      "Pharmaceuticals & Healthcare",
      "Apparel & Fashion",
      "Consumer Electronics",
      "Food & Beverage Distribution",
      "Automotive Parts Distribution",
    ],
    economics: [
      "Warehouse automation investments range from $1 million for a modest AMR fleet to $50 million or more for a full AS/RS installation. The economic case depends on scale: a 300,000 sq ft distribution center replacing 150 picking positions at $50,000 fully loaded annual labor cost saves $7.5 million per year. An automated system capable of handling that throughput might cost $20–$30 million installed — a payback period of 3 to 4 years. Beyond labor savings, automation reduces inventory losses, shipping errors, and occupational injury claims.",
      "For mid-market operations that cannot justify large capital deployment, modular automation delivers ROI at smaller scale. A 20-robot goods-to-person installation costing $2–$3 million can pay back in 24 to 30 months by eliminating 20 to 30 picker positions. RBOT's RaaS model converts large upfront investments into monthly operating costs of $4,000 to $12,000 per robot, aligning the cost profile with the operational savings and eliminating capital risk if throughput requirements change.",
    ],
    deploymentReqs:
      "Warehouse robot deployments require facility layout planning prior to any hardware installation. For AS/RS and goods-to-person systems, building floor levelness (typically ±5 mm across 10 meters), column grid spacing, and ceiling height are critical constraints. All systems require WMS integration via API — this should be scoped and validated in the project plan before installation begins. WiFi 6 or equivalent private wireless coverage is required for mobile systems. Fire suppression and sprinkler systems must be reviewed for any high-density storage system, as storage geometry affects required sprinkler coverage.",
    rbotApproach:
      "RBOT evaluates warehouse automation opportunities against your facility constraints, throughput requirements, SKU profile, and budget before recommending any technology. We model your order profile, pick density, and building geometry to determine which system type — goods-to-person, AS/RS, depalletizing, sortation, or hybrid — delivers the best return. We provide WMS integration, system commissioning, operator training, and ongoing fleet management support. For multi-system deployments, we design the orchestration layer that coordinates all systems as an integrated workflow rather than isolated islands of automation.",
    specs: [
      { label: "System Throughput", value: "200–1,500+ orders/hour" },
      { label: "Storage Density Gain", value: "3–6× vs. conventional racking" },
      { label: "Order Accuracy", value: "99.9–99.99%" },
      { label: "Vertical Storage Range", value: "Up to 12 m (AS/RS systems)" },
      { label: "SKU Range", value: "Up to 500,000+ active SKUs" },
      { label: "System Uptime", value: "99.5%+ (redundant architectures)" },
      { label: "WMS Integration", value: "REST API, SAP, Oracle, Manhattan" },
      { label: "Operating Environment", value: "-30°C to +45°C (system dependent)" },
    ],
    manufacturers: [
      "Symbotic",
      "AutoStore",
      "Geek+",
      "Hai Robotics",
      "Berkshire Grey",
      "Dematic",
      "Swisslog",
      "Knapp",
      "Honeywell Intelligrated",
      "Vanderlande",
    ],
  },

  inspection: {
    title: "Inspection Robots",
    slug: "inspection",
    tagline: "Autonomous platforms that survey, assess, and report on assets, infrastructure, and industrial equipment.",
    intro: [
      "Inspection robots are purpose-built for the systematic, repetitive, and often hazardous task of examining industrial assets, infrastructure, and facilities. They eliminate the need to send human inspectors into confined spaces, at heights, near high-voltage equipment, or into environments with chemical or radiological exposure. Modern inspection robots carry sophisticated sensor payloads — thermal cameras, RGB cameras, LiDAR, gas sensors, acoustic detectors, and non-destructive testing (NDT) equipment — and transmit findings in real time to monitoring systems that flag anomalies for review by engineers.",
      "The economic driver for inspection robots is a combination of labor safety, inspection frequency, and data quality. Manual inspection programs are constrained by the hazard controls required to send personnel into dangerous environments — confined space entry permits, elevated work permits, lockout/tagout procedures. This administrative burden limits how often inspections occur, creating risk windows between inspection cycles. Robots can inspect continuously or on-demand without the safety overhead, dramatically increasing inspection frequency while simultaneously generating richer data than a human inspector with a flashlight and clipboard.",
      "RBOT deploys inspection robots across oil and gas, power generation, manufacturing, and infrastructure applications. We select from platforms including Boston Dynamics Spot, ANYbotics ANYmal, and aerial inspection systems, and we design the sensor payload and data integration to deliver actionable findings — not just raw video feeds — to your asset management and maintenance systems.",
    ],
    howItWorks: [
      "Inspection robots navigate using a combination of SLAM (for GPS-denied environments like tunnels and plant interiors), RTK GPS (for outdoor and above-grade environments), and pre-programmed waypoint routes that ensure consistent coverage on each inspection cycle. Thermal cameras detect heat signatures from electrical components, bearing overtemperature, and process equipment anomalies. RGB cameras capture visual defects, corrosion, and labeling. Gas sensors detect methane, H2S, CO, and other process gases at levels requiring immediate action. Data from all sensors is timestamped, georeferenced, and streamed to a cloud analytics platform.",
      "AI-based anomaly detection processes inspection data in near-real-time, comparing current sensor readings against historical baselines and flagging deviations that exceed configured thresholds. Thermal anomalies trigger alerts when component temperatures exceed expected operating ranges. Visual inspection algorithms detect corrosion, structural cracking, pooling liquids, and equipment damage. Over time, the system builds an asset condition history that enables predictive maintenance — scheduling repairs before failures occur rather than responding to breakdowns. This transforms inspection from a compliance activity into an active reliability tool.",
    ],
    useCases: [
      {
        title: "Oil & Gas Plant Inspection",
        desc: "Refineries, compressor stations, and offshore platforms use inspection robots to walk daily gauge-reading routes, monitor equipment for leaks and overtemperature, and access confined spaces that would require complex entry procedures for human inspectors. Robots complete 60–100 waypoint inspection routes in 45 to 90 minutes, transmitting readings directly to control room dashboards.",
      },
      {
        title: "Electrical Substation Monitoring",
        desc: "High-voltage substations present significant personnel safety risks for regular inspection. Inspection robots navigate substation yards autonomously, using thermal cameras to detect overheating transformers, switchgear, and cable connections — the earliest indicator of equipment degradation — and report findings to the control system before failures occur.",
      },
      {
        title: "Bridge and Civil Infrastructure Assessment",
        desc: "Climbing robots, drones, and underwater remotely operated vehicles inspect bridge decks, piers, and suspension cables for structural defects — cracks, spalling, corrosion, and fatigue damage — that are difficult or dangerous to assess by human inspection teams working at height or below the waterline. Inspection data integrates with bridge management systems for maintenance prioritization.",
      },
      {
        title: "Mining Operations Safety Monitoring",
        desc: "Underground and surface mine operations use inspection robots to monitor tunnel stability, equipment condition, and atmospheric gas levels in areas ahead of personnel entry. Continuous robotic monitoring extends the safe operational window in marginal atmospheric conditions and provides early warning of ground movement or gas accumulation.",
      },
      {
        title: "Data Center and Critical Facility Monitoring",
        desc: "Data center inspection robots patrol server halls, monitoring equipment temperatures, checking for water intrusion, and verifying that airflow and cooling systems are operating correctly. The robot's inspection data supplements fixed sensor networks, catching anomalies in areas between sensors and providing visual confirmation of alert conditions.",
      },
      {
        title: "Manufacturing Equipment Inspection",
        desc: "Factory inspection robots walk production floors during planned downtime — nights and weekends — checking machinery for oil leaks, worn components, and abnormal thermal signatures that indicate imminent failure. Findings integrate with CMMS systems to generate maintenance work orders before production is impacted.",
      },
      {
        title: "Confined Space Inspection",
        desc: "Tanks, vessels, tunnels, and other confined spaces require complex entry procedures under OSHA regulations. Small inspection robots enter these spaces through access hatches, survey the interior with cameras and sensors, and exit — eliminating the permit requirements, standby personnel, and entry risks associated with sending a human inspector.",
      },
    ],
    industries: [
      "Oil & Gas",
      "Power Generation & Utilities",
      "Mining",
      "Civil Infrastructure",
      "Chemical Processing",
      "Manufacturing",
      "Data Centers",
      "Nuclear Energy",
    ],
    economics: [
      "Inspection robot economics are driven by two distinct value pools: risk reduction and inspection cost savings. A confined space entry at an industrial facility costs $5,000 to $15,000 in permit preparation, standby crew, and inspector time. A robot inspection of the same space costs $200 to $500 in robot operating time. For facilities with hundreds of annual confined space entries, the savings are immediate and substantial. Beyond direct cost, the value of early anomaly detection — catching a bearing failure before it becomes a conveyor shutdown — can be worth tens to hundreds of thousands of dollars per incident avoided.",
      "Hardware costs for inspection robots range from $75,000 to $300,000 for quadruped platforms like Boston Dynamics Spot or ANYbotics, including standard sensor payloads. Annual maintenance, software, and data analytics platform fees add $20,000 to $50,000 per year. Facilities that replace a 4-person manual inspection team ($220,000+ annual labor) with a 2-robot inspection fleet achieve payback within 2 to 3 years. The data quality improvement — from clipboard notes to georeferenced, timestamped sensor data with trend history — is a non-quantifiable but operationally significant benefit.",
    ],
    deploymentReqs:
      "Inspection robot deployments require a site mapping exercise to establish the navigation base map and define inspection waypoints — typically a 1 to 2 day exercise for a 50,000 to 200,000 sq ft facility. Wireless coverage must be assessed for all inspection zones; private 4G LTE or WiFi 6 with adequate signal strength in all planned areas is required. Charging dock locations should be co-located with the robot's return waypoint at the end of each route. Data integration with the asset management or CMMS system should be scoped during the deployment design phase to ensure inspection findings flow automatically into the maintenance workflow.",
    rbotApproach:
      "RBOT's inspection robot deployments are designed around your existing inspection program — we start by mapping your current inspection routes, frequency requirements, and the findings that drive maintenance decisions. We then design the robot's waypoints, sensor payload, and data outputs to replace or supplement each element of that program. We integrate inspection findings directly into your CMMS or asset management system, so robot inspection data drives maintenance decisions through the same workflow as manual inspection findings. We provide operator training, ongoing support, and quarterly route optimization reviews to ensure the inspection program delivers improving value over time.",
    specs: [
      { label: "Patrol Speed", value: "1–4 km/h (terrain dependent)" },
      { label: "Sensor Suite", value: "Thermal, RGB, LiDAR, Gas detection" },
      { label: "Thermal Sensitivity", value: "≤0.05°C NETD" },
      { label: "Battery Runtime", value: "90 min – 8 hrs (platform dependent)" },
      { label: "IP Rating", value: "IP65 minimum, IP68 available" },
      { label: "GPS/SLAM Accuracy", value: "±5 cm localization" },
      { label: "Camera Resolution", value: "12–32 MP RGB + 640×512 thermal" },
      { label: "Data Uplink", value: "4G LTE, WiFi 6, or satellite" },
    ],
    manufacturers: [
      "Boston Dynamics (Spot)",
      "ANYbotics (ANYmal)",
      "Gecko Robotics",
      "Flyability",
      "Teledyne FLIR",
      "Aetos Group",
      "Cognex",
      "Sarcos Robotics",
      "HEBI Robotics",
    ],
  },

  cleaning: {
    title: "Cleaning Robots",
    slug: "cleaning",
    tagline: "Autonomous floor cleaning and disinfection robots that maintain large facilities consistently and cost-effectively.",
    intro: [
      "Autonomous cleaning robots are one of the most commercially mature categories of service robotics, with thousands of units deployed globally in airports, hospitals, warehouses, and commercial facilities. These machines handle floor scrubbing, sweeping, vacuuming, and disinfection autonomously — navigating complex environments, avoiding obstacles, and returning to their docking station when the tank is full or the battery is low. Unlike consumer robot vacuums, commercial cleaning robots are industrial-grade systems designed for large-area operation with tank capacities, brush widths, and navigation systems scaled for facilities of 10,000 to 200,000 square feet.",
      "The labor argument for cleaning robots is straightforward: commercial floor care is repetitive, physically demanding, and consistently understaffed. A single large scrubber robot can clean 2,000 to 3,000 square meters per hour — equivalent to 4 to 6 human operators pushing manual scrubbers. Facilities with large, open floor areas — distribution centers, airports, big-box retail stores, and hospital campuses — achieve the strongest ROI, as the robot's efficiency advantage is greatest in uncluttered spaces where it can run at full speed across long straight runs.",
      "RBOT deploys cleaning robots as part of integrated facility management automation programs. We evaluate your facility's floor area, surface type, obstacle density, and cleaning schedule to recommend the right platform and configuration. We handle navigation mapping, scheduling integration with your facility management system, and ongoing maintenance support. Cleaning robots can be deployed as a standalone program or as part of a broader robotics deployment that also includes security, inspection, or logistics systems.",
    ],
    howItWorks: [
      "Cleaning robots navigate using LiDAR-based SLAM combined with 3D depth cameras and ultrasonic sensors for dynamic obstacle detection. During initial deployment, the robot maps the facility during a guided walk-through, creating a floor plan that is used for all subsequent autonomous operations. The cleaning path planning algorithm divides the facility into zones and generates efficient coverage paths for each zone, scheduling cleaning runs to match facility operating hours. When the robot encounters a person or obstacle, it navigates around them and resumes the planned path.",
      "The cleaning system — typically a cylindrical brush system, squeegee, vacuum, and water management system — is controlled by the robot's on-board computer in coordination with the navigation system. Water flow rate, brush pressure, and squeegee angle are adjusted based on floor surface type. The clean water tank feeds the scrub heads while the recovery tank collects dirty water — both monitored continuously for capacity. When tanks require servicing or the battery reaches its threshold, the robot returns autonomously to its dock for servicing and charging before resuming the cleaning schedule.",
    ],
    useCases: [
      {
        title: "Airport Terminal Floor Maintenance",
        desc: "Airports run cleaning robots on overnight schedules to scrub terminal floors between the last arrival and first morning departure. The robot covers tens of thousands of square meters systematically, cleaning around fixed furniture and gates without operator intervention. Daytime operations use the robot for spot cleaning and high-traffic area maintenance during lower-traffic periods.",
      },
      {
        title: "Distribution Center and Warehouse Floors",
        desc: "Large warehouse floors accumulate significant debris from pallet wrap, cardboard, and dirt that affects equipment operation and creates safety hazards. Cleaning robots run during night shifts, scrubbing the full facility floor while operations are paused, and perform spot cleaning in high-traffic aisles during the day. The consistent cleaning schedule reduces floor damage and maintains the reflective floor surfaces that AMR navigation requires.",
      },
      {
        title: "Hospital and Healthcare Facility Disinfection",
        desc: "Hospital cleaning robots combine floor scrubbing with UV-C disinfection or chemical dispensing systems to meet clinical hygiene standards. They operate in corridors, waiting rooms, and clinical support areas — rooms that require constant cleaning to prevent healthcare-associated infections. Integration with the hospital's environmental services management system schedules cleaning by room type and traffic level.",
      },
      {
        title: "Retail Store Overnight Cleaning",
        desc: "Big-box retail stores and supermarkets use cleaning robots on overnight shifts to scrub high-traffic floor areas while the store is closed. The robot's consistent cleaning quality and schedule eliminates the variation between cleaning crews, maintains floor finish life, and reduces the labor hours required from contracted cleaning services — typically achieving 30 to 50 percent cleaning labor cost reduction.",
      },
      {
        title: "Stadium and Arena Concourse Cleaning",
        desc: "Sports facilities face extreme post-event cleaning challenges — thousands of square feet of concourse covered in spilled food and beverages that must be cleaned before the next event. Cleaning robots deployed immediately after events can process concourse areas autonomously while cleaning crews focus on seating areas and restrooms that require more detailed manual cleaning.",
      },
      {
        title: "Corporate Campus and Office Facility",
        desc: "Multi-building corporate campuses deploy cleaning robots in lobbies, corridors, and large open office areas during non-business hours. The robots operate on automated schedules aligned with cleaning service contracts, reducing the number of cleaning staff required and ensuring consistent coverage across all buildings on a daily basis.",
      },
    ],
    industries: [
      "Airports & Transportation Hubs",
      "Healthcare & Hospitals",
      "Warehousing & Distribution",
      "Retail & Big-Box",
      "Hospitality & Hotels",
      "Education & Universities",
      "Corporate Facilities",
      "Stadiums & Venues",
    ],
    economics: [
      "Cleaning robot economics are among the most straightforward in commercial robotics. A single industrial scrubber robot at $40,000–$80,000 covers the work of 3 to 5 cleaning operators on overnight shifts, at a labor cost of $35,000–$45,000 per position fully loaded. The payback period for a single robot is typically 12 to 20 months. For large facilities with multiple cleaning robots, the economics improve further — 10 robots replacing 30 to 40 overnight cleaning positions save $1 million to $1.6 million annually against hardware and operating costs of $500,000 to $800,000 per year.",
      "Beyond direct labor savings, cleaning robots generate value through consistency: manual cleaning quality varies significantly by individual, shift, and supervision level. Robots clean to the same standard every cycle. This consistency improves floor surface life, reduces slip-and-fall claims (which average $20,000 per incident), and maintains the facility appearance that retail and hospitality brands depend on. RaaS pricing for cleaning robots runs $2,000–$4,000 per month per robot, which is cash-flow positive against a single displaced overnight shift position from day one of operation.",
    ],
    deploymentReqs:
      "Cleaning robot deployments require a facility mapping session and configuration of cleaning zones, schedules, and no-clean areas. Dock placement — typically 1 to 2 docks per robot — should be located in utility areas accessible for water tank refilling and charging. Floor surfaces must be compatible with the robot's brush and squeegee system; most commercial hard floors (sealed concrete, tile, epoxy, vinyl) are compatible. Narrow aisles, stairs, and raised threshold transitions require assessment — most robots have a minimum aisle width requirement of 1.2 to 1.5 meters. Integration with facility management software is optional but enables automated cleaning schedules and reporting.",
    rbotApproach:
      "RBOT deploys cleaning robots as part of a broader facility automation strategy, or as standalone cleaning programs for customers starting their robotics journey. We perform a facility assessment that maps your floor area, surface types, cleaning schedule, and current labor cost to model the ROI before hardware selection. We handle facility mapping, schedule configuration, and integration with facility management systems, and we provide ongoing maintenance support under our RaaS or managed service agreements. RBOT's cleaning robot deployments include operator training so your facility team can manage daily operations, with RBOT providing technical support and preventive maintenance on a scheduled basis.",
    specs: [
      { label: "Cleaning Width", value: "550–900 mm" },
      { label: "Area Coverage Rate", value: "800–3,000 m²/hr" },
      { label: "Tank Capacity", value: "40–100L clean + recovery" },
      { label: "Battery Runtime", value: "2.5–5 hours per charge" },
      { label: "Navigation", value: "SLAM + LiDAR + ToF depth sensors" },
      { label: "Disinfection Option", value: "UV-C, chemical spray, or HOCL" },
      { label: "Floor Types", value: "Sealed concrete, tile, epoxy, VCT, LVT" },
      { label: "Obstacle Detection", value: "3D avoidance, human detection, auto-pause" },
    ],
    manufacturers: [
      "Avidbots (Neo)",
      "Brain Corp (BrainOS-powered)",
      "Nilfisk (Liberty SC50)",
      "Tennant (T380AMR)",
      "SoftBank Robotics (Whiz)",
      "ICE Cobotics",
      "LionsBot",
      "Karcher (KIRA B 50)",
    ],
  },

  security: {
    title: "Security Robots",
    slug: "security",
    tagline: "Autonomous patrol robots that monitor facilities, detect anomalies, and deter threats around the clock.",
    intro: [
      "Security robots provide continuous autonomous patrol coverage for campuses, parking structures, data centers, retail facilities, and industrial sites — areas too large for static cameras to cover completely and too expensive to staff with human security guards at required density. Modern security robots carry multi-modal sensor arrays: PTZ cameras, 360-degree RGB cameras, thermal imaging, LiDAR, and audio detection systems. They patrol assigned routes autonomously, stream live video to security operations centers, and alert human operators when anomalies are detected.",
      "The security industry faces structural labor challenges: guard positions are difficult to fill and retain, and human guard effectiveness varies significantly based on fatigue, attention, and the volume of incidents across a large property. A security robot patrols at consistent speed, at any hour, in any weather, without distraction. It covers its patrol route every 20 to 45 minutes rather than every 2 to 4 hours for a human on foot patrol, and it logs every patrol with timestamped sensor data that provides an irrefutable chain of evidence for incident investigation.",
      "RBOT deploys security robots as components of integrated physical security programs — working alongside existing access control, fixed camera, and human guard programs rather than replacing them entirely. The robot handles the high-frequency, low-judgment patrol task; human guards handle the response, access control, and visitor management tasks that require human presence and decision-making. We handle programming, monitoring integration, and ongoing maintenance.",
    ],
    howItWorks: [
      "Security robots navigate facility environments using LiDAR-SLAM for precise localization, combined with 3D depth cameras for dynamic obstacle detection and avoidance. Patrol routes are programmed as waypoint sequences that the robot follows continuously on a scheduled or on-demand basis. At each waypoint, the robot may pause for a configurable dwell time while its sensor array captures data — video, thermal imagery, and acoustic signals — that is transmitted to the security operations center in real time. Anomaly detection algorithms process this data and flag events that exceed thresholds: motion in restricted areas, elevated temperatures, unrecognized vehicles, or audio events matching threat profiles.",
      "Two-way audio capability allows security operators to speak through the robot's speaker system to individuals the robot detects on patrol, delivering verbal warnings, instructions, or deterrence without dispatching a human guard. License plate readers integrated on some platforms capture vehicle information in parking areas, comparing plates against allowed and alert lists. All patrol data is logged with GPS coordinates and timestamps, creating a continuous, searchable record of security activity across the facility. Integration with access control and CCTV systems creates a unified security operations picture.",
    ],
    useCases: [
      {
        title: "Corporate Campus Patrol",
        desc: "Large corporate campuses with multiple buildings, parking structures, and outdoor grounds benefit from autonomous patrol robots covering areas between fixed camera views and human guard posts. Robots patrol exterior perimeters and parking areas on programmed schedules, detecting tailgating, unauthorized vehicle access, and suspicious activity that would be missed by static cameras.",
      },
      {
        title: "Parking Structure Monitoring",
        desc: "Parking garages represent a significant security challenge — large, enclosed, dimly lit, and difficult to monitor with fixed cameras at adequate density. Security robots patrol multiple levels, monitoring for vehicle break-ins, loitering, suspicious activity, and structural damage. The robot's thermal camera detects individuals in areas that are dark or obscured from fixed cameras.",
      },
      {
        title: "Data Center Physical Security",
        desc: "Data centers require stringent physical security protocols including documented patrol logs, anomaly reporting, and deterrence of unauthorized access attempts. Security robots conduct documented patrols of data center facilities, logging sensor data that supplements human guard patrol records. Thermal imaging detects equipment overtemperature events that are security-adjacent facility risks.",
      },
      {
        title: "Retail Loss Prevention",
        desc: "Large-format retail stores use security robots for daytime deterrence and after-hours patrol. The visible presence of a security robot on the sales floor provides a deterrence effect on opportunistic theft, and the robot's 360-degree camera coverage supplements CCTV in areas with high shrink rates. After-hours patrol catches vandalism, break-ins, and staff theft activity that occurs outside fixed camera views.",
      },
      {
        title: "Construction Site Monitoring",
        desc: "Construction sites are highly vulnerable to equipment theft, material theft, and vandalism during non-working hours. Security robots patrol large site perimeters overnight and on weekends, detecting and documenting unauthorized entry and alerting monitoring centers when intrusions are detected. The patrol documentation supports insurance claims and law enforcement in theft and vandalism incidents.",
      },
      {
        title: "Event Security Support",
        desc: "Large public events use security robots as mobile camera platforms and crowd monitoring tools, providing security staff with real-time situational awareness across event venues. Robots can be positioned in high-density areas to provide crowd density monitoring, detect fights or disturbances, and support first responder navigation in complex event environments.",
      },
    ],
    industries: [
      "Corporate Campuses",
      "Data Centers",
      "Retail & Commercial Properties",
      "Industrial Facilities",
      "Logistics & Warehousing",
      "Healthcare Campuses",
      "Transportation Hubs",
      "Public Safety",
    ],
    economics: [
      "Security guard labor costs in the United States average $25 to $35 per hour fully loaded, or $50,000 to $70,000 per position annually. A security robot at $70,000 to $150,000 in hardware, plus $15,000 to $25,000 per year in maintenance and platform fees, covers patrol routes that would require 2 to 4 human guards — achieving cost parity in 12 to 24 months. The economic case is strongest for outdoor and large-area patrol tasks where human coverage requires multiple guard posts; indoor close-quarters security with high human interaction requirement remains better suited to human guards.",
      "Security robots generate additional economic value through documentation: every patrol generates timestamped, georeferenced sensor data that supports incident investigation and insurance claims. Facilities that have deployed security robots report reduced security-related insurance premiums of 5 to 15 percent, as underwriters recognize the consistent patrol record and anomaly detection capability. RaaS pricing for security robots runs $3,000–$5,500 per month all-inclusive, which is typically less than the cost of a single part-time security guard position when including overhead, turnover, and supervision costs.",
    ],
    deploymentReqs:
      "Security robot deployments require patrol route programming, integration with the security operations center's video management system (VMS), and configuration of alert thresholds and escalation workflows. Outdoor deployments require assessment of terrain, weather exposure, and wireless coverage across the patrol area. Charging dock placement — indoors or in weatherproof enclosures for outdoor robots — must be located on or near the patrol route. Integration with existing access control and CCTV systems is recommended to create a unified security picture. All deployments require a site security assessment to confirm that the robot's capabilities are appropriate for the identified threats and coverage requirements.",
    rbotApproach:
      "RBOT designs security robot programs around your existing security operations, not as a replacement for human security judgment. We analyze your facility's threat profile, coverage gaps, patrol frequency requirements, and current guard program to identify where autonomous patrol delivers the strongest value. We handle route programming, monitoring center integration, and the physical security design that ensures the robot covers your highest-priority areas effectively. Our deployment includes security staff training so your guard team understands how to use the robot's patrol data and alerts to enhance their response capability, not compete with it.",
    specs: [
      { label: "Patrol Speed", value: "1–4 km/h (configurable)" },
      { label: "Battery Runtime", value: "8 hrs continuous patrol" },
      { label: "Camera System", value: "PTZ 4K + 360° RGB + Thermal" },
      { label: "Thermal Detection Range", value: "10m detection / 30m classification" },
      { label: "Audio", value: "2-way intercom + 80dB speaker" },
      { label: "Navigation", value: "SLAM + LiDAR + GPS (outdoor)" },
      { label: "Data Uplink", value: "4G LTE + WiFi 6" },
      { label: "Operating Temperature", value: "-20°C to +50°C (outdoor-rated)" },
    ],
    manufacturers: [
      "Knightscope",
      "Cobalt Robotics",
      "Boston Dynamics (Spot)",
      "ANYbotics (ANYmal)",
      "Turing Video",
      "SMP Robotics",
      "Ascento Robotics",
      "Outdoor Robotics (OR Guard)",
    ],
  },

  specialized: {
    title: "Specialized Robotics",
    slug: "specialized",
    tagline: "Purpose-built and modular robotic systems designed for domain-specific applications beyond standard categories.",
    intro: [
      "Specialized robotics encompasses the broad range of robotic systems engineered for specific domain applications that do not fit neatly into general-purpose categories. This includes agricultural robots for crop monitoring, harvesting, and spraying; hospitality robots for food delivery and room service; healthcare robots for medication dispensing and patient transport support; construction robots for bricklaying and concrete placement; underwater remotely operated vehicles for marine inspection; and custom industrial systems designed for specific manufacturing processes. What these systems share is the combination of domain-specific form factors, sensors, and software that makes them effective in their target application.",
      "The rationale for specialized robotics is precision fit. A general-purpose humanoid can perform many tasks, but a robot designed specifically for greenhouse row inspection carries exactly the sensors needed, navigates exactly the row geometry it will encounter, and generates exactly the agronomic data that growers need — at a fraction of the cost and with higher reliability than a general-purpose platform configured for the same task. As robotics matures, purpose-built systems increasingly dominate high-volume applications where the specific task is well-defined and the economic case supports custom engineering.",
      "RBOT's specialized robotics practice identifies commercially ready systems for domain-specific applications and evaluates whether they meet the operational requirements of your specific deployment environment. We have working relationships with specialized robotics developers across agriculture, hospitality, healthcare, and construction, and we provide the integration, deployment, and operational support layer that turns a promising technology into a reliable operational asset.",
    ],
    howItWorks: [
      "Specialized robots are built on the same fundamental technology stack as general-purpose platforms — sensors, compute, actuators, and autonomy software — but configured and optimized for a specific operating domain. A hospital delivery robot, for example, uses the same LiDAR and SLAM navigation as a warehouse AMR, but integrates with hospital elevator control systems, nurse call workflows, and electronic health record systems in ways that a general-purpose AMR does not. Domain-specific software stacks handle the task-level logic: what to pick up, where to deliver it, who to notify, and how to handle exceptions.",
      "Most specialized robots use ROS2 (Robot Operating System 2) as a middleware layer that enables modular software development, sensor integration, and communication between subsystems. This common layer allows specialized robots to integrate with each other and with general-purpose platforms in multi-robot deployments. Industry 4.0 connectivity — OPC-UA, MQTT, REST APIs — enables specialized robots to connect to ERP, MES, WMS, and domain-specific management systems. The physical form factor and payload configuration are designed for the specific task environment: narrow hospital corridors, rough agricultural terrain, or construction site conditions.",
    ],
    useCases: [
      {
        title: "Agricultural Crop Monitoring and Spraying",
        desc: "Autonomous agricultural robots navigate between crop rows conducting detailed plant health monitoring using RGB, multispectral, and NDVI sensors. They identify disease, pest pressure, nutrient deficiency, and irrigation stress at the individual plant level — data that precision spray robots use to apply agrochemicals only where needed, reducing chemical usage by 50 to 80 percent versus blanket application.",
      },
      {
        title: "Hospital Medication and Supply Delivery",
        desc: "Healthcare delivery robots transport medications, lab specimens, sterile supplies, and meal trays through hospital corridors autonomously. They integrate with pharmacy management systems to pick up labeled medications and deliver them to the correct nursing unit, with confirmation scans and electronic chain-of-custody logging at each handoff. This reduces pharmacy technician labor and eliminates delivery errors.",
      },
      {
        title: "Restaurant and Hospitality Food Service",
        desc: "Food delivery robots in restaurants, hotels, and senior living facilities carry meals from the kitchen to dining tables or guest rooms, freeing service staff for high-touch guest interaction. High-density environments like hotel corridors benefit from robots optimized for elevator navigation, door interface, and safe operation in spaces occupied by guests.",
      },
      {
        title: "Construction Bricklaying and Block Placement",
        desc: "Bricklaying robots using computer vision and mortar dispensing systems can place 300 to 1,000 bricks per hour versus 300 to 500 by a skilled mason — while working continuously across a shift without breaks. Construction robots follow digital building models (BIM) to place materials at precise coordinates, improving accuracy and reducing rework.",
      },
      {
        title: "Underwater and Marine Inspection",
        desc: "Remotely operated vehicles (ROVs) and autonomous underwater vehicles (AUVs) inspect ship hulls, offshore platform structures, pipeline systems, and submarine cables at depths and in conditions that are impossible for human divers. They carry sonar, optical cameras, and thickness measurement systems, transmitting data to surface operators who review findings in real time.",
      },
      {
        title: "Nuclear Facility Operations",
        desc: "Nuclear environments require robots capable of operating in high radiation fields, confined spaces, and extreme temperatures that are immediately lethal to humans. Nuclear robots conduct inspection, decontamination, material handling, and sensor reading tasks in reactor facilities, used fuel storage areas, and decommissioning sites — eliminating personnel radiation exposure for these inherently hazardous tasks.",
      },
      {
        title: "Last-Mile Delivery",
        desc: "Sidewalk delivery robots and autonomous delivery vehicles navigate urban environments to complete the final segment of e-commerce and food delivery orders. Operating on sidewalks or roads in geofenced service areas, these platforms serve as an alternative to human delivery couriers for high-density urban neighborhoods, reducing last-mile cost by 40 to 60 percent at scale.",
      },
    ],
    industries: [
      "Agriculture & Food Production",
      "Healthcare & Hospitals",
      "Hospitality & Hotels",
      "Construction",
      "Marine & Offshore",
      "Nuclear Energy",
      "Retail Last-Mile",
      "Mining & Subsurface",
    ],
    economics: [
      "Specialized robotics economics vary widely by application domain. Agricultural robots typically pay back in 2 to 4 growing seasons through reduced chemical costs, labor savings, and yield improvements from earlier disease detection. Hospital delivery robots at $30,000–$80,000 per unit replace transport aide labor at $35,000–$45,000 annually, achieving payback in 12 to 24 months. Construction robots reduce bricklaying labor cost by 30 to 50 percent while improving schedule reliability. The common thread is domain-specific productivity: each specialized robot is engineered to be dramatically more efficient than a human in its specific task.",
      "The risk profile for specialized robots differs from general-purpose platforms: because they are purpose-built, they excel at their target task but cannot be redeployed to other applications if the task changes. This makes thorough ROI analysis and application fit assessment critical before purchase. RBOT's evaluation process quantifies the specific labor, quality, and throughput improvements that a specialized robot will deliver in your environment, and structures RaaS agreements that reduce the capital risk of deploying emerging specialized technologies in high-impact applications.",
    ],
    deploymentReqs:
      "Specialized robot deployments vary significantly by domain. Agricultural systems require field mapping, GPS base station setup, and connectivity in rural environments. Healthcare robots require integration with hospital information systems, access control, and elevator control — a process that involves clinical informatics and facilities management teams. Construction robots require BIM model integration and site preparation for stable robot operation. RBOT scopes the specific deployment requirements for each specialized system during the assessment phase, identifying infrastructure needs, integration dependencies, and regulatory or compliance requirements before hardware selection.",
    rbotApproach:
      "RBOT's specialized robotics practice focuses on matching commercially proven systems to specific operational needs, rather than deploying emerging technology as an experiment. We evaluate specialized robot candidates against your operational requirements, conduct reference checks with similar deployments, and assess the manufacturer's support and maintenance capability before recommending any system. For applications where no commercial system is fully ready, we identify the closest available platform and design the gap-filling integration and customization. Our goal is to deliver specialized automation that works reliably in production from day one, not pilot projects that never graduate to operational deployments.",
    specs: [
      { label: "Payload (modular)", value: "5–500 kg (application dependent)" },
      { label: "ROS2 Compatible", value: "Yes (most platforms)" },
      { label: "Power Interface", value: "24V / 48V DC or 120/240V AC" },
      { label: "IP Rating", value: "IP44–IP68 (application configured)" },
      { label: "Custom I/O", value: "CAN bus, EtherCAT, Modbus TCP, OPC-UA" },
      { label: "Operating Environment", value: "Indoor / Outdoor / Subsea (platform specific)" },
      { label: "Industry 4.0 Interface", value: "REST API, MQTT, OPC-UA" },
      { label: "Customization Lead Time", value: "8–24 weeks (application specific)" },
    ],
    manufacturers: [
      "Boston Dynamics (custom payload)",
      "Harvest CROO Robotics",
      "Bear Robotics (Servi)",
      "Aethon (TUG)",
      "Fastbrick Robotics (Hadrian)",
      "Saildrone",
      "Nauticus Robotics",
      "Nuro (delivery)",
      "Starship Technologies",
    ],
  },
};
