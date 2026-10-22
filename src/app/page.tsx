import Image from "next/image";
import Link from "next/link";
import { LinkCard, SectionHeading, StatBand } from "@/components/page-parts";
import { FooterCta, RelatedPaths } from "@/components/site-shell";
import { articles, services } from "@/lib/site-data";

export default function Home() {
  const process = [
    ["01", "Tell us your story", "Share what you do, where the friction lives, and what you want to change."],
    ["02", "Find the fit", "We identify the right starting point and confirm whether we are a good match."],
    ["03", "Build the rhythm", "A clear onboarding sequence turns loose ends into an organized working system."],
    ["04", "Move forward", "Ongoing support helps your numbers keep pace with the work you are building."],
  ];
  return <>
    <section className="home-hero"><div className="shell home-hero-grid"><div className="hero-copy"><span className="eyebrow eyebrow-light">Accounting for arts &amp; entertainment</span><h1>You create. <em>We keep count.</em></h1><p className="lede">Bookkeeping, tax, payroll, and financial guidance built for artists, studios, and creative businesses.</p><div className="button-row"><Link className="button" href="/get-started">Find your next step <span aria-hidden="true">→</span></Link><Link className="button button-outline button-light" href="/services">Explore services</Link></div></div><div className="hero-portrait"><Image src="/brand/graphics/footsteps-path-pink.svg" className="hero-footsteps" width={240} height={230} alt="" /><Image src="/brand/photos/jessica-portrait.jpg" fill priority sizes="(max-width: 760px) 410px, 36vw" alt="Jessica Scheitler, founder of Financial Groove" /><span className="hero-portrait-badge">Founded by a dancer. Built for creatives.</span></div></div></section>
    <section className="section"><div className="shell split-grid"><div className="statement-card"><strong>01</strong><h3>Your finances deserve their own choreography.</h3></div><div className="split-copy"><span className="eyebrow">Built for your world</span><h2>Creative work doesn’t follow a generic script.</h2><p>Seasonal revenue, contract income, changing casts, multiple projects, tuition cycles, and production costs make your financial picture distinct. Financial Groove brings accounting expertise together with real arts-industry fluency.</p><p>That means clearer systems, more useful conversations, and advice grounded in how your work actually moves.</p><Link className="text-link" href="/about">Why Financial Groove <b aria-hidden="true">→</b></Link></div></div></section>
    <StatBand />
    <section className="section section-paper"><div className="shell"><SectionHeading eyebrow="What we do" title="The business behind your art, in rhythm." text="Choose focused support or build a connected financial system around the work." /><div className="card-grid">{services.slice(0, 6).map((service) => <LinkCard key={service.slug} href={`/services/${service.slug}`} title={service.name} text={service.short} icon={service.icon} />)}</div><div className="button-row"><Link className="button button-outline" href="/services">See every service <span aria-hidden="true">→</span></Link></div></div></section>
    <RelatedPaths />
    <section className="section section-paper"><div className="shell"><SectionHeading eyebrow="How it works" title="A clear line from first hello to steady support." text="No mystery entrance. No backstage maze. Just a practical sequence built to get the right information to the right place." /><div className="process-list">{process.map(([number, title, text]) => <div className="process-step" key={number}><strong>{number}</strong><h3>{title}</h3><p>{text}</p></div>)}</div><div className="button-row"><Link className="button" href="/how-it-works">See the full process <span aria-hidden="true">→</span></Link></div></div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="From the resource room" title="Small lessons. Stronger financial habits." text="Practical guidance for the business side of creative work." /><div className="card-grid">{articles.map((article) => <Link className="resource-card" key={article.slug} href={`/resources/articles/${article.slug}`}><span className="resource-meta">{article.category} · {article.readTime}</span><h3>{article.title}</h3><p>{article.dek}</p><span className="text-link">Read article <b aria-hidden="true">→</b></span></Link>)}</div></div></section>
    <FooterCta />
  </>;
}
