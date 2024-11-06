import BannerSection from './components/BannerSection'
import PlanTripSection from './components/PlanTripSection'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a12]">
      <BannerSection />
      <div className="py-20">
        <PlanTripSection />
      </div>
    </div>
  )
}

export default App