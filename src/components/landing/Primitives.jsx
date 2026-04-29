import { Children, isValidElement, useEffect, useRef, useState } from 'react'
import { CountUpText } from './CountUpText'

export function PageFrame({
  theme,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  metrics = [],
  spotlight,
  heroVisual,
  children,
}) {
  const heroBadges =
    heroVisual?.badges ??
    [
      ...(spotlight?.slice(0, 2).map((item) => item.title) ?? []),
      ...(metrics.slice(0, 1).map((metric) => metric.value) ?? []),
    ]
  const trustItems = deriveTrustItems(metrics, spotlight)
  const readingPath = deriveReadingPath(children)

  return (
    <article className="landing-page" style={themeToCssVars(theme)}>
      <header className="page-hero">
        <div className="hero-panel">
          <div className="page-eyebrow">{eyebrow}</div>
          <h1 className="page-title">{title}</h1>
          <p className="page-description">{description}</p>
          <div className="hero-actions">
            {primaryCta ? (
              <a className="button-link is-primary" href={primaryCta.href}>
                {primaryCta.label}
              </a>
            ) : null}
            {secondaryCta ? (
              <a className="button-link" href={secondaryCta.href}>
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
          {trustItems.length ? (
            <div className="hero-proof-strip" aria-label="Key trust signals">
              {trustItems.map((item) => (
                <div className="hero-proof-chip" key={item.label}>
                  <strong><CountUpText value={item.value} /></strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          ) : null}
          {readingPath.length ? (
            <nav className="hero-guide" aria-label="Suggested reading order">
              <div className="hero-guide__eyebrow">Start Here</div>
              <div className="hero-guide__list">
                {readingPath.map((item, index) => {
                  const content = (
                    <>
                      <span className="hero-guide__step">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="hero-guide__copy">
                        <strong>{item.title}</strong>
                        <span>{item.eyebrow ?? 'Recommended next section'}</span>
                      </span>
                    </>
                  )

                  return item.anchorId ? (
                    <a className="hero-guide__item" href={`#${item.anchorId}`} key={item.id}>
                      {content}
                    </a>
                  ) : (
                    <div className="hero-guide__item" key={item.id}>
                      {content}
                    </div>
                  )
                })}
              </div>
            </nav>
          ) : null}
          {metrics.length ? (
            <div className="metrics-grid">
              {metrics.map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <strong><CountUpText value={metric.value} /></strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="hero-spotlight">
          <div className="hero-canvas">
            {heroVisual?.content ? (
              heroVisual.content
            ) : (
              <DefaultHeroVisual
                eyebrow={eyebrow}
                metrics={metrics}
                spotlight={spotlight}
              />
            )}

            {heroBadges?.length ? (
              <div className="hero-badge-row">
                {heroBadges.map((badge) => (
                  <span className="hero-pill" key={badge}>
                    <CountUpText value={badge} />
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          {spotlight?.map((item) => (
            <div className="hero-highlight" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </header>
      {children}
    </article>
  )
}

export function JumpToTopButton({
  label = 'Back to top',
}) {
  const getIsVisible = () => {
    if (typeof window === 'undefined') {
      return false
    }

    const scrollRoot = document.documentElement
    const maxScroll = Math.max(scrollRoot.scrollHeight - window.innerHeight, 0)

    return maxScroll > 0 && window.scrollY >= maxScroll / 2
  }

  const [isVisible, setIsVisible] = useState(getIsVisible)

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(getIsVisible())
    }

    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <button
      type="button"
      className={`jump-to-top${isVisible ? ' is-visible' : ''}`}
      onClick={handleClick}
      aria-label={label}
    >
      <span aria-hidden="true">&uarr;</span>
      <span>{label}</span>
    </button>
  )
}

export function ScrollReveal({
  as: Tag = 'div',
  className = '',
  children,
  delay = 0,
  variant = 'up',
  rootMargin = '0px 0px -12% 0px',
  threshold = 0.18,
  style,
  ...props
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof window.IntersectionObserver !== 'function'
    )
  })

  useEffect(() => {
    const node = elementRef.current

    if (!node || isVisible) {
      return undefined
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        setIsVisible(true)
        observer.unobserve(entry.target)
      },
      { rootMargin, threshold },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [isVisible, rootMargin, threshold])

  return (
    <Tag
      ref={elementRef}
      className={`scroll-reveal scroll-reveal--${variant}${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { ...style, '--reveal-delay': `${delay}ms` } : style}
      {...props}
    >
      {children}
    </Tag>
  )
}

function DefaultHeroVisual({ eyebrow, metrics, spotlight }) {
  const visualMetrics = metrics.slice(0, 3)
  const visualNotes = spotlight?.slice(0, 2) ?? []

  return (
    <div className="hero-visual">
      <div className="hero-visual__stage">
        <div className="hero-visual__orb hero-visual__orb--one" />
        <div className="hero-visual__orb hero-visual__orb--two" />
        <div className="hero-visual__card hero-visual__card--main">
          <div className="hero-visual__eyebrow">{eyebrow}</div>
          <div className="hero-visual__grid">
            {visualMetrics.map((metric) => (
              <div className="hero-visual__metric" key={metric.label}>
                <strong><CountUpText value={metric.value} /></strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        {visualNotes.map((item, index) => (
          <div
            className={`hero-visual__card hero-visual__card--float hero-visual__card--float-${index + 1}`}
            key={item.title}
          >
            <strong>{item.title}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Section({ eyebrow, title, description, children, className = '', ...props }) {
  const variant = getRevealVariant({
    eyebrow,
    title,
    className,
  })

  return (
    <ScrollReveal
      as="section"
      className={`page-section${className ? ` ${className}` : ''}`}
      variant={variant}
      {...props}
    >
      <div className="section-head">
        <div className="section-head__main">
          {eyebrow ? <div className="section-eyebrow">{eyebrow}</div> : null}
          {title ? <h2 className="section-title">{title}</h2> : null}
        </div>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      {children}
    </ScrollReveal>
  )
}

export function CardGrid({ items }) {
  return (
    <div className="card-grid">
      {items.map((item, index) => (
        <article className={`card card--${index % 4 === 0 ? 'featured' : 'default'}`} key={item.title}>
          {item.eyebrow ? <div className="card-eyebrow">{item.eyebrow}</div> : null}
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.text}</p>
          {item.points?.length ? (
            <ul className="card-list">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  )
}

export function StepsGrid({ items }) {
  return (
    <div className="steps-grid">
      {items.map((item, index) => (
        <article className={`step-card step-card--${index === 1 ? 'accent' : 'default'}`} key={item.title}>
          <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.text}</p>
        </article>
      ))}
    </div>
  )
}

export function ShowcaseGrid({ items }) {
  return (
    <div className="showcase-grid">
      {items.map((item) => (
        <article
          className={`showcase-panel${item.accent ? ' showcase-panel--accent' : ''}`}
          key={item.title}
        >
          {item.eyebrow ? <div className="card-eyebrow">{item.eyebrow}</div> : null}
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.points?.length ? (
            <ul className="check-list">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  )
}

export function QuoteGrid({ items }) {
  return (
    <div className="quote-grid">
      {items.map((item, index) => (
        <article className={`quote-card${index === 0 ? ' quote-card--featured' : ''}`} key={item.author}>
          <p>{item.quote}</p>
          <div className="quote-card__author">{item.author}</div>
          <div className="card-text">{item.role}</div>
        </article>
      ))}
    </div>
  )
}

export function PricingGrid({ items }) {
  return (
    <div className="pricing-grid">
      {items.map((item, index) => (
        <article className={`pricing-card${index === 1 ? ' pricing-card--featured' : ''}`} key={item.title}>
          <div className="card-eyebrow">{item.eyebrow}</div>
          <h3>{item.title}</h3>
          <div className="price-tag">{item.price}</div>
          <p>{item.text}</p>
          <ul className="check-list">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

export function FaqGrid({ items }) {
  return (
    <div className="faq-grid">
      {items.map((item) => (
        <article className="faq-card" key={item.question}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </article>
      ))}
    </div>
  )
}

export function CtaBanner({ title, text, primaryCta, secondaryCta }) {
  return (
    <ScrollReveal as="section" className="cta-banner" variant="top">
      <h2 className="cta-banner__title">{title}</h2>
      <p>{text}</p>
      <div className="cta-row">
        {primaryCta ? (
          <a className="button-link is-primary" href={primaryCta.href}>
            {primaryCta.label}
          </a>
        ) : null}
        {secondaryCta ? (
          <a className="button-link is-secondary" href={secondaryCta.href}>
            {secondaryCta.label}
          </a>
        ) : null}
      </div>
    </ScrollReveal>
  )
}

function themeToCssVars(theme) {
  return Object.fromEntries(
    Object.entries(theme).map(([key, value]) => [`--${key}`, value]),
  )
}

function deriveReadingPath(children) {
  const sections = collectSections(children).filter((item) => item.title)
  return sections.slice(0, 3)
}

function deriveTrustItems(metrics, spotlight) {
  const metricItems = metrics.slice(0, 2).map((item) => ({
    value: item.value,
    label: item.label,
  }))
  const spotlightItems = (spotlight ?? []).slice(0, 1).map((item) => ({
    value: item.title,
    label: item.text,
  }))

  return [...metricItems, ...spotlightItems].slice(0, 3)
}

function getRevealVariant({ eyebrow = '', title = '', className = '' }) {
  const variantPool = ['up', 'left', 'up', 'right', 'up', 'top']
  const seed = `${eyebrow}|${title}|${className}`
  const hash = Array.from(seed).reduce(
    (total, char) => total + char.charCodeAt(0),
    0,
  )

  return variantPool[hash % variantPool.length]
}

function collectSections(children, parentId = null, sections = []) {
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      return
    }

    const currentId = typeof child.props?.id === 'string' ? child.props.id : parentId

    if (typeof child.props?.title === 'string') {
      sections.push({
        id: `${currentId ?? 'section'}-${sections.length}`,
        anchorId: currentId,
        title: child.props.title,
        eyebrow: child.props.eyebrow,
      })
      return
    }

    if (child.props?.children) {
      collectSections(child.props.children, currentId, sections)
    }
  })

  return sections
}
