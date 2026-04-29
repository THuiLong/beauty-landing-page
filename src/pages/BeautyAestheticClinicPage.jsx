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
import { BeautyClinicVisual } from '../components/landing/HeroVisuals.jsx'

const theme = {
  'page-bg': '#f7f1e8',
  'page-bg-secondary': '#efe4d6',
  'page-text': '#2f241d',
  'page-muted': 'rgba(47, 36, 29, 0.72)',
  accent: '#b78a48',
  'page-orb-1': 'rgba(216, 182, 124, 0.24)',
  'page-orb-2': 'rgba(147, 110, 73, 0.16)',
  'hero-surface': 'rgba(255, 249, 242, 0.7)',
  'hero-border': 'rgba(101, 76, 52, 0.14)',
  'highlight-surface': 'linear-gradient(180deg, rgba(73, 52, 34, 0.96), rgba(51, 36, 24, 0.92))',
  'highlight-text': '#fff8f0',
  'accent-surface': 'linear-gradient(180deg, rgba(74, 52, 34, 0.96), rgba(39, 28, 20, 0.94))',
  'accent-text': '#2f241d',
  'accent-muted': 'rgba(47, 36, 29, 0.78)',
  'cta-gradient': 'linear-gradient(135deg, #a87a3a, #5c4330)',
  'cta-text': '#fffaf4',
  'page-heading-font': "'Cormorant Garamond', 'Times New Roman', serif",
  'page-pattern':
    'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.38) 0, transparent 18%), linear-gradient(120deg, rgba(183,138,72,0.08), transparent 30%)',
}

const signatureTreatments = [
  {
    eyebrow: 'Refinement',
    title: 'Sculpt & Lift Protocol',
    text: 'A bespoke combination of contouring injectables and collagen support designed to restore definition with a soft, rested finish.',
    points: ['Personalized facial mapping', 'Minimal downtime approach', 'Doctor-led review at week two'],
  },
  {
    eyebrow: 'Radiance',
    title: 'Glass Skin Resurfacing',
    text: 'A layered resurfacing journey to smooth texture, refine pores, and reveal a luminous complexion that still feels like your own skin.',
    points: ['Medical-grade peel sequence', 'Hydration infusion finish', 'Safe for event prep plans'],
  },
  {
    eyebrow: 'Regeneration',
    title: 'Collagen Renewal Therapy',
    text: 'An advanced regenerative treatment plan that supports firmness, elasticity, and gradual confidence-building improvement.',
    points: ['Progress tracked by imaging', 'Tailored for face, neck, or decolletage', 'Buildable over seasonal visits'],
  },
]

const patientExperience = [
  {
    title: 'Private consultation',
    text: 'Every visit begins with photography, goals, and a full-face assessment so treatment choices feel considered instead of rushed.',
  },
  {
    title: 'Tailored treatment design',
    text: 'We map your plan around features, skin quality, recovery preferences, and the timeline that matters to you.',
  },
  {
    title: 'Refined aftercare',
    text: 'Clear guidance, check-ins, and concierge follow-up keep the experience calm from first appointment to final reveal.',
  },
]

const outcomes = [
  {
    eyebrow: 'Texture + tone',
    title: 'From uneven and fatigued to polished and luminous',
    text: 'Clients typically come to us wanting smoother texture, brighter tone, and makeup that sits beautifully again.',
    points: ['Pore-softening finish', 'More even skin tone', 'Subtle camera-ready glow'],
  },
  {
    eyebrow: 'Facial balance',
    title: 'From heavy or tired features to elegant definition',
    text: 'Our approach favors restraint: refined contours, softened shadows, and balance that looks natural in motion.',
    points: ['Jawline and cheek refinement', 'Soft under-eye refresh', 'Natural expression preserved'],
    accent: true,
  },
  {
    eyebrow: 'Confidence',
    title: 'From special-event panic to everyday ease',
    text: 'The strongest result is often emotional: clients feel more comfortable being seen up close, on camera, and without heavy coverage.',
    points: ['Less makeup dependency', 'Better consistency over time', 'Visible but believable improvement'],
  },
]

const testimonials = [
  {
    quote:
      'I wanted to look fresher, not different. The team understood that immediately and the result feels incredibly elegant.',
    author: 'Amelia R.',
    role: 'Bridal patient',
  },
  {
    quote:
      'From consultation to aftercare, everything felt thoughtful and discreet. My skin looks smoother and more rested in every light.',
    author: 'Nadia T.',
    role: 'Resurfacing patient',
  },
  {
    quote:
      'They explained every step clearly, never oversold, and built a plan that fit my schedule. It felt premium because it felt personal.',
    author: 'Leah C.',
    role: 'Membership patient',
  },
]

const packages = [
  {
    eyebrow: 'First visit',
    title: 'The Signature Consultation',
    price: '$180',
    text: 'A 45-minute aesthetic consultation with photography, skin analysis, and a tailored treatment roadmap.',
    points: ['Redeemable toward same-day treatment', 'Doctor or senior practitioner review', 'Personalized plan delivered post-visit'],
  },
  {
    eyebrow: 'Most chosen',
    title: 'Radiance Treatment Edit',
    price: '$690',
    text: 'A curated skin-renewal session combining resurfacing, infusion, and recovery support for glow with polish.',
    points: ['Custom prep and aftercare', 'Ideal before events or photoshoots', 'Optional follow-up refinement'],
  },
  {
    eyebrow: 'Ongoing care',
    title: 'The Atelier Membership',
    price: '$290/mo',
    text: 'For patients who want structured maintenance, priority booking, and seasonal planning across skin and injectable care.',
    points: ['Quarterly treatment planning', 'Preferred pricing on selected services', 'Concierge messaging support'],
  },
]

const faqs = [
  {
    question: 'Will I still look like myself?',
    answer:
      'Yes. Our clinic philosophy centers on subtle enhancement, facial harmony, and plans that keep your natural movement and expression intact.',
  },
  {
    question: 'How do you recommend treatments?',
    answer:
      'We start with your goals, anatomy, and timeline, then recommend the least invasive path that can realistically achieve the result you want.',
  },
  {
    question: 'Is there downtime?',
    answer:
      'Downtime varies by treatment, but we design around your lifestyle and explain expected recovery, social downtime, and aftercare before you commit.',
  },
  {
    question: 'Do you offer plans for weddings or important events?',
    answer:
      'Yes. We create event timelines for brides, founders, executives, and frequent travelers who need polished results at a specific date.',
  },
]

function BeautyAestheticClinicPage() {
  return (
    <>
      <style>{`
        .beauty-clinic-page .page-eyebrow,
        .beauty-clinic-page .section-eyebrow,
        .beauty-clinic-page .card-eyebrow {
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 0.74rem;
          color: rgba(87, 64, 44, 0.72);
        }

        .beauty-clinic-page .hero-panel {
          align-content: center;
        }

        .beauty-clinic-page .hero-spotlight {
          grid-template-columns: 1fr;
        }

        .beauty-clinic-page .hero-highlight {
          position: relative;
          overflow: hidden;
          min-height: 180px;
          border: 1px solid rgba(255, 244, 232, 0.14);
        }

        .beauty-clinic-page .hero-highlight::after {
          content: '';
          position: absolute;
          inset: auto -10% -40% 35%;
          height: 180px;
          background: radial-gradient(circle, rgba(214, 174, 113, 0.28), transparent 60%);
          pointer-events: none;
        }

        .beauty-clinic-page .editorial-note {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(220px, 0.9fr);
          gap: 1rem;
          align-items: stretch;
        }

        .beauty-clinic-page .editorial-note__panel,
        .beauty-clinic-page .editorial-note__aside {
          border-radius: 1.4rem;
          padding: 1.25rem;
          border: 1px solid rgba(101, 76, 52, 0.12);
        }

        .beauty-clinic-page .editorial-note__panel {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.58), transparent 52%),
            rgba(255, 251, 246, 0.78);
        }

        .beauty-clinic-page .editorial-note__aside {
          display: grid;
          gap: 0.85rem;
          background: rgba(190, 157, 111, 0.12);
        }

        .beauty-clinic-page .editorial-note__aside strong {
          display: block;
          font-size: 1.9rem;
          line-height: 1;
        }

        .beauty-clinic-page .experience-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .beauty-clinic-page .experience-strip article {
          padding: 1rem 0 0;
          border-top: 1px solid rgba(101, 76, 52, 0.18);
        }

        .beauty-clinic-page .experience-strip h3 {
          margin: 0 0 0.55rem;
          font-size: 1rem;
        }

        .beauty-clinic-page .outcomes-caption {
          max-width: 36rem;
          margin-top: -0.2rem;
          margin-bottom: 1rem;
          color: rgba(47, 36, 29, 0.74);
        }

        .beauty-clinic-page .quote-card,
        .beauty-clinic-page .pricing-card,
        .beauty-clinic-page .faq-card,
        .beauty-clinic-page .card,
        .beauty-clinic-page .showcase-panel {
          border-radius: 1.35rem;
          border: 1px solid rgba(101, 76, 52, 0.1);
          background: rgba(255, 251, 246, 0.72);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .beauty-clinic-page .quote-card p {
          font-size: 1.04rem;
        }

        .beauty-clinic-page .quote-card__author {
          letter-spacing: 0.04em;
        }

        .beauty-clinic-page .price-tag {
          color: #7d5b36;
          font-family: var(--page-heading-font, serif);
          font-weight: 700;
        }

        .beauty-clinic-page .faq-grid,
        .beauty-clinic-page .quote-grid {
          align-items: start;
        }

        @media (max-width: 900px) {
          .beauty-clinic-page .editorial-note,
          .beauty-clinic-page .experience-strip {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="beauty-clinic-page" id="top">
        <PageFrame
          theme={theme}
          eyebrow="Aesthetic Atelier"
          title="Subtle refinement, luminous skin, and a treatment journey that feels entirely personal."
          description="A luxury clinic concept with warm trust and refined results."
          primaryCta={{ label: 'Book A Consultation', href: '#consultation-packages' }}
          secondaryCta={{ label: 'Explore Treatments', href: '#signature-treatments' }}
          heroVisual={{
            content: <BeautyClinicVisual />,
            badges: ['Glow plans', 'Quiet luxury', 'Consult-first'],
          }}
          metrics={[
            { value: '92%', label: 'Patients book a follow-up plan' },
            { value: '45 min', label: 'Private consultation window' },
            { value: '3-12 mo', label: 'Typical treatment planning horizon' },
          ]}
          spotlight={[
            {
              title: 'Bespoke by design',
              text: 'Facial balancing, skin renewal, and event-ready treatment planning tailored with a light hand.',
            },
            {
              title: 'Luxury without pressure',
              text: 'Editorial atmosphere, medical rigor, and recommendations that prioritize restraint over excess.',
            },
          ]}
        >
          <Section
            eyebrow="Clinic Point Of View"
            title="Elevated care for patients who want visible results without losing what makes them recognizable."
            description="This landing page is positioned for a modern clinic that wins on trust, artistry, and a calm premium experience rather than aggressive sales language."
          >
            <div className="editorial-note">
              <div className="editorial-note__panel">
                <p className="card-text">
                  Every detail is meant to reassure the right patient: softened color, strong consultation language,
                  and outcomes framed around refinement instead of transformation. It is ideal for a clinic offering
                  injectables, resurfacing, regenerative skin therapies, and curated memberships.
                </p>
              </div>
              <div className="editorial-note__aside">
                <div>
                  <strong>Natural-first</strong>
                  <span className="card-text">An editorial tone for clients who value discretion, polish, and physician-guided choices.</span>
                </div>
                <div>
                  <strong>Concierge</strong>
                  <span className="card-text">High-touch follow-up, event planning, and premium aftercare are central to the experience.</span>
                </div>
              </div>
            </div>
          </Section>

          <Section
            eyebrow="Signature Treatments"
            title="Three high-interest offers that make the clinic feel specialized from the start."
            description="These treatments are framed as premium pathways, giving prospective patients clear entry points while keeping the brand polished and aspirational."
          >
            <div id="signature-treatments">
              <CardGrid items={signatureTreatments} />
            </div>
          </Section>

          <Section
            eyebrow="Patient Experience"
            title="A journey built around confidence, clarity, and elegant restraint."
            description="The experience matters as much as the outcome. This section keeps the clinic feeling personal, professional, and easy to trust."
          >
            <StepsGrid items={patientExperience} />
            <div className="experience-strip">
              <article>
                <h3>Detailed imaging</h3>
                <p className="card-text">Baseline photography helps patients understand progress over time rather than judging results day by day.</p>
              </article>
              <article>
                <h3>Recovery planning</h3>
                <p className="card-text">Appointments are timed around events, travel, and work so treatment fits real life beautifully.</p>
              </article>
              <article>
                <h3>Ongoing partnership</h3>
                <p className="card-text">Review visits and maintenance plans turn one-time appointments into long-term care relationships.</p>
              </article>
            </div>
          </Section>

          <Section
            eyebrow="Outcome Stories"
            title="Before-and-after language that feels sophisticated instead of overpromising."
            description="Rather than dramatic claims, the page focuses on how patients want to feel: fresher, smoother, lifted, and quietly more confident."
          >
            <p className="outcomes-caption">
              These content blocks work especially well for clinics that want to communicate transformation through tone,
              texture, and facial harmony even when they are not leading with clinical imagery.
            </p>
            <ShowcaseGrid items={outcomes} />
          </Section>

          <Section
            eyebrow="Testimonials"
            title="Social proof with a private-clinic voice."
            description="Short, believable testimonials reinforce the luxury experience, the natural-looking results, and the trust patients feel during the process."
          >
            <QuoteGrid items={testimonials} />
          </Section>

          <Section
            eyebrow="Consultation & Packages"
            title="Clear entry pricing that still feels premium."
            description="These packages are structured to support both first-time bookings and higher-lifetime-value memberships."
          >
            <div id="consultation-packages">
              <PricingGrid items={packages} />
            </div>
          </Section>

          <Section
            eyebrow="Frequently Asked"
            title="Answering the questions patients ask before they are ready to inquire."
            description="A refined FAQ section helps reduce hesitation around natural-looking results, treatment planning, and recovery."
          >
            <FaqGrid items={faqs} />
          </Section>

          <CtaBanner
            title="Invite patients into a more considered kind of aesthetic care."
            text="Use this concept to position a clinic as polished, medically grounded, and deeply personal, with a booking path that feels calm and high-end from beginning to end."
            primaryCta={{ label: 'Reserve Consultation', href: '#consultation-packages' }}
            secondaryCta={{ label: 'View Signature Treatments', href: '#signature-treatments' }}
          />
        </PageFrame>
      </div>
    </>
  )
}

export default BeautyAestheticClinicPage
