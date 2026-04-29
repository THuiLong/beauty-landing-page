import { Navigate, Route, Routes } from 'react-router-dom'
import { DemoHome, SiteLayout } from './components/SiteLayout.jsx'
import { landingPages } from './data/landingPages.js'
import { dynamicLandingPageConfigs } from './data/dynamicLandingPages.js'
import GeneratedLandingPage from './pages/GeneratedLandingPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout pages={landingPages} />}>
        <Route index element={<DemoHome pages={landingPages} />} />
        {landingPages.map((page) => {
          const config = dynamicLandingPageConfigs[page.slug]

          return (
            <Route
              key={page.slug}
              path={page.slug}
              element={
                config ? <GeneratedLandingPage config={config} /> : <Navigate to="/" replace />
              }
            />
          )
        })}
      </Route>
    </Routes>
  )
}

export default App
