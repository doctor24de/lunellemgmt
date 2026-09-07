'use client';

import { SyntheticEvent, useState } from 'react';
import { ArrowRight, BarChart3, CalendarDays, Camera, Check, Menu, Sparkles, TrendingUp, X } from 'lucide-react';

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'tony@radcipher.com';
const services = [
  { icon: Camera, number: '01', title: 'Content strategy', copy: 'A clear creative direction built around your personality, audience and goals — so every post has a purpose.' },
  { icon: CalendarDays, number: '02', title: 'Profile management', copy: 'We handle positioning, scheduling, audience conversations and the day-to-day systems behind your profile.' },
  { icon: BarChart3, number: '03', title: 'Marketing & growth', copy: 'Data-led promotion and platform strategy designed to expand your reach and convert attention into loyal subscribers.' },
  { icon: TrendingUp, number: '04', title: 'Scale with confidence', copy: 'Weekly insight, constant optimisation and a dedicated team focused on building a durable creator business.' },
];
const steps = [
  ['Apply', 'Tell us where you are now and what you want to build.'],
  ['Align', 'We map the strategy, brand direction and systems around you.'],
  ['Create', 'You focus on content while our team runs the operation.'],
  ['Elevate', 'We optimise, grow and scale — together.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  function submitApplication(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (key: string) => {
      const value = data.get(key);
      return typeof value === 'string' ? value : '';
    };
    const name = field('name');
    const email = field('email');
    const profile = field('profile');
    const goals = field('goals');
    const subject = encodeURIComponent(`Creator application — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCreator profile: ${profile}\n\nGoals:\n${goals}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }
  return (
    <main>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Lunelle Management home"><img src="/lunelle-mark.png" alt="" width={34} height={34} /><span>LUNELLE</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>What we do</a><a href="#process" onClick={() => setMenuOpen(false)}>How it works</a><a href="#about" onClick={() => setMenuOpen(false)}>Why Lunelle</a>
          <a className="nav-cta" href="#apply" onClick={() => setMenuOpen(false)}>Apply now <ArrowRight size={15} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <section className="hero" id="top">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow"><Sparkles size={14} /> Boutique creator management</p>
            <h1>You create.<br />We build the <em>business.</em></h1>
            <p className="hero-lead">Lunelle turns your content into a powerful, professionally managed brand — with the strategy, structure and marketing to help you grow.</p>
            <div className="hero-actions"><a className="button primary" href="#apply">Apply to join <ArrowRight size={17} /></a><a className="text-link" href="#services">Discover Lunelle <span>↓</span></a></div>
            <div className="trust-line"><span className="avatars"><i>L</i><i>✦</i><i>+</i></span><p><strong>Selective by design.</strong><br />Personal attention. Serious growth.</p></div>
          </div>
          <div className="hero-visual reveal delay">
            <div className="image-frame"><img src="/lunelle-creator.png" alt="Lunelle creator in a soft lavender setting" width={1200} height={1200} fetchPriority="high" /><span className="corner corner-tl" /><span className="corner corner-br" /></div>
            <div className="floating-card card-top"><span className="pulse" /> Strategy active</div><div className="floating-card card-bottom"><strong>Full-service</strong><span>Management · Marketing · Growth</span></div>
          </div>
        </div>
        <div className="hero-ticker"><span>CONTENT</span><b>✦</b><span>STRUCTURE</span><b>✦</b><span>MANAGEMENT</span><b>✦</b><span>GROWTH</span></div>
      </section>
      <section className="statement" id="about"><p className="section-label">The Lunelle standard</p><h2>You’re not just creating content.<br /><em>You’re building an empire.</em></h2><p>We create the operation behind your potential. Your brand stays authentically yours; the strategy, systems and relentless optimisation become ours.</p></section>
      <section className="services" id="services">
        <div className="section-heading"><div><p className="section-label">What we focus on</p><h2>Everything behind<br /><em>your growth.</em></h2></div><p>One expert team. One clear strategy. Every moving part working together around you.</p></div>
        <div className="service-grid">{services.map(({ icon: Icon, number, title, copy }) => <article className="service-card" key={title}><div className="service-top"><span className="service-icon"><Icon /></span><span>{number}</span></div><h3>{title}</h3><p>{copy}</p><span className="card-line" /></article>)}</div>
      </section>
      <section className="focus-band"><div className="focus-inner"><div className="focus-mark">✦</div><p className="section-label light">You do what no one else can</p><h2>Stay focused on creating.<br /><em>We’ll handle the rest.</em></h2><div className="division"><div><span>You</span><strong>Create content</strong><p>Bring your voice, personality and creative energy.</p></div><i>+</i><div><span>Lunelle</span><strong>Build the business</strong><p>Strategy, management, marketing and growth.</p></div></div></div></section>
      <section className="process" id="process"><div className="section-heading"><div><p className="section-label">The experience</p><h2>Simple to start.<br /><em>Built to scale.</em></h2></div><p>A considered process with clarity at every step, from first conversation to long-term growth.</p></div><div className="steps">{steps.map(([title, copy], index) => <div className="step" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></section>
      <section className="apply" id="apply">
        <div className="apply-copy"><p className="section-label light">Private applications</p><h2>Your next chapter<br />starts <em>here.</em></h2><p>We work closely with a select group of ambitious creators. Tell us a little about you and we’ll be in touch if it feels like the right fit.</p><ul><li><Check size={16} /> Confidential from the first conversation</li><li><Check size={16} /> No pressure, no generic sales pitch</li><li><Check size={16} /> A strategy built around your goals</li></ul></div>
        <form className="apply-form" onSubmit={submitApplication}><div className="form-head"><span>Creator application</span><b>✦</b></div><label>Full name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Email address<input required type="email" name="email" autoComplete="email" placeholder="you@email.com" /></label><label>Creator profile or social link<input name="profile" type="url" placeholder="https://" /></label><label>What would you like to achieve?<textarea required name="goals" rows={4} placeholder="Tell us about your goals..." /></label><button className="button submit" type="submit">Send application <ArrowRight size={17} /></button><p className="privacy-note">Submitting opens your email app with your application ready to send.</p></form>
      </section>
      <footer><div className="footer-brand"><img src="/lunelle-mark.png" alt="" width={28} height={28} /><span>LUNELLE</span></div><p>Elevate <b>·</b> Empower <b>·</b> Earn</p><div><span>© 2026 Lunelle Management</span><a href={`mailto:${contactEmail}`}>Contact</a></div></footer>
    </main>
  );
}
