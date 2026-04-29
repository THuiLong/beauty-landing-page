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
import { LandscapingVisual } from '../components/landing/HeroVisuals.jsx'

const theme = {
  'page-bg': '#f1eee8',
  'page-bg-secondary': '#e5ddd0',
  'page-text': '#243028',
  'page-muted': 'rgba(36, 48, 40, 0.74)',
  accent: '#7d5f44',
  'page-orb-1': 'rgba(92, 117, 88, 0.2)',
  'page-orb-2': 'rgba(153, 113, 79, 0.16)',
  'hero-surface': 'rgba(249, 246, 241, 0.8)',
  'hero-border': 'rgba(54, 68, 58, 0.12)',
  'highlight-surface': 'linear-gradient(170deg, rgba(56, 78, 62, 0.97), rgba(84, 99, 76, 0.95))',
  'highlight-text': '#f5f1e9',
  'accent-surface': 'linear-gradient(170deg, rgba(76, 94, 70, 0.98), rgba(123, 94, 69, 0.96))',
  'accent-text': '#243028',
  'accent-muted': 'rgba(36, 48, 40, 0.78)',
  'cta-gradient': 'linear-gradient(135deg, #4b644a, #8e684b)',
  'cta-text': '#f8f4ee',
  'page-heading-font': "'Fraunces', 'Georgia', serif",
  'page-title-max-width': '14.5ch',
  'page-title-size': 'clamp(2.5rem, 5vw, 4.8rem)',
  'section-title-max-width': '19ch',
  'page-pattern':
    'radial-gradient(circle at 18% 18%, rgba(255,255,255,0.3) 0, transparent 18%), linear-gradient(135deg, rgba(75,100,74,0.08), transparent 34%), linear-gradient(0deg, rgba(141,114,86,0.05), rgba(141,114,86,0.05))',
}

const metrics = [
  { value: '18 yrs', label: 'craft-led outdoor renovation experience' },
  { value: '140+', label: 'design-build projects delivered' },
  { value: '6-10 wks', label: 'typical patio and landscape timeline' },
]

const spotlight = [
  {
    title: 'Craftsmanship first',
    text: 'Landscape builds shaped around drainage, durability, planting rhythm, and outdoor living that ages beautifully.',
  },
  {
    title: 'Designed to be lived in',
    text: 'From front-yard curb appeal to backyard entertaining zones, every plan balances utility, maintenance, and atmosphere.',
  },
]

const serviceItems = [
  {
    eyebrow: 'Outdoor living',
    title: 'Patios, pergolas, and gathering spaces',
    text: 'Comfortable outdoor rooms with layered hardscape, lighting, and furnishing zones that feel tailored to the property.',
    points: ['Natural stone or paver patio layouts', 'Pergolas, privacy screens, and fire features', 'Lighting plans for evening use'],
  },
  {
    eyebrow: 'Front-of-home impact',
    title: 'Entry, driveway, and curb appeal upgrades',
    text: 'Projects that improve the arrival experience with cleaner lines, better circulation, and materials that complement the architecture.',
    points: ['Walkways, steps, and retaining details', 'Driveway border and apron upgrades', 'Low-maintenance planting structure'],
  },
  {
    eyebrow: 'Landscape systems',
    title: 'Planting, irrigation, and drainage',
    text: 'A dependable foundation that protects the investment and keeps outdoor spaces healthy through changing seasons.',
    points: ['Plant palettes matched to site conditions', 'Irrigation planning and refreshes', 'Grading and water-management corrections'],
  },
]

const processItems = [
  {
    title: 'Site walk and vision mapping',
    text: 'We review how the property works today, what is not performing, and how you want to live in the space in every season.',
  },
  {
    title: 'Concept, materials, and budget alignment',
    text: 'Layouts, finishes, and scope are shaped together so the direction feels exciting, realistic, and clear before the build starts.',
  },
  {
    title: 'Build with steady communication',
    text: 'Our crew sequences site prep, hardscape, planting, and finishing details with visible milestones and dependable timelines.',
  },
  {
    title: 'Final styling and care handoff',
    text: 'We close with punch-list review, maintenance guidance, and the small finishing touches that make the project feel complete.',
  },
]

const showcaseItems = [
  {
    eyebrow: 'Backyard transformation',
    title: 'From patchy lawn to an outdoor room built for hosting',
    text: 'A full rework of circulation, seating, and planting turned an underused yard into a layered patio retreat with lighting, texture, and privacy.',
    points: ['Defined dining and lounge zones', 'Drainage corrected beneath new hardscape', 'Planting selected for year-round structure'],
  },
  {
    eyebrow: 'Front elevation refresh',
    title: 'From flat curb appeal to a warm, elevated arrival',
    text: 'Stone-edged beds, upgraded steps, and architectural planting create a cleaner first impression that feels dependable and premium.',
    points: ['Improved entry sequence', 'More resilient material palette', 'Low-maintenance structure with visual depth'],
    accent: true,
  },
  {
    eyebrow: 'Functional improvement',
    title: 'From standing water to a landscape that performs',
    text: 'Below-grade corrections, grading updates, and planting strategy solved recurring water issues while making the property look more considered.',
    points: ['Water moved away from the foundation', 'Softer transitions across slopes', 'Healthier beds and easier maintenance'],
  },
]

const testimonials = [
  {
    quote:
      'They treated the project like a craft, not a rush job. The patio feels like it belongs to the house and the whole yard is easier to enjoy.',
    author: 'Michelle A.',
    role: 'Backyard renovation client',
  },
  {
    quote:
      'We appreciated how clearly they explained drainage, materials, and budget choices. The result looks beautiful and feels built to last.',
    author: 'Daniel K.',
    role: 'Front-yard and driveway upgrade',
  },
  {
    quote:
      'Every phase was organized, the crew was respectful, and the finished landscape raised the quality of the entire property.',
    author: 'Sara and Imran P.',
    role: 'Design-build homeowners',
  },
]

const pricingItems = [
  {
    eyebrow: 'Starting point',
    title: 'Curb Appeal Refresh',
    price: 'From $4,500',
    text: 'A focused exterior update for entry walks, foundation beds, lighting accents, and a cleaner arrival experience.',
    points: ['Best for front-yard improvements', 'Planting and hardscape touch-ups', 'Material palette matched to home style'],
  },
  {
    eyebrow: 'Most requested',
    title: 'Backyard Living Project',
    price: 'From $14,000',
    text: 'A mid-scale design-build package for patios, seating zones, planting, and the essentials that make outdoor living usable right away.',
    points: ['Patio or hardscape anchor feature', 'Layered planting and lighting', 'Project management from concept to completion'],
  },
  {
    eyebrow: 'Premium',
    title: 'Full Property Transformation',
    price: 'Custom Quote',
    text: 'Comprehensive redesign for homeowners ready to reimagine circulation, landscape performance, and outdoor lifestyle across the whole site.',
    points: ['Front and backyard master scope', 'Drainage, grading, and specialty features', 'White-glove design-build coordination'],
  },
]

const faqItems = [
  {
    question: 'Do you handle both design and construction?',
    answer:
      'Yes. This concept is framed as a design-build service, which means planning, materials, scheduling, and construction are coordinated through one team.',
  },
  {
    question: 'What kinds of projects are the best fit?',
    answer:
      'Patios, walkways, retaining details, planting plans, lighting upgrades, drainage fixes, and full outdoor-living transformations all fit well.',
  },
  {
    question: 'How do you keep projects on budget?',
    answer:
      'We align scope, material priorities, and phasing early so homeowners can make clear decisions before construction begins.',
  },
  {
    question: 'Can you design for lower maintenance yards?',
    answer:
      'Absolutely. Many clients want a more polished landscape with less upkeep, so we prioritize durable materials and site-appropriate planting.',
  },
]

const buildPrinciples = [
  'Materials chosen for weathering, not just day-one beauty',
  'Planting plans shaped by sun, drainage, and maintenance goals',
  'Site function considered alongside aesthetics from the start',
  'Clear communication through design, prep, build, and handoff',
  'Premium tone that still feels practical and trustworthy',
  'A strong fit for both upscale landscaping and home-improvement brands',
]

function LandscapingHomeImprovementPage() {
  return (
    <>
      <style>{`
        .landscaping-page .page-eyebrow,
        .landscaping-page .section-eyebrow,
        .landscaping-page .card-eyebrow {
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 0.74rem;
          color: rgba(67, 80, 67, 0.72);
        }

        .landscaping-page .hero-panel {
          align-content: center;
        }

        .landscaping-page .hero-spotlight {
          grid-template-columns: 1fr;
        }

        .landscaping-page .hero-highlight {
          position: relative;
          overflow: hidden;
          min-height: 180px;
          border: 1px solid rgba(255, 248, 239, 0.08);
        }

        .landscaping-page .hero-highlight::after {
          content: '';
          position: absolute;
          inset: auto -8% -28% 30%;
          height: 180px;
          background: radial-gradient(circle, rgba(182, 149, 117, 0.26), transparent 62%);
          pointer-events: none;
        }

        .landscaping-page .scope-board {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.8fr);
          gap: 1rem;
          align-items: stretch;
        }

        .landscaping-page .scope-board__panel,
        .landscaping-page .scope-board__aside {
          border-radius: 1.45rem;
          padding: 1.3rem;
          border: 1px solid rgba(54, 68, 58, 0.1);
        }

        .landscaping-page .scope-board__panel {
          background:
            linear-gradient(140deg, rgba(255, 255, 255, 0.48), transparent 55%),
            rgba(247, 242, 235, 0.78);
        }

        .landscaping-page .scope-board__aside {
          display: grid;
          gap: 0.85rem;
          background:
            linear-gradient(180deg, rgba(81, 103, 79, 0.1), rgba(142, 109, 81, 0.12)),
            rgba(250, 247, 242, 0.74);
        }

        .landscaping-page .scope-board__aside strong {
          display: block;
          margin-bottom: 0.3rem;
          font-size: 1.65rem;
          line-height: 1.05;
          font-family: var(--page-heading-font, serif);
        }

        .landscaping-page .principles-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.8rem 1rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .landscaping-page .principles-list li {
          position: relative;
          padding-left: 1rem;
          color: rgba(36, 48, 40, 0.78);
          line-height: 1.6;
        }

        .landscaping-page .principles-list li::before {
          content: '';
          position: absolute;
          top: 0.72rem;
          left: 0;
          width: 0.38rem;
          height: 0.38rem;
          border-radius: 999px;
          background: #7d5f44;
          box-shadow: 0 0 0 0.22rem rgba(125, 95, 68, 0.12);
        }

        .landscaping-page .project-note {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .landscaping-page .project-note article {
          padding: 1rem 0 0;
          border-top: 1px solid rgba(54, 68, 58, 0.16);
        }

        .landscaping-page .project-note h3 {
          margin: 0 0 0.55rem;
          font-size: 1rem;
        }

        .landscaping-page .showcase-intro {
          max-width: 38rem;
          margin-top: -0.2rem;
          margin-bottom: 1rem;
          color: rgba(36, 48, 40, 0.74);
        }

        .landscaping-page .quote-card,
        .landscaping-page .pricing-card,
        .landscaping-page .faq-card,
        .landscaping-page .card,
        .landscaping-page .showcase-panel {
          border-radius: 1.4rem;
          border: 1px solid rgba(54, 68, 58, 0.1);
          background: rgba(249, 246, 241, 0.75);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.48);
        }

        .landscaping-page .price-tag {
          color: #654b35;
          font-family: var(--page-heading-font, serif);
          font-weight: 700;
        }

        .landscaping-page .quote-card p {
          font-size: 1.04rem;
        }

        .landscaping-page .quote-grid,
        .landscaping-page .faq-grid {
          align-items: start;
        }

        @media (max-width: 900px) {
          .landscaping-page .scope-board,
          .landscaping-page .project-note,
          .landscaping-page .principles-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="landscaping-page" id="top">
        <PageFrame
          theme={theme}
          eyebrow="Landscaping & Home Improvement"
          title="Grounded outdoor design-build work that makes a property feel more finished, functional, and valuable."
          description="Outdoor design-build work with craft, structure, and curb appeal."
          primaryCta={{ label: 'Request A Project Consultation', href: '#project-packages' }}
          secondaryCta={{ label: 'Explore Services', href: '#project-services' }}
          heroVisual={{
            content: <LandscapingVisual />,
            badges: ['Patios', 'Planting', 'Built to last'],
          }}
          metrics={metrics}
          spotlight={spotlight}
        >
          <Section
            eyebrow="Project Positioning"
            title="Built for companies that want to look established, design-aware, and easy to trust."
            description="This page balances premium visual language with straightforward project clarity, making it a strong portfolio template for landscaping studios, outdoor contractors, and design-build firms."
          >
            <div className="scope-board">
              <div className="scope-board__panel">
                <p className="card-text">
                  The tone is grounded and dependable rather than flashy. It highlights craftsmanship, site performance,
                  and the lived experience of the finished space, which helps homeowners feel confident about larger-ticket
                  outdoor projects.
                </p>
                <ul className="principles-list">
                  {buildPrinciples.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <aside className="scope-board__aside">
                <div>
                  <strong>Design with purpose</strong>
                  <span className="card-text">Every section is structured to sell quality, process discipline, and long-term value.</span>
                </div>
                <div>
                  <strong>Craft + performance</strong>
                  <span className="card-text">Ideal for brands that combine visual transformation with drainage, grading, and practical outdoor function.</span>
                </div>
              </aside>
            </div>
          </Section>

          <Section
            eyebrow="Project Services"
            title="Service blocks that quickly show what the team can design, build, and improve."
            description="These offers make the business feel capable across both beautiful finish work and the hidden systems that protect the investment."
          >
            <div id="project-services">
              <CardGrid items={serviceItems} />
            </div>
          </Section>

          <Section
            eyebrow="Design-Build Process"
            title="A homeowner-friendly process that keeps larger projects feeling clear and well managed."
            description="For this category, process is part of the product. Strong structure helps justify premium pricing and reduces hesitation before inquiry."
          >
            <StepsGrid items={processItems} />
            <div className="project-note">
              <article>
                <h3>Real site logic</h3>
                <p className="card-text">Layout decisions account for slope, sun, drainage, circulation, and how the property actually gets used.</p>
              </article>
              <article>
                <h3>Material confidence</h3>
                <p className="card-text">Stone, pavers, timber, and planting are framed around durability, maintenance, and the home&apos;s architecture.</p>
              </article>
              <article>
                <h3>Clean handoff</h3>
                <p className="card-text">Final walkthroughs, care notes, and punch-list attention keep the experience polished through completion.</p>
              </article>
            </div>
          </Section>

          <Section
            eyebrow="Showcase & Results"
            title="Transformation stories that sell both beauty and practical improvement."
            description="The most convincing outdoor-project pages show not just what changed visually, but how the property became easier to use and maintain."
          >
            <p className="showcase-intro">
              These examples are written to help prospects picture a better version of their home: stronger curb appeal,
              more useful outdoor living, and site issues solved with thoughtful construction.
            </p>
            <ShowcaseGrid items={showcaseItems} />
          </Section>

          <Section
            eyebrow="Client Feedback"
            title="Testimonials that reinforce professionalism, communication, and craftsmanship."
            description="Homeowners buying larger outdoor work want reassurance that the team is organized, respectful, and capable from start to finish."
          >
            <QuoteGrid items={testimonials} />
          </Section>

          <Section
            eyebrow="Project Package Tiers"
            title="Pricing examples that help the offer feel real without boxing the business in."
            description="These tiers are structured to support quick estimates for smaller jobs and custom conversations for more comprehensive transformations."
          >
            <div id="project-packages">
              <PricingGrid items={pricingItems} />
            </div>
          </Section>

          <Section
            eyebrow="Frequently Asked"
            title="Clear answers before the first consultation call."
            description="A focused FAQ helps reduce uncertainty around scope, fit, and the kind of projects the company is best positioned to deliver."
          >
            <FaqGrid items={faqItems} />
          </Section>

          <CtaBanner
            title="Turn outdoor projects into a premium, easy-to-trust offer."
            text="Use this concept to present a landscaping or home-improvement business as experienced, detail-oriented, and ready to deliver results that feel both beautiful and built for real life."
            primaryCta={{ label: 'Start Your Project', href: '#project-packages' }}
            secondaryCta={{ label: 'View Services', href: '#project-services' }}
          />
        </PageFrame>
      </div>
    </>
  )
}

export default LandscapingHomeImprovementPage
