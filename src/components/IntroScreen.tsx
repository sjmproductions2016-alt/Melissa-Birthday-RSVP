import { useState } from 'react'
import './IntroScreen.css'

interface IntroScreenProps {
  onEnter: (withMusic: boolean) => void
}

const SPARKLES = [
  { x: '6%',  y: '9%',  delay: '0s',    dur: '2.8s' },
  { x: '18%', y: '4%',  delay: '0.4s',  dur: '3.2s' },
  { x: '30%', y: '14%', delay: '0.9s',  dur: '2.5s' },
  { x: '44%', y: '6%',  delay: '0.2s',  dur: '3.6s' },
  { x: '58%', y: '11%', delay: '1.1s',  dur: '2.9s' },
  { x: '70%', y: '5%',  delay: '0.6s',  dur: '3.4s' },
  { x: '82%', y: '16%', delay: '1.4s',  dur: '2.6s' },
  { x: '93%', y: '8%',  delay: '0.3s',  dur: '3.1s' },
  { x: '4%',  y: '50%', delay: '1.6s',  dur: '2.7s' },
  { x: '96%', y: '55%', delay: '0.7s',  dur: '3.3s' },
  { x: '12%', y: '70%', delay: '1.0s',  dur: '2.4s' },
  { x: '88%', y: '72%', delay: '1.8s',  dur: '3.7s' },
  { x: '50%', y: '85%', delay: '0.5s',  dur: '2.9s' },
  { x: '35%', y: '75%', delay: '1.3s',  dur: '3.0s' },
  { x: '65%', y: '80%', delay: '2.0s',  dur: '2.8s' },
  { x: '25%', y: '40%', delay: '0.8s',  dur: '4.0s' },
  { x: '75%', y: '38%', delay: '1.5s',  dur: '3.5s' },
  { x: '55%', y: '50%', delay: '0.1s',  dur: '2.6s' },
  { x: '42%', y: '28%', delay: '2.2s',  dur: '3.8s' },
  { x: '8%',  y: '28%', delay: '1.7s',  dur: '3.1s' },
]

const BRICKS = [
  { x: '4%',  y: '28%', color: '#E91E8C', w: '52px', h: '26px', delay: '0s',   dur: '4.2s', rot: '-8deg'  },
  { x: '84%', y: '22%', color: '#FFD700', w: '38px', h: '20px', delay: '0.8s', dur: '3.8s', rot: '14deg'  },
  { x: '8%',  y: '62%', color: '#8B2FC4', w: '64px', h: '26px', delay: '1.3s', dur: '5.0s', rot: '6deg'   },
  { x: '80%', y: '58%', color: '#F06292', w: '44px', h: '20px', delay: '0.4s', dur: '4.6s', rot: '-13deg' },
  { x: '90%', y: '78%', color: '#FFD700', w: '56px', h: '26px', delay: '1.7s', dur: '4.0s', rot: '9deg'   },
  { x: '2%',  y: '78%', color: '#E91E8C', w: '48px', h: '20px', delay: '2.1s', dur: '4.4s', rot: '-5deg'  },
  { x: '45%', y: '78%', color: '#A855D4', w: '42px', h: '20px', delay: '0.6s', dur: '3.6s', rot: '11deg'  },
]

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  const [exiting, setExiting] = useState(false)

  const handleEnter = (withMusic: boolean) => {
    setExiting(true)
    setTimeout(() => onEnter(withMusic), 750)
  }

  return (
    <div
      className={`intro-screen${exiting ? ' intro-exiting' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Melissa's 10th Birthday Celebration"
    >
      {/* Star sparkles */}
      <div className="intro-sparkles" aria-hidden="true">
        {SPARKLES.map((s, i) => (
          <span
            key={i}
            className="intro-sparkle"
            style={{
              left: s.x,
              top: s.y,
              animationDelay: s.delay,
              animationDuration: s.dur,
            }}
          />
        ))}
      </div>

      {/* Floating bricks */}
      <div aria-hidden="true">
        {BRICKS.map((b, i) => (
          <div
            key={i}
            className="intro-brick"
            style={{
              left: b.x,
              top: b.y,
              width: b.w,
              height: b.h,
              backgroundColor: b.color,
              animationDelay: b.delay,
              animationDuration: b.dur,
              transform: `rotate(${b.rot})`,
            }}
          >
            <span className="intro-brick-stud" />
            <span className="intro-brick-stud" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="intro-content">
        <div className="intro-crown" aria-hidden="true">👑</div>
        <p className="intro-invite">You are cordially invited to</p>
        <h1 className="intro-title">
          Melissa's Magical<br />
          <span className="intro-num">10th</span> Birthday
        </h1>
        <p className="intro-tagline">A Princess Brick-Building Adventure</p>
        <div className="intro-meta">
          <span>✨ October 10, 2026</span>
          <span className="intro-sep" aria-hidden="true">·</span>
          <span>3:00 PM</span>
          <span className="intro-sep" aria-hidden="true">·</span>
          <span>LEGO Discovery Center, Atlanta</span>
        </div>

        <div className="intro-buttons">
          <button
            className="intro-btn intro-btn-music"
            onClick={() => handleEnter(true)}
          >
            <span aria-hidden="true">♪</span>
            Enter With Music
          </button>
          <button
            className="intro-btn intro-btn-quiet"
            onClick={() => handleEnter(false)}
          >
            Enter Without Music
          </button>
        </div>

        <p className="intro-deadline">RSVP deadline: September 8, 2026</p>
      </div>

      {/* Castle silhouette */}
      <div className="intro-castle" aria-hidden="true">
        <div className="castle-side-tower castle-tower-l">
          <div className="castle-merlons" />
        </div>
        <div className="castle-wing castle-wing-l" />
        <div className="castle-keep">
          <div className="castle-merlons castle-keep-merlons" />
          <div className="castle-arch" />
        </div>
        <div className="castle-wing castle-wing-r" />
        <div className="castle-side-tower castle-tower-r">
          <div className="castle-merlons" />
        </div>
      </div>
    </div>
  )
}
