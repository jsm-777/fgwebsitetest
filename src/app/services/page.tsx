import type { Metadata } from "next";
import Link from "next/link";
import { InteriorHero, LinkCard, SectionHeading } from "@/components/page-parts";
import { FooterCta } from "@/components/site-shell";
import { services } from "@/lib/site-data";

export const metadata: Metadata = { title: "Services", description: "Bookkeeping, tax, payroll, coaching, formation, sales-tax, and receipt-management support for creative businesses." };

export default function ServicesPage() {
  return <><InteriorHero dark eyebrow="Services" title="Financial support with creative range." intro="Bring the business side of your work into a clearer rhythm—from everyday books to tax season and the systems in between." actions={<Link className="button" href="/get-started">Talk through your needs <span aria-hidden="true">→</span></Link>} /><section className="section"><div className="shell"><SectionHeading eyebrow="Find your fit" title="Start with the pressure point." text="Each service can solve a focused need. Together, they can create a more connected financial operating system." /><div className="card-grid">{services.map((service) => <LinkCard key={service.slug} href={`/services/${service.slug}`} title={service.name} text={service.short} icon={service.icon} />)}</div></div></section><section className="section section-paper"><div className="shell split-grid"><div><span className="eyebrow">Not sure what to choose?</span><h2>Begin with the question, not the package.</h2></div><div className="split-copy"><p>You do not need to diagnose the whole business before reaching out. Tell us what feels unclear, late, manual, or hard to trust. We’ll use that context to identify a sensible next conversation.</p><Link className="button" href="/get-started">Start here <span aria-hidden="true">→</span></Link></div></div></section><FooterCta /></>;
}
