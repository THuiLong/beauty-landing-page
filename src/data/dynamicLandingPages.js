import {
  generatedLandingPageConfigs,
  generatedLandingPages,
} from './generatedLandingPages.js'

const originalLandingPageConfigList = [
  {
    slug: 'ai-automation-agency',
    shortName: 'AI Agency',
    name: 'AI Automation Agency',
    category: 'B2B Tech',
    positioning: 'High-conversion',
    summary:
      'A sharp, ROI-first agency concept for lead gen, workflow automation, AI chat, and operating efficiency.',
    previewGradient: 'linear-gradient(135deg, #061a3b, #1383a4 58%, #8be7ff)',
    theme: {
      'page-bg': '#061120',
      'page-bg-secondary': '#0a1730',
      'page-text': '#07192b',
      'page-muted': 'rgba(7, 25, 43, 0.74)',
      'page-orb-1': 'rgba(44, 214, 255, 0.22)',
      'page-orb-2': 'rgba(95, 128, 255, 0.18)',
      'page-pattern':
        'linear-gradient(rgba(78, 232, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(78, 232, 255, 0.06) 1px, transparent 1px)',
      'page-heading-font': "'Manrope', 'Segoe UI', sans-serif",
      'hero-surface':
        'linear-gradient(180deg, rgba(234, 247, 255, 0.9), rgba(210, 232, 255, 0.72))',
      'hero-border': 'rgba(78, 232, 255, 0.18)',
      'highlight-surface':
        'linear-gradient(180deg, rgba(6, 24, 43, 0.94), rgba(7, 33, 57, 0.88))',
      'highlight-text': '#effbff',
      accent: '#4ee8ff',
      'accent-surface':
        'linear-gradient(180deg, rgba(6, 24, 43, 0.96), rgba(12, 45, 79, 0.92))',
      'accent-text': '#effbff',
      'cta-gradient': 'linear-gradient(135deg, #07192b, #0d3f6b 58%, #14b8d4)',
      'cta-text': '#effbff',
    },
    hero: {
      eyebrow: 'AI Automation Agency',
      title: 'Deploy AI systems that cut manual work and convert faster.',
      description: 'Automation for sales, support, and ops with measurable ROI.',
      primaryCta: { label: 'Book a strategy call', href: '#pricing' },
      secondaryCta: { label: 'See common use cases', href: '#use-cases' },
      heroVisual: {
        visualKey: 'ai',
        badges: ['AI workflows', 'Lead speed', 'Ops clarity'],
      },
      metrics: [
        { value: '42 hrs', label: 'manual work removed weekly' },
        { value: '2.1 min', label: 'typical lead response time' },
        { value: '98.6%', label: 'workflow completion SLA' },
      ],
      spotlight: [
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
      ],
    },
    cardsSection: {
      id: 'services',
      eyebrow: 'What We Build',
      title: 'Automation that feels premium to your team and obvious to your CFO.',
      description:
        'The page leads with high-value workflows that translate AI into measurable business outcomes.',
      items: [
        {
          eyebrow: 'Revenue',
          title: 'Lead response automation',
          text: 'Capture, qualify, and route inbound leads in seconds so pipeline never cools off after hours.',
          points: ['Instant follow-up', 'Qualification logic', 'CRM handoff'],
        },
        {
          eyebrow: 'Support',
          title: 'AI service desk',
          text: 'Reduce repetitive support load while giving human agents faster, cleaner answers and summaries.',
          points: ['24/7 triage', 'Knowledge-grounded replies', 'Escalation logic'],
        },
        {
          eyebrow: 'Operations',
          title: 'Workflow orchestration',
          text: 'Link approvals, reporting, and internal handoffs so teams stop losing time in manual re-entry.',
          points: ['Stack integrations', 'Approval chains', 'Exception handling'],
        },
      ],
    },
    stepsSection: {
      id: 'process',
      eyebrow: 'Outcomes + Process',
      title: 'Start with one workflow. Prove the economics. Expand from there.',
      description:
        'The strongest deployments begin narrowly, show visible gains, and then grow into a broader operating layer.',
      items: [
        {
          title: 'Map the bottlenecks',
          text: 'Audit repetitive work, delays, and the handoffs that currently leak time or revenue.',
        },
        {
          title: 'Design the automation layer',
          text: 'Choose the right workflows, guardrails, and approval checkpoints around the team you already have.',
        },
        {
          title: 'Launch a controlled pilot',
          text: 'Start with one measurable process, tune it quickly, and prove the business case.',
        },
        {
          title: 'Scale with reporting',
          text: 'Expand to adjacent workflows once leadership can see ROI clearly and trust the rollout.',
        },
      ],
    },
    showcaseSection: {
      id: 'use-cases',
      eyebrow: 'Use Cases',
      title: 'Flexible enough for different teams, narrow enough to ship with confidence.',
      description:
        'These panels help prospects see where automation would pay off first inside their business.',
      items: [
        {
          eyebrow: 'SaaS sales teams',
          title: 'Respond before competitors do',
          text: 'Automate demo routing, no-show recovery, and proposal follow-up so reps stay in selling mode.',
          points: ['Lead enrichment', 'Meeting prep briefs', 'Renewal risk flags'],
        },
        {
          eyebrow: 'Professional services',
          title: 'Reduce admin without losing polish',
          text: 'Speed up intake, updates, and document work while keeping the client experience premium.',
          points: ['Onboarding checklists', 'Status summaries', 'Proposal drafting'],
          accent: true,
        },
        {
          eyebrow: 'Operations leaders',
          title: 'Create one operating rhythm for busy teams',
          text: 'Link approvals, reporting, and vendor coordination into a more dependable workflow.',
          points: ['Task creation', 'SLA tracking', 'Exception routing'],
        },
      ],
    },
    testimonialsSection: {
      id: 'results',
      eyebrow: 'Client Results',
      title: 'Operators trust us because the rollout is measurable, not magical.',
      description:
        'The strongest proof in this category is faster response, cleaner adoption, and clearer ROI.',
      items: [
        {
          quote:
            'We went from replying to inbound leads in hours to under two minutes. That alone paid for the pilot in the first month.',
          author: 'Maya Chen',
          role: 'VP Growth, Northbridge Cloud',
        },
        {
          quote:
            'They rebuilt our support workflow around measurable deflection and agent efficiency, not chatbot hype.',
          author: 'Daniel Reyes',
          role: 'Head of CX, Verity Health',
        },
        {
          quote:
            'The rollout felt enterprise-safe from day one: guardrails, reporting, and a clear path from pilot to scale.',
          author: 'Leena Foster',
          role: 'COO, Summit Advisory Group',
        },
      ],
    },
    pricingSection: {
      id: 'pricing',
      eyebrow: 'Pricing',
      title: 'Structured for fast decisions and scalable delivery.',
      description:
        'Use a pilot when proof is the goal, or a monthly partnership when the business is ready to operationalize AI.',
      items: [
        {
          eyebrow: 'Pilot',
          title: 'Proof Of ROI',
          price: 'From $4.8k',
          text: 'One workflow automated fast with success metrics defined up front.',
          points: ['1 production workflow', '2 integrations included', '30-day optimization', 'ROI readout'],
        },
        {
          eyebrow: 'Growth',
          title: 'Automation Core',
          price: '$8.5k / month',
          text: 'For teams ready to automate lead response, support, and internal operations together.',
          points: ['Up to 4 workflows', 'Shared KPI dashboard', 'Prompt management', 'Monthly roadmap planning'],
        },
        {
          eyebrow: 'Enterprise',
          title: 'AI Operating Layer',
          price: 'Custom',
          text: 'For more complex teams needing governance, secure knowledge access, and multi-department rollout.',
          points: ['Security review', 'Department rollout', 'Change management', 'Dedicated strategy lead'],
        },
      ],
    },
    faqSection: {
      id: 'faq',
      eyebrow: 'FAQ',
      title: 'Questions leadership teams ask before they move.',
      description:
        'These answers keep the service grounded in business outcomes and practical deployment risk.',
      items: [
        {
          question: 'How quickly can we launch the first automation?',
          answer:
            'Most pilots go live in two to three weeks once the workflow, systems access, and success metric are agreed.',
        },
        {
          question: 'Do you replace our existing tools?',
          answer:
            'Usually no. The automation layer sits across the tools you already use so adoption is faster and disruption is lower.',
        },
        {
          question: 'How do you handle hallucinations and risk?',
          answer:
            'The workflows are narrow, connected to approved knowledge sources, and include human approvals where mistakes would be costly.',
        },
        {
          question: 'What should we measure first?',
          answer:
            'The fastest wins are usually lead response time, admin hours removed, ticket deflection, or average handling time.',
        },
      ],
    },
    ctaBanner: {
      title: 'Make AI useful in the workflow that matters most this quarter.',
      text:
        'Use this concept to sell automation as a clear operating improvement, not as abstract innovation theater.',
      primaryCta: { label: 'Schedule the working session', href: '#pricing' },
      secondaryCta: { label: 'Review the FAQ', href: '#faq' },
    },
  },
  {
    slug: 'beauty-aesthetic-clinic',
    shortName: 'Beauty Clinic',
    name: 'Beauty / Aesthetic Clinic',
    category: 'Premium Service',
    positioning: 'Luxury',
    summary:
      'A refined clinic concept with elegant editorial layout, high-trust messaging, and polished consultation CTAs.',
    previewGradient: 'linear-gradient(135deg, #ead3c3, #dca882 58%, #7a4c3f)',
    theme: {
      'page-bg': '#f7f1e8',
      'page-bg-secondary': '#efe4d6',
      'page-text': '#2f241d',
      'page-muted': 'rgba(47, 36, 29, 0.72)',
      accent: '#b78a48',
      'page-orb-1': 'rgba(216, 182, 124, 0.24)',
      'page-orb-2': 'rgba(147, 110, 73, 0.16)',
      'hero-surface': 'rgba(255, 249, 242, 0.7)',
      'hero-border': 'rgba(101, 76, 52, 0.14)',
      'highlight-surface':
        'linear-gradient(180deg, rgba(73, 52, 34, 0.96), rgba(51, 36, 24, 0.92))',
      'highlight-text': '#fff8f0',
      'accent-surface':
        'linear-gradient(180deg, rgba(74, 52, 34, 0.96), rgba(39, 28, 20, 0.94))',
      'accent-text': '#fff8f0',
      'cta-gradient': 'linear-gradient(135deg, #a87a3a, #5c4330)',
      'cta-text': '#fffaf4',
      'page-heading-font': "'Cormorant Garamond', 'Times New Roman', serif",
      'page-pattern':
        'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.38) 0, transparent 18%), linear-gradient(120deg, rgba(183,138,72,0.08), transparent 30%)',
    },
    hero: {
      eyebrow: 'Aesthetic Atelier',
      title:
        'Subtle refinement, luminous skin, and a treatment journey that feels entirely personal.',
      description: 'A luxury clinic concept with warm trust and refined results.',
      primaryCta: { label: 'Book A Consultation', href: '#packages' },
      secondaryCta: { label: 'Explore Treatments', href: '#treatments' },
      heroVisual: {
        visualKey: 'beauty',
        badges: ['Glow plans', 'Quiet luxury', 'Consult-first'],
      },
      metrics: [
        { value: '92%', label: 'patients book a follow-up plan' },
        { value: '45 min', label: 'private consultation window' },
        { value: '3-12 mo', label: 'typical treatment planning horizon' },
      ],
      spotlight: [
        {
          title: 'Bespoke by design',
          text: 'Facial balancing, skin renewal, and event-ready planning tailored with a light hand.',
        },
        {
          title: 'Luxury without pressure',
          text: 'Editorial atmosphere and medical rigor without recommendations that feel aggressive.',
        },
        {
          title: 'Natural-first results',
          text: 'The positioning is built around trust, harmony, and refinement instead of transformation hype.',
        },
      ],
    },
    cardsSection: {
      id: 'treatments',
      eyebrow: 'Signature Treatments',
      title: 'Three high-interest offers that make the clinic feel specialized from the start.',
      description:
        'Each offer acts as a premium pathway for the right patient while keeping the brand polished and aspirational.',
      items: [
        {
          eyebrow: 'Refinement',
          title: 'Sculpt & lift protocol',
          text: 'A bespoke contouring and collagen-support path designed to restore definition with a soft, rested finish.',
          points: ['Facial mapping', 'Minimal downtime approach', 'Doctor-led review'],
        },
        {
          eyebrow: 'Radiance',
          title: 'Glass skin resurfacing',
          text: 'A layered resurfacing journey to smooth texture, refine pores, and reveal a polished glow.',
          points: ['Peel sequence', 'Hydration infusion', 'Event prep friendly'],
        },
        {
          eyebrow: 'Regeneration',
          title: 'Collagen renewal therapy',
          text: 'An advanced regenerative plan that supports firmness, elasticity, and quiet confidence over time.',
          points: ['Imaging progress tracking', 'Face, neck, or decolletage', 'Buildable treatment cadence'],
        },
      ],
    },
    stepsSection: {
      id: 'experience',
      eyebrow: 'Patient Experience',
      title: 'A journey built around confidence, clarity, and elegant restraint.',
      description:
        'The service experience is positioned as part of the luxury, not just the outcome.',
      items: [
        {
          title: 'Private consultation',
          text: 'Start with photography, goals, and a full-face assessment so recommendations feel considered instead of rushed.',
        },
        {
          title: 'Tailored treatment design',
          text: 'Map the plan around features, skin quality, downtime preferences, and the timeline that matters.',
        },
        {
          title: 'Refined aftercare',
          text: 'Use clear guidance and concierge follow-up to keep the experience calm from first appointment to final reveal.',
        },
        {
          title: 'Ongoing partnership',
          text: 'Review visits and maintenance planning turn a single treatment into a longer care relationship.',
        },
      ],
    },
    showcaseSection: {
      id: 'outcomes',
      eyebrow: 'Outcome Stories',
      title: 'Before-and-after language that feels sophisticated instead of overpromising.',
      description:
        'The strongest clinic pages sell how a patient wants to feel, not just what a treatment can do.',
      items: [
        {
          eyebrow: 'Texture + tone',
          title: 'From uneven and fatigued to polished and luminous',
          text: 'This language supports smoother texture, brighter tone, and makeup that sits beautifully again.',
          points: ['Pore-softening finish', 'More even tone', 'Camera-ready glow'],
        },
        {
          eyebrow: 'Facial balance',
          title: 'From heavy or tired features to elegant definition',
          text: 'The page favors restraint, softened shadows, and natural expression over dramatic claims.',
          points: ['Jawline and cheek refinement', 'Soft under-eye refresh', 'Expression preserved'],
          accent: true,
        },
        {
          eyebrow: 'Confidence',
          title: 'From event panic to everyday ease',
          text: 'The emotional result is often the most persuasive: more comfort being seen up close and without heavy coverage.',
          points: ['Less makeup dependency', 'Better consistency', 'Visible but believable improvement'],
        },
      ],
    },
    testimonialsSection: {
      id: 'testimonials',
      eyebrow: 'Testimonials',
      title: 'Social proof with a private-clinic voice.',
      description:
        'These quotes reinforce natural-looking results, the luxury experience, and the trust patients feel during the process.',
      items: [
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
      ],
    },
    pricingSection: {
      id: 'packages',
      eyebrow: 'Consultation & Packages',
      title: 'Clear entry pricing that still feels premium.',
      description:
        'These tiers support first-time bookings while leaving room for higher-lifetime-value maintenance plans.',
      items: [
        {
          eyebrow: 'First visit',
          title: 'The Signature Consultation',
          price: '$180',
          text: 'A 45-minute aesthetic consultation with photography, skin analysis, and a tailored roadmap.',
          points: ['Redeemable toward treatment', 'Senior practitioner review', 'Personalized plan after visit'],
        },
        {
          eyebrow: 'Most chosen',
          title: 'Radiance Treatment Edit',
          price: '$690',
          text: 'A curated skin-renewal session combining resurfacing, infusion, and recovery support.',
          points: ['Custom prep and aftercare', 'Event-friendly timing', 'Optional refinement follow-up'],
        },
        {
          eyebrow: 'Ongoing care',
          title: 'The Atelier Membership',
          price: '$290/mo',
          text: 'For patients wanting maintenance, priority booking, and seasonal planning.',
          points: ['Quarterly planning', 'Preferred pricing', 'Concierge support'],
        },
      ],
    },
    faqSection: {
      id: 'faq',
      eyebrow: 'Frequently Asked',
      title: 'Answering the questions patients ask before they are ready to inquire.',
      description:
        'A refined FAQ lowers hesitation around natural-looking results, recovery, and treatment planning.',
      items: [
        {
          question: 'Will I still look like myself?',
          answer:
            'Yes. The clinic philosophy centers on subtle enhancement, harmony, and plans that preserve natural movement and expression.',
        },
        {
          question: 'How do you recommend treatments?',
          answer:
            'Recommendations start with goals, anatomy, and timeline, then move toward the least invasive path that can realistically achieve the result.',
        },
        {
          question: 'Is there downtime?',
          answer:
            'Downtime varies, but each plan is designed around lifestyle and expected recovery is explained clearly before anything is booked.',
        },
        {
          question: 'Do you offer plans for weddings or major events?',
          answer:
            'Yes. Event timelines are especially strong for brides, founders, executives, and frequent travelers needing polished results by a specific date.',
        },
      ],
    },
    ctaBanner: {
      title: 'Invite patients into a more considered kind of aesthetic care.',
      text:
        'Use this concept to position a clinic as polished, medically grounded, and deeply personal from inquiry through booking.',
      primaryCta: { label: 'Reserve Consultation', href: '#packages' },
      secondaryCta: { label: 'View Signature Treatments', href: '#treatments' },
    },
  },
  {
    slug: 'wellness-supplement-brand',
    shortName: 'Wellness Brand',
    name: 'Wellness Supplement Brand',
    category: 'DTC Wellness',
    positioning: 'Clean brand',
    summary:
      'A fresh product landing page for supplements, recovery, sleep, focus, and ingredient-led wellness routines.',
    previewGradient: 'linear-gradient(135deg, #eef5d0, #91c483 48%, #35605a)',
    theme: {
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
    },
    hero: {
      eyebrow: 'Editorial Wellness Brand',
      title:
        'A daily supplement ritual that supports calm energy, clearer mornings, and skin-first glow.',
      description:
        'A premium wellness blend with calm energy, glow support, and clean ritual appeal.',
      primaryCta: { label: 'Shop the ritual', href: '#bundles' },
      secondaryCta: { label: 'Read the ingredient story', href: '#ingredients' },
      heroVisual: {
        visualKey: 'wellness',
        badges: ['Daily ritual', 'Glow blend', 'Refill ready'],
      },
      metrics: [
        { value: '12', label: 'botanicals, minerals, and skin-supportive actives' },
        { value: '30', label: 'daily servings in each routine jar' },
        { value: '4.9/5', label: 'average rating from first-month subscribers' },
      ],
      spotlight: [
        {
          title: 'Morning clarity without the spike',
          text: 'Adaptogens, magnesium, and trace minerals support calm energy customers can actually sustain.',
        },
        {
          title: 'Ingredient list worth reading',
          text: 'No gums, no artificial sweeteners, and no filler-heavy wellness story.',
        },
        {
          title: 'Built for the modern ritual',
          text: 'One scoop, one clean habit, and a product story that fits real mornings.',
        },
      ],
    },
    cardsSection: {
      id: 'benefits',
      eyebrow: 'Product Benefits',
      title: 'Built like a beautiful product page, not a generic supplement template.',
      description:
        'The early section sells the habit, the feel, and the daily relevance before the ingredient story gets more specific.',
      items: [
        {
          eyebrow: 'Benefit 01',
          title: 'Steady energy that feels grounded',
          text: 'Cordyceps, magnesium glycinate, and mineral support frame the formula as clean energy instead of stimulant hype.',
          points: ['Calmer mornings', 'Less crash language', 'Routine-friendly positioning'],
        },
        {
          eyebrow: 'Benefit 02',
          title: 'Skin and glow support from within',
          text: 'A beauty-adjacent angle helps the product feel lifestyle-worthy without becoming superficial.',
          points: ['Hydration support', 'Glow narrative', 'Beauty-wellness crossover'],
        },
        {
          eyebrow: 'Benefit 03',
          title: 'Gentler digestion and less bloat',
          text: 'This gives the page a practical benefit story customers can recognize and repeat quickly.',
          points: ['Digestive ease', 'Morning comfort', 'Repeat-friendly benefit'],
        },
      ],
    },
    stepsSection: {
      id: 'routine',
      eyebrow: 'Routine',
      title: 'A four-step ritual that feels realistic enough to keep.',
      description:
        'Strong supplement pages show exactly how the product fits into life and what the customer should expect over time.',
      items: [
        {
          title: 'Scoop',
          text: 'Add one scoop to water, oat milk, or a smoothie base so the product feels easy to start.',
        },
        {
          title: 'Mix',
          text: 'Keep the texture and taste story clean, quick, and pleasant enough to repeat.',
        },
        {
          title: 'Layer',
          text: 'Attach the ritual to breakfast, a walk, or desk time so the habit becomes durable.',
        },
        {
          title: 'Notice',
          text: 'Set expectations around calmer mornings, digestive ease, and slower glow-based results without overpromising.',
        },
      ],
    },
    showcaseSection: {
      id: 'ingredients',
      eyebrow: 'Ingredient Story',
      title: 'Every ingredient earns its place in the formula and in the copy.',
      description:
        'Customers in this category respond to clean sourcing, recognizable actives, and a clear reason each ingredient belongs.',
      items: [
        {
          eyebrow: 'Adaptogen core',
          title: 'Ashwagandha and magnesium that support steadier daily regulation',
          text: 'This gives the formula a grounded, modern wellness logic that does not depend on caffeine.',
          points: ['Stress support framing', 'Recovery fit', 'Daily ritual relevance'],
        },
        {
          eyebrow: 'Hydration + glow',
          title: 'Skin-supportive ingredients that justify the beauty angle',
          text: 'The product feels more premium when the ingredient story speaks to visible daily payoff too.',
          points: ['Hydration support', 'Barrier-friendly story', 'Beauty-adjacent positioning'],
          accent: true,
        },
        {
          eyebrow: 'Flavor finish',
          title: 'A taste profile good enough to make the routine stick',
          text: 'The flavor story helps the supplement feel more like a ritual and less like a chore.',
          points: ['Pear + vanilla warmth', 'No sugary aftertaste', 'Repeat-order support'],
        },
      ],
    },
    testimonialsSection: {
      id: 'testimonials',
      eyebrow: 'Customer Love',
      title: 'Social proof that sounds like real routine change.',
      description:
        'These testimonials keep the page persuasive by focusing on repeatable benefits customers can imagine for themselves.',
      items: [
        {
          quote:
            'It feels like the first supplement I have actually wanted to keep using. Calm energy, zero crash, and my skin stopped looking tired by week three.',
          author: 'Hana R.',
          role: 'Creative director and subscriber',
        },
        {
          quote:
            'I replaced my second coffee with Verdant Ritual and the difference is how even everything feels. Less wired, more clear.',
          author: 'Melissa T.',
          role: 'Founder, studio owner',
        },
        {
          quote:
            'The product page hooked me with ingredients, but the taste made it stick. It feels premium without being precious.',
          author: 'Jules C.',
          role: 'Early access customer',
        },
      ],
    },
    pricingSection: {
      id: 'bundles',
      eyebrow: 'Starter Bundles',
      title: 'Simple bundles that make the first purchase feel easy.',
      description:
        'The pricing structure creates a clear entry point, a best-seller middle option, and a stronger subscription path.',
      items: [
        {
          eyebrow: 'Starter',
          title: '30-Day Reset',
          price: '$38',
          text: 'A single jar for first-time customers who want to test the ritual before committing.',
          points: ['30 servings', 'Vanilla pear flavor', 'Quick-start guide', 'Ships in 48 hours'],
        },
        {
          eyebrow: 'Most Popular',
          title: 'Daily Glow Duo',
          price: '$72',
          text: 'Two jars with better value for customers building consistency or sharing one with a partner.',
          points: ['60 servings', 'Save 12%', 'Glass canister + refill pouch', 'Free shipping'],
        },
        {
          eyebrow: 'Subscriber Favorite',
          title: '90-Day Ritual Plan',
          price: '$102',
          text: 'The best bundle for visible habit-building and stronger retention.',
          points: ['Three-jar supply', 'Save 18%', 'Subscriber-only drops', 'Skip or swap anytime'],
        },
      ],
    },
    faqSection: {
      id: 'faq',
      eyebrow: 'FAQ',
      title: 'Answer the buying questions before they slow down the checkout.',
      description:
        'Customers in this category want reassurance on routine, effects, ingredients, and flexibility before ordering.',
      items: [
        {
          question: 'When should I take it?',
          answer:
            'Most customers take it in the morning with breakfast or in place of a second coffee, though it can also work as a calm afternoon reset.',
        },
        {
          question: 'Is it a greens powder or a beauty supplement?',
          answer:
            'It is intentionally both: a daily wellness blend with adaptogens, minerals, digestion support, and skin-forward ingredients.',
        },
        {
          question: 'Does it contain caffeine?',
          answer:
            'No added caffeine. The formula is positioned around adaptogens and minerals rather than a stimulant-heavy approach.',
        },
        {
          question: 'Can I subscribe and pause later?',
          answer:
            'Yes. Subscribers can skip, pause, or update shipments at any time, which keeps the offer friendly for first-time buyers.',
        },
      ],
    },
    ctaBanner: {
      title: 'Launch a wellness product page that feels equal parts trust, beauty, and conversion.',
      text:
        'Use this concept for supplements, functional powders, collagen blends, adaptogen products, or ingestible beauty brands.',
      primaryCta: { label: 'Start with this concept', href: '#bundles' },
      secondaryCta: { label: 'Review ingredients', href: '#ingredients' },
    },
  },
  {
    slug: 'womens-health-femtech',
    shortName: "Women's Health",
    name: "Women's Health / FemTech",
    category: 'HealthTech',
    positioning: 'Trust-driven',
    summary:
      'A supportive, science-backed concept for hormonal wellness, cycle care, consultations, and modern FemTech offers.',
    previewGradient: 'linear-gradient(135deg, #f9d8d5, #d88c9a 54%, #6f4159)',
    theme: {
      accent: '#7f5168',
      'accent-surface': 'rgba(92, 48, 71, 0.94)',
      'accent-text': '#fff6f0',
      'button-primary': '#7f5168',
      'button-primary-text': '#fff8f3',
      'cta-gradient': 'linear-gradient(135deg, #7f5168, #c98b84 52%, #a97a73)',
      'cta-text': '#fff8f3',
      'hero-border': 'rgba(127, 81, 104, 0.14)',
      'hero-surface': 'rgba(255, 248, 243, 0.74)',
      'highlight-surface':
        'linear-gradient(180deg, rgba(117, 72, 96, 0.95), rgba(164, 112, 109, 0.92))',
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
    },
    hero: {
      eyebrow: "Women's Health / FemTech",
      title: 'Supportive care for every transition, with clarity you can trust.',
      description: 'A calm, science-backed platform for tracking, guidance, and trusted care.',
      primaryCta: { label: 'Start Your Care Plan', href: '#pricing' },
      secondaryCta: { label: 'Explore Care Pathways', href: '#pillars' },
      heroVisual: {
        visualKey: 'womensHealth',
        badges: ['Private tracking', 'Care paths', 'Clinician-ready'],
      },
      metrics: [
        { value: '24/7', label: 'private symptom tracking' },
        { value: '5', label: 'guided life-stage pathways' },
        { value: '92%', label: 'members feel more prepared for visits' },
      ],
      spotlight: [
        {
          title: 'Respectful By Design',
          text: 'Gentle language, thoughtful pacing, and a private member journey that lowers friction and builds confidence.',
        },
        {
          title: 'Clinically Aligned',
          text: 'Education and escalation points are designed to complement clinician care, not compete with it.',
        },
        {
          title: 'Made For Real Life',
          text: 'Short weekly actions, trend summaries, and support circles fit around work, family, and recovery.',
        },
      ],
    },
    cardsSection: {
      id: 'pillars',
      eyebrow: 'Care Pillars',
      title: 'A trust-first experience grounded in listening, evidence, and continuity.',
      description:
        'The product experience is designed to feel safe, modern, and medically respectful while still remaining warm and approachable.',
      items: [
        {
          eyebrow: 'Whole-Person Care',
          title: 'Hormone-aware support that listens before it recommends',
          text: 'Every plan starts with symptoms, goals, cycle stage, and lifestyle context so care feels personal instead of generic.',
          points: ['Cycle, fertility, postpartum, and menopause pathways', 'Food, sleep, mood, and stress context'],
        },
        {
          eyebrow: 'Evidence Led',
          title: 'Clear guidance rooted in clinical protocols and education',
          text: 'Members see what is being tracked, why it matters, and when to escalate to clinician review.',
          points: ['Evidence-based flows', 'Plain-language explanations', 'Trust-building framing'],
        },
        {
          eyebrow: 'Continuous Care',
          title: 'Check-ins that keep momentum without adding pressure',
          text: 'Gentle prompts, symptom trends, and fast follow-up help members stay engaged between appointments.',
          points: ['Weekly reflections', 'Secure messaging', 'Progress summaries'],
        },
      ],
    },
    stepsSection: {
      id: 'program',
      eyebrow: 'Guided Program',
      title: 'A clear path from first intake to confident next steps.',
      description:
        'The member journey stays simple: understand the current phase, recommend the right pathway, and support progress with calm accountability.',
      items: [
        {
          title: 'Start with a guided intake',
          text: 'A private onboarding captures symptoms, history, and goals in minutes so members feel seen from day one.',
        },
        {
          title: 'Match to a care pathway',
          text: 'The platform recommends the right track for cycle health, fertility, postpartum recovery, or menopause support.',
        },
        {
          title: 'Follow a structured weekly plan',
          text: 'Members receive education, symptom tracking, and habit steps that adapt as needs change.',
        },
        {
          title: 'Review with clinicians when needed',
          text: 'Escalation points flag concerns early and make it easier to book expert support or adjust the plan.',
        },
      ],
    },
    showcaseSection: {
      id: 'support',
      eyebrow: 'Support System',
      title: 'Designed for both personal reassurance and clinical confidence.',
      description:
        'The platform balances self-guided care with expert oversight, community encouragement, and structured follow-up.',
      items: [
        {
          eyebrow: 'Clinician Layer',
          title: 'Built for trusted review, not information overload',
          text: 'Care teams can review red flags, monitor adherence, and offer next-step guidance within one respectful member journey.',
          points: ['Symptom escalation notes', 'Visit preparation', 'Follow-up summaries'],
          accent: true,
        },
        {
          eyebrow: 'Community Layer',
          title: 'Support circles designed for encouragement and privacy',
          text: 'Members can join moderated groups without the noise or exposure of public social platforms.',
          points: ['Moderated peer check-ins', 'Topic-based support', 'Expert explainers'],
        },
        {
          eyebrow: 'Member Experience',
          title: 'Small rituals that make care feel human',
          text: 'From reminders to reflection prompts, each touchpoint is designed to lower anxiety and build confidence over time.',
          points: ['Mood-aware nudges', 'Progress snapshots', 'Milestone celebrations'],
        },
      ],
    },
    testimonialsSection: {
      id: 'testimonials',
      eyebrow: 'Member Voices',
      title: 'A tone of care people can feel immediately.',
      description:
        'Testimonials help this concept sell because the trust signal is emotional as much as visual.',
      items: [
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
      ],
    },
    pricingSection: {
      id: 'pricing',
      eyebrow: 'Membership',
      title: 'Simple plans for members and clinics.',
      description:
        'Pricing stays clean and flexible so the concept can be sold as a consumer wellness subscription or a clinic-support platform.',
      items: [
        {
          eyebrow: 'Essential',
          title: 'Guided Care',
          price: '$29/mo',
          text: 'Structured tracking, weekly education, and a dependable plan between appointments.',
          points: ['Personalized tracking', 'Weekly care plan', 'Support circles'],
        },
        {
          eyebrow: 'Most Chosen',
          title: 'Care Plus',
          price: '$79/mo',
          text: 'Deeper coaching, progress reviews, and stronger continuity through major life stages.',
          points: ['Everything in Guided Care', 'Monthly expert review', 'Priority messaging'],
        },
        {
          eyebrow: 'Practice Ready',
          title: 'Clinic Partner',
          price: 'Custom',
          text: 'For teams offering a calmer digital experience alongside fertility, OB-GYN, or menopause services.',
          points: ['Branded journey', 'Clinician workflows', 'Onboarding and reporting'],
        },
      ],
    },
    faqSection: {
      id: 'faq',
      eyebrow: 'FAQ',
      title: 'Answering the questions that matter most.',
      description:
        'Clear answers reinforce the brand’s responsible, science-backed tone while keeping the experience welcoming.',
      items: [
        {
          question: 'Is this a replacement for medical care?',
          answer:
            'No. It supports education, tracking, and continuity between appointments while encouraging clinician review when symptoms require it.',
        },
        {
          question: 'Who is the program best for?',
          answer:
            'It works well for people seeking guidance around cycle health, fertility, postpartum recovery, perimenopause, menopause, and long-term symptom tracking.',
        },
        {
          question: 'How does clinician support work?',
          answer:
            'Members can follow guided care independently, while partner practices and higher plans include review touchpoints and follow-up tools.',
        },
        {
          question: 'Can members join private support communities?',
          answer:
            'Yes. Members can opt into moderated circles centered on shared experiences, with privacy and respectful facilitation built in.',
        },
      ],
    },
    ctaBanner: {
      title: 'Care that feels calm, personal, and genuinely supported.',
      text:
        "Whether this concept is positioned as a FemTech startup, a women's wellness membership, or a clinic companion service, it is built to communicate trust quickly.",
      primaryCta: { label: 'Book A Demo', href: '#pillars' },
      secondaryCta: { label: 'View Memberships', href: '#pricing' },
    },
  },
  {
    slug: 'creator-studio',
    shortName: 'Creator Studio',
    name: 'Creator Studio / Personal Branding Agency',
    category: 'Creative Service',
    positioning: 'Bold creative',
    summary:
      'An energetic landing page for short-form teams, podcast producers, and social content growth services.',
    previewGradient: 'linear-gradient(135deg, #1f1017, #d83f5f 54%, #f4c38d)',
    theme: {
      accent: '#ff5c7a',
      'accent-surface':
        'linear-gradient(180deg, rgba(255, 92, 122, 0.2), rgba(23, 17, 15, 0.96))',
      'accent-text': '#fff6ef',
      'cta-gradient': 'linear-gradient(135deg, #ff5c7a 0%, #b11236 52%, #181110 100%)',
      'cta-text': '#fff6ef',
      'hero-border': 'rgba(255, 244, 233, 0.12)',
      'hero-surface':
        'linear-gradient(180deg, rgba(249, 233, 215, 0.08), rgba(255, 255, 255, 0.02))',
      'highlight-surface':
        'linear-gradient(180deg, rgba(249, 233, 215, 0.18), rgba(255, 92, 122, 0.12))',
      'highlight-text': '#fff6ef',
      'page-bg': '#16100f',
      'page-bg-secondary': '#251816',
      'page-muted': 'rgba(255, 238, 225, 0.72)',
      'page-orb-1': 'rgba(255, 92, 122, 0.22)',
      'page-orb-2': 'rgba(245, 214, 185, 0.14)',
      'page-pattern':
        'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      'page-text': '#fff6ef',
    },
    hero: {
      eyebrow: 'Creator Studio / Personal Branding Agency',
      title: 'Content systems that make founder-led brands feel current, distinct, and worth following.',
      description: 'High-energy content systems for founders and modern brands.',
      primaryCta: { label: 'Book A Concept Sprint', href: '#packages' },
      secondaryCta: { label: 'See The Workflow', href: '#workflow' },
      heroVisual: {
        visualKey: 'creator',
        badges: ['Hook-first content', 'Founder-led brands', 'Multi-platform'],
      },
      metrics: [
        { value: '120M+', label: 'views influenced across launches' },
        { value: '48 hrs', label: 'typical concept-to-shoot turnaround' },
        { value: '4', label: 'core content pillars per brand system' },
      ],
      spotlight: [
        {
          title: 'Built for Reels + TikTok + LinkedIn',
          text: 'The page positions the studio around platform-native storytelling, not generic social media management.',
        },
        {
          title: 'Taste with speed',
          text: 'Clients buy both visual currentness and a tighter brand narrative at the same time.',
        },
        {
          title: 'Offer-led creativity',
          text: 'Every content system stays connected to launches, authority, and revenue goals.',
        },
      ],
    },
    cardsSection: {
      id: 'services',
      eyebrow: 'Service Offers',
      title: 'What we build for founder-led brands',
      description:
        'Each offer is designed to tighten the brand story, accelerate production, and keep the content machine aligned with revenue goals.',
      items: [
        {
          eyebrow: 'Positioning',
          title: 'Personal brand strategy',
          text: 'Sharpen the point of view, audience magnet, and signature content themes before the first camera rolls.',
          points: ['Messaging architecture', 'Audience heatmap', 'Offer-angle playbook'],
        },
        {
          eyebrow: 'Production',
          title: 'Short-form content engine',
          text: 'A studio-style system for filming Reels, TikToks, founder POV clips, and launch assets in one sprint.',
          points: ['Shoot-day direction', 'Hook-first scripting', 'Platform-native editing'],
        },
        {
          eyebrow: 'Authority',
          title: 'Executive thought leadership',
          text: 'Turn expertise into a repeatable content series that grows trust with customers, media, and high-value partners.',
          points: ['Interview-led episodes', 'Carousel frameworks', 'Newsletter tie-ins'],
        },
      ],
    },
    stepsSection: {
      id: 'workflow',
      eyebrow: 'Workflow',
      title: 'A production process that moves quickly without losing taste.',
      description:
        'The strongest creator offers feel fast on the surface because the system underneath them is tightly structured.',
      items: [
        {
          title: 'Decode the brand',
          text: 'Audit the current presence, strongest ideas, competitors, and the attention gaps the brand can own.',
        },
        {
          title: 'Build the hook board',
          text: 'Map signature pillars, talking points, CTAs, and visual references into one usable content system.',
        },
        {
          title: 'Direct the shoot',
          text: 'Run the filming process with a clear shot list, styling notes, and on-camera coaching.',
        },
        {
          title: 'Edit for the feed',
          text: 'Cut multiple formats and tune the pacing so the content feels native instead of overproduced.',
        },
      ],
    },
    showcaseSection: {
      id: 'examples',
      eyebrow: 'Examples + Social Proof',
      title: 'Content formats that win attention and look current.',
      description:
        'The page shows how the studio balances style, clarity, and momentum across different content outputs.',
      items: [
        {
          eyebrow: 'Launch reels',
          title: 'Hook-first video assets built to stop the scroll',
          text: 'Short-form assets are framed around conversion and personality, not just reach.',
          points: ['Rapid hook testing', 'Offer-led scripting', 'Visual pacing'],
        },
        {
          eyebrow: 'Founder narrative',
          title: 'Thought leadership that feels recognizable instead of generic',
          text: 'This helps founders build a memorable voice across video, carousels, and text-led content.',
          points: ['Founder POV themes', 'Cross-platform reuse', 'Authority positioning'],
          accent: true,
        },
        {
          eyebrow: 'Campaign support',
          title: 'Launch content that makes the brand easier to forward',
          text: 'Use the same system to support product drops, podcasts, events, or personal-brand relaunches.',
          points: ['Launch sequence mapping', 'Asset variety', 'Momentum across formats'],
        },
      ],
    },
    testimonialsSection: {
      id: 'testimonials',
      eyebrow: 'Testimonials',
      title: 'Clients stop blending in once the system clicks.',
      description:
        'The best proof in this category is that the content starts looking distinct, current, and easier to repeat.',
      items: [
        {
          quote:
            'They turned our scattered ideas into a real content identity. People started recognizing the brand voice almost immediately.',
          author: 'Sara N.',
          role: 'Founder, education brand',
        },
        {
          quote:
            'The shoot process was fast, clear, and surprisingly fun. We left with far more usable content than we expected.',
          author: 'Milo K.',
          role: 'Startup operator',
        },
        {
          quote:
            'What stood out most was the strategy behind the style. The content looked great, but it also moved the launch.',
          author: 'Jenna P.',
          role: 'Creator brand client',
        },
      ],
    },
    pricingSection: {
      id: 'packages',
      eyebrow: 'Packages',
      title: 'Choose the level of production momentum you need.',
      description:
        'These packages give founders a clearer buying path whether they need a sharp burst or an always-on system.',
      items: [
        {
          eyebrow: 'Sprint',
          title: 'Concept Sprint',
          price: '$1,200',
          text: 'A fast strategy and content-direction engagement for founders who need sharper messaging before production.',
          points: ['Hook board', 'Messaging angles', 'Short-form roadmap'],
        },
        {
          eyebrow: 'Most chosen',
          title: 'Monthly Content Engine',
          price: '$3,400/mo',
          text: 'An ongoing creator-style production system for teams that want consistent brand momentum.',
          points: ['Shoot planning', 'Editing support', 'Channel-ready outputs'],
        },
        {
          eyebrow: 'Launch',
          title: 'Launch Week Takeover',
          price: 'Custom',
          text: 'A campaign-focused content push for drops, podcasts, events, or relaunches.',
          points: ['Launch assets', 'Story sequence map', 'Short-term high-intensity support'],
        },
      ],
    },
    faqSection: {
      id: 'faq',
      eyebrow: 'FAQ',
      title: 'What founders usually ask before we start.',
      description:
        'These answers help explain how the studio model works and why this kind of content system sells.',
      items: [
        {
          question: 'Do you only work with founders on camera?',
          answer:
            'No. The system can support founders, executives, or brand voices, but it is especially strong when there is a recognizable person at the center.',
        },
        {
          question: 'Can this support launches as well as ongoing content?',
          answer:
            'Yes. The page is intentionally structured for both monthly content engines and sharper launch campaigns.',
        },
        {
          question: 'Why does this concept convert well?',
          answer:
            'Because it sells both taste and structure. Clients want content that feels current, but they also need a system that can keep producing it.',
        },
        {
          question: 'Is this only for social media management agencies?',
          answer:
            'No. It is strongest for creator studios, personal-brand agencies, podcast producers, and social-first brand teams.',
        },
      ],
    },
    ctaBanner: {
      title: 'Ready to make your brand the one people forward?',
      text:
        'Use this concept for creator studios, founder-content agencies, and personal-brand services that need sharper differentiation and a clearer offer.',
      primaryCta: { label: 'Start The Sprint', href: '#packages' },
      secondaryCta: { label: 'View The Workflow', href: '#workflow' },
    },
  },
  {
    slug: 'home-cleaning-service',
    shortName: 'Cleaning',
    name: 'Home Cleaning Service',
    category: 'Local Service',
    positioning: 'Easy-sell',
    summary:
      'A bright, conversion-focused local service page with service tiers, trust badges, and fast booking prompts.',
    previewGradient: 'linear-gradient(135deg, #dff4ff, #7ed3ff 48%, #1e7ea6)',
    theme: {
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
      'highlight-surface':
        'linear-gradient(160deg, rgba(31, 137, 214, 0.96), rgba(37, 179, 110, 0.92))',
      'highlight-text': '#f8feff',
      accent: '#25b36e',
      'accent-surface': 'linear-gradient(160deg, #1282cf, #27b56f)',
      'accent-text': '#f8feff',
      'cta-gradient': 'linear-gradient(135deg, #1784d1, #27b56f)',
      'cta-text': '#f8feff',
    },
    hero: {
      eyebrow: 'Home Cleaning Service',
      title: 'A brighter, cleaner home without the weekend work.',
      description: 'Easy booking, friendly local cleaners, and a home that feels reset.',
      primaryCta: { label: 'Book a cleaning', href: '#pricing' },
      secondaryCta: { label: 'See what is included', href: '#services' },
      heroVisual: {
        visualKey: 'cleaning',
        badges: ['Easy booking', 'Insured team', 'Recurring friendly'],
      },
      metrics: [
        { value: '4.9/5', label: 'average rating from repeat clients' },
        { value: '200+', label: 'homes cleaned each month' },
        { value: '24 hrs', label: 're-clean promise response window' },
      ],
      spotlight: [
        {
          title: 'Easy to book',
          text: 'Get a quote in minutes, choose your time slot, and confirm online or by phone.',
        },
        {
          title: 'All supplies included',
          text: 'Teams arrive with fresh tools, eco-conscious products, and a clear room-by-room checklist.',
        },
        {
          title: 'Local and trusted',
          text: 'Background-checked cleaners, insured visits, and friendly updates before arrival.',
        },
      ],
    },
    cardsSection: {
      id: 'services',
      eyebrow: 'What we clean',
      title: 'Service options customers understand at a glance.',
      description:
        'This page is built for fast decision-making: clear packages, easy add-ons, and the reassuring details that help local-service leads convert.',
      items: [
        {
          eyebrow: 'Routine',
          title: 'Routine home clean',
          text: 'For weekly, biweekly, or monthly upkeep that keeps the whole home guest-ready.',
          points: ['Kitchen reset', 'Bathroom sanitizing', 'Dusting and floors'],
        },
        {
          eyebrow: 'Deep clean',
          title: 'Deep clean reset',
          text: 'Ideal for first visits, seasonal refreshes, and homes that need more detailed attention.',
          points: ['Baseboards and trim', 'Buildup focus', 'Longer checklist'],
        },
        {
          eyebrow: 'Transition',
          title: 'Move-in / move-out',
          text: 'A polished handoff for tenants, landlords, and homeowners preparing for the next chapter.',
          points: ['Empty-room cleaning', 'Appliance attention', 'Handoff-ready finish'],
        },
      ],
    },
    stepsSection: {
      id: 'booking',
      eyebrow: 'How booking works',
      title: 'A simple process that feels low-effort from the first click.',
      description:
        'Great local-service landing pages remove friction. This flow makes pricing, scheduling, and expectations easy to understand.',
      items: [
        {
          title: 'Choose the clean type',
          text: 'Start with the right service tier so expectations feel clear immediately.',
        },
        {
          title: 'Pick the time slot',
          text: 'Use simple booking language and low-friction scheduling to move quickly toward confirmation.',
        },
        {
          title: 'Get a visit reminder',
          text: 'Friendly updates help customers feel prepared and reduce the uncertainty of letting someone in.',
        },
        {
          title: 'Come home to the reset',
          text: 'The service promise ends with visible results, not vague task completion.',
        },
      ],
    },
    showcaseSection: {
      id: 'trust',
      eyebrow: 'Why families choose us',
      title: 'Trust-first details that help customers feel comfortable inviting you in.',
      description:
        'The strongest home-cleaning pages balance practical service information with visible reassurance around reliability and follow-through.',
      items: [
        {
          eyebrow: 'Reliability',
          title: 'Show up on time and follow a repeatable checklist',
          text: 'Customers want consistency as much as sparkle. This framing sells both.',
          points: ['Arrival updates', 'Clear checklist', 'Reliable finish'],
        },
        {
          eyebrow: 'Safety',
          title: 'Build comfort around who is entering the home',
          text: 'Insurance, background checks, and respectful communication reduce the biggest local-service hesitation quickly.',
          points: ['Insured visits', 'Background-checked team', 'Warm professional tone'],
          accent: true,
        },
        {
          eyebrow: 'Retention',
          title: 'Make repeat service feel like the easiest next decision',
          text: 'The page is especially strong for businesses that want recurring bookings, not just one-time leads.',
          points: ['Recurring plan fit', 'Add-on upsells', 'Customer rebooking'],
        },
      ],
    },
    testimonialsSection: {
      id: 'testimonials',
      eyebrow: 'Happy clients',
      title: 'Testimonials that speak to convenience, quality, and peace of mind.',
      description:
        'Realistic reviews help this category sell because customers want to know the service is punctual, thorough, and worth repeating.',
      items: [
        {
          quote:
            'The booking process was easy, the cleaner arrived exactly when expected, and the house felt reset in the best possible way.',
          author: 'Jordan L.',
          role: 'Recurring client',
        },
        {
          quote:
            'I was nervous hiring help for the first time, but the communication was warm and professional from the start.',
          author: 'Maria P.',
          role: 'First-time customer',
        },
        {
          quote:
            'It is the kind of service that gives you your Saturday back and still makes the house feel cared for.',
          author: 'Dana K.',
          role: 'Biweekly client',
        },
      ],
    },
    pricingSection: {
      id: 'pricing',
      eyebrow: 'Pricing',
      title: 'Easy service tiers for first-time visitors and recurring clients.',
      description:
        'These sample numbers show how a cleaning brand can present clear, approachable options without feeling cheap.',
      items: [
        {
          eyebrow: 'Starter',
          title: 'Apartment Refresh',
          price: 'From $109',
          text: 'A simple option for smaller homes or first-time customers who want a lighter reset.',
          points: ['Kitchen + bath focus', 'Dusting and floors', 'Best for compact spaces'],
        },
        {
          eyebrow: 'Most chosen',
          title: 'Whole Home Standard',
          price: 'From $169',
          text: 'A balanced recurring-clean package for family homes and steady upkeep.',
          points: ['Room-by-room checklist', 'Common-area reset', 'Best for repeat clients'],
        },
        {
          eyebrow: 'Deep service',
          title: 'Move or Deep Clean',
          price: 'From $259',
          text: 'A longer appointment for first visits, handoffs, or homes needing extra detail attention.',
          points: ['Expanded checklist', 'Longer appointment', 'High-clarity quote path'],
        },
      ],
    },
    faqSection: {
      id: 'faq',
      eyebrow: 'Questions',
      title: 'Quick answers that remove the last few objections.',
      description:
        'A short FAQ keeps the page helpful on mobile and gives potential customers confidence before they contact the business.',
      items: [
        {
          question: 'Do I need to provide supplies?',
          answer:
            'No. The team arrives with the products and tools needed for the appointment unless a customer has a specific request.',
        },
        {
          question: 'Can I book recurring service?',
          answer:
            'Yes. The structure is especially strong for weekly, biweekly, or monthly recurring bookings.',
        },
        {
          question: 'What if I am not home during the clean?',
          answer:
            'The page supports both at-home and away-from-home bookings with clear communication before and after the visit.',
        },
        {
          question: 'Is this concept good for local ads?',
          answer:
            'Yes. It is built for local conversion with quick service understanding, trust signals, and fast booking CTAs.',
        },
      ],
    },
    ctaBanner: {
      title: 'Ready to turn this into a local lead machine?',
      text:
        'Use this concept for independent cleaners, growing home-service teams, or franchise-style cleaning offers that need quicker trust and easier booking.',
      primaryCta: { label: 'Request your quote', href: '#pricing' },
      secondaryCta: { label: 'Call for availability', href: 'tel:+15550123456' },
    },
  },
  {
    slug: 'landscaping-home-improvement',
    shortName: 'Landscaping',
    name: 'Landscaping / Home Improvement',
    category: 'Local Service',
    positioning: 'Grounded premium',
    summary:
      'A sturdy, outdoorsy landing page for landscaping, renovations, and project-led home improvement businesses.',
    previewGradient: 'linear-gradient(135deg, #24311f, #5d7c47 52%, #d2b48c)',
    theme: {
      'page-bg': '#f1eee8',
      'page-bg-secondary': '#e5ddd0',
      'page-text': '#243028',
      'page-muted': 'rgba(36, 48, 40, 0.74)',
      accent: '#7d5f44',
      'page-orb-1': 'rgba(92, 117, 88, 0.2)',
      'page-orb-2': 'rgba(153, 113, 79, 0.16)',
      'hero-surface': 'rgba(249, 246, 241, 0.8)',
      'hero-border': 'rgba(54, 68, 58, 0.12)',
      'highlight-surface':
        'linear-gradient(170deg, rgba(56, 78, 62, 0.97), rgba(84, 99, 76, 0.95))',
      'highlight-text': '#f5f1e9',
      'accent-surface':
        'linear-gradient(170deg, rgba(76, 94, 70, 0.98), rgba(123, 94, 69, 0.96))',
      'accent-text': '#243028',
      'cta-gradient': 'linear-gradient(135deg, #4b644a, #8e684b)',
      'cta-text': '#f8f4ee',
      'page-heading-font': "'Fraunces', 'Georgia', serif",
      'page-title-max-width': '14.5ch',
      'page-pattern':
        'radial-gradient(circle at 18% 18%, rgba(255,255,255,0.3) 0, transparent 18%), linear-gradient(135deg, rgba(75,100,74,0.08), transparent 34%), linear-gradient(0deg, rgba(141,114,86,0.05), rgba(141,114,86,0.05))',
    },
    hero: {
      eyebrow: 'Landscaping & Home Improvement',
      title:
        'Grounded outdoor design-build work that makes a property feel more finished, functional, and valuable.',
      description:
        'Outdoor design-build work with craft, structure, and curb appeal.',
      primaryCta: { label: 'Request A Project Consultation', href: '#packages' },
      secondaryCta: { label: 'Explore Services', href: '#services' },
      heroVisual: {
        visualKey: 'landscaping',
        badges: ['Design-build', 'Curb appeal', 'Outdoor living'],
      },
      metrics: [
        { value: '18 yrs', label: 'craft-led outdoor renovation experience' },
        { value: '140+', label: 'design-build projects delivered' },
        { value: '6-10 wks', label: 'typical patio and landscape timeline' },
      ],
      spotlight: [
        {
          title: 'Craftsmanship first',
          text: 'Landscape builds are shaped around drainage, durability, planting rhythm, and outdoor living that ages beautifully.',
        },
        {
          title: 'Designed to be lived in',
          text: 'From front-yard curb appeal to backyard entertaining zones, every plan balances utility and atmosphere.',
        },
        {
          title: 'Project clarity',
          text: 'The concept is built to justify premium pricing through trust, process, and visible end results.',
        },
      ],
    },
    cardsSection: {
      id: 'services',
      eyebrow: 'Project Services',
      title: 'Service blocks that quickly show what the team can design, build, and improve.',
      description:
        'These offers make the business feel capable across both visible finish work and the systems protecting the investment.',
      items: [
        {
          eyebrow: 'Outdoor living',
          title: 'Patios, pergolas, and gathering spaces',
          text: 'Comfortable outdoor rooms with layered hardscape, lighting, and furnishing zones tailored to the property.',
          points: ['Patio layouts', 'Pergolas and privacy screens', 'Lighting plans'],
        },
        {
          eyebrow: 'Front-of-home impact',
          title: 'Entry, driveway, and curb appeal upgrades',
          text: 'Projects that improve the arrival experience with cleaner lines, better circulation, and stronger materials.',
          points: ['Walkways and steps', 'Driveway borders', 'Low-maintenance planting'],
        },
        {
          eyebrow: 'Landscape systems',
          title: 'Planting, irrigation, and drainage',
          text: 'A dependable foundation that keeps outdoor spaces healthy through changing seasons.',
          points: ['Plant palettes', 'Irrigation planning', 'Water management corrections'],
        },
      ],
    },
    stepsSection: {
      id: 'process',
      eyebrow: 'Design-Build Process',
      title: 'A homeowner-friendly process that keeps larger projects feeling clear and well managed.',
      description:
        'In this category, process is part of the product. Strong structure helps justify premium pricing and reduces hesitation.',
      items: [
        {
          title: 'Site walk and vision mapping',
          text: 'Review how the property works today, what is not performing, and how the client wants to live in the space.',
        },
        {
          title: 'Design the transformation',
          text: 'Translate goals into materials, planting, layout, drainage, and construction logic the homeowner can understand.',
        },
        {
          title: 'Build with coordination',
          text: 'Manage crews, schedules, and details so the project feels organized instead of stressful.',
        },
        {
          title: 'Deliver the finished environment',
          text: 'Close with a space that feels better to use, easier to maintain, and visibly more complete.',
        },
      ],
    },
    showcaseSection: {
      id: 'results',
      eyebrow: 'Showcase & Results',
      title: 'Transformation stories that sell both beauty and practical improvement.',
      description:
        'The most convincing outdoor-project pages show not just what changed visually, but how the property became easier to use and maintain.',
      items: [
        {
          eyebrow: 'Entertaining',
          title: 'Backyards that work harder and feel more inviting',
          text: 'Use this angle to sell patios, lighting, and layout improvements that make a property more livable.',
          points: ['Gathering space', 'Flow and comfort', 'Evening atmosphere'],
        },
        {
          eyebrow: 'Property value',
          title: 'Upgrades that improve both perception and function',
          text: 'The messaging helps homeowners see the work as an investment, not just a visual indulgence.',
          points: ['Curb appeal', 'Long-term durability', 'Higher-value finish'],
          accent: true,
        },
        {
          eyebrow: 'Maintenance',
          title: 'Better systems behind the beauty',
          text: 'Drainage, irrigation, grading, and plant planning make the transformation feel more trustworthy.',
          points: ['Healthier landscape', 'Reduced upkeep stress', 'Stronger craftsmanship story'],
        },
      ],
    },
    testimonialsSection: {
      id: 'testimonials',
      eyebrow: 'Client Feedback',
      title: 'Testimonials that reinforce professionalism, communication, and craftsmanship.',
      description:
        'Homeowners buying larger outdoor work want reassurance that the team is organized, respectful, and capable from start to finish.',
      items: [
        {
          quote:
            'The final result was beautiful, but what really sold us was how clearly the team managed every step of the project.',
          author: 'Tara and Ben',
          role: 'Patio and landscape clients',
        },
        {
          quote:
            'They helped us think beyond planting and gave us a backyard that actually works for the way we live now.',
          author: 'Melissa H.',
          role: 'Outdoor living client',
        },
        {
          quote:
            'Communication stayed strong, the build was clean, and the finished space looks like it belongs with the house.',
          author: 'Andrew P.',
          role: 'Front-yard renovation client',
        },
      ],
    },
    pricingSection: {
      id: 'packages',
      eyebrow: 'Project Package Tiers',
      title: 'Pricing examples that help the offer feel real without boxing the business in.',
      description:
        'These tiers support smaller estimates and bigger transformation conversations without making everything feel custom from the first click.',
      items: [
        {
          eyebrow: 'Consultation',
          title: 'Site + Vision Session',
          price: '$250',
          text: 'A paid consult to review goals, site constraints, and the strongest upgrade direction.',
          points: ['On-site review', 'Priority recommendations', 'Next-step roadmap'],
        },
        {
          eyebrow: 'Most chosen',
          title: 'Signature Outdoor Upgrade',
          price: 'From $7,500',
          text: 'A design-build package for patios, planting, lighting, and functional layout improvements.',
          points: ['Design direction', 'Materials planning', 'Managed build process'],
        },
        {
          eyebrow: 'Transformation',
          title: 'Full Property Refresh',
          price: 'Custom',
          text: 'A larger-scope engagement for clients ready to rethink how the property looks and functions.',
          points: ['Multi-zone planning', 'System upgrades', 'Premium project oversight'],
        },
      ],
    },
    faqSection: {
      id: 'faq',
      eyebrow: 'Frequently Asked',
      title: 'Clear answers before the first consultation call.',
      description:
        'A focused FAQ helps reduce uncertainty around scope, fit, and the kind of projects the company is best positioned to deliver.',
      items: [
        {
          question: 'Can this work for both landscaping and home-improvement services?',
          answer:
            'Yes. It is especially strong for design-build companies that combine visible aesthetic upgrades with practical exterior improvements.',
        },
        {
          question: 'Does it fit premium pricing?',
          answer:
            'Very well. The structure is built to justify premium pricing through process clarity, materials, and strong transformation framing.',
        },
        {
          question: 'Why does this page sell well?',
          answer:
            'Because homeowners buying larger exterior projects need reassurance around both beauty and project management, and this concept addresses both quickly.',
        },
        {
          question: 'Can it support smaller service leads too?',
          answer:
            'Yes. The tiering can still create a path for smaller projects while protecting the premium positioning of larger work.',
        },
      ],
    },
    ctaBanner: {
      title: 'Turn outdoor projects into a premium, easy-to-trust offer.',
      text:
        'Use this concept to present a landscaping or home-improvement business as experienced, detail-oriented, and ready to deliver results that feel both beautiful and built for real life.',
      primaryCta: { label: 'Start Your Project', href: '#packages' },
      secondaryCta: { label: 'View Services', href: '#services' },
    },
  },
  {
    slug: 'pet-grooming-care',
    shortName: 'Pet Care',
    name: 'Pet Grooming / Pet Care Brand',
    category: 'Pet Business',
    positioning: 'Playful commercial',
    summary:
      'A cheerful but polished concept for grooming salons, pet wellness subscriptions, and premium care products.',
    previewGradient: 'linear-gradient(135deg, #fff0db, #ffb48c 48%, #2c8b84)',
    theme: {
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
      'highlight-surface':
        'linear-gradient(160deg, rgba(36, 141, 140, 0.96), rgba(255, 171, 139, 0.94))',
      'highlight-text': '#184445',
      accent: '#ef8f68',
      'accent-surface': 'linear-gradient(160deg, #269693, #f3a177)',
      'accent-text': '#184445',
      'cta-gradient': 'linear-gradient(135deg, #23908d, #f2a578)',
      'cta-text': '#fffefb',
    },
    hero: {
      eyebrow: 'Pet Grooming & Care',
      title: 'A happier grooming day for pets and a more polished experience for their people.',
      description: 'Playful premium pet care that feels easy to trust and easy to book.',
      primaryCta: { label: 'Book a groom', href: '#plans' },
      secondaryCta: { label: 'Explore services', href: '#services' },
      heroVisual: {
        visualKey: 'pet',
        badges: ['Gentle handling', 'Recurring care', 'Loved by pet parents'],
      },
      metrics: [
        { value: '4.9/5', label: 'average rating from returning pet parents' },
        { value: '1,200+', label: 'grooming visits completed each year' },
        { value: '98%', label: 'pets rebook within the same season' },
      ],
      spotlight: [
        {
          title: 'Gentle handling first',
          text: 'Appointments are paced around comfort, communication, and stress-aware care for puppies, seniors, and anxious pets.',
        },
        {
          title: 'Spa polish, practical care',
          text: 'Every groom balances a premium finish with coat, skin, nail, ear, and hygiene upkeep.',
        },
        {
          title: 'Easy for busy owners',
          text: 'Simple plans, fast rebooking, and visit notes help pet parents stay consistent.',
        },
      ],
    },
    cardsSection: {
      id: 'services',
      eyebrow: 'Services',
      title: 'A service menu that feels easy to understand and easy to say yes to.',
      description:
        'These offers help a grooming business present clear packages while leaving room for coat-specific advice and recurring plans.',
      items: [
        {
          eyebrow: 'Signature bath',
          title: 'Freshen & Fluff Groom',
          text: 'A polished maintenance appointment for pets who need a full reset without a major coat transformation.',
          points: ['Warm bath', 'Brush-out and tidy finish', 'Nails, ears, paws, sanitary care'],
        },
        {
          eyebrow: 'Breed styling',
          title: 'Full Style Groom',
          text: 'Ideal for regular haircut maintenance, breed silhouettes, and pets who need a more tailored shape.',
          points: ['Style consultation', 'Clipper or scissor finish', 'Face and tail refinement'],
        },
        {
          eyebrow: 'Comfort care',
          title: 'Sensitive Skin Support',
          text: 'Designed for pets who need a calmer appointment rhythm and extra attention around skin or coat sensitivities.',
          points: ['Comfort-first pace', 'Sensitive coat products', 'Gentler handling notes'],
        },
      ],
    },
    stepsSection: {
      id: 'journey',
      eyebrow: 'Care journey',
      title: 'A calm visit flow that reassures pet parents from drop-off to pickup.',
      description:
        'The strongest pet-care pages do more than list services. They show owners how the visit feels and why their pet is in good hands.',
      items: [
        {
          title: 'Check in with care notes',
          text: 'Start with temperament, sensitivities, style goals, and anything that will help the appointment go smoothly.',
        },
        {
          title: 'Keep the pet comfortable',
          text: 'Use a gentler pacing and stress-aware handling style so even anxious pets can have a better experience.',
        },
        {
          title: 'Finish with a polished groom',
          text: 'Balance coat presentation with hygiene details that make the service feel worth repeating.',
        },
        {
          title: 'Send parents home informed',
          text: 'Close with notes, care reminders, and an easy path to rebook the next appointment.',
        },
      ],
    },
    showcaseSection: {
      id: 'trust',
      eyebrow: 'Trust & safety',
      title: 'The details that turn a cute pet brand into one owners genuinely trust.',
      description:
        'This section adds the operational reassurance that helps first-time visitors feel comfortable booking for a beloved pet.',
      items: [
        {
          eyebrow: 'Handling standards',
          title: 'Comfort-first care for nervous, young, or senior pets',
          text: 'The positioning is especially strong when the business wants to reassure owners around gentleness and patience.',
          points: ['Stress-aware pacing', 'Sensitive-pet fit', 'Owner reassurance'],
        },
        {
          eyebrow: 'Consistency',
          title: 'A visit experience people want to repeat',
          text: 'The page helps sell loyalty through notes, rebooking, and visible standards rather than price alone.',
          points: ['Repeat-booking fit', 'Visit notes', 'Service consistency'],
          accent: true,
        },
        {
          eyebrow: 'Brand value',
          title: 'Playful on the surface, professional where it matters',
          text: 'This concept is ideal for pet businesses that want stronger visual branding without losing operational trust.',
          points: ['Polished identity', 'Friendly tone', 'Premium-but-approachable feel'],
        },
      ],
    },
    testimonialsSection: {
      id: 'testimonials',
      eyebrow: 'Happy pet parents',
      title: 'Testimonials that reinforce gentleness, consistency, and premium care.',
      description:
        'For this category, believable reviews matter a lot. Owners want to know their animals will be handled kindly and come home looking great.',
      items: [
        {
          quote:
            'My dog is anxious at most groomers, but the team took their time and made the whole visit feel calmer than expected.',
          author: 'Erin W.',
          role: 'Dog parent',
        },
        {
          quote:
            'The groom always looks polished, but what keeps us coming back is how clearly they care about comfort and consistency.',
          author: 'Leo M.',
          role: 'Recurring client',
        },
        {
          quote:
            'The visit notes and easy rebooking make it feel like they are actually helping us stay on top of care, not just selling an appointment.',
          author: 'Jasmine R.',
          role: 'Puppy owner',
        },
      ],
    },
    pricingSection: {
      id: 'plans',
      eyebrow: 'Grooming plans',
      title: 'Friendly pricing tiers for first visits, regular upkeep, and premium care.',
      description:
        'These sample plans show how a pet-care brand can present clear options while still leaving room for size, coat type, and behavioral notes.',
      items: [
        {
          eyebrow: 'Starter',
          title: 'Bath + Tidy',
          price: 'From $55',
          text: 'A light-maintenance appointment for pets needing a polish between fuller grooming visits.',
          points: ['Bath and dry', 'Light trim', 'Nails and ears'],
        },
        {
          eyebrow: 'Most chosen',
          title: 'Full Groom',
          price: 'From $85',
          text: 'A complete style and hygiene appointment for pets on a more regular grooming rhythm.',
          points: ['Breed styling', 'Bath and finish', 'Rebooking-friendly'],
        },
        {
          eyebrow: 'Supportive care',
          title: 'Comfort Care Groom',
          price: 'From $105',
          text: 'A longer appointment for sensitive pets who need more time and gentler pacing.',
          points: ['Longer session', 'Comfort-first handling', 'Sensitive care notes'],
        },
      ],
    },
    faqSection: {
      id: 'faq',
      eyebrow: 'FAQ',
      title: 'Quick answers for the last questions before booking.',
      description:
        'A short FAQ helps reduce hesitation around fit, frequency, and nervous pets before the customer reaches out.',
      items: [
        {
          question: 'Can this work for nervous pets?',
          answer:
            'Yes. The concept is especially strong for comfort-first grooming businesses that want to reassure owners around handling and pace.',
        },
        {
          question: 'Does it support recurring care plans?',
          answer:
            'Absolutely. The structure is built to make repeat bookings and routine upkeep feel like the natural next step.',
        },
        {
          question: 'Is this only for grooming salons?',
          answer:
            'No. It can also support mobile groomers, boutique pet-care brands, and wellness-forward pet services.',
        },
        {
          question: 'Why does this page sell well?',
          answer:
            'Because it combines a lovable visual identity with the reassurance owners need before trusting a business with their pet.',
        },
      ],
    },
    ctaBanner: {
      title: 'Turn first-time visitors into loyal pet parents.',
      text:
        'Use this concept for grooming salons, boutique pet-care brands, or premium care services that want a friendlier but still polished sales experience.',
      primaryCta: { label: 'Choose a grooming plan', href: '#plans' },
      secondaryCta: { label: 'Call the care desk', href: 'tel:+15550123456' },
    },
  },
  {
    slug: 'zero-proof-beverage',
    shortName: 'Beverage',
    name: 'Zero-Proof / Functional Beverage Brand',
    category: 'Consumer Brand',
    positioning: 'Trend-driven',
    summary:
      'A vibrant product page for non-alcoholic drinks, adaptogenic blends, and performance hydration brands.',
    previewGradient: 'linear-gradient(135deg, #fff6a1, #ff9654 52%, #c33764)',
    theme: {
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
    },
    hero: {
      eyebrow: 'Zero-Proof / Functional Beverage',
      title: 'A social drink alternative with flavor, ritual, and enough edge to feel current.',
      description:
        'A vibrant product page for non-alcoholic drinks, adaptogenic blends, and functional beverage launches.',
      primaryCta: { label: 'Shop the variety pack', href: '#bundles' },
      secondaryCta: { label: 'See the flavor lineup', href: '#flavors' },
      heroVisual: {
        visualKey: 'zeroProof',
        badges: ['0g added sugar', 'Mood blends', 'Shelf appeal'],
      },
      metrics: [
        { value: '0g', label: 'added sugar across the core range' },
        { value: '3', label: 'functional blends for mood, focus, and unwind' },
        { value: '4.8/5', label: 'average rating from variety-pack buyers' },
      ],
      spotlight: [
        {
          title: 'Social energy',
          text: 'A grown-up alternative to alcohol that still feels celebratory, styled, and worth posting.',
        },
        {
          title: 'Function-first flavor',
          text: 'Botanicals, nootropics, and adaptogens are layered into bright, contemporary flavor stories.',
        },
        {
          title: 'Built for modern shelves',
          text: 'The concept supports strong hero storytelling, occasion-based merchandising, and easy bundle upsells.',
        },
      ],
    },
    cardsSection: {
      id: 'flavors',
      eyebrow: 'Flavor Lineup',
      title: 'Show the range in a way that feels lifestyle-led, not overly technical.',
      description:
        'These cans are positioned around mood, flavor, and real moments rather than supplement-style product copy.',
      items: [
        {
          eyebrow: 'Citrus Lift',
          title: 'Yuzu Spark',
          text: 'A bright yuzu, white peach, and green-tea-inspired blend for upbeat afternoons and clean social sipping.',
          points: ['L-theanine + lemon balm', 'Juicy citrus finish', 'Sunny brunch energy'],
        },
        {
          eyebrow: 'Berry Mood',
          title: 'Berry Bloom',
          text: 'Blackberry, tart cherry, and hibiscus create a richer sip for dinner parties and slower evenings.',
          points: ['Schisandra + tart cherry', 'Berry-led aroma', 'Soft layered finish'],
        },
        {
          eyebrow: 'Nightcap Alternative',
          title: 'Plum Velvet',
          text: 'A moodier can designed for end-of-day unwinding without the heaviness of alcohol.',
          points: ['Evening ritual positioning', 'Complex taste cues', 'Zero-proof depth'],
        },
      ],
    },
    stepsSection: {
      id: 'moments',
      eyebrow: 'Occasions + How To Drink',
      title: 'Show people how the can fits into real moments.',
      description:
        'Alcohol-free products convert better when the page paints the ritual. This turns the beverage into part of a lifestyle.',
      items: [
        {
          title: 'Open for the social reset',
          text: 'Position the drink as a cleaner way to stay included, celebratory, and present without alcohol.',
        },
        {
          title: 'Pour over ice when it needs more ceremony',
          text: 'Serving rituals help the can feel more premium and make the product easier to imagine at home.',
        },
        {
          title: 'Match flavor to mood',
          text: 'Different blends connect better when customers can see the emotional use case immediately.',
        },
        {
          title: 'Reorder for the ritual',
          text: 'The page should make repeat purchase feel natural once the product becomes part of hosting or unwinding.',
        },
      ],
    },
    showcaseSection: {
      id: 'story',
      eyebrow: 'Why It Sells',
      title: 'The ingredient story makes the brand feel current, premium, and easy to trust.',
      description:
        'Enough wellness logic to feel modern, without turning the page into a supplement lecture.',
      items: [
        {
          eyebrow: 'Taste first',
          title: 'Lead with flavor and finish before function takes over',
          text: 'The strongest beverage pages make people want the drink before they start evaluating the wellness angle.',
          points: ['Flavor-first conversion', 'Better first impression', 'Retail-ready storytelling'],
        },
        {
          eyebrow: 'Ritual second',
          title: 'Turn the can into part of hosting, unwinding, or daytime social energy',
          text: 'This lifestyle framing helps the product feel sticky and repeatable beyond a single curiosity order.',
          points: ['Occasion merchandising', 'Lifestyle resonance', 'Repeat-order support'],
          accent: true,
        },
        {
          eyebrow: 'Function third',
          title: 'Use the wellness logic to deepen trust, not dominate the brand',
          text: 'Adaptogens and nootropics work best here as a premium differentiator rather than the entire sales pitch.',
          points: ['Modern functional edge', 'Cleaner trust signal', 'Balanced brand story'],
        },
      ],
    },
    testimonialsSection: {
      id: 'testimonials',
      eyebrow: 'Testimonials',
      title: 'Customers buy the taste first, then stay for the ritual.',
      description:
        'The strongest proof in this category is emotional and situational: how it feels to host with it, unwind with it, and choose it again.',
      items: [
        {
          quote:
            'It is the first zero-proof can I have actually wanted to serve to friends instead of just keeping for myself.',
          author: 'Mara D.',
          role: 'Variety pack customer',
        },
        {
          quote:
            'The flavors feel adult and interesting, and the ritual of opening one at the end of the day actually stuck.',
          author: 'Kevin S.',
          role: 'Repeat subscriber',
        },
        {
          quote:
            'It feels current without trying too hard. The can design, the flavor, and the overall mood all make sense together.',
          author: 'Lina C.',
          role: 'Early customer',
        },
      ],
    },
    pricingSection: {
      id: 'bundles',
      eyebrow: 'Bundle Pricing',
      title: 'Simple pack sizes that make trial, gifting, and repeat orders easy.',
      description:
        'A clean pricing ladder gives the customer an obvious first purchase, then nudges them toward a higher-value mixed case or subscription.',
      items: [
        {
          eyebrow: 'Trial',
          title: '6-Can Starter Pack',
          price: '$18',
          text: 'A low-friction first order for customers trying the brand for the first time.',
          points: ['Mixed flavors', 'Gift-friendly', 'Easy first purchase'],
        },
        {
          eyebrow: 'Most chosen',
          title: '12-Can Variety Case',
          price: '$34',
          text: 'A broader entry point that helps shoppers find their favorite ritual faster.',
          points: ['Best flavor discovery', 'Better per-can value', 'Perfect for hosting'],
        },
        {
          eyebrow: 'Subscriber',
          title: 'Monthly Mixed Case',
          price: '$59',
          text: 'A repeat-order path designed for customers turning the drink into part of their regular lifestyle.',
          points: ['Recurring delivery', 'Save on each case', 'Flexible flavor updates'],
        },
      ],
    },
    faqSection: {
      id: 'faq',
      eyebrow: 'FAQ',
      title: 'Handle the questions that usually slow down the first order.',
      description:
        'A clear FAQ reassures customers on taste expectations, serving ideas, and subscription flexibility before they bounce.',
      items: [
        {
          question: 'Does this fit a functional beverage brand as well as a zero-proof brand?',
          answer:
            'Yes. The concept is built to support both positioning angles without forcing the product too far into either one.',
        },
        {
          question: 'Why does this page convert well?',
          answer:
            'Because it sells flavor and lifestyle first, then uses function and ingredient logic to strengthen trust rather than replace it.',
        },
        {
          question: 'Can it support subscriptions?',
          answer:
            'Absolutely. The bundle ladder is designed to make trial easy and then transition shoppers into recurring deliveries.',
        },
        {
          question: 'Will it still feel premium on mobile?',
          answer:
            'Yes. The structure stays visual, fast to scan, and strong for mobile shoppers arriving from ads or social.',
        },
      ],
    },
    ctaBanner: {
      title: 'Launch a zero-proof brand page with flavor, function, and real shelf appeal.',
      text:
        'Use this concept for zero-proof, adaptogenic, or lifestyle beverage brands that need a brighter, more modern DTC story.',
      primaryCta: { label: 'Start with this concept', href: '#bundles' },
      secondaryCta: { label: 'See the flavor lineup', href: '#flavors' },
    },
  },
  {
    slug: 'sustainable-dtc-brand',
    shortName: 'Eco DTC',
    name: 'Sustainable DTC Product Brand',
    category: 'Eco Brand',
    positioning: 'Eco premium',
    summary:
      'A clean, material-first landing page for refill systems, sustainable packaging, and conscious shopping brands.',
    previewGradient: 'linear-gradient(135deg, #f2ebdf, #a4b494 50%, #3f5b4b)',
    theme: {
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
      'highlight-text': '#f7f4ed',
      'accent-surface':
        'linear-gradient(180deg, rgba(79, 92, 71, 0.98), rgba(48, 56, 44, 0.96))',
      'accent-text': '#f7f4ed',
      'cta-gradient': 'linear-gradient(135deg, #4f5c47, #7e8b6e 50%, #2a3128)',
      'cta-text': '#f7f4ed',
      'page-heading-font': "'Fraunces', 'Times New Roman', serif",
    },
    hero: {
      eyebrow: 'Sustainable DTC Product Brand',
      title:
        'A materials-first landing page for refillable products that feel elevated, useful, and easy to keep buying.',
      description: 'A calm eco-premium concept for refillable products and repeatable rituals.',
      primaryCta: { label: 'Shop starter bundles', href: '#bundles' },
      secondaryCta: { label: 'Explore the refill system', href: '#refill-system' },
      heroVisual: {
        visualKey: 'sustainable',
        badges: ['Refill first', 'Material clarity', 'Eco premium'],
      },
      metrics: [
        { value: '87%', label: 'repeat orders driven by refill subscriptions' },
        { value: '-62%', label: 'less single-use packaging than conventional starter kits' },
        { value: '100%', label: 'ingredient and sourcing visibility on every SKU' },
      ],
      spotlight: [
        {
          title: 'Materials-first storytelling',
          text: 'Every detail is designed to make refill systems, packaging choices, and ingredient sourcing feel desirable instead of technical.',
        },
        {
          title: 'Eco premium, not rustic',
          text: 'Muted olive, oat, and charcoal build a calm luxury mood that still feels modern enough for DTC.',
        },
        {
          title: 'Built for conversion',
          text: 'The page balances brand story with a subscription path, social proof, and transparent pricing in the first few scrolls.',
        },
      ],
    },
    cardsSection: {
      id: 'value',
      eyebrow: 'Value Proposition',
      title: 'Designed to sell the object, the refill habit, and the reason behind both.',
      description:
        'The strongest sustainable product pages do not rely on guilt or vague claims. They show why the product looks beautiful, works well, and makes better choices over time.',
      items: [
        {
          eyebrow: 'Thoughtful Packaging',
          title: 'Refillable formats that still look giftable on a countertop',
          text: 'The hero vessel is designed as a keeper object, while replenishment arrives in low-waste refill packs that still feel premium.',
          points: ['Refill-first merchandising', 'Shelf-worthy hero packaging', 'Built for repeat purchase'],
        },
        {
          eyebrow: 'Ingredient Clarity',
          title: 'Simple formulas and sourcing customers can actually understand',
          text: 'The page leads with transparent materials, supply chain notes, and ingredient explanations instead of greenwashed language.',
          points: ['Ingredient-level visibility', 'Origin notes', 'Honest positioning'],
        },
        {
          eyebrow: 'Routine Appeal',
          title: 'A beautiful ritual customers want to keep buying into',
          text: 'The design positions the brand around everyday use, tactile pleasure, and small meaningful upgrades.',
          points: ['High repeat-purchase potential', 'Lifestyle-led art direction', 'Subscription-ready story'],
        },
      ],
    },
    stepsSection: {
      id: 'refill-system',
      eyebrow: 'Refill System',
      title: 'A three-step product story that makes repeat purchase feel natural.',
      description:
        'This section turns the mechanics of sustainability into a clean customer journey and gives the brand a stronger subscription foundation.',
      items: [
        {
          title: 'Start with the keeper vessel',
          text: 'The first purchase is framed as an object worth keeping, not disposable packaging.',
        },
        {
          title: 'Replenish with low-waste refills',
          text: 'Make the refill step feel intuitive, attractive, and more efficient than starting over each time.',
        },
        {
          title: 'Build the everyday ritual',
          text: 'Tie the system to daily usefulness so sustainability is reinforced by convenience and beauty.',
        },
        {
          title: 'Stay through subscription',
          text: 'Repeat purchase becomes easier when the refill path feels better, simpler, and more obvious than alternatives.',
        },
      ],
    },
    showcaseSection: {
      id: 'materials',
      eyebrow: 'Materials Story',
      title: 'Show every component with the same care as the hero product.',
      description:
        'Thoughtful sustainable brands win when they explain materials clearly and visually. These panels help the brand feel honest, tactile, and distinct.',
      items: [
        {
          eyebrow: 'Component design',
          title: 'The packaging should feel like part of the product value',
          text: 'The brand wins when the materials look intentional enough to justify being kept, displayed, and reused.',
          points: ['Tactile value', 'Countertop appeal', 'Design credibility'],
        },
        {
          eyebrow: 'Transparency',
          title: 'Make sustainability measurable, legible, and believable',
          text: 'Clear sourcing notes and specific tradeoffs help the brand feel more trustworthy than vague environmental claims.',
          points: ['Clear reporting', 'Specific sourcing details', 'Believable sustainability story'],
          accent: true,
        },
        {
          eyebrow: 'Repeat revenue',
          title: 'Support both first orders and the refill habit',
          text: 'The page is structured to make the first purchase easy and the ongoing subscription path even easier.',
          points: ['Starter bundle logic', 'Subscription fit', 'Retention-friendly flow'],
        },
      ],
    },
    testimonialsSection: {
      id: 'testimonials',
      eyebrow: 'Customer Voice',
      title: 'Social proof for shoppers who care about both design and values.',
      description:
        'These testimonials reinforce the strongest conversion themes: good taste, easy refills, and sustainability claims that feel grounded.',
      items: [
        {
          quote:
            'I bought it because the packaging looked beautiful, but I stayed because the refill system is actually easy to live with.',
          author: 'Carla N.',
          role: 'Subscriber',
        },
        {
          quote:
            'It feels thoughtful without feeling preachy. The materials and ingredient explanations make the whole brand more credible.',
          author: 'Megan R.',
          role: 'First-time customer',
        },
        {
          quote:
            'This is the rare eco product that still feels elevated enough to leave out on the counter.',
          author: 'Theo J.',
          role: 'Repeat shopper',
        },
      ],
    },
    pricingSection: {
      id: 'bundles',
      eyebrow: 'Bundles & Subscription',
      title: 'Simple pricing that supports both first orders and repeat revenue.',
      description:
        'A good DTC page gives customers a low-friction starting point, a better-value middle option, and a subscription path that strengthens lifetime value.',
      items: [
        {
          eyebrow: 'Starter',
          title: 'Single Starter Kit',
          price: '$32',
          text: 'A first-purchase bundle with the reusable vessel and enough product to begin the ritual.',
          points: ['Hero product', 'Starter quantity', 'Easy entry point'],
        },
        {
          eyebrow: 'Most chosen',
          title: 'Starter + Refill Pair',
          price: '$54',
          text: 'A stronger-value bundle that immediately teaches the refill behavior and builds retention momentum.',
          points: ['Better bundle value', 'Refill education', 'Gift-worthy option'],
        },
        {
          eyebrow: 'Subscriber',
          title: 'Auto-Refill Plan',
          price: '$24 / refill',
          text: 'A recurring option for customers ready to make the product part of their regular routine.',
          points: ['Subscription savings', 'Easy skip or swap', 'Best long-term value'],
        },
      ],
    },
    faqSection: {
      id: 'faq',
      eyebrow: 'FAQ',
      title: 'Answer sustainability questions before they become checkout friction.',
      description:
        'This keeps the brand transparent and helpful while reassuring visitors that the refill system is easy to understand and even easier to keep using.',
      items: [
        {
          question: 'Can this work for more than one kind of product?',
          answer:
            'Yes. The structure also fits refillable beauty, personal care, pantry staples, home care, or any DTC concept with a materials-led story.',
        },
        {
          question: 'What if the sustainability story is still evolving?',
          answer:
            'That is fine. The concept supports honest progress, tradeoffs, and next steps more effectively than pretending the brand is already perfect.',
        },
        {
          question: 'Why does this concept convert?',
          answer:
            'Because it sells the product object, the refill habit, and the reason behind both in one clean journey instead of splitting them apart.',
        },
        {
          question: 'Is this strong for subscription brands?',
          answer:
            'Very. The refill system and pricing ladder are intentionally built to support repeat purchase and stronger retention.',
        },
      ],
    },
    ctaBanner: {
      title: 'Launch a sustainable DTC page that feels calm, premium, and conversion-ready.',
      text:
        'Use this concept for refillable beauty, home care, pantry products, or any brand that wants to sell better materials without sacrificing visual appeal.',
      primaryCta: { label: 'Use this brand concept', href: '#bundles' },
      secondaryCta: { label: 'Review the refill system', href: '#refill-system' },
    },
  },
]

const generatedConfigList = generatedLandingPages.map(
  (page) => generatedLandingPageConfigs[page.slug],
)

const dynamicLandingPageConfigList = [
  ...originalLandingPageConfigList,
  ...generatedConfigList,
]

export const dynamicLandingPages = dynamicLandingPageConfigList.map(
  ({
    slug,
    shortName,
    name,
    category,
    positioning,
    summary,
    previewGradient,
  }) => ({
    slug,
    shortName,
    name,
    category,
    positioning,
    summary,
    previewGradient,
  }),
)

export const dynamicLandingPageConfigs = Object.fromEntries(
  dynamicLandingPageConfigList.map((config) => [config.slug, config]),
)
