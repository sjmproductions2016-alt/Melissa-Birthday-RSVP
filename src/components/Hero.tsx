import './Hero.css'

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section className="hero" id="welcome" aria-label="Welcome">
      {/* Background sparkles */}
      <div className="hero-stars" aria-hidden="true">
        {[...Array(18)].map((_, i) => (
          <span key={i} className={`hero-star hero-star-${(i % 5) + 1}`} />
        ))}
      </div>

      <div className="container hero-inner">
        {/* Left: headline + CTAs */}
        <div className="hero-text">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-gem" aria-hidden="true">💎</span>
            Milestone Birthday Celebration
          </p>

          <h1 className="hero-headline">
            Melissa's Magical<br />
            <span className="hero-headline-accent">10th Birthday</span><br />
            Build-A-Royal Celebration
          </h1>

          <p className="hero-sub">
            Join us for a princess-powered brick adventure filled with pizza, cake,
            music, laughter, and birthday magic.
          </p>

          <div className="hero-quick-details">
            <div className="hero-detail-pill">
              <span aria-hidden="true">📅</span>
              October 10, 2026
            </div>
            <div className="hero-detail-pill">
              <span aria-hidden="true">🕒</span>
              3:00 PM
            </div>
            <div className="hero-detail-pill">
              <span aria-hidden="true">📍</span>
              LEGO Discovery Center, Atlanta
            </div>
          </div>

          <div className="hero-ctas">
            <button className="btn-gold hero-cta-primary" onClick={() => scrollTo('rsvp')}>
              <span aria-hidden="true">👑</span>
              RSVP Now
            </button>
            <button className="btn-outline hero-cta-secondary" onClick={() => scrollTo('wishes')}>
              <span aria-hidden="true">⭐</span>
              Leave a Birthday Wish
            </button>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="hero-illustration">
          <div className="hero-portrait-wrap">
            <div className="hero-portrait-frame">
              <img
                src="/images/melissa-birthday/melissa-princess-portrait.png"
                alt="Melissa dressed as a princess for her 10th birthday celebration"
                className="hero-portrait"
                loading="eager"
                decoding="async"
              />
            </div>
            {/* Floating bricks around portrait */}
            <div className="hc-bricks" aria-hidden="true">
              <div className="hc-brick hc-brick-pink" />
              <div className="hc-brick hc-brick-gold" />
              <div className="hc-brick hc-brick-purple" />
              <div className="hc-brick hc-brick-pink2" />
            </div>
            <span className="hc-star hc-star-1" aria-hidden="true">✦</span>
            <span className="hc-star hc-star-2" aria-hidden="true">✦</span>
            <span className="hc-star hc-star-3" aria-hidden="true">✦</span>
          </div>
        </div>
      </div>
    </section>
  )
}
