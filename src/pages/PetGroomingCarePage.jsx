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
import { PetCareVisual } from '../components/landing/HeroVisuals.jsx'

const theme = {
  'page-bg': '#fff8ef',
  'page-bg-secondary': '#fff2e8',
  'page-text': '#184445',
  'page-muted': 'rgba(24, 68, 69, 0.72)',
  'page-orb-1': 'rgba(95, 201, 196, 0.28)',
  'page-orb-2': 'rgba(255, 180, 150, 0.28)',
  'page-pattern':
    'radial-gradient(circle at 18% 18%, rgba(255,255,255,0.42) 0, transparent 22%), radial-gradient(circle at 82% 12%, rgba(95, 201, 196, 0.12) 0, transparent 18%), linear-gradient(135deg, rgba(255, 210, 189, 0.08), transparent 40%)',
  'hero-surface': 'rgba(255, 252, 247, 0.82)',
  'hero-border': 'rgba(24, 68, 69, 0.09)',
  'highlight-surface': 'linear-gradient(160deg, rgba(36, 141, 140, 0.96), rgba(255, 171, 139, 0.94))',
  'highlight-text': '#184445',
  accent: '#ef8f68',
  'accent-surface': 'linear-gradient(160deg, #269693, #f3a177)',
  'accent-text': '#184445',
  'accent-muted': 'rgba(24, 68, 69, 0.76)',
  'cta-gradient': 'linear-gradient(135deg, #23908d, #f2a578)',
  'cta-text': '#fffefb',
}

const metrics = [
  { value: '4.9/5', label: 'average rating from returning pet parents' },
  { value: '1,200+', label: 'grooming visits completed each year' },
  { value: '98%', label: 'of pets rebook within the same season' },
]

const spotlight = [
  {
    title: 'Gentle handling first',
    text: 'Appointments are paced around comfort, clear communication, and stress-aware care for puppies, seniors, and anxious pets.',
  },
  {
    title: 'Spa polish, practical care',
    text: 'Every groom balances a premium finish with coat, skin, nail, ear, and hygiene upkeep that supports everyday wellbeing.',
  },
  {
    title: 'Easy for busy owners',
    text: 'Simple plans, fast rebooking, and visit notes help pet parents stay consistent without overthinking the routine.',
  },
]

const services = [
  {
    eyebrow: 'Signature bath',
    title: 'Freshen & Fluff Groom',
    text: 'A polished maintenance appointment for pets who need a full reset without a major coat transformation.',
    points: [
      'Warm bath and coat-specific shampoo',
      'Blow-dry, brush-out, and tidy finish',
      'Nails, ears, paw trim, and sanitary care',
    ],
  },
  {
    eyebrow: 'Breed styling',
    title: 'Full Style Groom',
    text: 'Ideal for regular haircut maintenance, breed silhouettes, and pets who need a more tailored shape.',
    points: [
      'Consultation on coat length and style',
      'Scissor or clipper finishing details',
      'Face, feet, tail, and feathering refinement',
    ],
  },
  {
    eyebrow: 'Comfort care',
    title: 'Sensitive Skin Support',
    text: 'Designed for pets that need a calmer appointment rhythm and extra attention around skin or coat sensitivities.',
    points: [
      'Hypoallergenic wash options',
      'Low-stress handling and slower transitions',
      'Post-visit care notes for home maintenance',
    ],
  },
  {
    eyebrow: 'Between visits',
    title: 'Quick Care Add-Ons',
    text: 'Helpful extras that keep pets comfortable and camera-ready between full appointments.',
    points: [
      'Teeth gel and breath refresh',
      'De-shedding and coat de-matting support',
      'Paw balm, nose balm, and bow finish',
    ],
  },
]

const careJourney = [
  {
    title: 'Meet and assess',
    text: 'We start with coat condition, temperament, notes from the pet parent, and a plan for the visit pace.',
  },
  {
    title: 'Groom with calm handling',
    text: 'Bathing, drying, styling, and hygiene care are done with regular comfort checks and a gentle workflow.',
  },
  {
    title: 'Finish and review',
    text: 'We do a final fluff, check coat balance, and send home recommendations for the next booking window.',
  },
]

const trustPanels = [
  {
    eyebrow: 'Safety standard',
    title: 'A premium pet-wellness experience built around calm routines',
    text: 'This concept is designed to reassure owners who care just as much about the emotional experience as the visual result.',
    points: [
      'One-on-one attention during key grooming stages',
      'Sanitized tools and fresh station resets',
      'Notes on temperament, triggers, and preferred handling',
    ],
  },
  {
    eyebrow: 'What pet parents value',
    title: 'Consistent communication before, during, and after every visit',
    text: 'The page presents grooming as a trust relationship, not a quick transaction, which helps the brand feel more premium and more referable.',
    points: [
      'Clear coat and pricing expectations before the appointment',
      'Comfort-first recommendations for future maintenance',
      'Photo-ready handoff with visit summary and rebook prompt',
    ],
    accent: true,
  },
]

const testimonials = [
  {
    quote:
      'They treated Mochi so gently that she walked back in happily on her second visit. The cut was adorable and the whole experience felt thoughtful.',
    author: 'Sarah L.',
    role: 'Mini poodle owner',
  },
  {
    quote:
      'Our senior shih tzu usually gets nervous during grooming, but the team moved slowly, explained everything, and made him look amazing.',
    author: 'Daniel T.',
    role: 'Senior pet parent',
  },
  {
    quote:
      'The notes after the appointment were such a nice touch. It felt like premium care, not just a quick bath and trim.',
    author: 'Farah N.',
    role: 'Cavalier spaniel owner',
  },
]

const pricing = [
  {
    eyebrow: 'Starter',
    title: 'Bath & Tidy',
    price: 'From $49',
    text: 'A polished refresh for short-haired pets or in-between maintenance visits.',
    points: [
      'Bath, dry, brush, and finishing spray',
      'Nail trim, ear clean, and sanitary touch-up',
      'Great for monthly upkeep',
    ],
  },
  {
    eyebrow: 'Most booked',
    title: 'Signature Groom',
    price: 'From $79',
    text: 'The core full-service option for pets that need both coat care and a styled finish.',
    points: [
      'Everything in Bath & Tidy',
      'Full haircut or breed-shape styling',
      'Best for routine 4-8 week visits',
    ],
  },
  {
    eyebrow: 'Premium',
    title: 'Wellness Spa Plan',
    price: '$139 / visit',
    text: 'A slower, more tailored experience for high-maintenance coats, sensitive pets, or owners who want extra care.',
    points: [
      'Extended coat and skin consultation',
      'De-shed or de-matting support included',
      'Comfort pacing with premium finishing extras',
    ],
  },
]

const faqs = [
  {
    question: 'How often should my pet be groomed?',
    answer:
      'Most pets do well on a 4 to 8 week rhythm, depending on coat type, shedding, lifestyle, and whether they need haircut maintenance.',
  },
  {
    question: 'What if my pet is nervous or new to grooming?',
    answer:
      'We use a gentle, comfort-first approach with slower transitions and clear handling notes. That makes this concept a strong fit for anxious, young, or senior pets.',
  },
  {
    question: 'Can owners request a specific style or finish?',
    answer:
      'Yes. The consultation portion helps set realistic expectations around coat condition, maintenance level, and the style that best suits the pet.',
  },
  {
    question: 'Are there membership or recurring plan options?',
    answer:
      'Yes. This page is designed to support recurring wellness-style grooming plans, which are great for retention and easy repeat bookings.',
  },
]

function PetGroomingCarePage() {
  return (
    <>
      <style>{`
        .pet-care-page .page-title {
          max-width: 11ch;
        }

        .pet-care-page .page-description {
          max-width: 38rem;
        }

        .pet-care-page .page-eyebrow,
        .pet-care-page .section-eyebrow,
        .pet-care-page .card-eyebrow {
          color: rgba(24, 68, 69, 0.72);
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .pet-care-page .hero-panel,
        .pet-care-page .hero-spotlight {
          align-content: stretch;
        }

        .pet-care-page .hero-highlight,
        .pet-care-page .card,
        .pet-care-page .step-card,
        .pet-care-page .showcase-panel,
        .pet-care-page .quote-card,
        .pet-care-page .pricing-card,
        .pet-care-page .faq-card,
        .pet-care-page .cta-banner {
          border-radius: 1.6rem;
        }

        .pet-care-page .hero-highlight,
        .pet-care-page .card,
        .pet-care-page .showcase-panel,
        .pet-care-page .quote-card,
        .pet-care-page .pricing-card,
        .pet-care-page .faq-card {
          border: 1px solid rgba(24, 68, 69, 0.08);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.32), transparent 42%),
            rgba(255, 252, 247, 0.8);
          box-shadow: 0 16px 40px rgba(24, 68, 69, 0.05);
        }

        .pet-care-page .step-card {
          border: 1px solid rgba(24, 68, 69, 0.08);
          background: rgba(255, 250, 244, 0.84);
          box-shadow: 0 14px 34px rgba(24, 68, 69, 0.05);
        }

        .pet-care-page .step-number {
          background: rgba(239, 143, 104, 0.16);
          color: #c56b46;
          border-radius: 999px;
          width: 3rem;
          height: 3rem;
          display: inline-grid;
          place-items: center;
        }

        .pet-care-page .showcase-panel--accent,
        .pet-care-page .pricing-card:nth-child(2) {
          background:
            linear-gradient(180deg, rgba(36, 141, 140, 0.08), rgba(243, 161, 119, 0.12)),
            rgba(255, 250, 244, 0.88);
        }

        .pet-care-page .price-tag {
          color: #db7f56;
        }

        .pet-care-page .pet-intro {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(250px, 0.85fr);
          gap: 1rem;
          align-items: stretch;
        }

        .pet-care-page .pet-intro__panel,
        .pet-care-page .pet-intro__aside {
          border-radius: 1.6rem;
          padding: 1.25rem;
          border: 1px solid rgba(24, 68, 69, 0.08);
        }

        .pet-care-page .pet-intro__panel {
          background:
            radial-gradient(circle at top left, rgba(95, 201, 196, 0.12), transparent 38%),
            rgba(255, 252, 247, 0.74);
        }

        .pet-care-page .pet-intro__aside {
          display: grid;
          gap: 0.95rem;
          background:
            radial-gradient(circle at 80% 16%, rgba(255, 176, 146, 0.24), transparent 28%),
            rgba(255, 245, 237, 0.88);
        }

        .pet-care-page .pet-intro__aside strong {
          display: block;
          font-size: 1.9rem;
          line-height: 1;
          color: #1d7674;
        }

        .pet-care-page .pet-care-notes {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .pet-care-page .pet-care-note {
          padding: 1rem 1.05rem;
          border-radius: 1.35rem;
          background: rgba(255, 252, 247, 0.68);
          border: 1px dashed rgba(24, 68, 69, 0.14);
        }

        .pet-care-page .pet-care-note h3 {
          margin: 0 0 0.45rem;
          font-size: 1rem;
        }

        .pet-care-page .quote-card p {
          font-size: 1.03rem;
        }

        .pet-care-page .quote-card__author {
          letter-spacing: 0.04em;
        }

        @media (max-width: 900px) {
          .pet-care-page .pet-intro,
          .pet-care-page .pet-care-notes {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="pet-care-page">
        <PageFrame
          theme={theme}
          eyebrow="Pet Grooming & Care"
          title="A happier grooming day for pets and a more polished experience for their people."
          description="Playful premium pet care that feels easy to trust and easy to book."
          primaryCta={{ label: 'Book a groom', href: '#grooming-plans' }}
          secondaryCta={{ label: 'Explore services', href: '#services' }}
          heroVisual={{
            content: <PetCareVisual />,
            badges: ['Gentle handling', 'Spa finish', 'Repeat visits'],
          }}
          metrics={metrics}
          spotlight={spotlight}
        >
          <Section
            eyebrow="Brand mood"
            title="Cheerful on the surface, professional where it matters most."
            description="This concept is built to feel lovable and polished at the same time, which makes it especially sellable for modern pet businesses that want stronger visual branding without losing trust."
          >
            <div className="pet-intro">
              <div className="pet-intro__panel">
                <p className="card-text">
                  The page pairs rounded shapes, warm whitespace, and soft pet-wellness language with the practical details owners actually need before booking. It works well for boutique grooming salons, premium mobile groomers, pet spas, and hybrid grooming-plus-retail brands.
                </p>
              </div>
              <aside className="pet-intro__aside">
                <div>
                  <strong>Low-stress</strong>
                  <span className="card-text">The messaging centers on comfort, calm handling, and trust-building for both pets and owners.</span>
                </div>
                <div>
                  <strong>Premium cute</strong>
                  <span className="card-text">The look stays bright and charming without tipping into childish, so it still feels commercially strong.</span>
                </div>
              </aside>
            </div>
          </Section>

          <Section
            eyebrow="Services"
            title="A service menu that feels easy to understand and easy to say yes to."
            description="These offers help a grooming business present clear packages while still leaving room for coat-specific advice, add-ons, and recurring plans."
          >
            <div id="services">
              <CardGrid items={services} />
            </div>
          </Section>

          <Section
            eyebrow="Care journey"
            title="A calm visit flow that reassures pet parents from drop-off to pickup."
            description="The strongest pet-care pages do more than list services. They show owners how the visit feels and why their pet will be in good hands."
          >
            <StepsGrid items={careJourney} />
            <div className="pet-care-notes">
              <article className="pet-care-note">
                <h3>Puppy-friendly intros</h3>
                <p className="card-text">A softer first-visit rhythm helps young pets build positive associations with the salon environment.</p>
              </article>
              <article className="pet-care-note">
                <h3>Senior pet comfort</h3>
                <p className="card-text">Extra patience, gentler positioning, and practical handling notes make repeat visits smoother for older pets.</p>
              </article>
              <article className="pet-care-note">
                <h3>Home-care guidance</h3>
                <p className="card-text">Owners leave with coat-maintenance tips so the groom stays beautiful longer between appointments.</p>
              </article>
            </div>
          </Section>

          <Section
            eyebrow="Trust & safety"
            title="The details that turn a cute pet brand into one owners genuinely trust."
            description="This section adds the operational reassurance that helps first-time visitors feel comfortable booking an appointment for a beloved pet."
          >
            <ShowcaseGrid items={trustPanels} />
          </Section>

          <Section
            eyebrow="Happy pet parents"
            title="Testimonials that reinforce gentleness, consistency, and premium care."
            description="For this category, believable reviews matter a lot. Pet owners want to know their animals will be handled kindly and come home looking great."
          >
            <QuoteGrid items={testimonials} />
          </Section>

          <Section
            eyebrow="Grooming plans"
            title="Friendly pricing tiers for first visits, regular upkeep, and premium care."
            description="These sample plans show how a pet-care brand can present clear options while still leaving room for size, coat type, and behavioral notes."
          >
            <div id="grooming-plans">
              <PricingGrid items={pricing} />
            </div>
          </Section>

          <Section
            eyebrow="FAQ"
            title="Quick answers for the last questions before booking."
            description="A short FAQ keeps the experience clear on mobile and helps reduce hesitation around fit, frequency, and nervous pets."
          >
            <FaqGrid items={faqs} />
          </Section>

          <CtaBanner
            title="Turn first-time visitors into loyal pet parents."
            text="This landing page gives a grooming business a friendly premium identity, strong reassurance around care standards, and a clean path to repeat bookings."
            primaryCta={{ label: 'Choose a grooming plan', href: '#grooming-plans' }}
            secondaryCta={{ label: 'Call the care desk', href: 'tel:+15550123456' }}
          />
        </PageFrame>
      </div>
    </>
  )
}

export default PetGroomingCarePage
