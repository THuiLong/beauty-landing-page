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
import {
  AIAgencyVisual,
  BeautyClinicVisual,
  CleaningVisual,
  CreatorStudioVisual,
  LandscapingVisual,
  PetCareVisual,
  SustainableVisual,
  WellnessVisual,
  WomensHealthVisual,
  ZeroProofVisual,
} from '../components/landing/HeroVisuals.jsx'

const visualMap = {
  ai: AIAgencyVisual,
  beauty: BeautyClinicVisual,
  cleaning: CleaningVisual,
  creator: CreatorStudioVisual,
  landscaping: LandscapingVisual,
  pet: PetCareVisual,
  sustainable: SustainableVisual,
  wellness: WellnessVisual,
  womensHealth: WomensHealthVisual,
  zeroProof: ZeroProofVisual,
}

function GeneratedLandingPage({ config }) {
  const {
    theme,
    hero,
    cardsSection,
    stepsSection,
    showcaseSection,
    testimonialsSection,
    pricingSection,
    faqSection,
    ctaBanner,
  } = config
  const heroVisual = resolveHeroVisual(hero.heroVisual)

  return (
    <PageFrame
      theme={theme}
      eyebrow={hero.eyebrow}
      title={hero.title}
      description={hero.description}
      primaryCta={hero.primaryCta}
      secondaryCta={hero.secondaryCta}
      heroVisual={heroVisual}
      metrics={hero.metrics}
      spotlight={hero.spotlight}
    >
      {cardsSection ? (
        <Section
          id={cardsSection.id}
          eyebrow={cardsSection.eyebrow}
          title={cardsSection.title}
          description={cardsSection.description}
        >
          <CardGrid items={cardsSection.items} />
        </Section>
      ) : null}

      {stepsSection ? (
        <Section
          id={stepsSection.id}
          eyebrow={stepsSection.eyebrow}
          title={stepsSection.title}
          description={stepsSection.description}
        >
          <StepsGrid items={stepsSection.items} />
        </Section>
      ) : null}

      {showcaseSection ? (
        <Section
          id={showcaseSection.id}
          eyebrow={showcaseSection.eyebrow}
          title={showcaseSection.title}
          description={showcaseSection.description}
        >
          <ShowcaseGrid items={showcaseSection.items} />
        </Section>
      ) : null}

      {testimonialsSection ? (
        <Section
          id={testimonialsSection.id}
          eyebrow={testimonialsSection.eyebrow}
          title={testimonialsSection.title}
          description={testimonialsSection.description}
        >
          <QuoteGrid items={testimonialsSection.items} />
        </Section>
      ) : null}

      {pricingSection ? (
        <Section
          id={pricingSection.id}
          eyebrow={pricingSection.eyebrow}
          title={pricingSection.title}
          description={pricingSection.description}
        >
          <PricingGrid items={pricingSection.items} />
        </Section>
      ) : null}

      {faqSection ? (
        <Section
          id={faqSection.id}
          eyebrow={faqSection.eyebrow}
          title={faqSection.title}
          description={faqSection.description}
        >
          <FaqGrid items={faqSection.items} />
        </Section>
      ) : null}

      {ctaBanner ? (
        <CtaBanner
          title={ctaBanner.title}
          text={ctaBanner.text}
          primaryCta={ctaBanner.primaryCta}
          secondaryCta={ctaBanner.secondaryCta}
        />
      ) : null}
    </PageFrame>
  )
}

function resolveHeroVisual(heroVisual) {
  if (!heroVisual) {
    return undefined
  }

  if (heroVisual.content) {
    return heroVisual
  }

  const VisualComponent = heroVisual.visualKey
    ? visualMap[heroVisual.visualKey]
    : null

  if (!VisualComponent) {
    return heroVisual
  }

  return {
    ...heroVisual,
    content: <VisualComponent />,
  }
}

export default GeneratedLandingPage
