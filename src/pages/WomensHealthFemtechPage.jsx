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
import { WomensHealthVisual } from '../components/landing/HeroVisuals.jsx'

const theme = {
  accent: '#7f5168',
  'accent-surface': 'rgba(92, 48, 71, 0.94)',
  'accent-text': '#fff6f0',
  'button-primary': '#7f5168',
  'button-primary-text': '#fff8f3',
  'cta-gradient': 'linear-gradient(135deg, #7f5168, #c98b84 52%, #a97a73)',
  'cta-text': '#fff8f3',
  'hero-border': 'rgba(127, 81, 104, 0.14)',
  'hero-surface': 'rgba(255, 248, 243, 0.74)',
  'highlight-surface': 'linear-gradient(180deg, rgba(117, 72, 96, 0.95), rgba(164, 112, 109, 0.92))',
  'highlight-text': '#fff8f3',
  'page-bg': '#fff7f3',
  'page-bg-secondary': '#f2e4dd',
  'page-heading-font': '"Fraunces", serif',
  'page-muted': 'rgba(74, 49, 58, 0.78)',
  'page-orb-1': 'rgba(218, 147, 132, 0.28)',
  'page-orb-2': 'rgba(156, 111, 132, 0.18)',
  'page-pattern':
    'radial-gradient(circle at 20% 24%, rgba(255, 255, 255, 0.36) 0, rgba(255, 255, 255, 0.36) 1px, transparent 1px), radial-gradient(circle at 78% 28%, rgba(127, 81, 104, 0.08) 0, rgba(127, 81, 104, 0.08) 2px, transparent 2px)',
  'page-text': '#372731',
}

const carePillars = [
  {
    eyebrow: 'Whole-Person Care',
    title: 'Hormone-aware support that listens before it recommends',
    text:
      'Every plan starts with symptoms, goals, cycle stage, and lifestyle context so care feels personal instead of generic.',
    points: ['Cycle, fertility, postpartum, and menopause pathways', 'Food, sleep, mood, and stress context built in'],
  },
  {
    eyebrow: 'Evidence Led',
    title: 'Clear guidance rooted in clinical protocols and education',
    text:
      'Members see what is being tracked, why it matters, and when to escalate to clinician review for extra reassurance.',
    points: ['Decision support shaped by evidence-based care flows', 'Plain-language explanations for every next step'],
  },
  {
    eyebrow: 'Continuous Care',
    title: 'Check-ins that keep momentum without adding pressure',
    text:
      'Gentle prompts, symptom trends, and fast follow-up help members stay engaged between appointments and life changes.',
    points: ['Weekly reflections with adaptive nudges', 'Secure messaging and progress summaries'],
  },
]

const programFlow = [
  {
    title: 'Start with a guided intake',
    text:
      'A calm, private onboarding captures symptoms, history, and goals in minutes so members feel seen from day one.',
  },
  {
    title: 'Match to a care pathway',
    text:
      'The platform recommends the right track for menstrual health, fertility, postpartum recovery, perimenopause, or menopause.',
  },
  {
    title: 'Follow a structured weekly plan',
    text:
      'Members receive education, symptom tracking, and simple habit steps that adapt as their needs change.',
  },
  {
    title: 'Review with clinicians when needed',
    text:
      'Escalation points flag concerns early and make it easy to book expert support, adjust plans, or request further review.',
  },
]

const supportFeatures = [
  {
    eyebrow: 'Clinician Layer',
    title: 'Built for trusted review, not information overload',
    text:
      'Care teams can review red flags, monitor adherence, and offer next-step guidance inside one respectful member journey.',
    points: ['Symptom escalation notes', 'Secure visit preparation', 'Shared follow-up summaries'],
    accent: true,
  },
  {
    eyebrow: 'Community Layer',
    title: 'Support circles designed for encouragement and privacy',
    text:
      'Members can join moderated groups for fertility, postpartum, or midlife transition support without the noise of public social feeds.',
    points: ['Moderated peer check-ins', 'Topic-based support circles', 'Resource library with expert explainers'],
  },
  {
    eyebrow: 'Member Experience',
    title: 'Small rituals that make care feel human',
    text:
      'From appointment reminders to reflection prompts, every touchpoint is designed to lower anxiety and build confidence over time.',
    points: ['Mood-aware nudges', 'Progress snapshots', 'Celebrations for consistency and milestones'],
  },
]

const testimonials = [
  {
    quote:
      'The weekly care plan helped me understand my symptoms without feeling overwhelmed. It felt medically grounded and genuinely supportive.',
    author: 'Alicia, 34',
    role: 'Member navigating irregular cycles',
  },
  {
    quote:
      'I finally had one place for my notes, symptoms, and next questions before appointments. That alone reduced so much stress.',
    author: 'Marina, 41',
    role: 'Perimenopause program member',
  },
  {
    quote:
      'The language was respectful, the pacing was calm, and the clinician follow-up made me trust the program quickly.',
    author: 'Dr. S. Raman',
    role: "Women's health physician partner",
  },
]

const pricing = [
  {
    eyebrow: 'Essential',
    title: 'Guided Care',
    price: '$29/mo',
    text:
      'For members who want structured tracking, weekly education, and a dependable plan between appointments.',
    points: ['Personalized symptom and cycle tracking', 'Weekly care plan with reminders', 'Resource library and support circles'],
  },
  {
    eyebrow: 'Most Chosen',
    title: 'Care Plus',
    price: '$79/mo',
    text:
      'For members who want deeper coaching, progress reviews, and stronger continuity through major life stages.',
    points: ['Everything in Guided Care', 'Monthly expert review summary', 'Priority messaging and visit prep tools'],
  },
  {
    eyebrow: 'Practice Ready',
    title: 'Clinic Partner',
    price: 'Custom',
    text:
      'For care teams offering a calmer digital experience alongside fertility, OB-GYN, or menopause services.',
    points: ['Branded member journey', 'Clinician review workflows', 'Team onboarding and reporting support'],
  },
]

const faqs = [
  {
    question: 'Is this a replacement for medical care?',
    answer:
      'No. The experience is designed to support education, tracking, and continuity between appointments while encouraging clinician review when symptoms require it.',
  },
  {
    question: 'Who is the program best for?',
    answer:
      'It works well for people seeking guidance around cycle health, fertility, postpartum recovery, perimenopause, menopause, and symptom tracking over time.',
  },
  {
    question: 'How does clinician support work?',
    answer:
      'Members can follow guided care independently, while partner practices and upgraded plans include review touchpoints, visit preparation, and secure follow-up tools.',
  },
  {
    question: 'Can members join private support communities?',
    answer:
      'Yes. Members can opt into moderated circles centered on shared experiences, with privacy and respectful facilitation built into the experience.',
  },
]

function WomensHealthFemtechPage() {
  return (
    <PageFrame
      theme={theme}
      eyebrow="Women's Health / FemTech"
      title="Supportive care for every transition, with clarity you can trust."
      description="A calm, science-backed platform for tracking, guidance, and trusted care."
      primaryCta={{ label: 'Start Your Care Plan', href: '#pricing' }}
      secondaryCta={{ label: 'Explore Care Pathways', href: '#pillars' }}
      heroVisual={{
        content: <WomensHealthVisual />,
        badges: ['Private tracking', 'Care paths', 'Clinician-ready'],
      }}
      metrics={[
        { value: '24/7', label: 'private symptom tracking' },
        { value: '5', label: 'guided life-stage pathways' },
        { value: '92%', label: 'members feel more prepared for visits' },
      ]}
      spotlight={[
        {
          title: 'Respectful By Design',
          text: 'Gentle language, thoughtful pacing, and a private member journey that lowers friction and builds confidence.',
        },
        {
          title: 'Clinically Aligned',
          text: 'Education and escalation points designed to complement clinician care, not compete with it.',
        },
        {
          title: 'Made For Real Life',
          text: 'Short weekly actions, trend summaries, and support circles that fit around work, family, and recovery.',
        },
      ]}
    >
      <Section
        eyebrow="Care Pillars"
        title="A trust-first experience grounded in listening, evidence, and continuity."
        description="This landing page is designed to feel safe, modern, and medically respectful while still remaining warm and approachable."
      >
        <div id="pillars">
          <CardGrid items={carePillars} />
        </div>
      </Section>

      <Section
        eyebrow="Guided Program"
        title="A clear path from first intake to confident next steps."
        description="The member journey keeps things simple: understand the current phase, recommend the right pathway, and support progress with gentle accountability."
      >
        <StepsGrid items={programFlow} />
      </Section>

      <Section
        eyebrow="Support System"
        title="Designed for both personal reassurance and clinical confidence."
        description="The platform balances self-guided care with the option for expert oversight, community encouragement, and structured follow-up."
      >
        <ShowcaseGrid items={supportFeatures} />
      </Section>

      <Section
        eyebrow="Why It Feels Different"
        title="Care features that feel thoughtful at every touchpoint."
        description="Members need more than dashboards. They need context, emotional safety, and next steps that feel clear."
      >
        <CardGrid
          items={[
            {
              eyebrow: 'Tracking',
              title: 'Patterns become easier to understand',
              text:
                'Cycle changes, sleep, energy, and symptoms are organized into a calm view that helps members notice trends without panic.',
            },
            {
              eyebrow: 'Education',
              title: 'Explainers that answer the question behind the symptom',
              text:
                'Each learning module is written in plain language so members can prepare for appointments and make sense of what they are feeling.',
            },
            {
              eyebrow: 'Coordination',
              title: 'Every next step is easier to act on',
              text:
                'Visit prep notes, reminders, and summaries reduce the burden of repeating information and keep care moving forward.',
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="Member Voices"
        title="A tone of care people can feel immediately."
        description="Testimonials help this concept sell well because the trust signal is emotional as much as visual."
      >
        <QuoteGrid items={testimonials} />
      </Section>

      <Section
        eyebrow="Membership"
        title="Simple plans for members and clinics."
        description="Pricing stays clean and flexible so the concept can be sold as a consumer wellness subscription or a clinic-support platform."
      >
        <div id="pricing">
          <PricingGrid items={pricing} />
        </div>
      </Section>

      <Section
        eyebrow="FAQ"
        title="Answering the questions that matter most."
        description="Clear answers help reinforce the brand's responsible, science-backed tone while keeping the experience welcoming."
      >
        <FaqGrid items={faqs} />
      </Section>

      <CtaBanner
        title="Care that feels calm, personal, and genuinely supported."
        text="Whether this concept is positioned as a FemTech startup, a women's wellness membership, or a clinic companion service, the landing page is built to communicate trust quickly and convert with confidence."
        primaryCta={{ label: 'Book A Demo', href: '#pillars' }}
        secondaryCta={{ label: 'View Memberships', href: '#pricing' }}
      />
    </PageFrame>
  )
}

export default WomensHealthFemtechPage
