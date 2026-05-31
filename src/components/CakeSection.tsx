import './CakeSection.css'

export default function CakeSection() {
  return (
    <section className="section cake-section" id="cake" aria-label="Birthday Cake">
      <div className="container cake-inner">
        {/* Visual */}
        <div className="cake-art">
          <div className="cake-sparkles" aria-hidden="true">
            {[...Array(6)].map((_, i) => (
              <span key={i} className={`ck-sparkle ck-sparkle-${i}`}>✦</span>
            ))}
          </div>
          <img
            src="/images/melissa-birthday/princess-castle-cake-10.png"
            alt="Melissa's three-tier princess castle birthday cake decorated with a gold crown and 10 candles"
            className="cake-photo"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Copy */}
        <div className="cake-copy">
          <h2 className="section-title-editorial cake-title">The <strong>Royal Cake</strong> Moment</h2>
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
