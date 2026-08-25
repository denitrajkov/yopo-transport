export const siteConfig = {
  name: "Yopo Transport",
  tagline: "Freight Moved With Precision",
  description:
    "Yopo Transport delivers premium freight transportation and logistics solutions across the United States, built on reliability, safety, and dedicated service.",
  // Placeholder contact details — replace with real company information.
  phone: "(555) 010-2024",
  email: "dispatch@yopotransport.com",
  address: "[Street Address], [City], [State] [ZIP]",
  hoursShort: "Mon–Fri, 7am–7pm CT",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
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
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1766785368863-f2188a8c8b32?q=80&w=1600&auto=format&fit=crop",
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

// Placeholder testimonials — replace with real, permissioned client feedback.
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "[Placeholder testimonial] Yopo Transport made our shipping process seamless from the first call to final delivery. Communication was clear every step of the way.",
    name: "[Client Name]",
    role: "[Company Name], [Title]",
  },
  {
    id: "testimonial-2",
    quote:
      "[Placeholder testimonial] Their team handled a tight timeline with professionalism and kept us updated the entire time. We felt confident our freight was in good hands.",
    name: "[Client Name]",
    role: "[Company Name], [Title]",
  },
  {
    id: "testimonial-3",
    quote:
      "[Placeholder testimonial] Reliable, responsive, and easy to work with. Exactly what we look for in a transportation partner.",
    name: "[Client Name]",
    role: "[Company Name], [Title]",
  },
];

export type ValueItem = {
  title: string;
  description: string;
};

export const coreValues: ValueItem[] = [
  {
    title: "Safety First",
    description:
      "Every shipment is handled with rigorous attention to safety standards, from equipment checks to driver conduct on the road.",
  },
  {
    title: "Reliability",
    description:
      "We build routes and schedules our customers can plan around, and we communicate early if anything changes.",
  },
  {
    title: "Customer Commitment",
    description:
      "Your freight is treated as a priority, not a transaction. We aim to be a transportation partner you can count on long-term.",
  },
  {
    title: "Transparency",
    description:
      "Clear pricing, honest timelines, and proactive updates — no surprises between quote and delivery.",
  },
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
};

// Placeholder team members — replace with real staff information and photos.
export const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "[Full Name]",
    role: "[Chief Executive Officer]",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    bio: "[Placeholder bio] Oversees company strategy and operations, ensuring every customer receives dependable, high-quality service.",
  },
  {
    id: "team-2",
    name: "[Full Name]",
    role: "[Director of Operations]",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    bio: "[Placeholder bio] Manages day-to-day logistics operations, coordinating carriers and routes to keep freight moving on schedule.",
  },
  {
    id: "team-3",
    name: "[Full Name]",
    role: "[Head of Fleet Safety]",
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=800&auto=format&fit=crop",
    bio: "[Placeholder bio] Leads safety compliance and driver standards, keeping every shipment aligned with best practices.",
  },
  {
    id: "team-4",
    name: "[Full Name]",
    role: "[Customer Success Manager]",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    bio: "[Placeholder bio] Serves as the primary point of contact for clients, ensuring clear communication from quote to delivery.",
  },
  {
    id: "team-5",
    name: "[Full Name]",
    role: "[Logistics Coordinator]",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    bio: "[Placeholder bio] Plans routes and coordinates pickup and delivery windows across our carrier network.",
  },
  {
    id: "team-6",
    name: "[Full Name]",
    role: "[Dispatch Lead]",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    bio: "[Placeholder bio] Coordinates real-time dispatch and driver communication to keep shipments on track.",
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