import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import CollectionSection from '@/components/CollectionSection'
import RewardsSection from '@/components/RewardsSection'
import MapSection from '@/components/MapSection'
import HowToCollectSection from '@/components/HowToCollectSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CollectionSection />
        <RewardsSection />
        <MapSection />
        <HowToCollectSection />
      </main>
      <Footer />
    </div>
  )
}