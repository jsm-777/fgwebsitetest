import Image from "next/image";
import Link from "next/link";

export function InteriorHero({ eyebrow, title, intro, dark = false, actions }: { eyebrow: string; title: string; intro: string; dark?: boolean; actions?: React.ReactNode }) {
  return <section className={`interior-hero ${dark ? "interior-hero-dark" : ""}`}><div className="shell interior-hero-grid"><div><span className={`eyebrow ${dark ? "eyebrow-light" : ""}`}>{eyebrow}</span><h1>{title}</h1><p className="lede">{intro}</p>{actions && <div className="button-row">{actions}</div>}</div><div className="hero-mark" aria-hidden="true"><span>FG</span><Image src="/brand/graphics/halftone-flow-pink.svg" alt="" fill sizes="(max-width: 900px) 0px, 400px" /></div></div></section>;
}

export function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return <div className={`section-heading ${center ? "section-heading-center" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function ServiceIcon({ name, alt = "" }: { name: string; alt?: string }) {
  return <span className="icon-disc"><Image src={`/brand/icons/fg-icon-${name}.svg`} width={36} height={36} alt={alt} /></span>;
}

export function LinkCard({ href, eyebrow, title, text, icon }: { href: string; eyebrow?: string; title: string; text: string; icon?: string }) {
  return <Link className="link-card" href={href}>{icon && <ServiceIcon name={icon} />}{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h3>{title}</h3><p>{text}</p><span className="text-link">Explore <b aria-hidden="true">→</b></span></Link>;
}

export function CheckList({ items }: { items: string[] }) {
  return <ul className="check-list">{items.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>;
}

export function StatBand() {
  return <section className="stat-band" aria-label="Financial Groove at a glance"><div className="shell stat-grid"><div><strong>Arts-first</strong><span>industry fluency</span></div><div><strong>Plainspoken</strong><span>financial guidance</span></div><div><strong>Year-round</strong><span>business perspective</span></div></div></section>;
}
