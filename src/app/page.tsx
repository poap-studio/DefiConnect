import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import CollectionSection from '@/components/CollectionSection'
import RewardsSection from '@/components/RewardsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <RewardsSection />
        <CollectionSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}