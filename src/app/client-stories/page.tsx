import type { Metadata } from "next";
import Link from "next/link";
import { InteriorHero, SectionHeading } from "@/components/page-parts";
import { FooterCta } from "@/components/site-shell";

export const metadata: Metadata = { title: "Client Stories", description: "See the kinds of financial progress Financial Groove helps creative businesses pursue." };
const outcomes = [
  ["From catch-up to cadence", "A repeatable monthly process can replace the cycle of avoiding the books, scrambling for answers, and starting over."],
  ["From reports to decisions", "Useful categories and consistent review can turn financial statements into planning tools for staffing, programs, and growth."],
  ["From scattered to secure", "A defined document flow can reduce email clutter, missing receipts, and last-minute tax-season searches."],
];
export default function ClientStoriesPage() {
  return <><InteriorHero eyebrow="Client progress" title="The wins happen offstage, too." intro="Every client story is different. The shared goal is a financial system that supports clearer, steadier creative work." /><section className="section"><div className="shell"><SectionHeading eyebrow="Common transformations" title="What better financial support can change." text="These are representative outcomes—not promises or attributed testimonials." /><div className="card-grid">{outcomes.map(([title, text], index) => <article className="link-card" key={title}><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><section className="section section-paper"><div className="shell split-grid"><div><span className="eyebrow">Your version</span><h2>Start with what you want to feel different.</h2></div><div className="split-copy"><p>Maybe you need to trust the monthly numbers. Maybe tax season keeps arriving too fast. Maybe growth has outpaced the systems behind it. That real-world friction is the most useful place to begin.</p><Link className="button" href="/get-started">Tell us what is changing <span aria-hidden="true">→</span></Link></div></div></section><FooterCta /></>;
}
