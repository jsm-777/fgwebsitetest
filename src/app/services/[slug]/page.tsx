import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckList, InteriorHero } from "@/components/page-parts";
import { Breadcrumbs, FooterCta } from "@/components/site-shell";
import { services } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const service = services.find((item) => item.slug === slug); if (!service) return {}; return { title: service.name, description: service.intro }; }

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const related = services.filter((item) => item.slug !== slug).slice(0, 3);
  return <><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]} /><InteriorHero eyebrow="Service" title={service.name} intro={service.intro} actions={<><Link className="button" href="/get-started">Discuss {service.name.toLowerCase()} <span aria-hidden="true">→</span></Link><Link className="button button-outline" href="/services">All services</Link></>} /><section className="section"><div className="shell details-grid"><div className="details-sticky"><span className="eyebrow">The fit</span><h2>Made for the work behind the work.</h2><p className="lede">{service.short}</p></div><div className="details-stack"><div className="detail-panel"><h3>This can be a fit for</h3><CheckList items={service.for} /></div><div className="detail-panel"><h3>What the work can include</h3><CheckList items={service.includes} /></div><div className="detail-panel outcome-panel"><span className="eyebrow eyebrow-light">The outcome</span><h3>A clearer operating rhythm</h3><p>{service.outcome}</p></div></div></div></section><section className="section section-paper"><div className="shell"><div className="section-heading"><span className="eyebrow">Keep exploring</span><h2>Connected support for the whole picture.</h2></div><div className="card-grid">{related.map((item) => <Link className="link-card" key={item.slug} href={`/services/${item.slug}`}><span className="resource-meta">Service</span><h3>{item.name}</h3><p>{item.short}</p><span className="text-link">Explore <b aria-hidden="true">→</b></span></Link>)}</div></div></section><FooterCta title={`Let’s talk about ${service.name.toLowerCase()}.`} /></>;
}
