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
import { AIAgencyVisual } from '../components/landing/HeroVisuals.jsx'

const theme = {
  'page-bg': '#061120',
  'page-bg-secondary': '#0a1730',
  'page-text': '#07192b',
  'page-muted': 'rgba(7, 25, 43, 0.74)',
  'page-orb-1': 'rgba(44, 214, 255, 0.22)',
  'page-orb-2': 'rgba(95, 128, 255, 0.18)',
  'page-pattern':
    'linear-gradient(rgba(78, 232, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(78, 232, 255, 0.06) 1px, transparent 1px)',
  'page-heading-font': "'Manrope', 'Segoe UI', sans-serif",
  'hero-surface': 'linear-gradient(180deg, rgba(234, 247, 255, 0.9), rgba(210, 232, 255, 0.72))',
  'hero-border': 'rgba(78, 232, 255, 0.18)',
  'highlight-surface': 'linear-gradient(180deg, rgba(6, 24, 43, 0.94), rgba(7, 33, 57, 0.88))',
  'highlight-text': '#effbff',
  accent: '#4ee8ff',
  'accent-surface': 'linear-gradient(180deg, rgba(6, 24, 43, 0.96), rgba(12, 45, 79, 0.92))',
  'accent-text': '#effbff',
  'cta-gradient': 'linear-gradient(135deg, #07192b, #0d3f6b 58%, #14b8d4)',
  'cta-text': '#effbff',
}

const services = [
  {
    eyebrow: 'Revenue',
    title: 'Lead Response Automation',
    text: 'Capture, qualify, and route inbound leads in seconds so pipeline never cools off overnight.',
    points: ['Instant form + WhatsApp follow-up', 'CRM sync with owner alerts', 'Qualification logic tuned to your ICP'],
  },
  {
    eyebrow: 'Support',
    title: 'AI Service Desk',
    text: 'Deflect repetitive tickets and give human agents smart drafts, summaries, and next-best actions.',
    points: ['24/7 chat and email triage', 'Knowledge-grounded answers', 'Escalation rules with full context'],
  },
  {
    eyebrow: 'Operations',
    title: 'Workflow Orchestration',
    text: 'Connect the tools your team already uses and remove manual re-entry from finance, ops, and sales.',
    points: ['HubSpot, Slack, Notion, Gmail', 'Approval chains and audit trails', 'Exception handling for edge cases'],
  },
  {
    eyebrow: 'Enablement',
    title: 'Internal Knowledge Agents',
    text: 'Turn SOPs, proposals, and product docs into searchable copilots your team will actually use.',
    points: ['Permission-aware document search', 'Policy-safe answers', 'Usage analytics by team and topic'],
  },
]

const processSteps = [
  {
    title: 'Map The Bottlenecks',
    text: 'We audit repetitive work, shadow the handoffs, and quantify where time and revenue are leaking.',
  },
  {
    title: 'Design The Automation Layer',
    text: 'We pair the right AI agents, workflows, and human approval points around the reality of your team.',
  },
  {
    title: 'Launch A Controlled Pilot',
    text: 'Every deployment starts with one measurable workflow, clean guardrails, and rapid weekly tuning.',
  },
  {
    title: 'Scale With Reporting',
    text: 'Once ROI is proven, we expand to adjacent use cases and keep leadership dashboards transparent.',
  },
]

const useCases = [
  {
    eyebrow: 'SaaS Sales Teams',
    title: 'Respond before competitors do',
    text: 'Automate demo routing, no-show recovery, and proposal follow-up so reps stay in selling mode.',
    points: ['Lead enrichment', 'Meeting prep briefs', 'Renewal risk flags'],
  },
  {
    eyebrow: 'Professional Services',
    title: 'Reduce admin without losing polish',
    text: 'Speed up intake, client updates, and document assembly while preserving a premium client experience.',
    points: ['Onboarding checklists', 'Status summaries', 'Proposal drafting'],
  },
  {
    eyebrow: 'Customer Support',
    title: 'Resolve high-volume questions faster',
    text: 'Give agents instant answers, next steps, and compliant messaging across chat, email, and ticket queues.',
    points: ['Intent detection', 'Suggested replies', 'Escalation summaries'],
  },
  {
    eyebrow: 'Operations Leaders',
    title: 'Create one operating system for busy teams',
    text: 'Link approvals, reporting, and vendor coordination into a dependable workflow with fewer bottlenecks.',
    points: ['Task creation', 'SLA tracking', 'Exception routing'],
    accent: true,
  },
]

const testimonials = [
  {
    quote:
      'We went from replying to inbound leads in hours to under two minutes. That alone paid for the pilot in the first month.',
    author: 'Maya Chen',
    role: 'VP Growth, Northbridge Cloud',
  },
  {
    quote:
      'The team did not just bolt on a chatbot. They rebuilt our support workflow around measurable deflection and agent efficiency.',
    author: 'Daniel Reyes',
    role: 'Head of CX, Verity Health',
  },
  {
    quote:
      'Their rollout felt enterprise-safe from day one: guardrails, reporting, and a clear path from pilot to scale.',
    author: 'Leena Foster',
    role: 'COO, Summit Advisory Group',
  },
]

const pricing = [
  {
    eyebrow: 'Pilot',
    title: 'Proof Of ROI',
    price: 'From $4.8k',
    text: 'For teams that want one workflow automated fast with success metrics defined up front.',
    points: ['1 production workflow', '2 integrations included', 'Weekly optimization for 30 days', 'Leadership ROI readout'],
  },
  {
    eyebrow: 'Growth',
    title: 'Automation Core',
    price: '$8.5k / month',
    text: 'For scaling companies ready to automate lead response, support, and internal operations together.',
    points: ['Up to 4 active workflows', 'Shared KPI dashboard', 'Prompt and playbook management', 'Monthly roadmap planning'],
  },
  {
    eyebrow: 'Enterprise',
    title: 'AI Operating Layer',
    price: 'Custom',
    text: 'For complex teams that need governance, secure knowledge access, and multi-department deployment.',
    points: ['Custom security review', 'Department-level rollout', 'Change management enablement', 'Dedicated strategy lead'],
  },
]

const faqs = [
  {
    question: 'How quickly can we launch the first automation?',
    answer:
      'Most pilots go live in two to three weeks once the workflow, systems access, and success metric are agreed.',
  },
  {
    question: 'Do you replace our existing tools?',
    answer:
      'Usually no. We layer automation across the tools you already use so adoption is faster and the team keeps familiar workflows.',
  },
  {
    question: 'How do you handle AI risk and hallucinations?',
    answer:
      'We design for narrow jobs, connect answers to approved knowledge sources, and add human approvals anywhere mistakes would be costly.',
  },
  {
    question: 'What should we measure first?',
    answer:
      'The fastest wins are usually lead response time, admin hours removed, ticket deflection, or average handling time depending on the team.',
  },
  {
    question: 'Can you work with a non-technical operations team?',
    answer:
      'Yes. Our delivery is designed for revenue and operations leaders, with plain-language reporting and lightweight enablement for each rollout.',
  },
]

const outcomeCards = [
  {
    value: '18 hrs',
    label: 'average weekly admin time removed per team lead',
  },
  {
    value: '31%',
    label: 'faster first-response speed across sales and support',
  },
  {
    value: '4.2x',
    label: 'more qualified conversations captured after-hours',
  },
]

const commandCenterStyle = {
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  marginBottom: '1rem',
}

const outcomeCardStyle = {
  padding: '1.2rem',
  borderRadius: '1.35rem',
  background: 'linear-gradient(180deg, rgba(6, 24, 43, 0.94), rgba(9, 38, 70, 0.88))',
  border: '1px solid rgba(78, 232, 255, 0.16)',
  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
  color: '#effbff',
}

const outcomeValueStyle = {
  display: 'block',
  marginBottom: '0.45rem',
  fontSize: 'clamp(2rem, 5vw, 3.1rem)',
  fontWeight: 800,
  letterSpacing: '-0.05em',
}

const operatorPanelStyle = {
  padding: '1.25rem',
  borderRadius: '1.45rem',
  background: 'linear-gradient(180deg, rgba(239, 251, 255, 0.92), rgba(220, 240, 255, 0.76))',
  border: '1px solid rgba(78, 232, 255, 0.18)',
  display: 'grid',
  gap: '0.95rem',
}

const operatorRowStyle = {
  display: 'grid',
  gap: '0.85rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
}

const operatorTileStyle = {
  padding: '0.9rem 1rem',
  borderRadius: '1rem',
  background: 'rgba(255, 255, 255, 0.74)',
  border: '1px solid rgba(7, 25, 43, 0.08)',
}

const pillRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.6rem',
}

function AIAutomationAgencyPage() {
  return (
    <PageFrame
      theme={theme}
      eyebrow="AI Automation Agency"
      title="Deploy AI systems that cut manual work and convert faster."
      description="Automation for sales, support, and ops with measurable ROI."
      primaryCta={{ label: 'Book a strategy call', href: '#pricing' }}
      secondaryCta={{ label: 'See common use cases', href: '#use-cases' }}
      heroVisual={{
        content: <AIAgencyVisual />,
        badges: ['AI workflows', 'Lead speed', 'Ops clarity'],
      }}
      metrics={[
        { value: '42 hrs', label: 'manual work removed weekly' },
        { value: '2.1 min', label: 'typical lead response time' },
        { value: '98.6%', label: 'workflow completion SLA' },
      ]}
      spotlight={[
        {
          title: '21-day pilot',
          text: 'Launch one high-impact workflow fast, prove ROI, then scale with confidence.',
        },
        {
          title: 'Human-in-the-loop',
          text: 'Every automation includes approval gates, fallback paths, and audit-ready visibility.',
        },
        {
          title: 'Built around your stack',
          text: 'HubSpot, Gmail, Slack, Notion, help desks, forms, and internal knowledge sources.',
        },
      ]}
    >
      <div id="services">
        <Section
          eyebrow="What We Build"
          title="Automation that feels premium to your team and obvious to your CFO."
          description="Every service is designed around throughput, speed, and operational control so the output is not just impressive, but durable."
        >
          <CardGrid items={services} />
        </Section>
      </div>

      <div id="outcomes">
        <Section
          eyebrow="Outcomes + Process"
          title="Start with one workflow. Prove the economics. Expand from there."
          description="The strongest deployments win quickly on a narrow problem, then turn that success into an operating layer the team trusts."
        >
          <div style={commandCenterStyle}>
            {outcomeCards.map((item) => (
              <article key={item.label} style={outcomeCardStyle}>
                <strong style={outcomeValueStyle}>{item.value}</strong>
                <span style={{ color: 'rgba(239, 251, 255, 0.76)', lineHeight: 1.55 }}>{item.label}</span>
              </article>
            ))}
          </div>

          <div style={operatorPanelStyle}>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <div className="section-eyebrow">Operator Command Center</div>
              <h3 className="card-title" style={{ margin: 0, fontSize: '1.4rem' }}>
                What your team sees after launch
              </h3>
              <p className="card-text" style={{ margin: 0 }}>
                Clear workflow status, approval checkpoints, and performance reporting instead of opaque AI behavior.
              </p>
            </div>
            <div style={operatorRowStyle}>
              <div style={operatorTileStyle}>
                <strong>Live Queue Health</strong>
                <p className="card-text" style={{ margin: '0.45rem 0 0' }}>
                  Open tasks, stuck states, and fallback routing visible in one place.
                </p>
              </div>
              <div style={operatorTileStyle}>
                <strong>Approval Trails</strong>
                <p className="card-text" style={{ margin: '0.45rem 0 0' }}>
                  Human sign-off preserved for pricing, compliance, and sensitive messaging.
                </p>
              </div>
              <div style={operatorTileStyle}>
                <strong>ROI Reporting</strong>
                <p className="card-text" style={{ margin: '0.45rem 0 0' }}>
                  Time saved, response speed, and conversion lift tied back to the workflow.
                </p>
              </div>
            </div>
            <div style={pillRowStyle}>
              <span className="hero-pill">Security-conscious</span>
              <span className="hero-pill">Role-based visibility</span>
              <span className="hero-pill">Weekly optimization cadence</span>
            </div>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <StepsGrid items={processSteps} />
          </div>
        </Section>
      </div>

      <div id="use-cases">
        <Section
          eyebrow="Use Cases"
          title="Flexible enough for different teams, narrow enough to ship with confidence."
          description="We focus on workflows where speed, consistency, and follow-through directly affect revenue or service quality."
        >
          <ShowcaseGrid items={useCases} />
        </Section>
      </div>

      <div id="testimonials">
        <Section
          eyebrow="Client Results"
          title="Operators trust us because the rollout is measurable, not magical."
          description="The best feedback we receive is simple: the team adopted it quickly, leadership could see the impact, and the process held up under pressure."
        >
          <QuoteGrid items={testimonials} />
        </Section>
      </div>

      <div id="pricing">
        <Section
          eyebrow="Pricing"
          title="Structured for fast decisions and scalable delivery."
          description="Choose a pilot if you need proof, a monthly partnership if you are ready to operationalize AI across the business."
        >
          <PricingGrid items={pricing} />
        </Section>
      </div>

      <div id="faq">
        <Section
          eyebrow="FAQ"
          title="Questions leadership teams ask before they move."
          description="If you are evaluating automation seriously, these are usually the decisions that matter most in the first conversation."
        >
          <FaqGrid items={faqs} />
        </Section>
      </div>

      <CtaBanner
        title="Make AI useful in the workflow that matters most this quarter."
        text="Book a working session and we will map one automatable process, estimate ROI, and show the safest path to a live pilot."
        primaryCta={{ label: 'Schedule the working session', href: '#pricing' }}
        secondaryCta={{ label: 'Review the FAQ', href: '#faq' }}
      />
    </PageFrame>
  )
}

export default AIAutomationAgencyPage
