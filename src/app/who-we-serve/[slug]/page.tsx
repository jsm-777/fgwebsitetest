import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckList, InteriorHero } from "@/components/page-parts";
import { Breadcrumbs, FooterCta } from "@/components/site-shell";
import { audiences, services } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return audiences.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const audience = audiences.find((item) => item.slug === slug); if (!audience) return {}; return { title: audience.name, description: audience.summary }; }

export default async function AudiencePage({ params }: Props) {
  const { slug } = await params; const audience = audiences.find((item) => item.slug === slug); if (!audience) notFound(); const recommended = services.filter((service) => audience.services.includes(service.name));
  const realities: Record<string, string[]> = {
    "dance-studios": ["Revenue and expenses change across enrollment, recital, and competition seasons", "Payroll, instructors, contractors, and production costs overlap", "Owners need to see beyond the balance in the bank"],
    performers: ["Income can arrive from multiple employers, gigs, and contract types", "Business and creative expenses need consistent records and context", "Career changes can alter the tax and planning picture quickly"],
    "creative-businesses": ["Project timelines and cash flow do not always move together", "Teams may shift between employees, freelancers, and vendors", "Useful reporting must match the way work is scoped and sold"],
    "new-founders": ["The order of setup decisions can feel unclear", "Early systems should be simple enough to maintain", "A creative idea needs an equally intentional business foundation"],
  };
  return <><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Who we serve", href: "/who-we-serve" }, { label: audience.name }]} /><InteriorHero dark eyebrow="Who we serve" title={audience.kicker} intro={audience.summary} actions={<Link className="button" href="/get-started">Find your starting point <span aria-hidden="true">→</span></Link>} /><section className="section"><div className="shell details-grid"><div className="details-sticky"><span className="eyebrow">We understand</span><h2>The financial reality behind the creative work.</h2></div><div className="details-stack"><div className="detail-panel"><h3>What makes this work different</h3><CheckList items={realities[audience.slug]} /></div><div className="detail-panel outcome-panel"><h3>What better support feels like</h3><p>You have a clear place for questions, a repeatable financial rhythm, and information that makes sense in the context of your work.</p></div></div></div></section><section className="section section-paper"><div className="shell"><div className="section-heading"><span className="eyebrow">Recommended services</span><h2>Start where the pressure is.</h2></div><div className="card-grid">{recommended.map((service) => <Link className="link-card" key={service.slug} href={`/services/${service.slug}`}><span className="resource-meta">Service</span><h3>{service.name}</h3><p>{service.short}</p><span className="text-link">Explore <b aria-hidden="true">→</b></span></Link>)}</div></div></section><FooterCta /></>;
}
