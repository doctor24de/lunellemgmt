'use client';

import { SyntheticEvent, useState } from 'react';
import { ArrowDownRight, ArrowRight, Camera, Check, ChevronDown, LineChart, LockKeyhole, Menu, MessageCircle, ShieldCheck, Sparkles, TrendingUp, X } from 'lucide-react';

const services = [
  { icon: Camera, number: '01', title: 'Brand & content direction', copy: 'A recognisable creative identity, content roadmap and posting rhythm built around your personality.' },
  { icon: TrendingUp, number: '02', title: 'Audience acquisition', copy: 'Platform-specific marketing systems that turn social attention into qualified subscribers.' },
  { icon: MessageCircle, number: '03', title: 'Profile operations', copy: 'Daily publishing, audience care, retention and monetisation—managed with your voice and boundaries in mind.' },
  { icon: LineChart, number: '04', title: 'Performance intelligence', copy: 'Clear reporting, fast experiments and weekly decisions informed by what your audience responds to.' },
];
const operatingSystem = [
  ['Position', 'A brand people remember', 'We define the story, visual direction and audience position that makes you unmistakably you.'],
  ['Create', 'A system you can sustain', 'You receive a focused content plan. No guessing, chaotic calendars or pressure to become someone else.'],
  ['Convert', 'Attention into loyalty', 'We operate your profiles, nurture your audience and refine every stage of the subscriber journey.'],
  ['Compound', 'Growth that gets smarter', 'Insights flow back into the next creative cycle, so every month builds on the last.'],
];
const principles = [
  ['Creator-first', 'Your image, boundaries and final decisions remain yours. Always.'],
  ['Selective partnership', 'A focused roster means senior attention and strategy shaped around you.'],
  ['Discreet by default', 'Applications, performance data and private conversations stay confidential.'],
  ['No empty promises', 'We build through testing, consistency and transparent performance reviews.'],
];
const faqs = [
  ['What do I need to do?', 'You create the content. We give you a clear plan and handle strategy, profile operations, marketing and optimisation around it.'],
  ['Do you work with new creators?', 'We consider emerging and established creators. Ambition, consistency and brand potential matter more than follower count alone.'],
  ['Will I keep control of my brand?', 'Yes. The partnership is built around your voice, comfort and boundaries. We provide the operation—not a replacement personality.'],
  ['What happens after I apply?', 'We privately review your application. If there is a strong fit, we contact you for an honest, no-pressure strategy conversation.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  async function submitApplication(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget; setFormStatus('sending');
    const data = new FormData(form); const field = (key: string) => { const value = data.get(key); return typeof value === 'string' ? value : ''; };
    const controller = new AbortController(); const timeout = window.setTimeout(() => controller.abort(), 15000);
    const response = await fetch('/api/apply', { method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: controller.signal, body: JSON.stringify({ name: field('name'), email: field('email'), profile: field('profile'), goals: field('goals'), company: field('company') }) }).catch(() => null);
    window.clearTimeout(timeout);
    if (response?.ok) { form.reset(); setFormStatus('sent'); (window as Window & { umami?: { track: (event: string) => void } }).umami?.track('Application sent'); } else setFormStatus('error');
  }
  return <main>
    <header className="nav-wrap">
      <a className="brand" href="#top" aria-label="Lunelle Management home"><img src="/lunelle-mark-small.png" alt="" width={34} height={34} /><span>LUNELLE</span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation"><a href="#services" onClick={() => setMenuOpen(false)}>Expertise</a><a href="#system" onClick={() => setMenuOpen(false)}>Our system</a><a href="#standard" onClick={() => setMenuOpen(false)}>Why Lunelle</a><a href="/insights">Insights</a><a className="nav-cta" href="#apply" onClick={() => setMenuOpen(false)} data-umami-event="Header apply CTA">Private application <ArrowRight size={15} /></a></nav>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <section className="hero" id="top"><div className="hero-aura" /><div className="hero-grid">
      <div className="hero-copy reveal"><p className="eyebrow"><Sparkles size={14} /> OnlyFans management agency</p><h1>Create freely.<br /><em>Grow deliberately.</em></h1><p className="hero-lead">Lunelle manages and markets ambitious OnlyFans creators—building your brand, operating your profile and engineering growth while you focus on creating content.</p><div className="hero-actions"><a className="button primary" href="#apply" data-umami-event="Hero apply CTA">Apply privately <ArrowRight size={17} /></a><a className="text-link" href="#system">See how it works <ArrowDownRight size={16} /></a></div><div className="hero-proof"><div><strong>One team</strong><span>around your business</span></div><div><strong>Your voice</strong><span>at every touchpoint</span></div><div><strong>Clear data</strong><span>behind every decision</span></div></div></div>
      <div className="hero-visual reveal delay"><div className="portrait-halo" /><div className="image-frame"><img src="/lunelle-creator.jpg" alt="Creator represented by Lunelle in a soft lavender setting" width={1000} height={1000} fetchPriority="high" decoding="async" /></div><div className="floating-card card-top"><span className="pulse" /> Strategy in motion</div><div className="floating-card card-bottom"><span>THE LUNELLE MODEL</span><strong>You create.<br />We operate.</strong></div></div>
    </div><div className="hero-ticker"><span>BRAND</span><b>✦</b><span>CONTENT</span><b>✦</b><span>MANAGEMENT</span><b>✦</b><span>MARKETING</span><b>✦</b><span>GROWTH</span></div></section>
    <section className="platform-strip" aria-label="Specialized OnlyFans creator management"><p>Specialized management for</p><img src="/onlyfans-logo.svg" alt="OnlyFans" width={256} height={45} /><small>Independent agency. Not affiliated with or endorsed by OnlyFans.</small></section>
    <section className="manifesto"><p className="section-label">More than management</p><h2>Your content has potential.<br />We build the <em>company behind it.</em></h2><p>Great creators should not have to choose between creating and operating a full-time digital business. Lunelle gives your talent the structure, intelligence and care it deserves.</p></section>
    <section className="services" id="services"><div className="section-heading"><div><p className="section-label">Our expertise</p><h2>Every discipline.<br /><em>One direction.</em></h2></div><p>Not a collection of disconnected services. A complete creator operation, designed to work as one.</p></div><div className="service-grid">{services.map(({ icon: Icon, number, title, copy }) => <article className="service-card" key={title}><div className="service-top"><span className="service-icon"><Icon /></span><span>{number}</span></div><h3>{title}</h3><p>{copy}</p><span className="card-arrow"><ArrowDownRight /></span></article>)}</div></section>
    <section className="system" id="system"><div className="system-intro"><p className="section-label light">The Lunelle operating system</p><h2>From creative spark<br />to <em>scalable brand.</em></h2><p>A continuous growth loop with one purpose: remove operational noise and make your creative energy go further.</p></div><div className="system-track">{operatingSystem.map(([label, title, copy], index) => <article className="system-panel" key={label}><span>0{index + 1} / 04</span><div><p>{label}</p><h3>{title}</h3><small>{copy}</small></div></article>)}</div><div className="system-close"><span>You bring the vision.</span><strong>We make it perform.</strong></div></section>
    <section className="standard" id="standard"><div className="standard-heading"><p className="section-label">Partnership, elevated</p><h2>High-touch by design.<br /><em>Human at every step.</em></h2></div><div className="principles">{principles.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="split-story"><div className="story-visual"><img src="/lunelle-creator.jpg" alt="Lunelle creator partnership" width={1000} height={1000} loading="lazy" decoding="async" /></div><div className="story-copy"><LockKeyhole /><p className="section-label light">Built around trust</p><h2>Ambition without losing <em>yourself.</em></h2><p>Your account is not just a revenue stream. It is your name, identity and future. Strategy begins with your boundaries and every decision is made with long-term brand value in mind.</p><a href="#apply">Start a private conversation <ArrowRight size={17} /></a></div></section>
    <section className="faq"><div><p className="section-label">Before we begin</p><h2>Clear answers.<br /><em>No hard sell.</em></h2><p>A serious partnership starts with transparency.</p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div></section>
    <section className="apply" id="apply"><div className="apply-copy"><p className="section-label light">Private applications</p><h2>Ready to build<br />what comes <em>next?</em></h2><p>We partner with a select group of creators so every relationship receives meaningful attention. Tell us where you are—and where you want to go.</p><ul><li><ShieldCheck size={16} /> Confidential from the first conversation</li><li><Check size={16} /> Honest assessment, never a generic pitch</li><li><Check size={16} /> Strategy shaped around your goals</li></ul></div>
      <form className="apply-form" onSubmit={submitApplication}><div className="form-head"><span>Creator application</span><b>01—04</b></div><label>Full name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Email address<input required type="email" name="email" autoComplete="email" placeholder="you@email.com" /></label><label>Creator profile or social link<input name="profile" type="url" placeholder="https://" /></label><label>What would you like to achieve?<textarea required name="goals" rows={4} placeholder="Tell us about your goals..." /></label><label className="honeypot" aria-hidden="true">Company<input name="company" tabIndex={-1} autoComplete="off" /></label><button className="button submit" type="submit" disabled={formStatus === 'sending' || formStatus === 'sent'}>{formStatus === 'sending' ? 'Sending…' : formStatus === 'sent' ? 'Application sent' : 'Send private application'} {formStatus === 'idle' && <ArrowRight size={17} />}</button><p className={`form-message ${formStatus}`}>{formStatus === 'sent' ? 'Thank you—your application has been sent privately.' : formStatus === 'error' ? 'The request timed out. Please try again in a moment.' : 'Encrypted in transit. Your details remain confidential.'}</p></form>
    </section>
    <footer><div className="footer-brand"><img src="/lunelle-mark-small.png" alt="" width={28} height={28} loading="lazy" /><span>LUNELLE</span></div><p>Elevate <b>·</b> Empower <b>·</b> Earn</p><div><a href="/insights">Insights</a><span>© 2026 Lunelle Management</span></div><small>OnlyFans is a trademark of its respective owner. Lunelle Management is an independent agency and is not affiliated with or endorsed by OnlyFans.</small></footer>
  </main>;
}
