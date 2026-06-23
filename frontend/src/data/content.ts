/**
 * Site content for Manny's Construction LLC
 * Updated with verified business info from client materials.
 * Business rule: No fake reviews, stats, or client logos — credibility through real info only.
 */

export const COMPANY = {
  name: "Manny's Construction LLC",
  logo: "/many-logo(1).png",
  owner: "Manuel Mendez",
  phone: "(620) 621-4294",
  phoneHref: "tel:+16206214294",
  whatsappHref: "https://wa.me/16206214294",
  phoneSecondary: "(804) 937-8708",
  phoneSecondaryHref: "tel:+18049378708",
  email: "mannys_2222@icloud.com",
  emailHref: "mailto:mannys_2222@icloud.com",
  address: "104 W 2nd St, Liberal, KS 67901, United States",
  city: "Liberal, KS",
  zip: "67901",
  hours: "24 hours open",
  facebook: "https://www.facebook.com/",
  tiktok: "https://www.tiktok.com/@mannys_2222",
} as const

/** Verified Google review — single real client testimonial, no fabricated reviews */
export const TESTIMONIAL = {
  name: "Diana Meza",
  text: "Good service and excellent knowledge of remodeling needs, thank you Manuel!",
  rating: 5,
  source: "Google Review",
} as const

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const

/** Verified services from Manny's Construction LLC */
export const SERVICES = [
  {
    title: "Stucco",
    description:
      "Professional stucco application and repair for durable, attractive exterior finishes on homes and commercial buildings.",
    icon: "stucco",
    image: "/services/stucco.jpg",
  },
  {
    title: "Framing",
    description:
      "Structural framing for new construction, additions and remodels. Built strong and built to code.",
    icon: "framing",
    image: "/services/framing.jpg",
  },
  {
    title: "Drywall",
    description:
      "Expert drywall installation, taping and finishing for smooth, flawless walls and ceilings.",
    icon: "drywall",
    image: "/services/drywall.jpg",
  },
  {
    title: "Painting",
    description:
      "Interior and exterior painting services that protect surfaces and give your property a fresh, polished look.",
    icon: "painting",
    image: "/services/painting.jpg",
  },
  {
    title: "Plumbing",
    description:
      "Reliable plumbing work for repairs, installations and upgrades in residential and commercial spaces.",
    icon: "plumbing",
    image: "/services/plumbing.jpg",
  },
  {
    title: "Electrical",
    description:
      "Safe, professional electrical services for wiring, fixtures and system improvements.",
    icon: "electrical",
    image: "/services/electrical.jpg",
  },
  {
    title: "Roofing",
    description:
      "Roofing installation, repair and maintenance to keep your property protected in every season.",
    icon: "roofing",
    image: "/services/roofing.jpg",
  },
  {
    title: "Remodeling",
    description:
      "Full remodeling services to transform kitchens, bathrooms and living spaces to match your vision.",
    icon: "remodeling",
    image: "/services/remodeling.jpg",
  },
  {
    title: "Concrete",
    description:
      "Concrete work including foundations, driveways, patios and general flatwork built to last.",
    icon: "concrete",
    image: "/services/concrete.jpg",
  },
] as const

export const WHY_CHOOSE_US = [
  {
    title: "Quality Craftsmanship",
    description: "Every project is completed with attention to detail and durable, professional results.",
  },
  {
    title: "Reliable Timelines",
    description: "We respect your schedule with clear milestones and consistent progress updates.",
  },
  {
    title: "Honest Communication",
    description: "Transparent pricing, straightforward answers and no surprises along the way.",
  },
  {
    title: "Customer Satisfaction",
    description: "Your vision guides our work and we don't consider a job done until you're satisfied.",
  },
  {
    title: "Skilled Team",
    description: "Experienced professionals who take pride in delivering work you can trust.",
  },
  {
    title: "Local Experts",
    description: "Based in Liberal, KS, we understand local properties and community needs.",
  },
] as const

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description: "We listen to your goals, assess your space and understand your vision and budget.",
  },
  {
    step: "02",
    title: "Planning",
    description: "We develop a clear scope of work, materials plan and project roadmap.",
  },
  {
    step: "03",
    title: "Estimate",
    description: "You receive a detailed, honest estimate with no hidden fees or vague line items.",
  },
  {
    step: "04",
    title: "Construction",
    description: "Our team executes with precision, keeping you informed at every stage.",
  },
  {
    step: "05",
    title: "Final Walkthrough",
    description: "We review the completed work together and ensure everything meets your expectations.",
  },
] as const

export const SERVICE_AREAS = [
  "Liberal, KS",
  "Hugoton, KS",
  "Guymon, OK",
  "Dodge City, KS",
  "Seward County",
  "Southwest Kansas",
] as const

export const FAQ_ITEMS = [
  {
    question: "What types of projects does Manny's Construction LLC handle?",
    answer:
      "We offer stucco, framing, drywall, painting, plumbing, electrical, roofing, remodeling and concrete services for residential and commercial properties in the Liberal, KS area.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide free estimates so you can understand the scope and cost of your project before making any commitment. Contact us to schedule a consultation.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Liberal, Kansas (67901) and proudly serve Liberal and surrounding communities throughout Southwest Kansas and the nearby region.",
  },
  {
    question: "How do I get started on a project?",
    answer:
      "Call us at (620) 621-4294, (804) 937-8708, or email mannys_2222@icloud.com. You can also fill out our contact form and we'll schedule a consultation to discuss your goals.",
  },
  {
    question: "Do you work on both residential and commercial properties?",
    answer:
      "Yes. Whether you're updating a home, office, or commercial space, our team has the experience to deliver quality results for projects of various sizes.",
  },
  {
    question: "Who is the owner of Manny's Construction LLC?",
    answer:
      "Manny's Construction LLC is owned and operated by Manuel Mendez, serving the Liberal, Kansas community with professional construction services.",
  },
] as const
