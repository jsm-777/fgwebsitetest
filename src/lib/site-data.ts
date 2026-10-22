export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  icon: string;
  for: string[];
  includes: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    slug: "bookkeeping",
    name: "Bookkeeping",
    short: "Clear books. Better decisions. More room to create.",
    intro: "Ongoing bookkeeping shaped around the realities of creative work—from uneven seasons to multiple income streams.",
    icon: "bookkeeping",
    for: ["Studio owners balancing tuition, payroll, and productions", "Creative businesses ready to move beyond catch-up mode", "Owners who want useful reports, not mystery spreadsheets"],
    includes: ["Consistent transaction review and categorization", "Financial statements you can actually use", "A reliable monthly rhythm for your books"],
    outcome: "Know where the business stands and make the next decision with confidence.",
  },
  {
    slug: "tax",
    name: "Tax",
    short: "Tax support that understands creative income.",
    intro: "Preparation and planning for artists, owners, and creative businesses—without forcing your work into a generic box.",
    icon: "tax",
    for: ["Performers and freelancers with contract income", "Creative business owners", "Clients who want a calmer, better-organized tax season"],
    includes: ["Individual and business return preparation", "Clear document-request guidance", "Year-round planning conversations when appropriate"],
    outcome: "Move through tax season organized, informed, and ready for what comes next.",
  },
  {
    slug: "payroll-1099",
    name: "Payroll & 1099",
    short: "Keep your people paid and your records in step.",
    intro: "Practical support for teams that include employees, instructors, contractors, and changing production schedules.",
    icon: "payroll",
    for: ["Studios with instructors and staff", "Productions and project-based creative teams", "Owners sorting out employee and contractor workflows"],
    includes: ["Payroll-process support", "Contractor-payment organization", "Year-end 1099 coordination"],
    outcome: "Create a steadier operating rhythm for the people who keep the work moving.",
  },
  {
    slug: "coaching",
    name: "Financial Coaching",
    short: "Guidance for owners who want to stay hands-on.",
    intro: "A collaborative option for creative people who want financial fluency, clearer systems, and support making decisions.",
    icon: "coaching",
    for: ["New owners building their first financial routine", "DIY bookkeepers who want a knowledgeable guide", "Creatives preparing for a new stage of growth"],
    includes: ["Focused working sessions", "Plain-language financial education", "Action steps built around your goals"],
    outcome: "Build the confidence to understand your numbers and use them well.",
  },
  {
    slug: "business-formation",
    name: "Business Formation",
    short: "Start the business with a stronger foundation.",
    intro: "Early-stage guidance for creative founders turning a practice, studio, or idea into a real business.",
    icon: "formation",
    for: ["Artists becoming business owners", "New studios and creative ventures", "Founders who need a practical starting sequence"],
    includes: ["Formation-readiness guidance", "Core financial-system planning", "Coordination around your next professional steps"],
    outcome: "Begin with fewer loose ends and a clearer picture of what responsible ownership requires.",
  },
  {
    slug: "sales-tax",
    name: "Sales Tax",
    short: "Make sense of where sales tax enters the picture.",
    intro: "Support for creative businesses navigating sales-tax questions, registration, and recurring compliance needs.",
    icon: "sales-tax",
    for: ["Studios and shops selling products", "Creative businesses operating across revenue types", "Owners facing unfamiliar state requirements"],
    includes: ["Situation and nexus review", "Registration and filing support where applicable", "A repeatable compliance calendar"],
    outcome: "Replace scattered uncertainty with a defined compliance process.",
  },
  {
    slug: "dext",
    name: "Dext Receipt Management",
    short: "A cleaner path from receipt to record.",
    intro: "Receipt-capture workflow support for eligible bookkeeping clients who are ready to leave the paper pile behind.",
    icon: "receipts",
    for: ["Owners collecting receipts across multiple cards and locations", "Teams that need a consistent upload habit", "Bookkeeping clients ready to streamline document capture"],
    includes: ["Workflow setup guidance", "A central receipt-capture routine", "Connection to the bookkeeping process"],
    outcome: "Spend less time chasing documents and more time using complete information.",
  },
];

export const audiences = [
  { slug: "dance-studios", name: "Dance studio owners", kicker: "You run the floor.", summary: "From tuition and teachers to costumes and competition season, your numbers move differently. We speak studio.", services: ["Bookkeeping", "Payroll & 1099", "Tax", "Coaching"] },
  { slug: "performers", name: "Performers & freelance artists", kicker: "Your career has many roles.", summary: "Contract income, touring, gigs, creative expenses, and tax forms can pile up fast. We help you bring the whole picture together.", services: ["Tax", "Coaching", "Bookkeeping"] },
  { slug: "creative-businesses", name: "Creative & entertainment businesses", kicker: "Keep the business behind the work in rhythm.", summary: "Production, music, events, design, and adjacent creative companies get practical financial support built for project-based work.", services: ["Bookkeeping", "Payroll & 1099", "Sales Tax", "Tax"] },
  { slug: "new-founders", name: "New creative founders", kicker: "Build the backstage before opening night.", summary: "Turn an idea into a business with a clearer sequence for setup, systems, and financial decision-making.", services: ["Business Formation", "Coaching", "Bookkeeping"] },
];

export const articles = [
  {
    slug: "separate-business-and-personal-finances",
    category: "Build the basics",
    title: "One move that makes your books easier: separate the business",
    dek: "A dedicated financial lane gives every future decision a cleaner starting point.",
    readTime: "4 min read",
    sections: [
      ["Why separation matters", "Mixing business and personal activity creates extra sorting, weakens your view of performance, and makes tax-time organization harder. A dedicated business account turns a fuzzy record into a usable one."],
      ["Start with the practical version", "Use a business checking account for business income and expenses. Choose one business card for recurring costs. Then create a simple weekly habit for receipts and notes."],
      ["Keep the rhythm", "The goal is not a perfect system overnight. It is a repeatable routine that gives your bookkeeping process reliable source material month after month."],
    ],
  },
  {
    slug: "what-clean-books-show-you",
    category: "Know your numbers",
    title: "What clean books can show a creative business",
    dek: "Financial reports become useful when they answer the questions you actually have.",
    readTime: "5 min read",
    sections: [
      ["See the whole season", "Creative revenue can be cyclical. Clean monthly records make it easier to compare busy periods, plan for quieter ones, and separate a normal seasonal dip from a real warning sign."],
      ["Understand the cost of the work", "Good records can help you see what programs, projects, or productions cost—so pricing and budgeting conversations are rooted in evidence."],
      ["Make the next call", "Your reports should support decisions about staffing, timing, cash reserves, and growth. If they only arrive at tax time, they are not doing their full job."],
    ],
  },
  {
    slug: "prepare-for-tax-season",
    category: "Tax season",
    title: "A calmer tax season starts before the deadline",
    dek: "Build a simple document routine now and give your future self a cleaner handoff.",
    readTime: "4 min read",
    sections: [
      ["Gather by category", "Keep income documents, business expenses, estimated payments, and major life or business changes in clear groups. That makes missing pieces easier to spot."],
      ["Use the secure portal", "Sensitive documents belong in the approved ShareFile portal—not ordinary email. Uploading as items arrive also reduces the last-minute search."],
      ["Ask before assuming", "Creative expenses are contextual. Save the record and note the business purpose, then bring uncertain items to your tax professional for review."],
    ],
  },
];

export const contact = {
  phone: "(702) 966-0127",
  phoneHref: "tel:+17029660127",
  email: "getintothegroove@financialgroove.com",
  emailHref: "mailto:getintothegroove@financialgroove.com",
  address: "241 W Charleston Blvd, Suite 135, Las Vegas, NV 89102",
  shareFile: "https://financialgroove.sharefile.com/Authentication/Login",
};

export const allRoutes = [
  "", "services", ...services.map((item) => `services/${item.slug}`), "who-we-serve", ...audiences.map((item) => `who-we-serve/${item.slug}`), "how-it-works", "about", "about/jessica-scheitler", "client-stories", "get-started", "the-overture", "resources", "resources/tax-season", "resources/sharefile", "resources/faq", ...articles.map((item) => `resources/articles/${item.slug}`), "contact", "client-portal", "privacy", "accessibility",
];
