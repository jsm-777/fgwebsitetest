import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, FooterCta } from "@/components/site-shell";
import { articles } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const article = articles.find((item) => item.slug === slug); if (!article) return {}; return { title: article.title, description: article.dek }; }
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params; const article = articles.find((item) => item.slug === slug); if (!article) notFound();
  return <><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: article.title }]} /><article><header className="article-header"><div className="article-shell"><span className="eyebrow">{article.category}</span><h1>{article.title}</h1><p className="lede">{article.dek}</p><span className="resource-meta">{article.readTime}</span></div></header><div className="article-body article-shell">{article.sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<div className="article-note"><strong>Keep this in context.</strong><p>This resource is general education, not individualized tax, legal, or accounting advice. Your facts matter; ask a qualified professional about your situation.</p></div><div className="button-row"><Link className="button button-outline" href="/resources">More resources</Link><Link className="button" href="/get-started">Ask about your situation</Link></div></div></article><FooterCta /></>;
}
