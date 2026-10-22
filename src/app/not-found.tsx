import Link from "next/link";

export default function NotFound() {
  return <section className="interior-hero interior-hero-dark"><div className="shell interior-hero-grid"><div><span className="eyebrow eyebrow-light">404 · Missed the count</span><h1>This page left the stage.</h1><p className="lede">The link may be old, or the address may have changed. Let’s get you back into the groove.</p><div className="button-row"><Link className="button" href="/">Return home</Link><Link className="button button-outline button-light" href="/services">Explore services</Link></div></div><div className="hero-mark" aria-hidden="true"><span>404</span></div></div></section>;
}
