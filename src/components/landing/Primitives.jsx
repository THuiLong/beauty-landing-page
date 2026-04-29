import { Children, isValidElement } from 'react'

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
                  <strong>{metric.value}</strong>
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
                    {badge}
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
                <strong>{metric.value}</strong>
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

export function Section({ eyebrow, title, description, children }) {
  return (
    <section className="page-section">
      <div className="section-head">
        {eyebrow ? <div className="section-eyebrow">{eyebrow}</div> : null}
        {title ? <h2 className="section-title">{title}</h2> : null}
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      {children}
    </section>
  )
}

export function CardGrid({ items }) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <article className="card" key={item.title}>
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
        <article className="step-card" key={item.title}>
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
      {items.map((item) => (
        <article className="quote-card" key={item.author}>
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
      {items.map((item) => (
        <article className="pricing-card" key={item.title}>
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
    <section className="cta-banner">
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
    </section>
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
