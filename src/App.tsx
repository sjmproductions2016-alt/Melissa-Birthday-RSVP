import { useState, useRef } from 'react'
import IntroScreen from './components/IntroScreen'
import Hero from './components/Hero'
import EventDetails from './components/EventDetails'
import Countdown from './components/Countdown'
import RSVPForm from './components/RSVPForm'
import SignatureWall from './components/SignatureWall'
import CakeSection from './components/CakeSection'
import Menu from './components/Menu'
import GiftIdeas from './components/GiftIdeas'
import Venue from './components/Venue'
import PhotoSection from './components/PhotoSection'
import Footer from './components/Footer'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleEnter = (withMusic: boolean) => {
    if (withMusic && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Audio unavailable or file missing — site continues normally
      })
    }
    setShowIntro(false)
  }

  return (
    <>
      <audio ref={audioRef} loop preload="none" aria-hidden="true">
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {showIntro && <IntroScreen onEnter={handleEnter} />}

      <main
        id="main-content"
        className={`main-content ${showIntro ? 'main-hidden' : 'main-visible'}`}
        aria-label="Melissa's 10th Birthday Celebration"
      >
        <Hero />
        <EventDetails />
        <Countdown />
        <RSVPForm />
        <SignatureWall />
        <CakeSection />
        <Menu />
        <GiftIdeas />
        <Venue />
        <PhotoSection />
        <Footer />
      </main>
    </>
  )
}

export default App
