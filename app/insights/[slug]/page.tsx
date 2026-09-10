import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getInsight, insights } from '@/lib/insights';

export function generateStaticParams() { return insights.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const article = getInsight(slug);
  if (!article) return {};
  return { title: article.title, description: article.description, alternates: { canonical: `/insights/${slug}` }, openGraph: { title: article.title, description: article.description, type: 'article', publishedTime: article.published, url: `/insights/${slug}` } };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = getInsight(slug);
  if (!article) return <main className="not-found"><h1>Insight not found</h1><a href="/insights">Return to insights</a></main>;
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description, datePublished: article.published, dateModified: article.published, author: { '@type': 'Organization', name: 'Lunelle Management' }, publisher: { '@type': 'Organization', name: 'Lunelle Management', logo: { '@type': 'ImageObject', url: 'https://lunellemanagement.com/lunelle-mark-small.png' } }, mainEntityOfPage: `https://lunellemanagement.com/insights/${slug}` };
  return <main className="article-page"><header className="article-nav"><a className="brand" href="/"><img src="/lunelle-mark-small.png" alt="" width="34" height="34" /><span>LUNELLE</span></a><a href="/#apply">Apply to join <ArrowRight size={15} /></a></header><article><a className="back-link" href="/insights"><ArrowLeft size={15} /> All insights</a><div className="article-kicker"><span>{article.category}</span><span>{article.readTime}</span></div><h1>{article.title}</h1><p className="article-intro">{article.intro}</p><div className="article-body">{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}</div><aside className="article-cta"><span>✦</span><h2>Ready to build the operation behind your potential?</h2><p>Tell us where you are now and what you want to create next.</p><a className="button primary" href="/#apply" data-umami-event="Article apply CTA" data-umami-event-article={slug}>Apply to Lunelle <ArrowRight size={17} /></a></aside></article><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></main>;
}
