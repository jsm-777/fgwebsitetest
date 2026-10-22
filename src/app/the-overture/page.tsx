import type { Metadata } from "next";
import Link from "next/link";
import { CheckList, InteriorHero } from "@/components/page-parts";
import { FooterCta } from "@/components/site-shell";

export const metadata: Metadata = { title: "The Overture", description: "Learn about The Overture, Financial Groove's focused consultation starting point." };
export default function OverturePage() {
  return <><InteriorHero dark eyebrow="The Overture" title="Start with a focused conversation." intro="The Overture is designed to bring your questions, goals, and current financial picture into the same room—so the next move is clearer." actions={<Link className="button" href="/get-started">Ask about The Overture <span aria-hidden="true">→</span></Link>} /><section className="section"><div className="shell details-grid"><div className="details-sticky"><span className="eyebrow">The purpose</span><h2>Listen first. Then set the direction.</h2><p className="lede">A strong opening clarifies the story, the stakes, and the next useful action.</p></div><div className="details-stack"><div className="detail-panel"><h3>Bring the real questions</h3><CheckList items={["What feels unclear or difficult to manage", "What you want the business or career to support", "What is changing in the next season", "Where you may need ongoing help"]} /></div><div className="detail-panel"><h3>Leave with direction</h3><p>The goal is a shared understanding of your priorities and a practical recommendation for what should happen next. Contact Financial Groove for current format, availability, and terms.</p></div></div></div></section><FooterCta title="Ready for an opening conversation?" button="Ask about The Overture" /></>;
}
