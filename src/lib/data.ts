export const siteConfig = {
  name: "Yopo Transport",
  siteUrl: "https://www.yopotransport.com",
  tagline: "Freight Moved With Precision",
  description:
    "Yopo Transport delivers premium freight transportation and logistics solutions across the United States, built on reliability, safety, and dedicated service.",
  // Placeholder contact details — replace with real company information.
  phone: "+1 708 550 4407",
  email: "contact@yopotransport.com",
  careersEmail: "careers@yopotransport.com",
  address: "15131 Kedzie Ave, Markham, IL 60248",
  hoursShort: "Mon–Fri, 7am–7pm CT",
  mapsUrl:
    "https://www.google.com/maps/place/Yopo+Parking/@41.6175381,-87.6972756,144m/data=!3m1!1e3!4m6!3m5!1s0x880e3dbf8bdc6ec7:0x775e8f41cf3e2f4!8m2!3d41.6177753!4d-87.6977153!16s%2Fg%2F11j2w66lyb?entry=tts&g_ep=EgoyMDI2MDYyOS4wIPu8ASoASAFQAw%3D%3D&skid=cdeb39d0-0356-4b9c-9eed-6e5e0ca3d6d1",
  mapsEmbedUrl: "https://www.google.com/maps?q=41.6177753,-87.6977153&z=16&output=embed",
};

// Placeholder social links — replace with your real profile URLs.
export const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/for-shippers", label: "For Shippers" },
  { href: "/for-brokers", label: "For Brokers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Shown in the footer only, not the main nav.
export const footerOnlyLinks = [
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/become-a-driver", label: "Become a Driver" },
];

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "freight-transportation",
    name: "Freight Transportation",
    shortDescription:
      "Comprehensive freight solutions engineered around your product, timeline, and budget.",
    description:
      "Our core freight transportation service moves shipments of every size across the country, backed by careful routing, vetted carriers, and proactive communication from pickup to delivery.",
    image:
      "images/truck-face.png",
    highlights: [
      "Nationwide coverage",
      "Real-time shipment visibility",
      "Dedicated account support",
    ],
  },
  {
    slug: "full-truckload",
    name: "Full Truckload (FTL)",
    shortDescription:
      "Exclusive trailer space for large shipments that need speed and simplicity.",
    description:
      "When your freight fills a trailer — or you simply want it to move without stops — our FTL service provides a dedicated truck from origin to destination, minimizing handling and transit time.",
    image:
      "images/yopo-truck.png",
    highlights: [
      "Direct, single-stop routing",
      "Reduced handling risk",
      "Flexible scheduling windows",
    ],
  },
  {
    slug: "less-than-truckload",
    name: "Less Than Truckload (LTL)",
    shortDescription:
      "Cost-efficient shipping for smaller freight that doesn't require a full trailer.",
    description:
      "Our LTL network lets you pay only for the space you use, consolidating your shipment with others while maintaining careful tracking and handling standards throughout transit.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "Pay-for-space pricing",
      "Consolidated network routing",
      "Ideal for recurring smaller loads",
    ],
  },
  {
    slug: "long-distance-transportation",
    name: "Long-Distance Transportation",
    shortDescription:
      "Reliable cross-country hauls with experienced long-haul drivers and planning.",
    description:
      "For shipments crossing multiple states or coasts, our long-distance service combines experienced drivers, careful route planning, and consistent check-ins so your freight arrives on schedule.",
    image:
      "https://images.unsplash.com/photo-1783246184640-74a787cfc84c?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "Coast-to-coast capability",
      "Experienced long-haul drivers",
      "Milestone tracking updates",
    ],
  },
  {
    slug: "regional-transportation",
    name: "Regional Transportation",
    shortDescription:
      "Fast, efficient movement within defined regional lanes and shorter timelines.",
    description:
      "Regional transportation is built for businesses that move freight repeatedly within a defined footprint, offering shorter transit windows and tighter delivery scheduling.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "Shorter transit windows",
      "Predictable delivery scheduling",
      "Optimized regional lanes",
    ],
  },
  {
    slug: "dedicated-transportation",
    name: "Dedicated Transportation",
    shortDescription:
      "A consistent fleet and driver team committed exclusively to your operation.",
    description:
      "Dedicated transportation pairs your business with a consistent capacity commitment, giving you predictable service levels, familiar drivers, and freight capacity you can plan around.",
    image:
      "https://images.unsplash.com/photo-1734903251820-c781932299f8?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "Consistent driver teams",
      "Predictable capacity",
      "Built around your schedule",
    ],
  },
  {
    slug: "logistics-solutions",
    name: "Logistics Solutions",
    shortDescription:
      "End-to-end logistics support, from planning and coordination to execution.",
    description:
      "Beyond transportation, our logistics team supports load planning, carrier coordination, and supply chain visibility so you can focus on running your business.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    highlights: [
      "Load and route planning",
      "Supply chain coordination",
      "Single point of contact",
    ],
  },
];

export type Stat = {
  label: string;
  value: string;
};

// Placeholder statistics — replace with your company's real, verified figures.
export const stats: Stat[] = [
  { value: "15+", label: "Years in Business" },
  { value: "100+", label: "Carrier Partners" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "24/7", label: "Dispatch Availability" },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Request a Quote",
    description:
      "Share your shipment details — origin, destination, freight type, and timeline — through our quote form or by phone.",
  },
  {
    step: "02",
    title: "Custom Plan",
    description:
      "Our team builds a transportation plan matched to your freight, budget, and schedule, and confirms pricing with you.",
  },
  {
    step: "03",
    title: "Pickup & Transit",
    description:
      "Your shipment is picked up on schedule and moved with continuous tracking and proactive status updates.",
  },
  {
    step: "04",
    title: "On-Time Delivery",
    description:
      "Freight is delivered safely and on schedule, with confirmation and documentation provided for your records.",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

// Sample testimonials for layout purposes — replace with real, permissioned client feedback.
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Yopo Transport has become our go-to carrier for time-sensitive freight. Their dispatch team communicates proactively, and we've never had a shipment arrive without warning if something changed.",
    name: "Marcus Reyes",
    role: "Operations Manager, Ridgeline Building Supply",
  },
  {
    id: "testimonial-2",
    quote:
      "What stands out is how easy they are to reach. If there's ever a question about a load, someone picks up the phone and gives us a straight answer.",
    name: "Dana Whitfield",
    role: "Logistics Coordinator, Harborline Foods",
  },
  {
    id: "testimonial-3",
    quote:
      "We switched most of our regional freight to Yopo Transport last year and haven't looked back. On-time performance has been consistently strong.",
    name: "Carlos Medina",
    role: "Supply Chain Manager, Pinnacle Industrial Supply",
  },
  {
    id: "testimonial-4",
    quote:
      "Their dedicated fleet option gave us the predictability we needed during our busiest season. Same drivers, same schedule, no surprises.",
    name: "Rachel Osei",
    role: "Distribution Manager, Northgate Wholesale",
  },
  {
    id: "testimonial-5",
    quote:
      "From the first quote to final delivery, everything was handled professionally. Paperwork was accurate and on time, which makes our accounting team happy too.",
    name: "Tom Bradshaw",
    role: "Owner, Bradshaw Millwork",
  },
  {
    id: "testimonial-6",
    quote:
      "We ship a lot of LTL freight, and Yopo Transport has been transparent about pricing and timelines every step of the way.",
    name: "Priya Nair",
    role: "Procurement Lead, Summit Retail Group",
  },
  {
    id: "testimonial-7",
    quote:
      "Their drivers are professional and easy to work with at our dock. Loading and unloading has never been a hassle.",
    name: "Jerome Castillo",
    role: "Warehouse Supervisor, Coastal Produce Partners",
  },
  {
    id: "testimonial-8",
    quote:
      "When a delivery window changed on short notice, their team adjusted the route and kept us updated the whole time. That kind of responsiveness is rare.",
    name: "Elena Vasquez",
    role: "Operations Director, Meridian Auto Parts",
  },
  {
    id: "testimonial-9",
    quote:
      "We've worked with several carriers over the years, and Yopo Transport is one of the few that treats every shipment like it matters, big or small.",
    name: "Grant Whitmore",
    role: "General Manager, Whitmore & Sons Distribution",
  },
  {
    id: "testimonial-10",
    quote:
      "Reliable, communicative, and fair on pricing. Exactly what we look for in a long-term transportation partner.",
    name: "Lindsay Park",
    role: "Director of Logistics, Alderbrook Manufacturing",
  },
];

export type ValueIcon =
  | "safety"
  | "reliability"
  | "commitment"
  | "transparency"
  | "technology"
  | "standards"
  | "positivity"
  | "accountability"
  | "improvement";

export type ValueItem = {
  icon: ValueIcon;
  title: string;
  description: string;
};

export const coreValues: ValueItem[] = [
  {
    icon: "safety",
    title: "Safety First",
    description:
      "Every shipment is handled with rigorous attention to safety standards, from equipment checks to driver conduct on the road.",
  },
  {
    icon: "reliability",
    title: "Reliability",
    description:
      "We build routes and schedules our customers can plan around, and we communicate early if anything changes.",
  },
  {
    icon: "commitment",
    title: "Customer Commitment",
    description:
      "Your freight is treated as a priority, not a transaction. We aim to be a transportation partner you can count on long-term.",
  },
  {
    icon: "transparency",
    title: "Transparency",
    description:
      "Clear pricing, honest timelines, and proactive updates — no surprises between quote and delivery.",
  },
  {
    icon: "technology",
    title: "Technology-Driven",
    description:
      "We invest in tools that give our team and customers better visibility, from live tracking to proactive status updates.",
  },
  {
    icon: "standards",
    title: "High Standards",
    description:
      "Every driver, vehicle, and process is held to a consistently high standard — not just when it's convenient.",
  },
  {
    icon: "positivity",
    title: "Positive Culture",
    description:
      "We build a workplace and partner experience defined by respect, positivity, and genuine care for the people we work with.",
  },
  {
    icon: "accountability",
    title: "Accountability",
    description:
      "When something doesn't go as planned, we own it, communicate quickly, and work to make it right.",
  },
  {
    icon: "improvement",
    title: "Continuous Improvement",
    description:
      "We regularly review our processes and listen to feedback to find better ways to serve our customers.",
  },
];

export type TeamDepartment =
  | "CEO"
  | "Dispatch"
  | "Safety & Compliance"
  | "Accounting & Finance"
  | "Maintenance"
  | "Customer Service";

// Display order for team departments on the Team page.
export const teamDepartments: TeamDepartment[] = [
  "CEO",
  "Dispatch",
  "Safety & Compliance",
  "Accounting & Finance",
  "Maintenance",
  "Customer Service",
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  department: TeamDepartment;
  image: string;
  phone: string;
  email: string;
  bio: string;
};

// Placeholder team members — replace with real staff information and photos.
export const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Goran Videnov",
    role: "PRESIDENT & CEO",
    department: "CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "ceo@yopotransport.com",
    bio: "[Placeholder bio] Oversees company strategy and operations, ensuring every customer receives dependable, high-quality service.",
  },
  {
    id: "team-2",
    name: "Antonio Andonov",
    role: "Dispatch Lead",
    department: "Dispatch",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "operations@yopotransport.com",
    bio: "[Placeholder bio] Manages day-to-day logistics operations, coordinating carriers and routes to keep freight moving on schedule.",
  },
  {
    id: "team-6",
    name: "Martin Mitkovski",
    role: "Dispatch Lead",
    department: "Dispatch",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "dispatch.lead@yopotransport.com",
    bio: "[Placeholder bio] Coordinates real-time dispatch and driver communication to keep shipments on track.",
  },
  {
    id: "team-5",
    name: "[Full Name]",
    role: "[Logistics Coordinator]",
    department: "Dispatch",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "logistics@yopotransport.com",
    bio: "[Placeholder bio] Plans routes and coordinates pickup and delivery windows across our carrier network.",
  },
  {
    id: "team-9",
    name: "[Full Name]",
    role: "[Senior Dispatcher]",
    department: "Dispatch",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "dispatcher@yopotransport.com",
    bio: "[Placeholder bio] Supports daily dispatch operations, matching loads to drivers and keeping routes on schedule.",
  },
  {
    id: "team-10",
    name: "[Full Name]",
    role: "[Load Planner]",
    department: "Dispatch",
    image:
      "https://images.unsplash.com/photo-1609436132311-e4b0c9370469?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "loadplanning@yopotransport.com",
    bio: "[Placeholder bio] Plans load sequencing and trailer capacity to keep every route efficient.",
  },
  {
    id: "team-11",
    name: "[Full Name]",
    role: "[Dispatch Coordinator]",
    department: "Dispatch",
    image:
      "https://images.unsplash.com/photo-1675869940341-d495d49010b5?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "dispatch.coordinator@yopotransport.com",
    bio: "[Placeholder bio] Coordinates driver check-ins and route updates throughout the day.",
  },
  {
    id: "team-3",
    name: "Larry Rickus",
    role: "Safety Manager",
    department: "Safety & Compliance",
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "safety@yopotransport.com",
    bio: "[Placeholder bio] Leads safety compliance and driver standards, keeping every shipment aligned with best practices.",
  },
  {
    id: "team-12",
    name: "Angel Markov",
    role: "Safety Coordinator",
    department: "Safety & Compliance",
    image:
      "https://images.unsplash.com/photo-1780732997580-df3992363434?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "safety.coordinator@yopotransport.com",
    bio: "[Placeholder bio] Supports driver safety training and monitors compliance across the fleet.",
  },
  {
    id: "team-13",
    name: "Aleksandar Likarski",
    role: "Safety Coordinator",
    department: "Safety & Compliance",
    image:
      "https://images.unsplash.com/photo-1609371497456-3a55a205d5eb?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "compliance@yopotransport.com",
    bio: "[Placeholder bio] Maintains DOT compliance records and prepares the fleet for inspections and audits.",
  },
  {
    id: "team-7",
    name: "[Full Name]",
    role: "[Staff Accountant]",
    department: "Accounting & Finance",
    image:
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "accounting@yopotransport.com",
    bio: "[Placeholder bio] Manages billing, carrier settlements, and day-to-day accounting to keep the business running smoothly.",
  },
  {
    id: "team-14",
    name: "[Full Name]",
    role: "[Accounts Payable Specialist]",
    department: "Accounting & Finance",
    image:
      "https://images.unsplash.com/photo-1573497491207-618cc224f243?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "ap@yopotransport.com",
    bio: "[Placeholder bio] Manages vendor payments and carrier settlements to keep accounts current.",
  },
  {
    id: "team-15",
    name: "[Full Name]",
    role: "[Billing Coordinator]",
    department: "Accounting & Finance",
    image:
      "https://images.unsplash.com/photo-1758518729459-235dcaadc611?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "billing@yopotransport.com",
    bio: "[Placeholder bio] Prepares customer invoices and resolves billing questions quickly and accurately.",
  },
  {
    id: "team-8",
    name: "[Full Name]",
    role: "[Fleet Maintenance Coordinator]",
    department: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "maintenance@yopotransport.com",
    bio: "[Placeholder bio] Schedules preventive maintenance and repairs to keep every vehicle safe and on the road.",
  },
  {
    id: "team-16",
    name: "[Full Name]",
    role: "[Lead Diesel Technician]",
    department: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1780733057909-e40d3f4c8cbe?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "techsupport@yopotransport.com",
    bio: "[Placeholder bio] Leads hands-on repairs and inspections to keep the fleet safe and road-ready.",
  },
  {
    id: "team-17",
    name: "[Full Name]",
    role: "[Maintenance Scheduler]",
    department: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1771898343647-bd979ad8cca5?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "maintenance.scheduling@yopotransport.com",
    bio: "[Placeholder bio] Schedules service appointments and tracks maintenance records for every vehicle.",
  },
  {
    id: "team-4",
    name: "[Full Name]",
    role: "[Customer Success Manager]",
    department: "Customer Service",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "customersuccess@yopotransport.com",
    bio: "[Placeholder bio] Serves as the primary point of contact for clients, ensuring clear communication from quote to delivery.",
  },
  {
    id: "team-18",
    name: "[Full Name]",
    role: "[Customer Service Representative]",
    department: "Customer Service",
    image:
      "https://images.unsplash.com/photo-1780733058027-680a7c841fe5?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "support@yopotransport.com",
    bio: "[Placeholder bio] Answers customer questions and shares real-time shipment updates.",
  },
  {
    id: "team-19",
    name: "[Full Name]",
    role: "[Client Relations Specialist]",
    department: "Customer Service",
    image:
      "https://images.unsplash.com/photo-1580411415491-a672219c801b?q=80&w=800&auto=format&fit=crop",
    phone: siteConfig.phone,
    email: "clientrelations@yopotransport.com",
    bio: "[Placeholder bio] Builds long-term relationships with customers and helps resolve account issues.",
  },
];

export const serviceOptions = [
  "Freight Transportation",
  "Full Truckload (FTL)",
  "Less Than Truckload (LTL)",
  "Long-Distance Transportation",
  "Regional Transportation",
  "Dedicated Transportation",
  "Logistics Solutions",
  "Other / Not Sure",
];