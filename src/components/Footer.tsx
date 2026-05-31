import './Footer.css'

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container footer-inner">
        {/* Crown + title */}
        <div className="footer-title-block">
          <span className="footer-crown" aria-hidden="true">👑</span>
          <p className="footer-title">Melissa's 10th Birthday</p>
          <p className="footer-tagline">A Princess Brick-Building Adventure</p>
        </div>

        {/* Details row */}
        <div className="footer-details">
          <span className="footer-detail">
            <span aria-hidden="true">📅</span>
            October 10, 2026
          </span>
          <span className="footer-sep" aria-hidden="true">·</span>
          <span className="footer-detail">
            <span aria-hidden="true">👑</span>
            Hosted by Robin
          </span>
          <span className="footer-sep" aria-hidden="true">·</span>
          <span className="footer-detail">
            <span aria-hidden="true">📬</span>
            RSVP by September 8, 2026
          </span>
        </div>

        {/* CTA */}
        <button className="btn-gold footer-rsvp-btn" onClick={() => scrollTo('rsvp')}>
          <span aria-hidden="true">📬</span>
          RSVP Now
        </button>

        {/* Fine print */}
        <p className="footer-fine">Made for family and friends with love ✦</p>
      </div>
    </footer>
  )
}
