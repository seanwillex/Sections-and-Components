import NavBar from './components/NavBar'
import InteractiveHero from './components/InteractiveHero'
import TextCarouselSection from './components/TextCarouselSection'
import PlanTripSection from './components/PlanTripSection'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a12]">
      <NavBar />
      <InteractiveHero />
      <TextCarouselSection />
      <div className="py-20">
        <PlanTripSection />
      </div>
    </div>
  )
}

export default App