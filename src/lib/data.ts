export const siteConfig = {
  name: "Yopo Expedite",
  siteUrl: "https://www.yopotransport.com",
  tagline: "Freight Moved With Precision",
  description:
    "Yopo Expedite delivers premium freight transportation and logistics solutions across the United States, built on reliability, safety, and dedicated service.",
  // Placeholder contact details — replace with real company information.
  phone: "+1 708 550 4407",
  email: "safety@yopoexpedite.com",
  careersEmail: "safety@yopoexpedite.com",
  address: "15131 Kedzie Ave, Markham, IL 60248",
  hoursShort: "Mon–Fri, 7am–7pm CT",
  mapsUrl:
    "https://www.google.com/maps/place/Yopo+Parking/@41.6175381,-87.6972756,144m/data=!3m1!1e3!4m6!3m5!1s0x880e3dbf8bdc6ec7:0x775e8f41cf3e2f4!8m2!3d41.6177753!4d-87.6977153!16s%2Fg%2F11j2w66lyb?entry=tts&g_ep=EgoyMDI2MDYyOS4wIPu8ASoASAFQAw%3D%3D&skid=cdeb39d0-0356-4b9c-9eed-6e5e0ca3d6d1",
  mapsEmbedUrl: "https://www.google.com/maps?q=41.6177753,-87.6977153&z=16&output=embed",
};

// Placeholder social links — replace with your real profile URLs.
export const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/yopoexpediteinc" },
  { name: "Instagram", href: "https://www.instagram.com/yopoexpedite/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/yopo-expedite-inc" },
];

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/for-shippers", label: "Shippers" },
  { href: "/for-brokers", label: "Brokers" },
  { href: "/blog", label: "Blog" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

// Shown in the footer only, not the main nav.
export const footerOnlyLinks = [
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
      "/images/truck-face.png",
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
      "/images/yopo-freight.png",
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
      "/images/truck-nature.png",
    highlights: [
      "Pay-for-space pricing",
      "Consolidated network routing",
      "Ideal for recurring smaller loads",
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
      "Yopo Expedite has become our go-to carrier for time-sensitive freight. Their dispatch team communicates proactively, and we've never had a shipment arrive without warning if something changed.",
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
      "We switched most of our regional freight to Yopo Expedite last year and haven't looked back. On-time performance has been consistently strong.",
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
      "We ship a lot of LTL freight, and Yopo Expedite has been transparent about pricing and timelines every step of the way.",
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
      "We've worked with several carriers over the years, and Yopo Expedite is one of the few that treats every shipment like it matters, big or small.",
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
  | "Safety & Compliance";

// Display order for team departments on the Team page.
export const teamDepartments: TeamDepartment[] = [
  "CEO",
  "Dispatch",
  "Safety & Compliance",
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  department: TeamDepartment;
  image?: string;
  phone: string;
  extension?: string;
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
      "/images/goranvidenov.png",
    phone: siteConfig.phone,
    extension: "100",
    email: "goran@yopoexpedite.com",
    bio: "[Placeholder bio] Oversees company strategy and operations, ensuring every customer receives dependable, high-quality service.",
  },
  {
    id: "team-2",
    name: "Antonio Andonov",
    role: "Dispatch Lead",
    department: "Dispatch",
    phone: siteConfig.phone,
    extension: "233",
    email: "antonio@yopoexpedite.com",
    bio: "[Placeholder bio] Manages day-to-day logistics operations, coordinating carriers and routes to keep freight moving on schedule.",
  },
  {
    id: "team-6",
    name: "Martin Mitkovski",
    role: "Dispatch Lead",
    department: "Dispatch",
    phone: siteConfig.phone,
    extension: "210",
    email: "matt@yopoexpedite.com",
    bio: "[Placeholder bio] Coordinates real-time dispatch and driver communication to keep shipments on track.",
  },
  {
    id: "team-3",
    name: "Larry Rickus",
    role: "Safety Manager",
    department: "Safety & Compliance",
    phone: siteConfig.phone,
    extension: "770",
    email: "Larry@yopoexpedite.com",
    bio: "[Placeholder bio] Leads safety compliance and driver standards, keeping every shipment aligned with best practices.",
  },
  {
    id: "team-12",
    name: "Angel Markov",
    role: "Safety Coordinator",
    department: "Safety & Compliance",
    phone: siteConfig.phone,
    extension: "430",
    email: "angel@yopoexpedite.com",
    bio: "[Placeholder bio] Supports driver safety training and monitors compliance across the fleet.",
  },
  {
    id: "team-13",
    name: "Aleksandar Likarski",
    role: "Safety Coordinator",
    department: "Safety & Compliance",
    phone: siteConfig.phone,
    extension: "560",
    email: "ace@yopoexpedite.com",
    bio: "[Placeholder bio] Maintains DOT compliance records and prepares the fleet for inspections and audits.",
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