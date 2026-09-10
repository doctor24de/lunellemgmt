import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { insights } from '@/lib/insights';

export const metadata: Metadata = { title: 'Creator Growth Insights', description: 'Practical strategy for OnlyFans and Fansly creators: management, marketing, content systems and sustainable growth.', alternates: { canonical: '/insights' } };

export default function InsightsPage() {
  return <main className="insights-page"><header className="article-nav"><a className="brand" href="/"><img src="/lunelle-mark-small.png" alt="" width="34" height="34" /><span>LUNELLE</span></a><a href="/#apply">Apply to join <ArrowRight size={15} /></a></header><section className="insights-hero"><p className="section-label">The Lunelle journal</p><h1>Insights for creators<br />building <em>something lasting.</em></h1><p>Clear thinking on content, management, marketing and sustainable growth—without noise, shortcuts or empty promises.</p></section><section className="article-grid">{insights.map((article, index) => <article className={index === 0 ? 'article-card featured' : 'article-card'} key={article.slug}><div><span>{article.category}</span><span>{article.readTime}</span></div><h2>{article.title}</h2><p>{article.description}</p><a href={`/insights/${article.slug}`} data-umami-event="Read insight" data-umami-event-article={article.slug}>Read insight <ArrowRight size={16} /></a></article>)}</section><section className="journal-cta"><p className="section-label light">Ready for the next level?</p><h2>You create.<br /><em>We build the business.</em></h2><a className="button primary" href="/#apply" data-umami-event="Journal apply CTA">Apply to join <ArrowRight size={17} /></a></section></main>;
}
