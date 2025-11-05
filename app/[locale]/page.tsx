import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TrendingReels from '@/components/TrendingReels'
import About from '@/components/About'
import Trust from '@/components/Trust'
import Services from '@/components/Services'
import WillTrust from '@/components/WillTrust'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <TrendingReels />
      <About />
      <Trust />
      <Services />
      <WillTrust />
      <Contact />
      <Footer />
    </main>
  )
}

