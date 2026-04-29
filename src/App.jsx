import { Navigate, Route, Routes } from 'react-router-dom'
import { DemoHome, SiteLayout } from './components/SiteLayout.jsx'
import { landingPages } from './data/landingPages.js'
import AIAutomationAgencyPage from './pages/AIAutomationAgencyPage.jsx'
import BeautyAestheticClinicPage from './pages/BeautyAestheticClinicPage.jsx'
import WellnessSupplementBrandPage from './pages/WellnessSupplementBrandPage.jsx'
import WomensHealthFemtechPage from './pages/WomensHealthFemtechPage.jsx'
import CreatorStudioPage from './pages/CreatorStudioPage.jsx'
import HomeCleaningServicePage from './pages/HomeCleaningServicePage.jsx'
import LandscapingHomeImprovementPage from './pages/LandscapingHomeImprovementPage.jsx'
import PetGroomingCarePage from './pages/PetGroomingCarePage.jsx'
import ZeroProofBeveragePage from './pages/ZeroProofBeveragePage.jsx'
import SustainableDtcBrandPage from './pages/SustainableDtcBrandPage.jsx'

const pageComponents = {
  'ai-automation-agency': AIAutomationAgencyPage,
  'beauty-aesthetic-clinic': BeautyAestheticClinicPage,
  'wellness-supplement-brand': WellnessSupplementBrandPage,
  'womens-health-femtech': WomensHealthFemtechPage,
  'creator-studio': CreatorStudioPage,
  'home-cleaning-service': HomeCleaningServicePage,
  'landscaping-home-improvement': LandscapingHomeImprovementPage,
  'pet-grooming-care': PetGroomingCarePage,
  'zero-proof-beverage': ZeroProofBeveragePage,
  'sustainable-dtc-brand': SustainableDtcBrandPage,
}

function RoutedPage({ slug }) {
  const Component = pageComponents[slug]
  return Component ? <Component /> : <Navigate to="/" replace />
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout pages={landingPages} />}>
        <Route index element={<DemoHome pages={landingPages} />} />
        {landingPages.map((page) => (
          <Route
            key={page.slug}
            path={page.slug}
            element={<RoutedPage slug={page.slug} />}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default App
