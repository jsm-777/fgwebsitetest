import type { Metadata } from "next";
import Link from "next/link";
import { InteriorHero, SectionHeading } from "@/components/page-parts";
import { FooterCta } from "@/components/site-shell";
import { audiences } from "@/lib/site-data";

export const metadata: Metadata = { title: "Who We Serve", description: "Financial support for dance studios, performers, creative businesses, and new creative founders." };
export default function WhoWeServePage() {
  return <><InteriorHero eyebrow="Who we serve" title="People who make things happen." intro="Financial Groove is built for the artists, operators, educators, and founders who keep creative work moving." /><section className="section"><div className="shell"><SectionHeading eyebrow="Find your path" title="Your business has its own tempo." text="Choose the description that comes closest. We’ll help refine the fit from there." /><div className="card-grid card-grid-four">{audiences.map((audience, index) => <Link className="audience-card" key={audience.slug} href={`/who-we-serve/${audience.slug}`}><span className="card-index">0{index + 1}</span><h3>{audience.name}</h3><p>{audience.summary}</p><span className="text-link">See your path <b aria-hidden="true">→</b></span></Link>)}</div></div></section><section className="quote-block"><div className="shell"><p>Bridging the gap between creativity and business.</p></div></section><FooterCta /></>;
}
