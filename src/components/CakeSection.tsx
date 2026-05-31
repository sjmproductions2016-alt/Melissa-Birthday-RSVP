import './CakeSection.css'

export default function CakeSection() {
  return (
    <section className="section cake-section" id="cake" aria-label="Birthday Cake">
      <div className="container cake-inner">
        {/* Visual */}
        <div className="cake-art" aria-label="Decorative princess birthday cake illustration" role="img">
          {/* Sparkle ring */}
          <div className="cake-sparkles" aria-hidden="true">
            {[...Array(8)].map((_, i) => (
              <span key={i} className={`ck-sparkle ck-sparkle-${i}`}>✦</span>
            ))}
          </div>

          {/* Crown topper */}
          <div className="cake-crown" aria-hidden="true">👑</div>

          {/* Candles */}
          <div className="cake-candles" aria-hidden="true">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`candle candle-${i % 3}`}>
                <span className="flame" />
              </div>
            ))}
          </div>

          {/* Top layer — gold */}
          <div className="cake-layer layer-top">
            <div className="frosting frosting-top" />
            <div className="layer-body layer-gold">
              <div className="layer-studs" aria-hidden="true">
                {[...Array(4)].map((_, i) => <span key={i} className="stud" />)}
              </div>
            </div>
          </div>

          {/* Middle layer — pink */}
          <div className="cake-layer layer-mid">
            <div className="frosting frosting-mid" />
            <div className="layer-body layer-pink" />
          </div>

          {/* Bottom layer — purple */}
          <div className="cake-layer layer-bottom">
            <div className="frosting frosting-bottom" />
            <div className="layer-body layer-purple" />
          </div>

          {/* Brick base */}
          <div className="cake-base" aria-hidden="true" />
        </div>

        {/* Copy */}
        <div className="cake-copy">
          <span className="section-crown" aria-hidden="true">🎂</span>
          <h2 className="section-title cake-title">The Royal Cake Moment</h2>
          <p className="cake-text">
            The royal cake moment is where the whole kingdom gathers to sing, sparkle,
            and celebrate Melissa turning 10.
          </p>
          <p className="cake-text">
            Three glorious layers of birthday perfection — topped with a golden crown,
            10 glowing candles, and enough magic to last a lifetime.
          </p>
          <div className="cake-menu-note">
            <span aria-hidden="true">🍦</span>
            <span>Birthday cake & ice cream served for all royal guests</span>
          </div>
        </div>
      </div>
    </section>
  )
}
