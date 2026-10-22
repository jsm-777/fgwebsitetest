import Image from "next/image";
import Link from "next/link";
import { audiences, contact, services } from "@/lib/site-data";

export function BrandLogo({ dark = false }: { dark?: boolean }) {
  return <Image className="brand-logo" src={dark ? "/brand/logos/fg-horizontal-on-dark.svg" : "/brand/logos/fg-horizontal-color.svg"} width={300} height={72} priority alt="Financial Groove" />;
}

const primaryLinks = [["Services", "/services"], ["Who we serve", "/who-we-serve"], ["How it works", "/how-it-works"], ["Resources", "/resources"], ["About", "/about"]] as const;

export function SiteHeader() {
  return <header className="site-header"><a className="skip-link" href="#main-content">Skip to content</a><div className="shell header-inner"><Link href="/" aria-label="Financial Groove home"><BrandLogo /></Link><nav className="desktop-nav" aria-label="Primary navigation">{primaryLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><Link className="button button-small header-cta" href="/get-started">Start here <span aria-hidden="true">→</span></Link><details className="mobile-menu"><summary aria-label="Open navigation"><span>Menu</span><i aria-hidden="true" /></summary><nav aria-label="Mobile navigation">{primaryLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/contact">Contact</Link><Link href="/client-portal">Client portal</Link><Link className="button" href="/get-started">Start here</Link></nav></details></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><BrandLogo dark /><p>Accounting expertise for arts &amp; entertainment.</p><span className="footer-mission">Financial Groove exists to advance the arts.</span></div><div><h2>Explore</h2><Link href="/services">Services</Link><Link href="/who-we-serve">Who we serve</Link><Link href="/how-it-works">How it works</Link><Link href="/resources">Resources</Link><Link href="/about">About</Link></div><div><h2>Services</h2>{services.slice(0, 5).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>)}</div><div><h2>Connect</h2><a href={contact.phoneHref}>{contact.phone}</a><a href={contact.emailHref}>{contact.email}</a><p>{contact.address}</p><Link href="/client-portal">Secure client portal</Link></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Financial Groove LLC</span><span><Link href="/privacy">Privacy</Link><Link href="/accessibility">Accessibility</Link></span></div></footer>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs shell" aria-label="Breadcrumb">{items.map((item, index) => <span key={item.label}>{index > 0 && <b aria-hidden="true">/</b>}{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</span>)}</nav>;
}

export function FooterCta({ title = "Ready to find your financial groove?", text = "Tell us where you are now. We’ll help you identify a clear next step.", button = "Start here", href = "/get-started" }: { title?: string; text?: string; button?: string; href?: string }) {
  return <section className="footer-cta"><div className="shell footer-cta-inner"><div><span className="eyebrow eyebrow-light">Your next move</span><h2>{title}</h2><p>{text}</p></div><Link className="button button-light" href={href}>{button} <span aria-hidden="true">→</span></Link></div></section>;
}

export function RelatedPaths() {
  return <section className="section section-tight"><div className="shell"><div className="section-heading"><span className="eyebrow">Choose your path</span><h2>Support shaped around the way you work.</h2></div><div className="card-grid card-grid-four">{audiences.map((audience, index) => <Link className="audience-card" key={audience.slug} href={`/who-we-serve/${audience.slug}`}><span className="card-index">0{index + 1}</span><h3>{audience.name}</h3><p>{audience.summary}</p><span className="text-link">See your path <b aria-hidden="true">→</b></span></Link>)}</div></div></section>;
}
