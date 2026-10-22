import type { Metadata } from "next";
import Link from "next/link";
import { InteriorHero } from "@/components/page-parts";
import { FooterCta } from "@/components/site-shell";

export const metadata: Metadata = { title: "Frequently Asked Questions", description: "Common questions about working with Financial Groove." };
const faqs = [
  ["Do I need to know which service I need?", "No. Tell us what is happening, what you want to change, and any timing pressure. We can help identify the most useful starting conversation."],
  ["Does Financial Groove only work with dance studios?", "Dance is a core area of fluency, but Financial Groove also supports performers, creative founders, and arts and entertainment businesses."],
  ["Can I send tax documents by email?", "Please do not send sensitive identity, tax, or financial documents through ordinary email. Existing clients should use the secure ShareFile portal."],
  ["Does the website list pricing?", "No. Scope can vary by service and situation, so current terms are discussed after Financial Groove understands the work."],
  ["What should I include in a first inquiry?", "Share what you do, the challenge that prompted you to reach out, the kind of help you are considering, and any meaningful deadline. Do not include sensitive documents."],
  ["Is website content tax or legal advice?", "No. Website resources are general education. Individual facts matter, and professional advice should be based on your specific situation."],
];
export default function FaqPage() {
  return <><InteriorHero eyebrow="Frequently asked questions" title="A little clarity before we begin." intro="Quick answers about fit, process, privacy, and the first conversation." /><section className="section"><div className="shell details-grid"><div className="details-sticky"><span className="eyebrow">Good to know</span><h2>Start with the real situation.</h2><p className="lede">You do not have to arrive with a perfect system or the perfect terminology.</p></div><div className="details-stack">{faqs.map(([question, answer]) => <article className="detail-panel" key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></div></section><section className="section section-paper"><div className="shell split-grid"><div><span className="eyebrow">Still wondering?</span><h2>Bring us the question.</h2></div><div className="split-copy"><p>A short, plain-language introduction is the easiest way to get the right answer.</p><Link className="button" href="/contact">Contact Financial Groove <span aria-hidden="true">→</span></Link></div></div></section><FooterCta /></>;
}
