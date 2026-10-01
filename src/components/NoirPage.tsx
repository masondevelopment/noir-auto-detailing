import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, ChevronDown, ChevronRight, Clock3, Droplets, Instagram, Menu, Minus, Phone, ShieldCheck, Sparkles, Star, X } from 'lucide-react'
import { galleryImages, navItems, packages, services, testimonials } from '../data/siteContent'
import { Reveal } from './Reveal'

const heroImage = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=88'
const beforeImage = 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1800&q=88'
const afterImage = 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1800&q=88'

function BrandMark() {
  return <a href="#top" className="brand-mark" aria-label="NOIR Auto Detailing home"><span className="brand-mark__word">NOIR</span><span className="brand-mark__sub">AUTO DETAILING</span></a>
}

function SectionIntro({ eyebrow, title, copy, align = 'left' }: { eyebrow: string; title: ReactNode; copy?: string; align?: 'left' | 'right' }) {
  return <div className={`section-intro ${align === 'right' ? 'section-intro--right' : ''}`}>
    <p className="eyebrow"><span />{eyebrow}</p>
    <h2>{title}</h2>
    {copy && <p className="section-intro__copy">{copy}</p>}
  </div>
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
    <div className="site-header__inner">
      <BrandMark />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <a className="button button--small header-cta" href="#contact">Book Detailing <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(value => !value)}>
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </div>
    <AnimatePresence>
      {open && <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} aria-label="Mobile navigation">
        {navItems.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={17} /></a>)}
        <a className="button button--small" href="#contact" onClick={() => setOpen(false)}>Book Detailing <ArrowUpRight size={15} /></a>
      </motion.nav>}
    </AnimatePresence>
  </header>
}

function Hero() {
  const reduceMotion = useReducedMotion()
  return <section id="top" className="hero">
    <div className="hero__media" style={{ backgroundImage: `url(${heroImage})` }} />
    <div className="hero__shade" />
    <div className="hero__content page-shell">
      <motion.div className="hero__copy" initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.12 }}>
        <p className="eyebrow eyebrow--light"><span />Miami, Florida · Est. 2018</p>
        <h1>Your car deserves<br /><em>more than a wash.</em></h1>
        <p className="hero__lead">A considered approach to automotive detailing. Paint-safe techniques, obsessive care and the kind of finish that makes every drive feel new again.</p>
        <div className="hero__actions">
          <a className="button" href="#contact">Book Your Detail <ArrowUpRight size={16} /></a>
          <a className="text-link text-link--light" href="#services">Explore Services <ChevronRight size={17} /></a>
        </div>
      </motion.div>
      <div className="hero__footer">
        <div className="trust-row">
          <div><strong>4.9</strong><span><Star size={12} fill="currentColor" /> Google Rating</span></div>
          <div><strong>500<span>+</span></strong><span>Cars Detailed</span></div>
          <div><strong>100<span>%</span></strong><span>Certified Detailers</span></div>
        </div>
        <a className="scroll-cue" href="#services"><span>Scroll to explore</span><ChevronDown size={18} /></a>
      </div>
    </div>
  </section>
}

function Services() {
  const [active, setActive] = useState(3)
  const service = services[active]
  return <section id="services" className="section services-section">
    <div className="page-shell">
      <div className="services-header">
        <Reveal><SectionIntro eyebrow="The NOIR standard" title={<>Detailing, <em>elevated.</em></>} copy="Every service is built around the same idea: do less, better. We use professional-grade products and proven techniques to leave your car looking properly considered." /></Reveal>
        <Reveal delay={0.1}><p className="section-index">01 <span>/</span> 05</p></Reveal>
      </div>
      <div className="services-showcase">
        <div className="service-list" role="tablist" aria-label="Detailing services">
          {services.map((item, index) => <button key={item.name} className={`service-list__item ${active === index ? 'is-active' : ''}`} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
            <span className="service-list__number">{item.number}</span><span>{item.name}</span><span className="service-list__arrow">{active === index ? <ArrowUpRight size={18} /> : <Minus size={17} />}</span>
          </button>)}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={service.name} className="service-feature" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.35 }}>
            <img src={service.image} alt={`${service.name} service`} loading="lazy" />
            <div className="service-feature__overlay"><p>{service.number} / 05</p><h3>{service.name}</h3><p>{service.description}</p><strong>{service.price}</strong></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </section>
}

function BeforeAfter() {
  const [position, setPosition] = useState(54)
  return <section className="section comparison-section">
    <div className="page-shell">
      <div className="comparison-layout">
        <Reveal><SectionIntro eyebrow="The visible difference" title={<>See what <em>precision</em> looks like.</>} copy="One paint correction session. Hours of controlled work. A finish that catches light differently." /></Reveal>
        <Reveal delay={0.1}><div className="comparison-meta"><span>Paint correction · Porsche 911</span><span>Before / after</span></div></Reveal>
      </div>
      <Reveal className="comparison-frame">
        <div className="comparison-image comparison-image--after"><img src={afterImage} alt="Glossy black sports car after paint correction" loading="lazy" /></div>
        <div className="comparison-image comparison-image--before" style={{ width: `${position}%` }}><img src={beforeImage} alt="Black sports car before paint correction" loading="lazy" /></div>
        <div className="comparison-divider" style={{ left: `${position}%` }}><span>↔</span></div>
        <label className="sr-only" htmlFor="comparison-range">Reveal more of the after image</label>
        <input id="comparison-range" className="comparison-range" type="range" min="5" max="95" value={position} onChange={event => setPosition(Number(event.target.value))} />
        <span className="comparison-label comparison-label--before">Before</span><span className="comparison-label comparison-label--after">After</span>
      </Reveal>
    </div>
  </section>
}

function WhyNoir() {
  const reasons = [
    { icon: Droplets, title: 'Professional products', copy: 'Only trusted, pH-balanced formulas that work with your finish.' },
    { icon: ShieldCheck, title: 'Paint-safe techniques', copy: 'The right tool, pressure and process for every surface.' },
    { icon: Sparkles, title: 'Experienced technicians', copy: 'Detailers who notice the millimeter everyone else misses.' },
    { icon: Check, title: 'Attention to detail', copy: 'Clean door jambs, crisp edges and nothing overlooked.' },
  ]
  return <section className="section why-section">
    <div className="page-shell">
      <div className="why-layout">
        <Reveal><SectionIntro eyebrow="Why NOIR" title={<>The difference is<br /><em>in the details.</em></>} copy="We are not a volume wash. We are a small team of meticulous technicians who believe your car should be treated with the same respect you give it." /></Reveal>
        <div className="reason-grid">{reasons.map(({ icon: Icon, title, copy }, index) => <Reveal key={title} delay={index * 0.06}><div className="reason-item"><Icon size={21} strokeWidth={1.4} /><div><h3>{title}</h3><p>{copy}</p></div></div></Reveal>)}</div>
      </div>
    </div>
  </section>
}

function Process() {
  const steps = [
    { number: '01', title: 'Choose your service', copy: 'Tell us what you drive and what you want it to feel like again.' },
    { number: '02', title: 'Book your appointment', copy: 'Pick a time that works. We will confirm the details before you arrive.' },
    { number: '03', title: 'We detail your vehicle', copy: 'Our technicians get to work with a plan tailored to your car’s finish.' },
    { number: '04', title: 'Drive away flawless', copy: 'We walk you through the result and how to keep it looking that way.' },
  ]
  return <section id="process" className="section process-section">
    <div className="page-shell"><Reveal><SectionIntro eyebrow="The process" title={<>Simple to book.<br /><em>Impossible to forget.</em></>} /></Reveal>
      <div className="process-track">{steps.map((step, index) => <Reveal key={step.number} delay={index * 0.07}><div className="process-step"><span className="process-step__number">{step.number}</span><div className="process-step__line" /><h3>{step.title}</h3><p>{step.copy}</p></div></Reveal>)}</div>
    </div>
  </section>
}

function Gallery() {
  return <section id="results" className="section gallery-section">
    <div className="page-shell"><div className="gallery-header"><Reveal><SectionIntro eyebrow="Selected results" title={<>Good enough is<br /><em>not in our vocabulary.</em></>} /></Reveal><Reveal delay={0.1}><a className="text-link" href="#contact">Start your transformation <ArrowUpRight size={16} /></a></Reveal></div>
      <div className="gallery-grid">{galleryImages.map((image, index) => <Reveal key={image.src} className={`gallery-item gallery-item--${image.size}`} delay={index * 0.05}><img src={image.src} alt={image.alt} loading="lazy" /><span className="gallery-item__index">0{index + 1}</span></Reveal>)}</div>
    </div>
  </section>
}

function Reviews() {
  return <section id="reviews" className="section reviews-section"><div className="page-shell"><Reveal><div className="reviews-heading"><SectionIntro eyebrow="Client notes" title={<>The kind of clean<br /><em>people talk about.</em></>} /><div className="reviews-rating"><div><strong>4.9</strong><span>{[1, 2, 3, 4, 5].map(star => <Star key={star} size={15} fill="currentColor" />)}</span></div><p>Based on 120+ Google reviews</p></div></div></Reveal>
      <div className="reviews-grid">{testimonials.map((review, index) => <Reveal key={review.name} delay={index * 0.08}><blockquote className="review"><span className="review__mark">“</span><p>{review.quote}</p><footer><span className="review__avatar">{review.initials}</span><span><strong>{review.name}</strong><small>{review.role}</small></span></footer></blockquote></Reveal>)}</div>
    </div></section>
}

function Pricing() {
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  return <section className="section pricing-section"><div className="page-shell"><Reveal><div className="pricing-heading"><SectionIntro eyebrow="Straightforward pricing" title={<>Pick your level<br /><em>of obsession.</em></>} copy="Every car is different. Every package is a starting point, and we will always recommend the right level of care for your finish." /></div></Reveal>
      <div className="pricing-grid">{packages.map((item, index) => <Reveal key={item.name} delay={index * 0.08}><article className={`price-card ${item.highlighted ? 'price-card--featured' : ''}`}><div className="price-card__top"><p>{item.descriptor}</p>{item.highlighted && <span className="price-card__badge">Most requested</span>}</div><h3>{item.name}</h3><div className="price-card__price">{item.price}</div><p className="price-card__description">{item.description}</p><ul>{item.features.map(feature => <li key={feature}><Check size={15} />{feature}</li>)}</ul><button className={`button ${item.highlighted ? '' : 'button--outline'}`} type="button" onClick={scrollToContact}>{item.action} <ArrowUpRight size={15} /></button></article></Reveal>)}</div>
    </div></section>
}

type FormState = { name: string; phone: string; email: string; vehicle: string; service: string; message: string }
const initialForm: FormState = { name: '', phone: '', email: '', vehicle: '', service: '', message: '' }

function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [sent, setSent] = useState(false)
  const update = (field: keyof FormState, value: string) => setForm(current => ({ ...current, [field]: value }))
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) nextErrors.name = 'Please add your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please add a valid email.'
    if (!form.phone.trim()) nextErrors.phone = 'Please add a phone number.'
    if (!form.vehicle.trim()) nextErrors.vehicle = 'Tell us what you drive.'
    if (!form.service) nextErrors.service = 'Choose a service.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSent(true)
  }
  return <section id="contact" className="section contact-section"><div className="page-shell"><div className="contact-layout"><Reveal><div className="contact-intro"><SectionIntro eyebrow="Start a conversation" title={<>Ready to restore<br /><em>that new-car feeling?</em></>} copy="Tell us a little about your car and what you have in mind. We will get back to you within one business day." /><div className="contact-details"><a href="tel:+13055550198"><Phone size={18} />305 555 0198</a><span><Clock3 size={18} />Mon–Sat · 8am–6pm</span><span><span className="location-dot" />Miami, Florida</span></div></div></Reveal>
        <Reveal delay={0.1}><form className="contact-form" onSubmit={submit} noValidate>{sent ? <div className="form-success"><span><Check size={20} /></span><h3>Message received.</h3><p>Thanks for reaching out. A NOIR detailer will be in touch soon.</p><button className="text-link" type="button" onClick={() => { setSent(false); setForm(initialForm) }}>Send another message <ArrowUpRight size={16} /></button></div> : <><div className="form-grid"><Field label="Name" value={form.name} error={errors.name} onChange={value => update('name', value)} /><Field label="Phone" type="tel" value={form.phone} error={errors.phone} onChange={value => update('phone', value)} /><Field label="Email" type="email" value={form.email} error={errors.email} onChange={value => update('email', value)} /><Field label="Vehicle" value={form.vehicle} error={errors.vehicle} onChange={value => update('vehicle', value)} /></div><label className={`form-field ${errors.service ? 'has-error' : ''}`}><span>Service</span><select value={form.service} onChange={event => update('service', event.target.value)}><option value="">Select a service</option>{services.map(service => <option key={service.name} value={service.name}>{service.name}</option>)}</select>{errors.service && <small>{errors.service}</small>}</label><label className="form-field"><span>Message <small>(optional)</small></span><textarea rows={4} placeholder="Tell us about your car..." value={form.message} onChange={event => update('message', event.target.value)} /></label><button className="button" type="submit">Request an appointment <ArrowUpRight size={16} /></button></>}</form></Reveal>
      </div></div></section>
}

function Field({ label, type = 'text', value, error, onChange }: { label: string; type?: string; value: string; error?: string; onChange: (value: string) => void }) {
  return <label className={`form-field ${error ? 'has-error' : ''}`}><span>{label}</span><input type={type} value={value} onChange={event => onChange(event.target.value)} />{error && <small>{error}</small>}</label>
}

function Footer() {
  return <footer className="site-footer"><div className="page-shell"><div className="footer-top"><BrandMark /><p>Precision in every detail.</p><a className="footer-instagram" href="#top" aria-label="Instagram"><Instagram size={19} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} NOIR Auto Detailing</span><span>Miami, Florida</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></div></div></footer>
}

export function NoirPage() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const timer = window.setTimeout(() => setLoaded(true), 450); return () => window.clearTimeout(timer) }, [])
  useEffect(() => { if (loaded) document.documentElement.classList.add('is-loaded'); return () => document.documentElement.classList.remove('is-loaded') }, [loaded])
  return <div className="site-shell"><Header /><main><Hero /><Services /><BeforeAfter /><WhyNoir /><Process /><Gallery /><Reviews /><Pricing /><Contact /></main><Footer /></div>
}
