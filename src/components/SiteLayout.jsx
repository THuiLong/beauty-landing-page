import { Link, NavLink, Outlet } from 'react-router-dom'

function PageChip({ page, index }) {
  return (
    <NavLink
      to={`/${page.slug}`}
      className={({ isActive }) => `page-chip${isActive ? ' is-active' : ''}`}
      style={{ '--page-chip-gradient': page.previewGradient }}
    >
      <span className="page-chip__preview" aria-hidden="true" />
      <span className="page-chip__content">
        <span className="page-chip__meta">
          <span className="page-chip__index">{String(index + 1).padStart(2, '0')}</span>
          <span className="page-chip__category">{page.category}</span>
        </span>
        <span className="page-chip__title">{page.shortName}</span>
        <span className="page-chip__positioning">{page.positioning}</span>
      </span>
    </NavLink>
  )
}

export function SiteLayout({ pages }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner site-header__bar">
          <Link className="brand-lockup" to="/">
            <span className="brand-lockup__eyebrow">Multi-Concept Demo</span>
            <span className="brand-lockup__name">Beauty Landing Page Studio</span>
          </Link>
          <div className="site-header__note">
            Ten switchable, sale-ready landing page concepts built for hot niches:
            premium service brands, wellness products, local businesses, and AI offers.
          </div>
        </div>
      </header>

      <section className="site-switcher-band" aria-label="Landing page switcher area">
        <div className="site-header__inner">
          <div className="page-switcher-shell">
            <div className="page-switcher__intro">
              <div className="page-switcher__eyebrow">Explore Concepts</div>
              <p>Jump between niches with a cleaner, more visual selector.</p>
            </div>
            <nav className="page-switcher" aria-label="Landing page switcher">
              {pages.map((page, index) => (
                <PageChip key={page.slug} page={page} index={index} />
              ))}
            </nav>
          </div>
        </div>
      </section>

      <main className="page-main">
        <div className="page-wrap">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export function DemoHome({ pages }) {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__grid">
          <div>
            <div className="page-eyebrow">Portfolio Collection</div>
            <h1>Ten different landing page concepts, one switchable showcase.</h1>
            <p>
              Each concept is designed to feel attractive, responsive, modern, and easy
              to sell to real clients. Use the menu to switch pages or start from any
              card below.
            </p>
            <div className="home-hero__actions">
              <Link className="button-link is-primary" to={`/${pages[0].slug}`}>
                Open first demo
              </Link>
              <a className="button-link" href="#demo-grid">
                Browse all concepts
              </a>
            </div>
          </div>

          <aside className="home-summary">
            <div className="home-summary__card">
              <div className="card-eyebrow">Built For Selling</div>
              <div className="home-summary__metric">10</div>
              <p>Distinct demo pages across local service, wellness, tech, and DTC niches.</p>
            </div>
            <div className="home-summary__card">
              <div className="card-eyebrow">Portfolio Benefit</div>
              <p>
                Show customers you can handle both premium visual branding and high
                conversion service pages in one polished website.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="demo-grid" className="home-grid">
        {pages.map((page) => (
          <Link
            key={page.slug}
            to={`/${page.slug}`}
            className="demo-card"
            style={{ '--preview-gradient': page.previewGradient }}
          >
            <div className="demo-card__preview" />
            <div className="demo-card__body">
              <div className="demo-card__meta">
                <span className="meta-pill">{page.category}</span>
                <span className="meta-pill">{page.positioning}</span>
              </div>
              <h2>{page.name}</h2>
              <p>{page.summary}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  )
}
