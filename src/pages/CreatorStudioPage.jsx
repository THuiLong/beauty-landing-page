import {
  CardGrid,
  CtaBanner,
  FaqGrid,
  PageFrame,
  PricingGrid,
  QuoteGrid,
  Section,
  ShowcaseGrid,
  StepsGrid,
} from '../components/landing/Primitives'
import { CreatorStudioVisual } from '../components/landing/HeroVisuals.jsx'

const theme = {
  accent: '#ff5c7a',
  'accent-surface': 'linear-gradient(180deg, rgba(255, 92, 122, 0.2), rgba(23, 17, 15, 0.96))',
  'accent-text': '#fff6ef',
  'cta-gradient': 'linear-gradient(135deg, #ff5c7a 0%, #b11236 52%, #181110 100%)',
  'cta-text': '#fff6ef',
  'hero-border': 'rgba(255, 244, 233, 0.12)',
  'hero-surface': 'linear-gradient(180deg, rgba(249, 233, 215, 0.08), rgba(255, 255, 255, 0.02))',
  'highlight-surface': 'linear-gradient(180deg, rgba(249, 233, 215, 0.18), rgba(255, 92, 122, 0.12))',
  'highlight-text': '#fff6ef',
  'page-bg': '#16100f',
  'page-bg-secondary': '#251816',
  'page-muted': 'rgba(255, 238, 225, 0.72)',
  'page-orb-1': 'rgba(255, 92, 122, 0.22)',
  'page-orb-2': 'rgba(245, 214, 185, 0.14)',
  'page-pattern':
    'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
  'page-text': '#fff6ef',
}

const serviceOffers = [
  {
    eyebrow: 'Positioning',
    title: 'Personal brand strategy',
    text: 'We sharpen the point of view, audience magnet, and signature content themes before the first camera rolls.',
    points: ['Messaging architecture', 'Audience heatmap', 'Offer-angle playbook'],
  },
  {
    eyebrow: 'Production',
    title: 'Short-form content engine',
    text: 'A studio-style system for filming Reels, TikToks, founder POV clips, and launch assets in one focused sprint.',
    points: ['Shoot-day direction', 'Hook-first scripting', 'Platform-native editing'],
  },
  {
    eyebrow: 'Campaigns',
    title: 'Launch week takeover',
    text: 'For product drops, keynote seasons, podcasts, and personal brand relaunches that need attention now.',
    points: ['Launch concept kit', 'Story sequence map', 'Creator-style rollout'],
  },
  {
    eyebrow: 'Authority',
    title: 'Executive thought leadership',
    text: 'Turn expertise into a repeatable content series that grows trust with customers, media, and high-value partners.',
    points: ['Interview-led episodes', 'Carousel frameworks', 'Newsletter tie-ins'],
  },
]

const workflow = [
  {
    title: 'Decode the brand',
    text: 'We audit your current presence, best-performing ideas, competitors, and the attention gaps we can own.',
  },
  {
    title: 'Build the hook board',
    text: 'We map signature pillars, talking-point angles, CTAs, and visual references into one fast-moving content system.',
  },
  {
    title: 'Direct the shoot',
    text: 'Your team gets a clear run-of-show, shot list, styling notes, and on-camera coaching to keep energy sharp.',
  },
  {
    title: 'Edit for the feed',
    text: 'We cut multiple formats, write captions, and tune pacing so the content feels native instead of overly polished.',
  },
  {
    title: 'Scale what hits',
    text: 'Weekly insight reviews show which hooks, topics, and offers are converting attention into leads and sales.',
  },
]

const showcaseItems = [
  {
    eyebrow: 'Series Concept',
    title: 'Founder diary arcs',
    text: 'A recurring narrative series that makes the brand feel human, specific, and worth following.',
    points: ['Behind-the-scenes edits', 'Comment-driving prompts', 'Weekly narrative cadence'],
  },
  {
    eyebrow: 'Launch Stack',
    title: 'Product drop week',
    text: 'One coordinated system for teasers, reveal posts, creator-style trailers, and day-of-sale urgency.',
    points: ['Countdown sequences', 'Landing page traffic hooks', 'UGC-style cutdowns'],
    accent: true,
  },
  {
    eyebrow: 'Repurposing',
    title: 'Podcast to platform kit',
    text: 'Long-form conversations become vertical clips, quote carousels, email intros, and social proof snippets.',
    points: ['Trimmed hooks', 'Visual subtitles', 'Multi-channel formatting'],
  },
  {
    eyebrow: 'Sales Enablement',
    title: 'Offer-first authority content',
    text: 'Thought leadership that sounds premium while still nudging viewers toward bookings, demos, and waitlists.',
    points: ['Objection handling posts', 'Case-study storytelling', 'CTA scripting'],
  },
]

const testimonials = [
  {
    quote:
      'They made our founder finally look as sharp online as she sounds in the boardroom. We launched with a backlog of usable content instead of a one-day spike.',
    author: 'Mira Solis',
    role: 'COO, House of Vanta',
  },
  {
    quote:
      'The studio sprint turned a messy relaunch into a clean content calendar. Our best-performing reel tripled our usual inbound demo volume.',
    author: 'Jared Cole',
    role: 'Founder, Northline Labs',
  },
  {
    quote:
      'Everything felt platform-native, not corporate. The edits were punchy, the scripts were smart, and the comments started sounding like warm leads.',
    author: 'Anika Deen',
    role: 'Brand Lead, Form Standard',
  },
]

const packages = [
  {
    eyebrow: 'Fast Start',
    title: 'Starter Drop',
    price: '$2.8k',
    text: 'Best for founders who need a sharp first impression and a launch-ready content burst.',
    points: ['1 strategy session', 'Half-day production sprint', '12 edited short-form assets', 'Launch caption pack'],
  },
  {
    eyebrow: 'Best Seller',
    title: 'Momentum Studio',
    price: '$5.9k',
    text: 'A monthly creator system for brands that want consistent visibility and stronger content performance.',
    points: ['Monthly strategy board', 'Full shoot day', '28 edited assets', 'Analytics review and next hooks'],
  },
  {
    eyebrow: 'Signature',
    title: 'Authority OS',
    price: '$9.8k',
    text: 'For executives and high-growth brands building category authority across multiple channels.',
    points: ['Brand positioning intensive', '2 production days', 'Podcast and social repurposing', 'Priority launch support'],
  },
]

const faqs = [
  {
    question: 'Do you work with founders who are not comfortable on camera?',
    answer:
      'Yes. Most clients start there. We guide the energy, structure the talking points, and build filming formats that feel natural instead of scripted.',
  },
  {
    question: 'Can this work for a small internal marketing team?',
    answer:
      'Absolutely. We often plug into lean teams and deliver the strategy, creative direction, and asset system they can keep using after the sprint.',
  },
  {
    question: 'Do you only focus on short-form video?',
    answer:
      'Short-form is the growth engine, but we usually connect it to landing pages, email, carousels, launch copy, and founder narrative themes.',
  },
  {
    question: 'How quickly can we launch?',
    answer:
      'Starter projects can begin within 7 to 10 days. Retainers usually start with a strategy session and first production sprint in the opening two weeks.',
  },
]

const socialSignals = [
  'Seen in launch weeks',
  'Built for Reels + TikTok + LinkedIn',
  'Hooks, scripts, edits, captions',
  'Founder-led storytelling',
  'Fast-turn campaign assets',
]

const examplePosts = [
  {
    format: 'Reel',
    title: '"The reason nobody remembers your founder content"',
    detail: '8.2x saves on an opinion-led talking-head cut with a polarizing first three seconds.',
    stat: '182k views',
  },
  {
    format: 'Carousel',
    title: 'From personal brand audit to launch-day message map',
    detail: 'A swipe deck that turned strategy into an easy-to-share founder narrative and CTA path.',
    stat: '31% profile taps',
  },
  {
    format: 'Trailer',
    title: 'Drop-week teaser edited like a fashion campaign',
    detail: 'Shot details, quick copy beats, and mood-first pacing built hype before the sales page opened.',
    stat: '4.7x waitlist lift',
  },
]

const sharedInclusions = [
  'Creative direction',
  'Camera-flow coaching',
  'Caption writing',
  'Visual hook library',
  'Performance reporting',
]

const pageStyles = `
  .creator-studio-page-shell .landing-page {
    background:
      radial-gradient(circle at top left, rgba(255, 92, 122, 0.22), transparent 30%),
      radial-gradient(circle at right top, rgba(245, 214, 185, 0.16), transparent 32%),
      linear-gradient(180deg, #110d0c 0%, #1d1412 48%, #261816 100%);
    background-size: auto, auto, auto, 28px 28px, 28px 28px;
  }

  .creator-studio-page-shell .page-hero {
    align-items: start;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.06), transparent 42%),
      linear-gradient(180deg, rgba(243, 226, 205, 0.08), rgba(255, 92, 122, 0.06));
    border: 1px solid rgba(255, 240, 227, 0.12);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 24px 60px rgba(0, 0, 0, 0.22);
  }

  .creator-studio-page-shell .page-eyebrow,
  .creator-studio-page-shell .section-eyebrow,
  .creator-studio-page-shell .card-eyebrow {
    color: #ff9caf;
  }

  .creator-studio-page-shell .page-title,
  .creator-studio-page-shell .section-title,
  .creator-studio-page-shell .cta-banner__title {
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.05em;
  }

  .creator-studio-page-shell .page-title {
    max-width: 8.5ch;
    line-height: 0.92;
    text-transform: uppercase;
  }

  .creator-studio-page-shell .page-title__accent {
    display: block;
    color: #ff6f8d;
  }

  .creator-studio-page-shell .button-link {
    border-color: rgba(255, 240, 227, 0.16);
    background: rgba(255, 255, 255, 0.04);
    color: #fff6ef;
  }

  .creator-studio-page-shell .button-link.is-primary {
    background: linear-gradient(135deg, #ff6f8d, #d41f4d);
    border-color: transparent;
  }

  .creator-studio-page-shell .button-link.is-secondary {
    background: rgba(255, 255, 255, 0.08);
  }

  .creator-studio-page-shell .metric-card,
  .creator-studio-page-shell .step-card,
  .creator-studio-page-shell .card,
  .creator-studio-page-shell .quote-card,
  .creator-studio-page-shell .pricing-card,
  .creator-studio-page-shell .faq-card,
  .creator-studio-page-shell .showcase-panel,
  .creator-studio-page-shell .page-section {
    background: linear-gradient(180deg, rgba(255, 248, 242, 0.09), rgba(255, 248, 242, 0.04));
    border: 1px solid rgba(255, 240, 227, 0.12);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .creator-studio-page-shell .hero-highlight {
    border: 1px solid rgba(255, 240, 227, 0.12);
  }

  .creator-studio-page-shell .showcase-panel--accent {
    border-color: rgba(255, 154, 175, 0.22);
    box-shadow: 0 24px 40px rgba(150, 16, 46, 0.16);
  }

  .creator-studio-page {
    display: grid;
    gap: 1.1rem;
  }

  .creator-studio-pulse {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.95fr);
    gap: 1rem;
    padding: 1.2rem;
    border-radius: 1.7rem;
    background:
      linear-gradient(135deg, rgba(255, 111, 141, 0.14), transparent 45%),
      linear-gradient(180deg, rgba(249, 233, 215, 0.08), rgba(255, 255, 255, 0.03));
    border: 1px solid rgba(255, 240, 227, 0.12);
  }

  .creator-studio-pulse__lead {
    display: grid;
    gap: 1rem;
    align-content: start;
  }

  .creator-studio-pulse__kicker {
    display: inline-flex;
    width: fit-content;
    padding: 0.45rem 0.8rem;
    border-radius: 999px;
    background: rgba(255, 111, 141, 0.16);
    color: #ffdbe2;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .creator-studio-pulse h2 {
    margin: 0;
    font-family: 'Outfit', sans-serif;
    font-size: clamp(1.8rem, 4vw, 3rem);
    line-height: 0.96;
    letter-spacing: -0.04em;
    text-transform: uppercase;
  }

  .creator-studio-pulse p,
  .creator-studio-post p,
  .creator-studio-include {
    color: rgba(255, 238, 225, 0.78);
    line-height: 1.65;
  }

  .creator-studio-signals,
  .creator-studio-includes {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .creator-studio-signal,
  .creator-studio-include {
    padding: 0.72rem 0.9rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 240, 227, 0.1);
  }

  .creator-studio-pulse__board {
    display: grid;
    gap: 0.85rem;
  }

  .creator-studio-board-card {
    padding: 1rem;
    border-radius: 1.35rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 240, 227, 0.1);
  }

  .creator-studio-board-card strong {
    display: block;
    margin-bottom: 0.35rem;
    font-size: 1.45rem;
  }

  .creator-studio-ribbon {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 0.8rem;
    margin-top: 1rem;
  }

  .creator-studio-ribbon__item {
    padding: 0.95rem 1rem;
    border-radius: 1.2rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 240, 227, 0.1);
    color: rgba(255, 238, 225, 0.84);
    font-size: 0.95rem;
    font-weight: 600;
  }

  .creator-studio-content-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .creator-studio-post {
    min-height: 100%;
    padding: 1.15rem;
    border-radius: 1.4rem;
    background:
      linear-gradient(180deg, rgba(255, 248, 242, 0.08), rgba(255, 248, 242, 0.03));
    border: 1px solid rgba(255, 240, 227, 0.12);
  }

  .creator-studio-post__format {
    display: inline-flex;
    margin-bottom: 0.85rem;
    padding: 0.4rem 0.7rem;
    border-radius: 999px;
    background: rgba(255, 111, 141, 0.16);
    color: #ffdbe2;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .creator-studio-post h3 {
    margin: 0 0 0.75rem;
    font-size: 1.2rem;
  }

  .creator-studio-post__stat {
    display: inline-flex;
    margin-top: 1rem;
    padding: 0.55rem 0.8rem;
    border-radius: 999px;
    background: rgba(249, 233, 215, 0.1);
    color: #fff6ef;
    font-weight: 700;
  }

  .creator-studio-client-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 1rem;
  }

  .creator-studio-client {
    padding: 0.7rem 0.9rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 240, 227, 0.1);
    color: rgba(255, 238, 225, 0.84);
    font-weight: 700;
  }

  @media (max-width: 980px) {
    .creator-studio-pulse,
    .creator-studio-content-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 720px) {
    .creator-studio-pulse h2 {
      max-width: 10ch;
    }

    .creator-studio-signals,
    .creator-studio-includes,
    .creator-studio-client-strip {
      gap: 0.55rem;
    }

    .creator-studio-signal,
    .creator-studio-include,
    .creator-studio-client {
      width: 100%;
      justify-content: center;
      text-align: center;
    }
  }
`

function CreatorStudioPage() {
  return (
    <div className="creator-studio-page-shell">
      <style>{pageStyles}</style>

      <PageFrame
        theme={theme}
        eyebrow="Creator Studio / Personal Branding Agency"
        title={
          <>
            Turn founders
            <span className="page-title__accent">into must-watch brands.</span>
          </>
        }
        description="High-energy content systems for founders and modern brands."
        primaryCta={{ label: 'Book A Concept Sprint', href: '#packages' }}
        secondaryCta={{ label: 'See The Workflow', href: '#workflow' }}
        heroVisual={{
          content: <CreatorStudioVisual />,
          badges: ['Reels', 'Launch drops', 'Founder edits'],
        }}
        metrics={[
          { value: '120M+', label: 'Views influenced across launches' },
          { value: '14 days', label: 'Typical concept-to-content turnaround' },
          { value: '4.9/5', label: 'Founder satisfaction score' },
        ]}
        spotlight={[
          { title: '30+ assets', text: 'from one tightly directed shoot day' },
          { title: 'Hook-first', text: 'scripts tuned for scroll-stop attention' },
          { title: 'Multi-platform', text: 'built for Reels, TikTok, LinkedIn, and launch pages' },
        ]}
      >
        <div className="creator-studio-page">
          <section className="creator-studio-pulse" aria-label="Studio positioning">
            <div className="creator-studio-pulse__lead">
              <span className="creator-studio-pulse__kicker">High-energy brand storytelling</span>
              <h2>Fashion-campaign polish meets creator-speed execution.</h2>
              <p>
                We blend positioning, production, and performance thinking so every asset
                feels editorial, modern, and ready to move people from passive viewing to
                active buying.
              </p>
              <div className="creator-studio-signals">
                {socialSignals.map((signal) => (
                  <span className="creator-studio-signal" key={signal}>
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            <div className="creator-studio-pulse__board">
              <div className="creator-studio-board-card">
                <strong>Weekly system</strong>
                <span>Hooks, shoot plans, edit notes, captions, and rollout logic in one motion.</span>
              </div>
              <div className="creator-studio-board-card">
                <strong>Premium tone</strong>
                <span>More style, more tension, less corporate filler. Built for brands people remember.</span>
              </div>
              <div className="creator-studio-board-card">
                <strong>Sales-aware creative</strong>
                <span>Every concept ties back to a launch, offer, audience objection, or trust trigger.</span>
              </div>
            </div>
          </section>

          <Section
            eyebrow="Service Offers"
            title="What we build for founder-led brands"
            description="Each offer is designed to tighten the brand story, accelerate production, and keep the content machine aligned with revenue goals."
          >
            <CardGrid items={serviceOffers} />
          </Section>

          <Section
            eyebrow="Workflow"
            title="A production process that moves quickly without losing taste"
            description="We keep the system structured behind the scenes so the final output still feels effortless, current, and unmistakably on-brand."
          >
            <div id="workflow">
              <StepsGrid items={workflow} />
            </div>
            <div className="creator-studio-ribbon" aria-label="Workflow deliverables">
              <div className="creator-studio-ribbon__item">Hook board and content pillars</div>
              <div className="creator-studio-ribbon__item">Styling and shot-list direction</div>
              <div className="creator-studio-ribbon__item">Fast-turn edits with captions</div>
              <div className="creator-studio-ribbon__item">Insights that shape the next sprint</div>
            </div>
          </Section>

          <Section
            eyebrow="Examples + Social Proof"
            title="Content formats that win attention and look current"
            description="We create assets that feel native to the feed while still carrying a premium point of view. The mix below shows how we balance style, clarity, and momentum."
          >
            <div className="creator-studio-content-grid">
              {examplePosts.map((post) => (
                <article className="creator-studio-post" key={post.title}>
                  <div className="creator-studio-post__format">{post.format}</div>
                  <h3>{post.title}</h3>
                  <p>{post.detail}</p>
                  <div className="creator-studio-post__stat">{post.stat}</div>
                </article>
              ))}
            </div>
            <ShowcaseGrid items={showcaseItems} />
          </Section>

          <Section
            eyebrow="Testimonials"
            title="Clients stop blending in once the system clicks"
            description="Our best projects turn scattered ideas into a distinct visual and verbal signature that audiences recognize fast."
          >
            <div className="creator-studio-client-strip" aria-label="Client categories">
              <span className="creator-studio-client">Founder-led wellness</span>
              <span className="creator-studio-client">Creative agencies</span>
              <span className="creator-studio-client">Luxury consumer brands</span>
              <span className="creator-studio-client">B2B experts and operators</span>
            </div>
            <QuoteGrid items={testimonials} />
          </Section>

          <Section
            eyebrow="Packages"
            title="Choose the level of production momentum you need"
            description="Whether you need a sharp launch burst or an always-on content machine, these packages give customers a clear way to buy."
          >
            <div id="packages">
              <PricingGrid items={packages} />
            </div>
            <div className="creator-studio-includes" aria-label="Included in every package">
              {sharedInclusions.map((item) => (
                <span className="creator-studio-include" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Section>

          <Section
            eyebrow="FAQ"
            title="What founders usually ask before we start"
            description="A few practical answers to help teams understand how the studio model works and what to expect once we kick off."
          >
            <FaqGrid items={faqs} />
          </Section>

          <CtaBanner
            title="Ready to make your brand the one people forward?"
            text="Book a concept sprint and we'll map the visual direction, messaging hooks, and content cadence your audience will actually remember."
            primaryCta={{ label: 'Start The Sprint', href: '#packages' }}
            secondaryCta={{ label: 'View The Workflow', href: '#workflow' }}
          />
        </div>
      </PageFrame>
    </div>
  )
}

export default CreatorStudioPage
