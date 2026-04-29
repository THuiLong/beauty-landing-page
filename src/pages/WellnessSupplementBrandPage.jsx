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
import { WellnessVisual } from '../components/landing/HeroVisuals.jsx'

const theme = {
  'page-bg': '#f3efe3',
  'page-bg-secondary': '#e5ddc8',
  'page-text': '#223229',
  'page-muted': 'rgba(34, 50, 41, 0.72)',
  'page-orb-1': 'rgba(177, 200, 154, 0.32)',
  'page-orb-2': 'rgba(217, 191, 146, 0.22)',
  'page-pattern':
    'repeating-linear-gradient(115deg, rgba(255,255,255,0.08) 0 18px, transparent 18px 42px)',
  'hero-surface': 'rgba(251, 247, 237, 0.76)',
  'hero-border': 'rgba(74, 101, 77, 0.16)',
  'highlight-surface': '#304739',
  'highlight-text': '#f8f4ea',
  accent: '#507055',
  'accent-surface': '#2e4638',
  'accent-text': '#f8f4ea',
  'cta-gradient': 'linear-gradient(135deg, #24382d, #4d6c52 52%, #7f9d6e)',
  'cta-text': '#f8f4ea',
}

const metrics = [
  { value: '12', label: 'botanicals, minerals, and skin-supportive actives' },
  { value: '30', label: 'daily servings in each routine jar' },
  { value: '4.9/5', label: 'average rating from first-month subscribers' },
]

const spotlight = [
  {
    title: 'Morning clarity without the spike',
    text: 'Adaptogens, magnesium, and trace minerals work together for calm energy you can actually sustain.',
  },
  {
    title: 'Ingredient list worth reading',
    text: 'No gums, no artificial sweeteners, no filler greens blend hiding behind a marketing story.',
  },
  {
    title: 'Built for the modern ritual',
    text: 'One scoop in water, milk, or a smoothie. Designed to layer into busy mornings without becoming another task.',
  },
]

const benefits = [
  {
    eyebrow: 'Benefit 01',
    title: 'Steady energy that feels grounded',
    text: 'Cordyceps, magnesium glycinate, and mineral-rich greens support focus and stamina without a jittery afternoon rebound.',
  },
  {
    eyebrow: 'Benefit 02',
    title: 'Skin and glow support from within',
    text: 'Acerola cherry, tremella mushroom, and phytoceramides help support hydration, resilience, and a smoother daily baseline.',
  },
  {
    eyebrow: 'Benefit 03',
    title: 'Gentler digestion and less bloat',
    text: 'Prebiotic fiber, ginger root, and peppermint help the formula sit cleanly in your routine, even on rushed mornings.',
  },
  {
    eyebrow: 'Benefit 04',
    title: 'A calmer nervous system',
    text: 'Ashwagandha and L-theanine were chosen to make the product feel balancing, not sleepy, so the routine stays realistic.',
  },
]

const ingredientStory = [
  {
    eyebrow: 'Adaptogen Core',
    title: 'KSM-66 ashwagandha',
    text: 'Included for stress resilience and a more even response to full, modern schedules.',
    points: ['Root-only extract', 'Clinically studied format', 'Pairs well with magnesium'],
  },
  {
    eyebrow: 'Mineral Support',
    title: 'Magnesium glycinate',
    text: 'A highly tolerated mineral form selected for calm muscle support, better recovery, and daily ease.',
    points: ['Gentle on the stomach', 'Supports sleep quality', 'Useful for active routines'],
  },
  {
    eyebrow: 'Hydration + Glow',
    title: 'Tremella + phytoceramides',
    text: 'A skin-focused duo that helps the formula speak to beauty-minded customers without sounding superficial.',
    points: ['Hydration support', 'Barrier-friendly story', 'Texture and glow positioning'],
  },
  {
    eyebrow: 'Bright Finish',
    title: 'Acerola, ginger, and pear vanilla',
    text: 'The bright top note that keeps the ritual delicious enough to repeat and clean enough to trust.',
    points: ['Vitamin C support', 'Fresh, warm flavor profile', 'No sugary aftertaste'],
    accent: true,
  },
]

const routineSteps = [
  {
    title: 'Scoop',
    text: 'Add one rounded scoop to 250 ml of cold water, oat milk, or a smoothie base.',
  },
  {
    title: 'Mix',
    text: 'Shake or froth for ten seconds. The formula is designed to dissolve quickly with a soft creamy finish.',
  },
  {
    title: 'Layer',
    text: 'Pair with breakfast, a morning walk, or your desk setup so the habit attaches to something real.',
  },
  {
    title: 'Notice',
    text: 'Most customers report easier mornings first, then steadier digestion and skin improvements over the next few weeks.',
  },
]

const quotes = [
  {
    quote:
      'It feels like the first supplement I have actually wanted to keep using. Calm energy, zero crash, and my skin stopped looking tired by week three.',
    author: 'Hana R.',
    role: 'Creative director and monthly subscriber',
  },
  {
    quote:
      'I replaced my second coffee with Verdant Ritual and the difference is how even everything feels. Less wired, more clear, and my stomach is happier.',
    author: 'Melissa T.',
    role: 'Founder, studio owner',
  },
  {
    quote:
      'The product page hooked me with ingredients, but the taste made it stick. It feels premium without being precious about wellness.',
    author: 'Jules C.',
    role: 'Early access customer',
  },
]

const bundles = [
  {
    eyebrow: 'Starter',
    title: '30-Day Reset',
    price: '$38',
    text: 'A single jar for first-time customers who want a clean morning ritual before committing.',
    points: [
      '30 servings',
      'Vanilla pear flavor',
      'Quick-start ritual guide',
      'Ships in 48 hours',
    ],
  },
  {
    eyebrow: 'Most Popular',
    title: 'Daily Glow Duo',
    price: '$72',
    text: 'Two jars with better value for customers building consistency or sharing one with a partner.',
    points: [
      '60 total servings',
      'Save 12% versus single jars',
      'Glass canister + refill pouch',
      'Free shipping included',
    ],
  },
  {
    eyebrow: 'Subscriber Favorite',
    title: '90-Day Ritual Plan',
    price: '$102',
    text: 'The best bundle for visible habit-building, repeat revenue, and stronger customer retention.',
    points: [
      'Three-jar supply',
      'Save 18% + free shipping',
      'Subscriber-only seasonal drops',
      'Flexible skip or swap anytime',
    ],
  },
]

const faqs = [
  {
    question: 'When should I take it?',
    answer:
      'Most customers take Verdant Ritual in the morning with breakfast or in place of a second coffee. It can also work as a calm afternoon reset.',
  },
  {
    question: 'Is it a greens powder or a beauty supplement?',
    answer:
      'It is intentionally both: a daily wellness blend with adaptogens, minerals, digestion support, and skin-forward ingredients in one product story.',
  },
  {
    question: 'Does it contain caffeine?',
    answer:
      'No added caffeine. The formula is designed to support energy through adaptogens and minerals rather than a stimulant-heavy approach.',
  },
  {
    question: 'Who is it best for?',
    answer:
      'Busy customers who want an easy ritual for steady focus, calmer stress response, gentler digestion, and a more rested, hydrated look.',
  },
  {
    question: 'Can I subscribe and pause later?',
    answer:
      'Yes. Subscribers can skip, pause, or update their shipment schedule at any time, which keeps the offer friendly for first-time buyers.',
  },
]

const productSpecs = [
  'Vegan adaptogen base',
  'No artificial sweeteners',
  'Third-party tested',
  'Compostable refill pouch option',
]

const expectationTimeline = [
  {
    label: 'Week 1',
    title: 'Morning rhythm',
    text: 'Customers usually notice the easiest win first: smoother mornings and less need to chase another coffee.',
  },
  {
    label: 'Week 2',
    title: 'Digestive ease',
    text: 'As the routine becomes consistent, bloating support and calmer digestion tend to become more noticeable.',
  },
  {
    label: 'Week 4+',
    title: 'Glow baseline',
    text: 'Longer use is where the skin, hydration, and recovery story becomes stronger and easier to talk about.',
  },
]

const productCardStyle = {
  display: 'grid',
  gap: '1rem',
  padding: '1.3rem',
  borderRadius: '1.5rem',
  background:
    'linear-gradient(180deg, rgba(255, 251, 245, 0.96), rgba(236, 229, 211, 0.92))',
  border: '1px solid rgba(74, 101, 77, 0.14)',
  boxShadow: '0 16px 32px rgba(34, 50, 41, 0.08)',
}

const productJarStyle = {
  minHeight: '15rem',
  borderRadius: '1.4rem',
  background:
    'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.88), transparent 28%), linear-gradient(160deg, #758d67, #314736 70%)',
  display: 'grid',
  placeItems: 'center',
  padding: '1rem',
  color: '#f8f4ea',
  textAlign: 'center',
}

const infoCardStyle = {
  padding: '1.1rem',
  borderRadius: '1.3rem',
  background: 'rgba(255, 255, 255, 0.72)',
  border: '1px solid rgba(74, 101, 77, 0.12)',
}

function WellnessSupplementBrandPage() {
  return (
    <PageFrame
      theme={theme}
      eyebrow="Editorial Wellness Brand"
      title="A daily supplement ritual that supports calm energy, clearer mornings, and skin-first glow."
      description="A premium wellness blend with calm energy, glow support, and clean ritual appeal."
      primaryCta={{ label: 'Shop the ritual', href: '#bundles' }}
      secondaryCta={{ label: 'Read the ingredient story', href: '#ingredients' }}
      heroVisual={{
        content: <WellnessVisual />,
        badges: ['Daily ritual', 'Glow blend', 'Refill ready'],
      }}
      metrics={metrics}
      spotlight={spotlight}
    >
      <Section
        eyebrow="Product Benefits"
        title="Built like a beautiful product page, not a generic supplement template."
        description="This section leads with the product, then quickly explains the real outcomes customers care about. The tone stays clean, modern, and benefit-rich without feeling overclaimed."
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem',
          }}
        >
          <article style={productCardStyle}>
            <div style={productJarStyle}>
              <div>
                <div className="card-eyebrow" style={{ color: 'rgba(248, 244, 234, 0.78)' }}>
                  Signature Blend
                </div>
                <h3 style={{ margin: '0.4rem 0 0.2rem', fontSize: '1.7rem' }}>
                  Verdant Ritual
                </h3>
                <p style={{ margin: 0, color: 'rgba(248, 244, 234, 0.82)' }}>
                  Vanilla pear wellness powder
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '0.75rem',
              }}
            >
              <div style={infoCardStyle}>
                <div className="card-eyebrow">Texture</div>
                <strong style={{ display: 'block', fontSize: '1.15rem', marginTop: '0.35rem' }}>
                  Smooth + creamy
                </strong>
              </div>
              <div style={infoCardStyle}>
                <div className="card-eyebrow">Flavor</div>
                <strong style={{ display: 'block', fontSize: '1.15rem', marginTop: '0.35rem' }}>
                  Pear, vanilla, ginger
                </strong>
              </div>
            </div>
          </article>

          <article style={productCardStyle}>
            <div>
              <div className="section-eyebrow">Why it converts</div>
              <h3 style={{ margin: '0.45rem 0 0.6rem', fontSize: '1.45rem' }}>
                The page speaks to routine, results, and reassurance in the first scroll.
              </h3>
              <p className="card-text" style={{ margin: 0 }}>
                Great wellness landing pages do not only sell ingredients. They sell a
                feeling of ease, consistency, and trust. This concept is written to help a
                customer picture the ritual inside a real morning.
              </p>
            </div>

            <ul className="check-list" style={{ marginTop: 0 }}>
              {productSpecs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div style={infoCardStyle}>
              <div className="card-eyebrow">Positioning</div>
              <p className="card-text" style={{ margin: '0.45rem 0 0' }}>
                Premium wellness, beauty-adjacent, and easy to merchandise as a hero
                product with bundles, subscriptions, and seasonal drops.
              </p>
            </div>
          </article>
        </div>

        <CardGrid items={benefits} />
      </Section>

      <div id="ingredients">
        <Section
          eyebrow="Ingredient Story"
          title="Every ingredient earns its place in the formula and in the copy."
          description="Customers in this category respond to clean sourcing, recognizable actives, and a clear reason each ingredient belongs. These panels give the brand an editorial, informed tone."
        >
          <ShowcaseGrid items={ingredientStory} />
        </Section>
      </div>

      <Section
        eyebrow="Routine"
        title="A four-step ritual that feels realistic enough to keep."
        description="The best product pages make the habit feel easy. This structure shows exactly how the supplement fits into a customer morning, then sets expectations without overpromising."
      >
        <StepsGrid items={routineSteps} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          {expectationTimeline.map((item) => (
            <article key={item.label} style={infoCardStyle}>
              <div className="card-eyebrow">{item.label}</div>
              <h3 style={{ margin: '0.4rem 0 0.45rem', fontSize: '1.2rem' }}>{item.title}</h3>
              <p className="card-text" style={{ margin: 0 }}>
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Customer Love"
        title="Social proof that sounds like real routine change."
        description="These testimonials focus on repeatable benefits: steadier mornings, easier digestion, and visible glow. That keeps the page persuasive while still feeling grounded."
      >
        <QuoteGrid items={quotes} />
      </Section>

      <div id="bundles">
        <Section
          eyebrow="Starter Bundles"
          title="Simple bundles that make the first purchase feel easy."
          description="The pricing structure creates a clear entry point, a best-seller middle option, and a stronger subscription path for better lifetime value."
        >
          <PricingGrid items={bundles} />
        </Section>
      </div>

      <Section
        eyebrow="FAQ"
        title="Answer the buying questions before they slow down the checkout."
        description="A calm, transparent FAQ helps this category convert because customers want reassurance on routine, effects, and flexibility."
      >
        <FaqGrid items={faqs} />
      </Section>

      <CtaBanner
        title="Launch a wellness product page that feels equal parts trust, beauty, and conversion."
        text="Use this concept for supplements, functional powders, collagen blends, adaptogen products, or ingestible beauty brands. The structure is simple to shop, easy to scale, and strong enough to sell as a premium client template."
        primaryCta={{ label: 'Start with this concept', href: '#bundles' }}
        secondaryCta={{ label: 'Review ingredients', href: '#ingredients' }}
      />
    </PageFrame>
  )
}

export default WellnessSupplementBrandPage
