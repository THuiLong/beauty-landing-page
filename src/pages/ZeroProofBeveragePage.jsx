import {
  CardGrid,
  CtaBanner,
  FaqGrid,
  PageFrame,
  PricingGrid,
  QuoteGrid,
  Section,
  ShowcaseGrid,
  ScrollReveal,
  StepsGrid,
} from '../components/landing/Primitives.jsx'
import { ZeroProofVisual } from '../components/landing/HeroVisuals.jsx'

const theme = {
  accent: '#ff6f3c',
  'accent-surface':
    'linear-gradient(180deg, rgba(255, 111, 60, 0.22), rgba(93, 18, 52, 0.94))',
  'accent-text': '#fff8f3',
  'cta-gradient': 'linear-gradient(135deg, #ff8d3b 0%, #ff4f76 50%, #6d2bf0 100%)',
  'cta-text': '#fff8f3',
  'hero-border': 'rgba(255, 247, 240, 0.16)',
  'hero-surface':
    'linear-gradient(180deg, rgba(255, 244, 235, 0.1), rgba(255, 255, 255, 0.03))',
  'highlight-surface':
    'linear-gradient(180deg, rgba(255, 169, 80, 0.2), rgba(255, 79, 118, 0.16))',
  'highlight-text': '#fff8f3',
  'page-bg': '#1d1234',
  'page-bg-secondary': '#2c1630',
  'page-muted': 'rgba(255, 241, 232, 0.76)',
  'page-orb-1': 'rgba(255, 144, 69, 0.26)',
  'page-orb-2': 'rgba(173, 88, 255, 0.18)',
  'page-pattern':
    'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
  'page-text': '#fff8f3',
}

const metrics = [
  { value: '0g', label: 'added sugar across the core range' },
  { value: '3', label: 'functional blends for mood, focus, and after-hours ease' },
  { value: '4.8/5', label: 'average rating from first-month variety pack buyers' },
]

const spotlight = [
  {
    title: 'Social energy',
    text: 'A grown-up alternative to alcohol that still feels celebratory, styled, and worth posting.',
  },
  {
    title: 'Function-first flavor',
    text: 'Botanicals, nootropics, and adaptogens layered into crisp citrus and berry-forward profiles.',
  },
  {
    title: 'Built for modern shelves',
    text: 'Strong hero product storytelling, occasion-based merchandising, and easy bundle upsells.',
  },
]

const lineup = [
  {
    eyebrow: 'Citrus Lift',
    title: 'Yuzu Spark',
    text: 'A bright yuzu, white peach, and green tea-inspired blend for upbeat afternoons and clean social sipping.',
    points: ['L-theanine + lemon balm', 'Juicy citrus finish', 'Made for sunny brunch energy'],
  },
  {
    eyebrow: 'Berry Mood',
    title: 'Berry Bloom',
    text: 'Blackberry, tart cherry, and hibiscus create a richer sip for dinner parties, date nights, and slower evenings.',
    points: ['Schisandra + tart cherry', 'Berry-led aroma', 'Soft, layered finish'],
  },
  {
    eyebrow: 'Golden Reset',
    title: 'Citrus Ember',
    text: 'Blood orange, ginger, and bitters-inspired spice bring a sharper, more grown-up ritual to the can.',
    points: ['Ginger + turmeric', 'Bitters-style complexity', 'Excellent over ice with a citrus wheel'],
  },
  {
    eyebrow: 'Nightcap Alternative',
    title: 'Plum Velvet',
    text: 'Dark plum, blackcurrant, and warming botanicals give the range a moody signature for post-work wind-downs.',
    points: ['Magnesium + holy basil', 'Silky berry depth', 'Designed for evening calm'],
  },
]

const ingredientStory = [
  {
    eyebrow: 'Mood Balance',
    title: 'L-theanine + lemon balm',
    text: 'A calm-focus duo that helps the drink feel socially easy without flattening the energy of the moment.',
    points: ['Smooth cognitive support', 'Gentle, non-sedating effect', 'Easy to message on-pack'],
  },
  {
    eyebrow: 'Adaptive Energy',
    title: 'Schisandra + green tea notes',
    text: 'Chosen for brightness and resilience, these ingredients give the range a lift story without leaning on alcohol mimicry.',
    points: ['Sharper tasting profile', 'Better-for-you positioning', 'Pairs well with citrus flavors'],
  },
  {
    eyebrow: 'Recovery Ritual',
    title: 'Magnesium + tart cherry',
    text: 'These actives make the evening cans feel restorative, not sleepy, which keeps the use case broad and modern.',
    points: ['Relaxed wind-down signal', 'Premium wellness crossover', 'Supports repeat evening habits'],
  },
  {
    eyebrow: 'Botanical Depth',
    title: 'Ginger, hibiscus, and aromatic bitters notes',
    text: 'The flavor architecture is built to feel layered, adult, and cocktail-adjacent while staying refreshing on first sip.',
    points: ['Complex palate', 'Easy mocktail serve', 'High visual merchandising value'],
    accent: true,
  },
]

const howToDrink = [
  {
    title: 'Chill it down',
    text: 'Serve straight from the fridge when you want a crisp can-and-go ritual, especially for brunch, co-working, or commuting home.',
  },
  {
    title: 'Pour with garnish',
    text: 'For a premium at-home serve, pour over pebble ice and finish with citrus peel, berries, or a sprig of mint.',
  },
  {
    title: 'Match the mood',
    text: 'Choose lighter citrus flavors for daytime hangs and deeper berry blends when you want the drink to feel more evening-coded.',
  },
  {
    title: 'Build the ritual',
    text: 'Stock a mixed pack so the customer can switch between focus, social, and wind-down occasions through the week.',
  },
]

const testimonials = [
  {
    quote:
      'It feels like a brand I can bring to a dinner table and to a design studio in the same week. The flavor is fun, but the grown-up finish is what keeps me buying it.',
    author: 'Sofia N.',
    role: 'Creative strategist and repeat bundle customer',
  },
  {
    quote:
      'Berry Bloom replaced my default wine night without feeling like a compromise. It still feels like a treat, just lighter and more current.',
    author: 'Rae L.',
    role: 'Hospitality consultant',
  },
  {
    quote:
      'The variety pack sold me because every can had a clear vibe. It is easy to choose one based on the mood I am in instead of guessing.',
    author: 'Jamie T.',
    role: 'Founding member subscriber',
  },
]

const bundles = [
  {
    eyebrow: 'Sampler',
    title: 'Discovery 8-Pack',
    price: '$24',
    text: 'Best for first-time customers who want to taste the full range before choosing a favorite.',
    points: [
      '2 cans of each signature flavor',
      'Serve guide with garnish ideas',
      'Fast shipping',
      'Perfect gifting entry point',
    ],
  },
  {
    eyebrow: 'Most Popular',
    title: 'Weekend Variety 16-Pack',
    price: '$42',
    text: 'A mixed case built for hosting, Friday resets, and customers who want different moods on hand.',
    points: [
      '4 cans of each flavor',
      'Save 12% versus singles',
      'Free shipping included',
      'Best blend of trial and repeat value',
    ],
  },
  {
    eyebrow: 'Subscriber Favorite',
    title: 'Studio Stock 24-Pack',
    price: '$58',
    text: 'For regular drinkers who want a fridge-ready ritual and the best price-per-can in the lineup.',
    points: [
      'Choose mixed or flavor-specific',
      'Save 18% on subscription',
      'Monthly drop access',
      'Pause, swap, or skip anytime',
    ],
  },
]

const faqs = [
  {
    question: 'Is this trying to taste exactly like alcohol?',
    answer:
      'No. The range is inspired by cocktail culture, but it is built to taste fresh, layered, and modern in its own right rather than copying spirits one-for-one.',
  },
  {
    question: 'When do people usually drink it?',
    answer:
      'Customers most often reach for it at brunch, after work, during dinners with friends, and anytime they want a ritual drink without alcohol.',
  },
  {
    question: 'Does it contain caffeine?',
    answer:
      'The daytime citrus flavors may include tea-inspired notes and focus-supporting ingredients, but the range avoids the heavy energy-drink feel and stays easy to sip.',
  },
  {
    question: 'How should I serve it for guests?',
    answer:
      'Cold from the can works well, but pouring over ice with a simple garnish instantly upgrades the experience for hosting and content-worthy moments.',
  },
  {
    question: 'Can I subscribe to one flavor only?',
    answer:
      'Yes. Customers can choose a mixed case or lock in a single favorite, then swap flavors seasonally as new drops launch.',
  },
]

const flavorSignals = [
  'Alcohol-free',
  'Zero added sugar',
  'Function-forward botanicals',
  'Made for hosting and gifting',
  'Bright citrus and berry palette',
]

const productCards = [
  { name: 'Yuzu Spark', tone: 'Citrus / peach / lift', gradient: 'linear-gradient(180deg, #ffcf67, #ff7f32)' },
  { name: 'Berry Bloom', tone: 'Blackberry / hibiscus / mood', gradient: 'linear-gradient(180deg, #ff7db5, #8d2fd8)' },
  { name: 'Citrus Ember', tone: 'Blood orange / ginger / reset', gradient: 'linear-gradient(180deg, #ff9b4b, #ff4c61)' },
  { name: 'Plum Velvet', tone: 'Plum / currant / unwind', gradient: 'linear-gradient(180deg, #7d4bff, #401e70)' },
]

const occasionCards = [
  {
    label: 'Brunch table',
    title: 'Bright, social, easygoing',
    text: 'Use the citrus flavors as a sparkling upgrade for daytime hangs, friend catch-ups, and sunny weekend menus.',
  },
  {
    label: 'Dinner party',
    title: 'Layered enough to pour in a wine glass',
    text: 'The berry and plum blends bring more depth, making them feel elevated beside food, candles, and slower conversation.',
  },
  {
    label: 'Creative work block',
    title: 'A polished desk drink',
    text: 'The design and ingredient story make it feel more current than soda and more intentional than another coffee.',
  },
]

const pageStyles = `
  .zero-proof-page-shell .landing-page {
    background:
      radial-gradient(circle at top left, rgba(255, 137, 56, 0.28), transparent 28%),
      radial-gradient(circle at right top, rgba(162, 85, 255, 0.22), transparent 30%),
      radial-gradient(circle at 50% 100%, rgba(255, 74, 118, 0.16), transparent 34%),
      linear-gradient(180deg, #1b1031 0%, #2a1535 46%, #35143b 100%);
    background-size: auto, auto, auto, auto;
  }

  .zero-proof-page-shell .page-hero {
    align-items: start;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.08), transparent 38%),
      linear-gradient(180deg, rgba(255, 176, 85, 0.08), rgba(255, 87, 122, 0.08));
    border: 1px solid rgba(255, 247, 240, 0.14);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 28px 70px rgba(16, 7, 31, 0.3);
  }

  .zero-proof-page-shell .page-eyebrow,
  .zero-proof-page-shell .section-eyebrow,
  .zero-proof-page-shell .card-eyebrow {
    color: #ffb56a;
  }

  .zero-proof-page-shell .page-title,
  .zero-proof-page-shell .section-title,
  .zero-proof-page-shell .cta-banner__title {
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.05em;
  }

  .zero-proof-page-shell .page-title {
    max-width: 9ch;
    line-height: 0.92;
    text-transform: uppercase;
  }

  .zero-proof-page-shell .page-title__accent {
    display: block;
    color: #ff6f8e;
  }

  .zero-proof-page-shell .button-link {
    border-color: rgba(255, 247, 240, 0.16);
    background: rgba(255, 255, 255, 0.05);
    color: #fff8f3;
  }

  .zero-proof-page-shell .button-link.is-primary {
    background: linear-gradient(135deg, #ff953d, #ff557b);
    border-color: transparent;
  }

  .zero-proof-page-shell .button-link.is-secondary {
    background: rgba(255, 255, 255, 0.08);
  }

  .zero-proof-page-shell .metric-card,
  .zero-proof-page-shell .step-card,
  .zero-proof-page-shell .card,
  .zero-proof-page-shell .quote-card,
  .zero-proof-page-shell .pricing-card,
  .zero-proof-page-shell .faq-card,
  .zero-proof-page-shell .showcase-panel,
  .zero-proof-page-shell .page-section {
    background: linear-gradient(180deg, rgba(255, 248, 243, 0.09), rgba(255, 248, 243, 0.04));
    border: 1px solid rgba(255, 247, 240, 0.12);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .zero-proof-page-shell .hero-highlight {
    border: 1px solid rgba(255, 247, 240, 0.12);
  }

  .zero-proof-page-shell .showcase-panel--accent {
    border-color: rgba(255, 181, 106, 0.3);
    box-shadow: 0 24px 42px rgba(255, 93, 120, 0.16);
  }

  .zero-proof-page {
    display: grid;
    gap: 1.1rem;
  }

  .zero-proof-shelf {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.95fr);
    gap: 1rem;
    padding: 1.2rem;
    border-radius: 1.7rem;
    background:
      linear-gradient(135deg, rgba(255, 159, 74, 0.16), transparent 44%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.03));
    border: 1px solid rgba(255, 247, 240, 0.12);
  }

  .zero-proof-shelf__lead {
    display: grid;
    gap: 1rem;
    align-content: start;
  }

  .zero-proof-shelf__kicker {
    display: inline-flex;
    width: fit-content;
    padding: 0.45rem 0.8rem;
    border-radius: 999px;
    background: rgba(255, 181, 106, 0.16);
    color: #ffd8b0;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .zero-proof-shelf h2 {
    margin: 0;
    font-family: 'Outfit', sans-serif;
    font-size: clamp(1.85rem, 4vw, 3rem);
    line-height: 0.96;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    max-width: 11ch;
  }

  .zero-proof-shelf p,
  .zero-proof-can__tone,
  .zero-proof-occasion p {
    color: rgba(255, 241, 232, 0.8);
    line-height: 1.65;
  }

  .zero-proof-signal-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .zero-proof-signal {
    padding: 0.72rem 0.9rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 247, 240, 0.1);
    color: rgba(255, 248, 243, 0.9);
  }

  .zero-proof-can-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.85rem;
  }

  .zero-proof-can {
    display: grid;
    gap: 0.55rem;
    padding: 1rem;
    border-radius: 1.45rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 247, 240, 0.1);
  }

  .zero-proof-can__art {
    min-height: 8.8rem;
    border-radius: 1.2rem;
    display: grid;
    place-items: center;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
  }

  .zero-proof-can__shape {
    width: 4.5rem;
    height: 8rem;
    border-radius: 1.4rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0.12));
    border: 1px solid rgba(255, 255, 255, 0.38);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      0 16px 28px rgba(25, 10, 47, 0.28);
  }

  .zero-proof-can strong {
    font-size: 1.05rem;
  }

  .zero-proof-occasion-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  .zero-proof-occasion {
    padding: 1.1rem;
    border-radius: 1.4rem;
    background:
      linear-gradient(180deg, rgba(255, 248, 243, 0.08), rgba(255, 248, 243, 0.03));
    border: 1px solid rgba(255, 247, 240, 0.12);
  }

  .zero-proof-occasion h3 {
    margin: 0.4rem 0 0.5rem;
    font-size: 1.18rem;
  }

  @media (max-width: 980px) {
    .zero-proof-shelf,
    .zero-proof-occasion-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 720px) {
    .zero-proof-can-grid {
      grid-template-columns: 1fr;
    }

    .zero-proof-signal-row {
      gap: 0.55rem;
    }

    .zero-proof-signal {
      width: 100%;
      text-align: center;
    }
  }
`

function ZeroProofBeveragePage() {
  return (
    <div className="zero-proof-page-shell">
      <style>{pageStyles}</style>

      <PageFrame
        theme={theme}
        eyebrow="Zero-Proof / Functional Beverage Brand"
        title={
          <>
            Social sipping
            <span className="page-title__accent">without the alcohol drag.</span>
          </>
        }
        description="A vibrant alcohol-free brand page built around flavor, function, and occasion."
        primaryCta={{ label: 'Shop the mixed pack', href: '#bundles' }}
        secondaryCta={{ label: 'Explore the flavors', href: '#flavors' }}
        heroVisual={{
          content: <ZeroProofVisual />,
          badges: ['Alcohol-free', 'Shelf energy', 'Flavor first'],
        }}
        metrics={metrics}
        spotlight={spotlight}
      >
        <div className="zero-proof-page">
          <ScrollReveal as="section" className="zero-proof-shelf" aria-label="Brand positioning" variant="right">
            <div className="zero-proof-shelf__lead">
              <span className="zero-proof-shelf__kicker">Trend-driven CPG energy</span>
              <h2>Designed like the can you bring to the party and leave on the moodboard.</h2>
              <p>
                The page blends brand heat with conversion structure: flavor-first copy,
                functional proof, lifestyle cues, and simple pricing that makes the first
                checkout feel low-friction and exciting.
              </p>
              <div className="zero-proof-signal-row">
                {flavorSignals.map((signal) => (
                  <span className="zero-proof-signal" key={signal}>
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            <div className="zero-proof-can-grid" aria-label="Flavor can lineup">
              {productCards.map((item) => (
                <article className="zero-proof-can" key={item.name}>
                  <div className="zero-proof-can__art" style={{ background: item.gradient }}>
                    <div className="zero-proof-can__shape" />
                  </div>
                  <strong>{item.name}</strong>
                  <div className="zero-proof-can__tone">{item.tone}</div>
                </article>
              ))}
            </div>
          </ScrollReveal>

          <div id="flavors">
            <Section
              eyebrow="Flavor Lineup"
              title="Four signature cans, each with a clear mood and occasion"
              description="Great beverage pages do more than list flavors. They help shoppers immediately understand when to drink each one and why the pack deserves fridge space."
            >
              <CardGrid items={lineup} />
            </Section>
          </div>

          <Section
            eyebrow="Functional Ingredients"
            title="The ingredient story makes the brand feel current, premium, and easy to trust"
            description="This section gives the beverage a real point of difference: enough wellness logic to feel modern, without turning the page into a supplement lecture."
          >
            <ShowcaseGrid items={ingredientStory} />
          </Section>

          <Section
            eyebrow="Occasions + How To Drink"
            title="Show people how the can fits into real moments"
            description="Alcohol-free products convert better when the page paints the ritual. These cards and steps turn the beverage into part of a customer lifestyle, not just another can in the aisle."
          >
            <StepsGrid items={howToDrink} />

            <div className="zero-proof-occasion-grid">
              {occasionCards.map((item) => (
                <article className="zero-proof-occasion" key={item.label}>
                  <div className="card-eyebrow">{item.label}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section
            eyebrow="Testimonials"
            title="Customers buy the taste first, then stay for the ritual"
            description="The strongest proof in this category is emotional and situational: how it feels to host with it, unwind with it, and choose it again."
          >
            <QuoteGrid items={testimonials} />
          </Section>

          <div id="bundles">
            <Section
              eyebrow="Bundle Pricing"
              title="Simple pack sizes that make trial, gifting, and repeat orders easy"
              description="A clean pricing ladder gives the customer an obvious first purchase, then nudges them toward the higher-value mixed case or subscription option."
            >
              <PricingGrid items={bundles} />
            </Section>
          </div>

          <Section
            eyebrow="FAQ"
            title="Handle the questions that usually slow down the first order"
            description="A clear FAQ reassures customers on taste expectations, serving ideas, and subscription flexibility before they bounce."
          >
            <FaqGrid items={faqs} />
          </Section>

          <CtaBanner
            title="Launch a zero-proof brand page with flavor, function, and real shelf appeal."
            text="Use this concept for alcohol-free cocktails, adaptogen spritzes, functional sparkling drinks, or premium canned mocktails that need a stronger digital storefront."
            primaryCta={{ label: 'Start with this concept', href: '#bundles' }}
            secondaryCta={{ label: 'See the flavor lineup', href: '#flavors' }}
          />
        </div>
      </PageFrame>
    </div>
  )
}

export default ZeroProofBeveragePage
