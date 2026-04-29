import {
  CtaBanner,
  FaqGrid,
  PageFrame,
  PricingGrid,
  QuoteGrid,
  Section,
  ShowcaseGrid,
  StepsGrid,
} from '../components/landing/Primitives'
import { CleaningVisual } from '../components/landing/HeroVisuals.jsx'

const theme = {
  'page-bg': '#f4fcff',
  'page-bg-secondary': '#eefbf3',
  'page-text': '#17324a',
  'page-muted': 'rgba(23, 50, 74, 0.72)',
  'page-orb-1': 'rgba(101, 198, 255, 0.28)',
  'page-orb-2': 'rgba(104, 208, 142, 0.24)',
  'page-pattern':
    'repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0 14px, transparent 14px 28px)',
  'hero-surface': 'rgba(255, 255, 255, 0.82)',
  'hero-border': 'rgba(23, 50, 74, 0.08)',
  'highlight-surface': 'linear-gradient(160deg, rgba(31, 137, 214, 0.96), rgba(37, 179, 110, 0.92))',
  'highlight-text': '#f8feff',
  accent: '#25b36e',
  'accent-surface': 'linear-gradient(160deg, #1282cf, #27b56f)',
  'accent-text': '#f8feff',
  'cta-gradient': 'linear-gradient(135deg, #1784d1, #27b56f)',
  'cta-text': '#f8feff',
}

const metrics = [
  { value: '4.9/5', label: 'average rating from repeat clients' },
  { value: '200+', label: 'homes cleaned each month' },
  { value: '7 days', label: 'a week booking availability' },
  { value: '24 hrs', label: 're-clean promise response window' },
]

const spotlight = [
  {
    title: 'Easy to book',
    text: 'Get a quote in minutes, choose your time slot, and confirm online or by phone.',
  },
  {
    title: 'All supplies included',
    text: 'Our teams arrive with fresh tools, eco-conscious products, and a clear room-by-room checklist.',
  },
  {
    title: 'Local and trusted',
    text: 'Background-checked cleaners, insured visits, and friendly updates before we arrive.',
  },
]

const serviceCategories = [
  {
    title: 'Routine home clean',
    text: 'For weekly, biweekly, or monthly upkeep that keeps the whole home guest-ready.',
    points: [
      'Kitchen wipe-down and appliance exteriors',
      'Bathroom sanitizing and mirror polish',
      'Dusting, vacuuming, and floor mopping',
      'Beds made and surfaces reset',
    ],
  },
  {
    title: 'Deep clean reset',
    text: 'Perfect for first visits, seasonal refreshes, and homes that need extra attention.',
    points: [
      'Detailed baseboards, doors, and trim',
      'Inside microwave and visible cabinet fronts',
      'Extra focus on buildup, corners, and touchpoints',
      'Longer appointment with a fuller checklist',
    ],
  },
  {
    title: 'Move-in / move-out',
    text: 'A polished handoff for landlords, tenants, and homeowners preparing for the next chapter.',
    points: [
      'Empty-room cleaning from top to bottom',
      'Inside cabinets, drawers, and closets',
      'Appliance exterior cleaning and floor detailing',
      'Fast scheduling for key handover deadlines',
    ],
  },
  {
    title: 'Popular add-ons',
    text: 'Simple upgrades customers can add to routine or deep clean appointments.',
    points: [
      'Inside fridge or oven',
      'Laundry fold and linen refresh',
      'Interior window touch-up',
      'Pet hair and sofa vacuum care',
    ],
  },
]

const bookingSteps = [
  {
    title: 'Tell us about your home',
    text: 'Share home size, preferred frequency, and any focus areas so we can recommend the right visit.',
  },
  {
    title: 'Choose your time slot',
    text: 'Pick a morning or afternoon arrival window that works for your routine and confirm instantly.',
  },
  {
    title: 'We clean room by room',
    text: 'Your assigned team follows a clear checklist and updates you when the job is complete.',
  },
  {
    title: 'Walk into a fresh reset',
    text: 'Come home to sparkling surfaces, straightened spaces, and a support team that follows up if needed.',
  },
]

const trustPanels = [
  {
    eyebrow: 'Trust signal',
    title: 'Friendly pros who show up prepared',
    text: 'Each visit is handled by vetted cleaners using a consistent service playbook, color-coded cloths, and insured procedures.',
    points: [
      'Background-checked local team members',
      'Secure entry notes and arrival reminders',
      'Eco-conscious products safe for everyday family life',
    ],
  },
  {
    eyebrow: 'Guarantee',
    title: 'If something is missed, we make it right',
    text: 'Reach out within 24 hours and we will schedule a prompt touch-up for the area that needs attention.',
    points: [
      'Clear expectations before every visit',
      'Photo-ready quality checks',
      'Fast support with no awkward back-and-forth',
    ],
    accent: true,
  },
]

const testimonialItems = [
  {
    quote:
      'Booking was simple, the team arrived on time, and the house felt reset in a way I could never do after a long work week.',
    author: 'Alicia M.',
    role: 'Biweekly cleaning client',
  },
  {
    quote:
      'We used the deep clean before family visited and every room looked brighter. The checklist made the whole service feel very professional.',
    author: 'Farid R.',
    role: 'Deep clean customer',
  },
  {
    quote:
      'The move-out clean helped us hand over the keys with confidence. Fast communication, fair price, and no stress at the end.',
    author: 'Nadia T.',
    role: 'Move-out cleaning customer',
  },
]

const pricingItems = [
  {
    eyebrow: 'Starter',
    title: 'Apartment refresh',
    price: 'From $109',
    text: 'Best for studios and smaller homes that need a simple, dependable reset.',
    points: [
      '1 bedroom / 1 bathroom baseline',
      'Kitchen, bathroom, floors, and dusting',
      'Bring-your-own-supplies option available',
      'Great for recurring weekly or biweekly service',
    ],
  },
  {
    eyebrow: 'Most booked',
    title: 'Family home clean',
    price: 'From $169',
    text: 'A balanced option for busy households that want an easy recurring routine.',
    points: [
      'Up to 3 bedrooms / 2 bathrooms baseline',
      'Full common-area reset and trash removal',
      'Beds made and high-touch surfaces detailed',
      'Flexible add-ons for laundry or appliance interiors',
    ],
  },
  {
    eyebrow: 'Premium',
    title: 'Deep clean visit',
    price: 'From $249',
    text: 'For first-time clients, seasonal resets, or any home that needs extra detail.',
    points: [
      'More detailed room-by-room checklist',
      'Extra attention to buildup, edges, and fixtures',
      'Ideal before hosting, moving, or holidays',
      'Recommended starting point for new clients',
    ],
  },
]

const faqItems = [
  {
    question: 'Do I need to be home during the cleaning?',
    answer:
      'No. Many clients provide entry notes or smart-lock access. We confirm arrival and send an update once the service is complete.',
  },
  {
    question: 'Do you bring your own products and equipment?',
    answer:
      'Yes. Our team can arrive with the standard supplies needed for most homes, and we can note any product preferences in your booking.',
  },
  {
    question: 'How long does a typical appointment take?',
    answer:
      'It depends on home size and service type, but most routine visits take between two and four hours. Deep cleans usually take longer.',
  },
  {
    question: 'Can I customize what is included?',
    answer:
      'Absolutely. You can highlight priority rooms, request add-ons, or ask for a recurring plan that matches your budget and schedule.',
  },
]

const coveragePoints = [
  'Recurring weekly, biweekly, or monthly plans',
  'One-time cleans for events, holidays, and handovers',
  'Text reminders, digital invoices, and easy rebooking',
  'Pet-friendly and family-conscious product options',
  'Simple service windows for condos, homes, and townhouses',
  'Transparent pricing before the appointment is confirmed',
]

const styles = {
  checklistGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem',
  },
  checklistCard: {
    display: 'grid',
    gap: '0.9rem',
    padding: '1.2rem',
    borderRadius: '1.35rem',
    background: 'rgba(255, 255, 255, 0.82)',
    border: '1px solid rgba(23, 50, 74, 0.08)',
    boxShadow: '0 10px 30px rgba(23, 50, 74, 0.05)',
  },
  checklistBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'fit-content',
    padding: '0.35rem 0.7rem',
    borderRadius: '999px',
    background: 'rgba(37, 179, 110, 0.12)',
    color: '#13814e',
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
  },
  proofGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1rem',
  },
  proofPanel: {
    padding: '1.2rem',
    borderRadius: '1.35rem',
    background: 'rgba(255, 255, 255, 0.82)',
    border: '1px solid rgba(23, 50, 74, 0.08)',
  },
  proofTitle: {
    margin: '0 0 0.75rem',
    fontSize: '1.25rem',
  },
  proofList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '0.85rem 1rem',
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  proofItem: {
    position: 'relative',
    paddingLeft: '1rem',
    color: 'rgba(23, 50, 74, 0.76)',
    lineHeight: 1.6,
  },
  asideCard: {
    padding: '1.2rem',
    borderRadius: '1.35rem',
    background: 'linear-gradient(180deg, rgba(24, 132, 209, 0.1), rgba(39, 181, 111, 0.12))',
    border: '1px solid rgba(23, 50, 74, 0.08)',
    display: 'grid',
    gap: '0.85rem',
    alignContent: 'start',
  },
  asideLabel: {
    margin: 0,
    color: '#13814e',
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  asideTitle: {
    margin: 0,
    fontSize: '1.6rem',
    color: '#17324a',
  },
  note: {
    marginTop: '0.9rem',
    color: 'rgba(23, 50, 74, 0.68)',
    lineHeight: 1.6,
  },
}

function HomeCleaningServicePage() {
  return (
    <PageFrame
      theme={theme}
      eyebrow="Home Cleaning Service"
      title="A brighter, cleaner home without the weekend work."
      description="Easy booking, friendly local cleaners, and a home that feels reset."
      primaryCta={{ label: 'Book a cleaning', href: '#pricing' }}
      secondaryCta={{ label: 'See what is included', href: '#services' }}
      heroVisual={{
        content: <CleaningVisual />,
        badges: ['Easy booking', 'Local teams', 'Room-by-room'],
      }}
      metrics={metrics}
      spotlight={spotlight}
    >
      <Section
        eyebrow="What we clean"
        title="Service options customers understand at a glance"
        description="This page is built for fast decision-making: clear packages, easy add-ons, and the kind of reassuring detail that helps local-service leads convert."
      >
        <div id="services" style={styles.checklistGrid}>
          {serviceCategories.map((item) => (
            <article key={item.title} style={styles.checklistCard}>
              <div style={styles.checklistBadge}>Included checklist</div>
              <div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </div>
              <ul className="check-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How booking works"
        title="A simple process that feels low-effort from the first click"
        description="Great local-service landing pages remove friction. This flow makes pricing, scheduling, and expectations easy to understand on desktop or mobile."
      >
        <StepsGrid items={bookingSteps} />
      </Section>

      <Section
        eyebrow="Why families choose us"
        title="Trust-first details that help customers feel comfortable inviting you in"
        description="The strongest home-cleaning pages combine practical service information with visible reassurance around reliability, safety, and follow-through."
      >
        <div style={styles.proofGrid}>
          <div style={styles.proofPanel}>
            <h3 style={styles.proofTitle}>What makes this offer easy to buy</h3>
            <ul style={styles.proofList}>
              {coveragePoints.map((point) => (
                <li key={point} style={styles.proofItem}>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <aside style={styles.asideCard}>
            <p style={styles.asideLabel}>Service promise</p>
            <h3 style={styles.asideTitle}>Fresh-home feeling, backed by a 24-hour re-clean guarantee.</h3>
            <p className="card-text">
              If a detail was missed, clients can reach out within 24 hours and receive a prompt touch-up for the area in question.
            </p>
            <p className="card-text">
              That kind of clear follow-through makes the brand feel dependable and helps first-time customers convert with less hesitation.
            </p>
          </aside>
        </div>
      </Section>

      <Section
        eyebrow="Trust and guarantee"
        title="Professional standards without making the service feel cold"
        description="This section balances operational clarity with a warm, neighborhood-friendly tone that suits cleaning businesses especially well."
      >
        <ShowcaseGrid items={trustPanels} />
      </Section>

      <Section
        eyebrow="Happy clients"
        title="Testimonials that speak to convenience, quality, and peace of mind"
        description="Realistic reviews help this category sell. Customers want to know the service is punctual, thorough, and worth repeating."
      >
        <QuoteGrid items={testimonialItems} />
      </Section>

      <Section
        eyebrow="Pricing"
        title="Easy service tiers for first-time visitors and recurring clients"
        description="The numbers here are sample-friendly for a portfolio demo and show how a cleaning brand can present clear, approachable options."
      >
        <div id="pricing">
          <PricingGrid items={pricingItems} />
          <p style={styles.note}>
            Final pricing can scale by home size, number of bathrooms, pet hair, add-ons, and access conditions. That keeps the page transparent without overcomplicating the first conversation.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Questions"
        title="Quick answers that remove the last few objections"
        description="A short FAQ keeps the page helpful on mobile and gives potential customers confidence before they contact the business."
      >
        <div id="faq">
          <FaqGrid items={faqItems} />
        </div>
      </Section>

      <CtaBanner
        title="Ready to turn this into a local lead machine?"
        text="This landing page keeps the message clean, friendly, and conversion-focused. It works well for independent cleaners, growing home-service teams, or franchise-style demos."
        primaryCta={{ label: 'Request your quote', href: '#pricing' }}
        secondaryCta={{ label: 'Call for availability', href: 'tel:+15550123456' }}
      />
    </PageFrame>
  )
}

export default HomeCleaningServicePage
