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
} from '../components/landing/Primitives.jsx'
import { CountUpText } from '../components/landing/CountUpText'
import { SustainableVisual } from '../components/landing/HeroVisuals.jsx'

const theme = {
  'page-bg': '#f2efe6',
  'page-bg-secondary': '#e4dfd1',
  'page-text': '#252b24',
  'page-muted': 'rgba(37, 43, 36, 0.72)',
  accent: '#66725a',
  'page-orb-1': 'rgba(131, 148, 111, 0.22)',
  'page-orb-2': 'rgba(201, 189, 164, 0.34)',
  'page-pattern':
    'linear-gradient(135deg, rgba(255,255,255,0.22) 0, transparent 28%), repeating-linear-gradient(115deg, rgba(102,114,90,0.05) 0 18px, transparent 18px 42px)',
  'hero-surface': 'rgba(250, 248, 241, 0.78)',
  'hero-border': 'rgba(90, 101, 80, 0.14)',
  'highlight-surface':
    'linear-gradient(180deg, rgba(54, 63, 50, 0.98), rgba(35, 41, 34, 0.94))',
  'highlight-text': '#252b24',
  'accent-surface':
    'linear-gradient(180deg, rgba(79, 92, 71, 0.98), rgba(48, 56, 44, 0.96))',
  'accent-text': '#252b24',
  'accent-muted': 'rgba(37, 43, 36, 0.78)',
  'cta-gradient': 'linear-gradient(135deg, #4f5c47, #7e8b6e 50%, #2a3128)',
  'cta-text': '#f7f4ed',
  'page-heading-font': "'Fraunces', 'Times New Roman', serif",
}

const metrics = [
  { value: '87%', label: 'repeat orders driven by refill subscriptions' },
  { value: '-62%', label: 'less single-use packaging than conventional starter kits' },
  { value: '100%', label: 'ingredient and sourcing visibility on every SKU' },
]

const spotlight = [
  {
    title: 'Materials-first storytelling',
    text: 'Every detail is designed to make refill systems, packaging choices, and product ingredients feel desirable instead of technical.',
  },
  {
    title: 'Eco premium, not rustic',
    text: 'Muted olive, oat, and charcoal build a calm luxury mood that feels modern enough for lifestyle-focused DTC customers.',
  },
  {
    title: 'Built for conversion',
    text: 'The page balances brand story with a clear subscription path, social proof, and transparent pricing in the first few scrolls.',
  },
]

const valueProps = [
  {
    eyebrow: 'Thoughtful Packaging',
    title: 'Refillable formats that still look giftable on a countertop',
    text: 'The primary vessel is designed as a keeper object, while replenishment arrives in low-waste refill packs that feel premium in hand.',
    points: ['Refill-first merchandising', 'Shelf-worthy hero packaging', 'Designed for repeat purchase'],
  },
  {
    eyebrow: 'Ingredient Clarity',
    title: 'Simple formulas and sourcing that customers can actually understand',
    text: 'Instead of hiding behind vague sustainability claims, the page leads with transparent materials, supply chain notes, and clear ingredient explanations.',
    points: ['Ingredient-level visibility', 'Origin and mill notes', 'No overdesigned greenwashing'],
  },
  {
    eyebrow: 'Routine Appeal',
    title: 'A beautiful ritual customers want to keep buying into',
    text: 'The design positions the brand around everyday use, tactile pleasure, and small meaningful upgrades that turn one purchase into a longer relationship.',
    points: ['High repeat-purchase potential', 'Lifestyle-led art direction', 'Subscription-ready product story'],
  },
]

const refillStory = [
  {
    title: 'Choose the starter set',
    text: 'Customers begin with a sculpted aluminum or glass vessel that is built to stay in rotation rather than head to the bin after a month.',
  },
  {
    title: 'Refill with lighter packs',
    text: 'Refill pouches cut shipping weight and material use while still feeling considered enough to unbox without apology.',
  },
  {
    title: 'Return or recycle components',
    text: 'Components are paired with simple end-of-life guidance so the brand promise remains clear after the purchase is complete.',
  },
]

const materialPanels = [
  {
    eyebrow: 'Primary Vessel',
    title: 'Brushed aluminum canister',
    text: 'A durable hero package that resists wear, photographs beautifully, and signals permanence in a category full of throwaway plastics.',
    points: ['Powder-coated finish', 'Easy-clean wide mouth', 'Designed for countertop display'],
  },
  {
    eyebrow: 'Refill Format',
    title: 'Mono-material refill pouch',
    text: 'A lighter package chosen to reduce waste and shipping bulk while still preserving freshness and tactile quality.',
    points: ['Flat-pack efficient shipping', 'Lower material intensity', 'Simple reseal function'],
    accent: true,
  },
  {
    eyebrow: 'Secondary Details',
    title: 'Recycled paper, soy inks, and QR-linked care notes',
    text: 'Support materials stay minimal and useful, turning inserts and labels into educational tools instead of disposable clutter.',
    points: ['FSC-certified paper stock', 'Small-batch print runs', 'Digital care and sourcing guides'],
  },
]

const impactNotes = [
  {
    eyebrow: 'Traceability',
    title: 'Show the makers, mills, and materials behind every product line',
    text: 'Customers increasingly expect proof, not just positioning. This section gives the brand a direct way to show where materials come from and why those choices were made.',
    points: ['Origin map by component', 'Supplier standards snapshot', 'Batch-level product notes'],
  },
  {
    eyebrow: 'Measured Impact',
    title: 'Report progress in plain language rather than vague promises',
    text: 'Simple metrics, annual goals, and honest tradeoffs make the sustainability story feel mature, credible, and easier to trust.',
    points: ['Packaging reduction targets', 'Freight and fulfillment updates', 'What still needs improvement'],
  },
  {
    eyebrow: 'Customer Participation',
    title: 'Turn refills and returns into a shared habit, not a lecture',
    text: 'Practical guidance, reminders, and incentives help customers participate in the system without creating friction at checkout.',
    points: ['Refill reminders', 'Container care tips', 'Return-credit options'],
  },
]

const testimonials = [
  {
    quote:
      'It feels rare to buy a sustainable product that still looks this elevated in my kitchen. The refill system is easy and the brand story feels honest.',
    author: 'Clara M.',
    role: 'Subscriber since launch',
  },
  {
    quote:
      'Most eco brands either feel too rustic or too preachy. This one feels beautifully designed first, then backs it up with real transparency.',
    author: 'Nina P.',
    role: 'Interior stylist and repeat customer',
  },
  {
    quote:
      'The product page answered every question I had about packaging, sourcing, and subscriptions without slowing me down. That made checkout easy.',
    author: 'Elias T.',
    role: 'First-order customer',
  },
]

const bundles = [
  {
    eyebrow: 'Starter',
    title: 'Countertop Set',
    price: '$54',
    text: 'The entry bundle with one hero vessel and one refill, designed to introduce the system in a giftable format.',
    points: [
      'Reusable aluminum canister',
      'One full-size refill pack',
      'Care and refill guide',
      'Ideal first purchase',
    ],
  },
  {
    eyebrow: 'Most Popular',
    title: 'Refill Ritual Duo',
    price: '$88',
    text: 'A better-value option for customers ready to commit to the habit and reduce shipping frequency at the same time.',
    points: [
      'Hero vessel + two refill packs',
      'Save 14% versus singles',
      'Free carbon-aware shipping tier',
      'Best for repeat households',
    ],
  },
  {
    eyebrow: 'Subscription',
    title: 'Quarterly Refill Club',
    price: '$32/mo',
    text: 'A flexible subscription built for retention, with predictable replenishment and member-only seasonal product drops.',
    points: [
      'Refill shipment every 12 weeks',
      'Pause, skip, or swap anytime',
      'Subscriber-only limited editions',
      'Lower per-unit price',
    ],
  },
]

const faqs = [
  {
    question: 'What makes this landing page effective for sustainable brands?',
    answer:
      'It leads with design quality first, then backs that up with visible materials, refill logic, and transparent impact language that helps customers trust the brand without feeling overwhelmed.',
  },
  {
    question: 'Can this work for products beyond home goods?',
    answer:
      'Yes. The structure also fits refillable beauty, personal care, pantry staples, cleaning concentrates, or any DTC concept with a materials-led story.',
  },
  {
    question: 'How do subscriptions fit into the sustainability message?',
    answer:
      'Subscriptions reinforce the refill habit, reduce one-off packaging waste, and create a simpler replenishment rhythm that benefits both customer retention and operational planning.',
  },
  {
    question: 'What if the brand is still improving its impact data?',
    answer:
      'That is fine. This concept is built to communicate progress honestly, including tradeoffs and next steps, which often feels more credible than claiming perfection too early.',
  },
  {
    question: 'Will the design stay responsive with rich storytelling sections?',
    answer:
      'Yes. The layout uses the shared landing primitives and lightweight local styles so the page stays clean, readable, and conversion-friendly across desktop and mobile.',
  },
]

function SustainableDtcBrandPage() {
  return (
    <>
      <style>{`
        .sustainable-dtc-page .page-eyebrow,
        .sustainable-dtc-page .section-eyebrow,
        .sustainable-dtc-page .card-eyebrow {
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 0.74rem;
          color: rgba(76, 87, 67, 0.76);
        }

        .sustainable-dtc-page .hero-panel {
          align-content: center;
        }

        .sustainable-dtc-page .hero-spotlight {
          grid-template-columns: 1fr;
        }

        .sustainable-dtc-page .hero-highlight,
        .sustainable-dtc-page .card,
        .sustainable-dtc-page .step-card,
        .sustainable-dtc-page .showcase-panel,
        .sustainable-dtc-page .quote-card,
        .sustainable-dtc-page .pricing-card,
        .sustainable-dtc-page .faq-card {
          border-radius: 1.4rem;
          border: 1px solid rgba(90, 101, 80, 0.12);
          background: rgba(252, 250, 245, 0.74);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.52),
            0 18px 40px rgba(37, 43, 36, 0.05);
        }

        .sustainable-dtc-page .hero-highlight {
          position: relative;
          overflow: hidden;
        }

        .sustainable-dtc-page .hero-highlight::after {
          content: '';
          position: absolute;
          inset: auto -8% -24% 34%;
          height: 170px;
          background: radial-gradient(circle, rgba(140, 156, 120, 0.3), transparent 60%);
          pointer-events: none;
        }

        .sustainable-dtc-page .materials-overview {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .sustainable-dtc-page .materials-overview__lead,
        .sustainable-dtc-page .materials-overview__object {
          border-radius: 1.5rem;
          padding: 1.3rem;
          border: 1px solid rgba(90, 101, 80, 0.12);
        }

        .sustainable-dtc-page .materials-overview__lead {
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.62), transparent 48%),
            rgba(248, 245, 237, 0.86);
        }

        .sustainable-dtc-page .materials-overview__object {
          display: grid;
          gap: 1rem;
          background:
            linear-gradient(180deg, rgba(237, 233, 221, 0.95), rgba(226, 220, 205, 0.92));
        }

        .sustainable-dtc-page .vessel-visual {
          min-height: 15rem;
          border-radius: 1.35rem;
          display: grid;
          place-items: center;
          text-align: center;
          color: #f7f4ed;
          background:
            radial-gradient(circle at 28% 18%, rgba(255,255,255,0.78), transparent 24%),
            linear-gradient(160deg, #7a866d, #40493c 70%);
          box-shadow: inset 0 -18px 32px rgba(0, 0, 0, 0.12);
        }

        .sustainable-dtc-page .vessel-visual h3 {
          margin: 0.35rem 0 0.2rem;
          font-size: 1.7rem;
        }

        .sustainable-dtc-page .spec-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 0.75rem;
        }

        .sustainable-dtc-page .spec-card {
          padding: 0.95rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(90, 101, 80, 0.1);
        }

        .sustainable-dtc-page .spec-card strong {
          display: block;
          font-size: 1.05rem;
          margin-top: 0.35rem;
        }

        .sustainable-dtc-page .impact-bar {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .sustainable-dtc-page .impact-bar article {
          padding-top: 1rem;
          border-top: 1px solid rgba(90, 101, 80, 0.18);
        }

        .sustainable-dtc-page .impact-bar strong {
          display: block;
          font-size: 1.95rem;
          line-height: 1;
          margin-bottom: 0.45rem;
          font-family: var(--page-heading-font, serif);
        }

        .sustainable-dtc-page .price-tag {
          color: #4e5a47;
          font-family: var(--page-heading-font, serif);
          font-weight: 700;
        }

        .sustainable-dtc-page .quote-card p {
          font-size: 1.03rem;
        }

        @media (max-width: 900px) {
          .sustainable-dtc-page .materials-overview,
          .sustainable-dtc-page .impact-bar {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="sustainable-dtc-page">
        <PageFrame
          theme={theme}
          eyebrow="Sustainable DTC Product Brand"
          title="A materials-first landing page for refillable products that feel elevated, useful, and easy to keep buying."
          description="A calm eco-premium concept for refillable products and repeatable rituals."
          primaryCta={{ label: 'Shop starter bundles', href: '#bundles' }}
          secondaryCta={{ label: 'Explore the refill system', href: '#refill-system' }}
          heroVisual={{
            content: <SustainableVisual />,
            badges: ['Refill system', 'Material proof', 'Eco premium'],
          }}
          metrics={metrics}
          spotlight={spotlight}
        >
          <Section
            eyebrow="Value Proposition"
            title="Designed to sell the object, the refill habit, and the reason behind both."
            description="The strongest sustainable product pages do not rely on guilt or vague claims. They show customers why the product looks beautiful, works well, and makes better material choices over time."
          >
            <div className="materials-overview">
              <article className="materials-overview__lead">
                <div className="section-eyebrow">Brand Point Of View</div>
                <h3 style={{ margin: '0.45rem 0 0.65rem', fontSize: '1.55rem' }}>
                  Eco-conscious design becomes easier to sell when the product still feels like an upgrade.
                </h3>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  This page structure fits refillable home goods, personal care, pantry products, or low-waste lifestyle brands. The messaging stays grounded in materials, product quality, and transparent decision-making so the sustainability story feels mature.
                </p>
                <div className="spec-grid">
                  <div className="spec-card">
                    <div className="card-eyebrow">Finish</div>
                    <strong>Olive + oat</strong>
                  </div>
                  <div className="spec-card">
                    <div className="card-eyebrow">Mood</div>
                    <strong>Quiet luxury</strong>
                  </div>
                  <div className="spec-card">
                    <div className="card-eyebrow">Focus</div>
                    <strong>Refill retention</strong>
                  </div>
                </div>
              </article>

              <article className="materials-overview__object">
                <div className="vessel-visual">
                  <div>
                    <div
                      className="card-eyebrow"
                      style={{ color: 'rgba(247, 244, 237, 0.72)' }}
                    >
                      Signature Object
                    </div>
                    <h3>Everettle Vessel</h3>
                    <p style={{ margin: 0, color: 'rgba(247, 244, 237, 0.82)' }}>
                      Refillable home ritual system
                    </p>
                  </div>
                </div>
                <div className="spec-grid">
                  <div className="spec-card">
                    <div className="card-eyebrow">Material</div>
                    <strong>Brushed aluminum</strong>
                  </div>
                  <div className="spec-card">
                    <div className="card-eyebrow">Refill</div>
                    <strong>Lightweight pouch</strong>
                  </div>
                </div>
              </article>
            </div>

            <CardGrid items={valueProps} />
          </Section>

          <div id="refill-system">
            <Section
              eyebrow="Refill System"
              title="A three-step product story that makes repeat purchase feel natural."
              description="This section turns the mechanics of sustainability into a clean customer journey. It helps shoppers understand the system quickly while giving the brand a stronger subscription foundation."
            >
              <StepsGrid items={refillStory} />
            </Section>
          </div>

          <Section
            eyebrow="Materials Story"
            title="Show every component with the same care as the hero product."
            description="Thoughtful sustainable brands win when they explain materials clearly and visually. These panels help the brand feel honest, tactile, and distinct."
          >
            <ShowcaseGrid items={materialPanels} />
          </Section>

          <Section
            eyebrow="Impact & Transparency"
            title="Make the sustainability story measurable, legible, and believable."
            description="Customers respond well to clear reporting, specific sourcing information, and brands that are willing to explain what is improving next."
          >
            <ShowcaseGrid items={impactNotes} />

            <div className="impact-bar">
              <article>
                <strong><CountUpText value="48%" /></strong>
                <p className="card-text">
                  lower outbound package volume after customers move from starter sets to refill shipments
                </p>
              </article>
              <article>
                <strong><CountUpText value="3x" /></strong>
                <p className="card-text">
                  average vessel reuse within the first subscription year across core products
                </p>
              </article>
              <article>
                <strong><CountUpText value="1 page" /></strong>
                <p className="card-text">
                  simple public impact summary that keeps the brand transparent without overcomplicating the story
                </p>
              </article>
            </div>
          </Section>

          <Section
            eyebrow="Customer Voice"
            title="Social proof for shoppers who care about both design and values."
            description="These testimonials are written to reinforce the page’s strongest conversion themes: good taste, easy refills, and sustainability claims that feel grounded."
          >
            <QuoteGrid items={testimonials} />
          </Section>

          <div id="bundles">
            <Section
              eyebrow="Bundles & Subscription"
              title="Simple pricing that supports both first orders and repeat revenue."
              description="A good DTC landing page gives customers a low-friction starting point, a better-value middle option, and a subscription path that strengthens lifetime value."
            >
              <PricingGrid items={bundles} />
            </Section>
          </div>

          <Section
            eyebrow="FAQ"
            title="Answer sustainability questions before they become checkout friction."
            description="This keeps the brand transparent and helpful while reassuring visitors that the refill system is easy to understand and even easier to keep using."
          >
            <FaqGrid items={faqs} />
          </Section>

          <CtaBanner
            title="Launch a sustainable DTC page that feels calm, premium, and conversion-ready."
            text="Use this concept for refillable beauty, home care, pantry products, or any brand that wants to sell better materials without sacrificing visual appeal. The structure is clean, responsive, and strong enough to turn a thoughtful story into repeat business."
            primaryCta={{ label: 'Use this brand concept', href: '#bundles' }}
            secondaryCta={{ label: 'Review the refill system', href: '#refill-system' }}
          />
        </PageFrame>
      </div>
    </>
  )
}

export default SustainableDtcBrandPage
