import type { Metadata } from "next";
import Link from "next/link";
import { InteriorHero, SectionHeading } from "@/components/page-parts";
import { FooterCta } from "@/components/site-shell";

export const metadata: Metadata = { title: "How It Works", description: "See the Financial Groove path from first conversation through onboarding and ongoing support." };
const steps = [
  ["01", "Share the headline", "Start with a short email or call. Tell us what you do, what feels stuck, and what kind of help you think you need."],
  ["02", "Fit conversation", "We listen for the shape of the work, confirm whether Financial Groove is a fit, and identify the most useful next step."],
  ["03", "Scope and next steps", "You receive a clear description of the proposed work, responsibilities, and how we would begin. No surprise choreography."],
  ["04", "Secure information", "When you decide to move forward, we use an organized, secure process for documents and access—not sensitive attachments in ordinary email."],
  ["05", "Onboarding", "We gather records, connect the right systems, define the working cadence, and resolve the first set of open questions."],
  ["06", "Working rhythm", "You know what happens when, where information lives, and how to bring us questions as the business moves."],
  ["07", "Review and adjust", "The relationship should keep supporting the actual work. As needs change, we revisit the fit and the next priority."],
];
export default function HowItWorksPage() {
  return <><InteriorHero dark eyebrow="How it works" title="A clear path to cleaner numbers." intro="We make the entrance visible, the handoffs organized, and the ongoing rhythm easy to understand." actions={<Link className="button" href="/get-started">Begin at step one <span aria-hidden="true">→</span></Link>} /><section className="section"><div className="shell"><SectionHeading eyebrow="The sequence" title="From first hello to steady support." text="The details vary by service, but the shape stays clear." /><div className="process-list">{steps.map(([number, title, text]) => <article className="process-step" key={number}><strong>{number}</strong><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><section className="section section-paper"><div className="shell split-grid"><div><span className="eyebrow">What to bring</span><h2>Context is more useful than perfection.</h2></div><div className="split-copy"><p>You do not need pristine books or a polished explanation before reaching out. A basic overview of the business, the current challenge, and your timing gives us enough to begin a productive conversation.</p><p>Please do not email sensitive tax or identity documents. Existing clients should use the secure portal.</p><div className="button-row"><Link className="button" href="/get-started">Start here</Link><Link className="button button-outline" href="/client-portal">Client portal</Link></div></div></div></section><FooterCta /></>;
}
